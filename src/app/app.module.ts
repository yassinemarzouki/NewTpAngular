import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OffresEmploiComponentComponent,
    ArticleComponentComponent,
    NavbarComponent,
    NotFoundComponent,
    ProductdetailsComponent,
    AddProductComponent,
    TemplateDrivenFormComponentComponent
   

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
