
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const firstDogsUrl = 'https://dog.ceo/api/breeds/image/random/4'

let breedList = document.getElementById("dog-breeds")
let selector = document.getElementById("breed-dropdown")

breedList.addEventListener('click', handleBreedClick)
selector.addEventListener('change', handleSelectorChange)


function loadImages(){
    fetch(firstDogsUrl)
    .then(jsonify)
    .then(jsonifyMessages)
    }

function jsonify(jsonArray){
    // console.log(jsonArray.json())
    return jsonArray.json()
}

function jsonifyMessages(argument){
    argument.message.forEach(insertDogPic)
}

function insertDogPic(argument){
    let dogList = document.getElementById("dog-image-container")
    dogList.innerHTML += `<img src="${argument}">`
}

function loadDogBreeds(){
    fetch(breedUrl)
    .then(jsonify)
    .then(jsonifyMessage)
}

let array

function jsonifyMessage(argument){
    // console.log(argument.message)
    array = Object.keys(argument.message)
    // array.forEach(element => breedList.innerHTML += `<li>${element}</li>`)
    array.forEach(interpolateBreed)
}

function interpolateBreed(argument){
    breedList.innerHTML += `<li>${argument}</li>`
}

function handleBreedClick(e){
    if (e.target.tagName === "LI") {
        if (e.target.style.color === "red"){
            e.target.style.color = "black"
        } else {
            e.target.style.color = "red"
        }
    }
}

function handleSelectorChange(e){
    breedList.innerHTML = ""
    let selection = e.target.value
    searchBreeds(selection)
}

function searchBreeds(argument){
    const result = array.filter(word => word[0] === argument)

    result.forEach(interpolateBreed)

}

loadImages()
loadDogBreeds()