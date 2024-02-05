import { Component } from '@angular/core';
import { ListProductsComponent } from '../../shared/product/list-products/list-products.component';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ListProductsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
