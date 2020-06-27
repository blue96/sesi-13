var password = "PASCAL FELIM";
var noSpace = removeSpace(password);
var reversed = reverseText(noSpace);
var encryptPass = encryptedPass(reversed);

document.write(encryptPass);

function removeSpace(text){
    return text.replace(' ', '');
}

function reverseText(text){
    var splitString = text.split("");
    var newText = splitString.reverse();
    var joinArr = newText.join("");
    return joinArr;
}
function encryptedPass(text = ""){
    var newText = [];
    for (let i = 0; i<text.length;i++){
        newText[i] = String.fromCharCode(text.charCodeAt(i) + 1);
    }
    var joinArr = newText.join("");
    return joinArr;
}