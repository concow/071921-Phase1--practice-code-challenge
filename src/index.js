//First add 'defer' to index.html <script>

//Object Properties:
    //id, name, isGoodDog, image

const dogUrl = "http://localhost:3000/pups"
const dogBar = document.getElementById('dog-bar');
const dogInfo = document.getElementById('dog-info');

//STEP 1
fetch(dogUrl)
    .then((response) => response.json())
    .then(handleDogs);
    //.then((data) => (data));
    //.then((data) => handleDogs(data));
//STEP 2
function handleDogs(dogs) {
    dogs.forEach((dog) => {
        const dogSpan = document.createElement('span');
        dogSpan.innerText = dog.name
        dogBar.append(dogSpan)
        //console.log(dogSpan);
//STEP 3 Attach Click Handler on our Dogs when Clicked
        dogSpan.addEventListener('click', () => {
            showDogInfo(dog);
        });
    });
}

function showDogInfo(dog) {
    //replace elements in properties. template literal we can interpolate
    dogInfo.innerHTML = `  
        <img src=${dog.image}>             
        <h2>${dog.name}</h2>
        <button>${dog.isGoodDog ? 'Good' : 'Bad'} Dog!</button>`
        //is dog good ? if yes return good : if no return bad
    ;
    //attach eventlistener to our button
    dogInfo.querySelector('button').addEventListener('click', () => {       //eventlistener inline cb function
        dog.isGoodDog = !dog.isGoodDog;     //will swap truthy to falsey & vice versa
        showDogInfo(dog);                   //call here to render change every time event button is clicked
    });                                     //to only change from 'Good Dog' to 'Bad Dog'
}