const leftCard = document.getElementById("left")
const midCard = document.getElementById("mid")
const rightCard = document.getElementById("right")

leftCard.onclick = e => {
  leftCard.classList.add("active")
  midCard.classList.remove("active")
  rightCard.classList.remove("active")
}

midCard.onclick = e => {
  leftCard.classList.remove("active")
  midCard.classList.add("active")
  rightCard.classList.remove("active")
}

rightCard.onclick = e => {
  leftCard.classList.remove("active")
  midCard.classList.remove("active")
  rightCard.classList.add("active")
}
