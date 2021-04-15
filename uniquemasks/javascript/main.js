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

        var typeBox = document.createElement ("div");
        typeBox.classList.add("typeBox");
        person.appendChild(typeBox);

        var typeName = document.createElement("p")
        typeName.classList.add("description");
        typeName.innerText = "Type: "+mask.fields.category[0];
        typeBox.appendChild(typeName);
        

        var continent = mask.fields.biggerLocation;
        continent.forEach(function(continent){
            titleBox.classList.add(continent+"Button");
            person.classList.add(continent);
        });

        var main = document.querySelectorAll("h1")
        var subtitle = document.querySelector(".subtitle");

        var mouthFilter = document.querySelector('.mouthKey')
        mouthFilter.addEventListener("click",function(){
            if (body.classList.contains("Mouth")){
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(180deg, rgb(255, 183, 82) 0%, #FFFFFF 100%)"
                subtitle.innerText = "Mask Type: Mouth"
            } else {
                person.style.opacity="0%";
            }
        });

        // filter by Couture

        var coutureFilter = document.querySelector('.coutureKey')
        coutureFilter.addEventListener("click",function(){
            if (body.classList.contains("Couture")){
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(180deg, #FF4034 0%, #FFC01F 20%, #497CFF 40%, #8EFF59 60%, #FF59C7 80%, #C854FF 100%)"
                subtitle.innerText = "Mask Type: Couture"
            } else {
                person.style.opacity="0%";
            }
        });
        
        // filter by Character

        var characterFilter = document.querySelector('.characterKey')
        characterFilter.addEventListener("click",function(){
            if (body.classList.contains("Character")){
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(180deg, C854FF 0%,, #FFFFFF 100%)"
                subtitle.innerText = "Mask Type: Character"
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
                subtitle.innerText = "Mask Type: Figure"
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
                subtitle.innerText = "Mask Type: Detail"
            } else {
                person.style.opacity="0%";
            }
        });

        //filter by pattern

        var patternFilter = document.querySelector('.patternKey')
        patternFilter.addEventListener("click",function(){
            if (body.classList.contains("Pattern")){
                person.style.opacity="100%";
                main.style.color="black";
                subtitle.innerText = "Mask Type: Pattern"
            } else {
                person.style.opacity="0%";
            }
        });

        var necessityFilter = document.querySelector('.necessityKey')
        necessityFilter.addEventListener("click",function(){
            if (body.classList.contains("Necessity")){
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(180deg, #676767 0%, #FFFFFF 100%)"
                subtitle.innerText = "Mask Type: Necessity"
            } else {
                person.style.opacity="0%";
            }
        });

        var statementFilter = document.querySelector('.statementKey')
        statementFilter.addEventListener("click",function(){
            if (body.classList.contains("Statement")){
                person.style.opacity="100%";
                document.body.style.background="none";
                document.body.style.background="linear-gradient(180deg, rgb(51, 51, 255) 0%, #E70E00 100%)"
                subtitle.innerText = "Mask Type: Statement"
            } else {
                person.style.opacity="0%";
            }
        });

        var asiaFilter = document.querySelector('.asia')
        asiaFilter.addEventListener("click",function(){
            if (person.classList.contains("asia")){
                person.style.opacity="100%";
                document.body.style.background="none";
                document.body.style.background="linear-gradient(180deg, rgb(51, 51, 255) 0%, #FFFFFF 100%)"
            } else {
                person.style.opacity="0%";
            }
        });

        var europeFilter = document.querySelector('.europe')
        europeFilter.addEventListener("click",function(){
            if (person.classList.contains("europe")){
                person.style.opacity="100%";
                document.body.style.background="none";
                document.body.style.background="linear-gradient(180deg, rgb(51, 51, 255) 0%, #FFFFFF 100%)"
            } else {
                person.style.opacity="0%";
            }
        });

        var northAmericaFilter = document.querySelector('.namerica')
        northAmericaFilter.addEventListener("click",function(){
            if (person.classList.contains("namerica")){
                person.style.opacity="100%";
                document.body.style.background="none";
                document.body.style.background="linear-gradient(180deg, rgb(51, 51, 255) 0%, #FFFFFF 100%)"
            } else {
                person.style.opacity="0%";
            }
        });

        var southAmericaFilter = document.querySelector('.samerica')
        southAmericaFilter.addEventListener("click",function(){
            if (person.classList.contains("samerica")){
                person.style.opacity="100%";
                document.body.style.background="none";
                document.body.style.background="linear-gradient(180deg, rgb(51, 51, 255) 0%, #FFFFFF 100%)"
            } else {
                person.style.opacity="0%";
            }
        });

        var australiaFilter = document.querySelector('.australia')
        australiaFilter.addEventListener("click",function(){
            if (person.classList.contains("australia")){
                person.style.opacity="100%";
                document.body.style.background="none";
                document.body.style.background="linear-gradient(180deg, rgb(51, 51, 255) 0%, #FFFFFF 100%)"
            } else {
                person.style.opacity="0%";
            }
        });

        var africaFilter = document.querySelector('.africa')
        africaFilter.addEventListener("click",function(){
            if (person.classList.contains("africa")){
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
            titleBox.classList.toggle("titleBoxTwo");
            });

        titleBox.addEventListener("click", () => {
            document.querySelectorAll(".person").forEach((person) => {
                if (person.classList.contains(continent)) {
                    person.style.opacity = "1";
                } else {
                     person.style.opacity = "0";
                }
            });
        });
    })};
