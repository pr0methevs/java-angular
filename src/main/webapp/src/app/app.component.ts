import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ToolbarComponent } from "./toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Frontend App';
}
