<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
import fakerData from "../utils/faker";
import Button from "../base-components/Button";
import Pagination from "../base-components/Pagination";
import {
  FormInput,
  FormSelect,
  FormCheck,
  FormSwitch,
  InputGroup,
  FormInline,
} from "../base-components/Form";
import Lucide from "../base-components/Lucide";
import Preview from "../base-components/Preview";
import Tippy from "../base-components/Tippy";
import { Dialog, Menu } from "../base-components/Headless";
import Table from "../base-components/Table";
import TinySlider, { TinySliderElement } from "../base-components/TinySlider";
import Litepicker from "../base-components/Litepicker";
import Notification from "../base-components/Notification";
import { NotificationElement } from "../base-components/Notification";


const addfetureModal = ref(false);
const setaddfetureModal = (value: boolean) => {
  addfetureModal.value = value;
};
const addfeturButtonRef = ref(null);

/*Modal Step form*/

const importantNotesRef = ref<TinySliderElement>();

provide("bind[importantNotesRef]", (el: TinySliderElement) => {
  importantNotesRef.value = el;
});

/*Swicht*/


//Notification
provide("bind[notificationSuccess]", (el: NotificationElement) => {
  notificationSuccess.value = el;
});

provide("bind[notificationUnsuccess]", (el: NotificationElement) => {
  notificationUnsuccess.value = el;
});

const deleteConfirmationModal = ref(false);
const setDeleteConfirmationModal = (value: boolean) => {
  deleteConfirmationModal.value = value;
};
const deleteButtonRef = ref(null);
//Notification
</script>

<template>
  <form action="">
    <!-- BEGIN: Content -->
    <div class="content">
      <h2 class="mr-auto text-lg font-bold" id="">
        การจัดส่ง
      </h2>
      <br /><br />
      <b>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Truck" class="w-4 h-4 mt-1" />
          </span>
          <span> รูปแบบการจัดส่งแบบราคาคงที่ Flat rate</span>
        </div>
      </b>
      <div class="forminput">
        <!-- BEGIN: Pricing Layout -->
        <div class="mt-5 ml-5 mr-20">
          <FormInline>
            <FormLabel
              htmlFor="horizontal-form-1"
              class="sm:w-60 text-right mr-5"
            >
              <b> หัวข้อ : </b>
            </FormLabel>
            <FormInput
              class="mt-5"
              id="horizontal-form-1"
              type="text"
              placeholder="หัวข้อ"
              v-model="title"
              :value="title"
            />
          </FormInline>
          <FormInline class="mt-5">
            <FormLabel
              htmlFor="horizontal-form-2"
              class="sm:w-60 text-right mr-5 mt-2"
            >
              <b> ขอบเขตในการจัดส่ง : </b>
            </FormLabel>
            <FormSelect
              class="mt-2 sm:mr-2"
              aria-label="Default select example"
              v-model="availability"
            >
              <option selected value="ALL" >ส่งภายในประเทศ</option>
            </FormSelect>
          </FormInline>

          <table class="table-auto w-[45rem] mr-1 mx-auto mt-10  mb-10 border-collapse border border-slate-500">
              <thead>
                  <tr>
                    <th class="w-3/5">ผู้จัดส่ง</th>
                    <th class="w-96">ค่าเริ่มต้น</th>
                    <th class="w-96">ราคาขาย</th>
                    <th class="w-auto text-center">จัดการ</th>
                  </tr>
              </thead>
              <tbody v-for="(item, index) in flatRateShipperList">
                  <tr>
                      <td>{{ item.title }}</td>
                      <td>
                        <Lucide icon="Check" class="mx-auto" v-if="item.isDefault == true"/>
                      </td>
                      <td>{{ item.price }}</td>
                      <td>
                        <div class=" btn_edit " @click="
                          () => {
                            setaddfetureModal(true,index);
                            getModalIndex(index);
                          }
                        ">
                          <span class="flex items-center justify-center">
                            <Lucide icon="Edit" />
                          </span>
                        </div>
                      </td>
                  </tr>
                    <!-- <tr>
                      <td>FLASH</td>
                      <td>test</td>
                      <td>test</td>
                      <td class="text-center">
                        <div class=" btn_edit " @click="
                          () => {
                            setaddfetureModal(true);
                          }
                        ">
                          <span class="flex items-center justify-center">
                            <Lucide icon="Edit" />
                          </span>
                        </div>
                      </td>
                    </tr> -->
              </tbody>
          </table>



          <FormInline class="mt-5">
            <FormLabel
              htmlFor="horizontal-form-3"
              class="sm:w-60 text-right mr-5"
            >
              <b> สถานะ : </b>
            </FormLabel>

            <label class="relative inline-flex items-center cursor-pointer mt-1">
                <input type="checkbox" value="default-checked" class="sr-only peer" v-model="status">
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
            </label>

          </FormInline>
          <br />
          <div class="text-right">
            <Button class="mr-2 shadow-md btn_save" type="button" @click="updateFlatRate">
              <Lucide icon="Save" class="block mx-auto w-4 h-4" />
              &nbsp; บันทึก
            </Button>

            <!-- <Button class="mr-2 shadow-md btn_cancle" id="">
              <Lucide icon="XCircle" class="block mx-auto w-4 h-4" />
              &nbsp; ยกเลิก
            </Button> -->
            <router-link
                    :to="{
                      name: 'side-menu-settingshipping',
                    }"
                  >
                    <Button class="mr-2 shadow-md btn_cancle" type="button">
                      <Lucide icon="XCircle" class="block mx-auto w-4 h-4" />
                      &nbsp; ยกเลิก
                    </Button>
              </router-link>


          </div>
          <br />
          <br />
        </div>
        <!-- END: Pricing Layout -->
      </div>
    </div>
    <br />





    <!--M     O     D     A     L-->
    <Dialog :open="addfetureModal" @close="
      () => {
        setaddfetureModal(false);
      }
    " :initialFocus="addfeturButtonRef"

    >   

      <Dialog.Panel class="sm:w-[300px] lg:w-[600px] " style="height: 100px;">
        <Dialog.Title>
            การตั้งค่า
        </Dialog.Title>
        <div class="Dialog">
          <div class="py-0 intro-y box sm:py-0">
            <div class="container">
                <div class="w-full max-w-xs mx-auto">
                    <div>
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
                        ค่าบริการ
                      </label>
                      <input v-model="flatRateShipperList[modalIndex].price" class="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text">
                    </div>
                    <div class="">
                      <input v-model="flatRateShipperList[modalIndex].isDefault" id="default-checkbox" type="checkbox" value="" class="mt-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">เลือกเป็นค่าเริ่มต้น</label>
                    </div>
                </div>
                <div class="border-b-2 border-default-500 mt-5"></div>
                <div class="mt-5 flex justify-end">
                  <Button class="mr-2 shadow-md btn_searchcancel" @click="setaddfetureModal(false);updateFlatRateShipper(flatRateShipperList[modalIndex].id);">
                    <Lucide icon="Save" class="block mx-auto w-4 h-4" />
                    &nbsp; บันทึก
                  </Button>

                  <Button class="mr-2 shadow-md" id="" @click="setaddfetureModal(false)">
                    <Lucide icon="XCircle" class="block mx-auto w-4 h-4" />
                    &nbsp; ยกเลิก
                  </Button>
                </div>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>

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

  </form>
</template>

<script lang="ts">
import axios from "axios";

// Basic non sticky notification
const notificationSuccess = ref<NotificationElement>(); // success notification
const notificationUnsuccess = ref<NotificationElement>(); // unsuccess notification

export default {
  props: {
    type: {
      type: Number,
      required: true,
    },
    shippingListId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      title:"",
      status: false,
      availability:"ALL",
      shipperId:1,
      price:0,
      shipperList:[],
      flatRateShipperList:[{}],
      modalIndex:0,
      countryId:0,
    };
  }, 
  methods: {
    async getShipperAll(){
      try {
        const headers = {
					"Content-Type": "application/json",
					Authorization: `${localStorage.getItem("auth._token.local")}`,
				};
        const URL = (`${import.meta.env.VITE_API_URL}/setting/shipper`).replace(" ","")
        const response: any = await axios.get(URL,
          { headers }
        );
        if (response.data.code === 200) {
          if(response.data.data.length > 0){
              this.shipperList = [];
              this.shipperList = response.data.data.map((val:any) => {
                    return {
                      id : val.id,
                      title :val.title,
                    }
              })
          }
        }
      }catch(err){
        console.error(err);
      }
    },
    async getShippingFlatRateAll(){
      try {
        const headers = {
					"Content-Type": "application/json",
					Authorization: `${localStorage.getItem("auth._token.local")}`,
				};
        const URL = (`${import.meta.env.VITE_API_URL}/setting/flatrate/${this.shippingListId}`).replace(" ","")
        const response: any = await axios.get(URL,
          { headers }
        );
        this.status = true;
        if (response.data.code === 200) {
          this.title = response.data.data.shippingList.title;
          this.status = response.data.data.shippingList.status == "ENABLE" ? true : false;
          if(response.data.data.flatRate.length > 0){
            this.flatRateShipperList = [];
            response.data.data.flatRate.map((rate:any) => {
              this.countryId = rate.countryId;
              rate.flatRateShipper.map((ship:any) => {
                  this.shipperList.map((val:any) => {
                      if(ship.id == val.id){
                        this.flatRateShipperList.push({
                            id:ship.id,
                            flatRateId:ship.flatRateId,
                            title:ship.shipper.title,
                            price:(ship.price).toFixed(2),
                            isDefault:ship.isDefault
                        })
                      }else{
                        this.flatRateShipperList.push({
                            id:null,
                            flatRateId:null,
                            title:val.title,
                            price:0,
                            isDefault:false
                        })
                      }
                  })
              })
            })
          }
        }
      }catch(err){
        console.error(err);
      }
    },
    async updateFlatRate() {
      try{
        const updateData = {
            shippingList:{
              id:this.shippingListId,
              title:this.title,
              status:this.status
            },
            flatRate:{
              id: this.flatRateShipperList[0].flatRateId,
              availability:this.availability,
              countryId:this.countryId,
            },
        }

        const headers = {
					"Content-Type": "application/json",
					Authorization: `${localStorage.getItem("auth._token.local")}`,
				};
        const URL = (`${import.meta.env.VITE_API_URL}/setting/flatrate/${this.shippingListId}`).replace(" ","")
			  const response: any = await axios.patch(
          URL,
          updateData,
          { headers }
        );
        if (response.data.code === 200) {
            this.notification('success')
          }else{
            this.notification('unsuccess')
          }
      }catch(err){
        console.log(err);
      }
    
    },
    async updateFlatRateShipper(id:number){
        try{

          const updateData = this.flatRateShipperList.filter((val) => {
            return val.id == id
          })
            const headers = {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("auth._token.local")}`,
          };
          const URL = (`${import.meta.env.VITE_API_URL}/setting/flatrate/shipper/${id}`).replace(" ","")
          const response: any = await axios.patch(
            URL,
            updateData[0],
            { headers }
          );

          if (response.data.code === 200) {
              this.notification('success')
          }else{
            this.notification('unsuccess')
          }
          
        }catch(error){
            console.error(error);
        }
    },
    getModalIndex(index:number){
      this.modalIndex = index;
      return this.modalIndex
    },
    notification (type:string) {
      // Show notification
      if(type == "success"){
        notificationSuccess.value?.showToast();
      }else{
        notificationUnsuccess.value?.showToast();
      }
    },
  },
  mounted() {

  },
  beforeMount(){
    this.getShipperAll();
    this.getShippingFlatRateAll();
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

#p_status {
  background-color: #af0000;
  color: #fff;
  border-radius: 10px;
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

.btn_edit{
  cursor: pointer;
  border-radius: 6px;
}

.btn_save:hover,.btn_submit:hover {
  background-color: #950000;
}
</style>
