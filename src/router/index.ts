import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "../stores/auth";
import { useInventory } from "../stores/inventory";
import axios from "axios"

import SimpleMenu from "../layouts/SimpleMenu/SimpleMenu.vue";
import TopMenu from "../layouts/TopMenu/TopMenu.vue";
import AdminMenu from "../layouts/AdminMenu/AdminMenu.vue";

import EditOrder from "../pages/EditOrder.vue";

import Purchaseorder from "../pages/Purchaseorder.vue";
import AddPurchaseorder from "../pages/AddPurchaseorder.vue";
import MovementProduct from "../pages/MovementProduct.vue";

import AddTransferproducts from "../pages/AddTransferproducts.vue";
import ChangeNumberofProducts from "../pages/ChangeNumberofProducts.vue";
import AddChangeNumberofProducts from "../pages/AddChangeNumberofProducts.vue";
import Bounceorder from "../pages/Bounceorder.vue";

import AddWarehouse from "../pages/AddWarehouse.vue";
import Supplier from "../pages/Supplier.vue";
import AddSupplier from "../pages/AddSupplier.vue";
import Importdatas from "../pages/Importdata.vue";
import Exportdata from "../pages/Exportdata.vue";

import Settingsusers from "../pages/SettingUser.vue";
import Settingsusersclose from "../pages/Settingsusersclose.vue";
import Settingsusersblock from "../pages/Settingsusersblock.vue";
import Settingsrole from "../pages/SettingRole.vue";
import EditSettingsrole from "../pages/EditSettingRole.vue";

import Payment from "../pages/Payment.vue";

import Summaryreport from "../pages/Summaryreport.vue";
import Summary from "../pages/Summary.vue";
import StockMovement from "../pages/StockMovement.vue";
import ProductSalesBestSelling from "../pages/ProductSalesBestSelling.vue";
import ProductSalesByMonths from "../pages/ProductSalesByMonths.vue";
import ProductSalesByCategory from "../pages/ProductSalesByCategory.vue";
import ProductSalesByProvince from "../pages/ProductSalesByProvince.vue";

import OrderSalesTopOrder from "../pages/OrderSalesTopOrder.vue";
import OrderSalesByTimePeriod from "../pages/OrderSalesByTimePeriod.vue";
import OrderSalesSummary from "../pages/OrderSalesSummary.vue";
import OrderSalesByStatus from "../pages/OrderSalesByStatus.vue";
import OrderSalesByPriceRange from "../pages/OrderSalesByPriceRange.vue";
import OrderSalesBySaleStaff from "../pages/OrderSalesBySaleStaff.vue";
import TrackingSummary from "../pages/TrackingSummary.vue";
import ShipmentHistoryReport from "../pages/ShipmentHistoryReport.vue";
import Member from "../pages/Member.vue";
import UpgradePackage from "../pages/Upgradepackage.vue";
import SubmitPMPackage from "../pages/SubmitPMPackage.vue";
import HistoryUpgradePackage from "../pages/HistoryUpgradePackage.vue";

const routes = [
  {
    path: "/",
    name: "login-homepage",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/ForgotPassword",
    name: "ForgotPassword",
    component: () => import("../pages/ForgotPassword.vue"),
  },
  {
    path: "/ResetPassword",
    name: "ResetPassword",
    component: () => import("../pages/ResetPassword.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../layouts/SideMenu/SideMenu.vue"),
    children: [
      {
        path: "/dashboard",
        name: "side-menu-dashboard-overview-1",
        component: () => import("../pages/DashboardOverview1.vue"),
      },

      {
        path: "categories",
        name: "side-menu-categories",
        component: () => import("../pages/Categories.vue"),
      },
      {
        path: "product/:productId",
        name: "product",
        component: () => import("../pages/Product.vue"),
        props: true
      },
      {
        path: "addCategory",
        name: "side-menu-add-categories",
        component: () => import("../pages/AddCategory.vue"),
      },
      {
        path: "addProduct",
        name: "side-menu-add-product",
        component: () => import("../pages/AddProduct.vue"),
      },
      {
        path: "editProduct/:productId",
        name: "editProduct",
        component: () => import("../pages/EditProduct.vue"),
        props: true
      },
      {
        path: "product-list",
        name: "side-menu-product-list",
        component: () => import("../pages/ProductList.vue"),
      },
      {
        path: "barcode",
        name: "side-menu-barcode",
        component: () => import("../pages/Barcode.vue")
      },
      {
        path: "productFeature",
        name: "side-menu-productfeatures",
        component: () => import("../pages/ProductFeature.vue"),
      },
      {
        path: "viewdatailpdft",
        name: "viewdatailpdft",
        component: () => import("../pages/Viewdatailpdft.vue"),
      },
      {
        path: "addProductFeature",
        name: "addProductFeature",
        component: () => import("../pages/AddProductFeature.vue"),
      },
      {
        path: "editproducfetures",
        name: "editproducfetures",
        component: () => import("../pages/EditProducfetures.vue"),
      },
      {
        path: "editcategory",
        name: "editcategory",
        component: () => import("../pages/EditCategory.vue"),
      },
      {
        path: "category",
        name: "category",
        component: () => import("../pages/Category.vue"),
      },
      {
        path: "customer/:customerId",
        name: "customer",
        component: () => import("../pages/Customer.vue"),
        props: true,
      },
      {
        path: "customersList",
        name: "side-menu-customersList",
        component: () => import("../pages/CustomersList.vue"),
      },
      {
        path: "addCustomer",
        name: "addCustomer",
        component: () => import("../pages/AddCustomer.vue"),
      },
      {
        path: "editCustomer/:customerId",
        name: "editCustomer",
        component: () => import("../pages/EditCustomer.vue"),
        props: true,
      },
      {
        path: "side-menu-orderslist",
        name: "side-menu-orderslist",
        component: () => import("../pages/OrdersList.vue"),
      },
      {
        path: "addOrder",
        name: "side-menu-addOrder",
        component: () => import("../pages/AddOrder.vue"),
      },
      {
        path: "vieworder/:orderId",
        name: "vieworder",
        component: () => import("../pages/ViewOrder.vue"),
      },
      {
        path: "label/:orderId",
        name: "label",
        component: () => import("../pages/document/label.vue"),
        meta: {
          title: 'Print Document',
        },
        props: true,
      },
      {
        path: "editorder",
        name: "editorder",
        component: EditOrder,
      },
      {
        path: "side-menu-purchaseorder",
        name: "side-menu-purchaseorder",
        component: Purchaseorder,
      },
      {
        path: "addpurchaseorder",
        name: "addPurchaseorder",
        component: AddPurchaseorder,
      },
      {
        path: "side-menu-movementProduct",
        name: "side-menu-movementProduct",
        component: MovementProduct,
      },

      {
        path: "side-menu-transferproducts",
        name: "side-menu-transferproducts",
        component: () => import("../pages/Transferproducts.vue"),
      },
      {
        path: "addtransferproducts",
        name: "addtransferproducts",
        component: AddTransferproducts,
      },

      {
        path: "side-menu-changenumberofproducts",
        name: "side-menu-changenumberofproducts",
        component: ChangeNumberofProducts,
      },

      {
        path: "addchangenumberofproducts",
        name: "addchangenumberofproducts",
        component: AddChangeNumberofProducts,
      },
      {
        path: "side-menu-warehouse",
        name: "side-menu-warehouse",
        component: () => import("../pages/Warehouse.vue"),

      },
      {
        path: "addwarehouse",
        name: "addwarehouse",
        component: AddWarehouse,
      },
      {
        path: "side-menu-supplier",
        name: "side-menu-supplier",
        component: Supplier,
      },
      {
        path: "addsupplier",
        name: "addsupplier",
        component: AddSupplier,
      },
      {
        path: "side-menu-deliveryofproduct",
        name: "side-menu-deliveryofproduct",
        component: () => import("../pages/Deliveryofproduct.vue"),
      },
      {
        path: "side-menu-importdatas",
        name: "side-menu-importdatas",
        component: Importdatas,
      },
      {
        path: "side-menu-exportdata",
        name: "side-menu-exportdata",
        component: Exportdata,
      },
      {
        path: "side-menu-bounceorder",
        name: "side-menu-bounceorder",
        component: Bounceorder,
      },

      {
        path: "side-menu-stock",
        name: "side-menu-stock",
        component: () => import("../pages/Stock.vue"),


      },


      {
        path: "setting-shop",
        name: "setting-shop",
        component: () => import("../pages/SettingShop.vue"),
      },
      {
        path: "setting-role",
        name: "setting-role",
        component: () => import("../pages/SettingRole.vue"),
      },
      {
        path: "setting-role-detail",
        name: "setting-role-detail",
        component: () => import("../pages/SettingRoleDetail.vue"),
      },
      {
        path: "setting-user",
        name: "setting-user",
        component: () => import("../pages/SettingUser.vue"),
      },
      {
        path: "side-menu-settingshipping",
        name: "side-menu-settingshipping",
        component: () => import("../pages/Settingshipping.vue"),
      },
      {
        path: "edit-setting-shipping-rate/:type/:shippingListId",
        name: "EditSettingshipping",
        component: () => import("../pages/EditSettingshipping.vue"),
        props: true
      },
      {
        path: "edit-setting-shipping-flatrate/:type/:shippingListId",
        name: "EditSettingshippingFlatRate",
        component: () => import("../pages/EditSettingshippingFlatRate.vue"),
        props: true
      },

      {
        path: "side-menu-settingsusers",
        name: "side-menu-settingsusers",
        component: Settingsusers,
      },
      {
        path: "Settingsusersclose",
        name: "Settingsusersclose",
        component: Settingsusersclose,
      },
      {
        path: "Settingsusersblock",
        name: "Settingsusersblock",
        component: Settingsusersblock,
      },

      {
        path: "side-menu-settingsrole",
        name: "side-menu-settingsrole",
        component: Settingsrole,
      },
      {
        path: "EditSettingsrole",
        name: "side-menu-EditSettingsrole",
        component: EditSettingsrole,
      },

      {
        path: "side-menu-payment",
        name: "side-menu-payment",
        component: Payment,
      },

      {
        path: "side-menu-summaryreport",
        name: "side-menu-summaryreport",
        component: Summaryreport,
      },

      {
        path: "Summary",
        name: "Summary",
        component: Summary,
      },
      {
        path: "StockMovement",
        name: "StockMovement",
        component: StockMovement,
      },
      {
        path: "ProductSalesBestSelling",
        name: "ProductSalesBestSelling",
        component: ProductSalesBestSelling,
      },
      {
        path: "ProductSalesByMonths",
        name: "ProductSalesByMonths",
        component: ProductSalesByMonths,
      },
      {
        path: "ProductSalesByCategory",
        name: "ProductSalesByCategory",
        component: ProductSalesByCategory,
      },
      {
        path: "ProductSalesByProvince",
        name: "ProductSalesByProvince",
        component: ProductSalesByProvince,
      },
      {
        path: "OrderSalesTopOrder",
        name: "OrderSalesTopOrder",
        component: OrderSalesTopOrder,
      },
      {
        path: "OrderSalesByTimePeriod",
        name: "OrderSalesByTimePeriod",
        component: OrderSalesByTimePeriod,
      },
      {
        path: "OrderSalesSummary",
        name: "OrderSalesSummary",
        component: OrderSalesSummary,
      },
      {
        path: "OrderSalesByStatus",
        name: "OrderSalesByStatus",
        component: OrderSalesByStatus,
      },
      {
        path: "OrderSalesByPriceRange",
        name: "OrderSalesByPriceRange",
        component: OrderSalesByPriceRange,
      },
      {
        path: "OrderSalesBySaleStaff",
        name: "OrderSalesBySaleStaff",
        component: OrderSalesBySaleStaff,
      },
      {
        path: "TrackingSummary",
        name: "TrackingSummary",
        component: TrackingSummary,
      },
      {
        path: "ShipmentHistoryReport",
        name: "ShipmentHistoryReport",
        component: ShipmentHistoryReport,
      },

      {
        path: "member",
        name: "side-menu-member",
        component: Member,
      },


      {
        path: "UpgradePackage",
        name: "UpgradePackage",
        component: UpgradePackage,
      },
      {
        path: "SubmitPMPackage/:packageId",
        name: "SubmitPMPackage",
        component: SubmitPMPackage,
      },

      {
        path: "HistoryUpgradePackage",
        name: "HistoryUpgradePackage",
        component: HistoryUpgradePackage,
      },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: "/simple-menu",
    component: SimpleMenu,
    children: [

    ],

  },
  {
    path: "/top-menu",
    component: TopMenu,
    children: [
      {
        path: "product-list",
        name: "top-menu-product-list",
        component: () => import("../pages/ProductList.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: AdminMenu,
    children: [
      {
        path: "admin-menu-adminDashboard",
        name: "admin-menu-adminDashboard",
        component: () => import("../pages/backOffice/AdminDashboard.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "admin-menu-AdminList",
        name: "admin-menu-AdminList",
        component: () => import("../pages/backOffice/AdminList.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "admin-menu-AdminFinancialList",
        name: "admin-menu-AdminFinancialList",
        component: () => import("../pages/backOffice/AdminFinancialList.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "admin-menu-AdminReportDocs",
        name: "admin-menu-AdminReportDocs",
        component: () => import("../pages/backOffice/AdminReportDocs.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "AddmemberList",
        name: "admin-menu-AddmemberList",
        component: () => import("../pages/backOffice/AddmemberList.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "EditFinancial",
        name: "admin-menu-EditFinancial",
        component: () => import("../pages/backOffice/EditFinancial.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "Editmember",
        name: "admin-menu-Editmember",
        component: () => import("../pages/backOffice/Editmember.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "ViewFinancial",
        name: "admin-menu-ViewFinancial",
        component: () => import("../pages/backOffice/ViewFinancial.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "Viewmember",
        name: "admin-menu-Viewmember",
        component: () => import("../pages/backOffice/Viewmember.vue"),
        meta: { requiresAuth: true },
      },

    ],
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/Register.vue"),
  },
  {
    path: "/registest",
    name: "registest",
    component: () => import("../pages/registest.vue"),
  },

  {
    path: "/error-page",
    name: "error-page",
    component: () => import("../pages/ErrorPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../pages/ErrorPage.vue"),
  },
  {
    path: "/adminLogin",
    name: "adminLogin",
    component: () => import("../pages/backOffice/AdminLogin.vue"),
    meta: { requiresAuth: true },
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});


router.beforeEach(async (to, from, next) => {
  const Auth = useAuth();
  await Auth.fetchCheckAuth();
  const Inventory = useInventory()
  await Inventory.setInventory()
  const Status = Auth.checkAuth.status;

  if (to.path === "/login" || to.path === "/register") {
    if (Status) {
      next({ path: "/dashboard" });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (Status) {
      next();
    } else {
      next({ path: "/login" });
    }
  } else {
    if (Status) {
      next({ path: "/dashboard" });
    } else {
      next();
    }
  }
});
export default router;
