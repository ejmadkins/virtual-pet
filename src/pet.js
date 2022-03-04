const MAXIMUM_FITNESS = 10;
const INIT_AGE = 0;
const INIT_HUNGER = 0;

function Pet(name) {
  this.name = name;
  this.age = INIT_AGE;
  this.hunger = INIT_HUNGER;
  this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.growUp = function () {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function () {
  if (this.fitness + 4 <= MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

Pet.prototype.feed = function () {
  if (this.hunger - 3 >= INIT_HUNGER) {
    this.hunger -= 3;
  } else {
    this.hunger = INIT_HUNGER;
  }
};

Pet.prototype.checkUp = function () {
  if (this.fitness <= 3 && this.hunger >= 5) {
    return `I am hungry AND I need a walk`;
  } else if (this.fitness <= 3) {
    return `I need a walk`;
  } else if (this.hunger >= 5) {
    return `I am hungry`;
  } else {
    return `I feel great!`;
  }
};

module.exports = Pet;
