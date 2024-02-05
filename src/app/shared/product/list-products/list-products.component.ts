import { Component } from '@angular/core';
import { ListProductsItemComponent } from '../list-products-item/list-products-item.component';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [ListProductsItemComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent {  
  products: any = [];

  constructor(private apiService: ProductService) { }

  ngOnInit() {
    this.apiService.getProducts().subscribe((data: any) => {      
      this.products = data.products;
    });
  }
}
