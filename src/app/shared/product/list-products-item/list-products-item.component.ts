import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-products-item',
  standalone: true,
  imports: [],
  templateUrl: './list-products-item.component.html',
  styleUrl: './list-products-item.component.scss'
})
export class ListProductsItemComponent {
  @Input() product:any

  addToCart(id:number){
      console.log(id);
  }
}
