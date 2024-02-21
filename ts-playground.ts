interface Person {
  name: string;
  age: number;
  hasACar: boolean;
}

function findYoungestCarOwner(people: Person[]): string | null {
  let youngestCarOwner: Person | null = null;

  for (const person of people) {
      if (person.hasACar && (!youngestCarOwner || person.age < youngestCarOwner.age)) {
          youngestCarOwner = person;
      }
  }

  return youngestCarOwner ? youngestCarOwner.name : null;
}
