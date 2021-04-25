import {Product} from '../model/product.model';
import {ProductsActions, ProductsActionsTypes} from './products.actions';
import {Action} from '@ngrx/store';


export enum ProductsStateEnum {
  LOADING="loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL= "Initial"
}
export interface ProductsState {
  products:Product[],
  errorMessage:string,
  dataState:ProductsStateEnum
}
const initState:ProductsState={
  products:[],
  errorMessage:"",
  dataState:ProductsStateEnum.INITIAL
}
export function productsReducer(state:ProductsState=initState, action:Action):ProductsState {
  switch (action.type) {
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return{...state, dataState:ProductsStateEnum.LOADING}
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return  {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload}
      /*get selected products*/
    case ProductsActionsTypes.GET_SELECT_PRODUCTS:
      return{...state, dataState:ProductsStateEnum.LOADING}
    case ProductsActionsTypes.GET_SELECT_PRODUCTS_SUCCESS:
      return  {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductsActionsTypes.GET_SELECT_PRODUCTS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload}
    default : return {...state}
  }
}
