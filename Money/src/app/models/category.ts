/**
 * Transaction's category
 */
export interface Category {
    /**
     * Unique idenfier.
     */
    id: number;

    /**
     * Name of the category.
     */
    name: string;

    /**
     * Budget of the category
     */
    budget: number;

    /**
     * Parent category or null if it has no parent.
     */
    parentId?: number;
    
    /**
     * Children categories or null if it has no child.
     */
    children?: Category[];
}