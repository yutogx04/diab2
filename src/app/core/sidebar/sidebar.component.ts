import { Component,OnInit,Inject,ViewChild } from '@angular/core';
import { SidebarService } from "../sidebar.service";
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: false,
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  constructor(@Inject(SidebarService) private sidebarService : SidebarService) {
  }
  ngOnInit() {
   this.sidebarService.sideNavToggleSubject.subscribe(()=> {
      this.sidenav.toggle();
    });
  }
}
