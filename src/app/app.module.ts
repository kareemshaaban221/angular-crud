import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './students/index/index.component';
import { ShowComponent } from './students/show/show.component';
import { CreateComponent } from './students/create/create.component';
import { EditComponent } from './students/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ShowComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
