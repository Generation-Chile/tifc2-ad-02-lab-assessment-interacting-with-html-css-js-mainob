document.getElementById("main-title").textContent = "Good Bye"
document.getElementById("subtitle-2").style.color = "orange"

const clickeable = document.getElementById("subtitle-2")

clickeable.addEventListener("click",()=> {
    clickeable.style.color = "brown"
})