<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
// import fakerData from "../utils/faker";
import Button from "../base-components/Button";
import { FormInput, FormSelect, FormCheck } from "../base-components/Form";
import Lucide from "../base-components/Lucide";
import Tippy from "../base-components/Tippy";
import { Dialog, Menu } from "../base-components/Headless";
import TomSelect from "../base-components/TomSelect";
import { Disclosure } from "../base-components/Headless";
import Alert from "../base-components/Alert";
import Table from "../base-components/Table";
//chart ต่างๆ
import ReportBarChart1 from "../components/ReportBarChart1";
import ReportPieChart from "../components/ReportPieChart";
const selectMultiple = ref(["1"]);
</script>

<template>
  <!-- BEGIN: Content -->
  <h2 class=" text-lg font-bold intro-y" id="">
    <!-- <PieChart :height="400" /> -->
    รายงานยอดขายตามสถานะคำสั่งซื้อ
  </h2>
  <br /><br />


   <!-- Search  -->
  <div class="content">
    <div
      class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
    >
      <Lucide icon="Search" class="w-4 h-4 mr-2" />
      <b>ค้นหา</b>
    </div>

    <div class="">
      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-1 col-end-2 mt-2" id="label">
          <span class="text-right"> คลังสินค้า :</span>
        </div>
        <div class="col-end-7 col-span-5" id="bdred">
          <TomSelect
            v-model="selectMultiple"
            :options="{
              placeholder: 'Select your favorite actors',
            }"
            class="w-full"
            multiple
          >
            <option value="1">Leonardo DiCaprio</option>
            <option value="2">Johnny Deep</option>
            <option value="3">Robert Downey, Jr</option>
            <option value="4">Samuel L. Jackson</option>
            <option value="5">Morgan Freeman</option>
          </TomSelect>
        </div>
      </div>

      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-1 col-end-2 mt-2" id="label">
          <span class="text-right"> ช่องทางขาย :</span>
        </div>
        <div class="col-end-7 col-span-5" id="bdred">
          <TomSelect
            v-model="selectMultiple"
            :options="{
              placeholder: 'Select your favorite actors',
            }"
            class="w-full"
            multiple
          >
            <option value="1">Leonardo DiCaprio</option>
            <option value="2">Johnny Deep</option>
            <option value="3">Robert Downey, Jr</option>
            <option value="4">Samuel L. Jackson</option>
            <option value="5">Morgan Freeman</option>
          </TomSelect>
        </div>
      </div>

      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-1 col-end-2 mt-2" id="label">
          <span class="text-right"> พนักงาน :</span>
        </div>
        <div class="col-end-7 col-span-5" id="bdred">
          <TomSelect
            v-model="selectMultiple"
            :options="{
              placeholder: 'Select your favorite actors',
            }"
            class="w-full"
            multiple
          >
            <option value="1">Leonardo DiCaprio</option>
            <option value="2">Johnny Deep</option>
            <option value="3">Robert Downey, Jr</option>
            <option value="4">Samuel L. Jackson</option>
            <option value="5">Morgan Freeman</option>
          </TomSelect>
        </div>
      </div>

      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-1 col-end-2 mt-2" id="label">
          <span class="text-right"> ประเภทสินค้า :</span>
        </div>
        <div class="col-end-7 col-span-5" id="bdred">
          <div class="mt-1">
            <div class="flex flex-col mt-2 sm:flex-row">
              <FormCheck class="mr-2">
                <FormCheck.Input
                  id="radio-switch-1"
                  type="radio"
                  name="horizontal_radio_button"
                  value="horizontal-radio-chris-evans"
                  class="radio_btn_bgc"
                  checked
                />
                <FormCheck.Label htmlFor="radio-switch-1">
                  สินค้าธรรมดา
                </FormCheck.Label>
              </FormCheck>
              <FormCheck class="mt-2 mr-2 sm:mt-0">
                <FormCheck.Input
                  id="radio-switch-2"
                  type="radio"
                  name="horizontal_radio_button"
                  value="horizontal-radio-liam-neeson"
                  class="radio_btn_bgc"
                />
                <FormCheck.Label htmlFor="radio-switch-2">
                  สินค้าเชื่อมต่อ
                </FormCheck.Label>
              </FormCheck>
            </div>
          </div>
        </div>
        <div class="col-start-1 col-end-2 mt-2" id="label">
          <span class="text-right"> คงเหลือ :</span>
        </div>

        <div class="col-end-7 col-span-5" id="bdred">
          <div class="mt-1">
            <div class="flex flex-col mt-2 sm:flex-row">
              <FormCheck class="mr-2">
                <FormCheck.Input
                  id="radio-switch-3"
                  type="radio"
                  name="typeproduct"
                  value="horizontal-radio-chris-evans"
                  class="radio_btn_bgc"
                  checked
                />
                <FormCheck.Label htmlFor="radio-switch-3">
                  ทั้งหมด
                </FormCheck.Label>
              </FormCheck>
              <FormCheck class="mt-2 mr-2 sm:mt-0">
                <FormCheck.Input
                  id="radio-switch-4"
                  type="radio"
                  name="typeproduct"
                  value="horizontal-radio-liam-neeson"
                  class="radio_btn_bgc"
                />
                <FormCheck.Label htmlFor="radio-switch-4">
                  มีสินค้า
                </FormCheck.Label>
              </FormCheck>
              <FormCheck class="mt-2 mr-2 sm:mt-0">
                <FormCheck.Input
                  id="radio-switch-4"
                  type="radio"
                  name="typeproduct"
                  value="horizontal-radio-liam-neeson"
                  class="radio_btn_bgc"
                />
                <FormCheck.Label htmlFor="radio-switch-4">
                  สินค้าหมด
                </FormCheck.Label>
              </FormCheck>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <br />
 <!-- Search  -->



 <!-- table  -->

  <div class="content">
    <div
      class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
    >
      <Lucide icon="Package" class="w-4 h-4 mr-2" />
      <b>My Warehouse</b>
    </div>
    <br />
    <!-- table product -->
    <div id="allTab-container" class="table-responsive kv-grid-container">
      <table
        class="table-custom m-b-none kv-grid-table table table-bordered table-striped kv-table-wrap"
      >
        <thead>
          <tr>
            <th
              class="checkAll kv-all-select kv-align-center kv-align-middle skip-export"
              style="width: 30px"
              data-col-seq="0"
            >
              <div class="icheckbox_square-green" style="position: relative">
                <input type="checkbox" id="checkbox1" />
                <ins></ins>
              </div>
            </th>
            <th
              class="kv-align-center kv-align-middle"
              style="width: 80px"
              data-col-seq="1"
            >
              ช่องทาง
            </th>
            <th
              class="kv-align-center kv-align-middle"
              style="width: 60px"
              data-col-seq="2"
            >
              รูปภาพ
            </th>
            <th
              class="kv-align-left kv-align-middle"
              style="width: 700px"
              data-col-seq="3"
            >
              ชื่อสินค้า
            </th>
            <th
              class="kv-align-center kv-align-middle"
              style="width: 180px"
              data-col-seq="4"
            >
              หมวดหมู่
            </th>
            <th
              class="kv-align-center kv-align-middle"
              style="width: 120px"
              data-col-seq="6"
            >
              สถานะ
            </th>
            <th
              class="kv-align-center kv-align-middle"
              style="width: 12%"
              data-col-seq="7"
            >
              ต้นทุน
            </th>
            <th
              class="kv-align-center kv-align-middle"
              style="width: 12%"
              data-col-seq="8"
            >
              คงเหลือ
            </th>
            <th
              class="kv-align-center kv-align-middle"
              style="width: 12%"
              data-col-seq="8"
            >
              มูลค่า
            </th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in simpleProducts" :key="index">
          <tr :data-key="item.id">
            <td>
              <div class="icheckbox_square-green" style="position: relative">
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
 <!-- table  -->





  <!-- <div class="content"><br /><br /></div> -->
</template>
<style>
@import "..//assets/css/components/Order_appp.css";
@import "..//assets/css/components/tab.scss";
@import "..//assets/css/components/tab.css";

.btn_searchcancel,
.btn_importdata {
  background-color: #af0000;
  color: #fff;
}

.btn_searchcancel:hover,
.btn_importdata:hover {
  background-color: #950000;
}

.alink_cate {
  margin-left: 5px;
  margin-right: 5px;
  text-decoration: underline;
}

#radio_type_product:checked,
#radio_type_product2:checked,
#radio-switch-1:checked,
#radio-switch-2:checked,
#radio-switch-3:checked,
#radio-switch-4:checked {
  background-color: #af0000;
}

.bdbottom,
.bdbottom2 {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: none;
  padding-bottom: 1%;
  padding-top: 1%;
}

.bdbottom2 {
  border-bottom: 1px solid #ccc;
}

.bdright {
  border-right: 1px solid #ccc;
}

.alink_report:hover {
  font-weight: bold;
  color: #af0000;
}
</style>
