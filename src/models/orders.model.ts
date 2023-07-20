export interface OrderType {
  id: number;
  bankTransferId: number;
  customerId: number;
  inventoryId: number;
  codId: number;
  productId: number;
  packDate: string;
  deliveryDate: string;
  createdDate: string;
  delivery: string;
  file: string;
  paymentDate: string;
  amount: number;
  pno: string;
  state: string;
  pickupID: number;
  expressId: number;
  createdAt: string;
  updatedAt: string;
  customer: {
    id: number;
    channelId: number;
    inventoryId: number;
    customerName: string;
    socialName: string;
    telephone: string;
    email: string;
    idCard: string;
    customerProvinceName: string;
    customerCityName: string;
    customerDistrictName: string;
    customerAddressDetail: string;
    zipcode: string;
    createdAt: string;
    updatedAt: string;
  };
  bankTransfer: {
    accountBranch: string;
    accountName: string;
    accountNumber: string;
    bank: string;
    bankTransferStatus: string;
    createdAt: string;
    customDescription: null;
    customName: null;
    id: number;
    inventoryId: number;
    nickName: string;
    selectDefault: boolean;
    status: string;
    updatedAt: string;
  };
  productForOrder: Array<ProductforOrder>
}


interface ProductforOrder {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  discountPrice: number;
  discountpercent: number;
  product: {
    productName: string;
    productSKU: string;
    productType: string;
    articleId: number;
    categoryId: number;
    brand: string;
    shortDescription: string;
    longDescription: string;
    unitPrice: number;
    unitCost: number;
    point: number;
    weight: number;
    height: number;
    width: number;
    length: number;
    productBarcode: string;
    preOrder: boolean;
    safetyStock: number;
    tag: string;
    warehouseId: number;
    productFeatureId: null;
    productFeatureValue: null;
    images: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
}