const dogUrl = 'http://localhost:3000/pups/';

fetch(dogUrl)
.then((res) => res.json())
.then((data) => addPupElements(data))

//add pups to DogBar
function addPupElements(pupArray) {
    const dogBar = document.getElementById('dog-bar');
    
    pupArray.forEach(addPups);
}
function addPups(pup) {
    const dogBar = document.getElementById('dog-bar');
    const pupObj = document.createElement('span');
    pupObj.innerText = pup.name;
    //pupObj.span = pup;
    dogBar.append(pupObj);
    //console.log(pupObj);
    //pupObj.addEventListener("click", )
}
//Show Info/Click Event
function showInfo(e) {
    e.preventDefault();
    const createInfo = document.createElement('dog-info');
    const info = document.addEventListener("click", (event) => {
        const pupInfo = document.getElementById("#dog-bar span");
        console.log(pupInfo);

        
    })
}