import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // <-- nuevo
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieModule } from './serie/serie.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SerieModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
