import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboarding-1',
  templateUrl: './onboarding-1.page.html',
  styleUrls: ['./onboarding-1.page.scss'],
  imports: [IonContent, RouterLink],
})
export class Onboarding1Page {}
