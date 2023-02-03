// [45, 21, ]

const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'Silver' },
    { name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'Silver' },
    { name: 'iphone', camera: 10, storage: '32gb', price: 82000, color: 'Silver' },
    { name: 'xaomi', camera: 10, storage: '32gb', price: 52000, color: 'Silver' },
    { name: 'Oppo', camera: 10, storage: '32gb', price: 20000, color: 'Silver' },
    { name: 'Nokia', camera: 10, storage: '32gb', price: 44000, color: 'Silver' },
    { name: 'HTC', camera: 10, storage: '32gb', price: 62000, color: 'Silver' }
]
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }

    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);