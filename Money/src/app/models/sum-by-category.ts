/**
 * Sum of credit et debit for the month by category.
 */
export interface SumByCategory {
    /**
     * Name of the category
     */
    name: string;

    /**
     * Transactions sum for the category.
     * Negative if it's debit, positive it's credit.
     */
    amount: number;

    /**
     * Percentage of the category for the month
     */
    percentage: number;

    /**
     * Sum of credit et debit for the month by sub category.
     */
    subCategory: SumByCategory[];
}