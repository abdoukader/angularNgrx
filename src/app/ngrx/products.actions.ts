import {Action} from '@ngrx/store';
import {Product} from '../model/product.model';

export  enum ProductsActionsTypes{
  /* get all products*/
  GET_ALL_PRODUCTS="[Products] Get All products",
  GET_ALL_PRODUCTS_SUCCESS="[Products] Get All products Success",
  GET_ALL_PRODUCTS_ERROR="[Products] Get All products Error",

  /* get selected products*/
  GET_SELECT_PRODUCTS="[Products] Get selected products",
  GET_SELECT_PRODUCTS_SUCCESS="[Products] Get selected products Success",
  GET_SELECT_PRODUCTS_ERROR="[Products] Get selected products Error"
}
export class GetAllProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload:any) {
  }
}
export class GetAllProductsSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}
export class GetAllProductsError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

/*get selected products actions*/

export class GetSelectedProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECT_PRODUCTS;
  constructor(public payload:any) {
  }
}
export class GetSelectedProductsSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECT_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}
export class GetSelectedProductsError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECT_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}


export type ProductsActions =
  GetAllProductsAction | GetAllProductsSuccess | GetAllProductsError
  | GetSelectedProductsAction | GetSelectedProductsSuccess | GetSelectedProductsError
;
