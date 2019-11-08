
(function($){
  const siteName = getUrlVars()["site-name"];
  const banner1 = Math.ceil(Math.random() * 4);
  const banner2 = Math.ceil(Math.random() * 3);
  const banner3 = Math.ceil(Math.random() * 3);
  const banner4 = Math.ceil(Math.random() * 3);
  const banner5 = Math.ceil(Math.random() * 3);
  
  $('#banner img.bg-img').data('bg', `solar/first${banner1}.jpg`);
  $('#one img.bg-img').data('bg', `solar/second${banner2}.jpg`);
  $('#two img.bg-img').data('bg', `solar/third${banner3}.jpg`);
  $('#three img.bg-img').data('bg', `solar/forth${banner4}.jpg`);
  $('#four img.bg-img').data('bg', `solar/fifth${banner5}.jpg`);
})(jQuery);

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}