
const mapButton = document.getElementById("map")
const map = document.getElementsByClassName("map")[0]
console.log(mapButton)
document.getElementById("map").addEventListener("click",() =>{
    map.style.display = "block"
})

const mainctnr = document.getElementsByClassName("mainctnr")[0]

// gsap.to(mainctnr.style.transform,{duration: 1, scale:0.16, translateX:-3000)

const copyemail = () =>{
    let copyText = document.getElementById("email")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy")
    alert("Copied the text: " + copyText.value)
}
const copynumber = () =>{
    let copyText = document.getElementById("number")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy")
    alert("Copied the text: " + copyText.value)
}