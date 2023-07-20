<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
// import fakerData from "../utils/faker";
import Button from "../base-components/Button";
import Pagination from "../base-components/Pagination";
import { FormInput, FormSelect } from "../base-components/Form";
import Litepicker from "../base-components/Litepicker";
// import { FormSwitch } from "../base-components/Form";
import Lucide from "../base-components/Lucide";
import Tippy from "../base-components/Tippy";
import { Dialog, Menu } from "../base-components/Headless";
import TinySlider, { TinySliderElement } from "../base-components/TinySlider";
import TomSelect from "../base-components/TomSelect";
const deleteConfirmationModal = ref(false);
const setDeleteConfirmationModal = (value: boolean) => {
  deleteConfirmationModal.value = value;
};
const deleteButtonRef = ref(null);
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
</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class=" text-lg font-bold intro-y" id="">
      การชำระเงิน
    </h2>
    <br /><br />
    <div class="pc-tab">
      <input checked class="checked" id="tab1" type="radio" name="pct" />
      <input id="tab2" type="radio" name="pct" />
      <input id="tab3" type="radio" name="pct" />
      <nav>
        <ul class="ul">
          <li
            v-for="tab in paymentsTabs"
            :key="tab.value"
            @click="setActive(tab.value)"
            :class="tab.refValue"
            id="li_tab"
          >
            <label :for="tab.refValue" class="label"
              >{{ tab.name }} &nbsp;
              <span
                :class="[
                  'text-xs px-1.5 rounded-full text-white mr-1',
                  tab.badgeStyle,
                ]"
                >{{ tab.itemCount }}</span
              >
            </label>
          </li>
        </ul>
      </nav>

      <section>
        <div
          id="li_tab"
          :class="['', activeTab == 'SUCCESS' ? 'tab2' : 'tab1']"
        >
          <div class="formsearch">
            <form action="">
              <div
                class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap"
              >
                <div class="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
                  <!-- BEGIN:Filter search dropdown -->
                  <div class="relative text-slate-500" id="input_search">
                    <FormInput
                      type="text"
                      class="w-56 !box"
                      placeholder="ค้นหา"
                      id="categories"
                      v-model="paramsQuery.keyword"
                      @keydown.enter.prevent="search"
                    />
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
                <select
                  name="dateorder"
                  id="categories"
                  class="filter_search"
                  v-model="filter.typeDate"
                >
                  <option value="" selected disabled>วันที่ชำระเงิน</option>
                  <option value="PACK">วันที่แพ็คสินค้า</option>
                  <option value="CREATE">วันที่สร้างคำสั่งซื้อ</option>
                </select>
                <!--END: Filter search dropdown -->
              </div>
              <br />
            </form>

            <!-- BEGIN: Basic Select -->
            <div class="" style="font-size: 14px; margin-left: -8px">
              <select
                name="payments"
                id="categories"
                class="filter_search"
                v-model="filter.typePayment"
              >
                <option value="" selected disabled>ช่องทางการชำระเงิน</option>
                <option value="BANK">ชำระเงินผ่านธนาคาร</option>
                <option value="COD">เก็บเงินปลายทาง</option>
              </select>

              <select
                name="banks"
                id="categories"
                class="filter_search"
                v-model="filter.bankList"
              >
                <option value="" selected disabled>ธนาคารทั้งหมด</option>
                <option value="main">KBANK</option>
                <option value="sub">BBL</option>
              </select>

              <select
                name="invioces"
                id="categories"
                class="filter_search"
                v-model="filter.statusSlip"
              >
                <option value="" selected disabled>ทุกรายการที่มีสลิป</option>
                <option value="main">มีสลิป</option>
                <option value="sub">ไม่มีสลิป</option>
              </select>
            </div>
            <!-- END: Basic Select -->
            <div class="formmanage">
              <br />

              <div class="">
                <Button class="mr-2 shadow-md btn_searchcancel" @click="search">
                  <Lucide icon="Search" class="block mx-auto w-4 h-4" />
                  &nbsp; ค้นหา
                </Button>

                <Button class="mr-2 shadow-md" id="">
                  <Lucide icon="RotateCw" class="block mx-auto w-4 h-4" />
                  &nbsp; ล้างการค้นหา
                </Button>
              </div>
              <br />
              <hr />
            </div>
            <div class="formmanage">
              <br />

              <div class="">
                <div class="flex items-center">
                  <span class="flex items-center justify-center w-5 h-5 mt-1">
                    <Lucide icon="CheckCircle" class="w-4 h-4" />
                  </span>
                  <b>จัดการหลายรายการ </b>
                </div>
                <Button class="mr-2 shadow-md btn_searchcancel" id="">
                  <Lucide icon="CheckCircle" class="block mx-auto w-4 h-4" />
                  &nbsp; ยืนยันการชำระเงิน
                  <span
                    class="px-1 ml-3 text-xs text-white rounded-full bg-black"
                  >
                    {{ selectedCount }}
                  </span>
                </Button>
              </div>
              <br />
              <hr />
            </div>
            <div class="formmanage">
              <br />

              <div class="">
                <div class="flex items-center">
                  <span class="flex items-center justify-center w-5 h-5 mt-1">
                    <Lucide icon="ExternalLink" class="w-4 h-4" />
                  </span>
                  <b>ส่งออกข้อมูล </b>
                </div>
                <Button class="mr-2 shadow-md" id="">
                  <Lucide icon="FileText" class="block mx-auto w-4 h-4" />
                  &nbsp; ส่งออกข้อมูลการชำระเงิน
                  <div
                    class="px-1 ml-3 text-xs text-white rounded-full bg-black"
                  >
                    {{ selectedCount }}
                  </div>
                </Button>
                <Button class="mr-2 shadow-md" id="">
                  <Lucide icon="FileText" class="block mx-auto w-4 h-4" />
                  &nbsp; ส่งออกข้อมูลการชำระเงิน
                </Button>
              </div>
              <br />
              <hr />
            </div>
            <div class="formmanage">
              <br />

              <div class="">
                <div class="flex items-center">
                  <span class="flex items-center justify-center w-5 h-5 mt-1">
                    <Lucide icon="Printer" class="w-4 h-4" />
                  </span>
                  <b>พิมพ์เอกสารมาตรฐาน </b>
                </div>
                <Button class="mr-2 shadow-md" id="">
                  <Lucide icon="FileText" class="block mx-auto w-4 h-4" />
                  &nbsp; ใบเสร็จ
                  <div
                    class="px-1 ml-3 text-xs text-white rounded-full bg-black"
                  >
                    {{ selectedCount }}
                  </div>
                </Button>
                <Button class="mr-2 shadow-md" id="">
                  <Lucide icon="FileText" class="block mx-auto w-4 h-4" />
                  &nbsp; ใบกำกับภาษี
                  <div
                    class="px-1 ml-3 text-xs text-white rounded-full bg-black"
                  >
                    {{ selectedCount }}
                  </div>
                </Button>
                <Button class="mr-2 shadow-md" id="">
                  <Lucide icon="FileText" class="block mx-auto w-4 h-4" />
                  &nbsp; ใบกำกับภาษีอย่างย่อ
                  <div
                    class="px-1 ml-3 text-xs text-white rounded-full bg-black"
                  >
                    {{ selectedCount }}
                  </div>
                </Button>
              </div>
              <br />
              <hr />
            </div>
          </div>
          <br />
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <div class="table-list">
              <div class="overflow-x-auto">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">
                        <input
                          type="checkbox"
                          id=""
                          name=""
                          value=""
                          v-model="selectAll"
                        />
                      </th>

                      <th class="whitespace-nowrap">ช่องทาง</th>
                      <th class="whitespace-nowrap">สินค้า</th>
                      <th class="whitespace-nowrap">เลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">ขนส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งนี้</th>
                      <th class="whitespace-nowrap">ยอดรวม</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px">วันแพ็ค</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px"
                          >วันนัดรับ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 180px"
                          >วันสั่งซื้อ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>

                  <tbody v-if="datatableList.length">
                    <tr v-for="(item, index) in datatableList" :key="index">
                      <td>
                        <input
                          type="checkbox"
                          value=""
                          v-model="item.selected"
                        />
                      </td>
                      <td>
                        <Lucide icon="Facebook" class="w-5 h-5" />
                      </td>
                      <td>
                        <Lucide icon="Image" class="w-5 h-5" />
                      </td>
                      <td>TD0000{{ item.id }}</td>
                      <td>{{ item.customer.customerName }}</td>
                      <td>
                        <span class="text-l px-1 bg-success text-white mr-1">
                          {{ item.orderStatus }}
                        </span>
                      </td>
                      <td>
                        {{
                          item.bankTransfer == ""
                            ? ""
                            : item.bankTransfer.nickName
                        }}
                      </td>
                      <td>
                        <span class="px-1 bg-yellow text-white mr-1">
                          {{ item.delivery }}
                        </span>
                      </td>
                      <td>
                        <button class="btn btn-sm btn-secondary w-24 mr-1 mb-2">
                          <i data-lucide="plus"></i> {{ item.pno }}
                        </button>
                      </td>
                      <td class="bold">{{ item.totalPrice }}</td>
                      <td>แพ็คได้ทันที</td>
                      <td>
                        <span class="px-1 bg-success text-white mr-1">
                          พร้อมรับทันที
                        </span>
                      </td>
                      <td class="date">
                        <div class="flex items-center justify-center">
                          <span class="flex items-center justify-center">
                            <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                          </span>
                          <span>
                            {{
                              new Date(item.createdDate).toLocaleString(
                                "th-TH",
                                {
                                  dateStyle: "short",
                                }
                              )
                            }}
                          </span>

                          <span class="flex items-center justify-center">
                            <Lucide icon="Clock" class="w-4 h-4 mt-1 ml-2" />
                          </span>
                          <span>
                            {{
                              new Date(item.createdDate).toLocaleString(
                                "th-TH",
                                {
                                  timeStyle: "short",
                                }
                              )
                            }}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center justify-center">
                          <a href="vieworder">
                            <span
                              class="btn_manage_order flex items-center justify-center mr-2"
                            >
                              <Lucide icon="Eye" class="w-5 h-5 mt-1" /> </span
                          ></a>
                          <a href="editorder">
                            <span
                              class="btn_manage_order flex items-center justify-center"
                            >
                              <Lucide icon="Edit" class="w-5 h-5 mt-1" /> </span
                          ></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <div v-else>
                    <br />
                  </div>

                  <thead>
                    <tr class="op6">
                      <th class="whitespace-nowrap"></th>

                      <th class="whitespace-nowrap">ช่องทาง</th>
                      <th class="whitespace-nowrap">สินค้า</th>
                      <th class="whitespace-nowrap">เลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">ขนส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งนี้</th>
                      <th class="whitespace-nowrap op10">
                        <span class="bold">{{ sumPriceDataList }}</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px">วันแพ็ค</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px"
                          >วันนัดรับ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 180px"
                          >วันสั่งซื้อ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <br /><br />
  <!-- BEGIN: Pagination -->
  <select
    name="categories"
    id="pagination_select"
    class="filter_search"
    v-model="paramsQuery.limit"
    @change="handleSelectLimit"
  >
    <option value="20">แสดง 20 รายการ</option>
    <option value="50">แสดง 50 รายการ</option>
    <option value="100">แสดง 100 รายการ</option>
  </select>
</template>

<script lang="ts">
import axios from "axios";
export default {
  data() {
    return {
      baseUrl: `${import.meta.env.VITE_API_URL}`,
      datatableList: [],
      paramsQuery: {
        keyword: "",
        startDate: "",
        endDate: "",
        page: 1,
        limit: 20,
      },
      filter: {
        viewPoint: "PENDING",
        typeDate: "",
        typePayment: "",
        bankList: "",
        statusSlip: "",
      },
      selectAll: false,
      activeTab: "PENDING",
      dateRangeLitepicker: "",
      paymentsTabs: [
        {
          name: "กำลังดำเนินการ",
          value: "PENDING",
          itemCount: 0,
          badgeStyle: "bg-primary",
          refValue: "tab1",
        },
        {
          name: "สำเร็จ",
          value: "SUCCESS",
          itemCount: 0,
          badgeStyle: "bg-warning",
          refValue: "tab2",
        },
      ],
    };
  },
  computed: {
    selectedCount() {
      return this.datatableList.filter((item) => item.selected).length;
    },
    sumPriceDataList() {
      return this.datatableList.reduce((sum, item) => sum + item.totalPrice, 0);
    },
  },
  watch: {
    selectAll(newValue) {
      this.datatableList.forEach((item) => (item.selected = newValue));
    },
  },
  methods: {
    async setActive(value) {
      this.paramsQuery.page = 1;
      this.paramsQuery.startDate = "";
      this.paramsQuery.endDate = "";
      this.filter.viewPoint = value ? value : "PENDING";
      this.activeTab = value;
      this.setParams(this.filter);
      // this.getAllPayment(this.filter);
    },
    async getAllPayment(queryString = "") {
      this.loading = true;
      try {
        let response = null;
        const params = new URLSearchParams(Object.entries(queryString));
        const setQuerystring = "?" + params.toString();
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const URL = (
          `${import.meta.env.VITE_API_URL}/payment/search` + setQuerystring
        ).replace(" ", "");
        response = await axios.get(URL, { headers });
        console.log(JSON.stringify(response.data.viewpointCount));
        this.datatableList = response.data.data;
        this.paymentsTabs[0].itemCount = response.data.viewpointCount.pending;
        this.paymentsTabs[1].itemCount = response.data.viewpointCount.success;
        this.loading = false;
      } catch (e) {
        console.log(e);
        this.loading = false;
        alert("โหลดข้อมูลไม่สำเร็จโปรดลองอีกครั้ง");
      }
    },
    search() {
      this.setActive();
    },
    setQuerystring(obj: any) {
      this.$router
        .push({
          query: Object.assign({}, this.$route.query, obj),
        })
        .catch(() => {});
    },
    setParams(filter: any) {
      if (this.paramsQuery.keyword) {
        const dates = this.dateRangeLitepicker.split(" - ");
        this.paramsQuery.startDate = this.parseDate(dates[0]);
        this.paramsQuery.endDate = this.parseDate(dates[1]);
        this.activeTab = this.filter.viewPoint;
        console.log("start :" + dates[0]);
        console.log("end :" + dates[1]);
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
    handleSelectLimit() {
      this.setActive();
    },
  },
  mounted() {
    this.setActive();
  },
};
</script>

<style>
@import "..//assets/css/components/Order_appp.css";
@import "..//assets/css/components/tab.scss";
@import "..//assets/css/components/tab.css";

.btn_searchcancel {
  background-color: #af0000;
  color: #fff;
}

.btn_searchcancel:hover {
  background-color: #950000;
}
</style>
