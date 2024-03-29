import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleTodoComponent } from './components/single-todo/single-todo.component';
import { SingleUserComponent } from './components/single-user/single-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleTodoComponent,
    SingleUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
