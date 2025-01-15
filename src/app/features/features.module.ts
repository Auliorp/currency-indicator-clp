import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterModule } from "../core/components/footer/footer.module";
import { NavbarModule } from "../core/components/navbar/navbar.module";
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FooterModule,
    NavbarModule,
    SharedModule
],
  exports: [HomeComponent]
})
export class FeaturesModule { }
