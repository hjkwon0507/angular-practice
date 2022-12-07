import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []
  constructor(
    private http: HttpClient
  ) { }
  
  // items 배열에 상품을 추가
  addToCart(product: Product) {
    this.items.push(product)
  }

  // 징바구니에 담긴 상품을 갯수와 함께 반환
  getItems() {
    return this.items
  }

  // 장바구니를 비우고 빈 배열을 반환
  clearCart() {
    this.items = []
    return this.items
  }
  // 배송가격 받아오기
  
}
