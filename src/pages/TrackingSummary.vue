<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";


import {  FormCheck } from "../base-components/Form";
import Lucide from "../base-components/Lucide";

import TomSelect from "../base-components/TomSelect";

const selectMultiple = ref(["1"]);
</script>

<template>
  <!-- BEGIN: Content -->
  <h2 class=" text-lg font-bold intro-y" id="">
    <!-- <PieChart :height="400" /> -->
    รายงาน Tracking Number
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
