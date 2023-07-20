<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
import Button from "../../base-components/Button";
import TinySlider, { TinySliderElement } from "../../base-components/TinySlider";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import Litepicker from "../../base-components/Litepicker";
import ReportDonutChart from "../../components/ReportDonutChart";
import ReportLineChart from "../../components/ReportLineChart";
import ReportPieChart from "../../components/ReportPieChart";
import ReportDonutChart1 from "../../components/ReportDonutChart1";
import SimpleLineChart1 from "../../components/SimpleLineChart1";

import { Menu } from "../../base-components/Headless";
import Table from "../../base-components/Table";

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
</script>

<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 2xl:col-span-12">
      <div class="grid grid-cols-12 gap-6">
        <!-- BEGIN: General Report -->
        <div class="col-span-12 ">
          <div class="flex items-center h-10 intro-y">
            <h2 class="mr-5 text-lg font-medium truncate" id="h2_bold">
              ภาพรวม
            </h2>
            <!-- <a href="" class="flex items-center ml-auto text-primary">
              <Lucide icon="RefreshCcw" class="w-4 h-4 mr-3" /> Reload Data
            </a> -->
          </div>
          <div class="grid grid-cols-9 gap-6 mt-5">
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
                      icon="Home"
                      class="w-[28px] h-[28px] text-primary"
                     
                    />
                    <div class="ml-auto">
                      <Tippy
                        as="div"
                        class="cursor-pointer bg-success py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                        id="numberpercent_green"
                        content="มากกว่าเดือนที่แล้ว 0% "
                      >
                      0%
                        <Lucide icon="ChevronUp" class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="mt-6 text-3xl font-medium leading-8" id="h2_bold">
                    123
                  </div>
                  <div class="mt-1 text-base text-slate-500">จำนวนร้าน</div>
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
                      class="w-[28px] h-[28px] text-pending"
                     
                    />
                    <div class="ml-auto">
                      <Tippy
                        as="div"
                        class="cursor-pointer bg-danger py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                        content="มากกว่าเดือนที่แล้ว 0% "
                      >
                      0%
                        <Lucide icon="ChevronDown" class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="mt-6 text-3xl font-medium leading-8" id="h2_bold">
                    5,000
                  </div>
                  <div class="mt-1 text-base text-slate-500">
                    จำนวนผู้ใช้งาน
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
                      icon="Truck"
                      class="w-[28px] h-[28px] text-warning"
                     
                    />
                    <div class="ml-auto">
                      <Tippy
                        as="div"
                        class="cursor-pointer bg-success py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                        id="numberpercent_red"
                        content="มากกว่าเดือนที่แล้ว 0% "
                      >
                      0%
                        <Lucide icon="ChevronDown" class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="mt-6 text-3xl font-medium leading-8" id="h2_bold">
                    2,149
                  </div>
                  <div class="mt-1 text-base text-slate-500">จำนวนการส่งสินค้าทั้งหมด</div>
                </div>
              </div>
            </div>
       
          </div>
        </div>
        <!-- END: General Report -->
        <!-- BEGIN: Sales Report -->
        <!-- BEGIN: General Report -->
        <div class="col-span-12 lg:col-span-8 xl:col-span-6 mt-4">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5" id="h2_bold">
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
                    class="absolute text-2xl font-medium top-0 left-0 -ml-0.5"
                    >฿</span
                  >
                  <b> 15,000</b>
                </div>
                <div class="mr-auto">
                  <Tippy
                    as="div"
                    class="cursor-pointer bg-danger py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                      content="มากกว่าเดือนที่แล้ว 0% "
                      >
                      0%
                    <Lucide icon="ChevronDown" class="w-4 h-4 ml-0.5" />
                  </Tippy>
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
                <Button variant="secondary" rounded class="w-200 mb-2 mr-1 goldgd text-white ">
                  ดาวน์โหลดรีพอร์ท <span > <Lucide icon="ArrowRight" class="w-4 h-4 ml-14 " /></span>
                </Button>
              </div>
              <div
                class="px-8 py-12 flex flex-col justify-center flex-1 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-darkmode-300 border-dashed"
              >
                <div class="text-slate-500 text-xs">สรุปยอดขาย</div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base ">
                    <b>{{ DashboardData.unitPercentMonth }}</b>
                   
                  </div>

                  <div
                    class="flex text-xs font-medium tooltip cursor-pointer ml-2 mt-2"
                    :class="[
                      checkUpDownText(Number(DashboardData.unitPercentMonth)),
                    ]"
                    title="2% Lower than last month"
                  >
                  <b> {{ DashboardData.unitPercentMonth }}%</b>
                   
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
        <!-- END: General Report -->
        <!-- END: Sales Report -->

        <!-- BEGIN: Sales Report -->
        <div class="col-span-12 mt-8 lg:col-span-6">
          <div class="items-center block h-10 intro-y sm:flex">
            <h2 class="mr-5 text-lg font-medium truncate" id="h2_bold">
              สถิติยอดขาย
            </h2>
            <!-- <div class="relative mt-3 sm:ml-auto sm:mt-0 text-slate-500">
              <Lucide
                icon="Calendar"
                class="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3"
              />
              <Litepicker
                v-model="salesReportFilter"
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
                class="pl-10 sm:w-56 !box"
              />
            </div> -->
          </div>
          <div class="p-5 mt-12 intro-y box sm:mt-5">
            <div class="flex flex-col md:flex-row md:items-center">
              <div class="flex">
                <div>
                  <div
                    class="text-lg font-medium text-[#af0000] dark:text-slate-300 xl:text-xl"
                  >
                    <b>15,000</b>
                  </div>
                  <div class="mt-0.5 text-slate-500">เดือนนี้</div>
                </div>
                <div
                  class="w-px h-12 mx-4 border border-r border-dashed border-slate-200 dark:border-darkmode-300 xl:mx-5"
                ></div>
                <div>
                  <div class="text-lg font-medium text-slate-500 xl:text-xl">
                    <b>10,000</b>
                  </div>
                  <div class="mt-0.5 text-slate-500">เดือนที่แล้ว</div>
                </div>
              </div>
            </div>
            <div
              :class="[
                'relative',
                'before:content-[\'\'] before:block before:absolute before:w-16 before:left-0 before:top-0 before:bottom-0 before:ml-10 before:mb-7 before:bg-gradient-to-r before:from-white before:via-white/80 before:to-transparent before:dark:from-darkmode-600',
                'after:content-[\'\'] after:block after:absolute after:w-16 after:right-0 after:top-0 after:bottom-0 after:mb-7 after:bg-gradient-to-l after:from-white after:via-white/80 after:to-transparent after:dark:from-darkmode-600',
              ]"
            >
              <ReportLineChart :height="275" class="mt-6 -mb-6" />
            </div>
          </div>
        </div>
        <!-- END: Sales Report -->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { DashboardDataType } from "../../models/grapgData.model";
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
      DashboardData: {} as DashboardDataType,
      shopName: "",
      addressDetail: "",
      districtName: "",
      cityName: "",
      provinceName: "",
      postalCode: "",
    };
  },
  methods: {
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
  mounted() {
    const isNewUser = localStorage.getItem("isNewUser");
    if (isNewUser === "true") {
      setAddShopModal(true);
    }
    this.getAllGraphsData();
  },
};
</script>

<style>
#numberpercent_green {
  background-color: rgb(var(--color-success) / var(--tw-bg-opacity));
}
#numberpercent_red {
  background: rgb(var(--color-danger) / var(--tw-bg-opacity));
}
#icon_red {
  color: rgb(var(--color-danger) / var(--tw-bg-opacity));
}
#h2_bold {
  font-weight: 700;
}
.goldgd,
    #goldgd {
      color: #fff;
      border: none;
      background: radial-gradient(
          ellipse farthest-corner at right bottom,
          #fedb37 0%,
          #fdb931 8%,
          #9f7928 30%,
          #8a6e2f 40%,
          transparent 80%
        ),
        radial-gradient(
          ellipse farthest-corner at left top,
          #ffffff 0%,
          #ffffac 8%,
          #d1b464 25%,
          #5d4a1f 62.5%,
          #5d4a1f 100%
        );
    }
</style>
