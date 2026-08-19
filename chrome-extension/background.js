async function toggleBionicReading() {
  const { bionicEnabled = false } = await chrome.storage.local.get('bionicEnabled');
  const enabled = !bionicEnabled;
  await chrome.storage.local.set({ bionicEnabled: enabled });
  const tabs = await chrome.tabs.query({});
  await Promise.allSettled(tabs.map(tab => {
    if (!tab.id) return Promise.resolve();
    return chrome.tabs.sendMessage(tab.id, { type: 'BIONIC_SET_ENABLED', enabled });
  }));
}

chrome.action.onClicked.addListener(() => toggleBionicReading());
chrome.commands.onCommand.addListener(async command => {
  if (command !== 'toggle-bionic-reading') return;
  await toggleBionicReading();
});
