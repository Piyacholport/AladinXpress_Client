<script setup lang="ts">
import { useRoute } from "vue-router";
import logoUrl from "../../assets/images/logo.png";
import Divider from "./Divider.vue";
import Menu from "./Menu.vue";

import TopBar from "../../components/TopBar";
import MobileMenu from "../../components/MobileMenu";
import TomSelect from "../../base-components/TomSelect";
import { useSideMenuStore } from "../../stores/side-menu";
import { FormattedMenu, nestedMenu, enter, leave } from "./side-menu";
import { watch, reactive, computed, onMounted } from "vue";
import { FormSelect, FormInput } from "../../base-components/Form";
import { Dialog } from "../../base-components/Headless";
import { ref } from "vue";

//ref:https://gist.githubusercontent.com/ChaiyachetU/a72a3af3c6561b97883d7af935188c6b/raw/0e9389fa1fc06b532f9081793b3e36db31a1e1c6/thailand.json
import addresses from "../../assets/json/thailand.json"; 

const route = useRoute();
let formattedMenu = reactive<Array<FormattedMenu | "divider">>([]);
const setFormattedMenu = (computedFormattedMenu: Array<FormattedMenu | "divider">) => {
  Object.assign(formattedMenu, computedFormattedMenu);
};
const sideMenuStore = useSideMenuStore();
const sideMenu = computed(() => nestedMenu(sideMenuStore.menu, route));
watch(sideMenu, () => {
  setFormattedMenu(sideMenu.value);
});
onMounted(() => {
  setFormattedMenu(sideMenu.value);
});

//for Tomselect

const select = ref("1");
</script>

<template>
  <div class="py-2">
    <MobileMenu />
    <div class="flex mt-[4.7rem] md:mt-0">
      <!-- BEGIN: Side Menu -->
      <nav class="pr-5 pb-16 overflow-x-hidden hidden md:block w-[85px] xl:w-[230px]">
        <RouterLink
          :to="{ name: 'side-menu-dashboard-overview-1' }"
          class="flex items-center pt-4 pl-5 intro-x"
          style="width: auto"
        >
        </RouterLink>

          <div class="">
            <div class=""><img alt="Midone Tailwind HTML Admin Template" class=" mt-2" :src="logoUrl"  style="border-radius: 20px; width: 150px; "/></div>
            
            <div class="mt-8">
              <div>
                <div>
                  <a href="" class="flex mr-auto black bold items-center">
                    <img
                      class="logoimg w-10 h-10 rounded-3xl"
                      src="../../../src/assets/images/profile.jpg"
                      alt="Avatar"
                    />
                    <p class="font-bold font-base ml-5">
                      {{ Inventory.currentShopName }}
                    </p>
                  </a>
                </div>
                <div style="margin-left: 60px">
                  <div
                    class="w-[120px] h-[40px] bg-[#ebeef5] rounded-md flex items-center justify-center"
                  >
                    <div v-if="Inventory.inventory.length === 0">
                      <p>ยังไม่มีร้านค้า</p>
                    </div>
                    <div v-else>
                      <FormSelect
                        v-model="seletedInventory"
                        id="inventory"
                        @change="setCurrentShop()"
                        class="w-[120px] h-[40px]"
                      >
                        <option
                          id="when_hover"
                          v-for="(item, index) in Inventory.inventory"
                          :key="index"
                          :value="item"
                        >
                        <p>{{ item.shop.shopName }}</p>
                        </option> 
                      </FormSelect><br />
                    </div>
                  </div>
                  <p
                    @click.prevent="
                      () => {
                        setAddShopModal(true);
                      }
                    "
                    class="text-[#af0000] ml-4 mt-1 cursor-pointer"
                  >
                    สร้างร้านค้าเพิ่ม
                  </p>
                </div>
              </div>
            </div>
          </div>

    
        <ul class="mt-5">
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
            <li v-else :key="menuKey">
              <div class="menu hover:text-white" id="li">
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
              <Transition @enter="enter" @leave="leave" >
                <ul v-if="menu.subMenu && menu.activeDropdown" class="hover:text-white">
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
        <TopBar />
        <RouterView />
      </div>
      <!-- END: Content -->
    </div>
  </div>
  <!--AddShopModal-->
  <Dialog
    :open="addShopModal"
    @close="
      () => {
        setAddShopModal(false);
      }
    "
  >
    <Dialog.Panel
      class="sm:w-[600px] lg:w-[900px]"
      style="height: 450px;"
    >
    <Dialog.Title> <span class="text-lg font-bold">เพิ่มร้านค้า</span> </Dialog.Title>
    <div class="Dialog">
      <div class="py-0 intro-y box sm:py-0">
        <div class="container">
          <div class="relative">
            <div class="grid grid-cols-12 gap-4 mt-5 gap-y-5">
              <div class="col-span-12 intro-y sm:col-span-6">
                <FormLabel htmlFor="input-wizard-1"><span class="text-danger text-l font-bold">* </span> ชื่อร้าน</FormLabel>
                <input
                  class="w-full py-2 pl-3 pr-10 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  placeholder="ชื่อร้าน"
                  v-model="shopName"
                  @focus="closeDropdown"
                />
              </div>
              <div class="col-span-12 intro-y sm:col-span-6">
                <FormLabel htmlFor="input-wizard-2"><span class="text-danger text-l font-bold">* </span>ที่อยู่</FormLabel>
                <input
                  class="w-full py-2 pl-3 pr-10 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  placeholder="ที่อยู่"
                  v-model="addressDetail"
                  @keyup="filterAddress('address')"
                  @focus="closeDropdown"
                />
                <ul
                  class="absolute z-10 w-full p-2 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto"
                  v-if="addressList.length > 0"
                >
                  <li class="px-3 py-2 cursor-pointer hover:bg-gray-100 " v-for="address in addressList" @click="setAddress(address)">
                    {{address.district}} {{address.amphoe}} {{address.province}} {{address.zipcode}}  
                    {{address.districtEng}}  {{address.amphoeEng}} {{address.provinceEng}}
                  </li>
                </ul>
              </div>

              <div class="col-span-12 intro-y sm:col-span-6">
                <FormLabel htmlFor="input-wizard-2"><span class="text-danger text-l font-bold">* </span>ซอย/ถนน</FormLabel>
                <input
                  class="w-full py-2 pl-3 pr-10 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  placeholder="ซอย/ถนน"
                  v-model="RodeName"
                />
                <!-- <ul
                  class="absolute z-10 w-full p-2 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto"
                  v-if="addressList.length > 0"
                >
                  <li class="px-3 py-2 cursor-pointer hover:bg-gray-100 " v-for="address in addressList" @click="setAddress(address)">
                    {{address.district}} {{address.amphoe}} {{address.province}} {{address.zipcode}}  
                    {{address.districtEng}}  {{address.amphoeEng}} {{address.provinceEng}}
                  </li>
                </ul> -->
              </div>


              <div class="col-span-12 intro-y sm:col-span-6">
                <FormLabel htmlFor="input-wizard-2"><span class="text-danger text-l font-bold">* </span>จังหวัด</FormLabel>
         
                <input
                  class="w-full py-2 pl-3 pr-10 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  placeholder="Search"
                  v-model="provinceName"
                  @keyup="filterAddress('province')"
                  @focus="closeDropdown"
                />
                <ul
                  class="absolute z-10 w-full p-2 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto"
                  v-if="provinceList.length > 0"
                >
                  <li class="px-3 py-2 cursor-pointer hover:bg-gray-100 " v-for="province in provinceList" @click="setAddress(province)">
                    {{province.district}} {{province.amphoe}} {{province.province}} {{province.zipcode}}  
                    {{province.districtEng}}  {{province.amphoeEng}} {{province.provinceEng}}
                  </li>
                </ul>
              </div>
              <div class="col-span-12 intro-y sm:col-span-6">
                <FormLabel htmlFor="input-wizard-2"><span class="text-danger text-l font-bold">* </span>เขต/อำเภอ</FormLabel>
         
                <input
                  class="w-full py-2 pl-3 pr-10 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  placeholder="Search"
                  v-model="cityName"
                  @keyup="filterAddress('amphoe')"
                  @focus="closeDropdown"
                />
                <ul
                  class="absolute z-10 w-full p-2 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto"
                  v-if="amphoeList.length > 0"
                >
                  <li class="px-3 py-2 cursor-pointer hover:bg-gray-100 " v-for="amphoe in amphoeList" @click="setAddress(amphoe)">
                    {{amphoe.amphoe}} {{amphoe.amphoe}} {{amphoe.province}} {{amphoe.zipcode}}  
                    {{amphoe.amphoeEng}}  {{amphoe.amphoeEng}} {{amphoe.provinceEng}}
                  </li>
                </ul>
              </div>
              <div class="col-span-12 intro-y sm:col-span-6">
                <FormLabel htmlFor="input-wizard-2"><span class="text-danger text-l font-bold">* </span>แขวง/ตำบล</FormLabel>
         
                <input
                  class="w-full py-2 pl-3 pr-10 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  placeholder="Search"
                  v-model="districtName"
                  @keyup="filterAddress('district')"
                  @focus="closeDropdown"
                />
                <ul
                  class="absolute z-10 w-full p-2 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto"
                  v-if="districtList.length > 0"
                >
                  <li class="px-3 py-2 cursor-pointer hover:bg-gray-100 " v-for="district in districtList" @click="setAddress(district)">
                    {{district.district}} {{district.amphoe}} {{district.province}} {{district.zipcode}}  
                    {{district.districtEng}}  {{district.amphoeEng}} {{district.provinceEng}}
                  </li>
                </ul>
              </div>
           
              <div class="col-span-12 intro-y sm:col-span-6">
                <FormLabel htmlFor="input-wizard-2"><span class="text-danger text-l font-bold">* </span>รหัสไปรษณีย์</FormLabel>
                <input
                  class="w-full py-2 pl-3 pr-10 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  placeholder="ค้นหารหัสไปรษณีย์"
                  v-model="postalCode"
                  @keyup="filterAddress('zipcode')"
                  @focus="closeDropdown"
                />
                <ul
                  class="absolute z-10 w-full p-2 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto"
                  v-if="zipcodeList.length > 0"
                >
                  <li class="px-3 py-2 cursor-pointer hover:bg-gray-100 " v-for="zipcode in zipcodeList" @click="setAddress(zipcode)">
                    {{zipcode.district}} {{zipcode.amphoe}} {{zipcode.province}} {{zipcode.zipcode}}  
                    {{zipcode.districtEng}}  {{zipcode.amphoeEng}} {{zipcode.provinceEng}}
                  </li>
                </ul>
              </div>
              <div
                    class="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end"
                  >
                    <Button
                      variant="secondary"
                      class="w-24 ml-2 btn_save shadow-md"
                      @click.prevent="addShop"
                    >
                      บันทึก
                    </Button>
                    <Button
                      variant="secondary"
                      class="w-24 ml-2 btn_cancle shadow-md"
                      @click="
                        () => {
                          setAddShopModal(false);
                          clearAddrsssData();
                        }
                      "
                    >
                      ยกเลิก
                    </Button>
                  </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
      <!-- END -->
    </Dialog.Panel>
  </Dialog>

  <!-- Success Modal -->
  <!-- modal success -->
  <Dialog
    :open="successModal"
    @close="
      () => {
        setSuccessModal(false);
      }
    "
  >
    <Dialog.Panel>
      <div class="p-5 text-center">
        <div class="mt-2">
          <img src="../../assets/images/success.gif" alt="" />
        </div>
        <div class="mb-5 text-3xl">เพิ่มร้าน {{ shopName }} สำเร็จ!</div>
        <Button variant="outline-secondary" type="button" @click.prevent="addSuccess">
          ตกลง
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>
</template>
<script lang="ts">
import axios from "axios";
import { useInventory } from "../../stores/inventory";
const Inventory = useInventory();
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
      inventory: [] as any[],
      currentShopName: "",
      seletedInventory: Inventory.inventory[0], 
      shopName: "",
      addressDetail: "",
      districtName: "",
      cityName: "",
      RodeName:"", //ตัวแปรถนน 
      provinceName: "",
      postalCode: "",
      addresses:[],

      addressList:[],
      districtList:[],
      amphoeList:[],
      provinceList:[],
      zipcodeList:[],
    };
  },
  methods: {
    async setCurrentShop() {
      Inventory.selectShop(this.seletedInventory)
    },
    async addShop() {
      const payload = {
          shopName: this.shopName,
          addressDetail: this.addressDetail,
          districtName: this.districtName,
          cityName: this.cityName,
          provinceName: this.provinceName,
          postalCode: this.postalCode.toString(),
      }
      const addshopStatus = Inventory.addShop(payload);
      if(true){
      setAddShopModal(false);
      setSuccessModal(true);
      }else{
        alert("สร้างร้านค้าได้ไม่สำเร็จ")
      }
    },
    addSuccess() {
      setSuccessModal(false);
      window.location.reload();
    },
    filterAddress(type : string){
        let regex : RegExp ;
        if(type == 'address'){
          regex = new RegExp(`^${this.addressDetail}`, "gi");
        }else if(type == 'district'){
          regex = new RegExp(`^${this.districtName}`, "gi");
        }else if(type == 'amphoe'){
          regex = new RegExp(`^${this.cityName}`, "gi");
        }else if(type == 'province'){
          regex = new RegExp(`^${this.provinceName}`, "gi");
        }else if(type == 'zipcode'){
          regex = new RegExp(`^${this.postalCode}`, "gi");
        }

        if(regex.toString() != '/^/gi'){
            this.clearAddrsssList();
            for (let i=0; i<addresses.length; i++) {
              if(type == 'address'){
                if ( this.addressList.length >= 400) 
                break;
              }else if(type == 'district'){
                if ( this.districtList.length >= 400) 
                break;
              }else if(type == 'amphoe'){
                if ( this.amphoeList.length >= 400) 
                break;
              }else if(type == 'province'){
                if ( this.provinceList.length >= 400) 
                break;
              }else if(type == 'zipcode'){
                if ( this.zipcodeList.length >= 400) 
                break;
              }
          

              const item = addresses[i];
              if(type == 'address'){
                if (
                  addresses[i].district.match(regex) ||
                  addresses[i].districtEng.match(regex) ||
                  addresses[i].amphoe.match(regex) ||
                  addresses[i].amphoeEng.match(regex) ||
                  addresses[i].province.match(regex) ||
                  addresses[i].provinceEng.match(regex)||
                  addresses[i].zipcode.toString().match(regex)
                )
                this.addressList.push(item);
              }else if(type == 'district'){
                if (addresses[i].district.match(regex))
                this.districtList.push(item);
              }else if(type == 'amphoe'){
                if (addresses[i].amphoe.match(regex))
                this.amphoeList.push(item);
              }else if(type == 'province'){
                if (addresses[i].province.match(regex))
                this.provinceList.push(item);
              }else if(type == 'zipcode'){
                if (addresses[i].zipcode.toString().match(regex))
                this.zipcodeList.push(item);
              }
          
            }
        }else{
          this.addressList =[] ;
          this.districtList =[] ;
          this.amphoeList = [] ;
          this.provinceList =[]; 
          this.zipcodeList =[];
        }
    },
    setAddress(address:any){
        this.clearAddrsssList();

        this.addressDetail = "";
        this.districtName = address.district ;
        this.cityName = address.amphoe ;
        this.provinceName = address.province ; 
        this.postalCode= address.zipcode ;        
    },
    closeDropdown(){
      this.clearAddrsssList();
    },
    clearAddrsssList(){
      this.addressList =[] ;
      this.districtList =[] ;
      this.amphoeList = [] ;
      this.provinceList =[]; 
      this.zipcodeList =[];
    },
    clearAddrsssData(){
      this.addressDetail = "";
      this.districtName = "";
      this.cityName = "";
      this.provinceName = "";
      this.postalCode = "";   
    }
  },
  mounted() {
    const isNewUser = Inventory.isNewUser
    if (isNewUser) {
      setAddShopModal(true);
    }
  }
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
#sub_menu {
  margin-left: 20px;
  background-color: #fff;
  border-bottom: none !important;
}
#sub_menu:hover {
  background-color: #af0000;
  border-radius: 30px;
}
#li {
  background-color: #fff;

}

.btn_save ,.btn_submit{
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  border-radius: 6px;
  background-color: #af0000;
  color: #fff;
}

.btn_cancle {
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 6px;
  cursor: pointer;
  color:black;
}

</style>