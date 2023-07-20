import { defineStore } from "pinia";
import axios from "axios";
import { Inventory } from "../models/inventory.model";
import { useAuth } from "./auth";

export type InventoryType  = {
  inventory: Array<Inventory>,
  isNewUser: boolean,
  currentShopName: string,
  currentInventoryId: number,
  currentShopId: number
};

export const useInventory = defineStore("inventory", {
  state: () =>
    ({
      inventory: [],
      isNewUser: false,
      currentShopName: "",
      currentInventoryId: 0,
      currentShopId: 0,
    } as InventoryType),
  getters: {
    getInventory: (state) => state.inventory,
  },
  actions: {
    async setInventory() {
      try {
        const Auth = useAuth();
        const user: any = Auth.checkAuth;
        if (user.id) {
          const URL: string = import.meta.env.VITE_API_URL.replace(" ", "") + "/inventory/getAllInventory";
          const response = await axios.post(URL, { userId: user.id }); // replace with your API endpoint
          const inventory = response.data.data;
          if (inventory.length === 0) {
            this.isNewUser = true 
            this.currentShopName = "ยังไม่มีร้านค้า"
          } else {
            this.isNewUser = false
            this.currentShopName = Array.isArray(inventory) ? inventory[0].shop.shopName : inventory[0].shop.shopName,
            this.currentInventoryId = Array.isArray(inventory) ? inventory[0].id : inventory[0].id,
            this.currentShopId = Array.isArray(inventory) ? inventory[0].shop.id : inventory[0].shop.id,
            this.inventory = []
            inventory.map((item: any) => {
              this.inventory.push(item);
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
    async addShop(payload:object){
      const URL = (`${import.meta.env.VITE_API_URL}/shop/addShop`).replace(" ","")
      const Auth = useAuth();
      const user: any = Auth.checkAuth;
      Object.assign(payload,{userId:user.id})
      try {
        const response = await axios.post(URL,payload);
        if (response.data.code == 201) {
          return true
        } else {
          return false
        }
      } catch (err) {
        console.log(err);
        alert(err);
      }
    },
    selectShop(selectShop:Inventory) {
     this.currentInventoryId = selectShop.id;
     this.currentShopId = selectShop.shopId;
     this.currentShopName = selectShop.shop.shopName;
    }
  },
});

          // this.shop.isNewUser = true;
          // this.shop.currentShopName = "ร้านค้าของฉัน";
          // this.shop.currentInventoryId= inventory[0]?.id ;
          // this.shop.currentShopId= inventory[0]?.shop.id ;
          // this.shop.cityName = inventory[0]?.shop.cityName;
          // this.shop.addressDetail = inventory[0]?.shop.addressDetail;
          // this.shop.districtName = inventory[0]?.shop.districyName;
          // this.shop.postalCode = inventory[0]?.shop.postalCode;
          // this.shop.provinceName = inventory[0]?.shop.provinceName;