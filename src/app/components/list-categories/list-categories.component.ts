import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  public listCategories: any[];

  constructor(private productService: ProductService) {

    this.listCategories = [];

  }

  ngOnInit() {
    this.listCategories = this.productService.categories;
  }

  selectCategory(category) {
    this.productService.productsSelected = category.products;
  }

}
