const readlineSync = require("readline-sync");
const { Computer, Electronic, Phone } = require("./objects");

function app() {
  const electronics = {};
  console.log("Welcome!");
  const menu = function () {
    console.log("1. Show all electronics");
    console.log("2. Add electronic");
    console.log("3. Delete electronic");
    console.log("4. Exit");
    return parseInt(readlineSync.question("Choose menu option: "));
  };

  const menuChoices = (choice) => {
    switch (choice) {
      case 1:
        // console.log(Object.values(electronics));
        for (let electronic in electronics) {
          console.log(electronics[electronic].toString());
        }
        break;
      case 2:
        addElectronic();
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        console.log("Invalid input");
    }
  };

  function addElectronic() {
    let device;
    const electronicName = readlineSync.question("Name: ");
    const brandName = readlineSync.question("Brand: ");
    const price = parseFloat(readlineSync.question("Price: "));
    const type = readlineSync.question(
      "What type of electronic are you adding (Computer | Phone | Electronic): "
    );
    if(type == "computer") {
      const ram = readlineSync.question("RAM: ");
      const cpu = readlineSync.question("CPU: ");
      device = new Computer(electronicName, brandName, price, ram, cpu);
    }else if(type == 'phone'){
	    const storage = readlineSync.question('Storage size: ');
	    const year = readlineSync.question('Year: ');
	    device = new Phone(electronicName, brandName, price, storage, year);
    }else{
	device = new Electronic(electronicName, brandName);
    }
    electronics[electronicName] = device;
  }
  
  do{
	menuChoices(menu());
  }while(true);
}

app();
