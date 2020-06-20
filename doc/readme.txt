>> Browser-Sync
https://www.browsersync.io/
Browser-Sync in ~/.bashrc installieren:
alias bsync='browser-sync start -s src -f src -b "google-chrome" --no-notify --single'

>> Vaadin-Router
https://vaadin.com/router
https://www.youtube.com/watch?v=Fxi9YdM0qFw
npm install @vaadin/router
node_modules/@vaadin/router/dist/vaadin-router.js

>> Rollup und lit-html
https://rollupjs.org
https://github.com/Polymer/lit-html
https://www.jsdelivr.com/package/npm/lit-html
a) Installieren: npm install lit-html
b) lit-html.js erstellen (mit rollup.config.js): rollup -c

Bundled mit rollup-config von gitlab:
npm install rollup-plugin-terser
npm install rollup-plugin-filesize
rollup -c

>> Adam Bien & Co
https://github.com/AdamBien/airhacks
https://www.adam-bien.com/roller/abien/entry/using_lit_html_with_webcomponetns
https://www.proudcommerce.com/web-components/why-you-should-use-webcomponents-now
