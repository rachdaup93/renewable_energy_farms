
(function($){
  const siteName = getUrlVars();
  const banner1 = Math.ceil(Math.random() * 4);
  const banner2 = Math.ceil(Math.random() * 3);
  const banner3 = Math.ceil(Math.random() * 3);
  const banner4 = Math.ceil(Math.random() * 3);
  const banner5 = Math.ceil(Math.random() * 3);
  
  $('#banner img.bg-img').data('bg', `${siteName}/first${banner1}.jpg`);
  $('#one img.bg-img').data('bg', `${siteName}/second${banner2}.jpg`);
  $('#two img.bg-img').data('bg', `${siteName}/third${banner3}.jpg`);
  $('#three img.bg-img').data('bg', `${siteName}/forth${banner4}.jpg`);
  $('#four img.bg-img').data('bg', `${siteName}/fifth${banner5}.jpg`);
})(jQuery);

function getUrlVars()
{
    return window.location.href.slice(window.location.href.indexOf('m/') + 2).split('-')[0];
}