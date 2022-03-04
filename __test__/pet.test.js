const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  it("returns the name of the pet", () => {
    const pet = new Pet("Fido");
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
    it("increases fitness by 4", () => {
      const pet = new Pet("fido");

      pet.fitness = 4;
      pet.walk();

      expect(pet.fitness).toEqual(8);
    });
    it("increases fitness to a maximum of 10", () => {
      const pet = new Pet("fido");

      pet.fitness = 8;
      pet.walk();

      expect(pet.fitness).toEqual(10);
    });
  });

  describe("feed", () => {
    it("decrease hunger by 3", () => {
      const pet = new Pet("fido");

      pet.hunger = 7;
      pet.feed();

      expect(pet.hunger).toEqual(4);
    });

    it("decreases to a minimum of 0", () => {
      const pet = new Pet("fido");

      pet.hunger = 2;
      pet.feed();

      expect(pet.hunger).toEqual(0);
    });
  });

  describe("checkup", () => {
    it("check state when fitness is 3 or below and hunger is 5 or more", () => {
      const pet = new Pet("fido");

      pet.hunger = 7;
      pet.fitness = 2;
      pet.checkUp();

      expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
    });

    it("check state when fitness is 3 or less", () => {
      const pet = new Pet("fido");

      pet.fitness = 3;
      pet.hunger = 4;
      pet.checkUp();

      expect(pet.checkUp()).toEqual("I need a walk");
    });

    it("check state when hunger is 5 or more", () => {
      const pet = new Pet("fido");

      pet.hunger = 7;
      pet.fitness = 4;
      pet.checkUp();

      expect(pet.checkUp()).toEqual("I am hungry");
    });

    it("check state when fitness is 4 or above and hunger is 4 or below", () => {
      const pet = new Pet("fido");

      pet.hunger = 4;
      pet.fitness = 4;
      pet.checkUp();

      expect(pet.checkUp()).toEqual("I feel great!");
    });
  });

  describe("isAlive", () => {
    it("check to see if pet is alive", () => {
      const pet = new Pet("fido");

      pet.age = 29;
      pet.fitness = 9;
      pet.fitness = 1;

      expect(pet.isAlive).toEqual(true);
    });

    it("check to see if pet is dead", () => {
      const pet = new Pet("fido");

      pet.age = 30;
      pet.fitness = 10;
      pet.fitness = 0;

      expect(pet.isAlive).toEqual(false);
    });
  });
});
