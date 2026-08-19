# Font setup for stronger Bionic Reading contrast

## Recommended built-in setup

**In** **Cod**ex, ( also applicable for Claude Code ) **op**en **Set**tings → **Appe**arance, **set** **the** **UI** **fon**t **siz**e **to** `16 px`, **and** **set** **the** **UI** **fon**t **to**:

```text
Tahoma
```

## Maximum-contrast custom font

`Bionic Sans` **use**s **Source Sans 3** `375` **out**lines **for** **reg**ular **tex**t **and** `900` **out**lines **for** **bol**d **tex**t. **The** **fac**es **are** **map**ped **as** **stan**dard **Reg**ular **and** **Bol**d **so** **cha**t **Mar**kdown **sel**ects **the** **ext**reme **wei**ghts **auto**matically. ( applicable for both Codex and Claude Code )

### macOS installation

**Op**en **Ter**minal **and** **run** **the** **ent**ire **blo**ck:

```bash
set -e
font_dir="$HOME/Library/Fonts"
font_base_url="https://raw.githubusercontent.com/codepedia123/Bionic-Reading/main/fonts"
mkdir -p "$font_dir"
curl -fL "$font_base_url/BionicSans-Regular.ttf" -o "$font_dir/BionicSans-Regular.ttf"
curl -fL "$font_base_url/BionicSans-Bold.otf" -o "$font_dir/BionicSans-Bold.otf"
```

**Ful**ly **qui**t **and** **reo**pen **Cod**ex. **The** **exa**ct **fon**t **nam**e **to** **ent**er **in** **Set**tings → **Appe**arance → **UI** **fon**t **is**:

```text
Bionic Sans
```

### Windows installation

**Op**en **Pow**erShell **and** **run** **the** **ent**ire **blo**ck. **Thi**s **inst**alls **the** **fon**ts **for** **the** **cur**rent **Win**dows **use**r **wit**hout **requ**iring **admi**nistrator **acc**ess.

```powershell
$ErrorActionPreference = "Stop"
$fontDirectory = Join-Path $env:LOCALAPPDATA "Microsoft\Windows\Fonts"
$fontRegistry = "HKCU:\Software\Microsoft\Windows NT\CurrentVersion\Fonts"
$fontBaseUrl = "https://raw.githubusercontent.com/codepedia123/Bionic-Reading/main/fonts"
New-Item -ItemType Directory -Force -Path $fontDirectory | Out-Null

$fonts = @(
    @{ File = "BionicSans-Regular.ttf"; Name = "Bionic Sans Regular (TrueType)" },
    @{ File = "BionicSans-Bold.otf"; Name = "Bionic Sans Bold (OpenType)" }
)

foreach ($font in $fonts) {
    $destination = Join-Path $fontDirectory $font.File
    Invoke-WebRequest -Uri "$fontBaseUrl/$($font.File)" -OutFile $destination
    New-ItemProperty -Path $fontRegistry -Name $font.Name -Value $destination -PropertyType String -Force | Out-Null
}
```

**Ful**ly **qui**t **and** **reo**pen **Cod**ex. **The** **exa**ct **fon**t **nam**e **to** **ent**er **in** **Set**tings → **Appe**arance → **UI** **fon**t **is**:

```text
Bionic Sans
```

## Codex dark-theme import

**Aft**er **inst**alling **the** **fon**t, **imp**ort **thi**s **the**me **fro**m **the** **Appe**arance **tab**:

```text
codex-theme-v1:{"codeThemeId":"codex","theme":{"accent":"#0169cc","contrast":77,"fonts":{"code":null,"ui":"\"Bionic Sans\""},"ink":"#ffffff","opaqueWindows":false,"semanticColors":{"diffAdded":"#00a240","diffRemoved":"#e02e2a","skill":"#b06dff"},"surface":"#111111"},"variant":"dark"}
```

**Kee**p **the** **UI** **fon**t **siz**e **at** `16 px`; **fon**t **siz**e **is** **a** **sep**arate **Cod**ex **set**ting **and** **is** **not** **sto**red **ins**ide **the** **the**me **imp**ort.
