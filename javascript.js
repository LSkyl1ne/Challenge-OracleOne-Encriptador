let textarea = document.querySelector("#criptografar");
let criptografarBtn = document.querySelector(".criptografar");
let descriptografarBtn = document.querySelector(".descriptografar");
let output = document.querySelector(".output");
let noMessage = document.querySelector(".noMessage");
let message = document.querySelector(".message");
criptografarBtn.addEventListener("click", () => {
    let transformInArray = textarea.value.split("");
    for(let i = 0; i < transformInArray.length; i++){
        if(transformInArray[i] === "a"){
            transformInArray[i] = "ai";
        }
        else if(transformInArray[i] === "i"){
            transformInArray[i] = "imes";
        }
        else if(transformInArray[i] === "e"){
            transformInArray[i] = "enter";
        }
        else if(transformInArray[i] === "o"){
            transformInArray[i] = "ober";
        }
        else if(transformInArray[i] === "u"){
            transformInArray[i] = "ufat";
        }
    }
    let encryptedMessage = "";
    for(i = 0; i < transformInArray.length; i++){
        encryptedMessage = encryptedMessage + transformInArray[i]
    }
    console.log(encryptedMessage);
    noMessage.style.display = "none";
    message.innerHTML = "";
    message.innerHTML += "<p>" + encryptedMessage + "</p>";
    if(textarea.value == ""){
        noMessage.style.display = "block"
    }
})
descriptografarBtn.addEventListener("click", () => {
    let transformInArray = textarea.value.split("");
    for(let i = 0; i < transformInArray.length; i++){
        if(transformInArray[i] + transformInArray[i+1] === "ai"){
            transformInArray.splice(i+1, 1);
        }
        else if(transformInArray[i] + transformInArray[i+1] + transformInArray[i+2] + transformInArray[i+3] + transformInArray[i+4] === "enter"){
            transformInArray.splice(i+1, 4);
        }
        else if(transformInArray[i] + transformInArray[i+1] + transformInArray[i+2] + transformInArray[i+3] === "imes"){
            transformInArray.splice(i+1, 3);
        }
        else if(transformInArray[i] + transformInArray[i+1] + transformInArray[i+2] + transformInArray[i+3] === "ober"){
            transformInArray.splice(i+1, 3);
        }
        else if(transformInArray[i] + transformInArray[i+1] + transformInArray[i+2] + transformInArray[i+3] === "ufat"){
            transformInArray.splice(i+1, 3);
        }
    }
    let encryptedMessage = "";
    for(i = 0; i < transformInArray.length; i++){
        encryptedMessage = encryptedMessage + transformInArray[i]
    }
    console.log(encryptedMessage);
    noMessage.style.display = "none";
    message.innerHTML = "";
    message.innerHTML += "<p>" + encryptedMessage + "</p>";
    if(textarea.value == ""){
        noMessage.style.display = "block"
    }
})