const path = require('path')
console.log(path.sep);
const filePath = path.join('/content/','subcontent','test.txt')
console.log(filePath);
// to access the only last portion of the path file we use basename method
const basename = path.basename(filePath)
console.log(basename);
//to get the absolute path, we use resolve method
const absolute = path.resolve(__dirname,'/content','subcontent','test.txt');
console.log(absolute)
