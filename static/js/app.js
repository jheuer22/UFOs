// import the data from data.js 
const tableData = data; 

// reference the HTML table using D3 - java script library. tbody declares a variable and d3.select tells JavaScript to look for the <tbody> tags in HTML
var tbody = d3.select("tbody"); 

//tells JavaScript to use an empty string when creating the table; in other words, create a blank canvas. This is a standard way to clear data.
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

// pulling data from data set and using ForLoop to append each table row(tr) in the table with the data <tr> in the html file 
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
     
// reference one object from the array and (dataRow) adds the data to go into the dataRow in the table. forEach((val)) means one object per row
//The val argument represents each item in the object, such as the location, shape, or duration.
        Object.values(dataRow).forEach((val) => {   
    //With this line, we've set up the action of appending data into a table data tag (<td>). 
            let cell = row.append("td");
    //Now, in the next line we'll add the values.
            cell.text(val);
            }
        );
    }); 
}