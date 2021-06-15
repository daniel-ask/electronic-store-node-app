function Electronic(name, brand, price){
	this.name = name;
	this.brand = brand;
	this.price = price;
}

Electronic.prototype.stock = 10;
Electronic.prototype.toString = function(){
	return `${this.brand} ${this.name}`
}

function Phone(name, brand, price, storageSize, year){
	Electronic.call(this, name, brand, price);
	this.storageSize = storageSize;
	this.year = year;
}

function Computer(name, brand, price, ram, cpu){
	Electronic.call(this, name, brand, price);
	this.ram = ram;
	this.cpu = cpu;
}

Phone.prototype = Object.create(Electronic.prototype);
Computer.prototype = Object.create(Electronic.prototype);
const iPhone = new Phone('iPhone 12', 'Apple',1000.0, '128 GB', '2020');
const asusG14 = new Computer('G14', 'Asus', 1000.0, '16 GB','R5 something');
// const oppoPhone = new Electronic('R11', 'Oppo');
// console.log(iPhone);
// console.log(asusG14);

module.exports = {
	Electronic,
	Phone,
	Computer
}


