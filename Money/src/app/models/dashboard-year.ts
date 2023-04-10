import { DashboardMonth } from "./dashboard-month";

/**
 * Aggregate transactions per year, to be displayed in a dashboard.
 */
export interface DashboardYear {
    /**
     * Current year to display.
     */
    year: number;

    /**
     * Aggregate transactions per month, to be displayed in a dashboard.
     */
    months: DashboardMonth[];
}