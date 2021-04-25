import {Injectable} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  GetAllProductsError,
  GetAllProductsSuccess,
  GetSelectedProductsError,
  GetSelectedProductsSuccess,
  ProductsActionsTypes
} from './products.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable()
export class ProductsEffects {
  constructor(private productService:ProductService,private effectActions:Actions) {
  }
  getAllProductsEffect:Observable<Action>=createEffect(
()=> this.effectActions.pipe(
        ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
        mergeMap((action)=>{
        return this.productService.getProducts()
          .pipe(
            map((products)=>new GetAllProductsSuccess(products)),
            catchError((err)=>of(new GetAllProductsError(err.message)))
          )
      })
    )
  );
  getSelectedProductsEffect:Observable<Action>=createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_SELECT_PRODUCTS),
      mergeMap((action)=>{
        return this.productService.getSelectedProducts()
          .pipe(
            map((products)=>new GetSelectedProductsSuccess(products)),
            catchError((err)=>of(new GetSelectedProductsError(err.message)))
          )
      })
    )
  );
}
