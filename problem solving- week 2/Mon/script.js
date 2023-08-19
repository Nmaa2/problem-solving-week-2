function getArray(ar){
    let leader = ar[ar.length-1]
    let leaders=[leader]
    for(let i =ar.length-2; i >=0; i--){
        if(ar[i]>= leader){
            leader =ar[i]
            leaders.push(leader)
        }
    }
    return leader.reverse();
}
const a=[16,17,4,3,2,5]
const leader=getArray(a)
console.log(leader);