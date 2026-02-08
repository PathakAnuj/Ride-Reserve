import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LandingModule } from './features/public/landing/landing-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './features/public/auth/auth-module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './features/public/header/header-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,
    RouterModule,
    CommonModule,
    AuthModule,
    HeaderModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
