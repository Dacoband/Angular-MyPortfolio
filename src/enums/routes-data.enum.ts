import { RouteData } from "../interfaces/routes.interface";

export enum AppRoutes{
    ERROR = "error"
}

export const RoutesData: RouteData[] = [
    {
        routeLinkText: "Error",
        routeURLName: AppRoutes.ERROR,
        isVisible: false,
    }
]