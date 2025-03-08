import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-scroll-to-top',
    standalone: true,
    imports: [],
    templateUrl: './scroll-to-top.component.html',
    styleUrl: './scroll-to-top.component.scss'
})
export class ScrollToTopComponent {
    goToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    @HostListener('window:scroll', [])
    onWindowScroll(): void {
        const topButton = document.getElementById('topButton');
        if (window.scrollY > 30) {
            if (topButton) topButton.style.visibility = 'visible';
        } else {
            if (topButton) topButton.style.visibility = 'hidden';
        }
    }
}
