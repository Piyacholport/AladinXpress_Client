<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";

import Button from "../base-components/Button";

import { FormInput } from "../base-components/Form";
import Lucide from "../base-components/Lucide";

import { Dialog } from "../base-components/Headless";

import { TinySliderElement } from "../base-components/TinySlider";
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
    <h2 class="mr-auto text-lg font-bold" id="">
      เปลี่ยนแปลงจำนวนสินค้า
    </h2>
    <br />
    <hr />
    <br />
    <h3 style="font-weight: bold">รายการเปลี่ยนแปลง</h3>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap"
      >
        <div class="mt-3 sm:mt-0 sm:ml-auto md:ml-0">
          <!-- search input -->
          <div class="relative text-slate-500" id="input_search">
            <FormInput
              v-model="categoryName"
              type="text"
              class="w-56 !box"
              placeholder="ค้นหาด้วยหมายเลขการเปลี่ยนแปลง"
              id="categories"
              @keydown.enter="searchCategory()"
            />
          </div>
        </div>
        <!-- BEGIN:Filter search dropdown -->
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
        <select
          v-model="category"
          name="categories"
          id="categories"
          class="filter_search"
        >
          <option disable selected>เลือกผู้ใช้งาน</option>
          <option value="Warehouse">Piyachol Chuennirun</option>
        </select>
        <select
          v-model="category"
          name="categories"
          id="categories"
          class="filter_search"
        >
          <option disable selected>เลือกคลังสินค้า</option>
          <option value="Warehouse">My Warehouse</option>
        </select>
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
        <div class="hidden mx-auto md:block text-slate-500">
          Showing 1 to 10 of 150 entries
        </div>
        <br />
        <a href="addchangenumberofproducts">
          <Button variant="primary" class="mr-2 shadow-md" id="goldgd">
            <Lucide icon="PlusCircle" class="block mx-auto" />
            &nbsp; เพิ่มรายการเปลี่ยนแปลง
          </Button></a
        >
        <br /><br />

        <table class="table">
          <thead>
            <tr>
              <th>
                <div class="icheckbox_square-green" style="position: relative">
                  <input type="checkbox" id="checkbox1" />
                  <ins></ins>
                </div>
              </th>
              <th>รูปภาพ</th>
              <th>หมายเลขการเปลี่ยนแปลง</th>
              <th>หมายเหตุ</th>
              <th>คลังสินค้า</th>
              <th>สร้างโดย</th>
              <th>วันที่ดำเนินการ</th>
              <th>ดำเนินการ</th>
            </tr>
          </thead>
          <tbody id="detail">
            <tr>
              <td>
                <div class="icheckbox_square-green" style="position: relative">
                  <input type="checkbox" id="checkbox1" />
                  <ins></ins>
                </div>
              </td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
              <td>ทดสอบ</td>
    
              <td>
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
              </td>
              <td>
                <span class="flex items-center justify-center btn_del">
                  <Lucide icon="Trash2" class="w-4 h-4" />
                </span>
              </td>

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
</style>
