const Pet = require("../src/pet-class");

describe("constructor", () => {
  const pet = new Pet("Fido");

  it("returns an object", () => {
    expect(pet).toBeInstanceOf(Object);
  });

  it("returns the name of the pet", () => {
    expect(pet.name).toBe("Fido");
  });
});

describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.age).toEqual(1);
  });

  it("increments the hunger by 5", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });

  it("decrements the fitness by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });

  describe("walk", () => {
    const pet = new Pet("Fido");
    it("increases fitness by 4", () => {
      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toEqual(8);
    });
    it("increases fitness to a maximum of 10", () => {
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });
  });

  describe("feed", () => {
    const pet = new Pet("Fido");
    it("decrease hunger by 3", () => {
      pet.hunger = 7;
      pet.feed();
      expect(pet.hunger).toEqual(4);
    });

    it("decreases to a minimum of 0", () => {
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });
  });

  describe("checkup", () => {
    const pet = new Pet("Fido");
    it("check state when fitness is 3 or below and hunger is 5 or more", () => {
      pet.hunger = 7;
      pet.fitness = 2;
      pet.checkUp();
      expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
    });

    it("check state when fitness is 3 or less", () => {
      pet.fitness = 3;
      pet.hunger = 4;
      pet.checkUp();

      expect(pet.checkUp()).toEqual("I need a walk");
    });

    it("check state when hunger is 5 or more", () => {
      pet.hunger = 7;
      pet.fitness = 4;
      pet.checkUp();

      expect(pet.checkUp()).toEqual("I am hungry");
    });

    it("check state when fitness is 4 or above and hunger is 4 or below", () => {
      pet.hunger = 4;
      pet.fitness = 4;
      pet.checkUp();

      expect(pet.checkUp()).toEqual("I feel great!");
    });

    it("throws an error if the pet is not alive", () => {
      pet.age = 30;
      expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
      expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
      expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
    });
  });

  describe("isAlive", () => {
    const pet = new Pet("Fido");
    it("check to see if pet is alive", () => {
      pet.age = 29;
      pet.fitness = 9;
      pet.fitness = 1;
      expect(pet.isAlive).toEqual(true);
    });

    it("check to see if pet is dead", () => {
      pet.age = 30;
      pet.fitness = 10;
      pet.fitness = 0;
      expect(pet.isAlive).toEqual(false);
    });
  });

  describe("adoptChild", () => {
    it("check to see if child object can be passed to parent", () => {
      const parent = new Pet("Dave");
      const child = new Pet("Amelia");

      parent.adoptChild(child);
      expect(parent.children).toEqual([
        {
          name: "Amelia",
          age: 0,
          hunger: 0,
          fitness: 10,
          children: [],
        },
      ]);
    });
  });

  describe("haveBaby", () => {
    it("check to see if child object can be created by parent", () => {
      const parent = new Pet("Dave");

      parent.haveBaby("Amelia");
      expect(parent.children).toEqual([
        {
          name: "Amelia",
          age: 0,
          hunger: 0,
          fitness: 10,
          children: [],
        },
      ]);
    });
  });
});
