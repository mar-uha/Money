import { SumByCategory } from "./sum-by-category";

export interface DashboardMonth {
    month: number;

    credit: number;

    debit: number;

    categories: SumByCategory[];
}