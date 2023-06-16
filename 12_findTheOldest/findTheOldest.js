const findTheOldest = function(people) {
    let ages = people.map(item => {
        if ("yearOfDeath" in item) {
            return item.yearOfDeath - item.yearOfBirth;
        } else {
            return 2023 - item.yearOfBirth;
        }
    });

    let index = ages.findIndex(age => {
        let oldest = Math.max.apply(0, ages);

        return age === oldest;
    });

    return people[index];
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
