import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptalizePhilipsPipe } from './pipe/captalize-philips.pipe';
import { NgifComponent } from './ngif/ngif.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CaptalizePhilipsPipe,
    NgifComponent,
    NgContentComponent,
    NgTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
