"use strict" ; 

(function(){
var element = document.getElementById("duck");

element.addEventListener("click" , function()
{
    if (element.style.display === "none") {
        element.style.display = "block";
      } else {
        element.style.display === "none";
      }
    console.log("Duck clicked!");
});
element.addEventListener("mouseover" , function()
{
   if(element.offsetLeft < 1045 )element.style.left = element.offsetLeft + 20 + "px";
    console.log("Mouse Over!");
    console.log(element.style.left);
    console.log(element.offsetLeft);
});
console.log(element);
console.log("Duck ready!!");

})();