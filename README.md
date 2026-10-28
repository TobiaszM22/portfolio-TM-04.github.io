# Tobiasz Mazur — portfolio rekrutacyjne

Kompletna statyczna strona HTML/CSS/JavaScript — bez Reacta, npm i instalacji. Pełna nawigacja, 5 osobnych podstron, EN/PL z zapamiętywaniem ustawienia, interaktywne demonstracje i responsywny układ.

## Szybki start
Otwórz `index.html` w przeglądarce. Wszystkie linki do podstron mają względne ścieżki i działają też w GitHub Pages.

## Publikacja GitHub Pages (bez folderu .github)
1. Rozpakuj ZIP.
2. Wgraj do głównego katalogu repozytorium **zawartość folderu** (nie sam folder ZIP): `index.html`, `projekty/`, `assets/`.
3. Wejdź w Settings → Pages → Build and deployment → Source: **Deploy from a branch**.
4. Branch: **main**, folder: **/(root)**, Save.
5. Upewnij się, że `index.html` jest widoczny bezpośrednio w katalogu głównym repozytorium.

## Edycja
- Treści strony głównej oraz sekcje: `index.html` (obydwa warianty tekstów są w atrybutach `data-en` i `data-pl`).
- Opisy podstron: `projekty/*.html`.
- Wygląd, paleta, responsywność: `assets/style.css`.
- Logika przełączania języka i kopiowania e-maila: `assets/app.js`.
- Interaktywne demonstracje projektów: `assets/demos.js`.

## Ważne o projektach
- Dashboard prezentuje wyłącznie **wygenerowane dane demonstracyjne**. Nie jest natywnym plikiem Power BI.
- Sklep to demonstracja interfejsu, nie działający sklep WordPress.
- Proces SAS jest poglądowy i nie przedstawia niepotwierdzonych wyników badań.
- Galeria graficzna to autorskie makiety tekstowe do zastąpienia prawdziwymi pracami.
- Nie dodano fikcyjnych linków do GitHuba ani repozytoriów.

## Kontakt
Wprowadzony e-mail: `tobiasz8999@gmail.com`, LinkedIn: `https://www.linkedin.com/in/tobiaszm/`.


## Aktualizacja projektów (v3)
- Karta **GitHub** prowadzi bezpośrednio do repozytorium: https://github.com/TobiaszM22/portfolio-TM-04.github.io
- Karta **Prace graficzne** prowadzi do Behance: https://www.behance.net/gallery/255798155/Portfolio
- Strona `projekty/sas.html` zawiera cztery raporty SAS z prawdziwych dostarczonych plików. Pliki PDF znajdują się w `materialy/`; można je otwierać i pobierać.
- Strona `projekty/furniture.html` opisuje WordPress/Elementor i zawiera dokumentację sklepu w DOCX oraz PDF (jeśli konwersja się powiodła).
- Ważne: folder `materialy` musi zostać wgrany wraz z resztą strony; w przeciwnym razie dokumenty nie otworzą się.
- Demo na stronie sklepu jest tylko ilustracją interfejsu; nie jest działającym sklepem WordPress.
