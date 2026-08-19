(() => {
  const WRAPPER_CLASS = 'bionic-reading-word';
  const SKIPPED_ELEMENTS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'INPUT', 'SELECT', 'OPTION', 'BUTTON', 'CODE', 'PRE', 'KBD', 'SAMP', 'SVG', 'MATH', 'CANVAS']);
  let enabled = false;
  let observer = null;
  let processing = false;

  function canProcess(node) {
    const parent = node.parentElement;
    if (!parent || !node.nodeValue || !/\p{L}/u.test(node.nodeValue)) return false;
    if (parent.closest(`.${WRAPPER_CLASS}`)) return false;
    if (SKIPPED_ELEMENTS.has(parent.tagName) || parent.closest('[contenteditable="true"]')) return false;
    const style = getComputedStyle(parent);
    return style.display !== 'none' && style.visibility !== 'hidden';
  }

  function makeBionicFragment(text) {
    const fragment = document.createDocumentFragment();
    const segments = text.split(/([\p{L}\p{M}\p{N}]+(?:['’\u2010-][\p{L}\p{M}\p{N}]+)*)/gu);
    for (const segment of segments) {
      if (!/\p{L}/u.test(segment)) {
        fragment.append(document.createTextNode(segment));
        continue;
      }
      const characters = Array.from(segment);
      const fixationLength = Math.max(1, Math.ceil(characters.length * settings.boldnessCutoff));
      const wrapper = document.createElement('span');
      wrapper.className = WRAPPER_CLASS;
      wrapper.dataset.originalText = segment;
      const fixation = document.createElement('span');
      fixation.style.fontWeight = String(settings.minimumFontWeight);
      fixation.textContent = characters.slice(0, fixationLength).join('');
      wrapper.append(fixation, document.createTextNode(characters.slice(fixationLength).join('')));
      fragment.append(wrapper);
    }
    return fragment;
  }

  function processTextNode(node) {
    if (canProcess(node)) node.replaceWith(makeBionicFragment(node.nodeValue));
  }

  function processRoot(root) {
    if (!root || processing) return;
    processing = true;
    try {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) if (canProcess(walker.currentNode)) nodes.push(walker.currentNode);
      nodes.forEach(processTextNode);
    } finally {
      processing = false;
    }
  }

  function restore() {
    document.querySelectorAll(`.${WRAPPER_CLASS}`).forEach(wrapper => {
      wrapper.replaceWith(document.createTextNode(wrapper.dataset.originalText || wrapper.textContent));
    });
    document.body?.normalize();
  }

  function startObserver() {
    observer = new MutationObserver(mutations => {
      if (!enabled || processing) return;
      for (const mutation of mutations) {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) processTextNode(node);
          else if (node.nodeType === Node.ELEMENT_NODE && !node.matches(`.${WRAPPER_CLASS}`)) processRoot(node);
        });
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  function setEnabled(nextEnabled) {
    enabled = Boolean(nextEnabled);
    observer?.disconnect();
    observer = null;
    if (enabled) {
      processRoot(document.body);
      startObserver();
    } else restore();
    document.documentElement.dataset.bionicReadingEnabled = String(enabled);
  }

  chrome.runtime.onMessage.addListener(message => {
    if (message?.type === 'BIONIC_SET_ENABLED') setEnabled(message.enabled);
  });
  chrome.storage.local.get({ bionicEnabled: false }, result => setEnabled(result.bionicEnabled));
})();
