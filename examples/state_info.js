let stateInfo = [
    {
        state: "California",
        cities: ["San Diego", "San Francisco",
        "Santa Barbara", "Monterey", "Redwood City"]
    },
    {
        state: "Maryland",
        cities: ["Leonardtown", "St Leonard",
        "St Mary's City", "Annapolis", "Ocean City"]
    },
    {
        state: "Texas",
        cities: ["San Antonio", "Austin", "Pflugerville",
        "Dallas", "Ft Worth", "Paris", "Athens"]
    }
];

console.log("I live in " + stateInfo[1].cities[3] + " " + stateInfo[1].state);

myState = stateInfo[1]
myCity = myState.cities[3]
stateName = myState.state
console.log(`I live in ${ myCity } ${stateName}.`)