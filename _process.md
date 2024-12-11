# Procesy zavádění změn do katalogu

## Velikost změny

1. Malá změna
1.1. Oprava překlepu, hrubky, chyby, nebo
1.2. Změna v osnově jediného kurzu který učí jen jeden lektor a nemění délku, nebo návaznosti kurzu
*(tohle je ta nejrychlejší dráha, GopasIS, commit do repa, hotovo)*

2. Střední změna - změna v osnově jediného kurzu, který učí více lektorů a která nemění délku kurzu, nebo návaznosti
*(tohle je taky řešitelný bez release větve, dávám to sem proto že je to příležitost využít to repo pro sdílení,připomínkování a správu verzí návrhu - dávám na zvážení)*

3. Velká změna - změna která:
3.1. Se týká více kurzů, nebo
3.2. Mění délku jednoho nebo více kurzů, nebo
3.3. Mění návaznosti mezi kurzy

## Role

1. Autor - lektor který podává návrh na změnu
2. Produktový manažér (PM)
3. Oponenti - lektoři kteří učí kurz kterého se změna týka

## Artefakty

1. Návrh na změnu - vytváří Autor, identifikuje kurz či kurzy kterých se změna týka a obsahuje popis změny.
2. Připomínka - vytváří Oponent, identifikuje návrh a problím s nívrhem. Nepovině obsahuje návrh řešení problému.
*(chceme formalizovat způsob nebo formát, třeba .md? Autor rovnou upraví md v repu? Nebo chceš nechat tak, že ti to každý lektor bude hlásit jak chce?)*

## Proces zavedení malé změny

Role: Autor, PM

1. Autor předá návrh na z měnu PMovi *(řekne mu to na chodbě, pošle email...)*
2. PM upraví data v .md fajlu a udělá commit do develop větve
3. PM upraví data v GopasIS
4. PM notifikuje autora? *(tohle by šlo automatizovat tak, že by autor měl přístup do repa a repo by ho notifikovalo když uděláš ten commit.)*
5. PM hlída web že tam změna probublala? A pak notifikuje autora? Autor si to hlídá sám? *(kdyžtak umím automatizovat)*

## Proces zavedení střední změny

Role: Autor, PM

1. Autor podá návrh na změnu PMovi *(příležitost - když bude mít autor přístup k původnímu md, může udělat změnu tam, a případně to rovnou commitnout, nebo ti to poslat mailem, ty copypaste, commit, hotovo)*
2. PM vyhodnotí návrh a v případě že:

2.1. jej schválí, tak:
2.1.1. *(V případě že už to neudělal autor - viz bod 1)* Eviduje návrh v repu
2.1.1. Vybere oponenty a předá jim návrh *(příležitost - pokud by měli přístup do repa, stačí notifikace)*
2.1.2. Oponenti vytvoří připomínky a předají je PMovi *(dotaz - jak dlouho typicky čekáš na reakci, než usoudíš že je to bez připomínek?)*
2.1.3. PM přepošle připomínky autorovy *(opět, lze automatizovat, pokud by i připomínky byly v repu. Případně by oponenti mohli rovnou vytvářet nové verze?)*
2.1.4. Autor zapracuje připomínky do návrhu? *(opět, pokud to neudělali už oponenti)*
2.1.5. *(tady by se daly řešit konflikty, ale nezacházel bych v poopisu procesu do takových podrobností)*
2.1.6. PM posoudí finální návrh

2.2. jej zamítne, tak:
2.2.1. Notifikuje autora.
