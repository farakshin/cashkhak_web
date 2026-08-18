# Сайт Кэшхака

Статический сайт приложения «Кэшхак», собранный на Astro по той же схеме, что и LinguaWeb:

- `src/pages/` — маршруты сайта;
- `src/components/` — общие шапка, подвал, мокап приложения и FAQ;
- `src/data/` — редактируемый контент на русском и английском;
- `src/styles/global.css` — единая адаптивная визуальная система;
- `public/` — статические файлы.

## Локальный запуск

```bash
cd web
npm install
npm run dev
```

Продакшен-сборка:

```bash
npm run build
npm run preview
```

Русская версия — корень сайта (`/`), английская — `/en/`. Доступны страницы `/faq.html`, `/support.html` и `/privacy.html` и их английские версии.

Для GitHub Pages проектный путь задаётся переменной `BASE_PATH`, например:

```bash
BASE_PATH=/cashkhak_web npm run build
```

Адрес сайта задаётся через `SITE_URL`. Адрес поддержки: `farakshin@gmail.com`.

## GitHub Pages

После push в `main` workflow `.github/workflows/deploy.yml` собирает сайт и публикует результат в ветку `gh-pages`.
В настройках репозитория откройте **Settings → Pages** и выберите источник **Deploy from a branch**, ветку `gh-pages` и папку `/(root)`.
После первой публикации сайт будет доступен по адресу `https://farakshin.github.io/cashkhak_web/`.
