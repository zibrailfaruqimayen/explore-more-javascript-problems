const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'agun'};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// chack array using Array.isArray
console.log(Array.isArray(friends));
// ----------------------------------
console.log(typeof add);


// ----------------------

console.log(friends.includes(19));
console.log(friends.includes(21));

if(friends.indexOf(252) !== -1){

}

// concat:

const newFriendsAge = [12, 13, 11, 13];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);



let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
console.log(sum);
