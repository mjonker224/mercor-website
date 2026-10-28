# Mercor Multi-Page Website

This package contains a static multi-page Mercor website.

## Pages

- `index.html` — default Cranes homepage
- `cranes.html` — separate Cranes homepage copy
- `transport.html` — Mercor Transport one-page site focused on abnormal loads across Africa

## Main files

- `styles.css` — shared styling
- `script.js` — mobile menu, WhatsApp quote form, scroll animations
- `mercor-logo.jpg` — Mercor logo
- `assets/hero-truck-mounted-crane.png` — Cranes hero image
- `assets/hero-abnormal-load.svg` — Transport hero visual

## Update placeholders before going live

Replace:
- `+27 00 000 0000`
- `27000000000`
- `quotes@mercorcranes.co.za`
- `quotes@mercortransport.co.za`
- example domain details


## v13 note
Cranes page rebuilt with the Mercor Cranes logo, concise content, real Mercor Cranes photos, animated client credibility strip, compact WhatsApp icon and company details without director/owner names.


## v22 note
Transport page refreshed with matching header, Mercor Transport photos, concise content, credibility strip, company profile details, and updated phone/email contacts across Cranes and Transport.


## v23 note
Transport/Cranes header order swapped to Transport then Cranes, headers made sticky, Transport logo matched to Cranes header sizing, scroll animations now play only when scrolling down and reset at page top, and mobile-only layout refinements were added.


## v24 note
Fixed sticky headers to sit at the top while scrolling, matched Cranes/Transport header and logo box sizes exactly, cropped header logos for equal visual scale, and removed all text/stat blocks from the hero photos on both pages.


## v25 note
Header now starts with a small top gap and docks to the top while scrolling down with a frosted/blurred border effect. It resets when back at the top.


## v26 note
Reduced the visual size of the Cranes logo inside the header/footer logo box so it matches the normal Mercor Transport logo better while keeping the header sizes unchanged.


## v27 note
Header now keeps the same docked position/shape when scrolling down, with blur applied only around the outside edges. The inside remains solid white like the logo background.


## v28 note
Removed the sticky/docking header effect and all header blur/glow effects. Header is back to a normal top-of-page card while keeping the current matched logo sizing and clipped logo backgrounds.


## v29 note
Added a fixed bottom-right back-to-top arrow on all pages.


## v30 note
Credibility strip rebuilt as a seamless infinite ticker that does not pause on hover. Cranes logo reduced slightly again inside the same header logo box.


## v31 note
Fixed Eskom spelling in the credibility strip, centred the mobile bottom CTA, changed Call/WhatsApp to 082 652 5694, removed VAT number cards from Cranes and Transport, and added a Transport multi-axle section with the supplied transformer photo.


## v32 note
Added favicon files and linked them in all page heads so the Mercor icon can show in browser tabs. Uses absolute /assets paths for deployed routes like /transport.


## v33 note
Updated browser tab favicon to use the exact Mercor icon supplied by the user. Added root favicon.ico and relative favicon links so it works locally and after deployment.


## v34 note
Locked mobile viewport scaling, prevented input-focus zoom, disabled double-tap zoom on controls, and tightened mobile width/overflow rules so the site stays fixed to the phone screen.


## v35 note
Changed the Transport hero image to the supplied blue-sky multi-axle abnormal load photo without changing the mobile layout settings.


## v36 note
Changed the main homepage/index.html to the Mercor Transport page so mercortransport.co.za loads Transport first. Updated the Transport hero image to the blue-sky locomotive/lowbed photo supplied by the user. Cranes remains available on cranes.html, with Transport links pointing back to the homepage.


## v37 SEO note
SEO-ready version added:
- sitemap.xml
- robots.txt
- _redirects for clean Netlify URLs
- netlify.toml headers
- canonical tags
- improved page titles
- improved meta descriptions and keywords
- Open Graph and Twitter card metadata
- JSON-LD structured data for Organization, LocalBusiness, Service, WebSite and BreadcrumbList
- clean internal links for /, /transport and /cranes

Submit this sitemap in Google Search Console:
https://mercortransport.co.za/sitemap.xml


## V38 — Mercor Cranes Job Gallery (2026-10-27)

The Cranes page now has a dedicated responsive **Job Gallery** featuring one selected photograph from each of the two newly supplied steelwork jobs, two generator handling photos previously supplied, and eight photos from the previous crane projects already in the site. The active Cranes hero photo (`assets/cranes-loading.jpg`) is intentionally excluded from the Job Gallery. The gallery includes an accessible click-to-enlarge view with Escape / close, lazy-loaded photographs, and the new Cranes menu link. The historical `#work` anchor is kept so existing Google Ads sitelinks continue to resolve.

To publish: unzip and copy **the contents of this folder** into the root of the existing GitHub site repository, replacing the matching HTML/CSS/JS files and adding new images under `/assets/`. Commit and push to allow Netlify to redeploy. Do **not** upload just the top-level folder without its contents.

Files changed: `cranes.html`, `styles.css`, `script.js`.
New images: `assets/job-overhead-steel-framework.jpg`, `assets/job-steel-support-placement.jpg`, `assets/job-generator-lifting.jpg`, `assets/job-generator-loading.jpg`.


## V38 NETLIFY DEPLOYMENT FIX (27 OCT 2026)

The optional netlify.toml configuration was deliberately omitted from this package because the previous GitHub deployment failed at the Netlify configuration-reading stage. The existing `_redirects` file is kept, preserving /cranes and /transport clean URLs. **Important:** replacing files through GitHub's Upload files action does not delete an existing file. Delete the old `netlify.toml` from the root of the GitHub repository and commit that deletion. Then upload the files in this package (extracted; not the ZIP itself), replacing matching files, and commit.

Preserves the original Google Ads global tag `AW-18289359007` on `index.html`, `cranes.html`, and `transport.html`, which was present in the last published GitHub commit `af31b80` but absent from the source V38 archive. The tag is present just once on each page (the previous deployed Cranes HTML had a duplicate).

The earlier Cranes hero and the new 12-photo Job Gallery remain unchanged. This package is a static website: it requires no NPM build and should publish from the repository root `.`. If deployment still fails at configuration stage after deleting netlify.toml, review the full Netlify deploy log and the site Build & Deploy settings (particularly Base directory, Publish directory, and Build command) to find the exact cause.


Update v39: fixed job gallery image references and changed the cranes job gallery to a single rolling strip similar to the credibility strip.


## V41 – fixed gallery + rolling strip
- One seamless row of 12 real job photos scrolling continuously (mirrors the existing credibility strip).
- Four job pictures were embedded in `cranes.html` as WebP so they display even if the new JPEG files aren't uploaded to GitHub correctly; the original JPEGs are still included in `/assets/`.
- The old hero photo (`cranes-loading.jpg`) is NOT part of the gallery. The hero section is unchanged.
- Photos still open in full-screen when clicked, using the actual picture displayed.
- Upload the EXTRACTED CONTENTS of this ZIP to the ROOT of your GitHub site repository, including the `/assets` folder. Do not upload the ZIP as one file or nest a new folder inside the repository.
- No Netlify config file included. No other site sections changed.


## V42 — One photo per job
The Cranes Job Gallery retains its continuous single-row loop and lightbox, but now features exactly one representative photo from each of six distinct jobs (six unique photos, duplicated in the DOM only to make the seamless marquee possible). No separate gallery page or View Gallery button was added. The hero and all other website sections are unchanged.
