# FISH EL PRESTIGIOSO — Beta Website

A responsive, static, multilingual (French / Arabic / English) export business website for Fish El Prestigioso, Dakhla, Morocco. All company-facing branding uses **FISH EL PRESTIGIOSO** (not Azyg).

## Files

- `index.html` — website markup and navigation
- `styles.css` — responsive design, cinematic color palette, animated fish effects and RTL support
- `script.js` — full translations, gallery filters, modal photo viewer, language persistence, inquiry drafting
- `assets/tuna.svg` — original stylized animated fish illustration; CSS simulates depth / movement, no actual 3D engine
- `assets/images/*.webp` — optimized photos supplied by the user

## Preview

Open `index.html` in a current browser. A network connection is useful for Google Fonts only; all site imagery is included in the ZIP. You can also run `python -m http.server 8000` from this directory, then visit `http://localhost:8000`.

## Publish to existing GitHub Pages beta

Existing repository: https://github.com/zakadili/fish-elprestigioso

**Recommended update with Git CLI** (requires access to your account):

```
git clone https://github.com/zakadili/fish-elprestigioso.git
cd fish-elprestigioso
# Copy the contents of this extracted ZIP into this repository (replace existing files).
git add -A
git commit -m "Refresh site with real product photos and multilingual export design"
git push origin main
```

For browser-only editing, open `https://github.dev/zakadili/fish-elprestigioso` in your browser, drag in the site files and complete `Source Control > Commit > Sync Changes`.

GitHub Pages settings: **Settings → Pages → Deploy from a branch → main → /(root)**. Beta URL: https://zakadili.github.io/fish-elprestigioso/

## Before public use

1. **The contact form is a beta draft-only workflow.** It prepares the buyer’s details and has a Copy function; it **does not send anything**. Configure your official sales email and a proper submission service before advertising the form as live.
2. Confirm which species and formats the company actually offers, current inventory, commercial contact details, shipping arrangements, applicable certification, and any quality/compliance statements. Photography is illustrative of products and logistics, not a guarantee of specific stock or certifications.
3. The fish hero is an original **2.5D SVG/CSS effect**, not a heavyweight WebGL model; it moves gently and reacts to pointer movement on desktop. A reduced-motion accessibility setting disables animations.
4. Check that you have permission to publish any images featuring identifiable people; this site deliberately prioritizes cargo and products.

The site needs **no npm, Node, database or backend** to run.
