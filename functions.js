let input = document.getElementById("input-text");
let output = document.getElementById("output-text");

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

function copy(){
    let copyText = document.getElementById("output-text").innerText;
    navigator.clipboard.writeText(copyText);
    document.getElementById("paste").style.display = "block";
}

function paste(){
    navigator.clipboard.readText()
    .then((clipText) => (input.value = clipText));
}