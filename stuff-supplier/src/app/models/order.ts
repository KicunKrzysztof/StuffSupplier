import { Address } from "./address";
import { OrderItem } from "./order-item";
import { OrderStatus } from "../enums/order-status";

export interface Order {
    id: number;
    description: string;
    address: Address;
    email: string;
    phoneNumber: string;
    orderStatus: OrderStatus;
    orderItems: OrderItem[];
}