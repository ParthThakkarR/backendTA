function add(a,b,print){
    let res=a+b;
    print(res);
}

function printRes(res){
    console.log("Sum: ",res);
}

// add(5,2,printRes);

function subtract(a,b=10){
    let res=a-b;
    console.log(res);
}

subtract(12);
subtract(12,9);