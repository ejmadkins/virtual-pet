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
