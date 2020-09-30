# Robot Party - IT2810 Prosjekt 2
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.idi.ntnu.no/#https://gitlab.stud.idi.ntnu.no/it2810-h20/team-13/it2810-prosjekt-2) 

## Introduksjon

### Tema

Tema for websiden er "utstilling", og vi har valgt å stille ut 5 dansende roboter. Denne utstillingen er parametrisert i form av at man kan endre fargetema til robotene og hastighet på dansetrinnene deres. Man kan også velge mellom tre ulike musikklåter. Websiden vil gi deg en personlig hilsen hvis du legger inn navnet ditt, og dette navnet kan endres.

### React

Applikasjonen er implementert med Typescript i React, og ble initialisert via Typescript templaten til [create-react-app](https://create-react-app.dev/docs/adding-typescript/). Oppgaven hadde som krav om at alle komponentene skulle implementeres fra bunnen av, og vi har derfor ikke brukt noen tredjepartsbibliotek.

Applikasjonen består av både klassekomponenter og funksjonelle komponenter, som oppgaven krevde. Vi har lagt størst fokus på bruk av funksjonelle komponenter, men `App.tsx` og `DisplayPoetry.tsx` er klassebaserte komponenter.

Det var også krav om å bruke props, state og Context API'et. Props og State blir tatt i bruk i flere funksjonelle komponenter og i klassekomponenten `DisplayPoetry.tsx`. Context brukes i `Radio.tsx` for å sende "state" videre ned i hierarkiet til Canvas-komponentene.


## Kodestruktur

    src
    ├── components
    ├─────── canvas
    ├─────── carousel
    ├─────── context
    ├─────── music
    ├─────── poetry
    ├─────── radio
    └─────── storage

1.  **`/components`**: Inneholder alle komponentene vi har implementert i appen.
2.  **`/components/canvas`**: Inneholder 5 Canvas-komponenter som tegner ulike robotanimasjoner. Tar inn "speed" og "color" via Context, som brukes til å endre hastighet på dans/farge på roboter.
3.  **`/components/carousel`**: Inneholder slideshow-komponenten `Carousel.tsx`, slide-komponenten `Slide.tsx`, i tillegg til deres tilhørende tester og css-filer.
4.  **`/components/context`**: Inneholder fila `RadioContext.tsx`, som initialiserer "context" som brukes i `Radio.tsx`.
5.  **`/components/music`**: Inneholder `Music.tsx` og en css-fil for musikkslideren, en mappe `media` som inneholder lydfilene og en mappe `symbols` som inneholder symbolene for play, pause og høyttalere.
6.  **`/components/poetry`**: Inneholder komponenten for å "fetche" dikt, `DisplayPoetry.tsx`, i tillegg til dens tilhørende test og css-fil.
7.  **`/components/radio`**: Inneholder komponenten som lager radioknappene for hastighet, farge og musikk, `Radio.tsx`, i tillegg til dens tilhørende test og css-fil.
8.  **`/components/storage`**: Inneholder fila `JsonStorage.tsx` som definerer funksjoner for å hente/lagre verdier i local/sessionstorage. Inneholder også to funksjonelle komponenter `ChangeName.tsx` og `PresentName.tsx`, med deres tilhørende tester og css-filer. Disse komponentene brukes til å hhv. endre navnet til brukeren og vise introduksjon øverst på siden.

## Løsning

### Slideshow-komponent

Komponenten `Carousel.tsx` lager selve slideshowet, og gjør det mulig å bla fram og tilbake mellom de ulike utstillingene. `Carousel.tsx` tar inn en liste med React-komponenter som barn (må ha minst to for å gjøre det mulig å bytte mellom dem), slik at hver slide er en egen komponent, der kun en er synlig om gangen. Dette gjør det enklere å modifisere innhold i slidene. Hver slide-komponent består av en animasjon i Canvas og et dikt. `Carousel.tsx` er basert på [denne tutorialen fra medium.com](https://medium.com/octopus-wealth/creating-a-carousel-in-react-e45918738212), der koden er forenklet og tilpasset til våre behov.

### Animasjon
Vi har valgt å lage animasjonene i HTML Canvas. Hver enkel animasjon ligger i sin egen fil og blir vist gjennom en felles komponent som heter `Slide.tsx`

### Ajax
Diktene hentes fra PoetryDB ved bruk av JavaScript sitt innebygde Fetch API. Vi bruker fetch for å hente diktet i JSON-format før den blir konvertert og lagret i state for videre bruk.

### Musikk
Audio-taggen i HTML5 brukes for å håndtere musikken. Kilden til musikken styres av en variabel som endres når man trykker på radio-knappene. Controls-attributtet har blitt deaktivert og vi har laget egne funksjoner for stoppe/starte musikken og endring av volum. Dette ble gjort for å hindre at man skal kunne søke i musikken, men fremdeles kunne få kontroll over musikken. Det gjør også at vi kan tilpasse designet til siden.

## HTML Web Storage

Løsningen tar i bruk både _localstorage_ og _sessionstorage_. Det er implementert fire funksjoner for å ta i bruk dette. Disse er alle definert i `JsonStorage.tsx`. Funksjonene baserer seg på bruk av dictionaries/objekter, `JSON.Parse()`og `JSON.Stringify()`. Dette legger til rette for at man kan lagre andre typer enn "string" under en nøkkel, som vi trenger for å blant annet lagre variabelen "speed".

Når funksjonene som begynner på _getJson_ kalles, vil objektet med gitt nøkkel hentes fra local/session-storage, eller initialisere et nytt, tomt objekt dersom det ikke fins et objekt med denne nøkkelen. Funksjonene som begynner på _setJson_ vil oppdatere/overskrive et objekt som er lagret på en bestemt nøkkel. 

### Localstorage

Localstorage brukes til å lagre navnet til brukeren, som blir benyttet i en velkomst øverst på websiden. Du kan legge til eller endre et navn ved å trykke på toggle-knappen "Endre navn", som vil gjøre en komponent som består av et input-felt med en lagreknapp synlig.

### Sessionstorage

Sessionstorage brukes for å lagre informasjon om valgt state for radioknappene som bestemmer hastighet og farge. Altså vil valgkombinasjonen for hastighet og farge være den samme selv om man f.eks. oppdaterer siden.

## Responsive Web Design

Webapplikasjonen vår har et responsivt design som skalerer seg etter skjermstørrelse og enhetstyper. Under utvikling av prosjektet så har vi hatt en "mobile-first" approach. Dette går ut på at vi starter med å designe layouten på mobil før vi tilpasser enheter med større skjerm. Det har ført til en effektiv utvikling med færre feil.

Videre så har vi valgt å ta i bruk CSS flexbox for å få en flytende layout. På større skjermer så vil diktet og animasjonen ligge som en rad ved siden av hverandre, men vil kollapse og ligge under hverandre når skjermen blir mindre. Vi kombinerer bruken av flexbox med media queries  slik at layouten er bedre tilrettelagt for portrett- og landskap-orientasjon. Media queries gjør det enklere å skreddersy style sheeten til mobile enheter.

Bildene skalerer seg i størrelse ved hjelp av media queries breakpoints og viewport. Viewport brukes ved at den defineres i meta-tagen:

```html
<meta name="viewport" content="width=device-width, intial-scale=1" />
```
Dette gir muligheten til å bruke CSS properties som `vh` og `vw`.


## Testing

Vi har implementert snapshot-testing i Jest for alle komponenter som returnerer noe, med unntak av `Head.tsx` og `Footer.tsx`. Vi har til sammen 8 av disse testene.

Vi har testet selve applikasjonen i nettleserene _Google Chrome_ (v. 85.0), _Opera_ (v. 71.0), _Safari_ (v. 14.0), _Firefox_ (v.81.0), _Edge_ (v. 85.0)

For å teste brukergrensesnittet og responsiv design så har vi brukt utviklerverktøyet i _Google Chrome_ og _Firefox_. Det gir oss muligheten til å visualisere nettsiden på ulike enheter med mindre skjermer, blant annet mobile enheter, med vertikal og horisontal orientering.

Vi har testet på 3 ulike enheter: Macbook Pro, Acer Aspire 5 og iPhone 11 (vertikal+horisontal). 


## Git/GitLab

For versjonshåndtering og samarbeidsplatform så har vi brukt Git og GitLab. Oppgaver har blitt delt opp og lagt under issues på GitLab. Commits markeres med `#issue-nummer` etterhvert som de løses. Vi følger [GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html) for håndtering av branch etter beste praksis.

Vi navngir komponenter og variabler på engelsk. Navngiving følger case stylen PascalCase. Vi har kommentert på norsk der det er fornuftig.







