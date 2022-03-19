import { address } from "./address";
import { orderItem } from "./orderItem";

export interface order{
    id: number;
    description: string;
    adress: address;
    email: string;
    phoneNumber: string;
    orderStatus: string;
    orderItems: orderItem[];
}