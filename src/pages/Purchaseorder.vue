<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";
// import fakerData from "../utils/faker";
import Button from "../base-components/Button";

import { FormInput, FormSelect } from "../base-components/Form";
import Lucide from "../base-components/Lucide";


</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class=" text-lg font-bold intro-y" id="">ใบสั่งซื้อ</h2>
    <br /><br />
    <div class="pc-tab">
      <input checked class="checked" id="tab1" type="radio" name="pct" />
      <input id="tab2" type="radio" name="pct" />
      <input id="tab3" type="radio" name="pct" />
      <nav>
        <ul class="ul">
          <li class="tab1" id="li_tab">
            <label for="tab1" class="label"
              >รอรับสินค้า &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-primary text-white mr-1"
                >0</span
              >
            </label>
          </li>
          <li class="tab2" id="li_tab">
            <label for="tab2" class="label"
              >รับสินค้าครบแล้ว &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-warning text-white mr-1"
                >0</span
              >
            </label>
          </li>
          <li class="tab3" id="li_tab">
            <label for="tab3" class="label"
              >ยกเลิก / คืนสินค้า &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-success text-white mr-1"
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
              <FormInput 
              v-model="keyword"
              id="regular-form-1" type="text" placeholder="หมายเลขใบสั่งซื้อหรือชื่อผู้ผลิต" class="w-56 h-10 mr-2"/>
              <!-- <input
                v-model="keyword"
                type="text"
                placeholder="หมายเลขใบสั่งซื้อหรือชื่อผู้ผลิต"
                id="input_text_nameproduct"
              /> -->

              <select
                v-model="categoryId"
                name="categories"
                id="categories"
                class="filter_search"
              >
                <option value="" selected>รอชำระเงิน</option>
                <option
                  v-for="(item, index) in allCategories"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.categoryName }}
                </option>
              </select>

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
            <div class="formmanage">
              <input type="checkbox" id="checkbox1" checked />
              <label for="checkbox1" class="text_bold"
                >&nbsp;&nbsp;ดำเนินการ</label
              >
              <br /><br />

              <a href="addPurchaseorder">
                <Button variant="primary" class="mr-2 shadow-md" id="goldgd">
                  <Lucide icon="PlusCircle" class="block mx-auto" />
                  &nbsp; สร้างใบสั่งซื้อ
                </Button></a
              >
            </div>
            <br />
            <hr />
            <br />

            <div class="flex items-left justify-left" id="tag">
              <span class="flex items-left justify-left w-5 h-5">
                <Lucide icon="Printer" class="w-5 h-5" />
              </span>
              <span class="text_bold">&nbsp;&nbsp;พิมพ์</span>
            </div>
            <a href="">
              <Button variant="primary" class="mr-2 shadow-md" id="btn_delete">
                &nbsp; ใบสั่งซื้อ &nbsp;
                <span
                  class="text-sm px-1.5 rounded-full bg-dark text-white mr-1"
                  >5</span
                >
              </Button></a
            >
          </div>
          <br />

          <!-- table product -->
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <table>
              <thead>
                <tr>
                  <th>
                    <div
                      class="icheckbox_square-green"
                      style="position: relative"
                    >
                      <input type="checkbox" id="checkbox1" />
                      <ins></ins>
                    </div>
                  </th>
                  <th>รูปภาพ</th>
                  <th>ซัพพลายเออร์</th>
                  <th>คลังสินค้า</th>
                  <th>จัดส่งโดย</th>
                  <th>สถานะ</th>
                  <th>การชำระเงิน</th>
                  <th>ยอดสุทธิ</th>
                  <th>ชำระแล้ว</th>
                  <th>วันที่ใบสั่งซื้อ</th>
                  <th>ดำเนินการ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div
                      class="icheckbox_square-green"
                      style="position: relative"
                    >
                      <input type="checkbox" id="checkbox1" />
                      <ins></ins>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
                placeholder="หมายเลขใบสั่งซื้อหรือชื่อผู้ผลิต"
                id="input_text_nameproduct"
              />

              <select
                v-model="categoryId"
                name="categories"
                id="categories"
                class="filter_search"
              >
                <option value="" selected>รอชำระเงิน</option>
                <option
                  v-for="(item, index) in allCategories"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.categoryName }}
                </option>
              </select>

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
            <div class="formmanage">
              <input type="checkbox" id="checkbox1" checked />
              <label for="checkbox1" class="text_bold"
                >&nbsp;&nbsp;ดำเนินการ</label
              >
              <br /><br />

              <a href="addPurchaseorder">
                <Button variant="primary" class="mr-2 shadow-md" id="goldgd">
                  <Lucide icon="PlusCircle" class="block mx-auto" />
                  &nbsp; สร้างใบสั่งซื้อ
                </Button></a
              >
            </div>
            <br />
            <hr />
            <br />

            <div class="flex items-left justify-left" id="tag">
              <span class="flex items-left justify-left w-5 h-5">
                <Lucide icon="Printer" class="w-5 h-5" />
              </span>
              <span class="text_bold">&nbsp;&nbsp;พิมพ์</span>
            </div>
            <a href="">
              <Button variant="primary" class="mr-2 shadow-md" id="btn_delete">
                &nbsp; ใบสั่งซื้อ &nbsp;
                <span
                  class="text-sm px-1.5 rounded-full bg-dark text-white mr-1"
                  >5</span
                >
              </Button></a
            >
          </div>
          <br />

          <!-- table product -->
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <table>
              <thead>
                <tr>
                  <th>
                    <div
                      class="icheckbox_square-green"
                      style="position: relative"
                    >
                      <input type="checkbox" id="checkbox1" />
                      <ins></ins>
                    </div>
                  </th>
                  <th>รูปภาพ</th>
                  <th>ซัพพลายเออร์</th>
                  <th>คลังสินค้า</th>
                  <th>จัดส่งโดย</th>

                  <th>การชำระเงิน</th>
                  <th>ยอดสุทธิ</th>
                  <th>ชำระแล้ว</th>
                  <th>วันที่ใบสั่งซื้อ</th>
                  <th>ดำเนินการ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div
                      class="icheckbox_square-green"
                      style="position: relative"
                    >
                      <input type="checkbox" id="checkbox1" />
                      <ins></ins>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>

                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!--end  tab 2 -->



        <!-- tab 3 -->
        <div class="tab3" id="li_tab">
          <div class="formsearch">
            <form action="">
              <input
                v-model="keyword"
                type="text"
                placeholder="หมายเลขใบสั่งซื้อหรือชื่อผู้ผลิต"
                id="input_text_nameproduct"
              />

              <select
                v-model="categoryId"
                name="categories"
                id="categories"
                class="filter_search"
              >
                <option value="" selected>รอชำระเงิน</option>
                <option
                  v-for="(item, index) in allCategories"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.categoryName }}
                </option>
              </select>

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
            <div class="formmanage">
              <input type="checkbox" id="checkbox1" checked />
              <label for="checkbox1" class="text_bold"
                >&nbsp;&nbsp;ดำเนินการ</label
              >
              <br /><br />

              <a href="addPurchaseorder">
                <Button variant="primary" class="mr-2 shadow-md" id="goldgd">
                  <Lucide icon="PlusCircle" class="block mx-auto" />
                  &nbsp; สร้างใบสั่งซื้อ
                </Button></a
              >
            </div>
            <br />
            <hr />
            <br />

            <div class="flex items-left justify-left" id="tag">
              <span class="flex items-left justify-left w-5 h-5">
                <Lucide icon="Printer" class="w-5 h-5" />
              </span>
              <span class="text_bold">&nbsp;&nbsp;พิมพ์</span>
            </div>
            <a href="">
              <Button variant="primary" class="mr-2 shadow-md" id="btn_delete">
                &nbsp; ใบสั่งซื้อ &nbsp;
                <span
                  class="text-sm px-1.5 rounded-full bg-dark text-white mr-1"
                  >5</span
                >
              </Button></a
            >
          </div>
          <br />

          <!-- table product -->
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <table>
              <thead>
                <tr>
                  <th>
                    <div
                      class="icheckbox_square-green"
                      style="position: relative"
                    >
                      <input type="checkbox" id="checkbox1" />
                      <ins></ins>
                    </div>
                  </th>
                  <th>รูปภาพ</th>
                  <th>ซัพพลายเออร์</th>
                  <th>คลังสินค้า</th>
                  <th>จัดส่งโดย</th>

                  <th>การชำระเงิน</th>
                  <th>ยอดสุทธิ</th>
                  <th>ชำระแล้ว</th>
                  <th>วันที่ใบสั่งซื้อ</th>
                  <th>ดำเนินการ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div
                      class="icheckbox_square-green"
                      style="position: relative"
                    >
                      <input type="checkbox" id="checkbox1" />
                      <ins></ins>
                    </div>
                  </td>

                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
         <!--end  tab 3 -->
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
