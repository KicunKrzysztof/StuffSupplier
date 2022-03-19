import { Unit } from "../enums/unit";

export interface OrderItem {
    id: number;
    itemName: string;
    initialQuantity: number;
    providedQuantity: number;
    unit: Unit;
}