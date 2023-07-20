
export interface DashboardDataType {
  customerPercent: string;
  customerPercentMonth: string;
  customersNow: number;
  customersNowMonth: number;
  graphData: Array<GraphDataType>;
  orderAmount: number;
  orderCount: number;
  orderCountMonth: number;
  orderPercent: string;
  orderPercentMonth: string;
  productAmountNowMonth: number;
  productPercent: string;
  productPercentMonth: string;
  sumUnitPricesMonth: number;
  sumUnitPricesMonthPrevious: number;
  unitPercent: string;
  unitPercentMonth: string;
  unitPrices: number;
}

export interface GraphDataType{
  month: string;
  price: number;
}