# BrainSchool

## Run locally (Node)

```bash
cd /Users/drb/Documents/Workspace/BrainSchool
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://127.0.0.1:8000/components/home.html`).

## Why a server is required

This site loads the header and footer at runtime with `fetch("/shared/header.html")` and `fetch("/shared/footer.html")`, which requires serving the files over `http://` (not `file://`).
