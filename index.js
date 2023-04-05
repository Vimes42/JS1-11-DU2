console.log('Funguju')
let stones = document.querySelectorAll(".kamen")
let nadpis = document.querySelector("h1")

const stisknuti = (kamen) => {
    const ton = kamen.textContent
    nadpis.textContent = `${ton}`
    const zvuk = new Audio(`tony/${ton}.mp3`)
    zvuk.play()
}

const spustit = (event) => {
    stisknuti(event.target)
}

stones.forEach((stone) => {
    stone.addEventListener("click", spustit)
})





    