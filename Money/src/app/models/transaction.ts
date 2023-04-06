import { Category } from "./category";

export interface Transaction {
    id: number;
    description: string;
    date: Date;
    categoryId: number;
    category: Category;
    debit: number;
    credit: number
}