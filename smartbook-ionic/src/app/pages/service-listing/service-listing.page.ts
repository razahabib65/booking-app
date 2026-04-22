import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-service-listing',
  templateUrl: './service-listing.page.html',
  styleUrls: ['./service-listing.page.scss'],
  imports: [IonContent, RouterLink],
})
export class ServiceListingPage {}
