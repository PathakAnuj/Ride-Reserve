import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.html',
  styleUrl: './landing.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Landing {
  features = [
    {
      title: 'Easy Ride Booking',
      description: 'Book rides instantly with real-time availability.'
    },
    {
      title: 'Secure & Reliable',
      description: 'Verified drivers and secure payments.'
    },
    {
      title: 'Affordable Pricing',
      description: 'Transparent pricing with no hidden charges.'
    }
  ];

  onGetStarted(): void {
    // later route to auth/login
    console.log('Get Started clicked');
  }
}