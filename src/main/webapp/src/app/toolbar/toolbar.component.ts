import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Component({
    selector: 'app-toolbar',
    imports: [],
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
    private router = inject(Router);
    private isLoading$ = new BehaviorSubject<boolean>(false);

    navigateToHome = () => {
        this.isLoading$.next(true);

        setTimeout(() => {
            this.router.navigate(['']).then(() => {
                this.isLoading$.next(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }, 300);
    }
}

