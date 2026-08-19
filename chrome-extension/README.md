# Chrome extension installation

**Thi**s **Man**ifest V3 **exten**sion **app**lies **Bio**nic **Rea**ding **fix**ation **pre**fixes **to** **nor**mal **web** **pag**es, **emb**edded **fra**mes, **and** **dyn**amically **loa**ded **con**tent.

## Install from this repository

1. **Dow**nload **or** **clo**ne **thi**s **rep**ository.
2. **Op**en `chrome://extensions` **in** **Chr**ome.
3. **Ena**ble **Dev**eloper **mod**e **in** **the** **top**-**rig**ht **cor**ner.
4. **Cli**ck **Loa**d **unpa**cked.
5. **Sel**ect **the** `chrome-extension` **fol**der **fro**m **thi**s **rep**ository.
6. **Pin** **Bio**nic **Rea**ding **fro**m **the** **Chr**ome **exten**sions **men**u **if** **you** **wan**t **a** **vis**ible **too**lbar **but**ton.

## Use

**Cli**ck **the** **too**lbar **ico**n **or** **pre**ss `Alt+B` **to** **tog**gle **Bio**nic **Rea**ding **glo**bally. **The** **sta**te **is** **sav**ed, **upd**ates **alr**eady-**op**en **tab**s, **and** **is** **app**lied **to** **new** **tab**s **whe**n **the**y **loa**d.

**To** **cha**nge **the** **key**board **sho**rtcut, **op**en `chrome://extensions/shortcuts` **and** **edi**t **the** **Bio**nic **Rea**ding **com**mand.

## Configure

**Edi**t `settings.js` **to** **cha**nge **the** **fix**ation **rat**io **or** **min**imum **bol**d **wei**ght:

```js
const settings = Object.freeze({
  boldnessCutoff: 0.6,
  minimumFontWeight: 700
});
```

**Aft**er **cha**nging **the** **fil**e, **ret**urn **to** `chrome://extensions` **and** **cli**ck **Rel**oad **on** **the** **exten**sion **car**d.

## Chrome restrictions

**Chr**ome **does** **not** **all**ow **con**tent **scr**ipts **to** **mod**ify **prot**ected **pag**es **suc**h **as** `chrome://` **pag**es, **the** **Chr**ome **Web** **Sto**re, **or** **the** **bui**lt-**in** PDF **vie**wer. **Thi**s **is** **a** **bro**wser **secu**rity **res**triction, **not** **an** **exten**sion **err**or.

## License and credits

**The** **exten**sion **is** **bas**ed **on** [vzakharov/bionic-reading-extension](https://github.com/vzakharov/bionic-reading-extension). **See** [../CREDITS.md](../CREDITS.md) **for** **the** **ful**l **cre**dit **and** **upd**ate **his**tory, **and** `LICENSE` **for** **the** **MIT** **lic**ense.
