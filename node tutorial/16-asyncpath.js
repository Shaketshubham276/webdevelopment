const {readFile,writeFile}=require('fs')
const { resolve } = require('path')
const path = require('path')

const util=require('util');
const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)

const start= async()=>{
    try{
        const first=await readFilePromise('./content/first.txt')
        const second=await readFilePromise('./content/second.txt')
        await writeFilePromise(
            './content/result.txt',
            `THIS IS AWESOOME: ${first} ,${second}`
        )
        console.log(first,second)
    }
    catch(error){
        console.log(error)
    }
}
start()

// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 return
//             }
//             else{
//                 console.log(data)
//             }
//         })
//     })
// }

