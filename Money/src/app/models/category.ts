export interface Category {
    id: number;

    name: string;

    budget: number;

    parentId?: number;
    
    children?: Category[];
}