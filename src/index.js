const dogUrl = 'http://localhost:3000/pups/';
//const dogBar = document.querySelector('dog-bar')

fetch(dogUrl)
.then((res) => res.json())
.then((data) => addPupElements(data))

//Show Info/Click Event
function heyYall() {

}
//add pups to DogBar
function addPupElements(pupArray) {
    const dogBar = document.getElementById('dog-bar');
    
    pupArray.forEach((pup) => {
        //console.log(pup);
        const pupObj = document.createElement('span')
        pupObj.innerText = pup.name;
        //pupObj.span = pup;
        dogBar.append(pupObj);
        //console.log(pupObj);
     });
}
function addPups(pup) {

}