import { RouteData } from "../interfaces/routes.interface";

export enum AppRoutes{
    HOME = "",
    ERROR = "error"
}

export const RoutesData: RouteData[] = [
    {
        routeLinkText: "Home",
        routeURLName: AppRoutes.HOME,
        isVisible: true,
    },
    {
        routeLinkText: "Error",
        routeURLName: AppRoutes.ERROR,
        isVisible: false,
    },
]