# Pravidla pro osnovy

| Id | Popis | Oprava |
|-|-|-|
| 1 | Název souboru ve kterém je osnova musí končit mezerou následovanou kódem jazyka. | Uživateli je nabídnut seznam kódů jazyka. Nástroj přidá mezeru a zvolený kód jazyka na konec souboru. V případě, že název souboru již končí mezerou, nástroj další mezeru před kód jazyka dávat nebude. |
| 2 | První řádek osnovy obsahuje správně formátované záhlaví. Záhlaví musí být správně formátovamý markdown nadpis 1. úrovně (začínat "# "). | Nástroj přidá textový řetězec "# " na začátek prvního řádku osnovy. V případě že řádek mezerou již začíná, nástroj další mezeru za křížek přidávat nebude. |
| 3 | Žádný řádek osnovy nesmí obsahovat mezery na záčtku ani na konci. | Nástroj smaže mezery na začátku a na konci řádku. |
