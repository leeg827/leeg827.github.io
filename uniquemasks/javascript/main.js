// console.log("is our script working please tell me it's working");

var Airtable = require("airtable");

var base = new Airtable({ apiKey: "key7u22Q3kvYIcrbO" }).base(
    "appGNE5x1AHClWRQg"
);

base("Masks")
    .select({})
    .eachPage(gotPageOfMasks,gotAllMasks);

var masks = [];

function gotPageOfMasks(records,fetchNextPage){
    console.log("gotPageOfMasks()");
    masks.push(...records);
    fetchNextPage();
}

function gotAllMasks(err){
    console.log("gotAllMasks()");

    if(err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  consoleLogMasks();
  showMasks();
}

function consoleLogMasks(){
    console.log("consoleLogMasks()");
    masks.forEach(mask => {
        console.log("Mask:", mask);
    })
}

function showMasks(){
    console.log("showMasks()");
    masks.forEach((mask) => {
        var person = document.createElement("div");
        person.classList.add("person");
        document.querySelector(".crowd").appendChild(person);

        // var head = document.createElement("div");
        // img.classList.add("icon");
        // person.appendChild(head);

        var img = document.createElement("img");
        img.classList.add("face");
        img.src = mask.fields.images[0].url;
        person.appendChild(img);

        var body = document.createElement("div");
        body.classList.add("body");
        person.appendChild(body);

        // var type = mask.fields.type;
        // body.classList.add(type);

        var category = mask.fields.category;
        category.forEach(function(category) {
          body.classList.add(category);
        });

        var titleBox = document.createElement("div");
        titleBox.classList.add("titleBox");
        person.appendChild(titleBox);
        
        var h2 = document.createElement("h2");
        h2.classList.add("title");
        h2.innerText = mask.fields.continent;
        titleBox.appendChild(h2);

        var continent = mask.fields.biggerLocation;
        continent.forEach(function(continent){
            titleBox.classList.add(continent+"Button");
            person.classList.add(continent);
        });

        var mouthFilter = document.querySelector('.mouthKey')
        mouthFilter.addEventListener("click",function(){
            if (body.classList.contains("Mouth")){
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(180deg, rgb(255, 183, 82) 0%, #FFFFFF 100%)"
            } else {
                person.style.opacity="0%";
            }
        });

        // filter by Couture

        var coutureFilter = document.querySelector('.coutureKey')
        coutureFilter.addEventListener("click",function(){
            if (body.classList.contains("Couture")){
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(180deg, rgb(255, 183, 82) 0%, #FFFFFF 100%)"
            } else {
                person.style.opacity="0%";
            }
        });
        
        // filter by Character

        var characterFilter = document.querySelector('.characterKey')
        characterFilter.addEventListener("click",function(){
            if (body.classList.contains("Character")){
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(180deg, rgb(255, 183, 82) 0%, #FFFFFF 100%)"
            } else {
                person.style.opacity="0%";
            }
        });

        // filter by figure

        var figureFilter = document.querySelector('.figureKey')
        figureFilter.addEventListener("click",function(){
            if (body.classList.contains("Figure")){
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(180deg, rgb(255, 183, 82) 0%, #FFFFFF 100%)"
            } else {
                person.style.opacity="0%";
            }
        });

        // filter by detail

        var detailFilter = document.querySelector('.detailKey')
        detailFilter.addEventListener("click",function(){
            if (body.classList.contains("Detail")){
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(180deg, rgb(255, 183, 82) 0%, #FFFFFF 100%)"
            } else {
                person.style.opacity="0%";
            }
        });

        //filter by pattern

        var patternFilter = document.querySelector('.patternKey')
        patternFilter.addEventListener("click",function(){
            if (body.classList.contains("Pattern")){
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(180deg, rgb(255, 183, 82) 0%, #FFFFFF 100%)"
            } else {
                person.style.opacity="0%";
            }
        });

        var necessityFilter = document.querySelector('.necessityKey')
        necessityFilter.addEventListener("click",function(){
            if (body.classList.contains("Necessity")){
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(180deg, rgb(255, 183, 82) 0%, #FFFFFF 100%)"
            } else {
                person.style.opacity="0%";
            }
        });

        var statementFilter = document.querySelector('.statementKey')
        statementFilter.addEventListener("click",function(){
            if (body.classList.contains("Statement")){
                person.style.opacity="100%";
                document.body.style.background="none";
                document.body.style.background="linear-gradient(180deg, rgb(51, 51, 255) 0%, #FFFFFF 100%)"
            } else {
                person.style.opacity="0%";
            }
        });

        var reset = document.querySelector('.reset')
        reset.addEventListener("click",function(){
            person.style.opacity="100%";
            document.body.style.background="none";
            document.body.style.backgroundImage="url('images/graph.png')"
            });

        var frame = document.querySelector('.frame')
        frame.addEventListener("click",function(){
            img.classList.toggle("zoom");
            body.classList.toggle("gone");
            });

        var asiaButton = document.querySelectorAll ('.asiaButton')
        asiaButton.forEach(function(asiaButton){
            asiaButton.addEventListener("click",function(){
                if (person.classList.contains("asia")){
                    person.style.opacity="100%";
                } else {
                    person.style.opacity="0;"
                }
            })
        })
    })};
