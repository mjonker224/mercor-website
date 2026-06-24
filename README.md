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
