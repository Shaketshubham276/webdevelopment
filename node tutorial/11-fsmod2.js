const { readFile, writeFile, writeFileSync } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first=result;
    
    readFile('./content/second.txt', 'utf8',(err,result)=>{
        if (err) {

            console.log(err)

            return
        }
    const second=result
    writeFile(
        './content/result-sync.txt',`Here is the result and what are you doing here and what is up Bye good health`,
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with the task')
        }

        
               
        

    )
    })
})
console.log('starting next week');