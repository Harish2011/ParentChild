import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PCconceptService} from './pcconcept.service';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PCconceptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
