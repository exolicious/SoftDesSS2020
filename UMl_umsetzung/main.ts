namespace uml_umsetzung { //Namespaces müssen mit einem Großbuchstaben anfangen
    let sentence: string = prompt("Satz bitte.");
    let stringArray: string[] = sentence.split(" ");//genauer benennen z.b sentenceArray

    let out1: string = ""; //Könnte besser benannt sein bzw funktion der Variable genauer beschreiben z.b output_first_sentence
    stringArray.forEach(element => {
        element = turnString(element);
        out1 += element;
    });

    let out2: string = turnString(stringArray);//genauer benennen: output_second_sentence

    let out3: string = turnString(sentence);//genauer benennen: output_third_sentence

    console.log(out1);
    console.log(out2);
    console.log(out3);


    function turnString(original: string | string[]): string {
        if (typeof original === "string") {
            var turned: string[] = original.split("");
            for (let i: number = 0; i < original.length; i++) {
                turned[0 + i] = original[original.length - 1 - i];
            }
        }
        else {
            // im uml wird bei beiden zweigen ein turned deklariert
            // sollte am anfang der funktion geschehen, da es sich um den gleichen Typ handelt
            // var turned: string[];  
            for (let i: number = 0; i < original.length; i++) {
                turned[0 + i] = original[original.length - 1 - i];
            }
        }
        let out: string;
        turned.forEach(element => {
            out += element;
        });
        return out;
    }
}

