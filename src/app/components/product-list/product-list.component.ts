import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProdcutService } from 'src/app/services/prodcut.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProdcutService) { }

  // Similar to @PostConstruct method
  ngOnInit() {
    this.listProducts();
  }

  listProducts(){
    this.productService.getProductList().subscribe(
      data => {
        this.products = data; // Assign reesult to product array
      }
      )
  }

}
