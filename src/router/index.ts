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
      // {
      //   path: "dashboard-overview-2",
      //   name: "side-menu-dashboard-overview-2",
      //   component: DashboardOverview2,
      // },
      // {
      //   path: "dashboard-overview-3",
      //   name: "side-menu-dashboard-overview-3",
      //   component: DashboardOverview3,
      // },
      // {
      //   path: "dashboard-overview-4",
      //   name: "side-menu-dashboard-overview-4",
      //   component: DashboardOverview4,
      // },
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
      // {
      //   path: "addmovementproduct",
      //   name: "addmovementproduct",
      //   component: AddMovementProduct,
      // },
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

      // {
      //   path: "side-menu-wallet",
      //   name: "side-menu-wallet",
      //   component: Wallet,
      // }, 
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


      // {
      //   path: "product-grid",
      //   name: "side-menu-product-grid",
      //   component: ProductGrid,
      // },
      // {
      //   path: "transaction-list",
      //   name: "side-menu-transaction-list",
      //   component: TransactionList,
      // },
      // {
      //   path: "transaction-detail",
      //   name: "side-menu-transaction-detail",
      //   component: TransactionDetail,
      // },
      // {
      //   path: "seller-list",
      //   name: "side-menu-seller-list",
      //   component: SellerList,
      // },
      // {
      //   path: "seller-detail",
      //   name: "side-menu-seller-detail",
      //   component: SellerDetail,
      // },
      // {
      //   path: "reviews",
      //   name: "side-menu-reviews",
      //   component: Reviews,
      // },
      // {
      //   path: "inbox",
      //   name: "side-menu-inbox",
      //   component: Inbox,
      // },
      // {
      //   path: "file-manager",
      //   name: "side-menu-file-manager",
      //   component: FileManager,
      // },
      // {
      //   path: "point-of-sale",
      //   name: "side-menu-point-of-sale",
      //   component: PointOfSale,
      // },
      // {
      //   path: "chat",
      //   name: "side-menu-chat",
      //   component: Chat,
      // },
      // {
      //   path: "post",
      //   name: "side-menu-post",
      //   component: Post,
      // },
      // {
      //   path: "calendar",
      //   name: "side-menu-calendar",
      //   component: Calendar,
      // },
      // {
      //   path: "crud-data-list",
      //   name: "side-menu-crud-data-list",
      //   component: CrudDataList,
      // },
      // {
      //   path: "crud-form",
      //   name: "side-menu-crud-form",
      //   component: CrudForm,
      // },
      // {
      //   path: "users-layout-1",
      //   name: "side-menu-users-layout-1",
      //   component: UsersLayout1,
      // },
      // {
      //   path: "users-layout-2",
      //   name: "side-menu-users-layout-2",
      //   component: UsersLayout2,
      // },
      // {
      //   path: "users-layout-3",
      //   name: "side-menu-users-layout-3",
      //   component: UsersLayout3,
      // },
      // {
      //   path: "profile-overview-1",
      //   name: "side-menu-profile-overview-1",
      //   component: ProfileOverview1,
      // },
      // {
      //   path: "profile-overview-2",
      //   name: "side-menu-profile-overview-2",
      //   component: ProfileOverview2,
      // },
      // {
      //   path: "profile-overview-3",
      //   name: "side-menu-profile-overview-3",
      //   component: ProfileOverview3,
      // },
      // {
      //   path: "wizard-layout-1",
      //   name: "side-menu-wizard-layout-1",
      //   component: WizardLayout1,
      // },
      // {
      //   path: "wizard-layout-2",
      //   name: "side-menu-wizard-layout-2",
      //   component: WizardLayout2,
      // },
      // {
      //   path: "wizard-layout-3",
      //   name: "side-menu-wizard-layout-3",
      //   component: WizardLayout3,
      // },
      // {
      //   path: "blog-layout-1",
      //   name: "side-menu-blog-layout-1",
      //   component: BlogLayout1,
      // },
      // {
      //   path: "blog-layout-2",
      //   name: "side-menu-blog-layout-2",
      //   component: BlogLayout2,
      // },
      // {
      //   path: "blog-layout-3",
      //   name: "side-menu-blog-layout-3",
      //   component: BlogLayout3,
      // },
      // {
      //   path: "pricing-layout-1",
      //   name: "side-menu-pricing-layout-1",
      //   component: PricingLayout1,
      // },
      // {
      //   path: "pricing-layout-2",
      //   name: "side-menu-pricing-layout-2",
      //   component: PricingLayout2,
      // },
      // {
      //   path: "invoice-layout-1",
      //   name: "side-menu-invoice-layout-1",
      //   component: InvoiceLayout1,
      // },
      // {
      //   path: "invoice-layout-2",
      //   name: "side-menu-invoice-layout-2",
      //   component: InvoiceLayout2,
      // },
      // {
      //   path: "faq-layout-1",
      //   name: "side-menu-faq-layout-1",
      //   component: FaqLayout1,
      // },
      // {
      //   path: "faq-layout-2",
      //   name: "side-menu-faq-layout-2",
      //   component: FaqLayout2,
      // },
      // {
      //   path: "faq-layout-3",
      //   name: "side-menu-faq-layout-3",
      //   component: FaqLayout3,
      // },
      // {
      //   path: "update-profile",
      //   name: "side-menu-update-profile",
      //   component: UpdateProfile,
      // },
      // {
      //   path: "change-password",
      //   name: "side-menu-change-password",
      //   component: ChangePassword,
      // },
      // {
      //   path: "regular-table",
      //   name: "side-menu-regular-table",
      //   component: RegularTable,
      // },
      // {
      //   path: "tabulator",
      //   name: "side-menu-tabulator",
      //   component: Tabulator,
      // },
      // {
      //   path: "modal",
      //   name: "side-menu-modal",
      //   component: Modal,
      // },
      // {
      //   path: "slide-over",
      //   name: "side-menu-slide-over",
      //   component: Slideover,
      // },
      // {
      //   path: "notification",
      //   name: "side-menu-notification",
      //   component: Notification,
      // },
      // {
      //   path: "tab",
      //   name: "side-menu-tab",
      //   component: Tab,
      // },
      // {
      //   path: "accordion",
      //   name: "side-menu-accordion",
      //   component: Accordion,
      // },
      // {
      //   path: "button",
      //   name: "side-menu-button",
      //   component: Button,
      // },
      // {
      //   path: "alert",
      //   name: "side-menu-alert",
      //   component: Alert,
      // },
      // {
      //   path: "progress-bar",
      //   name: "side-menu-progress-bar",
      //   component: ProgressBar,
      // },
      // {
      //   path: "tooltip",
      //   name: "side-menu-tooltip",
      //   component: Tooltip,
      // },
      // {
      //   path: "dropdown",
      //   name: "side-menu-dropdown",
      //   component: Dropdown,
      // },
      // {
      //   path: "typography",
      //   name: "side-menu-typography",
      //   component: Typography,
      // },
      // {
      //   path: "icon",
      //   name: "side-menu-icon",
      //   component: Icon,
      // },
      // {
      //   path: "loading-icon",
      //   name: "side-menu-loading-icon",
      //   component: LoadingIcon,
      // },
      // {
      //   path: "regular-form",
      //   name: "side-menu-regular-form",
      //   component: RegularForm,
      // },
      // {
      //   path: "datepicker",
      //   name: "side-menu-datepicker",
      //   component: Datepicker,
      // },
      // {
      //   path: "tom-select",
      //   name: "side-menu-tom-select",
      //   component: TomSelect,
      // },
      // {
      //   path: "file-upload",
      //   name: "side-menu-file-upload",
      //   component: FileUpload,
      // },
      // {
      //   path: "wysiwyg-editor",
      //   name: "side-menu-wysiwyg-editor",
      //   component: WysiwygEditor,
      // },
      // {
      //   path: "validation",
      //   name: "side-menu-validation",
      //   component: Validation,
      // },
      // {
      //   path: "chart",
      //   name: "side-menu-chart",
      //   component: Chart,
      // },
      // {
      //   path: "slider",
      //   name: "side-menu-slider",
      //   component: Slider,
      // },
      // {
      //   path: "image-zoom",
      //   name: "side-menu-image-zoom",
      //   component: ImageZoom,
      // },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: "/simple-menu",
    component: SimpleMenu,
    children: [
      // {
      //   path: "dashboard-overview-1",
      //   name: "simple-menu-dashboard-overview-1",
      //   component: DashboardOverview1,
      // },
      // {
      //   path: "dashboard-overview-2",
      //   name: "simple-menu-dashboard-overview-2",
      //   component: DashboardOverview2,
      // },
      // {
      //   path: "dashboard-overview-3",
      //   name: "simple-menu-dashboard-overview-3",
      //   component: DashboardOverview3,
      // },
      // {
      //   path: "dashboard-overview-4",
      //   name: "simple-menu-dashboard-overview-4",
      //   component: DashboardOverview4,
      // },
      // {
      //   path: "categories",
      //   name: "simple-menu-categories",
      //   component: Categories,
      // },
      // {
      //   path: "add-product",
      //   name: "simple-menu-add-product",
      //   component: AddProduct,
      // },
      {
        path: "product-list",
        name: "simple-menu-product-list",
        component: () => import("../pages/ProductList.vue"),
      },
      // {
      //   path: "product-grid",
      //   name: "simple-menu-product-grid",
      //   component: ProductGrid,
      // },
      // {
      //   path: "transaction-list",
      //   name: "simple-menu-transaction-list",
      //   component: TransactionList,
      // },
      // {
      //   path: "transaction-detail",
      //   name: "simple-menu-transaction-detail",
      //   component: TransactionDetail,
      // },
      // {
      //   path: "seller-list",
      //   name: "simple-menu-seller-list",
      //   component: SellerList,
      // },
      // {
      //   path: "seller-detail",
      //   name: "simple-menu-seller-detail",
      //   component: SellerDetail,
      // },
      // {
      //   path: "reviews",
      //   name: "simple-menu-reviews",
      //   component: Reviews,
      // },
      // {
      //   path: "inbox",
      //   name: "simple-menu-inbox",
      //   component: Inbox,
      // },
      // {
      //   path: "file-manager",
      //   name: "simple-menu-file-manager",
      //   component: FileManager,
      // },
      // {
      //   path: "point-of-sale",
      //   name: "simple-menu-point-of-sale",
      //   component: PointOfSale,
      // },
      // {
      //   path: "chat",
      //   name: "simple-menu-chat",
      //   component: Chat,
      // },
      // {
      //   path: "post",
      //   name: "simple-menu-post",
      //   component: Post,
      // },
      // {
      //   path: "calendar",
      //   name: "simple-menu-calendar",
      //   component: Calendar,
      // },
      // {
      //   path: "crud-data-list",
      //   name: "simple-menu-crud-data-list",
      //   component: CrudDataList,
      // },
      // {
      //   path: "crud-form",
      //   name: "simple-menu-crud-form",
      //   component: CrudForm,
      // },
      // {
      //   path: "users-layout-1",
      //   name: "simple-menu-users-layout-1",
      //   component: UsersLayout1,
      // },
      // {
      //   path: "users-layout-2",
      //   name: "simple-menu-users-layout-2",
      //   component: UsersLayout2,
      // },
      // {
      //   path: "users-layout-3",
      //   name: "simple-menu-users-layout-3",
      //   component: UsersLayout3,
      // },
      // {
      //   path: "profile-overview-1",
      //   name: "simple-menu-profile-overview-1",
      //   component: ProfileOverview1,
      // },
      // {
      //   path: "profile-overview-2",
      //   name: "simple-menu-profile-overview-2",
      //   component: ProfileOverview2,
      // },
      // {
      //   path: "profile-overview-3",
      //   name: "simple-menu-profile-overview-3",
      //   component: ProfileOverview3,
      // },
      // {
      //   path: "wizard-layout-1",
      //   name: "simple-menu-wizard-layout-1",
      //   component: WizardLayout1,
      // },
      // {
      //   path: "wizard-layout-2",
      //   name: "simple-menu-wizard-layout-2",
      //   component: WizardLayout2,
      // },
      // {
      //   path: "wizard-layout-3",
      //   name: "simple-menu-wizard-layout-3",
      //   component: WizardLayout3,
      // },
      // {
      //   path: "blog-layout-1",
      //   name: "simple-menu-blog-layout-1",
      //   component: BlogLayout1,
      // },
      // {
      //   path: "blog-layout-2",
      //   name: "simple-menu-blog-layout-2",
      //   component: BlogLayout2,
      // },
      // {
      //   path: "blog-layout-3",
      //   name: "simple-menu-blog-layout-3",
      //   component: BlogLayout3,
      // },
      // {
      //   path: "pricing-layout-1",
      //   name: "simple-menu-pricing-layout-1",
      //   component: PricingLayout1,
      // },
      // {
      //   path: "pricing-layout-2",
      //   name: "simple-menu-pricing-layout-2",
      //   component: PricingLayout2,
      // },
      // {
      //   path: "invoice-layout-1",
      //   name: "simple-menu-invoice-layout-1",
      //   component: InvoiceLayout1,
      // },
      // {
      //   path: "invoice-layout-2",
      //   name: "simple-menu-invoice-layout-2",
      //   component: InvoiceLayout2,
      // },
      // {
      //   path: "faq-layout-1",
      //   name: "simple-menu-faq-layout-1",
      //   component: FaqLayout1,
      // },
      // {
      //   path: "faq-layout-2",
      //   name: "simple-menu-faq-layout-2",
      //   component: FaqLayout2,
      // },
      // {
      //   path: "faq-layout-3",
      //   name: "simple-menu-faq-layout-3",
      //   component: FaqLayout3,
      // },
      // {
      //   path: "update-profile",
      //   name: "simple-menu-update-profile",
      //   component: UpdateProfile,
      // },
      // {
      //   path: "change-password",
      //   name: "simple-menu-change-password",
      //   component: ChangePassword,
      // },
      // {
      //   path: "regular-table",
      //   name: "simple-menu-regular-table",
      //   component: RegularTable,
      // },
      // {
      //   path: "tabulator",
      //   name: "simple-menu-tabulator",
      //   component: Tabulator,
      // },
      // {
      //   path: "modal",
      //   name: "simple-menu-modal",
      //   component: Modal,
      // },
      // {
      //   path: "slide-over",
      //   name: "simple-menu-slide-over",
      //   component: Slideover,
      // },
      // {
      //   path: "notification",
      //   name: "simple-menu-notification",
      //   component: Notification,
      // },
      // {
      //   path: "tab",
      //   name: "simple-menu-tab",
      //   component: Tab,
      // },
      // {
      //   path: "accordion",
      //   name: "simple-menu-accordion",
      //   component: Accordion,
      // },
      // {
      //   path: "button",
      //   name: "simple-menu-button",
      //   component: Button,
      // },
      // {
      //   path: "alert",
      //   name: "simple-menu-alert",
      //   component: Alert,
      // },
      // {
      //   path: "progress-bar",
      //   name: "simple-menu-progress-bar",
      //   component: ProgressBar,
      // },
      // {
      //   path: "tooltip",
      //   name: "simple-menu-tooltip",
      //   component: Tooltip,
      // },
      // {
      //   path: "dropdown",
      //   name: "simple-menu-dropdown",
      //   component: Dropdown,
      // },
      // {
      //   path: "typography",
      //   name: "simple-menu-typography",
      //   component: Typography,
      // },
      // {
      //   path: "icon",
      //   name: "simple-menu-icon",
      //   component: Icon,
      // },
      // {
      //   path: "loading-icon",
      //   name: "simple-menu-loading-icon",
      //   component: LoadingIcon,
      // },
      // {
      //   path: "regular-form",
      //   name: "simple-menu-regular-form",
      //   component: RegularForm,
      // },
      // {
      //   path: "datepicker",
      //   name: "simple-menu-datepicker",
      //   component: Datepicker,
      // },
      // {
      //   path: "tom-select",
      //   name: "simple-menu-tom-select",
      //   component: TomSelect,
      // },
      // {
      //   path: "file-upload",
      //   name: "simple-menu-file-upload",
      //   component: FileUpload,
      // },
      // {
      //   path: "wysiwyg-editor",
      //   name: "simple-menu-wysiwyg-editor",
      //   component: WysiwygEditor,
      // },
      // {
      //   path: "validation",
      //   name: "simple-menu-validation",
      //   component: Validation,
      // },
      // {
      //   path: "chart",
      //   name: "simple-menu-chart",
      //   component: Chart,
      // },
      // {
      //   path: "slider",
      //   name: "simple-menu-slider",
      //   component: Slider,
      // },
      // {
      //   path: "image-zoom",
      //   name: "simple-menu-image-zoom",
      //   component: ImageZoom,
      // },
    ],
    // meta: { requiresAuth: true },
  },
  {
    path: "/top-menu",
    component: TopMenu,
    children: [
      // {
      //   path: "dashboard-overview-1",
      //   name: "top-menu-dashboard-overview-1",
      //   component: DashboardOverview1,
      // },
      // {
      //   path: "dashboard-overview-2",
      //   name: "top-menu-dashboard-overview-2",
      //   component: DashboardOverview2,
      // },
      // {
      //   path: "dashboard-overview-3",
      //   name: "top-menu-dashboard-overview-3",
      //   component: DashboardOverview3,
      // },
      // {
      //   path: "dashboard-overview-4",
      //   name: "top-menu-dashboard-overview-4",
      //   component: DashboardOverview4,
      // },
      // {
      //   path: "categories",
      //   name: "top-menu-categories",
      //   component: Categories,
      // },
      // {
      //   path: "add-product",
      //   name: "top-menu-add-product",
      //   component: AddProduct,
      // },
      {
        path: "product-list",
        name: "top-menu-product-list",
        component: () => import("../pages/ProductList.vue"),
      },
      // {
      //   path: "product-grid",
      //   name: "top-menu-product-grid",
      //   component: ProductGrid,
      // },
      // {
      //   path: "transaction-list",
      //   name: "top-menu-transaction-list",
      //   component: TransactionList,
      // },
      // {
      //   path: "transaction-detail",
      //   name: "top-menu-transaction-detail",
      //   component: TransactionDetail,
      // },
      // {
      //   path: "seller-list",
      //   name: "top-menu-seller-list",
      //   component: SellerList,
      // },
      // {
      //   path: "seller-detail",
      //   name: "top-menu-seller-detail",
      //   component: SellerDetail,
      // },
      // {
      //   path: "reviews",
      //   name: "top-menu-reviews",
      //   component: Reviews,
      // },
      // {
      //   path: "inbox",
      //   name: "top-menu-inbox",
      //   component: Inbox,
      // },
      // {
      //   path: "file-manager",
      //   name: "top-menu-file-manager",
      //   component: FileManager,
      // },
      // {
      //   path: "point-of-sale",
      //   name: "top-menu-point-of-sale",
      //   component: PointOfSale,
      // },
      // {
      //   path: "chat",
      //   name: "top-menu-chat",
      //   component: Chat,
      // },
      // {
      //   path: "post",
      //   name: "top-menu-post",
      //   component: Post,
      // },
      // {
      //   path: "calendar",
      //   name: "top-menu-calendar",
      //   component: Calendar,
      // },
      // {
      //   path: "crud-data-list",
      //   name: "top-menu-crud-data-list",
      //   component: CrudDataList,
      // },
      // {
      //   path: "crud-form",
      //   name: "top-menu-crud-form",
      //   component: CrudForm,
      // },
      // {
      //   path: "users-layout-1",
      //   name: "top-menu-users-layout-1",
      //   component: UsersLayout1,
      // },
      // {
      //   path: "users-layout-2",
      //   name: "top-menu-users-layout-2",
      //   component: UsersLayout2,
      // },
      // {
      //   path: "users-layout-3",
      //   name: "top-menu-users-layout-3",
      //   component: UsersLayout3,
      // },
      // {
      //   path: "profile-overview-1",
      //   name: "top-menu-profile-overview-1",
      //   component: ProfileOverview1,
      // },
      // {
      //   path: "profile-overview-2",
      //   name: "top-menu-profile-overview-2",
      //   component: ProfileOverview2,
      // },
      // {
      //   path: "profile-overview-3",
      //   name: "top-menu-profile-overview-3",
      //   component: ProfileOverview3,
      // },
      // {
      //   path: "wizard-layout-1",
      //   name: "top-menu-wizard-layout-1",
      //   component: WizardLayout1,
      // },
      // {
      //   path: "wizard-layout-2",
      //   name: "top-menu-wizard-layout-2",
      //   component: WizardLayout2,
      // },
      // {
      //   path: "wizard-layout-3",
      //   name: "top-menu-wizard-layout-3",
      //   component: WizardLayout3,
      // },
      // {
      //   path: "blog-layout-1",
      //   name: "top-menu-blog-layout-1",
      //   component: BlogLayout1,
      // },
      // {
      //   path: "blog-layout-2",
      //   name: "top-menu-blog-layout-2",
      //   component: BlogLayout2,
      // },
      // {
      //   path: "blog-layout-3",
      //   name: "top-menu-blog-layout-3",
      //   component: BlogLayout3,
      // },
      // {
      //   path: "pricing-layout-1",
      //   name: "top-menu-pricing-layout-1",
      //   component: PricingLayout1,
      // },
      // {
      //   path: "pricing-layout-2",
      //   name: "top-menu-pricing-layout-2",
      //   component: PricingLayout2,
      // },
      // {
      //   path: "invoice-layout-1",
      //   name: "top-menu-invoice-layout-1",
      //   component: InvoiceLayout1,
      // },
      // {
      //   path: "invoice-layout-2",
      //   name: "top-menu-invoice-layout-2",
      //   component: InvoiceLayout2,
      // },
      // {
      //   path: "faq-layout-1",
      //   name: "top-menu-faq-layout-1",
      //   component: FaqLayout1,
      // },
      // {
      //   path: "faq-layout-2",
      //   name: "top-menu-faq-layout-2",
      //   component: FaqLayout2,
      // },
      // {
      //   path: "faq-layout-3",
      //   name: "top-menu-faq-layout-3",
      //   component: FaqLayout3,
      // },
      // {
      //   path: "update-profile",
      //   name: "top-menu-update-profile",
      //   component: UpdateProfile,
      // },
      // {
      //   path: "change-password",
      //   name: "top-menu-change-password",
      //   component: ChangePassword,
      // },
      // {
      //   path: "regular-table",
      //   name: "top-menu-regular-table",
      //   component: RegularTable,
      // },
      // {
      //   path: "tabulator",
      //   name: "top-menu-tabulator",
      //   component: Tabulator,
      // },
      // {
      //   path: "modal",
      //   name: "top-menu-modal",
      //   component: Modal,
      // },
      // {
      //   path: "slide-over",
      //   name: "top-menu-slide-over",
      //   component: Slideover,
      // },
      // {
      //   path: "notification",
      //   name: "top-menu-notification",
      //   component: Notification,
      // },
      // {
      //   path: "tab",
      //   name: "top-menu-tab",
      //   component: Tab,
      // },
      // {
      //   path: "accordion",
      //   name: "top-menu-accordion",
      //   component: Accordion,
      // },
      // {
      //   path: "button",
      //   name: "top-menu-button",
      //   component: Button,
      // },
      // {
      //   path: "alert",
      //   name: "top-menu-alert",
      //   component: Alert,
      // },
      // {
      //   path: "progress-bar",
      //   name: "top-menu-progress-bar",
      //   component: ProgressBar,
      // },
      // {
      //   path: "tooltip",
      //   name: "top-menu-tooltip",
      //   component: Tooltip,
      // },
      // {
      //   path: "dropdown",
      //   name: "top-menu-dropdown",
      //   component: Dropdown,
      // },
      // {
      //   path: "typography",
      //   name: "top-menu-typography",
      //   component: Typography,
      // },
      // {
      //   path: "icon",
      //   name: "top-menu-icon",
      //   component: Icon,
      // },
      // {
      //   path: "loading-icon",
      //   name: "top-menu-loading-icon",
      //   component: LoadingIcon,
      // },
      // {
      //   path: "regular-form",
      //   name: "top-menu-regular-form",
      //   component: RegularForm,
      // },
      // {
      //   path: "datepicker",
      //   name: "top-menu-datepicker",
      //   component: Datepicker,
      // },
      // {
      //   path: "tom-select",
      //   name: "top-menu-tom-select",
      //   component: TomSelect,
      // },
      // {
      //   path: "file-upload",
      //   name: "top-menu-file-upload",
      //   component: FileUpload,
      // },
      // {
      //   path: "wysiwyg-editor",
      //   name: "top-menu-wysiwyg-editor",
      //   component: WysiwygEditor,
      // },
      // {
      //   path: "validation",
      //   name: "top-menu-validation",
      //   component: Validation,
      // },
      // {
      //   path: "chart",
      //   name: "top-menu-chart",
      //   component: Chart,
      // },
      // {
      //   path: "slider",
      //   name: "top-menu-slider",
      //   component: Slider,
      // },
      // {
      //   path: "image-zoom",
      //   name: "top-menu-image-zoom",
      //   component: ImageZoom,
      // },
    ],
    // meta: { requiresAuth: true },
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


// router.beforeEach(async (to, from, next) => {
//   const Auth = useAuth();
//   await Auth.fetchCheckAuth();
//   const Inventory = useInventory()
//   await Inventory.setInventory()
//   const Status = Auth.checkAuth.status;

//   if (to.path === "/login" || to.path === "/register") {
//     if (Status) {
//       next({ path: "/dashboard" });
//     } else {
//       next();
//     }
//   } else if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (Status) {
//       next();
//     } else {
//       next({ path: "/login" });
//     }
//   } else {
//     if (Status) {
//       next({ path: "/dashboard" });
//     } else {
//       next();
//     }
//   }
// });


export default router;
