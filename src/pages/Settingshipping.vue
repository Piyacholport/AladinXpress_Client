<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";

import Button from "../base-components/Button";

import {
  FormInput,

} from "../base-components/Form";
import Lucide from "../base-components/Lucide";


import Notification from "../base-components/Notification";
import { NotificationElement } from "../base-components/Notification";

// const salesReportFilter = ref<string>("");
// const importantNotesRef = ref<TinySliderElement>();
// provide("bind[importantNotesRef]", (el: TinySliderElement) => {
//   importantNotesRef.value = el;
// });

// const deleteConfirmationModal = ref(false);
// const setDeleteConfirmationModal = (value: boolean) => {
//   deleteConfirmationModal.value = value;
// };
// const deleteButtonRef = ref(null);
// //Notification


provide("bind[notificationSuccess]", (el: NotificationElement) => {
  notificationSuccess.value = el;
});

provide("bind[notificationUnsuccess]", (el: NotificationElement) => {
  notificationUnsuccess.value = el;
});




// // Basic sticky notification
// const basicStickyNotification = ref<NotificationElement>();
// const basicStickyNotificationToggle = () => {
//   // Show notification
//   basicStickyNotification.value?.showToast();
// };

// provide("bind[basicStickyNotification]", (el: NotificationElement) => {
//   basicStickyNotification.value = el;
// });

// // Success notification
// const successNotification = ref<NotificationElement>();
// const successNotificationToggle = () => {
//   // Show notification
//   successNotification.value?.showToast();
// };

// provide("bind[successNotification]", (el: NotificationElement) => {
//   successNotification.value = el;
// });

// // Notification with actions
// const notificationWithActions = ref<NotificationElement>();
// const notificationWithActionsToggle = () => {
//   // Show notification
//   notificationWithActions.value?.showToast();
// };

// provide("bind[notificationWithActions]", (el: NotificationElement) => {
//   notificationWithActions.value = el;
// });

// // Notification with avatar
// const notificationWithAvatar = ref<NotificationElement>();
// const notificationWithAvatarToggle = () => {
//   // Show notification
//   notificationWithAvatar.value?.showToast();
// };

// provide("bind[notificationWithAvatar]", (el: NotificationElement) => {
//   notificationWithAvatar.value = el;
// });

// // Notification with split buttons
// const notificationWithSplitButtons = ref<NotificationElement>();
// const notificationWithSplitButtonsToggle = () => {
//   // Show notification
//   notificationWithSplitButtons.value?.showToast();
// };

// provide("bind[notificationWithSplitButtons]", (el: NotificationElement) => {
//   notificationWithSplitButtons.value = el;
// });

// // Notification with buttons below
// const notificationWithButtonsBelow = ref<NotificationElement>();
// const notificationWithButtonsBelowToggle = () => {
//   // Show notification
//   notificationWithButtonsBelow.value?.showToast();
// };

// provide("bind[notificationWithButtonsBelow]", (el: NotificationElement) => {
//   notificationWithButtonsBelow.value = el;
// });

</script>

<template>
  <form action="">
    <!-- BEGIN: Content -->
    <div class="content">
      <h2 class=" text-lg font-bold intro-y" id="">
        การจัดส่ง
      </h2>
      <br /><br />
      <b>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Truck" class="w-4 h-4 mt-1" />
          </span>
          <span>รายการการจัดส่ง</span>
        </div>
      </b>
      <div class="forminput mt-5">
        <table>
          <thead>
            <tr>
              <th class="text-left">#</th>
              <th class="text-left">การจัดส่ง</th>
              <th class="text-left">ราคาค่าจัดส่ง</th>
              <th>ค่าเริ่มต้น</th>
              <th>สถานะ</th>
              <th>ดำเนินการ</th>
            </tr>
          </thead>
          <tbody v-for="(value, key) in shippingList" :key="key">
              <tr >
                <td><Lucide icon="AlignJustify" class="w-4 h-4" /></td>
                <td class="text-left ">{{value.title}}</td>
                <td class="text-left">{{ value.min }} - {{ value.max }}</td>
                <td >
                  <input v-model="shippingList[key].isDefault" @change="clearIsDefault(value.id)" id="isDefault" type="checkbox" value="" class="w-4 mt-5 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                </td>
                <td>
                  <p class="p_status_enable" v-if="value.status == 'ENABLE'">เปิด</p>
                  <p class="p_status_disable" v-if="value.status == 'DISABLE'">ปิด</p>
                </td>
                <td>
                  <router-link
                    :to="{
                      name: value.type != 3 ? 'EditSettingshipping' : 'EditSettingshippingFlatRate' ,
                      params: { type:value.type ,shippingListId:value.id , },
                    }"
                  >
                    <Button
                      as="a"
                      variant="secondary"
                      class="mb-2 mt-2"
                    >
                      <Lucide icon="Settings" class="w-4 h-4" />
                    </Button>
                  </router-link>
              </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br />
    <!-- BEGIN: Content -->
 
    <div class="content">  
      <b>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Truck" class="w-4 h-4 mt-1" />
          </span>
          <span>การตั้งค่า</span>
        </div>
      </b>
      <div class="forminput">
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic mt-5 ml-2">
            <b class="text-left"> รูปแบบขั้นตอนการจัดส่ง </b>
          </div>
          <div class="flex intro-y">
              <div>
                <div>
                    <input v-model="management" id="management-basic" value="management-basic" type="radio" name="management-basic" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-5">
                    <label for="management-basic" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Basic (รูปแบบการจัดการขนส่งอย่างง่าย ภายในเมนูเดียว)</label>
                </div>
                <div>
                    <input v-model="management" id="management-advance" value="management-advance" type="radio" name="management-advance" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-5">
                    <label for="management-advance" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Advance (รูปแบบการจัดการขนส่งขั้นสูง แบ่งการทำงานเป็นขั้นตอนอย่างชัดเจน)</label>
                </div>
              </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->

        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic mt-4 ml-2">
            <b class="text-left"> รูปแบบที่อยู่ </b>
          </div>
          <div class="flex intro-y">
              <div>
                <div>
                    <input v-model="addressType" id="address-type-basic" value="address-type-basic" type="radio" name="default-radio" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-5">
                    <label for="address-type-basic" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Basic (ง่ายต่อการใช้งาน สะดวก รวดเร็ว)</label>
                </div>
                <div>
                    <input v-model="addressType" id="address-type-advance" value="address-type-advance" type="radio" name="default-radio" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-5">
                    <label for="address-type-advance" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Advance (ขั้นสูง เน้นความถูกต้อง มีระบบการตรวจสอบความถูกต้องของที่อยู่)</label>
                </div>
              </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic mt-4 ml-2">
            <b class="text-left"> เวลาการตัดรอบ </b>
          </div>
          <div >
            <label class="relative inline-flex items-center cursor-pointer mt-4">
              <input type="checkbox" value="" class="sr-only peer" v-model="isCutOffTime">
              <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
            </label>
          </div>
        </div>

        <div class="flex flex-col intro-y lg:flex-row mt-5" v-if="isCutOffTime">
          <div class="w-48">
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              เริ่ม:
            </label>
            <input v-model="cutOffStartTime" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="time">
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              สิ้นสุด:
            </label>
            <div class="relative">
              <input v-model="cutOffEndTime" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="time">
            </div>
          </div>
        </div>

        <div class="flex justify-end mt-5">
            <div class="">
              <Button class="mr-2 shadow-md btn_save" type="button" @click="updateShipping();">
                <Lucide icon="Save" class="block mx-auto w-4 h-4" />
                &nbsp; บันทึก
              </Button>
            </div>
        </div>

        <!--Notification Success-->
        <Notification
          refKey="notificationSuccess"
          :options="{
            duration: 3000,
          }"
          class="flex flex-col sm:flex-row"
        >
          <Lucide icon="CheckCircle" class="text-success" />
          <div class="ml-4 mr-4">
            <div class="font-medium">
              บันทึกการตั้งค่าการจัดส่งเสร็จสมบูรณ์ !
            </div>
          </div>
          <div class="font-medium"></div>
        </Notification>
        <!--END: Notification Success-->

        <!--Notification Unsuccess-->
        <Notification
          refKey="notificationUnsuccess"
          :options="{
            duration: 3000,
          }"
          class="flex flex-col sm:flex-row"
        >
        <Lucide icon="XCircle" class="text-danger" />
        <div class="ml-4 mr-4">
          <div class="font-medium">
            บันทึกการตั้งค่าการจัดส่งไม่สำเร็จ กรุณาลองอีกครั้ง !
          </div>
        </div>
        <div class="font-medium"></div>
      </Notification>
        <!--END: Notification Unsuccess-->

        <!-- END: Pricing Layout -->
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import axios from "axios";
import { useInventory } from "../stores/inventory";
import Toastify from 'toastify-js'

const Inventory = useInventory()
// Basic non sticky notification
const notificationSuccess = ref<NotificationElement>(); // success notification
const notificationUnsuccess = ref<NotificationElement>(); // unsuccess notification
  
export default {
  data() {
    return {
      shippingList : [],
      management : "management-basic",
      addressType:"address-type-basic",
      isCutOffTime: false,
      cutOffStartTime:null,
      cutOffEndTime:null,
      seletedInventory: Inventory.inventory[0],
    };
  },
  
  methods: {
    async getSettingShipping(){
      try {
          const headers = {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("auth._token.local")}`,
          };
          const inventoryId = this.seletedInventory.id;
          const URL = (`${import.meta.env.VITE_API_URL}/setting/shipping/${inventoryId}`).replace(" ", "")
          const response: any = await axios.get(URL,
            { headers }
          );

          if (response.data.code === 200) {
              this.management = response.data.data.shipping[0].management == "BASIC" ? "management-basic" : "management-advance";
              this.addressType = response.data.data.shipping[0].addressType == "BASIC" ? "address-type-basic" : "address-type-advance";
           
              this.isCutOffTime =  response.data.data.shipping[0].isCutOffTime;
              if(this.isCutOffTime){
                this.cutOffStartTime = this.timeIn24HoursFormat(response.data.data.shipping[0].cutOffStartTime);
                this.cutOffEndTime = this.timeIn24HoursFormat(response.data.data.shipping[0].cutOffEndTime); 
              }
              let shippingListData = response.data.data.shipping[0].shippingList ;
              let minMaxShipping = response.data.data.minMaxShipping ;
              let minMaxFlatRateShipper = response.data.data.minMaxFlatRateShipper ;
              console.log(response.data.data);
              shippingListData.map((val:any) => {
                  val.min = (0).toFixed(2);
                  val.max = (0).toFixed(2);
                minMaxShipping.map((m:any) => {
                  if(val.id == m.shippingListId){
                      val.min = (m._min.price).toFixed(2);
                      val.max = (m._max.price).toFixed(2)
                  }
                })
                val.flatRate.map((fr:any) => {
                    minMaxFlatRateShipper.map((fm:any) => {
                    if(fr.id == fm.flatRateId){
                        val.min = (fm._min.price).toFixed(2);
                        val.max = (fm._max.price).toFixed(2)
                    }
                  })
                })
              })
              this.shippingList = shippingListData;
          }
      } catch (error) {
        console.error(error);
      }
    },
    async updateShipping(){
      try {
          const headers = {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("auth._token.local")}`,
          };
          const updateBody = {
              shipping : {
                management: this.management == "management-basic" ?  "BASIC" : "ADVANCE",
                addressType: this.addressType == "address-type-basic" ?  "BASIC" : "ADVANCE",
                isCutOffTime:this.isCutOffTime,
                cutOffStartTime:this.cutOffStartTime,
                cutOffEndTime:this.cutOffEndTime
              },
              shippingList : this.shippingList
          }
          const inventoryId = this.seletedInventory.id;
          const URL = (`${import.meta.env.VITE_API_URL}/setting/shipping/${inventoryId}`).replace(" ", "")
          const response: any = await axios.patch(URL,
            updateBody,
            { headers }
          );
          if (response.data.code === 200) {
            this.notification('success')
          }else{
            this.notification('unsuccess')
          }
      } catch (error) {
        console.error(error);
      }
    },
    notification (type:string) {
      // Show notification
      if(type == "success"){
        notificationSuccess.value?.showToast();
      }else{
        notificationUnsuccess.value?.showToast();
      }
    },
    clearIsDefault(id:number){
      this.shippingList.map((val:any) => {
          if(val.id != id){
              val.isDefault = false;
          }
      })
    },
    timeIn24HoursFormat(timestamp:string){
      const date = new Date(timestamp);

      const hours = date.getUTCHours().toString().padStart(2, "0");
      const minutes = date.getUTCMinutes().toString().padStart(2, "0");
      const seconds = date.getUTCSeconds().toString().padStart(2, "0");

      const timeIn24HoursFormat = `${hours}:${minutes}:${seconds}`;
      return timeIn24HoursFormat;
    }
  },
  mounted() {

  },
  beforeMount() {
    this.getSettingShipping();
  }
};
</script>

<style>
@import "..//assets/css/components/tab.scss";
@import "..//assets/css/components/tab.css";
@import "..//assets/css/components/Deliveryofproduct.css";

.topic,
.topic2 {
  width: 200px;
}

.topic2 {
  padding-left: 50px;
}

.p_status_enable {
  background-color: #af0000;
  color: #fff;
  border-radius: 10px;
}

.p_status_disable {
  background-color: #cccccc;
  color: #fff;
  border-radius: 10px;
}


.btn_save {
 
padding-top: 10px;
padding-bottom: 10px;
  cursor: pointer;
  border-radius: 6px;
  background-color: #af0000;
  color: #fff;
}

.btn_save:hover {
  background-color: #950000;
}

</style>
