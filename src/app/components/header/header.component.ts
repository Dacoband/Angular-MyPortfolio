import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { menuOpenCloseAnimation, menuOpenCloseHeightAnimation } from '../../../animations/bruger-menu.animation';
import { RoutesData } from '../../../enums/routes-data.enum';
import { AppConfig } from '../../../enums/app-data';
import { HttpClient } from '@angular/common/http';
import { AssetPaths } from '../../../enums/asset-paths.enum';


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        CommonModule,
    ],
    animations: [
        menuOpenCloseAnimation,
        menuOpenCloseHeightAnimation,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

    displayedLogoName: string = '';
    isDarkMode: boolean = false;
    public navbarOpen = false;
    public linksData = RoutesData;
    public appData = AppConfig;

    constructor(
        private readonly _router: Router,
        private readonly _httpClient: HttpClient,
    ) {
        _router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.navbarOpen && this.toggleNavbar();
            }
        });
    }

    ngOnInit(): void {
        this.typeWriterEffect();
        this.loadModePreference();
    }

    //hàm gõ chữ
    typeWriterEffect(): void {
        const text = this.appData.logoName;
        
        let index = 0;
        const speed = 150; // Tốc độ gõ/xóa
        const pauseDuration = 200; // Thời gian dừng giữa các lần lặp

        const type = () => {
            if (index < text.length) {
                this.displayedLogoName += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else {
                setTimeout(() => erase(), pauseDuration); // Sau khi gõ xong, bắt đầu xóa
            }
        };
        const erase = () => {
            if (this.displayedLogoName.length > 0) {
                this.displayedLogoName = this.displayedLogoName.slice(0, -1);
                setTimeout(erase, speed / 1.5); // Xóa nhanh hơn gõ
            } else {
                setTimeout(() => this.typeWriterEffect(), pauseDuration); // Bắt đầu lại
            }
        };

        type();
    }

    // Chuyển đổi giữa light mode và dark mode
    toggleMode(): void {
        this.isDarkMode = !this.isDarkMode;
        if (this.isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        // Lưu chế độ vào localStorage
        localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }

    // Tải chế độ đã lưu từ localStorage
    private loadModePreference(): void {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            this.isDarkMode = true;
            document.body.classList.add('dark-mode');
        } else {
            this.isDarkMode = false;
            document.body.classList.remove('dark-mode');
        }
    }

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
        if (window.innerWidth > 1024) {
            this.navbarOpen = false;
        }
    }

    public resumeDownload(): void {
        const absolutePath = this.constructAbsolutePath(AssetPaths.RESUME_IT);
        this._httpClient.get(absolutePath, { responseType: 'blob' }).subscribe({
            next: (blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = this.getFileNameFromPath(AssetPaths.RESUME_IT); // Extract the file name
                a.click();
                window.URL.revokeObjectURL(url);
                console.log("Document downloaded successfully.");
            },
            error: (err) => {
                console.error("Error downloading the document: ", err);
            },
        });
    
    }

    private constructAbsolutePath(relativePath: string): string {
        return `${window.location.origin}/${relativePath}`;
    }

    private getFileNameFromPath(path: string): string {
        return path.split('/').pop() || 'downloaded_file';
    }

}
