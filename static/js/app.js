// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");
var resetbtn = d3.select("#reset-btn");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 3. Use this function to update the filters. 
function updateFilters() {

var filters = {};

let filteredData = tableData;

if (d3.select("#datetime").property("value"))
{
  filters["datetime"]=d3.select("#datetime").property("value")
  filteredData = filteredData.filter(row=> row.datetime === filters["date"]);
}
if (d3.select("#city").property("value"))
{
  filters["city"]=d3.select("#city").property("value")
  filteredData = filteredData.filter(row=> row.city === filters["city"]);
}

if (d3.select("#state").property("value"))
{
  filters["state"]=d3.select("#state").property("value")
  filteredData = filteredData.filter(row=> row.state === filters["state"]);
}
if (d3.select("#country").property("value"))
{
  filters["country"]=d3.select("#country").property("value")
  filteredData = filteredData.filter(row=> row.country === filters["country"]);
}
if (d3.select("#shape").property("value"))
{
  filters["shape"]=d3.select("#shape").property("value")
  filteredData = filteredData.filter(row=> row.shape === filters["shape"]);
}
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
}

  
  //  Attach an event to listen for changes to each filter
d3.selectAll(".filter").on("change", updateFilters);


  // Build the table when the page loads
buildTable(tableData);

// Add Reset button to reset data in table
resetbtn.on("click", () => {
	tbody.html("");
	buildTable(data) 
	console.log("Table reset")
})
