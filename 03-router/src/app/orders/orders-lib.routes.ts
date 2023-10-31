import { Route } from "@angular/router";

export const routers: Route[] = [
    {
        path: '',
        loadComponent: () => import('./order-list/order-list.component').then(m => m.OrderListComponent),
    }
]