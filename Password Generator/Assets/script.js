    var nums="0123456789"
    var spcChar= "~!@#$%^&*_-+=?[]/|'"
    var caps= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var low= "abcdefghijkklmnopqrstuvwxyz"
    var output=""
    var bank=""

function randomPassword() {
    var passwordLength= prompt("How many characters would you like your password to be?");
    var includeNums= confirm("Would you like numbers in your password?");
    var includeSpcChar= confirm("Would you like special characters in your password?");
    var includeCaps= confirm("Would you like capital letters in your password?");
    var includeLow= confirm("Would you like lower case letters in your password?");


    if (includeNums) {

        bank +=nums;

        output+= makeid(nums,1);

    }

    if (includeCaps) {

        bank += caps;

        output+= makeid(caps,1);
        
    }

    if (includeSpcChar) {

        bank += spcChar;

        output+= makeid(spcChar,1);
         
    }

    if (includeLow) {

        bank += low;

        output+= makeid(low,1);
    }

    var remLength= passwordLength-output.length;

    output+= makeid(bank,remLength);

    document.getElementById("password").innerHTML = output;
    

}


function makeid(inputstring,length) {
    var charactersLength = inputstring.length;
    var  retVal = "";
    for ( var i = 0; i < length; i++ ) {
        retVal += inputstring.charAt(Math.floor(Math.random() * charactersLength));
    }
    return retVal;
}
    
function copyoutput() {

    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand('copy');

}