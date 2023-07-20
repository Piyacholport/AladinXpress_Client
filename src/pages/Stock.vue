<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";

import Button from "../base-components/Button";

import { FormInput, FormSelect } from "../base-components/Form";
import Lucide from "../base-components/Lucide";

import { Dialog, Menu } from "../base-components/Headless";

const deleteConfirmationModal = ref(false);
const setDeleteConfirmationModal = (value: boolean) => {
  deleteConfirmationModal.value = value;
};
const deleteButtonRef = ref(null);

const editStockModal = ref(false);
const seteditStockModal = (value: boolean) => {
  editStockModal.value = value;
};
const editStockButtonRef = ref(null);
</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class=" text-lg font-bold intro-y" id="">
      รายการสินค้า
    </h2>
    <br /><br />
    <div class="pc-tab">
      <input checked class="checked" id="tab1" type="radio" name="pct" />

      <nav>
        <ul class="ul">
          <li class="tab1" id="li_tab">
            <label for="tab1" class="label"
              >สินค้าคงคลัง &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-primary text-white mr-1"
                >5</span
              >
            </label>
          </li>
          <li class="" id="" style="float: right">
            <label for="" class="">
              <select name="" id="">
                <option value="">ทั้งหมด</option>
                <option value="">ระบบ</option>
              </select>
            </label>
          </li>
        </ul>
      </nav>
      <section>
        <!-- tab 1 -->
        <div class="tab1" id="li_tab">
          <div
            class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap"
          >
            <div class="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
              <!-- search input -->
              <div class="relative text-slate-500" id="input_search">
                <FormInput
                  type="text"
                  class="!box"
                  placeholder="ชื่อหมวดหมู่"
                  id="categories"
                />
              </div>
            </div>
            <!-- BEGIN:Filter search dropdown -->
            <select name="warehouse" id="categories" class="filter_search">
              <option value="all" disabled>เลือกคลังสินค้า</option>
              <option value="main">My ware house</option>
            </select>

            <select name="categories" id="categories" class="filter_search">
              <option value="all">ทุกประเภท</option>
              <option value="main">หมวดหมู่หลัก</option>
              <option value="sub">หมวดหมู่รอง</option>
            </select>
            <!--END: Filter search dropdown -->
            <Button variant="primary" class="mr-2 shadow-md" id="btn_search">
              ค้นหา &nbsp;<Lucide icon="Search" class="block mx-auto" />
            </Button>
          </div>
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <br /><br />
            <hr />
            <br />
            <table
              class="table-custom m-b-none kv-grid-table table table-bordered table-striped kv-table-wrap"
            >
              <thead>
                <tr>
                  <th>ร้านค้า</th>
                  <th>รูปภาพ</th>
                  <th>ชื่อสินค้า</th>
                  <th>ประเภทสินค้า</th>
                  <th>คลังสินค้า</th>
                  <th class="kv-align-center kv-align-middle" data-col-seq="2">
                    คงเหลือ
                  </th>
                  <th class="kv-align-center kv-align-middle" data-col-seq="2">
                    จอง
                  </th>

                  <th class="kv-align-center kv-align-middle" data-col-seq="4">
                    พร้อมขาย
                  </th>
                  <th class="kv-align-center kv-align-middle" data-col-seq="6">
                    สถานะ
                  </th>
                  <!-- <th class="kv-align-center kv-align-middle" data-col-seq="7">
                    ดำเนินการ
                  </th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in stockList" :key="index">
                  <td>System</td>
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
                      data-href="https://file.xcommerce.co.th/u1/default.png"
                    />
                  </td>
                  <td class="text-left">
                    {{ item.productName }}
                    <br />
                    <span class="m-r-xs" style="font-weight: bolder">SKU:</span
                    ><span style="font-weight: lighter">{{
                      item.productSKU
                    }}</span>
                  </td>

                  <td>
                    <p
                      class="status_product text-white"
                      style="background-color: #af0000"
                    >
                      {{ item.productType }}
                    </p>
                  </td>
                  <td>{{ item.warehouse.warehouseName }}</td>

                  <td class="kv-align-center kv-align-middle" data-col-seq="2">
                    {{ item.QTY }}
                  </td>
                  <td class="kv-align-center kv-align-middle" data-col-seq="6">
                    <p class="status_product text-dark">0</p>
                  </td>
                  <td class="kv-align-center kv-align-middle" data-col-seq="4">
                    <div
                      id="div_edit_stock"
                      class="flex items-center justify-center"
                      @click="
                        () => {
                          seteditStockModal(true);
                          getStockById(item.id);
                        }
                      "
                    >
                      <span class="flex items-center justify-center">
                        <Lucide icon="Edit" class="w-5 h-5 pt-1" />
                      </span>
                      <span> {{ item.QTY }}</span>
                    </div>
                    <!-- 10  <a
                                  class="a_gen_barcode"
                                  @click="
                                    () => {
                                      seteditBarcodeModal(true);
                                    }
                                  "
                                  > <Lucide icon="RotateCcw" class="w-4 h-4" /></a
                                > -->
                  </td>

                  <td class="kv-align-center kv-align-middle" data-col-seq="6">
                    <p class="status_product bg-warning text-dark">
                      สินค้าใกล้หมด
                    </p>
                  </td>
                  <!-- <td
                    class="kv-align-center kv-align-middle"
                    style="width: 15%"
                    data-col-seq="7"
                  > -->
                  <!-- <Button id="btn_booking_list">
                      <Lucide icon="RotateCcw" class="w-4 h-4" />
                      รายการจอง
                    </Button> -->
                  <!-- <button class="btn_booking_list"><Lucide icon="RotateCw" class="w-3 h-3" /> รายการจอง</button> -->
                  <!-- </td> -->
                </tr>
              </tbody>
            </table>
          </div>

          <br />
        </div>
        <!-- end tab 1 -->
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

  <!--M     O     D     A     L3-->
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
        <div class="mb-5 text-3xl">อัพเดทสต็อก สำเร็จ!</div>
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
  <Dialog
    :open="editStockModal"
    @close="
      () => {
        seteditStockModal(false);
      }
    "
    :initialFocus="editStockButtonRef"
  >
    <Dialog.Panel>
      <form action="">
        <div class="p-5">
          <div>
            <div class="">
              <span class="modal_head_text">แก้ไขสต๊อกสินค้า </span>
            </div>

            <hr />
            <br />

            <div class="table">
              <table>
                <thead>
                  <tr>
                    <th style="width: 160px; text-align: left">คลังสินค้า</th>
                    <th style="width: 80px">คงเหลือ</th>
                    <!-- <th style="width: 80px;">จอง</th> -->
                    <th style="width: 200px">พร้อมขาย</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="text-align: left">
                      {{ stockById && stockById.warehouse.warehouseName }}
                    </td>
                    <td style="">{{ stockById && stockById.QTY }}</td>
                    <!-- <td style="">0</td> -->
                    <td style="">
                      <form class="form_increase_decrease">
                        <div
                          class="value-button"
                          id="decrease"
                          onclick="decreaseValue()"
                          value="Decrease Value"
                        >
                          -
                        </div>
                        <input type="number" id="number" v-model="QTY" />
                        <div
                          class="value-button"
                          id="increase"
                          onclick="increaseValue()"
                          value="Increase Value"
                        >
                          +
                        </div>
                      </form>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="px-5 pb-8 text-center">
          <Button
            variant="danger"
            type="button"
            class="w-24 mr-2"
            ref="editStockButtonRef"
            @click="
              () => {
                updateStock(stockById.id);
                seteditStockModal(false);
              }
            "
          >
            ตกลง
          </Button>
          <Button
            variant="outline-secondary"
            type="button"
            @click="
              () => {
                seteditStockModal(false);
              }
            "
            class="w-24"
          >
            ยกเลิก
          </Button>
        </div>
      </form>
    </Dialog.Panel>
  </Dialog>

  <!--M     O     D     A     L3-->
</template>

<script lang="ts">
import axios from "axios";
import { useInventory } from "../stores/inventory";
const successModal = ref(false);
const setSuccessModal = (value: boolean) => {
  successModal.value = value;
};
export default {
  data() {
    return {
      baseUrl: `${import.meta.env.VITE_API_URL}`,
      stockById: "",

      stockList: [] as any[],
      deletedItems: [] as any[],
      categoryName: "",
      category: "all",
      loading: false,
      inventoryDetail: [] as any,
      inventoryId: 0,
      QTY: 0,
    };
  },
  methods: {
    loadInventory() {
      const inventory = useInventory();
      inventory.setInventory();
      this.inventoryDetail = [];

      inventory.getInventory.map((item: any) => {
        this.inventoryDetail.push(item);
      });
      this.inventoryId = this.inventoryDetail[0].id;
      console.log(this.inventoryDetail[0].id, ",,,,,,");
    },
    async getAllStock() {
      const inventoryId: number = parseInt(
        localStorage.getItem("currentInventoryId") as string
      );

      this.loading = true;
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const URL = `${import.meta.env.VITE_API_URL}/stock/getAllStock`.replace(
          " ",
          ""
        );
        const orders = await axios.post(
          URL,
          { inventoryId: this.inventoryId },
          { headers }
        );
        this.stockList = orders.data.data;
        console.log("channel = ", this.stockList);
      } catch (err) {
        console.log(err);
        this.loading = false;
        alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }
    },
    async updateStock(id: number) {
      console.log(id);
      this.loading = true;
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const URL = `${import.meta.env.VITE_API_URL}/stock/updateStock`.replace(
          " ",
          ""
        );
        const response = await axios.post(
          URL,
          { id: id, QTY: this.QTY },
          { headers }
        );
        if (response.data.code == 200) {
          setSuccessModal(true);
          this.$router.push("/dashboard/side-menu-stock");
          this.getAllStock();
        }
      } catch (error) {
        console.log(error);
        alert("ไม่สามารถเพิ่มลูกค้าได้ โปรดลองอีกครั้ง");
      }
    },
    addSuccess() {
      setSuccessModal(false);
      seteditStockModal(false);

      this.$router.push("/dashboard/side-menu-stock");
    },
    async getStockById(id: number) {
      this.stockById = "";
      this.loading = true;
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const URL = `${
          import.meta.env.VITE_API_URL
        }/stock/getStockById`.replace(" ", "");
        const orders = await axios.post(URL, { id: id }, { headers });
        this.stockById = orders.data.data;
        console.log("channel = ", this.stockById);
      } catch (err) {
        console.log(err);
        this.loading = false;
        alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }
    },
  },
  mounted() {
    this.getAllStock();
  },
  beforeMount() {
    // const inventory = useInventory()
    // inventory.setInventory()

    this.loadInventory();
  },
};
</script>
<style>
@import "..//assets/css/components/Categories.css";
@import "..//assets/css/components/tab.scss";
@import "..//assets/css/components/tab.css";
</style>
