console.log("popup.js loaded");

var button = document.getElementById('changeSiteButton');
button.onclick = function()
{
  console.log("button clicks");

  var sites = ['http://omfgdogs.com/',
                 'http://heyyeyaaeyaaaeyaeyaa.com/',
                 'http://www.fallingfalling.com/']

    document.getElementById('myIframe').src = sites[Math.floor(Math.random() * sites.length)];
};