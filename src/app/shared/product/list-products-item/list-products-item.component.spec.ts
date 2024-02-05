import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsItemComponent } from './list-products-item.component';

describe('ListProductsItemComponent', () => {
  let component: ListProductsItemComponent;
  let fixture: ComponentFixture<ListProductsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProductsItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListProductsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
