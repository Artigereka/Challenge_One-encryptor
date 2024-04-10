const input = document.getElementById("input-text");
const output = document.getElementById("output-text");
const button = document.querySelectorAll("button");

function onlyContainsLowercase(str){
    return /^[a-z0-9/ /:;,.¿?¡!]+$/.test(str);
}

function encrypt(){
    const chars = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    }

    if(onlyContainsLowercase(input.value)){
        let encriptedText = input.value.replace(/[aeiou]/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        output.textContent = encriptedText;
    } else{
        alert("Remember, only lowercase.");
    }
    document.getElementById("paste").style.display = "none";
}
   
function encryptDark(){
    const chars = {
        "d": "11",
        "a": "13",
        "r": "14",
        "k": "22"
    }

    if(onlyContainsLowercase(input.value)){
        let encriptedText = input.value.replace(/[dark]/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        output.textContent = encriptedText;
    } else{
        alert("Remember, only lowercase.");
    }
    document.getElementById("paste").style.display = "none";
}

function desencrypt(){
    const chars = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    }

    if(onlyContainsLowercase(input.value)){
        let desencriptedText = input.value.replace(/ai|enter|imes|ober|ufat/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        output.textContent = desencriptedText;
    } else{
        alert("Remember, only lowercase.");
    }
    document.getElementById("paste").style.display = "none";
}

function desencryptDark(){
    const chars = {
        "11": "d",
        "13": "a",
        "14": "r",
        "22": "k"
    }
    if(onlyContainsLowercase(input.value)){
        let desencriptedText = input.value.replace(/[11|13|14|22]/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        output.textContent = desencriptedText;
    } else{
        alert("Remember, only lowercase.");
    }
    document.getElementById("paste").style.display = "none";
}

function copy(){
    let copyText = output.innerText;
    navigator.clipboard.writeText(copyText);
    document.getElementById("paste").style.display = "block";
}

function paste(){
    navigator.clipboard.readText()
    .then((clipText) => (input.value = clipText));
}

button.forEach(element => element.addEventListener("click", (event) =>{
    element.classList.add("pulse");
    setTimeout(function() {
        element.classList.remove("pulse");
    }, 800);
}));