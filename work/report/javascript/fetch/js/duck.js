"use strict" ; 

(function(){
var element = document.getElementById("duck");


element.addEventListener("mouseover" , function()
{
   if(element.offsetLeft < 1045 )element.style.left = element.offsetLeft + 20 + "px";
    console.log("Mouse Over!");
    console.log(element.style.left);
    console.log(element.offsetLeft);
});
console.log(element);
console.log("Duck ready!!");

element.addEventListener("dblclick" , function()
{
console.log("Double Clicked!");
if (element.style.visibility = 'visible') {
  element.style.visibility = 'hidden';
} else {
  element.style.visibility = 'visible';
}
});

})();