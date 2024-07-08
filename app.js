// class Boxer {
//   //   constructor(name, age, weight) {
//   //     this.name = name;
//   //     this.age = age;
//   //     this.weight = weight;
//   //   }
//   constructor(params) {
//     this.name = params.name;
//     this.age = params.age;
//     this.weight = params.weight;
//   }
//   about() {
//     console.log(`Ismi: ${this.name}`, `Yoshi: ${this.age}`);
//   }
//   get ism() {
//     return this.name;
//   }
//   set ism(newName) {
//     this.name = newName;
//   }
// }

// // const tayson = new Boxer("Tayson", 58, 100);
// const tayson = new Boxer({
//   name: "Tayson",
//   age: 58,
//   weight: 100,
// });
// const bahodir = new Boxer({
//   name: "Bahodir",
//   age: 28,
//   weight: 105,
// });
// // tayson.name = "Chori" // tavsiya qilinmaydi
// tayson.ism = "Chori"
// console.log(tayson);
// console.log(typeof Boxer);
// tayson.about();

// class Animal {
//   constructor(params) {
//     this.name = params.name;
//     this.age = params.age;
//     this.color = params.color;
//   }
//   voice() {
//     console.log("Animal voice");
//   }
// }

// class Mushuksimon extends Animal {
//   constructor(params) {
//     super(params); // name, age , color
//     this.speed = params.speed;
//     this.isTail = true;
//   }
//   voice() {
//     console.log("Cats voice");
//   }
// }

// const pishak = new Mushuksimon({
//   name: "Mallavoy",
//   age: 2,
//   color: "Sariq",
//   speed: 100,
// });

// console.log(pishak);

// pishak.voice();

// class Arslon extends Mushuksimon {
//   constructor(params) {
//     super(params);
//     this.isJumper = params.isJumper;
//   }
//   voice() {
//     console.log("Men arslonman, arslonman");
//   }
// }
// const arsloncha = new Arslon({
//   name: "Jahon",
//   age: 10,
//   color: "Qora",
//   speed: 200,
//   isJumper: true,
// });

// console.log(arsloncha);
// arsloncha.voice();

// console.log(document);

// const box1 = document.querySelector("#box1");

// box1.style.backgroundColor = "red";


// class MyComponent {
//   constructor(params) {
//     this.$element = document.querySelector(params.selector);
//   }

//   show() {
//     this.$element.style.display = "block";
//   }

//   hide() {
//     this.$element.style.display = "none";
//   }

// }


// class MyBox extends MyComponent {
//   constructor(params) {
//     super(params);
//     this.$element.style.width = params.width;
//     this.$element.style.height = params.height;
//     this.$element.style.background = params.background;
//     this.$element.style.borderRadius = params.borderRadius;
//   }
// }

// const box1 = new MyBox({
//   selector: "#box1",
//   width: "100px",
//   height: "100px",
//   background: "blue",
// })

// const box2 = new MyBox({
//   selector: "#box2",
//   width: "100px",
//   height: "100px",
//   background: "khaki",
// });

// const box3 = new MyBox({
//   selector: "#box3",
//   width: "100px",
//   height: "100px",
//   background: "red",
// });
// // box1.hide();


// class Mainbox extends MyComponent {
//   constructor(params) {
//     super(params);
//   }

//   ustun(){
//     this.$element.style.display = "block"
//   }
// }

// const mainbox = new Mainbox({
//   selector: "#main",
// })


// mainbox.ustun()

// const circle = new MyBox({
//   selector: "#circle",
//   width: "100px",
//   height: "100px",
//   background: "grey",
//   borderRadius: "50%",
// });

// class Workers {
//   name; //public
//   birthday; //public
//   static ishchiTuri = "Ustoz";
//   _oilali; //protected
//   #maoshi;
//   constructor(name, birthday, oilali, maosh) {
//     this.name = name;
//     this.birthday = birthday;
//     this._oilali = oilali;
//     this.#maoshi = maosh;
//   }

//   get maosh() {
//     return this.#maoshi;
//   }

//   set maosh(newMaosh) {
//     this.#maoshi = newMaosh;
//   }
// }

// class Staff extends Workers {
//   constructor(name, birthday, oilali, subject, maosh) {
//     super(name, birthday, oilali, maosh);
//     this.subject = subject;
//   }
//   set changeFamily(newOila) {
//     this._oilali = newOila;
//   }

//   get changeFamily() {
//     return this._oilali;
//   }
// }

// const ustoz1 = new Staff("Nodir", new Date(2000, 1, 12), true, "NodeJS", 2000);

// ustoz1.changeFamily = false;
// // ustoz1._oilali = false; //Dasturchi ixtiyorida
// console.log(ustoz1);


//----------------------------------------------------------------

class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      return true;
    } else {
      return false;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      return true;
    } else {
      return `Not enough funds`;
    }
  }

  checkBalance() {
    return this._balance;
  }
}


const account1 = new BankAccount(1000);

account1.deposit(500);

account1.withdraw(1000);

console.log(account1.checkBalance());


