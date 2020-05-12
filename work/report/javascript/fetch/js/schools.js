obj = { table: "schools", limit: 100 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    txt += "<table border='1'>"
    for (x in myObj) {
      txt += "<tr><td>" + myObj[x].name + "</td></tr>";
    }
    txt += "</table>"
    document.getElementById("demo").innerHTML = txt;
  }
}
xmlhttp.open("POST", "1081.json", true);
xmlhttp.setRequestHeader("Content-type", "http://api.scb.se/UF0109/v2/skolenhetsregister/sv/skolform");
xmlhttp.send("x=" + dbParam);