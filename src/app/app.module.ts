import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

/*главный модуль роутера*/
import { AppRoutingModule } from './app-routing.module';


@NgModule({

  declarations: [
    AppComponent
  ],

  /*тут все импортированые модул�, AppRoutingModule�, которые нужны для роботы с компонентами*/
  imports: [
    BrowserModule, AppRoutingModule
  ],
  /*тут будем подключать сервисы*/
  providers: [

  ],
  /*тут указываеться главный компонент, который будет запускаться*/
  bootstrap: [AppComponent]
})
export class AppModule { }
