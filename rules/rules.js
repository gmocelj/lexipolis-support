/* No tracking/storage; explicit locale links always win. */
(function () {
  function resolve(preferred) {
    for (var i = 0; i < preferred.length; i++) {
      var p = preferred[i].replace(/_/g, '-').toLowerCase().split('-');
      var code = p[0];
      if (code === 'sr') return p.indexOf('me') >= 0 ? 'cnr' : p.indexOf('latn') >= 0 ? 'sr-Latn' : 'sr-Cyrl';
      if (code === 'sh') return 'sr-Latn';
      if (['hr','bs','cnr','en','ru','es','sl','mk','de'].indexOf(code) >= 0) return code;
    }
    return 'en';
  }
  if (document.body.hasAttribute('data-detect-language')) {
    var locale = resolve(navigator.languages || [navigator.language || 'en']);
    if (locale !== 'en') window.location.replace('./' + locale + '/' + window.location.hash);
  }
  document.querySelectorAll('[data-vote-demo]').forEach(function (demo) {
    demo.querySelectorAll('button').forEach(function (button) {
      button.addEventListener('click', function () {
        demo.querySelectorAll('button').forEach(function (other) { other.setAttribute('aria-pressed', String(other === button)); });
        demo.querySelector('.vote-result').textContent = button.getAttribute('data-result');
      });
    });
  });
})();
