class FunctionTypes{
    constructor(){

    }
    public typeonefunction(){ 
    let y = ()=>{return 'Hello'};

    let x =(b: string): string => {
        return b + 'Hello'
    }
    }


    // Rest Paramerts
    public iTakeItAll(first, second, ...allOthers) {
        console.log(allOthers);
    }
}