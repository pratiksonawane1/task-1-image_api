import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageViewComponent } from './component/image-view/image-view.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageLazyLoadDirective } from './shared/directive/image-lazy-load.directive'; // Import HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    ImageViewComponent,
    HeaderComponent,
    ImageLazyLoadDirective,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
