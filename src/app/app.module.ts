import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';
import { NopagefoundComponent } from './404/nopagefound.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, PagesModule, SharedModule, AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
