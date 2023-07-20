<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
import Button from "../base-components/Button";
import { FormInput } from "../base-components/Form";
import Lucide from "../base-components/Lucide";

import { Dialog } from "../base-components/Headless";
import Table from "../base-components/Table";
import TinySlider, { TinySliderElement } from "../base-components/TinySlider";
import Litepicker from "../base-components/Litepicker";

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
    <h2 class="mr-auto text-lg font-bold" id="">คำสั่งซื้อตีกลับ</h2>
    <br />
    <hr />
    <br />

    <div class="grid grid-cols-5  mt-5">
    <div
      class="flex "
      style="box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; border-radius: 6px; "
    >
      <div
        class="z-30 flex items-center justify-center w-10 bg-slate-100 text-slate-600 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"
        style="margin-bottom: 0px"
      >
        <Lucide icon="Calendar" class="w-4 h-4" />
      </div>

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
        class="pl-1 sm:w-56 !box "
       
      />
    </div>
  </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <!-- <div
        class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap"
      >
    
       
        <span class="filter_search">
         
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
      </span>
      </div> -->

      <div
        class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap"
      >
        <div class="mt-3 sm:mt-0 sm:ml-auto md:ml-0">
          <!-- search input -->
          <div class="">
            <FormInput
              v-model="categoryName"
              id="regular-form-1"
              type="text"
              placeholder="เลขที่คืนสินค้า, ชื่อ, เบอร์โทร"
              class="w-full h-10 mr-2 box"
              @keydown.enter="searchCategory()"
            />
            <!-- <FormInput
              v-model="categoryName"
              type="text"
              class="w-60 !box"
              placeholder="ค้นหาเช่น เลขที่คืนสินค้า, ชื่อ, เบอร์โทร"
              id="categories"
              @keydown.enter="searchCategory()"
            /> -->
          </div>
        </div>
        <!-- BEGIN:Filter search dropdown -->
        <div class="">
          <select class="filter_search bg-secondary shadow-md">
            <option value="Warehouse">ช่องทางการขาย</option>
          </select>
        </div>

        <div class="">
          <select class="filter_search bg-secondary shadow-md" id="transport">
            <option value="flash">ผู้จัดส่ง</option>
          </select>
        </div>
        <div class="">
          <select class="filter_search bg-secondary shadow-md" id="">
            <option value="Warehouse">ประเภท</option>
          </select>
        </div>
        <div class="">
          <select class="filter_search bg-secondary shadow-md">
            <option value="Warehouse">พนักงงานฝ่ายขาย</option>
          </select>
        </div>

        <!--END: Filter search dropdown -->
        <Button
          variant="primary"
          class="mr-2 shadow-md"
          id="btn_search"
          @click="searchCategory()"
          style="background-color: #af0000; color: white"
        >
          ค้นหา &nbsp;<Lucide icon="Search" class="block mx-auto" />
        </Button>
        <!--<Lucide icon="Search" class="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3" /> -->
      </div>
      <!-- BEGIN: Data List -->
      <div class="col-span-12 overflow-auto intro-y lg:overflow-visible">
        <br />

        <table class="table">
          <thead>
            <tr>
              <th>ช่องทาง</th>
              <th>รูปภาพ</th>
              <th>หมายเลขคำสั่งซื้อ</th>
              <th>ลูกค้า</th>
              <th>โทรศัพท์</th>
              <th>บริการขนส่ง</th>
              <th>สถานะ</th>
              <th>ประเภท</th>
              <th>ส่งใหม่</th>
              <th>ยอดรวม</th>
              <th>จำนวนสินค้า</th>
              <th>หมายเลขแทร็คกิ้ง</th>
              <th>พนักงานขาย</th>
              <th>วันที่สั่งซื้อ</th>
              <th>วันที่ส่งคืน</th>
              <th>ดำเนินการ</th>
            </tr>
          </thead>
          <tbody id="detail">
            <tr>
              <td>ทดสอบ</td>
              <td>
                <img
                  src="../assets/images/profile.jpg"
                  alt=""
                  style="width: 100px"
                />
              </td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
              <!--M     O     D     A     L-->
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

              <!--M     O     D     A     L-->
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

export default {
  data() {
    return {
      date: [] as any[],
      baseUrl: `${import.meta.env.VITE_API_URL}`,
      categories: [] as any[],
      deletedItems: [] as any[],
      categoryName: "",
      category: "all",
      loading: false,
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
  },
  mounted() {},
};
</script>

<style>
@import "..//assets/css/components/Transferproducts.css";
select#transport option[value="flash"] {
  background-image: url(../assets/images/profile.jpg);
}
</style>
