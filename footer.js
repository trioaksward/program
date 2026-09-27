// Site footer, shared by every page: <script src="footer.js"></script> right after </main>.
// Edit the text here once and it changes everywhere.
(function() {
  var style = document.createElement('style');
  style.textContent =
    '.site-footer { background: #4D7273; color: #a0a09f; font-family: "Montserrat", sans-serif; font-weight: 300; font-size: 15px; line-height: 1.5; text-align: center; padding: 36px 16px 20px; }' +
    '.site-footer .cols { max-width: 960px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 28px 40px; }' +
    '.site-footer h2 { font-family: "Montserrat", sans-serif; font-style: normal; font-weight: 400; font-size: 18px; letter-spacing: 0.2em; text-transform: uppercase; color: #a0a09f; margin: 0 0 12px; padding: 0; }' +
    '.site-footer p { margin: 0 0 12px; }' +
    '.site-footer a { color: inherit; text-decoration: underline; text-underline-offset: 3px; }' +
    '.site-footer .social { display: inline-block; margin-top: 4px; color: #fff; line-height: 0; }' +
    '.site-footer .social svg { width: 24px; height: 24px; fill: currentColor; }' +
    '.site-footer .copy { max-width: 960px; margin: 28px auto 0; padding-top: 14px; border-top: 1px solid rgba(160, 160, 159, 0.35); font-size: 14px; }';
  document.head.appendChild(style);

  var footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML =
    '<div class="cols">' +
      '<section><h2>About</h2>' +
        '<p>The Tri Oaks Ward is a christian congregation in Layton, UT. We are members of The Church of Jesus Christ of Latter-day Saints.</p>' +
        '<p>This website provides Tri Oaks Ward members and visitors access to the program for our weekly worship service, as well as a ward bulletin containing news and announcements for the ward.</p>' +
      '</section>' +
      '<section><h2>Contact</h2>' +
        '<p><b>This website is <u>NOT</u> an official website of The Church of Jesus Christ of Latter-day Saints.</b></p>' +
        '<p>For questions about this website or its contents, please send an email to Mike Steed at ' +
          '<a href="mailto:steed.mike@gmail.com?subject=Tri%20Oaks%20Ward%20Sacrament%20Program%20and%20Ward%20Bulletin">steed.mike@gmail.com</a>.</p>' +
      '</section>' +
      '<section><h2>Sacrament Service</h2>' +
        '<p>Sundays at 12:00pm</p>' +
        '<p><a href="https://maps.app.goo.gl/2y91WC4T4veePMPX6" target="_blank" rel="noopener">2375 E 3225 N<br>Layton, UT 84040</a></p>' +
        '<a class="social" href="https://www.facebook.com/groups/414083041989176" target="_blank" rel="noopener" aria-label="Tri Oaks Ward on Facebook">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>' +
        '</a>' +
      '</section>' +
    '</div>' +
    '<div class="copy">© ' + new Date().getFullYear() + ' Tri Oaks Ward - Sacrament Program &amp; Bulletin</div>';
  document.currentScript.parentNode.insertBefore(footer, document.currentScript);
})();
