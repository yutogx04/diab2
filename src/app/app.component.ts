import { Component } from '@angular/core';
import { Router,RouterOutlet } from "@angular/router";
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','../styles.css'],
  standalone: true,
})
export class AppComponent {
  title = 'Demo';
  greeting = {'id': 'XXX', 'content': 'Hello World'};
  constructor(private router: Router) {
  }
}
