import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    private router = inject(Router);


    navigateToAbout = () => {
        this.router.navigate(['about']).then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
