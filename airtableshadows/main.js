/* globals require */
console.log("Hello, Airtable");


// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable library to get a variable that represents one of our bases
var base = new Airtable({ apiKey: " }).base(
  "app13Jk256humRdop"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("Shadows").select({}).eachPage(gotPageofShadows, gotAllShadows);

// an empty array to hold our book data
const shadows = [];

// callback function that receives our data
function gotPageofShadows(records, fetchNextPage) {
  console.log("gotPageOfShadows()");
  // add the records from this page to our books array
  shadows.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllShadows(err) {
  console.log("gotAllShadows()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading shadows");
    console.error(err);
    return;
  }

    consolelogShadows();
    showShadows();
}

  // call function to show the books
function consolelogShadows() {
    console.log("consoleLogShadows()");
    shadows.forEach((shadow) => {
        console.log("Shadow:",shadow);
    });
}

function showShadows() {
    console.log("showShadows()");
    shadows.forEach((shadow) => {
        const h2 = document.createElement("h2");
        h2.innerText= shadows.field.title;
        document.body.appendChild(h2);
    });
}


