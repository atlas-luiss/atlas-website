# ATLAS Lab — website

Website of the **ATLAS Lab — Adaptive and Physical AI Agents**, LUISS Guido Carli University.
Static page: no build step, no dependencies.

Live at **https://atlas.vincenzolomonaco.com**

## Files

```
index.html      the page (never needs editing)
data.js         ALL site content — edit only this
support.js      rendering engine — do not edit
CNAME           custom domain for GitHub Pages
assets/
  atlas_logo.png          lab logo (transparent circle)
  luiss.png               university logo (footer)
  atlas_lab_concept.png   featured figure
```

## Updating content

Open `data.js`, change the values, commit. That's it.

- Add a member: copy a line inside `members: [ ... ]`.
- `vision` paragraphs accept simple HTML: `<strong>`, `<em>`, `<a href="...">`.
- New images: drop the file in `assets/` and point `heroImage` / `labLogo` / `universityLogo` at it.
- `heroLayout` switches the hero: `"centered"` (default), `"typographic"`, `"side"`.

## Publishing on GitHub Pages

1. Push the contents of this folder to the repository root.
2. **Settings → Pages** → source **Deploy from a branch** → branch `main`, folder `/root`.
3. **Settings → Pages → Custom domain**: `atlas.vincenzolomonaco.com` (the `CNAME` file already declares it).
4. At your DNS provider add a `CNAME` record: `atlas` → `<user>.github.io`.

> The page loads `data.js` as an ES module, so view it through a web server (GitHub Pages, or `python3 -m http.server` locally) rather than opening the file directly.
