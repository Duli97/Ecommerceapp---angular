import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.css']
})
export class CardStatusComponent implements OnInit {

  totalPrice: number = 0.00;
  totalquantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(data => this.totalPrice = data);

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalquantity = data
    );
  }

}
