const os= require("os")
const path=require('path')

console.log(path.resolve(__filename));
console.log("network ", os.networkInterfaces());

// console.log(os.type());
// console.log(os.version());
// console.log(os.platform());
// console.log(os.arch());

// let totalMem=os.totalmem();
// console.log(totalMem);

// let freeMem=os.freemem();
// console.log(freeMem);
// let userinfo=os.userInfo();
// console.log(userinfo);

// console.log(os.uptime());

// console.log(os.cpus());

 console.log(os.networkInterfaces());




