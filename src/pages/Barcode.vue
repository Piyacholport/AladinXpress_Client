<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";

import Button from "../base-components/Button";

import { FormInput } from "../base-components/Form";
import Lucide from "../base-components/Lucide";



const deleteConfirmationModal = ref(false);
const setDeleteConfirmationModal = (value: boolean) => {
  deleteConfirmationModal.value = value;
};
const deleteButtonRef = ref(null);
</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class="mr-auto text-lg font-bold" id="">
      พิมพ์บาร์โค๊ด
    </h2>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap"
      >
        <div class="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
          <!-- search input -->
          <div class="relative w-56 text-slate-500" id="">
            <FormInput
              v-model="keyword"
              type="text"
              class="w-56 pr-10"
              placeholder="ค้นหาสินค้า..."
              id="categories"
              @keydown.enter="sarchProducts()"
            />
          </div>
        </div>
      </div>
      <!-- BEGIN: Data List -->

      <!-- END: Data List -->
    </div>
    <div class="table_barcode_list">
      <br /><br />
      <div id="allTab-container" class="table-responsive kv-grid-container">
        <table
          class="table-custom m-b-none kv-grid-table table table-bordered table-striped kv-table-wrap"
        >
          <thead>
            <tr>
              <th
                class="kv-align-center kv-align-middle"
                style="width: 60px"
                data-col-seq="1"
              >
                ลำดับ
              </th>
              <th
                class="kv-align-center kv-align-middle"
                style="width: 80px"
                data-col-seq="1"
              >
                รูปภาพ
              </th>
              <th
                class="kv-align-center kv-align-middle"
                style="width: 140px"
                data-col-seq="2"
              >
                ชื่อสินค้า
              </th>
              <th
                class="kv-align-left kv-align-middle"
                style="width: 180px"
                data-col-seq="3"
              >
                รหัสสินค้า
              </th>
              <th
                class="kv-align-center kv-align-middle"
                style="width: 60px"
                data-col-seq="4"
              >
                จำนวนสินค้า
              </th>
              <th
                class="kv-align-center kv-align-middle"
                style="width: 300px"
                data-col-seq="6"
              >
                รหัสบาร์โค้ด
              </th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in products" :key="item.id">
            <tr>
              <td>{{ index + 1 }}</td>
              <td>
                <img
                  class="img-responsive previewImage"
                  :src="baseUrl + '/' + item.images"
                  alt=""
                  style="
                    width: 25px;
                    object-fit: cover;
                    height: 25px;
                    margin: 0 auto;
                  "
                />
              </td>
              <td>{{ item.productName }}</td>
              <td>
                <div class="small m-t-xs">
                  <span class="m-r-xs m-t-xs"
                    ><span class="m-r-xs" style="font-weight: bolder">SKU:</span
                    ><span style="font-weight: lighter">{{
                      item.productSKU
                    }}</span></span
                  >
                </div>
              </td>
              <td>{{ item.QTY }}</td>
              <td>
                <svg class="mx-auto"
                  :id="'barcode-' + index"
                ></svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <br /><br />
  <!-- BEGIN: Pagination -->
  <div class="">
    <select name="categories" id="pagination_select" class="filter_search">
      <option value="allcategories">แสดง 20 รายการ</option>
      <option value="maincategories">แสดง 50 รายการ</option>
      <option value="subcategories">แสดง 100 รายการ</option>
    </select>
  </div>
  <svg id="sy-01"></svg>
  <!-- END: Pagination -->
</template>

<script lang="ts">
import axios from "axios";
import JsBarcode from "jsbarcode";

export default {
  data() {
    return {
      baseUrl: `${import.meta.env.VITE_API_URL}`,
      products: [] as any[],
      keyword: "",
      barcodeType: "code39",
      barcodeOptions: {},
    };
  },
  methods: {
    //get all product
    async getAllProduct() {
      const inventoryId: number = parseInt(
        localStorage.getItem("currentInventoryId") as string
      );
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      const products = await axios.post(
        `${import.meta.env.VITE_API_URL}/product/getAllProduct`,
        {
          inventoryId: inventoryId,
        },
        { headers }
      );
      this.products = products.data.data;
    },
    async sarchProducts() {
      const inventoryId: number = parseInt(
        localStorage.getItem("currentInventoryId") as string
      );
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      const products = await axios.post(
        `${import.meta.env.VITE_API_URL}/product/search?keyword=${this.keyword}`,
        {
          inventoryId: inventoryId,
        },
        { headers }
      );
      this.products = products.data.data;
    },
    generateBarcode(svgElement: any, barcodeValue: any) {
      JsBarcode(svgElement, barcodeValue, {
        format: this.barcodeType,
        ...this.barcodeOptions,
        height: 30, width: 1
      });
    },
  },
  async mounted() {
    await this.getAllProduct();
    this.$nextTick(() => {
      // Call generateBarcode for each row in the table after it has rendered
      this.products.forEach((product, index) => {
        const svgElement = document.getElementById(`barcode-${index}`);
        this.generateBarcode(svgElement, product.productBarcode);
      });
    });
  },
};
</script>

<style>
@import "..//assets/css/components/Categories.css";
@import "..//assets/css/components/Barcode.css";
</style>

