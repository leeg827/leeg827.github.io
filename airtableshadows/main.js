
console.log("Hello, Airtable");

var Airtable = require("airtable");
console.log(Airtable);

var base = new Airtable({ apiKey: "key4Jc4fqyYdDCwcd" }).base(
  "app13Jk256humRdop"
);

base("Shadows").select({}).eachPage(gotPageofShadows, gotAllShadows);

const shadows = [];

function gotPageofShadows(records, fetchNextPage) {
  console.log("gotPageOfShadows()");
  shadows.push(...records);
  fetchNextPage();
}

function gotAllShadows(err) {
  console.log("gotAllShadows()");

  if (err) {
    console.log("error loading shadows");
    console.error(err);
    return;
  }

    consolelogShadows();
    showShadows();
}

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
        h2.innerText= shadow.fields.Title;
        document.body.appendChild(h2);
    });
}


