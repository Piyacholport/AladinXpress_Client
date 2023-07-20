<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
import fakerData from "../utils/faker";
import Button from "../base-components/Button";
import Pagination from "../base-components/Pagination";
import {
  FormInput
} from "../base-components/Form";
import  { TinySliderElement } from "../base-components/TinySlider";
import Lucide from "../base-components/Lucide";
import Tippy from "../base-components/Tippy";
import ReportLineChart from "../components/ReportLineChart";
import { Dialog } from "../base-components/Headless";
import Alert from "../base-components/Alert";

//รายงานที่สำคัญ
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
//Modal
const superlargeModalSizePreview = ref(false);
const setSuperlargeModalSizePreview = (value: boolean) => {
  superlargeModalSizePreview.value = value;
};
const sendButtonRef = ref(null);
const deleteButtonRef = ref(null);
</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
 
    <div class="">
      <div class="col-span-12 2xl:col-span-9">
        <div class="grid grid-cols-12 gap-6">
          <!-- BEGIN: General Report -->
          <div class="col-span-12 ">
            <div class="intro-y flex items-center h-10">
              <h2 class="text-lg font-bold truncate mr-5 bold">ภาพรวม</h2>

              <div class="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                <select
                  class="sm:ml-auto mt-3 sm:mt-0 sm:w-auto form-select box bg-secondary shadow-md"
                >
                  <option value="daily">วันนี้</option>
                  <option value="weekly">สัปดาห์</option>
                  <option value="monthly">เดือน</option>
                  <option value="yearly">ปี</option>
                </select>
              </div>
            </div>
            <Alert variant="soft-warning" class="flex items-center mb-2 mt-5 text-[#666]" v-slot="{ dismiss }">
    <Lucide icon="AlertCircle" class="w-6 h-6 mr-2" />
   <a href="dashboard/side-menu-warehouse" class="font-bold text-[#666] underline">ยังไม่มีคลังสินค้า?</a> 
    <!-- สร้างคลัง  สร้างลูกค้า สร้างหมวดหมู่สินค้า สร้างสินค้า สร้างออเดอร์ -->
    <Alert.DismissButton type="button" class="btn-close" aria-label="Close" @click="dismiss">
        <Lucide icon="X" class="w-4 h-4" />
    </Alert.DismissButton>
</Alert>


            <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div
                :class="[
                  'relative zoom-in',
                  'before:content-[\'\'] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70',
                ]"
              >
                <div class="p-5 box">
                  <div class="flex">
                    <Lucide
                      icon="ShoppingCart"
                      class="w-[28px] h-[28px] text-primary"
                      id="icon_red"
                    />
                    <div class="ml-auto">
                      <div
                        
                        class="cursor-pointer bg-success py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                        :class="[
                            checkUpDown(Number(DashboardData.unitPercent)),
                          ]"
                       
                        content="มากกว่าเดือนที่แล้ว 0% "
                      >
                      {{ (DashboardData.unitPercent == "NaN") ? "":DashboardData.unitPercent }}%
                        <Lucide icon="ChevronUp" class="w-4 h-4 ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-6 text-3xl font-medium leading-8" id="h2_bold">
                    {{ DashboardData.unitPrices }}
                  </div>
                  <div class="mt-1 text-base text-slate-500">สรุปยอดขาย</div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div
                :class="[
                  'relative zoom-in',
                  'before:content-[\'\'] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70',
                ]"
              >
                <div class="p-5 box">
                  <div class="flex">
                    <Lucide
                      icon="CreditCard"
                      class="w-[28px] h-[28px] text-pending"
                      id="icon_red"
                    />
                    <div class="ml-auto">
                      <div
                      :class="[
                            checkUpDown(Number(DashboardData.orderPercent)),
                          ]"
                        class="cursor-pointer bg-danger py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                       title="2% Lower than last month"
                      >
                      {{ DashboardData.orderPercent }}% 
                        <Lucide icon="ChevronDown" class="w-4 h-4 ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-6 text-3xl font-medium leading-8" id="h2_bold">
                    {{ DashboardData.orderCount }}
                  </div>
                  <div class="mt-1 text-base text-slate-500">
                    สรุปคำสั่งซื้อ
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div
                :class="[
                  'relative zoom-in',
                  'before:content-[\'\'] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70',
                ]"
              >
                <div class="p-5 box">
                  <div class="flex">
                    <Lucide
                      icon="Box"
                      class="w-[28px] h-[28px] text-warning"
                      id="icon_red"
                    />
                    <div class="ml-auto">
                      <div
                      :class="[
                            checkUpDown(Number(DashboardData.productPercent)),
                          ]"
                        class="cursor-pointer bg-success py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                        id="numberpercent_red"
                        tite="12% Higher than last month"
                      >
                      {{ DashboardData.productPercent }}%
                        <Lucide icon="ChevronUp" class="w-4 h-4 ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-6 text-3xl font-medium leading-8" id="h2_bold">
                    {{ DashboardData.orderAmount }}
                  </div>
                  <div class="mt-1 text-base text-slate-500">สินค้าทั้งหมด</div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div
                :class="[
                  'relative zoom-in',
                  'before:content-[\'\'] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70',
                ]"
              >
                <div class="p-5 box">
                  <div class="flex">
                    <Lucide
                      icon="Users"
                      class="w-[28px] h-[28px] text-success"
                      id="icon_red"
                    />
                    <div class="ml-auto">
                      <Tippy
                        as="div"
                        :class="[
                            checkUpDown(Number(DashboardData.customerPercent)),
                          ]"
                        class="cursor-pointer bg-success py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                        id="numberpercent_red"
                        content="22% Higher than last month"
                      >
                      {{ DashboardData.customerPercent }}%
                        <Lucide icon="ChevronUp" class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="mt-6 text-3xl font-medium leading-8" id="h2_bold">
                    {{ DashboardData.customersNow }}
                  </div>
                  <div class="mt-1 text-base text-slate-500">ลูกค้าทั้งหมด</div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <!-- END: General Report -->

          <!-- BEGIN: General Report -->
          <div class="col-span-12 lg:col-span-8 xl:col-span-6 mt-4">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-bold truncate mr-5" >
              รายงานที่สำคัญ
            </h2>
          </div>
          <div class="report-box-2 intro-y mt-12 sm:mt-5 gdbd nobd">
            <div class="box sm:flex">
              <div class="px-8 py-12 flex flex-col justify-center flex-1">
                <Lucide
                  icon="ShoppingBag"
                  class="w-10 h-10 ml-0.5 text-[#af0000]"
                />
                <div class="relative text-3xl font-medium mt-12 pl-4 ml-0.5">
                 
                  <span
                    class="absolute text-2xl font-bold top-0 left-0 -ml-0.5 "
                    > ฿</span
                  >
                  <span class="font-bold ">  {{ DashboardData.sumUnitPricesMonth }}</span>
                </div>
                <div class="mr-auto">
                  <div
                  
                    class="mt-7 cursor-pointer bg-danger py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                    :class="[
                      checkUpDown(Number(DashboardData.unitPercentMonth)),
                    ]"
                      >
                      {{ (DashboardData.unitPercentMonth == "NaN") ? "" :DashboardData.unitPercentMonth }}%
                    <Lucide icon="ChevronDown" class="w-4 h-4 ml-0.5" />
                  </div>
                </div>

                <!-- <div
                    class="report-box-2__indicator tooltip cursor-pointer"
                    :class="[checkUpDown(Number(DashboardData.unitPercentMonth))]"
                    title="47% Higher than last month"
                  >
                    {{ DashboardData.unitPercentMonth }}%
                    <Lucide icon="ChevronUp" class="w-4 h-4 ml-0.5" />
                  </div> -->
                <div class="mt-4 text-slate-500">
                  รายงานยอดขายโดยรวม คำนวณจาก ทดสอบตัวหนังสือ
                  <br> <br> <br> <br>
                </div>
               
                <Button as="a" href="dashboard/side-menu-summaryreport" variant="secondary" rounded class="w-200 mb-2 mr-1 goldgd text-white ">
                  รายงานทั้งหมด <span > <Lucide icon="ArrowRight" class="w-4 h-4 ml-14 " /></span>
                </Button>
              </div>
              <div
                class="px-8 py-12 flex flex-col justify-center flex-1 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-darkmode-300 border-dashed"
              >
                <div class="text-slate-500 text-xs">สรุปยอดขาย</div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base ">
                    <b>{{ (DashboardData.unitPercentMonth == "NaN") ? "" :DashboardData.unitPercentMonth }}</b>
                    
                  </div>

                  <div
                    class="flex text-xs font-medium tooltip cursor-pointer ml-2 mt-2"
                    :class="[
                      checkUpDownText(Number(DashboardData.unitPercentMonth)),
                    ]"
                  
                  >
                  <b> {{ (DashboardData.unitPercentMonth == "NaN") ? "" :DashboardData.unitPercentMonth }}%</b>
                   
                    <Lucide icon="ChevronUp" class="w-4 h-4 ml-0.5" />
                  </div>
                </div>
                <div class="text-slate-500 text-xs mt-5">
                  สรุปรายการสั่งซื้อ
                </div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base ">
                    <b>{{ DashboardData.orderCountMonth }}</b>
                   
                  </div>

                  <div
                    class="flex text-xs font-medium tooltip cursor-pointer ml-2 mt-2"
                    :class="[
                      checkUpDownText(Number(DashboardData.orderPercentMonth)),
                    ]"
                    title="2% Lower than last month"
                  >
                  <b> {{ DashboardData.orderPercentMonth }}%</b>
                   
                    <Lucide icon="ChevronUp" class="w-4 h-4 ml-0.5" />
                  </div>
                </div>
                <div class="text-slate-500 text-xs mt-5">คำสั่งซื้อตีกลับ</div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">-</div>
                  <div
                    class="text-success flex text-xs font-medium tooltip cursor-pointer ml-2"
                    title="49% Higher than last month"
                  >
                    - <i data-lucide="chevron-up" class="w-4 h-4 ml-0.5"></i>
                  </div>
                </div>
                <div class="text-slate-500 text-xs mt-5">จำนวนสินค้า</div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base ">
                    <b>{{ DashboardData.productAmountNowMonth }}</b>
                   
                  </div>

                  <div
                    class="flex text-xs font-medium tooltip cursor-pointer ml-2 mt-2"
                    :class="[
                      checkUpDownText(Number(DashboardData.productPercentMonth)),
                    ]"
                    title="2% Lower than last month"
                  >
                  <b> {{ DashboardData.productPercentMonth }}%</b>
                   
                    <Lucide icon="ChevronUp" class="w-4 h-4 ml-0.5" />
                  </div>
                </div>
                <div class="text-slate-500 text-xs mt-5">จำนวนลูกค้า</div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base ">
                    <b>{{ DashboardData.customersNowMonth }}</b>
                   
                  </div>

                  <div
                    class="flex text-xs font-medium tooltip cursor-pointer ml-2 mt-2"
                    :class="[
                      checkUpDownText(Number(DashboardData.customersNowMonth)),
                    ]"
                    title="2% Lower than last month"
                  >
                  <b> {{ DashboardData.customerPercentMonth }}%</b>
                   
                    <Lucide icon="ChevronUp" class="w-4 h-4 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <!-- <div class="col-span-12 lg:col-span-8 xl:col-span-6 mt-4">
            <div class="intro-y block sm:flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">รายงานที่สำคัญ</h2>
            </div>
            <div class="report-box-2 intro-y mt-12 sm:mt-5 gdbd nobd">
              <div class="box sm:flex">
                <div class="px-8 py-12 flex flex-col justify-center flex-1">
                  <i
                    data-lucide="shopping-bag"
                    class="w-10 h-10 text-danger"
                  ></i>
                  <div class="relative text-3xl font-medium mt-12 pl-4 ml-0.5">
                    <span
                      class="absolute text-2xl font-medium top-0 left-0 -ml-0.5"
                      >฿</span
                    >
                    {{ DashboardData.sumUnitPricesMonth }}
                  </div>
                  <div
                    class="report-box-2__indicator tooltip cursor-pointer"
                    :class="[
                      checkUpDown(Number(DashboardData.unitPercentMonth)),
                    ]"
                    title="47% Higher than last month"
                  >
                    {{ DashboardData.unitPercentMonth }}%
                    <i data-lucide="chevron-up" class="w-4 h-4 ml-0.5"></i>
                  </div>
                  <div class="mt-4 text-slate-500">
                    รายงานยอดขายโดยรวม คำนวณจาก ทดสอบตัวหนังสือ
                  </div>
                  <button
                    class=" goldgd  rounded-full mt-12 pl-4"
                  >
                    ดาวน์โหลดรีพอร์ท
             
                  </button>
                </div>
                <div
                  class="px-8 py-12 flex flex-col justify-center flex-1 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-darkmode-300 border-dashed"
                >
                  <div class="text-slate-500 text-xs">สรุปยอดขาย</div>
                  <div class="mt-1.5 flex items-center">
                    <div class="text-base">
                      {{ DashboardData.unitPercentMonth }}
                    </div>
                    <div
                      class="flex text-xs font-medium tooltip cursor-pointer ml-2"
                      :class="[
                        checkUpDownText(Number(DashboardData.unitPercentMonth)),
                      ]"
                      title="2% Lower than last month"
                    >
                      {{ DashboardData.unitPercentMonth }}%
                      <i data-lucide="chevron-down" class="w-4 h-4 ml-0.5"></i>
                    </div>
                  </div>
                  <div class="text-slate-500 text-xs mt-5">
                    สรุปรายการสั่งซื้อ
                  </div>
                  <div class="mt-1.5 flex items-center">
                    <div class="text-base">
                      {{ DashboardData.orderCountMonth }}
                    </div>
                    <div
                      class="flex text-xs font-medium tooltip cursor-pointer ml-2"
                      :class="[
                        checkUpDownText(
                          Number(DashboardData.orderPercentMonth)
                        ),
                      ]"
                      title="0.1% Lower than last month"
                    >
                      {{ DashboardData.orderPercentMonth }}%
                      <i data-lucide="chevron-down" class="w-4 h-4 ml-0.5"></i>
                    </div>
                  </div>
                  <div class="text-slate-500 text-xs mt-5">
                    คำสั่งซื้อตีกลับ
                  </div>
                  <div class="mt-1.5 flex items-center">
                    <div class="text-base">-</div>
                    <div
                      class="text-success flex text-xs font-medium tooltip cursor-pointer ml-2"
                      title="49% Higher than last month"
                    >
                      - <i data-lucide="chevron-up" class="w-4 h-4 ml-0.5"></i>
                    </div>
                  </div>
                  <div class="text-slate-500 text-xs mt-5">จำนวนสินค้า</div>
                  <div class="mt-1.5 flex items-center">
                    <div class="text-base">
                      {{ DashboardData.productAmountNowMonth }}
                    </div>
                    <div
                      class="flex text-xs font-medium tooltip cursor-pointer ml-2"
                      :class="[
                        checkUpDownText(
                          Number(DashboardData.productPercentMonth)
                        ),
                      ]"
                      title="52% Higher than last month"
                    >
                      {{ DashboardData.productPercentMonth }}%
                      <i data-lucide="chevron-up" class="w-4 h-4 ml-0.5"></i>
                    </div>
                  </div>
                  <div class="text-slate-500 text-xs mt-5">จำนวนลูกค้า</div>
                  <div class="mt-1.5 flex items-center">
                    <div class="text-base">
                      {{ DashboardData.customersNowMonth }}
                    </div>
                    <div
                      class="flex text-xs font-medium tooltip cursor-pointer ml-2"
                      :class="[
                        checkUpDownText(
                          Number(DashboardData.customerPercentMonth)
                        ),
                      ]"
                      title="52% Higher than last month"
                    >
                      {{ DashboardData.customerPercentMonth }}%
                      <i data-lucide="chevron-up" class="w-4 h-4 ml-0.5"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!-- END: General Report -->

          <!-- BEGIN: Sales Report -->
          <div class="col-span-12 lg:col-span-6 mt-4">
            <div class="intro-y block sm:flex items-center h-10">
              <h2 class="text-lg font-bold truncate mr-5">สถิติยอดขาย</h2>
            </div>
            <div class="p-5 mt-12 sm:mt-5">
              <div class="flex flex-col md:flex-row md:items-center">
                <div class="flex">
                  <div>
                    <div
                      class="text-danger dark:text-slate-300 text-lg xl:text-xl font-medium"
                    >
                      {{ DashboardData.sumUnitPricesMonth }}.-
                    </div>
                    <div class="mt-0.5 text-slate-500">เดือนนี้</div>
                  </div>
                  <div
                    class="w-px h-12 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"
                  ></div>
                  <div>
                    <div class="text-slate-500 text-lg xl:text-xl font-medium">
                      {{ DashboardData.sumUnitPricesMonthPrevious }}.-
                    </div>
                    <div class="mt-0.5 text-slate-500">เดือนที่แล้ว</div>
                  </div>
                </div>
              </div>
              <div class="report-chart">
                <div class="h-[275px]">
                  <ReportLineChart :data="DashboardData.graphData" />
                </div>
              </div>
            </div>
          </div>
          <!-- END: Sales Report -->
        </div>
      </div>
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
      style="height: 600px; overflow-y: scroll"
    >
      <br /><br />
      <span class="headtext pl-5">ตั้งค่าเริ่มต้น</span>
      <br /><br />
      <div class="flex items-center pl-5">
        <span class="flex items-center justify-center w-5 h-5">
          <Lucide icon="AlertCircle" class="w-4 h-4" />
        </span>
        <b>เพื่อให้การสมัครสมาชิกเสร็จสมบูรณ์ กรุณากรอกข้อมูลให้ครบถ้วน</b>
      </div>
      <div class="mx-5">
        <div>
          <!--  BEGIN: Wizard Layout 1 -->
          <div class="Dialog">
            <div class="py-5 intro-y box sm:py-5">
              <div class="px-5 sm:px-20dark:border-darkmode-400">
                <div class="text-base font-medium">ข้อมูลร้านค้า</div>
                <div class="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                  <div class="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-1">ชื่อร้าน</FormLabel>
                    <FormInput
                      v-model="shopName"
                      id="input-wizard-1"
                      type="text"
                      placeholder="ชื่อร้าน"
                    />
                  </div>
                  <div class="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-2">ที่อยู่</FormLabel>
                    <FormInput
                      v-model="addressDetail"
                      id="input-wizard-2"
                      type="text"
                      placeholder="ที่อยู่"
                    />
                  </div>
                  <div class="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-3">ตำบล</FormLabel>
                    <FormInput
                      v-model="districtName"
                      id="input-wizard-3"
                      type="text"
                      placeholder="ตำบล"
                    />
                  </div>
                  <div class="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-4">แขวง/ตำบล</FormLabel>
                    <FormInput
                      v-model="cityName"
                      id="input-wizard-4"
                      type="text"
                      placeholder="แขวง/ตำบล"
                    />
                  </div>
                  <div class="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-5">จังหวัด</FormLabel>
                    <FormInput
                      v-model="provinceName"
                      id="input-wizard-5"
                      type="text"
                      placeholder="จังหวัด"
                    />
                  </div>
                  <div class="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-5">รหัสไปรษณีย์</FormLabel>
                    <FormInput
                      v-model="postalCode"
                      id="input-wizard-5"
                      type="text"
                      placeholder="รหัสไปรษณีย์"
                    />
                  </div>
                  <div
                    class="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end"
                  >
                    <Button
                      variant="secondary"
                      class="w-24 ml-2"
                      @click.prevent="addShop"
                    >
                      บันทึก
                    </Button>
                    <Button
                      variant="secondary"
                      class="w-24 ml-2"
                      @click="
                        () => {
                          setAddShopModal(false);
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
          <img src="../assets/images/success.gif" alt="" />
        </div>
        <div class="mb-5 text-3xl">เพิ่มร้าน {{ shopName }} สำเร็จ!</div>
        <Button
          variant="outline-secondary"
          type="button"
          @click.prevent="addSuccess"
        >
          ตกลง
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>
  <!-- modal success -->

  <!-- modal Pre welcome -->
  <!-- BEGIN: Super Large Modal Content -->
  <Dialog
    size="xxl"
    :open="superlargeModalSizePreview"
    @close="
      () => {
        setSuperlargeModalSizePreview(false);
      }
    "
  >
    <Dialog.Panel class="p-10 text-center">
      <div class="flex items-center justify-center">
        <img
          src="..//assets/images/mascotwelcome.jpg"
          alt=""
          class="w-[250px]"
        />
      </div>
      <div
        class="flex items-center justify-center"
        style="font-weight: bold; font-size: 30px"
      >
        ขอบพระคุณสำหรับการลงทะเบียน
      </div>
      <div class="flex items-center justify-center text-[#666] mt-5">
        พบกันกับวันเปิดตัวระบบ พร้อมใช้ วันที่ 25 เมษายน 2566
        <br /><br /><br />
      </div>
      <div class="flex items-center justify-center text-[#666] mt-5">
        <!-- <Timer date="April 25, 2023"></Timer> -->
        <Timer />
      </div>
      <br /><br />
      <br />
      <div class="flex items-center justify-center">
        <Button
          class="w-30 mr-1 bg-[#af0000] border-none text-white"
          @click="
            () => {
              setSuperlargeModalSizePreview(false);
            }
          "
        >
          กลับหน้าหลัก
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>
  <!-- END: Super Large Modal Content -->
  <!-- modal Pre welcome -->
</template>

<script lang="ts">
import axios from "axios";
import { DashboardDataType } from "../models/grapgData.model";
import { useInventory } from "../stores/inventory";
import { useUser } from "../stores/user";
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
      DashboardData: {} as DashboardDataType,
      shopName: "",
      addressDetail: "",
      districtName: "",
      cityName: "",
      provinceName: "",
      postalCode: "",
      inventoryDetail: [] as any,
      inventoryId: Inventory.inventory[0],
      userId: 0 as any,
      ivStatus: "",
    };
  },
  methods: {
    async getUser() {
      const userStore = useUser();
      const userId = userStore.getUser ? userStore.getUser.id : "";
      this.userId = userId;
    },
    //     async loadInventory(){
    //       const inventory = useInventory()
    //   await inventory.setInventory()
    //   this.inventoryDetail = [];

    // const inventoryData  = inventory.getInventory;
    // this.ivStatus = inventoryData.isNewUser
    // console.log(this.ivStatus)
    // if(this.ivStatus === true){
    //     inventoryData.inventory.map((item: any) => {
    //     this.inventoryDetail.push(item);
    //   });
    //   this.inventoryId = this.inventoryDetail[0].id
    //   console.log(this.inventoryDetail[0].id,',,,,,,')
    // }

    // },
    async getAllGraphsData() {
      const URL = `${
        import.meta.env.VITE_API_URL
      }/dashboard/getDashboardDetail`.replace(" ", "");
      await axios.get(URL).then((res) => {
        this.DashboardData = res.data;
      });
    },
    checkUpDown(Percent: number) {
      if (Percent <= 0) {
        return "bg-danger";
      } else {
        return "bg-success";
      }
    },
    checkUpDownText(Percent: number) {
      if (Percent <= 0) {
        return "text-danger";
      } else {
        return "text-success";
      }
    },
    async addShop() {
      const URL = `${import.meta.env.VITE_API_URL}/shop/addShop`;
      try {
        const response = await axios.post(URL, {
          userId: this.userId,
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
  mounted() {
    this.getUser();
    const isNewUser = this.ivStatus;
    if (isNewUser === "true") {
      setAddShopModal(true);
    }
    this.getAllGraphsData();
  },
  beforeMount() {
    // const inventory = useInventory()
    // inventory.setInventory()
    //this.loadInventory()
  },
};
</script>
