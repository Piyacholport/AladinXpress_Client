<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";

import Button from "../base-components/Button";
import { FormInput } from "../base-components/Form";
import Lucide from "../base-components/Lucide";
import { Menu } from "../base-components/Headless";
import Table from "../base-components/Table";
import Notification from "../base-components/Notification";
import { NotificationElement } from "../base-components/Notification";

//Notification
provide("bind[notificationSuccess]", (el: NotificationElement) => {
  notificationSuccess.value = el;
});

provide("bind[notificationUnsuccess]", (el: NotificationElement) => {
  notificationUnsuccess.value = el;
});
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
          <span class="ml-4">
            รูปแบบการจัดส่งแบบ {{ titleShipping(type) }}</span
          >
        </div>
      </b>

      <div class="forminput">
        <div class="mt-5 ml-5 mr-20">
          <div class="mt-5 mb-5">
            <Button class="mr-2 shadow-md" type="button" @click="addPeriod">
              &nbsp; เพิ่มช่วงราคา
            </Button>
            <Button
              class="mr-2 shadow-md"
              id=""
              type="button"
              @click="deletePeriod"
            >
              &nbsp; ลบช่วงราคา &nbsp;<span v-if="deleteLength > 0"
                >({{ deleteLength }})</span
              >
            </Button>
          </div>

          <table class="table-auto">
            <thead>
              <tr>
                <th></th>
                <th class="text-center">#</th>
                <th class="text-left w-auto">{{ titleShippingMin(type) }}</th>
                <th class="text-left w-auto">{{ titleShippingMax(type) }}</th>
                <th class="text-left w-auto">ผู้จัดส่ง</th>
                <th class="text-left w-auto">ราคาขาย</th>
                <th class="w-auto">ค่าเริ่มต้น</th>
              </tr>
            </thead>
            <tbody v-for="(item, index) in shippingRate">
              <tr>
                <td>
                  <div class="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      v-model="shippingRate[index].checked"
                      @change="checkedDeleteLength"
                      type="checkbox"
                      value=""
                      class="mt-9 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </td>
                <td>{{ index + 1 }}</td>
                <td>
                  <input
                    @keypress="isNumber($event)"
                    v-model="shippingRate[index].minRate"
                    type="text"
                    id="first_name"
                    class="mt-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </td>
                <td>
                  <input
                    @keypress="isNumber($event)"
                    v-model="shippingRate[index].maxRate"
                    type="text"
                    id="first_name"
                    class="mt-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </td>
                <td>
                  <select
                    id="countries"
                    v-model="shippingRate[index].shipperId"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  >
                    <option selected value="0">เลือกผู้จัดส่ง</option>
                    <option v-for="option in shipperList" :value="option.id">
                      {{ option.title }}
                    </option>
                  </select>
                </td>
                <td>
                  <input
                    v-model="shippingRate[index].price"
                    @keypress="isNumber($event)"
                    type="text"
                    id="first_name"
                    class="mt-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </td>
                <td>
                  <Button
                    @click="changeisDefault(index)"
                    :class="item.isDefault ? 'isDefault_Enable' : ''"
                    :disabled="item.isDefault ? true : false"
                    >เลือกเป็นค่าเริ่มต้น</Button
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- BEGIN: Pricing Layout -->
        <hr class="mt-12" />
        <div class="mt-5 ml-5 mr-20">
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-52">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                หัวข้อ
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                v-model="title"
                class="mt-5 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-52">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 mt-3"
                for="inline-password"
              >
                สถานะ
              </label>
            </div>
            <div class="md:w-2/3">
              <label
                class="relative inline-flex items-center cursor-pointer mt-4"
              >
                <input
                  type="checkbox"
                  value="default-checked"
                  class="sr-only peer"
                  v-model="status"
                />
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"
                ></div>
              </label>
            </div>
          </div>
        </div>

        <div class="flex justify-end mt-5">
          <div class="">
            <Button
              class="mr-2 shadow-md btn_save"
              type="button"
              @click="updateShippingRate"
            >
              <Lucide icon="Save" class="block mx-auto w-4 h-4" />
              &nbsp; บันทึก
            </Button>

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

            <!-- <Button as="a" variant="secondary" href="Settingsrole" class="inline-block w-24 mb-2 mr-1"></Button> -->
          </div>
        </div>
        <!-- END: Pricing Layout -->
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
        <div class="font-medium">บันทึกการตั้งค่าการจัดส่งเสร็จสมบูรณ์ !</div>
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

    <br />
  </form>
</template>

<script lang="ts">
import { log } from "console";
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
      status: false,
      title: "",
      shippingRate: [
        {
          id: null,
          minRate: "",
          maxRate: "",
          shipperId: 0,
          price: "0.00",
          isDefault: false,
          checked: false,
        },
      ],
      shipperList: [
        {
          id: 0,
          title: "",
        },
      ],
      deleteLength: 0,
      deleteShippingRateAll: false,
    };
  },
  methods: {
    async getShippingRateAll() {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const URL = `${import.meta.env.VITE_API_URL}/setting/shipping/rate/${
          this.shippingListId
        }`.replace(" ", "");
        const response: any = await axios.get(URL, { headers });
        if (response.data.code === 200) {
          this.title = response.data.data.shippingList.title;
          this.status =
            response.data.data.shippingList.status == "ENABLE" ? true : false;
          if (response.data.data.shippingRate.length > 0) {
            this.shippingRate = [];
            this.shippingRate = response.data.data.shippingRate.map(
              (val: any) => {
                return {
                  id: val.id,
                  shippingListId: val.shippingListId,
                  minRate: val.minRate,
                  maxRate: val.maxRate,
                  shipperId: val.shipperId,
                  price: val.price,
                  isDefault: val.isDefault,
                  checked: false,
                };
              }
            );
          }
        }
      } catch (err) {
        console.error(err);
      }
    },
    async getShipperAll() {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const URL = `${import.meta.env.VITE_API_URL}/setting/shipper`.replace(
          " ",
          ""
        );
        const response: any = await axios.get(URL, { headers });
        if (response.data.code === 200) {
          if (response.data.data.length > 0) {
            this.shipperList = [];
            this.shipperList = response.data.data.map((val: any) => {
              return {
                id: val.id,
                title: val.title,
              };
            });
          }
        }
      } catch (err) {
        console.error(err);
      }
    },
    async updateShippingRate() {
      try {
        const updateData = {
          shippingRate: this.deleteShippingRateAll ? [] : this.shippingRate,
          shippingList: {
            title: this.title,
            status: this.status == true ? "ENABLE" : "DISABLE",
          },
        };
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const URL = `${import.meta.env.VITE_API_URL}/setting/shipping/rate/${
          this.shippingListId
        }`.replace(" ", "");
        const response: any = await axios.patch(URL, updateData, { headers });
        if (response.data.code === 200) {
          this.notification("success");
        } else {
          this.notification("unsuccess");
        }
      } catch (err) {
        console.log(err);
      }
    },
    titleShipping(type: number) {
      let title = "";
      if (type == 1) {
        title = "ราคาตามน้ำหนักสินค้า";
      } else if (type == 2) {
        title = "ราคาตามจำนวนสินค้า";
      }

      return title;
    },
    titleShippingMin(type: number) {
      let title = "";
      if (type == 1) {
        title = "น้ำหนักเริ่มต้น (กรัม)";
      } else if (type == 2) {
        title = "จำนวนต่ำสุด";
      }
      return title;
    },
    titleShippingMax(type: number) {
      let title = "";
      if (type == 1) {
        title = "น้ำหนักสูงสุด (กรัม)";
      } else if (type == 2) {
        title = "จำนวนสูงสุด";
      }
      return title;
    },
    async changeisDefault(index: number) {
      await this.shippingRate.map((val) => {
        val.isDefault = false;
      });
      this.shippingRate[index].isDefault = true;
    },
    addPeriod() {
      this.shippingRate.push({
        id: null,
        minRate: "",
        maxRate: "",
        shipperId: 0,
        price: "0.00",
        isDefault: false,
        checked: false,
      });
    },
    deletePeriod() {
      if (this.deleteLength > 0) {
        this.shippingRate = this.shippingRate.filter((val: any) => {
          return val.checked == false;
        });
        this.deleteLength = 0;
      } else {
        this.shippingRate.pop();
      }
      this.deleteShippingRateAll = false;
      if (this.shippingRate.length == 0) {
        this.addPeriod();
        this.deleteShippingRateAll = true;
      }
    },
    checkedDeleteLength() {
      let delLength = this.shippingRate.filter((val: any) => {
        return val.checked == true;
      });
      this.deleteLength = delLength.length;
    },
    isNumber(evt: any) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    notification(type: string) {
      // Show notification
      if (type == "success") {
        notificationSuccess.value?.showToast();
      } else {
        notificationUnsuccess.value?.showToast();
      }
    },
  },
  mounted() {},
  beforeMount() {
    this.getShippingRateAll();
    this.getShipperAll();
  },
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

.btn_save,
.btn_submit {
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  border-radius: 6px;
  background-color: #af0000;
  color: #fff;
}

.btn_save:hover,
.btn_submit:hover {
  background-color: #950000;
}

.btn_cancle {
  padding-top: 10px;
  padding-bottom: 8px;
  border-radius: 6px;
  cursor: pointer;
  color: black;
}
.isDefault_Enable {
  background-color: #950000;
  color: #fff;
}
</style>
