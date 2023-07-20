<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";

import Button from "../base-components/Button";

import { FormInput} from "../base-components/Form";
import Lucide from "../base-components/Lucide";

import { Menu } from "../base-components/Headless";


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
      รายละเอียดหมวดหมู่สินค้า
    </h2>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap"
      >
        <div class="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
          <!-- search input -->
          <div class="relative text-slate-500" id="input_search">
            <FormInput
              v-model="categoryName"
              type="text"
              class="w-56 !box"
              placeholder="ค้นหารหัสสินค้า, ชื่อสินค้า..."
              id="categories"
              @keydown.enter="searchCategory()"
            />
          </div>
        </div>
        <!-- BEGIN:Filter search dropdown -->
        <!--END: Filter search dropdown -->
        <Button
          variant="primary"
          class="mr-2 shadow-md"
          id="btn_search"
          @click="searchCategory()"
        >
          ค้นหา &nbsp;<Lucide icon="Search" class="block mx-auto" />
        </Button>
        <!--<Lucide icon="Search" class="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3" /> -->
      </div>
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
                ราคา
              </th>
              <th
                class="kv-align-center kv-align-middle"
                style="width: 60px"
                data-col-seq="4"
              >
                จัดการ
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img
                  class="img-responsive previewImage"
                  src="https://file.xcommerce.co.th/u1/43621/product/image1/jZ8K34QOiW.png"
                  alt=""
                  style="
                    width: 25px;
                    object-fit: cover;
                    height: 25px;
                    margin: 0 auto;
                  "
                  data-href="https://file.xcommerce.co.th/u1/43621/product/image1/jZ8K34QOiW.png"
                />
              </td>
              <td>Banana</td>
              <td>
                <div class="small m-t-xs">
                  <span class="m-r-xs m-t-xs"
                    ><span class="m-r-xs" style="font-weight: bolder">SKU:</span
                    ><span style="font-weight: lighter"
                      >43621-70431038003</span
                    ></span
                  >
                </div>
              </td>
              <td>
                <Menu>
                  <Menu.Button :as="Button" class="px-2 !box">
                    <Lucide
                      icon="MoreVertical"
                      class="w-4 h-4 flex items-center"
                    />
                  </Menu.Button>
                  <Menu.Items class="w-40">
                    <Menu.Item>
                      <Lucide icon="Trash2" class="w-4 h-4 mr-2" />
                      <button>ลบตัวเลือก</button>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <img
                  class="img-responsive previewImage"
                  src="https://file.xcommerce.co.th/u1/43621/product/image1/jZ8K34QOiW.png"
                  alt=""
                  style="
                    width: 25px;
                    object-fit: cover;
                    height: 25px;
                    margin: 0 auto;
                  "
                  data-href="https://file.xcommerce.co.th/u1/43621/product/image1/jZ8K34QOiW.png"
                />
              </td>
              <td>Banana</td>
              <td>
                <div class="small m-t-xs">
                  <span class="m-r-xs m-t-xs"
                    ><span class="m-r-xs" style="font-weight: bolder">SKU:</span
                    ><span style="font-weight: lighter"
                      >43621-70431038003</span
                    ></span
                  >
                </div>
              </td>
              <td>
                <Menu>
                  <Menu.Button :as="Button" class="px-2 !box">
                    <Lucide
                      icon="MoreVertical"
                      class="w-4 h-4 flex items-center"
                    />
                  </Menu.Button>
                  <Menu.Items class="w-40">
                    <Menu.Item>
                      <Lucide icon="Trash2" class="w-4 h-4 mr-2" />
                      <button>ลบตัวเลือก</button>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
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
  <!-- END: Pagination -->
</template>

<script lang="ts">
import axios from "axios";
import { useInventory } from '../stores/inventory'
const Inventory = useInventory();

export default {
  data() {
    return {
      baseUrl: "http://localhost:5001/",
      categories: [] as any[],
      deletedItems: [] as any[],
      categoryName: "",
      category: "all",
      loading: false,
       inventoryId: Inventory.inventory[0].id 
    };
  },
  methods: {
    async searchCategory() {
      this.loading = true;
      try {
        this.loading = true;
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
      const URL = (`${import.meta.env.VITE_API_URL}category/search?categoryName=${ this.categoryName}&category=${this.category}`).replace(" ","")
console.log(URL)
        const categories = await axios.get(URL,
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
        `${import.meta.env.VITE_API_URL}${id}`, { headers }
      );
      if (response.data.code === 200) {
        alert("ลบรายการสำเร็จ");
      }
      this.deletedItems.push(id);
    },
  },
};
</script>

<style>
@import "..//assets/css/components/Categories.css";
@import "..//assets/css/components/Barcode.css";
</style>

