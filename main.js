function showPassword(){
    pass = document.getElementById("textInput2");
    if(pass.type == "password"){
        pass.type = "text";
    }else{
        pass.type = "password";
    }
}
var textInput1 = document.getElementById("textInput1");
var textInput2 = document.getElementById("textInput2");

function submitCONSOLE(){
    if(textInput2.type == "password"){
        consoleConvert = textInput2.type = "password" , console.log(document.getElementById("textInput2").value);
        textInput2.type = "password";
    }
    console.log(document.getElementById("textInput1").value);
}