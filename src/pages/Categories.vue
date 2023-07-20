<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";

import Button from "../base-components/Button";

import { FormInput} from "../base-components/Form";
import Lucide from "../base-components/Lucide";

import { Dialog,Menu} from "../base-components/Headless";


</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class="mr-auto text-lg font-bold" id="">หมวดหมู่</h2>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap"
      >
      <div class="w-full  sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
          <!-- search input -->
          
          <div class="relative w-56 text-slate-500 mt-5" id="" >
            <FormInput
            v-model="categoryName"
              type="text"
              class="w-56  !box"
              placeholder="ชื่อหมวดหมู่"
              id="categories"
              @keydown.enter="searchCategory()"
            />
          </div>
        </div>

        <!-- BEGIN:Filter search dropdown -->
        <select
          v-model="category"
          name="categories"
          id="categories"
          class="filter_search"
        >
          <option value="all">ทุกประเภท</option>
          <option value="main">หมวดหมู่หลัก</option>
          <option value="sub">หมวดหมู่รอง</option>
        </select>
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
      <!-- BEGIN: Data List -->
      <div class="col-span-12 overflow-auto intro-y lg:overflow-visible">
        <div class="hidden mx-auto md:block text-slate-500">
          Showing 1 to 10 of 150 entries
        </div>
        <br />
        <a href="addCategory">
          <Button variant="primary" class="mr-2 shadow-md" id="goldgd">
            <Lucide icon="PlusCircle" class="block mx-auto" />
            &nbsp; เพิ่มหมวดหมู่สินค้า
          </Button></a
        >
        <br /><br />

        <table class="table">
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>รูปภาพ</th>
              <th>ชื่อ</th>
              <th>รายละเอียดหมวดหมู่สินค้า</th>
              <!-- <th>คลัง</th> -->
              <th>จัดการ</th>
            </tr>
          </thead>
          <tbody id="detail">
            <tr v-for="(item, index) in categories" :key="index">
              <template v-if="!deletedItems.includes(item.id)">
                <td>{{ index + 1 }}</td>
                <td>
                  <div class="img">
                    <img
                      :src="baseUrl + '/'+ item.categoryImages"
                      alt=""
                      class="manage_img"
                    />
                  </div>
                </td>
                <td>{{ item.categoryName }}</td>
                <td>{{ item.categoryDescription }}</td>
                <!-- <td>
                  <div class="flex items-center justify-center">
                    <span class="flex items-center justify-center w-5 h-5">
                      <Lucide icon="Package" class="w-4 h-4" />
                    </span>
                    <span>2</span>
                  </div>
                </td> -->
                <td>
                  <div class="flex items-center justify-center">
                    <Menu>
                      <Menu.Button :as="Button" class="px-2 !box">
                        <span class="flex items-center justify-center w-5 h-5">
                          <Lucide icon="MoreVertical" class="w-4 h-4" />
                        </span>
                      </Menu.Button>
                      <Menu.Items class="w-40">
                        <Menu.Item>
                          <Lucide icon="Eye" class="w-4 h-4 mr-2" /> ดูรายการ
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon="Edit3" class="w-4 h-4 mr-2" />
                          แก้ไขรายการ
                        </Menu.Item>
                        <Menu.Item @click="deleteCategory(item.id)">
                          <Lucide icon="Trash2" class="w-4 h-4 mr-2" /> ลบรายการ
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                </td>
                <!-- delete customer modal -->
                <Dialog
                  :open="deleteConfirmationModal"
                  @close="
                    () => {
                      setDeleteConfirmationModal(false);
                    }
                  "
                  :initialFocus="deleteButtonRef"
                >
                  <Dialog.Panel>
                    <div class="p-5 text-center">
                      <Lucide
                        icon="AlertCircle"
                        class="w-16 h-16 mx-auto mt-3 text-danger"
                      />
                      <div class="mt-5 text-3xl">
                        คุณต้องการจะลบรายชื่อลูกค้านี้?
                      </div>
                      <div class="mt-2 text-slate-500">
                        หากลบลูกค้านี้
                        ระบบจะนำลูกค้านี้ออกจากรายชื่อลูกค้าโดยทันที!
                      </div>
                    </div>
                    <div class="px-5 pb-8 text-center">
                      <Button
                        variant="danger"
                        type="button"
                        class="w-24 mr-2"
                        ref="deleteButtonRef"
                        @click.prevent="deleteCategory(item.id)"
                      >
                        ตกลง
                      </Button>
                      <Button
                        variant="outline-secondary"
                        type="button"
                        @click="
                          () => {
                            setDeleteConfirmationModal(false);
                          }
                        "
                        class="w-24"
                      >
                        ยกเลิก
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Dialog>

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
                      <div class="mb-5 text-3xl">
                        ลบ {{ item.customerName }} สำเร็จ!
                      </div>
                      <Button
                        variant="outline-secondary"
                        type="button"
                        @click.prevent="deleteSuccess"
                      >
                        ตกลง
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Dialog>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- END: Data List -->
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
    </select>
  </div>
  <!-- END: Pagination -->
</template>

<script lang="ts">
import axios from "axios";
//delete modal
const deleteConfirmationModal = ref(false);
const setDeleteConfirmationModal = (value: boolean) => {
  deleteConfirmationModal.value = value;
};
const deleteButtonRef = ref(null);

//success modal
const successModal = ref(false);
const setSuccessModal = (value: boolean) => {
  successModal.value = value;
};
import { useUser } from "../stores/user";
import { useInventory } from '../stores/inventory'
const Inventory = useInventory();

export default {
  data() {
    return {
      baseUrl: `${import.meta.env.VITE_API_URL}`,
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
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      try {
        this.loading = true;
      const URL = (
          `${import.meta.env.VITE_API_URL}/category/search?categoryName=${
            this.categoryName
          }&category=${this.category}`).replace(" ","")

        const categories = await axios.post(URL,
          {
            inventoryId: this.inventoryId,
          },
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
      

      const URL = (`${import.meta.env.VITE_API_URL}/category/delete/${id}`).replace(" ","")


      const response: any = await axios.delete(URL,
        { headers }
      );
      if (response.data.code === 200) {
        setSuccessModal(true);
      }
      this.deletedItems.push(id);
    },
    deleteSuccess(){
      setSuccessModal(false);
    },
  },
  mounted() {
    this.searchCategory();
  },
};
</script>

<style>
#pagination_select {
  float: right;
  border: none !important;
}
#head_text {
  font-weight: bolder;
  font-size: 20px;
}
.manage_img {
  width: 80px;
}
#categories,
#input_search {
  border: 1px solid #ccc;
  border-radius: 6px;
}
.filter_search {
  margin-left: 8px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
}
#btn_search {
  font-size: 14px;
  margin-left: 8px;
  background-color: #af0000;
  color: white;
  border: none;
}

table {
  background-color: #fff !important;
  width: 100%;
}
tbody {
  text-align: center;
}
tbody tr:nth-child(odd) {
  background-color: #fff;
}
tbody tr:nth-child(even) {
  background-color: #f1f5f9;
}
body {
  font-family: "Prompt" !important;
  font-weight: 400;
}
.top-bar {
  background: #af0000;
  border-radius: 20px;
  margin-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
}
.dropdown-content {
  background-color: #fff;
}
.content {
  background: white;
  padding: 1rem 1rem;
  border-radius: 20px;
  height: auto;
  /* background: linear-gradient(90deg, rgba(255,252,224,1) 0%, rgba(255,239,194,1) 46%, rgba(255,231,169,1) 100%); */
}
a {
  color: #af0000;
}
dl,
ol,
ul {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
ol,
ul {
  padding-left: 0px !important;
}
/*  header */
img.logoimg {
  border-radius: 50%;
  max-width: 40px;
  height: auto;
  border: 1px solid #ccc;
}
.black {
  color: #000;
}
.yellow {
  color: #fcf4a3;
}
.f-left {
  position: relaitve;
  float: right;
  text-align: right;
}
.f-left svg {
  margin-right: 5px;
}
.bold {
  font-weight: bold;
}
.text-primary {
  color: #af0000;
}
.side-nav .side-menu {
  color: #000;
}
.side-nav > ul ul li a:not(.side-menu--active) {
  color: #000;
}
.side-menu--active svg {
  color: #000 !important;
  stroke: #000;
}
.whitespace {
  background-color: #fff !important;
}
#notify-wrapper {
  background-color: red;
  color: #fff;
  padding: 7px;
  text-align: center;
  border-radius: 10px;
  display: none;
}
.side-nav .side-nav__devider {
  background-color: #b9b9b9;
  opacity: 0.3 !important;
}
.side-menu__title {
  color: #313131;
}
a.side-menu:hover {
  background-color: #af0000;
  color: #fff !important;
}
.side-menu:hover .side-menu__title {
  color: #fff !important;
}
.side-menu--active .side-menu__icon svg {
  stroke: #000;
}

a.side-menu:hover .side-menu__icon svg {
  stroke: #fff;
}
a.dropdown-item {
  color: #000 !important;
}
.side-menu__icon svg {
  stroke: #313131;
}
.side-nav .side-menu {
  height: 44px;
}
#brand-wrapper {
  margin-bottom: 20px;
}
.side-menu--active:hover .side-menu__title {
  color: #000 !important;
}
.side-menu--active:hover .side-menu__icon svg {
  stroke: #000 !important;
}
.side-nav > ul > li > .side-menu.side-menu--active:before {
  width: 25px;
  height: 25px;
  margin-top: -25px;
}
.side-nav > ul > li > .side-menu.side-menu--active:after {
  width: 25px;
  height: 25px;
  margin-top: 40px;
}
ul.bg-white {
  background-color: #fff;
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
.side-menu__sub-open {
  background-color: #fff;
}
.side-nav ul ul {
  background-color: #fff;
}
.whitebg {
  background-color: #fff;
}
.container {
  padding: 20px;
  border-radius: 20px;
}
.gdbd {
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, #fedb37, #9f7928, #8a6e2f);
}
.nobd.report-box-2:before {
  background: none;
}
li.orderall button {
  font-size: 18px;
  margin-right: 20px !important;
}
.nav.nav-boxed-tabs .nav-item .nav-link.active {
  background-color: #af0000;
}
.nav-item .nav-link {
  border: 1px solid #ccc;
  margin-right: 6px !important;
  font-weight: bold;
  letter-spacing: 0.7px;
}
.nav-item {
  margin-right: 4px;
}
.nav-item button {
  padding: 13px;
}
.nav-item .nav-link:hover {
  background-color: #ccc;
}
.filter input {
  border: 1px solid #ccc;
  color: #666;
  font-size: 14px;
  padding: 10px 14px;
}
.t-1 {
  opacity: 0.5;
}
#filtertab {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(238, 238, 238, 1) 46%,
    rgba(241, 241, 241, 1) 100%
  );
}
.maincontent {
  margin-top: 20px;
}
.listcontent {
  border-top: 1px solid #e7eaec;
  padding-top: 10px;
}
.listcontent h1 {
  font-size: 16px;
  font-weight: bold;
}
/* grid */

.col-span-9 {
  grid-column: span 9 / span 9;
}
.col-span-7 {
  grid-column: span 7 / span 7;
}
.col-span-10 {
  grid-column: span 10 / span 10;
}

/* table */
table,
th,
tr,
td {
  border-bottom: 1px solid #ccc;
  padding: 0.3rem 0.3rem;
}
span.w100 {
  display: block;
  width: 100px;
}
td.date {
  font-size: 11px;
}
td.date i {
  font-size: 7px;
}
i.inline {
  display: inline-block;
  margin-right: 5px;
}
td svg {
  margin-right: 5px;
}
.bg-yellow {
  background-color: yellow !important;
  color: #000;
}
.op6 th {
  opacity: 0.6;
  background-color: #f3f3f3;
}
.op6 th.op10 {
  opacity: 1;
}
.breadcrumb a {
  color: #fff;
  opacity: 0.7;
}
h2 {
  font-size: 17px;
  font-weight: bold;
  letter-spacing: 0.3px;
}
h3 {
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0.3px;
  position: relative;
  display: block;
  margin-bottom: 15px;
}

.space {
  display: block;
  width: 100%;
  border-top: 1px solid #e7eaec;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 30px;
}
#btitle {
  position: relative;
  top: 20px;
}
.form1 input,
.form1 select,
.form1 textarea {
  border: 1px solid #ccc;
}
#paymentconfirm {
  border: 1px solid #ccc;
  padding: 12px;
}
#paymentbox {
  margin-top: 20px;
  border: 1px dotted red;
  padding: 20px;
  background-color: #f4f4f4;
}
#preorder {
  margin-right: 10px;
  padding: 12px;
  border: 1px solid #ccc;
}
.form-check-input[type="checkbox"]:checked {
  background-color: #af0000 !important;
}

.litepicker .container__footer .button-apply {
  background-color: #af0000 !important;
}
#carttotal .grid {
  border-bottom: 1px solid #e7eaec;
  padding-bottom: 10px;
  padding-top: 10px;
}
#carttotal input {
  max-width: 100%;
  width: 100%;
}
.litepicker .container__days .day-item.is-start-date,
.litepicker .container__days .day-item.is-start-date:hover,
.litepicker .container__days .day-item.is-end-date,
.litepicker .container__days .day-item.is-end-date:hover {
  background-color: #af0000 !important;
}
.container {
  padding-bottom: 40px;
}

/* Checkout Steps */

/* The container */
.radio-container {
  display: block;
  position: relative;
  padding-left: 24px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.radio-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  background-color: #ffffff;
  border: 1px solid #bababa;
  border-radius: 50%;
  margin-top: 5px;
}

/* When the radio button is checked, add a blue background */
.radio-container input:checked ~ .checkmark {
  background-color: #2271ff;
  border: 1px solid #2271ff;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio-container .checkmark:after {
  top: 4px;
  left: 4px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: white;
}

.sub-plan {
  width: 100%;
  margin: 0px;
  padding: 0px;
  background-color: #ffffff;
  border-bottom: 1px solid #9f9f9f;
}

#regForm {
  background-color: #ffffff;
  margin: 0px auto;
  font-family: Open Sans, sans-serif;
  padding: 16px;
  width: 70%;
  min-width: 300px;
  max-width: 400px;
}

input {
  -webkit-appearance: none;
  box-shadow: none !important;
  padding: 12px 10px;
  margin: 4px auto 24px auto;
  font-size: 16px;
  font-family: Open Sans, sans-serif;
  border: 1px solid #aaaaaa !important;
  border-radius: 3px;
  background-color: #ffffff;
}
input.invalid {
  border: 1px solid #ff0017;
}

.text-input input {
  width: 100%;
  min-height: 48px;
}

.otherinput input {
  margin-bottom: 8px;
}

.tab {
  display: none;
}
.tab h1 {
  padding: 0px 0px 10px 0px;
}
.tab hr {
  margin-bottom: 22px;
}

.smalltext {
  font-size: 12px;
  padding-top: 8px;
}
.smalltext img {
  height: 48px;
  opacity: 0.5;
  margin-top: -4px;
}

button.progressbutton {
  background-color: #2271ff;
  border-radius: 3px;
  color: #ffffff;
  border: 1px solid #2271ff;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 700;
  font-family: Open Sans, sans-serif;
  cursor: pointer;
  width: 100%;
  margin: -8px auto 20px auto;
}
button.addressline {
  font-family: Open Sans, sans-serif;
  padding: 0px;
  font-size: 14px;
  margin-bottom: 8px;
  border: none;
  background-color: #ffffff;
  text-decoration: underline;
  color: #2271ff;
  cursor: pointer;
}

#addressLine2 {
  display: none;
}

#city-state {
  display: block;
}

.stepwizard-row {
  display: table-row;
}

.progress-line {
  width: 200px;
  margin: -39px auto 56px auto;
  text-align: center;
  height: 1px;
  background-color: #cccccc;
  position: relative;
  z-index: -99;
  top: 0px;
  bottom: 0;
  float: center;
}

.progress-bar {
  text-align: center;
  margin: 20px auto;
}
.progress-bar {
  display: block !important;
  height: 5px;
  background-color: #e7eaec;
}
.checkout-elements {
  margin-top: 50px;
}
.badge {
  background: #af0000;
  color: #fff;
  padding: 10px;
}
.step {
  position: relative;
  z-index: 10;
  position: relative;
  top: -25px;
  background-color: #cacaca;
  height: 50px;
  width: 50px;
  margin: 0 60px;
  opacity: 1;
  display: inline-block;
  border-radius: 50%;
}
.step.active {
  opacity: 1;
  background-color: #000000 !important;
}
.editblock .block {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.step.active a {
  color: #ffffff !important;
}
.editblock svg {
  position: relative;
  float: left;
  display: inline-block;
  margin-right: 10px;
}
.editblock br {
  display: block;
  height: 2px;
  position: relative;
}
.step.active p {
  color: #000000 !important;
}
.editblock {
  margin-top: 50px;
}
.step.finish {
  background-color: #ffffff;
  border: 1px solid #000000;
  opacity: 1;
  cursor: pointer;
  content: "2713";
}
.step.finish p {
  color: #000000 !important;
}
.step.finish a {
  color: #000000 !important;
}

.step-number a {
  font-family: "Prompt";
  color: #ffffff !important;
  line-height: 2.2em;
  border: none;
}

.step-name {
  text-align: center !important;
  margin: auto;
  position: absolute;
  top: 55px;
  left: -40px;
  width: 140px;
}
.step-number a {
  position: relative;
  top: 14px;
}
.step-name p {
  font-family: "Prompt";
  font-size: 14px;
  color: #aaaaaa !important;
  text-align: center !important;
  margin: 5px auto 0px auto;
}

.footer {
  margin: 0px auto;
  padding: 30px 16px;
  font-size: 14px;
  text-align: center;
}
.footer a {
  text-decoration: none;
}

.select {
  background: #ffffff;
  width: 100%;
  border: 1px solid #aaaaaa;
  border-radius: 3px;
  display: inline-block;
  padding: 13px 15px 13px 7px;
  margin: 4px auto 24px auto;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
}
.select:before {
  content: "";
  height: 100%;
  top: 0;
  pointer-events: none;
  position: absolute;
  right: 22px;
}
.select:after {
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: #000000 transparent transparent transparent;
  content: "";
  height: 0;
  pointer-events: none;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
}
.select select {
  background: transparent;
  border: none;
  color: #000000;
  font-size: 16px;
  width: 115%;
}

/* Zip code */
.fancy-form {
  display: block !important;
}

.zip-wrap {
  display: block !important;
}

.zip-error {
  color: #d70000;
  font-size: 12px;
  text-align: left;
  margin-top: -16px;
  margin-bottom: 20px;
  display: none;
}

.city-wrap {
  width: 100%;
  margin: 0px 8px;
}

.state-wrap {
  width: 100%;
  margin: 0px 8px;
}
</style>
