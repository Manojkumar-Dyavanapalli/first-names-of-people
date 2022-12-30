const peopleNames = require("../country/state/city/index");
const firstNamesOfPeople = require("../utilities/utils/index");

const getPeopleInCity = (peopleNames) => {
  return firstNamesOfPeople(peopleNames);
};
module.exports = getPeopleInCity;
