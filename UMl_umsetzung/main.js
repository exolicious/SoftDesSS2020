"use strict";
var uml_umsetzung;
(function (uml_umsetzung) {
    let sentence = prompt("Satz bitte.");
    let stringArray = sentence.split(" ");
    let out1 = "";
    stringArray.forEach(element => {
        element = turnString(element);
        out1 += element;
    });
    let out2 = turnString(stringArray);
    let out3 = turnString(sentence);
    console.log(out1);
    console.log(out2);
    console.log(out3);
    function turnString(original) {
        if (typeof original === "string") {
            var turned = original.split("");
            for (let i = 0; i < original.length; i++) {
                turned[0 + i] = original[original.length - 1 - i];
            }
        }
        else {
            // im uml wird bei beiden zweigen ein turned deklariert
            // sollte am anfang der funktion geschehen, da es sich um den gleichen Typ handelt
            // var turned: string[];  
            for (let i = 0; i < original.length; i++) {
                turned[0 + i] = original[original.length - 1 - i];
            }
        }
        let out;
        turned.forEach(element => {
            out += element;
        });
        return out;
    }
})(uml_umsetzung || (uml_umsetzung = {}));
//# sourceMappingURL=main.js.map