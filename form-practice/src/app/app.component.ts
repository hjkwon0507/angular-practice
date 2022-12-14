import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showHi(): void {
    alert('안녕하세요 😉')
  }

  constructor(private router: Router) {}

  goLogin() {
    this.router.navigate(['/login'])
  } 
  goRegister() {
    this.router.navigate(['/register'])
  } 
  goBack() {
    this.router.navigate(['\..'])
  }
}
