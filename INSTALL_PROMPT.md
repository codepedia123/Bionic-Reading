# Copy-paste installation prompt

**Cop**y **the** **ent**ire **pro**mpt **bel**ow **and** **pas**te **it** **int**o **Cod**ex, **Cla**ude **Cod**e, **or** **ano**ther **loc**al **cod**ing **age**nt. **The** **age**nt **wil**l **ask** **for** **one** **conf**irmation, **inst**all **the** **sel**ected **comp**onents, **ver**ify **the** **res**ult, **and** **exp**lain **the** **fin**al **UI** **act**ions **tha**t **req**uire **you**r **inp**ut.

```text
Install Bionic Reading end to end from this repository:
https://github.com/codepedia123/Bionic-Reading

Goal
- Enable the repository's Bionic Reading instructions for Codex, Claude Code, or both.
- Optionally install the bundled Bionic Sans font family.
- Optionally prepare the bundled Chrome extension for unpacked installation.
- Preserve all existing user configuration and report every change.

Default selections
- Agents: both Codex and Claude Code.
- Scope: global user configuration.
- Font: install Bionic Sans and recommend 16 px.
- Browser: prepare the Chrome extension.

Before making changes
1. Detect the operating system and current shell.
2. Inspect whether Codex, Claude Code, Chrome, Git, and the relevant configuration directories exist.
3. Show the detected environment and the four default selections above.
4. Ask for one compact confirmation that lets me accept the defaults or change the agents, scope, font installation, or Chrome-extension installation.
5. Explain that I may need to perform these final actions myself:
   - Fully quit and reopen Codex, Claude Code, and/or the terminal.
   - Import a Codex appearance theme and set the UI font size.
   - Select a terminal font for Claude Code.
   - Enable Chrome Developer mode and choose Load unpacked.
6. Do not request or expose API keys, passwords, tokens, or unrelated credentials.

Safety requirements
- Do not overwrite an existing AGENTS.md or CLAUDE.md.
- Before modifying an existing instruction file, create a timestamped backup beside it.
- Add the BIONIC READING FOR CHAT RESPONSES section only when that exact heading is not already present.
- Preserve all unrelated instructions exactly.
- Use user-level installation paths; do not use administrator or sudo access unless I explicitly approve it.
- Do not delete repositories, configuration directories, fonts, extensions, or backups.
- Download only from https://github.com/codepedia123/Bionic-Reading or its raw.githubusercontent.com content URLs.
- Prefer cloning or downloading into a temporary directory, then copy only the required verified files into stable installation locations.
- Stop and explain the problem if the operating system, destination, repository identity, or existing configuration is ambiguous.

Instruction installation
- Use the repository's AGENTS.md as the exact source for Codex instructions.
- Use the repository's CLAUDE.md as the exact source for Claude Code instructions.
- For global Codex installation on macOS or Linux, use ~/.codex/AGENTS.md.
- For global Codex installation on Windows, use $env:USERPROFILE\.codex\AGENTS.md.
- For project-scoped Codex installation, use AGENTS.md at the selected project root.
- For global Claude Code installation on macOS or Linux, use ~/.claude/CLAUDE.md.
- For global Claude Code installation on Windows, use $env:USERPROFILE\.claude\CLAUDE.md.
- For project-scoped Claude Code installation, use CLAUDE.md at the selected project root.
- Create a missing parent directory safely.
- If a destination file does not exist, copy the corresponding repository file exactly.
- If it exists, append the exact source section after a blank line without changing the existing content.
- Verify that the installed section is byte-for-byte identical to its repository source and occurs exactly once.

Font installation
- Follow FONT_SETUP.md, but install from the files in the verified local repository checkout instead of downloading the font binaries a second time.
- Install BionicSans-Regular.ttf and BionicSans-Bold.otf for the current user only.
- On macOS, install them into ~/Library/Fonts.
- On Windows, install them into the current user's Microsoft\Windows\Fonts directory and create the required HKCU font-registration entries.
- On Linux, install the agent instructions normally, but explain that the bundled font workflow is documented only for macOS and Windows; ask before using a distribution-specific user font directory.
- Do not replace different existing fonts silently. If Bionic Sans is already installed, compare file hashes and ask before replacing a different version.
- Verify that the operating system recognizes the family name exactly as Bionic Sans.
- Explain that the bundled regular face uses Source Sans 3 weight 375 outlines and the bold face uses weight 900 outlines.

Appearance configuration
- For Codex, use the exact dark-theme import from FONT_SETUP.md and set the UI font size to 16 px.
- If direct Codex UI control is available and authorized, apply those settings. Otherwise, give me the exact import string and the shortest click-by-click instructions.
- For Claude Code, do not claim that it has the Codex Appearance tab. Tell me to select Bionic Sans at 16 px in the terminal application that displays Claude Code.
- Ask before closing or restarting any running application.

Chrome-extension installation
- Copy the repository's chrome-extension directory into a stable user-level location that will not disappear when the temporary checkout is removed.
- On macOS, prefer ~/Library/Application Support/Bionic-Reading/chrome-extension.
- On Windows, prefer $env:LOCALAPPDATA\Bionic-Reading\chrome-extension.
- Validate manifest.json as JSON and verify that the referenced JavaScript files exist.
- If safe browser-control tooling is available, open chrome://extensions. Do not bypass Chrome security prompts.
- Otherwise, tell me to open chrome://extensions, enable Developer mode, click Load unpacked, and select the exact stable extension directory.
- Explain that Chrome blocks extensions on chrome:// pages, the Chrome Web Store, and other protected pages.

Verification and final report
- Verify every created or modified path.
- Verify that Codex and Claude Code instruction files contain exactly one Bionic Reading section.
- Verify the installed font filenames, hashes, family name, and regular/bold faces when font tools are available.
- Verify the Chrome extension manifest and JavaScript syntax when suitable tools are available.
- Keep the temporary checkout if removing it would also remove the prepared Chrome extension; otherwise, ask before cleaning it up.
- End with a concise report containing:
  1. What was installed.
  2. Exact files and directories changed.
  3. Backup paths created.
  4. Verification results.
  5. The remaining actions I must perform myself.
  6. How to uninstall or restore from the backups.
```

## What you need to provide

- **Con**firm **whe**ther **you** **wan**t **Cod**ex, **Cla**ude **Cod**e, **or** **bot**h.
- **Con**firm **glo**bal **or** **pro**ject-on**ly** **inst**allation.
- **App**rove **use**r-lev**el **wri**tes **to** **age**nt, **fon**t, **and** **appl**ication-sup**port** **dire**ctories.
- **Dec**ide **whe**ther **to** **inst**all **the** **cus**tom **fon**t **and** **Chr**ome **exten**sion.
- **Ful**ly **reo**pen **the** **aff**ected **app**s **whe**n **the** **age**nt **ask**s.
- **Comp**lete **the** **Cod**ex **Appe**arance **imp**ort **and** **Chr**ome **Loa**d **unpa**cked **dia**log **if** **the** **age**nt **can**not **saf**ely **ope**rate **tho**se **UI** **ste**ps.
