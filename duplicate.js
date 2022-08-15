const friends = [12,34,5,67,12,87,34,23,54,36,36,75,89];

function remoteDuplicate(friends){
    const unique = [];
    for (let i =0; i<friends.length; i++){
        const friend = friends[i];
        if(unique.includes(friend)===false){
            unique.push(friend)
        }
    }
    return unique;
}
const uniqueFriends = remoteDuplicate(friends);
console.log(uniqueFriends);