document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('mybtn');
  btn.addEventListener('click', function() {
    Skanuj();
  });
});
chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
	document.getElementById("site").value = tablink;
	Skanuj();
	updateIcon();
});
window.onload = function() {
	Skanuj();
}

var icon;
var request = new XMLHttpRequest();
var request2 = new XMLHttpRequest();
var mydata;
var mydata2;
var adt;




function updateIcon() {

	if(icon == 1)
	{
chrome.browserAction.setIcon({path:"red.png"});
	}
	if(icon == 2)
	{
chrome.browserAction.setIcon({path:"green.png"});
	}
		if(icon == 3)
	{
chrome.browserAction.setIcon({path:"blue.png"});
	}
};
function Skanuj()
{
var mydata;
var adt;
var arr;
var frame;
var text = "https://api.adsafeprotected.com/db2/client/28824/itgrl.json?adsafe_url=" + document.getElementById("site").value;
//var text2 = "https://staging.redvolcano.uk/api/verifyDomains.php?apikey=qxeGKnA4YgoOxwB9xEbaqWgJ54gRqQFgtGyqai1F&body=[%22google.com%22]";


request.open('GET', text, false);
//
request.onload = function () {}
//
request.send();
//
var mydata = JSON.parse(request.response);
//var mydata2 = JSON.parse(request2.response);
//request2.open('GET', text2, false); // `false` makes the request synchronous
//request2.onload = function () {}
//request2.send();
//mydata2 = JSON.parse(request2.response);
console.log(mydata.bsc.adt);
if(mydata.bsc.adt <= 750 || mydata.bsc.dlm < 1000)
{
document.getElementById("result").className = "p-3 mb-2 bg-danger text-white";
}
/*if(mydata.bsc.adt == undefined)
{
document.getElementById("result").className = "p-3 mb-2 bg-info text-white";
}
if(mydata.bsc.dlm == undefined)
{
document.getElementById("result").className = "p-3 mb-2 bg-info text-white";
}
*/
if(mydata.bsc.adt >= 750 && mydata.bsc.dlm >= 1000)
{
document.getElementById("result").className = "p-3 mb-2 bg-success text-white";
}
if(mydata.bsc.adt == undefined && mydata.bsc.dlm == undefined)
{
document.getElementById("result").className = "p-3 mb-2 bg-info text-white";
}
/* if(mydata.bsc.adt == undefined)
{
document.getElementById("result").innerHTML = "NO DATA";
document.getElementById("result").className = "p-3 mb-2 bg-info text-white";
}
if(mydata.bsc.adt > 800)
{
document.getElementById("result").innerHTML = "OK!";
document.getElementById("result").className = "p-3 mb-2 bg-success text-white";
}
if(mydata.bsc.dlm < 1000)
{
document.getElementById("result").innerHTML = "PIRACY";
document.getElementById("result").className = "p-3 mb-2 bg-danger text-white";
}
if(mydata.bsc.dlm == undefined)
{
document.getElementById("result").innerHTML = "NO DATA";
document.getElementById("result").className = "p-3 mb-2 bg-info text-white";
}
*/
document.getElementById("result").innerHTML = "Site info";
document.getElementById("result").innerHTML += "<br><br>";
if(mydata.bsc.dlm == undefined && mydata.bsc.adt == undefined)
{
document.getElementById("result").innerHTML += "NO DATA!"
chrome.browserAction.setIcon({path:"blue.png"});
icon = 3;
}
if(mydata.bsc.adt <= 750)
{
document.getElementById("result").innerHTML += "Adult score =" + mydata.bsc.adt + " - PORN WEBSITE!"
chrome.browserAction.setIcon({path:"red.png"});
icon = 1;
chrome.browserAction.setBadgeText({text: 'NOPE'});
}
if(mydata.bsc.adt > 750)
{
document.getElementById("result").innerHTML += "Adult score =" + mydata.bsc.adt + " - OK!"
chrome.browserAction.setIcon({path:"green.png"});
icon = 2;
}
document.getElementById("result").innerHTML += "<br><br>";
if(mydata.bsc.dlm < 1000)
{
document.getElementById("result").innerHTML += "Piracy score =" + mydata.bsc.dlm + " - PIRACY!"
chrome.browserAction.setIcon({path:"red.png"});
icon = 1;
}
if(mydata.bsc.dlm >= 1000)
{
document.getElementById("result").innerHTML += "Piracy score =" + mydata.bsc.dlm + " - OK!"
chrome.browserAction.setIcon({path:"green.png"});
icon = 2;
}

}