import { Address } from "./Address";
import { OrderItem } from "./OrderItem";

export interface Order{
    id: number;
    description: string;
    adress: Address;
    email: string;
    phoneNumber: string;
    orderStatus: string;
    orderItems: OrderItem[];
}