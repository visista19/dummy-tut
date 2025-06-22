const {readFile, writeFile} = require('fs')
readFile('./content/first.txt','utf8',(err,result)=>{
 if (err){
    return;
 }
 const first = result;
 readFile('./content/second.txt','utf8',(err,result)=>{
    if (err){
        return;
    }
    const second=result;
    writeFile('./content/subcontent/test.txt',`Swarangi Visista Varshe, This has been tested`,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result,first,second)
    })
 })
})

