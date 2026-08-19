![Uploading Screenshot 2026-08-19 at 9.27.55 AM.png…]()

# Bionic Reading for AI coding agents

**Thi**s **ope**n-sou**rce** **rep**ository **ena**bles **den**se, **hig**h-con**trast** **Bio**nic **Rea**ding **in** **Cod**ex **and** **Cla**ude **Cod**e **cha**t **resp**onses. **It** **gui**des **the** **rea**der's **eye** **usi**ng **bol**d **fix**ation **pre**fixes **whi**le **kee**ping **the** **rem**aining **lett**ers **lig**hter.

## Included files

- `AGENTS.md` — **Bio**nic **Rea**ding **inst**ructions **for** **Cod**ex.
- `CLAUDE.md` — **the** **sam**e **inst**ructions **for** **Cla**ude **Cod**e.
- `FONT_SETUP.md` — **rec**ommended **Cod**ex **set**tings **and** **cus**tom **fon**t **inst**allation **for** **macOS** **and** **Win**dows.
- `chrome-extension/` — **a** **Man**ifest V3 **Chr**ome **exten**sion **tha**t **app**lies **Bio**nic **Rea**ding **to** **nor**mal **web** **pag**es.
- `CREDITS.md` — **ori**ginal **exten**sion **attri**bution **and** **a** **bre**akdown **of** **the** **upd**ated **cod**e.
- `fonts/` — **the** **cus**tom `Bionic Sans` **fam**ily **wi**th `375` **reg**ular **out**lines **and** `900` **bol**d **out**lines.

## Use in an existing project

**Cop**y `AGENTS.md` **to** **the** **roo**t **of** **a** **pro**ject **use**d **wi**th **Cod**ex. **Cop**y `CLAUDE.md` **to** **the** **roo**t **of** **a** **pro**ject **use**d **wi**th **Cla**ude **Cod**e. **Whe**n **usi**ng **bot**h **age**nts, **kee**p **bot**h **fil**es.

## Improve the visual contrast

**Sta**rt **wi**th **a** `16 px` **UI** **fon**t **siz**e **and** `Tahoma` **as** **the** **UI** **fon**t. **For** **a** **muc**h **stro**nger **reg**ular-versus-**bol**d **diff**erence, **inst**all **the** **incl**uded `Bionic Sans` **fam**ily **usi**ng [FONT_SETUP.md](FONT_SETUP.md), **reo**pen **Cod**ex, **and** **sel**ect `Bionic Sans` **in** **the** **Appe**arance **tab**.

## How it works

**The** **age**nt **ret**urns **nor**mal **Mar**kdown **wi**th **eac**h **wor**d's **fix**ation **pre**fix **ins**ide **bol**d **mar**kers. **Cod**ex **or** **Cla**ude **Cod**e **rend**ers **tha**t **Mar**kdown **wi**thout **requ**iring **an** **API**, **bro**wser **exten**sion, **or** **run**time **dep**endency.

## Chrome extension

**To** **app**ly **the** **sam**e **rea**ding **sty**le **to** **web** **pag**es, **fol**low **the** **unpa**cked-in**stallation** **gui**de **in** [chrome-extension/README.md](chrome-extension/README.md). **The** **exten**sion **can** **be** **tog**gled **fro**m **the** **too**lbar **or** **wi**th `Alt+B`.

## License

**The** `Bionic Sans` **fon**ts **are** **der**ived **fro**m **Ado**be's **Source Sans 3** **and** **rem**ain **cov**ered **by** **the** **SIL Open Font License 1.1**. **See** `fonts/LICENSE.md` **for** **det**ails.

**The** **Chr**ome **exten**sion **is** **bas**ed **on** [vzakharov/bionic-reading-extension](https://github.com/vzakharov/bionic-reading-extension) **and** **is** **dist**ributed **und**er **its** **MIT** **lic**ense. **See** [CREDITS.md](CREDITS.md) **for** **ful**l **attri**bution **and** **the** **upd**ate **sum**mary.
