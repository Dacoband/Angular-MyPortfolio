import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalStatsService {

    private _isSplashAnimationPlayed: boolean = false;
    private _renderer: Renderer2;

    constructor(
        private _rendererFactory: RendererFactory2
    ) {
        this._renderer = _rendererFactory.createRenderer(null, null);

        if (location.pathname != "/") {
            this._isSplashAnimationPlayed = true;
        }
    }

    public get isSplashAnimationPlayed(): boolean {
        return this._isSplashAnimationPlayed;
    }

    public set isSplashAnimationPlayed(value: boolean) {
        this._isSplashAnimationPlayed = value;
    }

    setCanonicalUrl(url: string): void {
        let link: HTMLLinkElement | null = document.querySelector(`link[rel='canonical']`);
        if (!link) {
            link = this._renderer.createElement('link');
            this._renderer.setAttribute(link, 'rel', 'canonical');
            this._renderer.appendChild(document.head, link);
        }
        this._renderer.setAttribute(link, 'href', `${window.location.origin}/${url}`);
    }
}
