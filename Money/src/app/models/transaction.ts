import { Category } from "./category";

/**
 * Transaction from National Bank of Canada CSV file.
 */
export interface Transaction {
    /**
     * unique identifier.
     */
    id: number;

    /**
     * Description of the transaction.
     */
    description: string;

    /**
     * Date of the transaction (without hours).
     */
    date: Date;

    /**
     * unique identifier of the NBC Category
     */
    categoryId: number;

    /**
     * Category.
     */
    category: Category;

    /**
     * Amount debit.
     * 0 if credit > 0.
     */
    debit: number;

    /**
     * Amount credit
     * 0 if debit > 0.
     */
    credit: number
}