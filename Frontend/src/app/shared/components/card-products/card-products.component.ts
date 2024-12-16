import { Component, Input } from '@angular/core';
import { Products } from 'src/app/core/models/products.interface';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss'],
})
export class CardProductsComponent {
  @Input() product: Products[] = [];

  constructor(private cartService: CartService) {}

  addToCart(product: Products) {
    product.cantidad = 1;
    this.cartService.addToCart(product);
  }

  getImageForCategory(category: string): string {
    switch (category) {
      case 'Alimentos':
        return '../assets/images/alimentos.jpg';
      case 'Deportivos':
        return '../assets/images/deportivos.jpg';
      case 'Electronicos':
        return '../assets/images/electronicos.jpg';
      default:
        return '../assets/images/default.jpg';
    }
  }

}
