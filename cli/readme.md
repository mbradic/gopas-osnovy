# Osnovy CLI (Command Line Interface)

Nástroj na automatizaci práce s osnovami.

## Použití

Z kořenového adresáře spustě na příkazové řádce následující příkaz:

```powershell
node cli <příkaz> [<parametry>] [<přepínače>]
```

## Výpisy a exporty

Zobrazí nebo uloží strukturovaný seznam kurzů

```powershell
node cli list [<adresář>] [--lang <jazyk>] [--out <soubor>]
```

| Parametr / přepínač | Popis |
|-|-|
| `<adresář>` | Cesta k adresáři s osnovami. Výchozí je současný adresář. |
| `--lang <jazyk>` | Filtr pro jazyk. Výchozí je CZ. |
| `--out <soubor>` | Exportovat do json souboru. |

## Kontrola

Zkontroluje, zda kurzy splňují požadovaná pravidla. Seznam pravidel naleznete [zde](linting-rules.md).

```powershell
node cli lint [<adresář>] [--fix]
```

| Parametr / přepínač | Popis |
|-|-|
| `<adresář>` | Cesta k adresáři s osnovami. Výchozí je současný adresář. |
| `--fix` | Chybu současně i opraví. |
