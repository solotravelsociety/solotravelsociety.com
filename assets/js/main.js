// Add Ref to External Links
document.addEventListener('DOMContentLoaded', function () {
  var refValue = 'solotravelsociety.com';
  var externalLinks = Array.from(document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])'));

  externalLinks.forEach(function (link) {
    var originalHref = link.getAttribute('href');
    var separator = originalHref.includes('?') ? '&' : '?';
    var modifiedHref = originalHref + separator + 'ref=' + encodeURIComponent(refValue);
    link.setAttribute('href', modifiedHref);
  });

  document.querySelectorAll('a').forEach(function (link) {
    const linkHostname = new URL(link.href).hostname;
    const currentHostname = window.location.hostname;
    const regex = /^(?:.*\\.)?solotravelsociety\\.com$/;

    if (!regex.test(linkHostname) &&
        linkHostname !== currentHostname &&
        !link.href.startsWith('/') &&
        !link.href.startsWith('#')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
