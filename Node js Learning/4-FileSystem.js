// const fs = require("node:fs");

// const fileContent = fs.readFileSync("./file.txt","utf-8");  //fetch the file data
// console.log(fileContent);

// fs.readFile("./file.txt","utf-8",(error,data)=>{
//     if(error){
//       console.log("Here is the error : ",error);
//     }
//     else{
//       console.log("data is : ",data);
//     }
// })

// fs.writeFileSync("./greet.txt","Hello Ahsan");

// fs.writeFile("./greet.txt","Hello Ali How are you buddy",(err)=>{
//  if(err){
//   console.log("here is the error : ",err)
//  }else{
//   console.log("file is updated");
//  }
// })

// writing file without removing existing content
// fs.writeFile("./greet.txt"," Hey Umar I hope you are doing well too ",{flag:'a'},(err)=>{
//   if(err){
//    console.log("here is the error : ",err)
//   }else{
//    console.log("file is updated");
//    console.log("File updated you can check it");
//   }
//  })

// const fs = require("node:fs/promises");

// fs.readFile("./greet.txt","utf-8")
// .then((data)=>{console.log("data is : ",data)})
// .catch((error)=>{console.log("Error is : ",error)})

// const readFile =async ()=>{

//   try {
//     const data = await fs.readFile("./greet.txt","utf-8");
//     console.log("data is : ",data);
//   } catch (error) {

//     console.log("here is the error : ",error);

//   }

// }

// readFile();

// const fs = require('node:fs');

// const readAbleStream = fs.createReadStream("./greet.txt",{encoding: "utf-8"});

// console.log(readAbleStream);

// const writeAbleStream = fs.createWriteStream("./write.txt");

// readAbleStream.on("data",(chunk)=>{console.log("data is : ",chunk)
// writeAbleStream.write(chunk);
// })

// const readAbleStream = fs.createReadStream('./greet.txt', {
//   encoding: 'utf-8',
//   highWaterMark: 2,
// });
// console.log(readAbleStream);

// const writeAbleStream = fs.createWriteStream('./write.txt');

// console.log('write able stream is : ', writeAbleStream);

// readAbleStream.on('data', (chunk) => {
//   console.log('data is : ', chunk);
//   writeAbleStream.write(chunk);
// });


// const fs = require("node:fs");

// let file = fs.readFileSync("./greet.txt","utf-8");

// const name = "irfan";

// file = file.replace("and" , name);

// console.log(file);