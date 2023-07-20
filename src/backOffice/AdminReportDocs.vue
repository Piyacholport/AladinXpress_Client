<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";

import Button from "../../base-components/Button";

import { FormInput, FormCheck } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";

import { TinySliderElement } from "../../base-components/TinySlider";
import Litepicker from "../../base-components/Litepicker";

const salesReportFilter = ref<string>("");
const importantNotesRef = ref<TinySliderElement>();
provide("bind[importantNotesRef]", (el: TinySliderElement) => {
  importantNotesRef.value = el;
});

const deleteConfirmationModal = ref(false);
const setDeleteConfirmationModal = (value: boolean) => {
  deleteConfirmationModal.value = value;
};
const deleteButtonRef = ref(null);

//date
const date = ref("");
const daterange = ref("");
const datepickerModalPreview = ref(false);
const setDatepickerModalPreview = (value: boolean) => {
  datepickerModalPreview.value = value;
};
const cancelButtonRef = ref(null);
</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content mt-5">
    <h2 class=" text-lg font-medium intro-y" id="head_text">
      รายการขอเอกสาร
    </h2>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap"
      >
        <div class="formsearch">
          <form action="">
            <FormInput
              type="text"
              placeholder="ค้นหา..."
              id="input_text_nameproduct"
              class="w-60"
            />

            <!-- <div class="relative w-30 ">
    <div class="absolute flex items-center justify-center w-10 h-9 mt-1 border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
        <Lucide icon="Calendar" class="w-4 h-4" />
    </div> -->
            <!-- <Litepicker
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
                    class="pl-10 sm:w-65 "
                /> -->
            <!-- </div> -->

            <!-- <span class="ml-3">
                  <Lucide
                      icon="Calendar"
                      class="absolute w-4 h-4  ml-3 " />
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
                /></span> -->

            <Button variant="primary" class="shadow-md" id="btn_search">
              ค้นหา &nbsp;
              <Lucide icon="Search" class="block mx-auto" />
            </Button>

            <Button variant="primary" class="shadow-md" id="btn_search_filter">
              ค้นหาแบบละเอียด &nbsp;
              <Lucide icon="BarChart2" class="block mx-auto" />
            </Button>
          </form>

          <br />
          <hr />
          <br />
          <div class="mr-3">
            <Button variant="primary" class="mr-2 shadow-md" id="goldgd">
              <Lucide icon="CheckCircle" class="block mx-auto w-4 h-4" />
              &nbsp; อนุมัติทั้งหมด
            </Button>
          </div>
          <br />
        </div>
        <!--<Lucide icon="Search" class="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3" /> -->
      </div>
    </div>
    <div class="pc-tab">
      <input checked class="checked" id="tab1" type="radio" name="pct" />
      <input id="tab2" type="radio" name="pct" />

      <nav>
        <ul class="ul">
          <li class="tab1" id="li_tab">
            <label for="tab1" class="label">
              รายการใหม่&nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-primary text-white mr-1"
                >0</span
              >
            </label>
          </li>
          <li class="tab2" id="li_tab">
            <label for="tab2" class="label">
              รายการทั้งหมด&nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-primary text-white mr-1"
                >0</span
              >
            </label>
          </li>
        </ul>
      </nav>

      <section>
        <div class="tab1" id="li_tab">
          <br />
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <div class="table-list">
              <div class="overflow-x-auto">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th class=" ">
                        <div class=""></div>
                        <FormCheck.Input
                          id="checkbox-switch-4"
                          type="checkbox"
                          value=""
                          class="checkbox mb-1"
                        />
                      </th>
                      <th class="whitespace-nowrap">ลำดับ</th>
                      <th class="whitespace-nowrap text-left">
                        <span style="width: 90px">วันที่</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px"> ID </span>
                      </th>
                      <th class="whitespace-nowrap text-left">
                        <span style="display: block; width: 150px"
                          >ชื่อ-สกุล</span
                        >
                      </th>
                      <th class="text-left">หมวดหมู่เอกสาร</th>
                      <th class="whitespace-nowrap text-left">
                        <span style="display: block; width: 200px"
                          >ชื่อเอกสาร</span
                        >
                      </th>
                      <th class="whitespace-nowrap" style="width: 90px">
                        รูปแบบ
                      </th>

                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th class=" ">
                        <div class=""></div>
                        <FormCheck.Input
                          id="checkbox-switch-4"
                          type="checkbox"
                          value=""
                          class="checkbox mb-1"
                        />
                      </th>
                      <td class="whitespace-nowrap">1</td>
                      <td class="">
                        <div class="flex items-center justify-left">
                          <span class="flex items-center justify-left">
                            <Lucide icon="Calendar" class="w-3 h-3 mt-1" />
                          </span>
                          <span>08-03-2023</span>
                        </div>

                        <div class="flex items-center justify-left">
                          <span class="flex items-center justify-left">
                            <Lucide icon="Clock" class="w-3 h-3 mt-1" />
                          </span>
                          <span>23:59:00</span>
                        </div>
                      </td>
                      <td class="whitespace-nowrap">
                        <span style="display: block; width: 90px"> 00001 </span>
                      </td>
                      <td class="whitespace-nowrap text-left">
                        <span style="display: block; width: 150px"
                          >สมหญิง จริงจริงนะ</span
                        >
                      </td>
                      <td class="text-left">ลูกค้า</td>
                      <td class="whitespace-nowrap text-left">
                        <span style="display: block; width: 200px"
                          >customer_21_04_2566.pdf</span
                        >
                      </td>
                      <td class="whitespace-nowrap" style="width: 90px">pdf</td>

                      <td class="whitespace-nowrap">
                        <span style="display: block; width: 110px">
                          <Button
                            class="w-32 mb-2 mr-2 text-white bg-[#af0000] hover:bg:[#95000]"
                          >
                            <Lucide icon="CheckCircle" class="w-4 h-4 mr-2" />
                            อนุมัติ
                          </Button></span
                        >
                      </td>
                      <!-- <td class="date">
                        <div class="flex items-center justify-center">
                          <span class="flex items-center justify-center">
                            <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                          </span>
                          <span>08-03-2023</span>

                          <span class="flex items-center justify-center">
                            <Lucide icon="Clock" class="w-4 h-4 mt-1 ml-2" />
                          </span>
                          <span>15:17:08</span>
                        </div>
                      </td> -->
                    </tr>
                  </tbody>

                  <thead>
                    <tr class="op6">
                      <th class="whitespace-nowrap">
                        <div class=""></div>
                      </th>
                      <th class="whitespace-nowrap">ลำดับ</th>
                      <th class="whitespace-nowrap text-left">
                        <span style="width: 90px">วันที่</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px"> ID </span>
                      </th>
                      <th class="whitespace-nowrap text-left">
                        <span style="display: block; width: 150px"
                          >ชื่อ-สกุล</span
                        >
                      </th>
                      <th class="text-left">หมวดหมู่เอกสาร</th>
                      <th class="whitespace-nowrap text-left">
                        <span style="display: block; width: 200px"
                          >ชื่อเอกสาร</span
                        >
                      </th>
                      <th class="whitespace-nowrap" style="width: 90px">
                        รูปแบบ
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

        <div class="tab2" id="li_tab">
          <br />
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <div class="table-list">
              <div class="overflow-x-auto">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th class=" ">
                        <div class=""></div>
                        <FormCheck.Input
                          id="checkbox-switch-4"
                          type="checkbox"
                          value=""
                          class="checkbox mb-1"
                        />
                      </th>
                      <th class="whitespace-nowrap">ลำดับ</th>
                      <th class="whitespace-nowrap text-left">
                        <span style="width: 90px">วันที่</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px"> ID </span>
                      </th>
                      <th class="whitespace-nowrap text-left">
                        <span style="display: block; width: 150px"
                          >ชื่อ-สกุล</span
                        >
                      </th>
                      <th class="text-left">หมวดหมู่เอกสาร</th>
                      <th class="whitespace-nowrap text-left">
                        <span style="display: block; width: 200px"
                          >ชื่อเอกสาร</span
                        >
                      </th>
                      <th class="whitespace-nowrap" style="width: 90px">
                        รูปแบบ
                      </th>

                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th class=" ">
                        <div class=""></div>
                        <FormCheck.Input
                          id="checkbox-switch-4"
                          type="checkbox"
                          value=""
                          class="checkbox mb-1"
                        />
                      </th>
                      <td class="whitespace-nowrap">1</td>
                      <td class="">
                        <div class="flex items-center justify-left">
                          <span class="flex items-center">
                            <Lucide icon="Calendar" class="w-3 h-3 mt-1" />
                          </span>
                          <span>08-03-2023</span>
                        </div>

                        <div class="flex items-center justify-left">
                          <span class="flex items-center">
                            <Lucide icon="Clock" class="w-3 h-3 mt-1" />
                          </span>
                          <span>23:59:00</span>
                        </div>
                      </td>
                      <td class="whitespace-nowrap">
                        <span style="display: block; width: 90px"> 00001 </span>
                      </td>
                      <td class="whitespace-nowrap text-left">
                        <span style="display: block; width: 150px"
                          >สมหญิง จริงจริงนะ</span
                        >
                      </td>
                      <td class="text-left">ลูกค้า</td>
                      <td class="whitespace-nowrap text-left">
                        <span style="display: block; width: 200px"
                          >customer_21_04_2566.pdf</span
                        >
                      </td>
                      <td class="whitespace-nowrap" style="width: 90px">pdf</td>

                      <td class="whitespace-nowrap">
                        <span style="display: block; width: 110px">
                          <Button
                            class="w-32 mb-2 mr-2 text-white bg-[#af0000] hover:bg:[#95000]"
                          >
                            <Lucide icon="CheckCircle" class="w-4 h-4 mr-2" />
                            อนุมัติ
                          </Button></span
                        >
                      </td>
                      <!-- <td class="date">
                        <div class="flex items-center justify-center">
                          <span class="flex items-center justify-center">
                            <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                          </span>
                          <span>08-03-2023</span>

                          <span class="flex items-center justify-center">
                            <Lucide icon="Clock" class="w-4 h-4 mt-1 ml-2" />
                          </span>
                          <span>15:17:08</span>
                        </div>
                      </td> -->
                    </tr>
                  </tbody>

                  <thead>
                    <tr class="op6">
                      <th class="whitespace-nowrap">
                        <div class=""></div>
                      </th>
                      <th class="whitespace-nowrap">ลำดับ</th>
                      <th class="whitespace-nowrap text-left">
                        <span style="width: 90px">วันที่</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px"> ID </span>
                      </th>
                      <th class="whitespace-nowrap text-left">
                        <span style="display: block; width: 150px"
                          >ชื่อ-สกุล</span
                        >
                      </th>
                      <th class="text-left">หมวดหมู่เอกสาร</th>
                      <th class="whitespace-nowrap text-left">
                        <span style="display: block; width: 200px"
                          >ชื่อเอกสาร</span
                        >
                      </th>
                      <th class="whitespace-nowrap" style="width: 90px">
                        รูปแบบ
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
  <div
    class="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap"
    id="pagination_select"
  >
    <select name="categories" class="filter_search">
      <option value="allcategories">แสดง 20 รายการ</option>
      <option value="maincategories">แสดง 50 รายการ</option>
      <option value="subcategories">แสดง 100 รายการ</option>
      <option value="subcategories">แสดง 150 รายการ</option>
      <option value="subcategories">แสดง 200 รายการ</option>
      <option value="subcategories">แสดง 250 รายการ</option>
    </select>
  </div>
  <!-- END: Pagination -->
</template>

<script lang="ts">
import axios from "axios";
import moment from "moment";
import { OrderType } from "../../models/orders.model";

export default {
  data() {
    return {
      categories: [] as any[],
      deletedItems: [] as any[],
      categoryName: "",
      category: "all",
      loading: false,
      productItems: [] as OrderType[],
    };
  },
  methods: {
    formatDate(date: string) {
      if (date) {
        return moment(String(date)).format("DD-MM-YYYY");
      }
    },
    async searchCategory() {
      this.loading = true;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      try {
        this.loading = true;
        const categories = await axios.get(
          `${import.meta.env.VITE_API_URL}category/search?categoryName=${
            this.categoryName
          }&category=${this.category}`,
          { headers }
        );
        this.loading = false;
        this.categories = categories.data.data;
      } catch (err) {
        console.log(err);
        this.loading = false;
        alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }
    },
    async deleteCategory(id: number) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      console.log(`deleting ${id}`);
      this.categories.splice(id, 1);
      const response: any = await axios.delete(
        `${import.meta.env.VITE_API_URL}category/delete/${id}`,
        { headers }
      );
      if (response.data.code === 200) {
        alert("ลบรายการสำเร็จ");
      }
      this.deletedItems.push(id);
    },
    // async getProductItems() {
    //   const response: any = await axiosIntercept.get('order/getAllOrder');
    //   // this.productItems = response.orders
    //   const responseArr: any = await Promise.all(response.orders.map((arr: any) => this.getProductItemById(arr.id)))
    //   // this.productItems = responseArr
    // },
    async getAllOrder() {
      const URL = `${import.meta.env.VITE_API_URL}/order/getAllOrder`.replace(
        " ",
        ""
      );
      const result = await axios.get(URL);
      console.log(result.data.orders);
      this.productItems = result.data.orders;
    },
  },
  mounted() {},
  beforeMount() {
    this.getAllOrder();
  },
};
</script>

<style>
@import "../../assets/css/components/tab.scss";
@import "../../assets/css/components/tab.css";
@import "../../assets/css/components/Deliveryofproduct.css";
</style>
