# Bloom & Crumb — Materialize Bakery Crash Course

A responsive, one-page bakery website created for the Materialize CSS crash-course exercise.

## Files

- `index.html` — semantic page structure, navigation, hero, product cards, story, visit, contact form.
- `style.css` — the warm bakery palette, layout, and mobile styling.
- `script.js` — Materialize mobile sidenav, form validation and feedback, dynamic footer year.
- `codepen-single-file.html` — the entire project combined into one file for quick testing and CodePen.

## Run locally

Open `index.html` in your browser. No installation is required. An internet connection is required for the Materialize CDN, Google Fonts and Pexels photos.

## Use in CodePen

**Option A (easy):** Copy the content of `codepen-single-file.html` into the HTML editor (or use CodePen's Full Page editor if available).

**Option B (three panels):** Copy the markup inside `<body>` from `index.html` to HTML, `style.css` to CSS, and `script.js` to JS. In Pen Settings, add these external stylesheets:

1. `https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css`
2. `https://fonts.googleapis.com/icon?family=Material+Icons`
3. `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap`

And add this external script **before your own JavaScript**:

- `https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js`

Remove the local `style.css` and `script.js` tags from the HTML panel if you are using three panels.

## How responsiveness works

- `container` centers and limits the content width.
- `row` creates a horizontal layout.
- `col s12 l6` makes a full-width column on phones and half-width on desktop.
- `col s12 m6 l4` displays one product per row on phones, two on tablets, and three on desktops.
- `col s12 l8 offset-l2` centers the contact form on wide screens.
- Materialize `sidenav` provides the mobile menu.

## Important: contact form

The included form has browser validation and an on-screen success state. **It is a demo: messages are not stored or sent.** To collect real inquiries, connect the form to an API or a hosted service such as Formspree. Also replace the sample address and opening hours with actual bakery information.

Photos use the URLs provided in the project brief (Pexels).
