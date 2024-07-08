
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static distance(point1, point2) {
//     const dx = point2.x - point1.x;
//     const dy = point2.y - point1.y;
//     return Math.sqrt(dx * dx + dy * dy);
//   }
// }

// const p1 = new Point(5,5);
// const p2 = new Point(9, 8);

// console.log(Point.distance(p1, p2));

//------------------------------------------------------------------------

// class Universitet {
//   constructor(name) {
//     this.name = name;
//     this.departments = [];
//   }

//   addDepartment(department) {
//     this.departments.push(department);
//   }

//   removeDepartment(department) {
//     this.departments = this.departments.filter((d) => d!== department);
//   }

//   showDepartments() {
//     console.log(this.departments);
//   }

// }

// const university = new Universitet("BSU");

// university.addDepartment("Mathematics");

// university.addDepartment("Physics");

// university.addDepartment("Chemistry");

// university.addDepartment("Biology");

// university.addDepartment("Computer Science");

// university.showDepartments();

// university.removeDepartment("Physics");

// university.removeDepartment("Computer Science");

// university.showDepartments();

//--------------------------------------------------------

class Product {
  static productCount = 0;
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    Product.productCount++;
  }

  totalPrice() {
    return this.price * Product.productCount;
  }
}

class CareProduct extends Product {
  constructor(id, name, price, warrantyPeriod) {
    super(id, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  totalPrice() {
    const discount = this.calculateDiscount();
    return this.price * Product.productCount * (1 - discount);
  }

  calculateDiscount() {
    const today = new Date();
    const daysRemaining = Math.abs(Math.floor((this.warrantyPeriod - today) / (1000 * 60 * 60 * 24)))-1;
    
    if (daysRemaining == 5) return 0.1;
    if (daysRemaining == 4) return 0.2;
    if (daysRemaining == 3) return 0.3;
    if (daysRemaining == 2) return 0.4;
    if (daysRemaining <= 1) return 0.5;
    return 0;
  }
}

const careProduct1 = new CareProduct(1, "Shampoo", 100, new Date(2024, 6, 4));
const careProduct2 = new CareProduct(2, "Soap", 200, new Date(2024, 6, 5));

console.log(careProduct1.totalPrice());

console.log(careProduct2.totalPrice());

