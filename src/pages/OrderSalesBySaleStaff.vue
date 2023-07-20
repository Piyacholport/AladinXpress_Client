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
    รายงานยอดขายตามพนักงานขาย
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


 <!-- progress  -->
  <div class="content">
    <div
      class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
    >
      <Lucide icon="BarChart2" class="w-4 h-4 mr-2" />
      <b>ภาพรวม</b>
    </div>

    <div class="">
      <div class="grid grid-cols-9 gap-6 mt-5">
        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div
            :class="[
              'relative zoom-in',
              'before:content-[\'\'] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70',
            ]"
          >
            <div class="p-5 box">
              <div class="flex">
                <Lucide icon="Box" class="w-[28px] h-[28px] text-primary" />
                <div class="ml-auto">
                  <Tippy
                    as="div"
                    class="cursor-pointer bg-success py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                    content="33% Higher than last month"
                  >
                    33%
                    <Lucide icon="ChevronUp" class="w-4 h-4 ml-0.5" />
                  </Tippy>
                </div>
              </div>
              <div class="mt-6 text-3xl font-medium leading-8">1</div>
              <div class="mt-1 text-base text-slate-500">สินค้า</div>
            </div>
          </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div
            :class="[
              'relative zoom-in',
              'before:content-[\'\'] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70',
            ]"
          >
            <div class="p-5 box">
              <div class="flex">
                <Lucide icon="Package" class="w-[28px] h-[28px] text-pending" />
                <div class="ml-auto">
                  <Tippy
                    as="div"
                    class="cursor-pointer bg-danger py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                    content="2% Lower than last month"
                  >
                    2%
                    <Lucide icon="ChevronDown" class="w-4 h-4 ml-0.5" />
                  </Tippy>
                </div>
              </div>
              <div class="mt-6 text-3xl font-medium leading-8">10</div>
              <div class="mt-1 text-base text-slate-500">
                จำนวนสินค้า (ชิ้น/เซ็ท)
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div
            :class="[
              'relative zoom-in',
              'before:content-[\'\'] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70',
            ]"
          >
            <div class="p-5 box">
              <div class="flex">
                <Lucide
                  icon="CreditCard"
                  class="w-[28px] h-[28px] text-warning"
                />
                <div class="ml-auto">
                  <Tippy
                    as="div"
                    class="cursor-pointer bg-success py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                    content="12% Higher than last month"
                  >
                    12%
                    <Lucide icon="ChevronUp" class="w-4 h-4 ml-0.5" />
                  </Tippy>
                </div>
              </div>
              <div class="mt-6 text-3xl font-medium leading-8">0</div>
              <div class="mt-1 text-base text-slate-500">มูลค่ารวม (บาท)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
 <!-- progress  -->

   <!-- chart  -->
  <div class="content">
    <div class="">
      <div class="grid grid-cols-9 gap-6 mt-5">
        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div>
            <div
              class="col-span-12 row-start-2 px-10 py-6 -mx-5 sm:col-span-1 border-t border-black border-dashed md:row-start-auto md:col-span-4 border-opacity-10 md:border-t-0 md:border-l md:border-r sm:px-28 md:px-5"
            >
              <div class="flex flex-wrap items-center">
                <div
                  class="flex items-center justify-center w-full mb-5 mr-auto sm:w-auto sm:justify-start 2xl:mb-0"
                >
                  <div class="w-2 h-2 -mt-4 rounded-full bg-danger"></div>
                  <div class="ml-3.5">
                    <div
                      class="relative text-xl 2xl:text-2xl font-medium leading-6 2xl:leading-5 pl-3.5 2xl:pl-4"
                    >
                      <span
                        class="absolute text-base 2xl:text-xl top-0 left-0 2xl:-mt-1.5"
                      >
                        คำสั่งซื้อ
                      </span>
                      <br />
                    </div>
                    <div class="mt-2 text-slate-500">
                      เพิ่ม/ลด โดยการยืนยันคำสั่งซื้อ หรือการตีกลับ
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <ReportBarChart1 :height="190" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div>
            <div
              class="col-span-12 row-start-2 px-10 py-6 -mx-5 border-t border-black border-dashed md:row-start-auto md:col-span-4 border-opacity-10 md:border-t-0 md:border-l md:border-r sm:px-28 md:px-5"
            >
              <div class="flex flex-wrap items-center">
                <div
                  class="flex items-center justify-center w-full mb-5 mr-auto sm:w-auto sm:justify-start 2xl:mb-0"
                >
                  <div class="w-2 h-2 -mt-4 rounded-full bg-danger"></div>
                  <div class="ml-3.5">
                    <div
                      class="relative text-xl 2xl:text-2xl font-medium leading-6 2xl:leading-5 pl-3.5 2xl:pl-4"
                    >
                      <span
                        class="absolute text-base 2xl:text-xl top-0 left-0 2xl:-mt-1.5"
                      >
                        ผู้ใช้งาน
                      </span>
                      <br />
                    </div>
                    <div class="mt-2 text-slate-500">
                      เพิ่ม/ลด โดยการแก้ไขของพนักงาน
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <ReportBarChart1 :height="190" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div>
            <div
              class="col-span-12 row-start-2 px-10 py-6 -mx-5 border-t border-black border-dashed md:row-start-auto md:col-span-4 border-opacity-10 md:border-t-0 md:border-l md:border-r sm:px-28 md:px-5"
            >
              <div class="flex flex-wrap items-center">
                <div
                  class="flex items-center justify-center w-full mb-5 mr-auto sm:w-auto sm:justify-start 2xl:mb-0"
                >
                  <div class="w-2 h-2 -mt-4 rounded-full bg-danger"></div>
                  <div class="ml-3.5">
                    <div
                      class="relative text-xl 2xl:text-2xl font-medium leading-6 2xl:leading-5 pl-3.5 2xl:pl-4"
                    >
                      <span
                        class="absolute text-base 2xl:text-xl top-0 left-0 2xl:-mt-1.5"
                      >
                        สถานะสินค้า
                      </span>
                      <br />
                    </div>
                    <div class="mt-2 text-slate-500">
                      มีสินค้า, สินค้าใกล้หมด หรือสินค้าหมด
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-1">
                <ReportPieChart :height="190" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div>
            <div
              class="col-span-12 row-start-2 px-10 py-6 -mx-5 sm:col-span-1 border-t border-black border-dashed md:row-start-auto md:col-span-4 border-opacity-10 md:border-t-0 md:border-l md:border-r sm:px-28 md:px-5"
            >
              <div class="flex flex-wrap items-center">
                <div
                  class="flex items-center justify-center w-full mb-5 mr-auto sm:w-auto sm:justify-start 2xl:mb-0"
                >
                  <div class="w-2 h-2 -mt-4 rounded-full bg-danger"></div>
                  <div class="ml-3.5">
                    <div
                      class="relative text-xl 2xl:text-2xl font-medium leading-6 2xl:leading-5 pl-3.5 2xl:pl-4"
                    >
                      <span
                        class="absolute text-base 2xl:text-xl top-0 left-0 2xl:-mt-1.5"
                      >
                        ใบสั่งซื้อ
                      </span>
                      <br />
                    </div>
                    <div class="mt-2 text-slate-500">
                      เพิ่ม/ลด โดยการสั่งซื้อสินค้า
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <ReportBarChart1 :height="190" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div>
            <div
              class="col-span-12 row-start-2 px-10 py-6 -mx-5 sm:col-span-1 border-t border-black border-dashed md:row-start-auto md:col-span-4 border-opacity-10 md:border-t-0 md:border-l md:border-r sm:px-28 md:px-5"
            >
              <div class="flex flex-wrap items-center">
                <div
                  class="flex items-center justify-center w-full mb-5 mr-auto sm:w-auto sm:justify-start 2xl:mb-0"
                >
                  <div class="w-2 h-2 -mt-4 rounded-full bg-danger"></div>
                  <div class="ml-3.5">
                    <div
                      class="relative text-xl 2xl:text-2xl font-medium leading-6 2xl:leading-5 pl-3.5 2xl:pl-4"
                    >
                      <span
                        class="absolute text-base 2xl:text-xl top-0 left-0 2xl:-mt-1.5"
                      >
                        โอนย้าย
                      </span>
                      <br />
                    </div>
                    <div class="mt-2 text-slate-500">
                      เพิ่ม/ลด โดยการย้ายจากคลังสินค้าอื่น
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <ReportBarChart1 :height="190" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div>
            <div
              class="col-span-12 row-start-2 px-10 py-6 -mx-5 sm:col-span-1 border-t border-black border-dashed md:row-start-auto md:col-span-4 border-opacity-10 md:border-t-0 md:border-l md:border-r sm:px-28 md:px-5"
            >
              <div class="flex flex-wrap items-center">
                <div
                  class="flex items-center justify-center w-full mb-5 mr-auto sm:w-auto sm:justify-start 2xl:mb-0"
                >
                  <div class="w-2 h-2 -mt-4 rounded-full bg-danger"></div>
                  <div class="ml-3.5">
                    <div
                      class="relative text-xl 2xl:text-2xl font-medium leading-6 2xl:leading-5 pl-3.5 2xl:pl-4"
                    >
                      <span
                        class="absolute text-base 2xl:text-xl top-0 left-0 2xl:-mt-1.5"
                      >
                        ปรับจำนวน
                      </span>
                      <br />
                    </div>
                    <div class="mt-2 text-slate-500">
                      เพิ่ม/ลด โดยการปรับปรุงจำนวนสินค้า
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <ReportBarChart1 :height="190" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <br />
 <!-- chart  -->



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
