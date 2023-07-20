import { defineStore } from "pinia";
import { Icon } from "../base-components/Lucide/Lucide.vue";

export interface Menu {
  icon: Icon;
  title: string;
  pageName?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface AdminMenuState {
  menu: Array<Menu | "divider">;
}

export const useAdminMenuStore = defineStore("AdminMenu", {
  state: (): AdminMenuState => ({
    menu: [
      {
        icon: "Home",
        pageName: "admin-menu-adminDashboard",
        title: "ภาพรวมระบบแอดมิน",
      },
      {
        icon: "Users",
        pageName: "admin-menu-AdminList",
        title: "รายชื่อผู้สมัคร",
      },
      {
        icon: "CreditCard",
        pageName: "admin-menu-AdminFinancialList",
        title: "รายการแจ้งชำระเงิน",
      },
      {
        icon: "FileText",
        pageName: "admin-menu-AdminReportDocs",
        title: "รายการขอเอกสาร",
      },
      "divider",
      {
        icon: "LogOut",
        pageName: "adminLogin",
        title: "ออกจากระบบ",
      },
      // {
      //   icon: "Box",
      //   pageName: "admin-menu-button",
      //   title: "button",
      // },
     
     

      
    ],
  }),
});

