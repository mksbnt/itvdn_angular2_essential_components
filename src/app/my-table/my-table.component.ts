import { Component, OnInit } from "@angular/core";
import { Product } from "../../product";
import { PRODUCTS } from "../../productsList";

@Component({
  selector: "app-my-table",
  templateUrl: "./my-table.component.html",
  styleUrls: ["./my-table.component.css"]
})
export class MyTableComponent implements OnInit {
  product: Product = {
    id: 1,
    name: "product 1",
    price: 100,
    category: 1,
    currentRate: 2
  };

  products = PRODUCTS;

  delete(i) {
    console.log("id: " + this.products[i].id);
    this.products.splice(i, 1);
  }

  isBgDanger(i) {
    if (this.products[i].price > 500) {
      return true;
    } else {
      return false;
    }
  }

  showCategory1(i) {
    if (this.products[i].category == 1) {
      return true;
    } else {
      return false;
    }
  }

  showCategory2(i) {
    if (this.products[i].category == 2) {
      return true;
    } else {
      return false;
    }
  }

  showCategory3(i) {
    if (this.products[i].category == 3) {
      return true;
    } else {
      return false;
    }
  }

  choice: number;

  switchCase1() {
    return (this.choice = 1);
  }

  switchCase2() {
    return (this.choice = 2);
  }

  switchCase3() {
    return (this.choice = 3);
  }

  constructor() {}

  ngOnInit() {}
}
