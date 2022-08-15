function woodCalculator (ChairQuantity, tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = ChairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const toalWood = chairWood+tableWood+bedWood;
    return toalWood;
}
const toalWood = woodCalculator(1,1,1);
console.log(toalWood);