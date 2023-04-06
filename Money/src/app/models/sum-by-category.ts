export interface SumByCategory {
    name: string;
    amount: number;
    percentage: number;
    subCategory: SumByCategory[];
}