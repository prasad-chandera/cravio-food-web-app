export interface Restaurant {
    id: string | number;
    name: string;
    cloudinaryImageId?: string;
    cuisines: string[];
    costForTwo: string;
    deliveryTime: number;
    avgRating: number | string;
}