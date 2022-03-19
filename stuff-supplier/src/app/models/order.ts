import { Address } from "./address";
import { OrderItem } from "./order-item";

export interface Order {
    id: number;
    description: string;
    adress: Address;
    email: string;
    phoneNumber: string;
    orderStatus: string;
    orderItems: OrderItem[];
}