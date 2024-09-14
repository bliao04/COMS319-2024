function runTask0() {
    const codeName = document.getElementById("myname").value;
    const codeEmail = document.getElementById("myemail").value;
    try {
        console.log("Code:"+codeName+"  "+codeEmail);
        document.getElementById("task0Result").innerText = codeName+", "+codeEmail;
    } catch (error) {
        document.getElementById("task0Result").innerText = "Error: " + error.message;
    }
}
/*

           Tasks with Variables

 */
function runTask1() {
    const code = document.getElementById("task1Input").value;
    try {
        console.log("Code:"+code)
        eval(code);
        document.getElementById("task1ResultE").innerText = "";
        document.getElementById("task1Result").innerText = "Check the console log for the output.";
    } catch (error) {
        document.getElementById("task1Result").innerText = "";
        document.getElementById("task1ResultE").innerText = "Error: " + error.message;
    }
}

// Task 7: Create variable with input integer
function runTask7() {
    const code = document.getElementById("task7Input").value;
    let someInteger;
    try {
        eval(code+"; someInteger = num;");  // num value some Integer
        console.log(code);
        console.log("Value :",someInteger);
        if (typeof num === 'number' && Number.isInteger(num)){
            document.getElementById("task7ResultE").innerText = "";
            document.getElementById("task7Result").innerText = "Check the console log for the output.";
        } else {
            throw new Error('Variable is not Integer');
        }
    } catch (error) {
        document.getElementById("task7Result").innerText = "";
        document.getElementById("task7ResultE").innerText = "Error: " + error.message;
    }
}

// Task 8: Create variable with input string
function runTask8() {
    const code = document.getElementById("task8Input").value;
    try {
        console.log(code);
        let str = code;
        console.log(str);
        document.getElementById("task8ResultE").innerText = "";
        document.getElementById("task8Result").innerText = "Check the console log for the output.";
    } catch (error) {
        document.getElementById("task8Result").innerText = "";
        document.getElementById("task8ResultE").innerText = "Error: " + error.message;
    }
}

// Task 9: Create constant and modify it to trigger error
function runTask9() {
    let c1,c2;
    const code1 = document.getElementById("task9Input").value;
    const code2 = document.getElementById("task99Input").value;
    try {
        console.log(code1);
        console.log(code2);
        const s1 = code1.split(" ");
        const s2 = code2.split(" ");
        console.log(s1,+" "+s2);
        console.log(s2.length);

        eval(code1);
        eval(code2);

        if (s1[0] === "const"){
            if (s1[1] === "constNum"){
                if (s2.length == 1) {
                    document.getElementById("task9ResultE").innerText = "";
                    document.getElementById("task9Result").innerText = "Check the console log for the output.";
                } else {
                    throw new Error('A constant cannot be modified');
                }
            } else {
                throw new Error('It must use constNum');
            }
        } else {
            throw new Error('Declare a constant');
        }
    } catch (error) {
        document.getElementById("task9Result").innerText = "";
        document.getElementById("task9ResultE").innerText = "Error: " + error.message;
    }
}

/*

Tasks with Operators

*/


/*

Tasks with Arrays

*/
let myArray = [];

// Add to the End
function runTask20() {
    const code = document.getElementById("task20Input").value;
    // First, check if the input contains the required "myArray.push" pattern
    if  (/myArray\.push\(.+\)/.test(code)) {
        try {
            eval(code);
            console.log(myArray);
            document.getElementById("task20ResultE").innerText = "";
            document.getElementById("task20Result").innerText = "Check the console log for the output.";
        } catch (error) {
            document.getElementById("task20Result").innerText = "";
            document.getElementById("task20ResultE").innerText = "Error: " + error.message;
        }
    } else {
        // If the input does not contain "myArray.push", show an error message
        document.getElementById("task20Result").innerText = "";
        document.getElementById("task20ResultE").innerText = "Error: You must use 'myArray.____(item)' to add an item to the array.";
    }
}

// Add to the End
function runTask25() {
    const code = document.getElementById("task25Input").value;
    // First, check if the input contains the required "myArray.push" pattern
    if  (/myArray\.push\(.+\)/.test(code)) {
        try {
            eval(code);
            console.log(myArray);
            document.getElementById("task25ResultE").innerText = "";
            document.getElementById("task25Result").innerText = "Check the console log for the output.";
        } catch (error) {
            document.getElementById("task25Result").innerText = "";
            document.getElementById("task25ResultE").innerText = "Error: " + error.message;
        }
    } else {
        // If the input does not contain "myArray.push", show an error message
        document.getElementById("task25Result").innerText = "";
        document.getElementById("task25ResultE").innerText = "Error: You must use 'myArray.____(item)' to add an item to the array.";
    }
}


// Add to the Beginning
function runTask30() {
    const code = document.getElementById("task30Input").value;
    // First, check if the input contains the required "myArray.unshift" pattern
    if  (/myArray\.unshift\(.+\)/.test(code)) {
        try {
            eval(code);
            console.log(myArray);
            document.getElementById("task30ResultE").innerText = "";
            document.getElementById("task30Result").innerText = "Check the console log for the output.";
        } catch (error) {
            document.getElementById("task30Result").innerText = "";
            document.getElementById("task30ResultE").innerText = "Error: " + error.message;
        }
    } else {
        // If the input does not contain "myArray.unshift", show an error message
        document.getElementById("task30Result").innerText = "";
        document.getElementById("task30ResultE").innerText = "Error: You must use 'myArray._____(item)' to add an item to the array.";
    }
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// Add to position
function runTask35() {
    const myArray2 = [...myArray];
    myArray2.splice(2,0,"AMES");
    const code = document.getElementById("task35Input").value;
    try {
        eval(code);
        console.log(myArray);
        if (arraysEqual(myArray2, myArray)) {
            document.getElementById("task35ResultE").innerText = "";
            document.getElementById("task35Result").innerText = "Check the console log for the output.";
        } else {
            throw new Error('Item not added correctly');
        }
    } catch (error) {
        document.getElementById("task35Result").innerText = "";
        document.getElementById("task35ResultE").innerText = "Error: " + error.message;
    }
}


// Find an item
function runTask40() {
    const code = document.getElementById("task40Input").value;
    // First, check if the input contains the required "myArray.indexOf" pattern
    if  (/myArray\.indexOf\(.+\)/.test(code)) {
        try {
            console.log(myArray);
            const exist = eval(code);
            // find an item
            if (exist >= 0){
                document.getElementById("task40ResultE").innerText = "";
                document.getElementById("task40Result").innerText = "Check the console log for the output.";
            }else{
                throw new Error('The item does not exist');
            }
        } catch (error) {
            document.getElementById("task40Result").innerText = "";
            document.getElementById("task40ResultE").innerText = "Error: " + error.message;
        }
    }else{
         // If the input does not contain "myArray.indexOf", show an error message
         document.getElementById("task40Result").innerText = "";
         document.getElementById("task40ResultE").innerText = "Error: You must use 'myArray._____(item)' to find an item in the array.";
    }
}


// Remove Last item
function runTask80() {
    const code = document.getElementById("task80Input").value;
    const myArray2 = [...myArray];
    myArray2.pop();
    // First, check if the input contains the required "myArray.pop" pattern
    if  (/myArray\.pop\(\)/.test(code)) {
        try {
            eval(code);
            console.log(myArray);
            if (arraysEqual(myArray2, myArray)) {
                document.getElementById("task80ResultE").innerText = "";
                document.getElementById("task80Result").innerText = "Check the console log for the output.";
            } else {
                throw new Error('Last item was not removed correctly');
            }
        } catch (error) {
            document.getElementById("task80Result").innerText = "";
            document.getElementById("task80ResultE").innerText = "Error: " + error.message;
        }
    }else{
        // If the input does not contain "myArray.pop", show an error message
        document.getElementById("task80Result").innerText = "";
        document.getElementById("task80ResultE").innerText = "Error: You must use 'myArray._____(item)' to remove an item at end of the array.";
    }
}

// Remove First item
function runTask85() {
    const code = document.getElementById("task85Input").value;
    const myArray2 = [...myArray];
    myArray2.shift();
    // First, check if the input contains the required "myArray.shift" pattern
    if  (/myArray\.shift\(\)/.test(code)) {
        try {
            eval(code);
            console.log(myArray);
            if (arraysEqual(myArray2, myArray)) {
                document.getElementById("task85ResultE").innerText = "";
                document.getElementById("task85Result").innerText = "Check the console log for the output.";
            } else {
                throw new Error('The item removed was not the First item');
            }
        } catch (error) {
            document.getElementById("task85Result").innerText = "";
            document.getElementById("task85ResultE").innerText = "Error: " + error.message;
        }
    }
    else {
        // If the input does not contain "myArray.shift", show an error message
        document.getElementById("task85Result").innerText = "";
        document.getElementById("task85ResultE").innerText = "Error: You must use 'myArray._____(item)' to remove an item at beginning of the array.";
    }
    } 
