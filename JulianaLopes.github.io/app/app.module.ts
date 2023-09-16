import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CenterComponent } from './center/center.component';
import { AboutComponent } from './center/about/about.component';
import { HeroComponent } from './center/hero/hero.component';
import { ContactComponent } from './center/contact/contact.component';
import { PilatesComponent } from './center/pilates/pilates.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CenterComponent,
    AboutComponent,
    HeroComponent,
    ContactComponent,
    PilatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
