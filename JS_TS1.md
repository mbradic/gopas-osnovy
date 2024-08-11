# GOC2124 - Jazyk C# - programování I

Pokud jste si oblíbili JavaScript, ale chybí vám typové deklarace a statická kontrola jejich konsistence, TypeScript je to správné rožíření JS pro vás. Naučíme vás jak základní koncepty typových definic, tak i pokročilé koncepty jako jsou exhaustvness check klauzule či typová aritmetika.

#### Délka

3 dny

#### Graf návazností

```mermaid
graph TD
    JS_ADV --> JS_TS1
```

#### Pro koho je kurz určen

Kurz je určen pro vývojáře v Jazyce JavaScript, kteří se chtějí naučit využívat typescript pro statickou typovou kontrolu JavaScript kódu. Předpokládá se, že studenti budou umět JavaScript na úrovni kurzu [JS_ADV]

#### Co Vás naučíme

- základní datové typy, včetně any, uknown a never
- enumerace
- objektové typy
- union a intersection typy
- funkcionální typy
- třídy a rozhraní

#### Požadované vstupní znalosti

- JavaScript na úrovni kurzu [JS_ADV]

#### Metody výuky

- Odborný výklad s praktickými ukázkami, cvičení na počítačích.

#### Studijní materiály

- Prezentace probírané látky v tištěné nebo online formě

#### Osnova kurzu

Úvod

- Co je TypeScript
- Vývojové prostředí
- Compiler a jeho konfigurace

Typový systém TypeScriptu

- Typové anotace
- co je strukturální typový systém
- primitivní typy
  - null a undefined
  - any, unknown, never
  - BigInt a Symbol
- typové aliasy
- Objektové typy
  - pole
  - intersekce
- hodnotové (literal) typy
- enumerace

Zužování typů (narrowing)

- přiřazení hodnoty
- typeof jako type guard
- zužování operátorem ===
- operátor in
- operátor instanceof
- typové predikáty
- typové aserce
- typ never a kontrola úplnosti (exhaustiveness check)

Typové anotace funkcí

- parametry a návratové hodnoty, typ void
- generické funkce
- overloading
- Knihovny a typ “unknown”

OOP

- Třídy, vlastnosti a konstruktory
- Rozhraní
- Dědičnost
- Zapouzdření
- Overriding
- Statické metody
- Generické třídy

Typová aritmetika

- Generické typy
- keyof
- typeof v typové definici
- indexer v typové definici
- podmíněné typování
- mapované typy
