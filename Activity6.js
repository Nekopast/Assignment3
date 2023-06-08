const bobsFollowers = "Jerry, Tim, Robbert, Dianna"
const hannahsFollowers = "Juddy, Dianna, Tim, Daphnny"

let mutualFollowers= [];

for(let i = 0; i < bobsFollowers.length; i++){
    for(let x = 0 < hannahsFollowers.length; x++;){
        if(bobsFollowers[i] === hannahsFollowers[x]){
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}

console.log(mutualFollowers);