// What the hell am I doing?
/*
function doSomething (input) {
    return output
}

doSomething(234234) === "213" /* confirm that it works 

function add (x,y) {
    return x + y
}

add (3,4) === 7
*/

let pokemonImageURLs = [
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png'
]

for (let index = 0; index < pokemonImageURLs.length; index += 1) {
    let imageURL = pokemonImageURLs[index]
    document.write(`<img src="${imageURL}">`)
}

document.write("<h1>bottom of the page</h1>")



//document.querySelector()
// will give back first result it finds
//document.querySelectorAll()
// will give back all results it finds

//let firstParagraphElement = document.querySelector("p")
//console.log(firstParagraphElement)

let pokemonGalleryElement = document.querySelector(".pokemon-gallery")

let pokemonImage = document.createElement("img")
pokemonImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"

pokemonGalleryElement.append(pokemonImage)


let allParagraphElements = document.querySelectorAll("p")
console.log(allParagraphElements)
