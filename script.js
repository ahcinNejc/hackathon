const container = document.getElementById("container")


function showQR(){
    container.innerHTML = "";
    const par = document.createElement("p");
    par.innerText = "QR Koda";
    const img = document.createElement("img")
    img.src = "Sample_EPC_QR_code.png"

    container.appendChild(par)
    container.appendChild(img)
}
function showDelovniNalog(){
    container.innerHTML = "";
    const par = document.createElement("p");
    par.innerText = "Delovni nalog:";
    const img = document.createElement("img")
    img.src = "delovni_nalog.jpeg"

    container.appendChild(par)
    container.appendChild(img)
}








