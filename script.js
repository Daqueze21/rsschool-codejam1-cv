menu.onclick = function onClick() {
   var x = document.getElementById("navTop");

   if (x.className === "nav-top") {
      x.className += " responsive";
   } else {
      x.className ="nav-top";
   }
}