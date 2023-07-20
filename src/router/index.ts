import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "../stores/auth";
import { useInventory } from "../stores/inventory";
import axios from "axios"
import SideMenu from "../layouts/SideMenu/SideMenu.vue";
import SimpleMenu from "../layouts/SimpleMenu/SimpleMenu.vue";
import TopMenu from "../layouts/TopMenu/TopMenu.vue";
import AdminMenu from "../layouts/AdminMenu/AdminMenu.vue";
import DashboardOverview1 from "../pages/DashboardOverview1.vue";
import DashboardOverview2 from "../pages/DashboardOverview2.vue";
import DashboardOverview3 from "../pages/DashboardOverview3.vue";
import DashboardOverview4 from "../pages/DashboardOverview4.vue";
import Barcode from "../pages/Barcode.vue";
import Viewdatailpdft from "../pages/Viewdatailpdft.vue";
import EditProducfetures from "../pages/EditProducfetures.vue";
import Editcategory from "../pages/EditCategory.vue";

import EditCustomersList from "../pages/EditCustomersList.vue";
import OrdersList from "../pages/OrdersList.vue";
import AddOrder from "../pages/AddOrder.vue";
import ViewOrder from "../pages/ViewOrder.vue";
import EditOrder from "../pages/EditOrder.vue";

import Purchaseorder from "../pages/Purchaseorder.vue";
import AddPurchaseorder from "../pages/AddPurchaseorder.vue";
import MovementProduct from "../pages/MovementProduct.vue";
import AddMovementProduct from "../pages/AddMovementProduct.vue";
import Transferproducts from "../pages/Transferproducts.vue";
import AddTransferproducts from "../pages/AddTransferproducts.vue";
import ChangeNumberofProducts from "../pages/ChangeNumberofProducts.vue";
import AddChangeNumberofProducts from "../pages/AddChangeNumberofProducts.vue";
import Warehouse from "../pages/Warehouse.vue";
import AddWarehouse from "../pages/AddWarehouse.vue";
import Supplier from "../pages/Supplier.vue";
import AddSupplier from "../pages/AddSupplier.vue";
import Deliveryofproduct from "../pages/Deliveryofproduct.vue";
import Importdatas from "../pages/Importdata.vue";
import Exportdata from "../pages/Exportdata.vue";
import Stock from "../pages/Stock.vue";
import Bounceorder from "../pages/Bounceorder.vue";

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
import Wallet from "../pages/Wallet.vue";

import UpgradePackage from "../pages/Upgradepackage.vue";
import SubmitPMPackage from "../pages/SubmitPMPackage.vue";
import HistoryUpgradePackage from "../pages/HistoryUpgradePackage.vue";
import ProductGrid from "../pages/ProductGrid.vue";
import TransactionList from "../pages/TransactionList.vue";
import TransactionDetail from "../pages/TransactionDetail.vue";
import SellerList from "../pages/SellerList.vue";
import SellerDetail from "../pages/SellerDetail.vue";
import Reviews from "../pages/Reviews.vue";
import Inbox from "../pages/Inbox.vue";
import FileManager from "../pages/FileManager.vue";
import PointOfSale from "../pages/PointOfSale.vue";
import Chat from "../pages/Chat.vue";
import Post from "../pages/Post.vue";
import Calendar from "../pages/Calendar.vue";
import CrudDataList from "../pages/CrudDataList.vue";
import CrudForm from "../pages/CrudForm.vue";
import UsersLayout1 from "../pages/UsersLayout1.vue";
import UsersLayout2 from "../pages/UsersLayout2.vue";
import UsersLayout3 from "../pages/UsersLayout3.vue";
import ProfileOverview1 from "../pages/ProfileOverview1.vue";
import ProfileOverview2 from "../pages/ProfileOverview2.vue";
import ProfileOverview3 from "../pages/ProfileOverview3.vue";
import WizardLayout1 from "../pages/WizardLayout1.vue";
import WizardLayout2 from "../pages/WizardLayout2.vue";
import WizardLayout3 from "../pages/WizardLayout3.vue";
import BlogLayout1 from "../pages/BlogLayout1.vue";
import BlogLayout2 from "../pages/BlogLayout2.vue";
import BlogLayout3 from "../pages/BlogLayout3.vue";
import PricingLayout1 from "../pages/PricingLayout1.vue";
import PricingLayout2 from "../pages/PricingLayout2.vue";
import InvoiceLayout1 from "../pages/InvoiceLayout1.vue";
import InvoiceLayout2 from "../pages/InvoiceLayout2.vue";
import FaqLayout1 from "../pages/FaqLayout1.vue";
import FaqLayout2 from "../pages/FaqLayout2.vue";
import FaqLayout3 from "../pages/FaqLayout3.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import ErrorPage from "../pages/ErrorPage.vue";
import UpdateProfile from "../pages/UpdateProfile.vue";
import ChangePassword from "../pages/ChangePassword.vue";
import RegularTable from "../pages/RegularTable.vue";
import Tabulator from "../pages/Tabulator.vue";
import Modal from "../pages/Modal.vue";
import Slideover from "../pages/Slideover.vue";
import Notification from "../pages/Notification.vue";
import Tab from "../pages/Tab.vue";
import Accordion from "../pages/Accordion.vue";
import Button from "../pages/Button.vue";
import Alert from "../pages/Alert.vue";
import ProgressBar from "../pages/ProgressBar.vue";
import Tooltip from "../pages/Tooltip.vue";
import Dropdown from "../pages/Dropdown.vue";
import Typography from "../pages/Typography.vue";
import Icon from "../pages/Icon.vue";
import LoadingIcon from "../pages/LoadingIcon.vue";
import RegularForm from "../pages/RegularForm.vue";
import Datepicker from "../pages/Datepicker.vue";
import TomSelect from "../pages/TomSelect.vue";
import FileUpload from "../pages/FileUpload.vue";
import WysiwygEditor from "../pages/WysiwgEditor.vue";
import Validation from "../pages/Validation.vue";
import Chart from "../pages/Chart.vue";
import Slider from "../pages/Slider.vue";
import ImageZoom from "../pages/ImageZoom.vue";
import AdminLogin from "../pages/backOffice/AdminLogin.vue";
import AdminDashboard from "../pages/backOffice/AdminDashboard.vue";
// import axios from "axios"

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
        component: () => import( "../pages/Viewdatailpdft.vue"),
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
        component: () => import ("../pages/EditCustomer.vue"),
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
    component: () => import ("../pages/Login.vue"),
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
