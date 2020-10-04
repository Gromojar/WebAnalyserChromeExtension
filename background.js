
var icon;
var request = new XMLHttpRequest();
var request2 = new XMLHttpRequest();
var mydata;
var mydata2;
var adt;
var tablink;

chrome.browserAction.setBadgeBackgroundColor({color: [155,155,155,255]});

//chrome.tabs.onUpdated.addListener(function(tabId, props) {
 // if (props.status == "complete" && tabId == selectedId)
//
//
//});

//chrome.tabs.onSelectionChanged.addListener(function(tabId, props) {
//  selectedId = tabId;
//
//
//});

//chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//  selectedId = tabs[0].id;
//
//
//});


/*window.onload = function() {
	    var tablink = tab.url;
	document.getElementById("site").value = tablink;
	Skanuj();
}
*/

//chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//  if (changeInfo.status == 'complete') {
//
//    Skanuj();
//    
//  }
//})
//document.addEventListener('DOMContentLoaded', function() {
 //
   // Skanuj();
  //});
/*window.onload = function() {
	    var tablink = tab.url;
	document.getElementById("site").value = tablink;
	Skanuj();
}
*/

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {

    Check();

  }
})
function Check()
{
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    tablink = tabs[0].url;
	Skanuj();
});
}

function Skanuj()
{
	
var mydata;
var adt;
var arr;
var frame;
var text = "https://api.adsafeprotected.com/db2/client/28824/itgrl.json?adsafe_url=" + tablink;
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
}
if(mydata.bsc.adt == undefined && mydata.bsc.dlm == undefined)
{

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
if(mydata.bsc.dlm == undefined && mydata.bsc.adt == undefined)
{

chrome.browserAction.setIcon({path:"blue.png"});
chrome.browserAction.setBadgeText({text: ' IDK '});
icon = 3;
}

if(mydata.bsc.adt > 750)
{
chrome.browserAction.setIcon({path:"green.png"});
icon = 2;
chrome.browserAction.setBadgeText({text: '  OK  '});
}
if(mydata.bsc.dlm >= 1000)
{

chrome.browserAction.setIcon({path:"green.png"});
chrome.browserAction.setBadgeText({text: '  OK  '});
icon = 2;
}
if(mydata.bsc.dlm < 999)
{

chrome.browserAction.setIcon({path:"red.png"});
icon = 1;
chrome.browserAction.setBadgeText({text: 'NOPE'});
}
if(mydata.bsc.adt < 750)
{

chrome.browserAction.setIcon({path:"red.png"});
icon = 1;
chrome.browserAction.setBadgeText({text: 'NOPE'});
}
}
