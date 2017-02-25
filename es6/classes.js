// Normal JS prototypal inheritance
function Car () {
  this.fuel = 0;
  this.distance = 0;
  this.topSpeed = Math.random();
}

Car.prototype.move = function () {
  if (this.fuel < 1) {
    throw new RangeError('Fuel tank is depleted')
  }
  this.fuel--
  this.distance += 2
}

Car.prototype.addFuel = function () {
  if (this.fuel >= 60) {
    throw new RangeError('Fuel tank is full')
  }
  this.fuel++
}

Car.prototype.isFaster = function (left, right) {
  return left.topSpeed > right.topSpeed
}

// ES6
class Car {
  constructor (speed) {
    this.fuel = 0
    this.distance = 0
    this.topSpeed = Math.random()
    this.speed = speed
  }
  // the static keyword will create a method associated with the class, and not with an instance of the class - can only reach a static method using the name of the class
  // Static methods have no access to the fields, properties, and methods defined on an instance of the class using this
  // USE = can play the roles of factory methods, conversion methods, or general class helper methods
  // e.g. Car.isFaster()
  static isFaster (left, right) {
    return left.topSpeed > right.topSpeed
  }
  move () {
    if (this.fuel < 1) {
      throw new RangeError('Fuel tank is depleted')
    }
    this.fuel--
    this.distance += 2
  }
  addFuel () {
    if (this.fuel >= 60) {
      throw new RangeError('Fuel tank is full')
    }
    this.fuel++
  }
}

// ES6 Inheritance
class Tesla extends Car {
  // To override base immediately to avoid calling super again below
  constructor (speed) {
    super(speed * 2)
  }
  move () {
    // super keyword identifies the Car class we’ve inherited from
    super.move()
    this.distance += 4
  }
}

var car = new Tesla();
car.addFuel();
car.move();
console.log(car.distance) // <- 6
