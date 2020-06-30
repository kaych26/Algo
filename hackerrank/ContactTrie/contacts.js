function contacts(queries) {
    /*
     * Write your code here.
     */
    const result=[]
    const names=[]

    for (let i=0; i< queries.length; i+=1) {
        // console.log (`COMMAND = ${queries[i][0]}   ${queries[i][1]}`)
        if (queries[i][0] === 'add'){
            names.push(queries[i][1])
        }
        else if (queries[i][0] === 'find') {
            let count=0
            // console.log (`QUERIES = ${queries[i][1]}    ${names[0].slice(0,queries[i][1].length)}`)
            names.find(name=>{ 
                if (name.slice(0,queries[i][1].length) === queries[i][1]) {

                count+=1
                }
            })
            // names.forEach((name)=> {
            //     if (name.slice(0,queries[i][1].length) === queries[i][1] ) {
            //         count += 1
            //     }
            // })
            result.push (count)
    
            // console.log (`FOUND = ${found}`)
        }
    }

    return result
}
