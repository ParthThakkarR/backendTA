function add(result){
    console.log(result);
}
function show(a,b,callback){
    let result=a+b;
    callback(result)
}

show(1,2,add)