const readlineSync = require("readline-sync");
const { Computer, Electronic, Phone } = require("./classes");

function app() {
  const electronics = {};
  console.log("Welcome!");
  const menu = function () {
    console.log("-----------------");
    console.log("1. Show all electronics");
    console.log("2. Add electronic");
    console.log("3. Delete electronic");
    console.log("4. Show value");
    console.log("5. Exit");
    return parseInt(readlineSync.question("Choose menu option: "));
  };

  const menuChoices = (choice) => {
    console.log("-----------------");
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
        const input = readlineSync.question(
          "Which electronic do you want to remove?: "
        );
        delete electronics[input];
        break;
      case 4:
        const inputForValue = readlineSync.question(
          "Which electronic do you want the value of?: "
        );
	console.log(electronics[inputForValue].value());
        break;
      case 5:
        console.log("Good bye");
        process.exit();
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
    if (type == "computer") {
      const ram = readlineSync.question("RAM: ");
      const cpu = readlineSync.question("CPU: ");
      device = new Computer(electronicName, brandName, price, ram, cpu);
    } else if (type == "phone") {
      const storage = readlineSync.question("Storage size: ");
      const year = readlineSync.question("Year: ");
      device = new Phone(electronicName, brandName, price, storage, year);
    } else if (type == "electronic") {
      device = new Electronic(electronicName, brandName);
    } else {
      console.log("Invalid input!");
    }
    electronics[electronicName] = device;
  }

  do {
    menuChoices(menu());
  } while (true);
}

app();
