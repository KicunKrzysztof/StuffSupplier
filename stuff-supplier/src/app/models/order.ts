import { Address } from "./address";
import { OrderItem } from "./order-item";

export class Order {
    id?: number;
    description?: string;
    address?: Address;
    email?: string;
    phoneNumber?: string;
    orderStatus?: string;
    orderItems?: OrderItem[];
}