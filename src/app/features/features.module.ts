import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { SidebarService } from "../core/sidebar.service";
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [SidebarService],
  exports: [
    PageComponent
  ]
})
export class FeaturesModule { }
export {PageComponent};
