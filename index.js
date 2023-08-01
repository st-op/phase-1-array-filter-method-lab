const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driversArr, name) {
    return driversArr.filter((driver) => driver.toLowerCase().includes(name.toLowerCase()));
}
console.log(findMatching(drivers, "Bobby"))

function fuzzyMatch(driversArr, letters) {
    return driversArr.filter((driver) => { 
        return driver.charAt(0, 1).includes(letters.charAt(0, 1));
    })
}
console.log(fuzzyMatch(drivers, "Sa"))
console.log(fuzzyMatch(drivers, "mm"))

function matchName(driversArr, name) {
    return driversArr.filter((driversObj) => name === driversObj.name);
}

console.log(matchName(drivers2, "Bobby"));