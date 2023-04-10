import { SumByCategory } from "./sum-by-category";

/**
 * Aggregate transactions per month, to be displayed in a dashboard.
 */
export interface DashboardMonth {
    /**
     * Current month to display.
     * 1 = January
     * 12 = December
     */
    month: number;

    /**
     * Sum of credits for the current month.
     */
    credit: number;

    /**
     * Sum of debits for the current month.
     */
    debit: number;

    /**
     * Sum of credit et debit for the month by category.
     */
    categories: SumByCategory[];
}