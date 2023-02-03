/* 
fixed: per item wood requirements
1. chair --->  3 cft ----> 2 pes
2. table --->  10 cft -----> 2 pes
3. bad --->  50 cft ------> 5 pes

vary: quantity
*/


function woodCalculator(chairQuantity, tableQuantity, badQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBadWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const badWood = badQuantity * perBadWood;

    // console.log(chairQuantity, tableQuantity, badQuantity);

    const totalWood = chairWood + tableWood + badWood;
    return totalWood;
}

const totalWood = woodCalculator(2, 2, 5);
console.log('total wood required: ', totalWood);