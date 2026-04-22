import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-payment-screen',
  templateUrl: './payment-screen.page.html',
  styleUrls: ['./payment-screen.page.scss'],
  imports: [IonContent, RouterLink],
})
export class PaymentScreenPage {}
