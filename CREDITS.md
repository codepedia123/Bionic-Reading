# Credits

## Original Chrome extension

**The** **ori**ginal **Chr**ome **exten**sion **cod**e **cam**e **fro**m [vzakharov/bionic-reading-extension](https://github.com/vzakharov/bionic-reading-extension), **cre**ated **by** **Vov**a **Zak**harov. **Tha**nk **you** **for** **rel**easing **the** **ori**ginal **wor**k **as** **ope**n-sou**rce** **sof**tware.

**The** **ada**pted **exten**sion **con**tinues **to** **inc**lude **the** **ori**ginal **MIT** **lic**ense **at** `chrome-extension/LICENSE`.

## What was updated here

- **Mig**rated **the** **exten**sion **fro**m **Man**ifest V2 **to** **Man**ifest V3 **for** **cur**rent **Chr**ome **compa**tibility.
- **Add**ed **a** **Man**ifest V3 **ser**vice **wor**ker, **too**lbar **act**ion, **and** **glo**bal `Alt+B` **com**mand.
- **Add**ed **per**sistent **glo**bal **sta**te **wi**th `chrome.storage.local` **so** **new** **pag**es **inh**erit **the** **sel**ected **mod**e.
- **Add**ed **broa**dcasting **to** **upd**ate **alr**eady-**op**en **tab**s **whe**n **the** **sta**te **cha**nges.
- **Add**ed **sup**port **for** **emb**edded **fra**mes **and** `about:blank` **fra**mes **whe**re **Chr**ome **all**ows **con**tent **scr**ipts.
- **Add**ed **a** `MutationObserver` **so** **sin**gle-**pag**e **app**s **and** **dyn**amically **loa**ded **con**tent **are** **pro**cessed **aft**er **the** **ini**tial **pag**e **loa**d.
- **Rep**laced **stri**ng-bas**ed** HTML **ins**ertion **wi**th **DOM** **nod**e **cre**ation **to** **avo**id **inj**ecting **untr**usted **pag**e **tex**t **as** **mar**kup.
- **Add**ed **Uni**code-awa**re** **wor**d **mat**ching **and** **bet**ter **prese**rvation **of** **punc**tuation, **apo**strophes, **and** **hyp**hens.
- **Add**ed **exc**lusions **for** **for**ms, **edi**tors, **cod**e, **scr**ipts, **sty**les, **SVG**, **Mat**hML, **and** **oth**er **con**tent **tha**t **sho**uld **not** **be** **rew**ritten.
- **Add**ed **a** **rev**ersible **tog**gle **tha**t **res**tores **the** **ori**ginal **tex**t **whe**n **Bio**nic **Rea**ding **is** **dis**abled.
- **Upd**ated **the** **def**ault **fix**ation **rat**io **to** `60%` **and** **the** **min**imum **fix**ation **wei**ght **to** `700`.

## Font credit

**The** `Bionic Sans` **fon**ts **in** **thi**s **rep**ository **are** **der**ived **fro**m **Ado**be's **Source Sans 3**. **The**y **are** **dist**ributed **und**er **the** **SIL Open Font License 1.1**, **incl**uded **at** `fonts/LICENSE.md`.
