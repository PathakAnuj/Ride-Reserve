import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LandingModule } from './features/public/landing/landing-module';
import { Header } from './features/public/header/header';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './features/public/auth/auth-module';

@NgModule({
  declarations: [
    App,
    Header,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatButtonModule,
    AuthModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
