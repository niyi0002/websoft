"use strict" ; 

(function(){
var element = document.getElementById("duck");

element.addEventListener("click" , function()
{
   
    console.log("Duck clicked!");
});
element.addEventListener("mouseover" , function()
{
   if(element.offsetLeft < 1000 )element.style.left = element.offsetLeft + 20 + "px";
   if(element.offsetLeft == 495 )element.style.top = element.offsetTop + 20 + "px";
    console.log("Mouse Over!");
    console.log(element.style.left);
    console.log(element.offsetLeft);
});
console.log(element);
console.log("Duck ready!!");

})();