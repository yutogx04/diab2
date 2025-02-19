import { NgModule,ViewChild } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidebarService } from "./sidebar.service";

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbar,
    MatIconModule,
  ],
  providers: [SidebarService],
  exports: [
    SidebarComponent,
    NavbarComponent
  ],
})
export class CoreModule { }
