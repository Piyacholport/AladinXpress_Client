<script setup lang="ts">
import Button from "../base-components/Button";
import {  FormSelect} from "../base-components/Form";

import Progress from "../base-components/Progress";
import Lucide from "../base-components/Lucide";
import { Menu, } from "../base-components/Headless";
import Table from "../base-components/Table";
import Litepicker from "../base-components/Litepicker";
import { ref, provide } from "vue";

import  { TinySliderElement } from "../base-components/TinySlider";

const editStockButtonRef = ref(null);
//for date picker
const salesReportFilter = ref<string>("");
const importantNotesRef = ref<TinySliderElement>();

provide("bind[importantNotesRef]", (el: TinySliderElement) => {
  importantNotesRef.value = el;
});

const prevImportantNotes = () => {
  importantNotesRef.value?.tns.goTo("prev");
};
const nextImportantNotes = () => {
  importantNotesRef.value?.tns.goTo("next");
};

//ปุ่มเพิ่มลดในModal
// function increaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value++;
//   document.getElementById('number').value = value;
// }

// function decreaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value < 1 ? value = 1 : '';
//   value--;
//   document.getElementById('number').value = value;
// }
</script>

<template>
  <div class="flex items-center  mb-5 intro-y">
    <h2 class="mr-auto text-lg font-bold">บัญชีของฉัน</h2>
  </div>
  <Button class="w-32 mb-2 mr-2 bg-[#af0000] text-white">
    <Lucide icon="User" class="w-4 h-4 mr-2" /> บัญชีของฉัน
  </Button>
  <Button variant="secondary" class="w-50 mb-2 mr-2" disabled>
    <Lucide icon="CreditCard" class="w-4 h-4 mr-2" /> บัญชีกระเป๋าเงินอนไลน์
  </Button>
  <Button variant="secondary" class="w-32 mb-2 mr-2" disabled>
    <Lucide icon="Users" class="w-4 h-4 mr-2" /> แนะนำเพื่อน
  </Button>
  <div class="grid grid-cols-12 gap-6">
    <!-- BEGIN: Profile Menu -->
    <div
      class="flex flex-col-reverse col-span-12 lg:col-span-4 2xl:col-span-3 lg:block"
    >
      <div class="mt-5 intro-y box">
        <div class="relative flex items-center p-5 font-bold">
          แพ็คเกจปัจุบัน: Trial
        </div>
        <div
          class="p-5 border-t border-slate-200/60 dark:border-darkmode-400 text-center"
        >
          <Button
            class="w-35 mb-2 mr-2 bg-[#af0000] text-white"
            as="a"
            href="UpgradePackage"
          >
            <Lucide icon="Activity" class="w-4 h-4 mr-2" /> ต่ออายุแพ็คเกจ
          </Button>
        </div>
        <div class="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
          <div class="flex flex-col items-center sm:flex-row">
            <h2 class="mr-auto text-base font-bold">ข้อมูลสำหรับออกบิล</h2>
            <Button variant="warning" class="w-30 text-xs">
              <Lucide icon="Edit" class="w-3 h-3 mr-2" /> แก้ไข
            </Button>
          </div>
          <!-- <div class="font-bold"></div>
          <div class="ml-auto">
            <Button variant="warning" class="w-30 mb-2 mr-2 text-xs">
              <Lucide icon="Edit" class="w-3 h-3 mr-2" /> แก้ไข
            </Button>
          </div> -->
        </div>
        <div
          class="flex border-t border-slate-200/60 dark:border-darkmode-400"
        ></div>
        <div class="p-5" v-for="(mem, key) in memberDetail.member">
          <p class="font-bold mt-1">{{ mem.fullName }}</p>
          <p class="mt-1">
            <span class="font-bold">หมายเลขประจำตัวผู้เสียภาษี :</span>
            <span> {{ mem.taxId ? mem.taxId : " -" }}</span>
          </p>
          <p class="mt-1">
            <span class="font-bold">ที่อยู่ :</span>
            <span> {{ mem.addressDetail ? " "+mem.addressDetail : " -"  }}</span>
          </p>
          <p class="mt-1">
            <span class="font-bold">โทรศัพท์ :</span> <span>{{ mem.tel ? " "+mem.tel : " -"  }}</span>
          </p>
        </div>
      </div>
    </div>
    <!-- END: Profile Menu -->

    <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
      <!-- BEGIN: Display Information -->
      <div class="intro-y box lg:mt-5">
        <div class="p-5 border-b border-slate-200/60 dark:border-darkmode-400">
          <div class="flex flex-col items-center sm:flex-row">
            <h2 class="mr-auto text-base font-bold">ปริมาณการใช้งาน</h2>
            <p>หมดอายุไปแล้ว 3 ชั่วโมง 37 นาที.</p>
          </div>
          <!-- <div class="flex flex-col items-center sm:flex-row">
            <h2 class="mr-auto text-base font-bold">ปริมาณการใช้งาน</h2>
            <p>หมดอายุไปแล้ว 3 ชั่วโมง 37 นาที.</p>
          </div> -->
        </div>
        <div class="p-5">
          <div class="flex flex-col xl:flex-row">
            <div class="flex-1 mt-6 xl:mt-0">
              <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-12 2xl:col-span-6">
                  <div class="">
                    <div class="flex flex-col items-center sm:flex-row mb-1">
                      <h2 class="mr-auto">คำสั่งซื้อ</h2>
                      <p>50/1,000</p>
                    </div>
                    <Progress>
                      <Progress.Bar
                        class="w-0.5 bg-[#af0000]"
                        role="progressbar "
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></Progress.Bar>
                    </Progress>
                  </div>
                  <div class="mt-3">
                    <div class="flex flex-col items-center sm:flex-row mb-1">
                      <h2 class="mr-auto">จำนวน Marketplace ที่เชื่อมต่อ</h2>
                      <p>0/2</p>
                    </div>
                    <Progress>
                      <Progress.Bar
                        class="w-0 bg-[#af0000]"
                        role="progressbar "
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></Progress.Bar>
                    </Progress>
                  </div>
                  <div class="mt-3">
                    <div class="flex flex-col items-center sm:flex-row mb-1">
                      <h2 class="mr-auto">จำนวนแอคเคาท์โซเชียลมีเดีย</h2>
                      <p>1/2</p>
                    </div>
                    <Progress>
                      <Progress.Bar
                        class="w-1/2 bg-[#af0000]"
                        role="progressbar "
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></Progress.Bar>
                    </Progress>
                  </div>
                  <div class="mt-3">
                    <div class="flex flex-col items-center sm:flex-row mb-1">
                      <h2 class="mr-auto">สินค้า</h2>
                      <p>1/2</p>
                    </div>
                    <Progress>
                      <Progress.Bar
                        class="w-1/2 bg-[#af0000]"
                        role="progressbar "
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></Progress.Bar>
                    </Progress>
                  </div>
                </div>
                <div class="col-span-12 2xl:col-span-6">
                  <div class="mt-3 2xl:mt-0">
                    <div class="flex flex-col items-center sm:flex-row mb-1">
                      <h2 class="mr-auto">คลังสินค้า</h2>
                      <p>1/2</p>
                    </div>
                    <Progress>
                      <Progress.Bar
                        class="w-1/2 bg-[#af0000]"
                        role="progressbar "
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></Progress.Bar>
                    </Progress>
                  </div>
                  <div class="mt-3">
                    <div class="flex flex-col items-center sm:flex-row mb-1">
                      <h2 class="mr-auto">จำนวนเว็บไซต์ที่เชื่อมต่อ</h2>
                      <p>1/2</p>
                    </div>
                    <Progress>
                      <Progress.Bar
                        class="w-1/2 bg-[#af0000]"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></Progress.Bar>
                    </Progress>
                  </div>
                  <div class="mt-3">
                    <div class="flex flex-col items-center sm:flex-row mb-1">
                      <h2 class="mr-auto">ผู้ใช้งานระบบ</h2>
                      <p>1/2</p>
                    </div>
                    <Progress>
                      <Progress.Bar
                        class="w-1/2 bg-[#af0000]"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></Progress.Bar>
                    </Progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Display Information -->
      <!-- BEGIN: Personal Information -->
      <div class="mt-5 intro-y box">
        <div
          class="flex p-5 border-b border-slate-200/60 dark:border-darkmode-400"
        >
          <h2 class="mr-auto text-base font-bold">ประวัติการสั่งซื้อ</h2>
        </div>
        <div class="p-5">
          <div class="search">
            <!-- <FormSelect
                
                class="sm:mt-2 sm:mr-2 w-30"
               
              >
              <option>เลือกบริการ</option>
                <option>แพ็คเกจ</option>
                <option>บัญชีกระเป๋าเงินออนไลน์</option>
                <option>ระบบดำเนินการ</option>
              </FormSelect> -->
            <div class="formsearch">
              <form action="">
                <div
                  class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap"
                >
                  <div class="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
                    <!-- BEGIN:Filter search dropdown -->
                    <div class="relative text-slate-500" id="">
                      <FormSelect class="sm:mt-1 sm:mr-2 w-30">
                        <option>เลือกบริการ</option>
                        <option>แพ็คเกจ</option>
                        <option>บัญชีกระเป๋าเงินออนไลน์</option>
                        <option>ระบบดำเนินการ</option>
                      </FormSelect>
                    </div>
                  </div>

                  <div
                    class="flex ml-3"
                    style="
                      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                      border-radius: 6px;
                    "
                  >
                    <div
                      class="z-30 flex items-center justify-center w-10 bg-slate-100 text-slate-600 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"
                      style="margin-bottom: 0px"
                    >
                      <Lucide icon="Calendar" class="w-4 h-4" />
                    </div>
                    <Litepicker
                      v-model="dateRangeLitepicker"
                      :options="{
                        autoApply: false,
                        singleMode: false,
                        numberOfColumns: 2,
                        numberOfMonths: 2,
                        showWeekNumbers: true,
                        dropdowns: {
                          minYear: 1990,
                          maxYear: null,
                          months: true,
                          years: true,
                        },
                      }"
                      class="pl-1 sm:w-50 !box"
                    />
                  </div>
                  <Button
                    class="w-35 mb-2 mr-2 bg-[#af0000] text-white mt-2 ml-5"
                  >
                    <Lucide icon="Search" class="w-4 h-4 mr-2" /> ค้นหา
                  </Button>
                  <!--END: Filter search dropdown -->
                </div>
                <br />
              </form>
            </div>
          </div>
          <div class="">
            <div
              id="allTab-container"
              class="table-responsive kv-grid-container"
            >
              <div class="table-list">
                <div class="overflow-x-auto">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th class="whitespace-nowrap">#</th>

                        <th
                          class="whitespace-nowrap text-left"
                          style="width: 190px"
                        >
                          ชื่อแพ็คเกจ
                        </th>
                        <th class="whitespace-nowrap" style="width: 90px">
                          ราคา / เดือน
                        </th>
                        <th class="whitespace-nowrap" style="width: 90px">
                          ระยะเวลา
                        </th>
                        <th class="whitespace-nowrap" style="width: 90px">
                          <span style="display: block; width: 90px"
                            >ราคารวม</span
                          >
                        </th>
                        <th class="whitespace-nowrap" style="width: 400px">
                          วันที่เปลี่ยนแพ็คเกจ
                        </th>
                        <th class="whitespace-nowrap" style="width: 400px">
                          วันที่ชำระเงิน
                        </th>
                        <th class="whitespace-nowrap" style="width: 300px">
                          สถานะ
                        </th>
                        <th class="whitespace-nowrap" style="width: 150px">
                          จัดการ
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <!-- <tr>
                        <th class="whitespace-nowrap">1</th>

                        <td
                          class="whitespace-nowrap text-left"
                          style="width: 190px"
                        >
                          M
                        </td>
                        <td class="whitespace-nowrap" style="width: 90px">
                          2,499
                        </td>
                        <td class="whitespace-nowrap" style="width: 90px">
                          1 ปี
                        </td>
                        <td class="whitespace-nowrap" style="width: 90px">
                          <span style="display: block; width: 90px"
                            >29,988</span
                          >
                        </td>
                        <td class="whitespace-nowrap" style="width: 400px">
                          <div class="flex items-center justify-center">
                        <span class="flex items-center justify-center w-5 h-5">
                          <Lucide icon="Calendar" class="w-4 h-4 " />
                        </span>
                        <span class="mr-3">08-03-2023</span>
                        <span class="flex items-center justify-center w-5 h-5">
                          <Lucide icon="Clock" class="w-4 h-4 " />
                        </span>
                        <span>15:25:13</span>
                      </div>
                        </td>
                        <td class="whitespace-nowrap" style="width: 400px">
                          <div class="flex items-center justify-center">
                        <span class="flex items-center justify-center w-5 h-5">
                          <Lucide icon="Calendar" class="w-4 h-4 " />
                        </span>
                        <span class="mr-3">08-03-2023</span>
                        <span class="flex items-center justify-center w-5 h-5">
                          <Lucide icon="Clock" class="w-4 h-4 " />
                        </span>
                        <span>15:25:13</span>
                      </div>
                        </td>
                        <td class="whitespace-nowrap" style="width: 300px">
                          <p class="status text-white  " style="width: 100px;">ชำระเงินแล้ว</p>
                        </td>
                        <td class="whitespace-nowrap" style="width: 150px">
                          <Button
                        as="a"
                        variant="secondary"
                        href=""
                        class="inline-block mr-2"
                      >
                        <Lucide icon="Edit" class="w-4 h-4" />
                      </Button>

                      <Button
                        as="a"
                        variant="secondary"
                        href=""
                        class="inline-block"
                      >
                        <Lucide icon="Trash2" class="w-4 h-4" />
                      </Button>
                        </td>
                      </tr> -->
                    </tbody>

                    <thead>
                      <tr class="op6">
                        <th class="whitespace-nowrap">#</th>

                        <th
                          class="whitespace-nowrap text-left"
                          style="width: 190px"
                        >
                          ชื่อแพ็คเกจ
                        </th>
                        <th class="whitespace-nowrap" style="width: 90px">
                          ราคา / เดือน
                        </th>
                        <th class="whitespace-nowrap" style="width: 90px">
                          ระยะเวลา
                        </th>
                        <th class="whitespace-nowrap" style="width: 90px">
                          <span style="display: block; width: 90px"
                            >ราคารวม</span
                          >
                        </th>
                        <th class="whitespace-nowrap" style="width: 400px">
                          วันที่เปลี่ยนแพ็คเกจ
                        </th>
                        <th class="whitespace-nowrap" style="width: 400px">
                          วันที่ชำระเงิน
                        </th>
                        <th class="whitespace-nowrap" style="width: 300px">
                          สถานะ
                        </th>
                        <th class="whitespace-nowrap" style="width: 150px">
                          จัดการ
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      
    </div>
  </div>


<!-- โค้ดเก่า -->

  <!-- <div class="inline-flex rounded-md shadow-sm" role="group">
  <button type="button" class="px-4 py-2 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    บัญชีของฉัน
  </button>
  <button type="button" class="px-4 py-2 text-lg font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    บัญชีกระเป้าเงินออนไลน์
  </button>
  <button type="button" class="px-4 py-2 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    แนะนำเพื่อน
  </button>
</div> -->
  <!-- 
<div class=" flex">

  <div class="flex-auto self-start box text-gray-700 bg-white-400 px-4 py-2 m-2 ">
                <span class="text-lg"><b> ยอดคงเหลือในบัญชี</b> </span><hr/>
                <div class="text-center pt-8">
                  <span class="text-xl">{{myWallet}}฿</span><br/>
                  <b>ยอดคงเหลือ</b>
                </div>
                <br/>
  <div class="text-center ">
    <RouterLink
          :to="{ name: 'side-menu-wallet' }">
        <Button  class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">เติมเงิน</Button>
    </RouterLink>
  </div>
  <br/>
  
  </div>
  <div class="box flex-auto  text-gray-700 bg-white-400 px-4 py-2 m-2">
       <span class="text-lg"><b> ประวัติการเติมเงินกระเป๋าเงินออนไลน์</b> </span><hr/>
       <br/>
<table class="min-w-full divide-y divide-gray-200 ">
  <thead class="bg-gray-50">
    <tr >
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        ยอดรวม
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        สถานะ
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        วันที่สร้าง
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        ดำเนินการ
      </th>
    </tr>
  </thead>
  <tbody class="bg-white divide-y divide-gray-200">
    <tr v-for="(item,index) in walletdata" :key="index">
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm font-medium text-gray-900">
          {{item.price}}฿
        </div>

      </td>
      <td class=" px-6 py-4 whitespace-nowrap">             
          <span v-if="item.status === 'รออนุมัติ'"
  class="inline-block text-sm whitespace-nowrap rounded-[0.27rem] bg-yellow-300 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
  {{item.status}}
</span>
          <span v-if="item.status === 'ยืนยันแล้ว'"
  class="inline-block text-sm whitespace-nowrap rounded-[0.27rem] bg-green-300 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
  {{item.status}}
</span>
      </td>

      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
       
                {{ new Date(item.createdAt).toLocaleString("th-TH", { dateStyle: "short" }) }}

      </td>
            <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">

       <Button   class="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-2 border border-green-700 rounded">แก้ไขข้อมูลการชำระเงิน</Button>

        </div>
      </td>
    </tr> -->
  <!-- สร้างแถวของตารางเพิ่มเติมได้ตามต้องการ  -->
  <!-- </tbody>
</table>

  </div>
  
</div> -->


  <!-- โค้ดเก่า  -->
</template>

<script lang="ts">
import axios from "axios";
import { useAuth } from "../stores/auth";

const successModal = ref(false);
const setSuccessModal = (value: boolean) => {
  successModal.value = value;
};
//add warehouse
const addWarehouse = ref(false);
const setAddWarehouse = (value: boolean) => {
  addWarehouse.value = value;
};
export default {
  data() {
    return {
      baseUrl: `${import.meta.env.VITE_API_URL}`,
      walletdata: [] as any[],
      deletedItems: [] as any[],
      categoryName: "",
      category: "all",
      loading: false,
    warehouseName : "",
    warehouseAddress : "",
    warehouseTelophone: "",
    warehouseDescription : "",
    myWallet: 0,
    activeTab: "PENDING",
      dateRangeLitepicker: "",
      paramsQuery: {
        keyword: "",
        startDate: "",
        endDate: "",
        page: 1,
        limit: 20,
      },
      memberDetail :  {
        member:[],
        orderHistory:[],
      }
    };
 
  },
  methods: {
    async getMemberDetail(){
      const authStore = await useAuth();
      const userId =   authStore.auth.id
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };

        const URL = `${
          import.meta.env.VITE_API_URL
        }/member/getMemberDetail/${userId}`.replace(" ", "");

        const response = await axios.get(
          URL,
          { headers }
        );

        if(response.data.code == 200) {
          let member = response.data.data;
          this.memberDetail.member.push({id:member.id,fullName:member.fullName});
          response.data.data.shop.map((val:any)=>{
            this.memberDetail.member[0].taxId = val.taxId ;
            this.memberDetail.member[0].addressDetail = val.addressDetail ;
            this.memberDetail.member[0].tel = val.tel ?  val.tel : val.phone ;
          })
        }
      } catch (err) {
        console.log(err);
        this.loading = false;
      }
    },
    async getAllWallet() {
      this.loading = true;
      const inventoryId: number = parseInt(
        localStorage.getItem("currentInventoryId") as string
      );
      const authStore = await useAuth();
      const userId =   authStore.auth.id
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const URL = `${
          import.meta.env.VITE_API_URL
        }/wallet/gettransferWallet`.replace(" ", "");

        const trasferwallet = await axios.post(
          URL,
          { userId: userId },
          { headers }
        );
        this.walletdata = trasferwallet.data.data;
      } catch (err) {
        console.log(err);
        this.loading = false;
        alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }
    },
    //datepicker ตัวอย่างจากหน้า Payment.vue
    setParams(filter: any) {
      if (this.paramsQuery.keyword) {
        const dates = this.dateRangeLitepicker.split(" - ");
        this.paramsQuery.startDate = this.parseDate(dates[0]);
        this.paramsQuery.endDate = this.parseDate(dates[1]);
      }

      Object.keys(filter).map((key) => {
        this.paramsQuery[key] = filter[key];
      });

      this.getAllPayment(this.paramsQuery);
    },
    parseDate(dateString: any) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    },
  },
  mounted() {
    this.getAllWallet()
    this.getMemberDetail();
  },
};
</script>
