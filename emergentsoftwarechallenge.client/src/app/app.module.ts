import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionSearchComponent } from './verison-search/version-search.component';
import { FormsModule } from '@angular/forms';
import { VersionSearchService } from './verison-search/version-search.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    VersionSearchComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [VersionSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
