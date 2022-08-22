//const url1 = "https://jonahtaylor-national-park-service-v1.p.rapidapi.com/lessonplans"
//const url2 = "https://jonahtaylor-national-park-service-v1.p.rapidapi.com/visitorcenters"
//const url3 = "https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks"

const settings = {
	method: 'GET',
	headers: {
		'X-Api-Key': "ph1SOk7adXIqOX8Dy8H84aKnXQgtEBphSUADxDa4",
		'X-RapidAPI-Key': '7e2193681fmsh8e6b65f523ce23dp1f4dfejsnc9013f9afd16',
	    "X-RapidAPI-Host": 'jonahtaylor-national-park-service-v1.p.rapidapi.com',
	}
};

//const input = document.getElementById("Inputtext");
const button = document.getElementById("search");
button.addEventListener("click", SearchPark);
function SearchPark() {

    let parksInput=document.getElementById("Inputtext");
    let userInput= parksInput.value.toLowerCase();
    console.log(userInput);
    const url3 = `https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks/?limit=500`;
    

const parksImage = document.getElementById("Parks");

const parksName = document.getElementById("Name");

const parkAddressL1 = document.getElementById("AddressL1");
const parkAddressL2 = document.getElementById("AddressL2");
const parkAddressCity = document.getElementById("AddressCity");
const parkAddressState = document.getElementById("AddressState");
const parkAddressCode = document.getElementById("AddressCode");

//const parkFees = document.getElementById("EntranceFees");

//const parkWeather = document.getElementById("Weather")

fetch(url3, settings)
	.then((response ) => { return response.json();})
	.then((response) => {
    // let NParks = response.data[20];
       console.log(response)
       let NParks = response.data.filter(park => park.fullName.toLowerCase().includes(userInput.toLowerCase()))[0];
      
      console.log(NParks);
        
       parksImage.src = NParks.images[0].url;
    
       parksName.innerText = NParks.fullName;
       parkAddressL1.innerText = NParks.addresses[0].line1;
       parkAddressL2.innerText = NParks.addresses[0].line2;
       parkAddressCity.innerText = NParks.addresses[0].city;   
       parkAddressState.innerText = NParks.addresses[0].stateCode;
       parkAddressCode.innerText = NParks.addresses[0].postalCode;
      // parkFees.innerText = NParks.entranceFees.cost;
      
      // parkWeather.innerText = NParks.weather;

    
   })
}

//div lesson plans

const LButton = document.getElementById("LessonSearch");
LButton.addEventListener("click", LessonSearch);

function LessonSearch() {
    //let  LessonInput = document.getElementById("LessonText");
    //let userLessonInput = LessonInput.value.toLowerCase();
    //console.log(userLessonInput);
    let rand = Math.floor(Math.random()*1172);
    const url1 = `https://jonahtaylor-national-park-service-v1.p.rapidapi.com/lessonplans/?limit=1&start=${rand}`;
    let LessonPlan = document.getElementById("Gradelvl")

fetch(url1, settings)
.then((response ) => { return response.json();}) 	
.then((response) => {

    let LessonGrade= response.data[0];
    console.log(response);
    LessonPlan.href = LessonGrade.url;
})}

//lets look at animals! - okay this isnt working at all!! 

// const Topic = document.getElementById("TopicSearch")
// Topic.addEventListener("click", Animals);

// function Animals() {
//     let rand = Math.floor(Math.random()*1172);
// const url2 = `https://jonahtaylor-national-park-service-v1.p.rapidapi.com/topics/parks/?limit=1&starts=${rand};`
// let Animals = document.getElementById("Animals")


// fetch (url2,settings)
// .then((response ) => { return response.json();}) 	
// .then((response) => {
//  let TopicAnimals = response.data.parks;

//  //Topic.innerText = TopicAnimals.Animals;
//  console.log(response)
//  Animals.href = TopicAnimals.name;

// })}
const Vbutton = document.getElementById("VSearch")
Vbutton.addEventListener("click", SearchV);

function SearchV() {
    let VInput = document.getElementById("VisitorText")
    let userVInput = VInput.value.toLowerCase();
    console.log(userVInput);
    const url2 = `https://jonahtaylor-national-park-service-v1.p.rapidapi.com/visitorcenters/?limit=700`;
    let VLink = document.getElementById("VisitorLink")


    fetch(url2, settings)
     .then((response) => {return response.json();})
     .then((response) => {
        console.log(response)
        let VCenter = response.data.filter(VC => VC.name.toLowerCase().includes(userVInput.toLowerCase()))[0];
        console.log(VCenter)

        VLink.href = VCenter.url;

     })
} //Okay - if you type in yellowstone or any 1 word search, it will work. 
//BUT it wont find grand canyon. things Ive tried,adding the .replace, adding a + in the url, adding %22/...
// at a loss why it works above in the first example but wont work here