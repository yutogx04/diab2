import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','../styles.css']
})
export class AppComponent {
  title = 'Demo';
  greeting = {'id': 'XXX', 'content': 'Hello World'};
}
