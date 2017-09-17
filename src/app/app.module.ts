import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { EventComponent } from './event/event.component';
import { HeadmasterComponent } from './headmaster/headmaster.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    EventComponent,
    HeadmasterComponent,
    AboutusComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([ { path: 'home', component: HomeComponent }, 
    { path: 'aboutUs', component: AboutusComponent }, 
    // { path: 'newsevent', component: EventNewsComponent }, 
    // { path: 'admission', component: AdmissionComponent }, 
    { path: '**', redirectTo: 'home', pathMatch: 'full' } ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
