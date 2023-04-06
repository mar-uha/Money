import { DashboardMonth } from "./dashboard-month";

export interface DashboardYear {
    year: number;

    months: DashboardMonth[];
}