import { style, transition, animate, trigger } from "@angular/animations";

export const menuOpenCloseAnimation = trigger(
    'menuOpenCloseAnimation', [
    transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateX(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('200ms', style({ transform: 'translateX(100%)', opacity: 0 }))
    ])
]
)

export const menuOpenCloseHeightAnimation = trigger('menuOpenCloseHeightAnimation', [
    transition(':enter', [
        style({ height: '0', overflow: 'hidden' }), // Initial state
        animate('200ms ease-out', style({ height: '*' })) // Target to auto height
    ]),
    transition(':leave', [
        style({ height: '*', overflow: 'hidden' }), // Initial state (full height)
        animate('200ms ease-in', style({ height: '0' })) // Target to height 0
    ])
]);