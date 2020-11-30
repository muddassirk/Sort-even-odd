let arrrayOne = [];
let even = [];
let odd = [];

function rollNumber() {
    let userInput = parseInt(document.getElementById("userInput").value);
    arrrayOne.push(userInput);
    document.getElementById("storeRoll").innerHTML = arrrayOne;
    document.getElementById("userInput").value = "";
}
function arrangeArr() {
    for (i = 0; i < arrrayOne.length; i++) {

        if (arrrayOne[i] % 2 === 0) {
            even.push(arrrayOne[i]);
      

        }
        else {
            odd.push(arrrayOne[i]);

        }
        document.getElementById("evenNo").innerHTML = even;
        document.getElementById("oddNo").innerHTML = odd;
    }
}

