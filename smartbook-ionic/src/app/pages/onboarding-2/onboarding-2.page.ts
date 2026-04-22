import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboarding-2',
  templateUrl: './onboarding-2.page.html',
  styleUrls: ['./onboarding-2.page.scss'],
  imports: [IonContent, RouterLink],
})
export class Onboarding2Page {}
