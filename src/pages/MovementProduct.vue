<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
// import fakerData from "../utils/faker";
import Button from "../base-components/Button";
import Pagination from "../base-components/Pagination";
import { FormInput, FormSelect } from "../base-components/Form";
import Lucide from "../base-components/Lucide";
import Tippy from "../base-components/Tippy";
import { Dialog, Menu } from "../base-components/Headless";
import Litepicker from "../base-components/Litepicker";
import TinySlider, { TinySliderElement } from "../base-components/TinySlider";
const deleteConfirmationModal = ref(false);
const setDeleteConfirmationModal = (value: boolean) => {
  deleteConfirmationModal.value = value;
};
const deleteButtonRef = ref(null);

const salesReportFilter = ref<string>("");
const importantNotesRef = ref<TinySliderElement>();

provide("bind[importantNotesRef]", (el: TinySliderElement) => {
  importantNotesRef.value = el;
});
</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class=" text-lg font-bold intro-y" id="">
      การเคลื่อนไหวสินค้า
    </h2>
    <br /><br />
    <div class="pc-tab">
      <input checked class="checked" id="tab1" type="radio" name="pct" />
      <input id="tab2" type="radio" name="pct" />
      <input id="tab3" type="radio" name="pct" />
      <input id="tab4" type="radio" name="pct" />
      <input id="tab5" type="radio" name="pct" />
      <nav>
        <ul class="ul">
          <li class="tab1" id="li_tab">
            <label for="tab1" class="label"
              >คำสั่งซื้อ &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-primary text-white mr-1"
                >0</span
              >
            </label>
          </li>
          <li class="tab2" id="li_tab">
            <label for="tab2" class="label"
              >ผู้ใช้งาน &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-warning text-white mr-1"
                >0</span
              >
            </label>
          </li>
          <li class="tab3" id="li_tab">
            <label for="tab3" class="label"
              >เปลี่ยนแปลง &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-success text-white mr-1"
                >0</span
              >
            </label>
          </li>
          <li class="tab4" id="li_tab">
            <label for="tab4" class="label"
              >รายการสั่งซื้อ &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-primary text-white mr-1"
                >0</span
              >
            </label>
          </li>
          <li class="tab5" id="li_tab">
            <label for="tab5" class="label"
              >การย้ายคลังสินค้า &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-primary text-white mr-1"
                >0</span
              >
            </label>
          </li>
        </ul>
      </nav>
      <section>
        <!-- tab 1 -->
        <div class="tab1" id="li_tab">
          <div class="formsearch">
            <form action="">
              <input
                v-model="keyword"
                type="text"
                placeholder="ชื่อสินค้า"
                id="input_text_nameproduct"
              />

              <select
                v-model="categoryId"
                name="categories"
                id="categories"
                class="filter_search"
              >
                <option value="" disabled selected>เลือกคลังสินค้า</option>
                <option value="">My Warehouse</option>
              </select>

              <span class="filter_search">
                ICON
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
              /></span>
              <Button
                variant="primary"
                class="mr-2 shadow-md"
                id="btn_search"
                @click.prevent="getAllProduct('SIMPLE')"
              >
                ค้นหา &nbsp;<Lucide icon="Search" class="block mx-auto" />
              </Button>
            </form>

            <br />
            <hr />
            <br />
          </div>
          <br />

          <!-- table product -->
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <table
              class="table-custom m-b-none kv-grid-table table table-bordered table-striped kv-table-wrap"
            >
              <thead>
                <tr>
                  <th>ช่องทาง</th>
                  <th>รูปภาพ</th>
                  <th>หมายเลขคำสั่งซื้อ</th>
                  <th>ชื่อสินค้า</th>
                  <th>ประเภทสินค้า</th>
                  <th>จอง/ขาย</th>
                  <th>สถานะ</th>
                  <th>คลังสินค้า</th>
                  <th>วันที่ดำเนินการ</th>
                  <th>ผู้ดำเนินการ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>System</td>
                  <td><img src="" alt="" /></td>
                  <td>Sample Product</td>
                  <td>เพิ่มจำนวนสินค้า</td>
                  <td>
                    <p
                      class="status_product text-white"
                      style="background-color: #af0000"
                    >
                      สินค้าธรรมดา
                    </p>
                  </td>
                  <td>
                    <div class="flex items-center justify-center">
                      <span>10 </span>
                      <span
                        class="flex items-center justify-center w-5 h-5 ml-1 text-success"
                      >
                        <Lucide icon="ChevronsUp" class="w-4 h-4 mt-1" />
                      </span>
                    </div>
                  </td>
                  <td>
                    <p
                      class="status_product text-white"
                      style="background-color: #af0000"
                    >
                      เพิ่ม
                    </p>
                  </td>
                  <td>My Warehouse</td>
                  <td>6 วันที่ผ่านมา</td>
                  <td>System</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- end tab 1 -->

        <!-- tab 2 -->
        <div class="tab2" id="li_tab">
          <div class="formsearch">
            <form action="">
              <input
                v-model="keyword"
                type="text"
                placeholder="ชื่อสินค้า"
                id="input_text_nameproduct"
              />

              <select
                v-model="categoryId"
                name="categories"
                id="categories"
                class="filter_search"
              >
                <option value="" disabled selected>เลือกคลังสินค้า</option>
                <option value="">My Warehouse</option>
              </select>

              <span class="filter_search">
                ICON
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
              /></span>
              <Button
                variant="primary"
                class="mr-2 shadow-md"
                id="btn_search"
                @click.prevent="getAllProduct('SIMPLE')"
              >
                ค้นหา &nbsp;<Lucide icon="Search" class="block mx-auto" />
              </Button>
            </form>

            <br />
            <hr />
            <br />
          </div>
          <br />

          <!-- table product -->
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <table
              class="table-custom m-b-none kv-grid-table table table-bordered table-striped kv-table-wrap"
            >
              <thead>
                <tr>
                  <th>ช่องทาง</th>
                  <th>รูปภาพ</th>
                  <th>หมายเลขคำสั่งซื้อ</th>
                  <th>ชื่อสินค้า</th>
                  <th>ประเภทสินค้า</th>
                  <th>จอง/ขาย</th>
                  <th>สถานะ</th>
                  <th>คลังสินค้า</th>
                  <th>วันที่ดำเนินการ</th>
                  <th>ผู้ดำเนินการ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>System</td>
                  <td><img src="" alt="" /></td>
                  <td>Sample Product</td>
                  <td>เพิ่มจำนวนสินค้า</td>
                  <td>
                    <p
                      class="status_product text-white"
                      style="background-color: #af0000"
                    >
                      สินค้าธรรมดา
                    </p>
                  </td>
                  <td>
                    <div class="flex items-center justify-center">
                      <span>10 </span>
                      <span
                        class="flex items-center justify-center w-5 h-5 ml-1 text-success"
                      >
                        <Lucide icon="ChevronsUp" class="w-4 h-4 mt-1" />
                      </span>
                    </div>
                  </td>
                  <td>
                    <p
                      class="status_product text-white"
                      style="background-color: #af0000"
                    >
                      เพิ่ม
                    </p>
                  </td>
                  <td>My Warehouse</td>
                  <td>6 วันที่ผ่านมา</td>
                  <td>System</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- tab 3 -->
        <div class="tab3" id="li_tab">
          <div class="formsearch">
            <form action="">
              <input
                v-model="keyword"
                type="text"
                placeholder="ชื่อสินค้า"
                id="input_text_nameproduct"
              />

              <select
                v-model="categoryId"
                name="categories"
                id="categories"
                class="filter_search"
              >
                <option value="" disabled selected>เลือกคลังสินค้า</option>
                <option value="">My Warehouse</option>
              </select>

              <span class="filter_search">
                ICON
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
              /></span>
              <Button
                variant="primary"
                class="mr-2 shadow-md"
                id="btn_search"
                @click.prevent="getAllProduct('SIMPLE')"
              >
                ค้นหา &nbsp;<Lucide icon="Search" class="block mx-auto" />
              </Button>
            </form>

            <br />
            <hr />
            <br />
          </div>
          <br />

          <!-- table product -->
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <table
              class="table-custom m-b-none kv-grid-table table table-bordered table-striped kv-table-wrap"
            >
              <thead>
                <tr>
                  <th>ช่องทาง</th>
                  <th>รูปภาพ</th>
                  <th>หมายเลขคำสั่งซื้อ</th>
                  <th>ชื่อสินค้า</th>
                  <th>ประเภทสินค้า</th>
                  <th>จอง/ขาย</th>
                  <th>สถานะ</th>
                  <th>คลังสินค้า</th>
                  <th>วันที่ดำเนินการ</th>
                  <th>ผู้ดำเนินการ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>System</td>
                  <td><img src="" alt="" /></td>
                  <td>Sample Product</td>
                  <td>เพิ่มจำนวนสินค้า</td>
                  <td>
                    <p
                      class="status_product text-white"
                      style="background-color: #af0000"
                    >
                      สินค้าธรรมดา
                    </p>
                  </td>
                  <td>
                    <div class="flex items-center justify-center">
                      <span>10 </span>
                      <span
                        class="flex items-center justify-center w-5 h-5 ml-1 text-success"
                      >
                        <Lucide icon="ChevronsUp" class="w-4 h-4 mt-1" />
                      </span>
                    </div>
                  </td>
                  <td>
                    <p
                      class="status_product text-white"
                      style="background-color: #af0000"
                    >
                      เพิ่ม
                    </p>
                  </td>
                  <td>My Warehouse</td>
                  <td>6 วันที่ผ่านมา</td>
                  <td>System</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- tab 4 -->
        <div class="tab4" id="li_tab">
          <div class="formsearch">
            <form action="">
              <input
                v-model="keyword"
                type="text"
                placeholder="ชื่อสินค้า"
                id="input_text_nameproduct"
              />

              <select
                v-model="categoryId"
                name="categories"
                id="categories"
                class="filter_search"
              >
                <option value="" disabled selected>เลือกคลังสินค้า</option>
                <option value="">My Warehouse</option>
              </select>

              <span class="filter_search">
                ICON
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
              /></span>
              <Button
                variant="primary"
                class="mr-2 shadow-md"
                id="btn_search"
                @click.prevent="getAllProduct('SIMPLE')"
              >
                ค้นหา &nbsp;<Lucide icon="Search" class="block mx-auto" />
              </Button>
            </form>

            <br />
            <hr />
            <br />
          </div>
          <br />

          <!-- table product -->
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <table
              class="table-custom m-b-none kv-grid-table table table-bordered table-striped kv-table-wrap"
            >
              <thead>
                <tr>
                  <th>ช่องทาง</th>
                  <th>รูปภาพ</th>
                  <th>หมายเลขคำสั่งซื้อ</th>
                  <th>ชื่อสินค้า</th>
                  <th>ประเภทสินค้า</th>
                  <th>จอง/ขาย</th>
                  <th>สถานะ</th>
                  <th>คลังสินค้า</th>
                  <th>วันที่ดำเนินการ</th>
                  <th>ผู้ดำเนินการ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>System</td>
                  <td><img src="" alt="" /></td>
                  <td>Sample Product</td>
                  <td>เพิ่มจำนวนสินค้า</td>
                  <td>
                    <p
                      class="status_product text-white"
                      style="background-color: #af0000"
                    >
                      สินค้าธรรมดา
                    </p>
                  </td>
                  <td>
                    <div class="flex items-center justify-center">
                      <span>10 </span>
                      <span
                        class="flex items-center justify-center w-5 h-5 ml-1 text-success"
                      >
                        <Lucide icon="ChevronsUp" class="w-4 h-4 mt-1" />
                      </span>
                    </div>
                  </td>
                  <td>
                    <p
                      class="status_product text-white"
                      style="background-color: #af0000"
                    >
                      เพิ่ม
                    </p>
                  </td>
                  <td>My Warehouse</td>
                  <td>6 วันที่ผ่านมา</td>
                  <td>System</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- tab 5 -->
        <div class="tab5" id="li_tab">
          <div class="formsearch">
            <form action="">
              <input
                v-model="keyword"
                type="text"
                placeholder="ชื่อสินค้า"
                id="input_text_nameproduct"
              />

              <select
                v-model="categoryId"
                name="categories"
                id="categories"
                class="filter_search"
              >
                <option value="" disabled selected>เลือกคลังสินค้า</option>
                <option value="">My Warehouse</option>
              </select>

              <span class="filter_search">
                ICON
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
              /></span>
              <Button
                variant="primary"
                class="mr-2 shadow-md"
                id="btn_search"
                @click.prevent="getAllProduct('SIMPLE')"
              >
                ค้นหา &nbsp;<Lucide icon="Search" class="block mx-auto" />
              </Button>
            </form>

            <br />
            <hr />
            <br />
          </div>
          <br />

          <!-- table product -->
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <table
              class="table-custom m-b-none kv-grid-table table table-bordered table-striped kv-table-wrap"
            >
              <thead>
                <tr>
                  <th>ช่องทาง</th>
                  <th>รูปภาพ</th>
                  <th>หมายเลขคำสั่งซื้อ</th>
                  <th>ชื่อสินค้า</th>
                  <th>ประเภทสินค้า</th>
                  <th>จอง/ขาย</th>
                  <th>สถานะ</th>
                  <th>คลังสินค้า</th>
                  <th>วันที่ดำเนินการ</th>
                  <th>ผู้ดำเนินการ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>System</td>
                  <td><img src="" alt="" /></td>
                  <td>Sample Product</td>
                  <td>เพิ่มจำนวนสินค้า</td>
                  <td>
                    <p
                      class="status_product text-white"
                      style="background-color: #af0000"
                    >
                      สินค้าธรรมดา
                    </p>
                  </td>
                  <td>
                    <div class="flex items-center justify-center">
                      <span>10 </span>
                      <span
                        class="flex items-center justify-center w-5 h-5 ml-1 text-success"
                      >
                        <Lucide icon="ChevronsUp" class="w-4 h-4 mt-1" />
                      </span>
                    </div>
                  </td>
                  <td>
                    <p
                      class="status_product text-white"
                      style="background-color: #af0000"
                    >
                      เพิ่ม
                    </p>
                  </td>
                  <td>My Warehouse</td>
                  <td>6 วันที่ผ่านมา</td>
                  <td>System</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>

  <br /><br />
  <!-- BEGIN: Pagination -->
  <select name="categories" id="pagination_select" class="filter_search">
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
      allCategories: [] as any[],
      keyword: "",
      simpleProducts: [] as any[],
      configProducts: [] as any[],
      bundleProducts: [] as any[],
      categoryId: "all",
      ids: "",
    };
  },
  methods: {
    //get all category
    async getAllCategory() {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      const categories = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }category/search?categoryName=&category=all`,
        { headers }
      );
      this.allCategories = categories.data.data;
      console.log("all cat =", this.allCategories);
    },

    //get all product
    async getAllProduct(type: any) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      const products = await axios.get(
        `${import.meta.env.VITE_API_URL}product/search?keyword=${
          this.keyword
        }&categoryId=${this.categoryId}&productType=${type}`,
        { headers }
      );
      switch (type) {
        case "SIMPLE":
          this.simpleProducts = products.data.data;
          break;
        case "CONFIG":
          this.configProducts = products.data.data;
          break;
        case "BUNDLE":
          this.bundleProducts = products.data.data;
          break;
      }
    },
    //delete items
    async deleteItems() {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_API_URL}product/deletes`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${localStorage.getItem("auth._token.local")}`,
            },
            data: {
              ids: this.ids.split(",").map(Number),
            },
          }
        );
        alert(`${response.data.data} items deleted.`);
      } catch (e) {
        alert(e);
      }
    },
  },
  mounted() {
    this.getAllCategory();
  },
};
</script>
<style>
@import "..//assets/css/components/Categories.css";
@import "..//assets/css/components/tab.scss";
@import "..//assets/css/components/tab.css";
</style>
