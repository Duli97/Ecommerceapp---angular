import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProdcutService } from 'src/app/services/prodcut.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currentCategoryId: number;

  constructor(private productService: ProdcutService,  private route: ActivatedRoute) { }

  // Similar to @PostConstruct method
  ngOnInit() {
    this.route.paramMap.subscribe(() => {
    this.listProducts();
    });
  }

  listProducts(){

    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId){
      //get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    }else{
      // else ... default to category id 1
      this.currentCategoryId = 1;
    }

    //now get the products for the given category id

    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data; // Assign reesult to product array
      }
      )
  }

}
