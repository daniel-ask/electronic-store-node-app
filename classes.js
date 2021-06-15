let calculateValue = function( Base ){
	return class extends Base{
		value(){
			return this.price * this.stock;
		}
	}
}


class Electronic {
  constructor(name, brand, price) {
    this.name = name;
    this.brand = brand;
    this.price = price;
  }

  toString() {
    return `${this.brand} ${this.name}`;
  }

  static electronic(testObject) {
    return testObject.__proto__ == Electronic.prototype;
  }
}

Electronic.prototype.stock = 10;
Electronic.type = "Electric type";
const electronicObject = new Electronic("Elec1", "Brand1", 100.0);
// console.log(electronicObject.type);
// console.log(Electronic.electronic(electronicObject));

class Phone extends calculateValue(Electronic) {
  constructor(name, brand, price, storageSize, year) {
    super(name, brand, price);
    this.storageSize = storageSize;
    this.year = year;
  }

  toString() {
    return (
      super.toString() + `\nStorage Size: ${this.storageSize}\nYear: ${this.year}`
    );
  }
}

class Computer extends calculateValue(Electronic) {
  constructor(name, brand, price, ram, cpu) {
    super(name, brand, price);
    this.ram = ram;
    this.cpu = cpu;
  }
}

// const nokia = new Phone("3310", "Nokia", 250, "15kb", "1995");
// console.log(nokia.toString());

module.exports = {
	Electronic,
	Computer,
	Phone
}
