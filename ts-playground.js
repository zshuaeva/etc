function findYoungestCarOwner(people) {
    var youngestCarOwner = null;
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        if (person.hasACar && (!youngestCarOwner || person.age < youngestCarOwner.age)) {
            youngestCarOwner = person;
        }
    }
    return youngestCarOwner ? youngestCarOwner.name : null;
}
