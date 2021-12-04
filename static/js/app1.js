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

function handleClick() {
     // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    //By setting the filteredData variable to our raw data, we're basically using it as a blank slate.
    let filteredData = tableData;

     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

//Our selector string contains the id for another HTML tag. (We'll assign a unique id to a button element in the HTML called "filter-btn".)
// By adding this, we're linking our code directly to the filter button.
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);