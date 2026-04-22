import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-booking-screen',
  templateUrl: './booking-screen.page.html',
  styleUrls: ['./booking-screen.page.scss'],
  imports: [IonContent, RouterLink],
})
export class BookingScreenPage {}
