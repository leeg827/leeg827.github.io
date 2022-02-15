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

        var typeLocation =document.createElement("p")
        typeLocation.classList.add("description");
        typeLocation.innerText = "Location: "+mask.fields.city;
        typeBox.appendChild(typeLocation);

        var typeDescription =document.createElement("p")
        typeDescription.classList.add("description");
        typeDescription.innerText = "Location: "+mask.fields.description;
        typeBox.appendChild(typeDescription);
        

        var continent = mask.fields.biggerLocation;
        continent.forEach(function(continent){
            titleBox.classList.add(continent+"Button");
            person.classList.add(continent);
        });

        var main = document.querySelectorAll("h1")
        var subtitle = document.querySelector(".subtitle");
        var mainTitle = document.querySelector(".maintitle")

        var mouthFilter = document.querySelector('.mouthKey')
        mouthFilter.addEventListener("click",function(){
            if (body.classList.contains("Mouth")){
                mainTitle.style.color = "#FFF4D9";
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(180deg, rgb(255, 183, 82) 0%, #A37604 100%)"
                document.body.style.backgroundAttachment = "fixed";
                subtitle.innerText = "Mask Type: Mouth"
            } else {
                person.style.opacity="0%";
            }
        });

        // filter by Couture

        var coutureFilter = document.querySelector('.coutureKey')
        coutureFilter.addEventListener("click",function(){
            if (body.classList.contains("Couture")){
                mainTitle.style.color = "White";
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(180deg, #FF4034 0%, #FFC01F 20%, #497CFF 40%, #8EFF59 60%, #FF59C7 80%, #C854FF 100%)"
                document.body.style.backgroundAttachment = "fixed";
                subtitle.innerText = "Mask Type: Couture"
            } else {
                person.style.opacity="0%";
            }
        });
        
        // filter by Character

        var characterFilter = document.querySelector('.characterKey')
        characterFilter.addEventListener("click",function(){
            if (body.classList.contains("Character")){
                mainTitle.style.color = "#FFD9FB";
                person.style.opacity="100%";
                document.body.style.background="linear-gradient( #C854FF 0%, #7F409C 100%)"
                document.body.style.backgroundAttachment = "fixed";
                subtitle.innerText = "Mask Type: Character"
            } else {
                person.style.opacity="0%";
            }
        });

        // filter by figure

        var figureFilter = document.querySelector('.figureKey')
        figureFilter.addEventListener("click",function(){
            if (body.classList.contains("Figure")){
                mainTitle.style.color = "#ECEEFF";
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(#92B0FF 0%, #2A4DA6 100%)"
                document.body.style.backgroundAttachment = "fixed";
                subtitle.innerText = "Mask Type: Figure"
            } else {
                person.style.opacity="0%";
            }
        });

        // filter by detail

        var detailFilter = document.querySelector('.detailKey')
        detailFilter.addEventListener("click",function(){
            if (body.classList.contains("Detail")){
                mainTitle.style.color = "#F5FFEC";
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(180deg, #97E374 0%, #3B7B1D 100%)"
                document.body.style.backgroundAttachment = "fixed";
                subtitle.innerText = "Mask Type: Detail"
            } else {
                person.style.opacity="0%";
            }
        });

        //filter by pattern


        var patternFilter = document.querySelector('.patternKey')
        patternFilter.addEventListener("click",function(){
            if (body.classList.contains("Pattern")){
                mainTitle.style.color = "white";
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(180deg, #7A7A7A 7.81%, #545454 22.4%, #828282 38.54%, #4F4E4E 55.73%, #7A7A7A 71.87%, #4F4F4F 92.19%)";
                document.body.style.backgroundAttachment = "fixed";
                subtitle.innerText = "Mask Type: Pattern"
            } else {
                person.style.opacity="0%";
            }
        });

        var necessityFilter = document.querySelector('.necessityKey')
        necessityFilter.addEventListener("click",function(){
            if (body.classList.contains("Necessity")){
                mainTitle.style.color = "white";
                person.style.opacity="100%";
                document.body.style.background="linear-gradient(180deg, #2C2C2C 0%, #737373 100%)"
                document.body.style.backgroundAttachment = "fixed";
                subtitle.innerText = "Mask Type: Necessity"
            } else {
                person.style.opacity="0%";
            }
        });

        var statementFilter = document.querySelector('.statementKey')
        statementFilter.addEventListener("click",function(){
            if (body.classList.contains("Statement")){
                mainTitle.style.color = "#FFE0E0";
                person.style.opacity="100%";
                document.body.style.background="none";
                document.body.style.background="linear-gradient(180deg, #D2372D 0%, rgb(51, 51, 255) 100%)"
                document.body.style.backgroundAttachment = "fixed";
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
                document.body.style.backgroundImage="url('images/Asia.PNG')"
                document.body.style.backgroundAttachment = "fixed";
                document.body.style.backgroundSize ="cover";
                subtitle.innerText = "Continent : Asia"
            } else {
                person.style.opacity="0%";
            }
        });

        var europeFilter = document.querySelector('.europe')
        europeFilter.addEventListener("click",function(){
            if (person.classList.contains("europe")){
                person.style.opacity="100%";
                document.body.style.background="none";
                document.body.style.backgroundImage="url('images/Europe.PNG')"
                document.body.style.backgroundAttachment = "fixed";
                document.body.style.backgroundSize ="cover";
                subtitle.innerText = "Continent : Europe"
            } else {
                person.style.opacity="0%";
            }
        });

        var northAmericaFilter = document.querySelector('.namerica')
        northAmericaFilter.addEventListener("click",function(){
            if (person.classList.contains("namerica")){
                person.style.opacity="100%";
                document.body.style.background="none";
                document.body.style.backgroundAttachment = "fixed";
                document.body.style.backgroundSize ="cover";
                document.body.style.backgroundImage="url('images/northamerica.PNG')"
                subtitle.innerText = "Continent : North America"
            } else {
                person.style.opacity="0%";
            }
        });

        var southAmericaFilter = document.querySelector('.samerica')
        southAmericaFilter.addEventListener("click",function(){
            if (person.classList.contains("samerica")){
                person.style.opacity="100%";
                document.body.style.background="none";
                document.body.style.backgroundImage="url('images/southamerica.PNG')"
                document.body.style.backgroundAttachment = "fixed";
                document.body.style.backgroundSize ="cover";
                subtitle.innerText = "Continent : South America"
            } else {
                person.style.opacity="0%";
            }
        });

        var australiaFilter = document.querySelector('.australia')
        australiaFilter.addEventListener("click",function(){
            if (person.classList.contains("australia")){
                person.style.opacity="100%";
                document.body.style.background="none";
                document.body.style.backgroundImage="url('images/australia.PNG')"
                document.body.style.backgroundAttachment = "fixed";
                document.body.style.backgroundSize ="cover";
                subtitle.innerText = "Continent : Australia"
            } else {
                person.style.opacity="0%";
            }
        });

        var africaFilter = document.querySelector('.africa')
        africaFilter.addEventListener("click",function(){
            if (person.classList.contains("africa")){
                person.style.opacity="100%";
                document.body.style.background="none";
                document.body.style.backgroundImage="url('images/Africa.PNG')"
                document.body.style.backgroundAttachment = "fixed";
                document.body.style.backgroundSize ="cover";
                subtitle.innerText = "Continent : Africa"
            } else {
                person.style.opacity="0%";
            }
        });

        var reset = document.querySelector('.reset')
        reset.addEventListener("click",function(){
            mainTitle.style.color = "#1355FF";
            person.style.opacity="100%";
            document.body.style.background="none";
            document.body.style.backgroundImage="url('images/grid.png')"
            document.body.style.backgroundAttachment = "fixed";
            document.body.style.backgroundSize ="cover";
            subtitle.innerText = "In a world seperated by coronavirus, can we still find commonalities through our masks?"
            });

        var burger = document.querySelector('.burger')
        burger.addEventListener("click",function(){
            let aside = document.querySelector("aside");
            aside.classList.toggle("appear");
        });

        var frame = document.querySelector('.frame')
        frame.addEventListener("click",function(){
            img.classList.toggle("zoom");
            body.classList.toggle("gone");
            titleBox.classList.toggle("titleBoxTwo");
            typeBox.classList.toggle("typeBox2")
            person.classList.toggle("nomargin")
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

        person.addEventListener("click",()=>{
            document.querySelectorAll(".typeBox").forEach((typeBox)=>{
                typeBox.classList.toggle("active");
            })
        })
    })};


