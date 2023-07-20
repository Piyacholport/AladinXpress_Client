import { defineStore } from "pinia";
import { Icon } from "../base-components/Lucide/Lucide.vue";


export interface Menu {
  icon: Icon;
  title: string;
  pageName?: string;

  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | "divider">;
}

export const useSideMenuStore = defineStore("sideMenu", {
  state: (): SideMenuState => ({
    menu: [
      {
        icon: "Home",
        pageName:"side-menu-dashboard-overview-1" ,
        title: "ภาพรวม",
      },

      "divider",
      {
        icon: "ShoppingBag",
        pageName: "side-menu-menu-layout",
        title: "ออเดอร์",
        subMenu: [
          {
            icon: "Activity",
            pageName: "side-menu-orderslist",
            title: "ออเดอร์ทั้งหมด",
            ignore: false,
          },
          {
            icon: "Activity",
            pageName: "side-menu-addOrder",
            title: "สร้างออเดอร์",
            ignore: false,
          },
          {
            icon: "Activity",
            pageName: "side-menu-bounceorder",
            title: "ออเดอร์ตีกลับ",
            ignore: false,
          },
        ],
      },
      {
        icon: "CreditCard",
        pageName: "side-menu-payment",
        title: "การชำระเงิน",
      },
      {
        icon: "Truck",
        pageName: "side-menu-deliveryofproduct",
        title: "การจัดส่ง",
      },
      {
        icon: "Users",
        pageName: "side-menu-customersList",
        title: "รายชื่อลูกค้า",
      },
      "divider",
      {
        icon: "Clipboard",
        pageName: "side-menu-categories",
        title: "รายการสินค้า",
        subMenu: [
          {
            icon: "Activity",
            pageName: "side-menu-categories",
            title: "หมวดหมู่สินค้า",
            ignore: false,
          },
          {
            icon: "Activity",
            pageName: "side-menu-product-list",
            title: "สินค้า",
            ignore: false,
          },
          {
            icon: "Activity",
            pageName: "side-menu-barcode",
            title: "พิมพ์บาร์โค๊ด",
            ignore: false,
          },
          {
            icon: "Activity",
            pageName: "side-menu-productfeatures",
            title: "คุณสมบัติสินค้า",
            ignore: false,
          },
       
        ],
      },
      {
        icon: "Package",
        pageName: "side-menu-product",
        title: "สต๊อกสินค้า",
        subMenu: [
          {
            icon: "Activity",
            pageName: "side-menu-purchaseorder",
            title: "สั่งซื้อสินค้า",
            ignore: false,
          },
          {
            icon: "Activity",
            pageName: "side-menu-stock",
            title: "สต๊อกสินค้า",
            ignore: false,
          },
          {
            icon: "Activity",
            pageName: "side-menu-movementProduct",
            title: "การเคลื่อนไหวสินค้า",
            ignore: false,
          },
          {
            icon: "Activity",
            pageName: "side-menu-transferproducts",
            title: "โอน / ย้ายสินค้า",
            ignore: false,
          },
          {
            icon: "Activity",
            pageName: "side-menu-changenumberofproducts",
            title: "เปลี่ยนแปลงจำนวน",
            ignore: false,
          },
          {
            icon: "Activity",
            pageName: "side-menu-warehouse",
            title: "คลังสินค้า",
            ignore: false,
          },
          {
            icon: "Activity",
            pageName: "side-menu-supplier",
            title: "ผู้ผลิต",
            ignore: false,
          },
        ],
      },
      // {
      //   icon: "Monitor",
      //   pageName: "side-menu-calendar",
      //   title: "ช่องทางการขาย",
      // },
      // {
      //   icon: "Compass",
      //   pageName: "side-menu-crud-data-list",
      //   title: "เครื่องมือการตลาด",
      // },
     
      {
        icon: "FileText",
        pageName: "side-menu-summaryreport",
        title: "รายงาน",
      },
      // {
      //   icon: "UploadCloud",
      //   pageName: "side-menu-profile",
      //   title: "นำเข้า/ส่งออกข้อมูล",
      // },
   
      {
        icon: "UploadCloud",
        pageName: "",
        title: "นำเข้า/ส่งออกข้อมูล",
        subMenu: [
          {
            icon: "Activity",
            pageName: "side-menu-importdatas",
            title: "นำเข้าข้อมูล",
            ignore: false,
          },
          {
            icon: "Activity",
            pageName: "side-menu-exportdata",
            title: "ส่งออกข้อมูล",
            ignore: false,
          },
 
        ],
      },
    
      {
        icon: "Settings",
        pageName: "side-menu-layout",
        title: "การตั้งค่า",
        subMenu: [
          {
            icon: "Activity",
            pageName: "side-menu-member",
            title: "บัญชีของฉัน",
            ignore: false,
          },
          {
            icon: "Activity",
            pageName: "setting-shop",
            title: "ข้อมูลร้านค้า",
            ignore: false,
          },
          // {
          //   icon: "Activity",
          //   pageName: "side-menu-chat",
          //   title: "การซื้อ-ขายสินค้า",
          //   ignore: false,
          // },
          {
            icon: "Activity",
            pageName: "side-menu-settingshipping",
            title: "การจัดส่ง",
            ignore: false,
          },
          // {
          //   icon: "Activity",
          //   pageName: "side-menu-chat",
          //   title: "บัญชีขนส่ง",
          //   ignore: false,
          // },
          // {
          //   icon: "Activity",
          //   pageName: "side-menu-chat",
          //   title: "การชำระเงิน",
          //   ignore: false,
          // },
          // {
          //   icon: "Activity",
          //   pageName: "side-menu-chat",
          //   title: "ลูกค้า",
          //   ignore: false,
          // },       
           {
            icon: "Activity",
            pageName: "setting-role",
            title: "สิทธิ์ผู้ใช้งาน",
            ignore: false,
          },
          {
            icon: "Activity",
            pageName: "setting-user",
            title: "ผู้ใช้งานระบบ",
            ignore: false,
          },
          // {
          //   icon: "Activity",
          //   pageName: "side-menu-chat",
          //   title: "รูปแบบเอกสาร",
          //   ignore: false,
          // },
          // {
          //   icon: "Activity",
          //   pageName: "side-menu-chat",
          //   title: "การแจ้งเตือน",
          //   ignore: false,
          // },
          // {
          //   icon: "Activity",
          //   pageName: "side-menu-chat",
          //   title: "กำหนดหมายเลขเอกสาร",
          //   ignore: false,
          // },
      
        ],
      },


      {
        icon: "User",
        pageName: "side-menu-member",
        title: "บัญชีของฉัน",
      },
      // {
      //   icon: "Eye",
      //   pageName: "side-menu-regular-table",
      //   title: "table",
      // },
      // {
      //   icon: "Activity",
      //   pageName: "side-menu-tooltip",
      //   title: "tooltip",
      //   ignore: false,
      // },
      
    ],
  }),
});

