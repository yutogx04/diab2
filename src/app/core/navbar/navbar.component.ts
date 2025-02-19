import { Component,Inject } from '@angular/core';
import { SidebarService } from "../sidebar.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: false,
})
export class NavbarComponent {
  constructor(@Inject(SidebarService) private sidebarService : SidebarService) {
    }

  clickMenu() {
    this.sidebarService.toggle();
  }
}
