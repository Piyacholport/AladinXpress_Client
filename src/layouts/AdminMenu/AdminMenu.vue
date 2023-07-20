<script setup lang="ts">
import { useRoute } from "vue-router";
import logoUrl from "../../assets/images/logo2.png";
import Divider from "./Divider.vue";
import Menu from "./Menu.vue";
import TopBar from "../../components/TopBar";
import MobileMenu from "../../components/MobileMenu";
import { useAdminMenuStore } from "../../stores/admin-menu";
import { FormattedMenu, nestedMenu, enter, leave } from "./admin-menu";
import { watch, reactive, computed, onMounted } from "vue";
import { FormSelect, FormInput } from "../../base-components/Form";
import { Dialog } from "../../base-components/Headless";
import { ref } from "vue";

const route = useRoute();
let formattedMenu = reactive<Array<FormattedMenu | "divider">>([]);
const setFormattedMenu = (computedFormattedMenu: Array<FormattedMenu | "divider">) => {
  Object.assign(formattedMenu, computedFormattedMenu);
};
const AdminMenuStore = useAdminMenuStore();
const adminMenu = computed(() => nestedMenu(AdminMenuStore.menu, route));
watch(adminMenu, () => {
  setFormattedMenu(adminMenu.value);
});
onMounted(() => {
  setFormattedMenu(adminMenu.value);
});
</script>

<template>
  <div class="py-2">
    <MobileMenu />
    <div class="flex mt-[4.7rem] md:mt-0">
      <!-- BEGIN: Side Menu -->
      <nav class="pr-5 pb-16 overflow-x-hidden hidden md:block w-[85px] xl:w-[230px]">
        <RouterLink
          :to="{ name: 'admin-menu-adminDashboard' }"
          class="flex items-center pt-4 pl-5 intro-x"
          style="width: auto"
        >
          <div>
            <img alt="Midone Tailwind HTML Admin Template" class="w-15" :src="logoUrl" />
    
          </div>
        </RouterLink>


        <ul>
          <!-- BEGIN: First Child -->
          <template v-for="(menu, menuKey) in formattedMenu">
            <Divider
              v-if="menu == 'divider'"
              type="li"
              :class="[
             
                'my-6',
                // Animation
                `border-b opacity-0 animate-[0.4s_ease-in-out_0.1s_intro-divider] animate-fill-mode-forwards animate-delay-${
                  (menuKey + 1) * 10
                }`,
              ]"
              :key="'divider-' + menuKey"
            ></Divider>
            <li v-else :key="menuKey" class="">
              <div class="" id="li">
                <Menu
                  :class="{
                    // Animation
                    [`[&>div:nth-child(1)]:hover:before:bg-white/5  opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-${
                      (menuKey + 1) * 10
                    }`]: !menu.active,
                  }"
                  :menu="menu"
                  :formattedMenuState="[formattedMenu, setFormattedMenu]"
                  level="first"
                ></Menu>
              </div>
              <!-- BEGIN: Second Child -->
              <Transition @enter="enter" @leave="leave">
                <ul v-if="menu.subMenu && menu.activeDropdown" class="">
                  <li
                    id="sub_menu"
                    v-for="(subMenu, subMenuKey) in menu.subMenu"
                    :key="subMenuKey"
                  >
                    <Menu
                      :class="{
                        // Animation
                        [`opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-${
                          (subMenuKey + 1) * 10
                        }`]: !subMenu.active,
                      }"
                      :menu="subMenu"
                      :formattedMenuState="[formattedMenu, setFormattedMenu]"
                      level="second"
                    ></Menu>
                    <!-- BEGIN: Third Child -->
                    <Transition @enter="enter" @leave="leave" v-if="subMenu.subMenu">
                      <ul
                        v-if="subMenu.subMenu && subMenu.activeDropdown"
                        class="rounded-lg bg-black/10"
                      >
                        <li
                          v-for="(lastSubMenu, lastSubMenuKey) in subMenu.subMenu"
                          :key="lastSubMenuKey"
                        >
                          <Menu
                            :class="{
                              // Animation
                              [`opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-${
                                (lastSubMenuKey + 1) * 10
                              }`]: !lastSubMenu.active,
                            }"
                            :menu="lastSubMenu"
                            :formattedMenuState="[formattedMenu, setFormattedMenu]"
                            level="third"
                          ></Menu>
                        </li>
                      </ul>
                    </Transition>
                    <!-- END: Third Child -->
                  </li>
                </ul>
              </Transition>
              <!-- END: Second Child -->
            </li>
          </template>
          <!-- END: First Child -->
        </ul>
      </nav>
      <!-- END: Side Menu -->
      <!-- BEGIN: Content -->
      <div
        class="rounded-[30px] min-w-0 min-h-screen flex-1 pb-10 bg-slate-100 px-4 md:px-[22px] max-w-full md:max-w-auto before:content-[''] before:w-full before:h-px before:block"
      >
   
        <RouterView />
      </div>
      <!-- END: Content -->
    </div>
  </div>

</template>
<script lang="ts">
import axios from "axios";
import { useInventory } from "../../stores/inventory";

//addShop modal
const addShopModal = ref(false);
const setAddShopModal = (value: boolean) => {
  addShopModal.value = value;
};
//success modal
const successModal = ref(false);
const setSuccessModal = (value: boolean) => {
  successModal.value = value;
};
export default {
  data() {
    return {
      userId: localStorage.getItem("userId") as string,
      inventory: [] as any[],
      currentShopName: "",
      seletedInventory: 0,
      shopName: "",
      addressDetail: "",
      districtName: "",
      cityName: "",
      provinceName: "",
      postalCode: "",
    };
  },
  methods: {
    async getInventory() {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      const userId = parseInt(this.userId);
      const response: any = await axios.post(
        `${import.meta.env.VITE_API_URL}/inventory/getAllInventory`,
        {
          userId: userId,
        },
        { headers }
      );
      (this.currentShopName = localStorage.getItem("currentShopName") as string),
        (this.inventory = response.data.data);
    },
    async setCurrentShop() {
      console.log(this.seletedInventory);
      const seletedId = this.seletedInventory;
      this.currentShopName = this.inventory[seletedId].shop.shopName;
      const currentInventoryId = String(this.inventory[seletedId].id);
      localStorage.setItem("currentInventoryId", String(currentInventoryId));
      localStorage.setItem("currentShopName", String(this.currentShopName));
    },
    async addShop() {
      const URL = `${import.meta.env.VITE_API_URL}/shop/addShop`;
      try {
        const response = await axios.post(URL, {
          userId: parseInt(localStorage.getItem("userId") as string),
          shopName: this.shopName,
          addressDetail: this.addressDetail,
          districtName: this.districtName,
          cityName: this.cityName,
          provinceName: this.provinceName,
          postalCode: this.postalCode,
        });
        if (response.data.code == 201) {
          const Inventory = useInventory();
          await Inventory.setInventory();
          setAddShopModal(false);
          setSuccessModal(true);
        } else alert("ไม่สามารถเพิ่มร้านค้าได้ โปรดลองอีกครั้ง!");
      } catch (err) {
        console.log(err);
        alert(err);
      }
    },
    addSuccess() {
      setSuccessModal(false);
      window.location.reload();
    },
  },
  // created() {
  //   this.getInventory();
  // },
  mounted() {
    const isNewUser = localStorage.getItem("isNewUser");
    if (isNewUser === "true") {
      setAddShopModal(true);
    }
  },
};
</script>
<style>
/* 

li:hover{
color:#fff
} */
#li:hover {
  background-color: #af0000;
  border-radius: 30px;
}

#sub_menu:hover {
  background-color: #af0000;
  border-radius: 30px;
}
#li {
  background-color: #fff;
  font-weight: bold;
}
</style>
