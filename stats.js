// Anonymous usage counts (see ProgramAdmin Stats.js). Each browser gets a random ID the first time; nothing
// personal is sent. Pages call trackVisit(page, detail) once per page open ('program', 'bulletin', 'post').
// Visit any page with ?nostats=1 to leave this device out of the counts (e.g. the clerk's own phone);
// ?nostats=0 counts it again.
(function() {
  var API_URL = 'https://script.google.com/macros/s/AKfycbwbfE5bAvaC2rSJs-HMSCQ8Gc9xCJl7-Pk-W66HXUu0MBwJgPHzSMPxdVXv23gLjpet/exec';
  var ID_KEY = 'visitor-id', SKIP_KEY = 'no-stats';
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { v === null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) {} }

  var opt = new URLSearchParams(location.search).get('nostats');
  if (opt === '1') set(SKIP_KEY, '1');
  if (opt === '0') set(SKIP_KEY, null);

  var id = get(ID_KEY), isNew = false;
  if (!id) {
    var bytes = new Uint8Array(8);
    (window.crypto || window.msCrypto).getRandomValues(bytes);
    id = Array.prototype.map.call(bytes, function(b) { return ('0' + b.toString(16)).slice(-2); }).join('');
    set(ID_KEY, id);
    isNew = get(ID_KEY) === id;          // only "new" if it was saved (private windows may not keep it)
  }

  window.trackVisit = function(page, detail) {
    if (get(SKIP_KEY) === '1') return;
    var body = JSON.stringify({ action: 'visit', page: page, v: id, detail: detail || '', isNew: isNew });
    isNew = false;
    // Not sendBeacon: it always sends Google sign-in cookies, which trips up people signed into several accounts.
    try {
      fetch(API_URL, { method: 'POST', mode: 'no-cors', credentials: 'omit', keepalive: true,
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: body }).catch(function() {});
    } catch (e) {}
  };
})();
