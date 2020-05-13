var JSONItems = [];
$.getJSON( "javascript/fetch/data/1081.json", function( data){
  JSONItems = data;
  console.log(JSONItems);
 populateTable(JSONItems);
}); 

function populateTable(object) {

    var obj = object;
    var table = $("<table />");
    table[0].border = "1";
    var columns = Object.keys(obj);
    var columnCount = columns.length;
    var row = $(table[0].insertRow(-1));
    for (var i = 0; i < columnCount; i++) {
        var headerCell = $("<th />");
        headerCell.html([columns[i]]);
        row.append(headerCell);
    }
    
    for (var i = 0; i < obj.length; i++) {
        row = $(table[0].insertRow(-1));
        for (var j = 0; j < columnCount; j++) {
            var cell = $("<td />");
            cell.html(obj[i][columns[j]]);
            row.append(cell);
        }
    }
    
    var dvTable = $("#dvCSV");
    dvTable.html("");
    dvTable.append(table);
}