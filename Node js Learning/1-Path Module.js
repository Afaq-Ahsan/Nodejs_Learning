const path = require('node:path'); // importing node path module


// console.log(__dirname); // Directory full path
// console.log(__filename); // File full path

// console.log(path.basename(__dirname)); // Fetch exactly the Directory name
// console.log(path.basename(__filename)); // Fetch exactly the file name
 
// console.log(path.extname(__dirname)); //fetch the extension
// console.log(path.extname(__filename)); //fetch the extension

// console.log(path.parse(__filename)); // Get full detail of the path in a single go

//// const value = path.parse(__filename);
//// console.log("Root is  : ",value.root);

// console.log('full path is : ', path.format(path.parse(__filename))); // format the path

// console.log(
//   'check is it an absolute path or not : ',
//   path.isAbsolute(__filename)                        //path which given is it a right path or not
// );

// console.log(path.isAbsolute("./good.js"));           // here it will return false because this path is not exist


// console.log(path.join('Folder1', 'Folder2', 'index.html')); //convert this string into path
// console.log(path.join('\Folder1', '\\Folder2', '..\\index.html')); //give the same path 
// console.log(path.join(__dirname,"afaq.json"));

// console.log(path.resolve(path.join("Afaq","Ahsan","Irfan")));         //Resolve the pathname if there is any issue
// console.log(path.resolve(path.join("\\Afaq","\\ Ahsan","\\Irfan")));
// console.log(path.resolve(__dirname));