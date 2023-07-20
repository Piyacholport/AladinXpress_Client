<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";

import Button from "../base-components/Button";

import { FormInput } from "../base-components/Form";
import Lucide from "../base-components/Lucide";

import { Dialog, Menu } from "../base-components/Headless";

import TinySlider, { TinySliderElement } from "../base-components/TinySlider";
import Litepicker from "../base-components/Litepicker";

const salesReportFilter = ref<string>("");
const importantNotesRef = ref<TinySliderElement>();
provide("bind[importantNotesRef]", (el: TinySliderElement) => {
  importantNotesRef.value = el;
});

const deleteConfirmationModal = ref(false);
const setDeleteConfirmationModal = (value: boolean) => {
  deleteConfirmationModal.value = value;
};

const isOpen = ref(false);

function setIsOpen(value: boolean) {
  event?.preventDefault();
  isOpen.value = value;
}
</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class="mr-auto text-lg font-bold" id="">การจัดส่ง - การจัดส่งสินค้า</h2>
    <div class="intro-y">
      <form action="">
        <div class="flex items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
          <div class="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
            <!-- BEGIN:Filter search dropdown -->
            <div class="relative text-slate-500 mt-5" id="">
              <FormInput
                type="text"
                class="w-56 h-10"
                placeholder="ค้นหา"
                id="categories"
                v-model="paramsQuery.keyword"
                @keydown.enter.prevent="search"
              />
            </div>
          </div>

          <div
            class="flex ml-3 h-10 mr-3 mt-1"
            style="
              box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
              border-radius: 6px;
            "
          >
            <div
              class="h-10 z-30 flex items-center justify-center w-10 bg-slate-100 text-slate-600 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"
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
              class="pl-1 sm:w-50 !box h-9"
            />
          </div>
          <Button
         
          class="mr-3 shadow-md bg-[#af0000] text-white h-10"
       
         
        >
          ค้นหา &nbsp;<Lucide icon="Search" class="block mx-auto w-4 h-4" />
        </Button>

        <Button
          variant="secondary"
          class="mr-3 shadow-md  h-10"
       disabled
         
        >
          ค้นหาแบบละเอียด &nbsp;<Lucide icon="Search" class="block mx-auto w-4 h-4" />
        </Button>
          <!--END: Filter search dropdown -->
        </div>
        <br />
      </form>
    </div>
    <div class="w-full  overflow-x-scroll -mt-4">

   

            <div >
  
  <div class="flex flex-wrap items-center col-span-12  intro-y sm:flex-nowrap">
            <!-- menu1 -->
            <div class="mr-3 mt-2">
              <Menu class="inline-block mb-2 mr-1">
                <Menu.Button :as="Button" variant="outline" class="w-36">
                  เลือกทำทั้งหมด
                  <Lucide icon="ChevronDown" class="w-4 h-4 ml-2" />
                </Menu.Button>
                <Menu.Items class="w-60" placement="bottom-start">
                  <Menu.Item
                    >ส่งออกรายการสั่งซื้อ
                    <span
                      class="px-1 mr-1 text-xs text-white rounded-full bg-warning ml-3"
                      >0</span
                    ></Menu.Item
                  >
                  <Menu.Item
                    >ส่งออก ข้อมูลยอดขาย<span
                      class="px-1 mr-1 text-xs text-white rounded-full bg-warning ml-3"
                      >0</span
                    ></Menu.Item
                  >
                  <Menu.Item
                    >ส่งออก kerry Easyship
                    <span
                      class="px-1 mr-1 text-xs text-white rounded-full bg-warning ml-3"
                      >0</span
                    ></Menu.Item
                  >
                  <Menu.Item>ยกเลิก</Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
            <!-- menu2 -->
            <div class="mr-3">
              <Menu>
                <Menu.Button :as="Button" variant="outline" class="w-40">
                  <Lucide icon="Printer" class="w-4 h-4 mr-2" />
                  พิมพ์เอกสาร
                  <Lucide icon="ChevronDown" class="w-4 h-4 ml-2" />
                </Menu.Button>
                <Menu.Items class="w-80">
                  <Menu.Header>Export Tools</Menu.Header>
                  <Menu.Divider />
                  <Menu.Item>
                    <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                    ใบเสนอราคา
                    <div
                      class="px-1 ml-auto text-xs text-white rounded-full bg-danger"
                    >
                      0
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                    ใบเสร็จ
                    <div
                      class="px-1 ml-auto text-xs text-white rounded-full bg-danger"
                    >
                      0
                    </div>
                  </Menu.Item>

                  <Menu.Item>
                    <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                    ใบจ่าหน้าพัสดุ
                    <div
                      class="px-1 ml-auto text-xs text-white rounded-full bg-danger"
                    >
                      0
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                    ใบขนส่ง
                    <div
                      class="px-1 ml-auto text-xs text-white rounded-full bg-danger"
                    >
                      0
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                    ใบจ่าหน้าพัสดุ Drop Off
                    <div
                      class="px-1 ml-auto text-xs text-white rounded-full bg-danger"
                    >
                      0
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                    ใบจ่าหน้าพัสดุ Kerry Easyship
                    <div
                      class="px-1 ml-auto text-xs text-white rounded-full bg-danger"
                    >
                      0
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                    ใบนำฝากรวม
                    <div
                      class="px-1 ml-auto text-xs text-white rounded-full bg-danger"
                    >
                      0
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                    ใบแจ้งหนี้
                    <div
                      class="px-1 ml-auto text-xs text-white rounded-full bg-danger"
                    >
                      0
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                    รายการสำหรับการจัดเตรียมสินค้า
                    <div
                      class="px-1 ml-auto text-xs text-white rounded-full bg-danger"
                    >
                      0
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                    รายการสำหรับการจัดเตรียมสินค้า แยกตามสินค้า
                    <div
                      class="px-1 ml-auto text-xs text-white rounded-full bg-danger"
                    >
                      0
                    </div>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>

            <!-- menu3 -->
            <div class="mr-3">
              <a href="">
                <Button @click="setIsOpen(true)" class="w-28">
                  <Lucide icon="Truck" class="mr-2 w-4 h-4" />
                 เรียกรถ
                </Button></a
              >
            </div>
            <Dialog :open="isOpen" @close="setIsOpen">
              <Dialog.Panel
                class="sm:w-[600px] lg:w-[900px] p-5"
                style="height: 500px"
              >
                <div>
                  <div class="mt-5 flex items-center">
                    <Lucide icon="Truck" class="mr-2" />
                    <p>เรียกรถ</p>
                  </div>
                  <div class="box mt-5 p-10">
                    <div>
                      <p>ข้อมูลที่อยุ่ร้าน</p>
                    </div>
                    <div class="mt-5 flex flex-wrap">
                      <div class="mr-5 flex flex-col">
                        <FormLabel>ชื่อร้าน</FormLabel>
                        <FormInput
                          v-model="inventoryDetail[0].shop.shopName"
                          class="w-[231px]"
                          disabled="true"
                        />
                      </div>

                      <div class="mr-5 flex flex-col">
                        <FormLabel>จังหวัด</FormLabel>
                        <FormInput
                          v-model="inventoryDetail[0].shop.provinceName"
                          class="w-[230px]"
                          disabled="true"
                        />
                      </div>

                      <div class="mr-5 flex flex-col">
                        <FormLabel>เมือง</FormLabel>
                        <FormInput
                          v-model="inventoryDetail[0].shop.cityName"
                          class="w-[230px]"
                          disabled="true"
                        />
                      </div>

                      <div class="mr-5 flex flex-col">
                        <FormLabel>อำเภอ</FormLabel>
                        <FormInput
                          v-model="inventoryDetail[0].shop.districtName"
                          class="w-[230px]"
                          disabled="true"
                        />
                      </div>

                      <div class="mr-5 flex flex-col">
                        <FormLabel>รหัสไปรษณีย์</FormLabel>
                        <FormInput
                          v-model="inventoryDetail[0].shop.postalCode"
                          class="w-[230px]"
                          disabled="true"
                        />
                      </div>

                      <div class="flex flex-col">
                        <FormLabel>รายละเอียดที่อยุ่</FormLabel>
                        <FormInput
                          v-model="inventoryDetail[0].shop.addressDetail"
                          class="w-[230px]"
                          disabled="true"
                        />
                      </div>

                      <div class="flex flex-col">
                        <FormLabel>จำนวนสินค้า</FormLabel>
                        <FormInput
                          v-model="amount"
                          class="w-[230px]"
                          placeholder="จำนวนสินค้า"
                        />
                      </div>
                    </div>
                    <div class="flex justify-end w-full mr-10">
                      <Button
                        @click="getCourier()"
                        variant="primary"
                        class="shadow-md"
                        id="btn_search"
                      >
                        <Lucide icon="Car" class="block mx-auto" /> &nbsp;
                        เรียกรถ
                      </Button>
                      <Button
                        @click="setIsOpen(false)"
                        variant="primary"
                        class="shadow-md"
                        id="btn_search"
                      >
                        <Lucide icon="X" class="block mx-auto" /> &nbsp;
                        ยกเลิก
                      </Button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>

            <!-- menu4 -->
            <div class="mr-3 mt-2">
              <Menu class="inline-block mb-2 mr-1">
                <Menu.Button :as="Button" variant="outline" class="w-48">
                  เปลี่ยนสถานะพิมพ์ / SMS
                  <Lucide icon="ChevronDown" class="w-4 h-4 ml-2" />
                </Menu.Button>
                <Menu.Items class="w-60" placement="bottom-start">
                  <Menu.Item>
                    <Lucide icon="Printer" class="w-4 h-4 mr-2" />
                    ยกเลิกสถานะพิมพ์เอกสาร
                    <div
                      class="px-1 ml-auto text-xs text-white rounded-full bg-danger"
                    >
                      0
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="MessageCircle" class="w-4 h-4 mr-2" />
                    ยกเลิกสถานะส่งข้อความ SMS
                    <div
                      class="px-1 ml-auto text-xs text-white rounded-full bg-danger"
                    >
                      0
                    </div>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
            <!-- menu5 -->
            <div class="mr-3 mt-2">
              <Menu class="inline-block mb-2 mr-1">
                <Menu.Button :as="Button" variant="outline" class="w-32">
                  สแกนบาร์โค้ด
                  <Lucide icon="ChevronDown" class="w-4 h-4 ml-2" />
                </Menu.Button>
                <Menu.Items class="w-60" placement="bottom-start">
                  <Menu.Item>
                    <Lucide icon="Truck" class="w-4 h-4 mr-2" />
                    บันทึกหมายเลขแทร็คกิ้ง
                    <div
                      class="px-1 ml-auto text-xs text-white rounded-full bg-danger"
                    >
                      0
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="Package" class="w-4 h-4 mr-2" />
                    ตรวจสอบสินค้า
                    <div
                      class="px-1 ml-auto text-xs text-white rounded-full bg-danger"
                    >
                      0
                    </div>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
            <!-- menu6 -->
            <div class="mr-3">
              <a href="">
                <Button class="w-44">
                  <Lucide
                    icon="MessageCircle"
                    class="block mx-auto w-4 h-4"
                  />
                  &nbsp; ส่ง SMS เลขพัสดุ
                  <div
                    class="px-1 ml-3 text-xs text-white rounded-full bg-danger"
                  >
                    0
                  </div>
                </Button></a
              >
            </div>
            <!-- menu7 -->
            <div class="mr-3">
              <a href="">
                <Button class="w-32">
                  <Lucide icon="CheckCircle" class="block mx-auto w-4 h-4" />
                  &nbsp; สำเร็จ
                  <div
                    class="px-1 ml-3 text-xs text-white rounded-full bg-danger"
                  >
                    0
                  </div>
                </Button></a
              >
            </div>
          </div>
</div>
          <br />
          <hr />
          <br />
       
      <!-- <div class="overflow-x-scroll">
        <p>
          ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        </p>
      </div> -->
    </div>
    <br /><br />
    <div class="pc-tab">
      <input checked class="checked" id="tab1" type="radio" name="pct" />
      <input id="tab2" type="radio" name="pct" />
      <input id="tab3" type="radio" name="pct" />
      <nav>
        <ul class="ul">
          <li class="tab1" id="li_tab">
            <label for="tab1" class="label"
              >คำสั่งซื้อ &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-primary text-white mr-1"
                >{{ productItems.length }}</span
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
                      <th class="whitespace-nowrap">
                        <input
                          type="checkbox"
                          v-model="isSelectAll"
                          @change="selectAll"
                        />
                      </th>

                      <th class="whitespace-nowrap">ช่องทาง</th>
                      <th class="whitespace-nowrap">รูปภาพ</th>
                      <th class="whitespace-nowrap">หมายเลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">โทรศัพท์</th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">บริการขนส่ง</th>
                      <th class="whitespace-nowrap">หมายเลขแทร็คกิ้ง</th>
                      <th class="whitespace-nowrap">พิมพ์เอกสาร</th>

                      <th class="whitespace-nowrap">ใบจ่าหน้า</th>
                      <th class="whitespace-nowrap">ข้อความ SMS</th>
                      <th class="whitespace-nowrap">ราคาค่าจัดส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งหนี้</th>
                      <th class="whitespace-nowrap">จำนวน</th>
                      <th class="whitespace-nowrap">ยอดรวม</th>
                      <th class="whitespace-nowrap">วันที่แพ็คสินค้า</th>
                      <th class="whitespace-nowrap">วันที่ส่งสินค้า</th>
                      <th class="whitespace-nowrap">วันที่สั่งซื้อ</th>

                      <th class="whitespace-nowrap">
                        <span style="width: 110px">ดำเนินการ</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in productItems" :key="item.id">
                      <td>
                        <input
                          class="mt-[25px]"
                          type="checkbox"
                          v-model="selectedItems"
                          :value="item"
                        />
                      </td>
                      <td><Lucide icon="Facebook" /></td>
                      <td><Lucide icon="Image" /></td>
                      <td>{{ item.id }}</td>
                      <td>{{ item.customer.customerName }}</td>
                      <td>{{ item.customer.telephone }}</td>
                      <td>
                        <span class="text-l px-1 bg-success text-white mr-1">{{
                          checkState(item.state)
                        }}</span>
                      </td>
                      <td>{{ item.bankTransfer.nickName }}</td>
                      <td>
                        <span class="px-1 bg-yellow text-white mr-1">{{
                          item.delivery
                        }}</span>
                      </td>
                      <td>{{ item.pno }}</td>
                      <td>ทดสอบ</td>
                      <td>ทดสอบ</td>
                      <td>ทดสอบ</td>
                      <td>ทดสอบ</td>
                      <td>ทดสอบ</td>
                      <td>{{ item.amount }}</td>
                      <td>
                        {{
                          Number(item.amount) *
                          Number(item.productForOrder[0].product.unitPrice)
                        }}
                      </td>
                      <td
                        class="date"
                        style="
                          width: 100px !important;
                          border-bottom: none;
                          margin-top: 10px;
                        "
                      >
                        <div class="flex items-center justify-center">
                          <span class="flex items-center justify-center">
                            <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                          </span>
                          <span>{{ formatDate(item.packDate) }}</span>
                        </div>
                      </td>

                      <td
                        class="date"
                        style="
                          width: 100px !important;
                          border-bottom: none;
                          margin-top: 10px;
                        "
                      >
                        <div class="flex items-center justify-center">
                          <span class="flex items-center justify-center">
                            <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                          </span>
                          <span>{{ formatDate(item.deliveryDate) }}</span>
                        </div>
                      </td>

                      <td
                        class="date"
                        style="
                          width: 100px !important;
                          border-bottom: none;
                          margin-top: 12px;
                        "
                      >
                        <div class="flex items-center justify-center">
                          <span class="flex items-center justify-center">
                            <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                          </span>
                          <span>{{ formatDate(item.createdDate) }}</span>
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
import { OrderType } from "../models/orders.model";
import { useInventory } from "../stores/inventory";

const Inventory = useInventory();

export default {
  data() {
    return {
      categories: [] as any[],
      deletedItems: [] as any[],
      categoryName: "",
      category: "all",
      loading: false,
      productItems: [] as OrderType[],
      selectedItems: [] as OrderType[],
      isSelectAll: false,
      inventoryDetail: [] as any,
      amount: 0,
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
    };
  },
  computed: {
    totalValue() {
      if (this.selectedItems.length > 0) {
        return _.sumBy(this.selectedItems, "amount");
      } else {
        return 0;
      }
    },
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
          `${import.meta.env.VITE_API_URL}/category/search?categoryName=${
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
      this.categories.splice(id, 1);
      const response: any = await axios.delete(
        `${import.meta.env.VITE_API_URL}/category/delete/${id}`,
        { headers }
      );
      if (response.data.code === 200) {
        alert("ลบรายการสำเร็จ");
      }
      this.deletedItems.push(id);
    },
    async getAllOrder() {
      const URL = `${import.meta.env.VITE_API_URL}/order/getAllOrder`.replace(
        " ",
        ""
      );
      const result = await axios.post(URL);
      this.productItems = result.data.orders;
    },
    selectAll() {
      if (this.isSelectAll) {
        this.selectedItems = this.productItems;
      } else {
        this.selectedItems = [];
      }
    },
    async getCourier() {
      const URL = `${import.meta.env.VITE_API_URL}/order/notifyCourier`.replace(
        " ",
        ""
      );
      if (Number(this.amount) !== 0) {
        const getCourierData = {
          inventoryId: this.inventoryDetail[0].id,
          amount: Number(this.amount),
        };
        const res = await axios.post(URL, getCourierData);
        alert(res.data.message);
      } else {
        alert("กรุณาในจำนวนสินค้า");
      }
    },
    checkState(state: string) {
      if (state === "0") {
        return "None";
      } else if (state === "1") {
        return "Picked up";
      } else if (state === "2") {
        return "In Transit";
      } else if (state === "3") {
        return "On Delivery";
      } else if (state === "4") {
        return "Detained";
      } else if (state === "5") {
        return "Delivered";
      } else if (state === "6") {
        return "Problematic Provessing";
      } else if (state === "7") {
        return "Returned";
      } else if (state === "8") {
        return "Closed";
      } else if (state === "9") {
        return "Cancelled";
      }
    },
    async setInventoryDetail() {
      await Inventory.setInventory();
      const getInventoryDetail = await Inventory.getInventory;
      getInventoryDetail.map((item: any) => {
        this.inventoryDetail.push(item);
      });
      console.log(this.inventoryDetail[0].shop.shopName);
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
  },
  mounted() {},
  beforeMount() {
    this.getAllOrder();
    this.setInventoryDetail();
  },
};
</script>

<style>
@import "..//assets/css/components/tab.scss";
@import "..//assets/css/components/tab.css";
@import "..//assets/css/components/Deliveryofproduct.css";
@media screen and (min-width: 768px) {
  .divoverflow {
    width: 80%;
    height: 200px;
    overflow-x: scroll;
  }
}

@media screen and (max-width: 767px) {
  .divoverflow {
  }
}
</style>
