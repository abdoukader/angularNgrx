import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {GetAllProductsAction, GetSelectedProductsAction} from '../../../ngrx/products.actions';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
  }
  onGetAllProducts(){
  this.store.dispatch(new GetAllProductsAction({}))
  }


  onGetSeletedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}))
  }
}
