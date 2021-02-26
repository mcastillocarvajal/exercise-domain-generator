let pronoun = ['the','our'];
let adj = ['great', 'big', 'aleles'];
let noun = ['jogger','racom', 'claudio', 'lastOfUs'];
let domains = ['com','net','org','us', 'io', 'cr'];
const createDomains = () => {
    for (p in pronoun) {
        for (a in adj) {
            for (n in noun) {
                for (d in domains){
                    let str=`${pronoun[p]}${adj[a]}${noun[n]}`;
                    if(str.includes(domains[d])){
                        let newStr = str.replace(domains[d], "");
                        finalStr = `${newStr}.${domains[d]}`
                        console.log(finalStr)
                    } else {
                        console.log(`${str}.${domains[d]}`)
                    }
                }
            }
        }
    }
}
createDomains();



// function domainGenerator(){
//     let pronoun = ['the','our', 'my'];
//     let adj = ['great', 'big', 'little' ];
//     let noun = ['jogger','racom', 'dog'];
//     let domain = ['com','net', 'us'];

//     for (let i = 0; i < pronoun.length; i++){
//         for (let j = 0; j < adj.length; j++){
//             for (let k = 0; k < noun.length; k++){
//                 for (let g = 0; g < domain.length; g++){
//                     let url = pronoun[i] + adj[j] + noun[k] + "." + domain[g];
//                     console.log(url);
//                 }   
//             }
//         }
//     }
// }

// domainGenerator()