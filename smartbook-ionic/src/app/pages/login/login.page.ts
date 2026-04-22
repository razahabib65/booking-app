import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, RouterLink],
})
export class LoginPage {
  private router = inject(Router);

  login() {
    this.router.navigate(['/home-screen']);
  }
}
