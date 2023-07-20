export interface Inventory {
  createAt : string;
  id: number;
  shop: Array<Shop>;
  shopId : 1
  updatedAt: string; 
  isNewUser: boolean;
  currentShopName: string;
  currentInventoryId: number;
  currentShopId: number;
}

export interface Shop {
  shopName: string;
  cityName: string;
  districtName: string;
  postalCode: string;
  provinceName: string;
  addressDetail: string;
}

