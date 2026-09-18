# Interactive Calendar

## How to run this (VS Code terminal)

1. Extract this zip anywhere on your computer
2. Open the extracted folder in VS Code (`code .` from inside the folder, or File > Open Folder)
3. Open the terminal (Ctrl+` / Cmd+`) and run:

```bash
npm install
```

4. Then run the app:

```bash
npm run dev
```

5. Open the printed localhost link in your browser.

## Other commands

- `npm run test` — run the test suite
- `npm run coverage` — run tests with a coverage report (opens `coverage/index.html`)
- `npm run build` — production build

## Features

- Drag-and-drop events between days
- Add new events via the form at the top
- Delete events with the × button on each card
- Optimized with React.memo, useMemo, and useCallback
- Tested with React Testing Library + MSW API mocking
