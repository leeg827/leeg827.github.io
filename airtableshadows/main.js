
console.log("Hello, Airtable");

var Airtable = require("airtable");
console.log(Airtable);

var base = new Airtable({ apiKey: "key7u22Q3kvYIcrbO" }).base(
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
        let biggerContainer = document.querySelector(".shadows");

        let shadowContainer = document.createElement("div");
        shadowContainer.classList.add("shadowcontainer");
        biggerContainer.appendChild(shadowContainer);

        var shadowPicture = document.createElement("img");
        shadowPicture.src= shadow.fields.Photo[0].url;
        shadowPicture.classList.add("shadow");
        shadowContainer.appendChild(shadowPicture);
        
        const h2 = document.createElement("h2");
        h2.innerText= shadow.fields.Title;
        h2.classList.add("title");
        shadowContainer.appendChild(h2);

        let shadowLink = document.createElement("a");
        shadowLink.href = shadow.fields.more;

        shadowLink.innerText = shadow.fields.more;
        shadowContainer.appendChild(shadowLink);

        let title = document.querySelector(".headline");


        shadowContainer.addEventListener("mouseenter", () => {
          document.querySelectorAll(".shadowcontainer").forEach((shadowContainer) => {
              // if (shadowContainer.classList.contains("shadowcontainer")) {
              //     shadowLink.style.opacity = "1";
              //     title.style.color="white";
              //     h2.style.color="white";
              //     document.body.style.backgroundColor="black";
              //     shadowLink.style.color="white";
              // } else {
              //     shadowLink.style.opacity = "0";
              //     console.log("not hovering over anything")
              // }
                  shadowLink.style.opacity = "1";
                  title.style.color="white";
                  h2.style.color="white";
                  document.body.style.backgroundColor="black";
                  shadowLink.style.color="white";
          });

        
      //   document.querySelectorAll(".shadowcontainer").forEach((shadowContainer).addEventListener("mouseenter"),() => {
      //     console.log("mouse enter was triggered");
      //     });      

      //   document.querySelectorAll(".shadowcontainer").forEach((shadowContainer).addEventListener("mouseleave"),() => {
      //       console.log("mouse  was triggered");
      //       }); 

      });
        // let linkText = document.createElement("div");
        // linkText.innerHtml = shadow.fields.more;
        // shadowLink.appendChild(linkText);
    });
}

