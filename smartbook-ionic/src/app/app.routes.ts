import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'splash-screen',
    loadComponent: () => import('./pages/splash-screen/splash-screen.page').then((m) => m.SplashScreenPage),
  },
  {
    path: 'onboarding-1',
    loadComponent: () => import('./pages/onboarding-1/onboarding-1.page').then((m) => m.Onboarding1Page),
  },
  {
    path: 'onboarding-2',
    loadComponent: () => import('./pages/onboarding-2/onboarding-2.page').then((m) => m.Onboarding2Page),
  },
  {
    path: 'onboarding-3',
    loadComponent: () => import('./pages/onboarding-3/onboarding-3.page').then((m) => m.Onboarding3Page),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./pages/forgot-password/forgot-password.page').then((m) => m.ForgotPasswordPage),
  },
  {
    path: 'home-screen',
    loadComponent: () => import('./pages/home-screen/home-screen.page').then((m) => m.HomeScreenPage),
  },
  {
    path: 'service-listing',
    loadComponent: () => import('./pages/service-listing/service-listing.page').then((m) => m.ServiceListingPage),
  },
  {
    path: 'service-details',
    loadComponent: () => import('./pages/service-details/service-details.page').then((m) => m.ServiceDetailsPage),
  },
  {
    path: 'booking-screen',
    loadComponent: () => import('./pages/booking-screen/booking-screen.page').then((m) => m.BookingScreenPage),
  },
  {
    path: 'booking-history',
    loadComponent: () => import('./pages/booking-history/booking-history.page').then((m) => m.BookingHistoryPage),
  },
  {
    path: 'payment-screen',
    loadComponent: () => import('./pages/payment-screen/payment-screen.page').then((m) => m.PaymentScreenPage),
  },
  {
    path: 'profile-screen',
    loadComponent: () => import('./pages/profile-screen/profile-screen.page').then((m) => m.ProfileScreenPage),
  },
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full',
  },
];
