document.getElementById("kontaktForma").addEventListener("submit", function(e){

e.preventDefault()

let ime = document.getElementById("ime").value
let email = document.getElementById("email").value
let poruka = document.getElementById("poruka").value

if(ime === "" || email === "" || poruka === ""){
alert("Molimo popunite sva polja!")
return
}

let podaci = {
ime: ime,
email: email,
poruka: poruka
}

localStorage.setItem("kontakt", JSON.stringify(podaci))

alert("Poruka je spremljena!")

})