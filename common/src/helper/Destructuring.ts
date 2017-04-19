class Destructing{
    //object Destructing
    constructor(){

    }
    public test(){
        
    let rect = { x: 0, y: 10, width: 15, height: 20 };
    // Destructuring assignment
    let {x, y, width, height} = rect;
    console.log(x, y, width, height); // 0,10,15,20

    //Array Destructuring
    let [x1, y2, ...remaining] = [1, 2, 3, 4];
    console.log(x1, y2, remaining); // 1, 2, [3,4]

    //for of 
    let someArray = [9, 2, 5];
        for (var item of someArray) {
            console.log(item); // 9,2,5
        }

        //Template Strings
    
    let lyrics = 'Never gonna give you up';
    let html = `<div>${lyrics}</div>`;
     console.log(html);

    }
    
}


//Interface

interface IPoint {
    x: number; y: number;
}

enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
}

enum Color {
    Red,     // 0
    Green,   // 1
    Blue     // 2
}

enum Color {
    DarkRed = 3,  // 3
    DarkGreen,    // 4
    DarkBlue      // 5
}