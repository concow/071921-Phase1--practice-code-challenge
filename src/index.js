const dogUrl = 'http://localhost:3000/pups/';
//const dogBar = document.getElementById('dog-bar');
//const dogInfo = 

fetch(dogUrl)
.then((res) => res.json())
.then((data) => handleDogs(data))   
//.then(handleDogs);
//add pups to DogBar
function handleDogs(dogArray) {
    dogArray.forEach(dog => {
        const dogSpan = document.createElement('span');
        dogSpan.innerText = pup.name;
        dogBar.append(dogSpan);
        
        dogSpan.addEventListener('click', () => {
            showInfo(dog)
        });
    }); 
}
function handleDogs(dogArray) {
    const dogBar = document.getElementById('dog-bar');
    dogArray.forEach(addPups);
}
function addPups(pup) {
    const dogBar = document.getElementById('dog-bar');
    const pupSpan = document.createElement('span');
    pupSpan.innerText = pup.name;
    //pupObj.span = pup;
    dogBar.append(pupSpan);
    //console.log(pupObj);
    //clickHandler creates eventListener for each dogSpan
    
    pupSpan.addEventListener('click', e => {
        console.log(pup);
    })
}
//handleDogs();
function showInfo(pup) {
    e.preventDefault();

}
//Show Info/Click Event
// function showInfo(e) {
//     e.preventDefault();
//     const createInfo = document.createElement('dog-info');
//     const info = document.addEventListener("click", (event) => {
//         const pupInfo = document.getElementById("#dog-bar span");
//         console.log(pupInfo);
