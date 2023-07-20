<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";

import Button from "../base-components/Button";
import {
  FormInput,
} from "../base-components/Form";



import Lucide from "../base-components/Lucide";


const subcategory = ref(["0"]);
const editorData = ref("<p>Content of the editor.</p>");
</script>

<template>
  <form action="">
  <div class="flex items-center  intro-y">
    <h2 class="mr-auto text-lg font-bold" id="">
      แก้ไขคุณสมบัติสินค้า
    </h2>
  </div>
  <br><br>
  <div class="">
    <!-- BEGIN: Notification -->

    <!-- END: Notification -->
    <div class="col-span-11 intro-y 2xl:col-span-9">
      <!-- BEGIN: Uplaod Product -->
      <div class="p-5 intro-y box">
        <div
          class="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400"
        >
          <div
            class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <Lucide icon="FileText" class="w-4 h-4 mr-2" />
            รายละเอียดคุณสมบัติ
          </div>
          <br>
          <div class="forminput">

            <div class="grid grid-cols-6 gap-4">
              <div class="col-start-1 col-end-2 ..." id="label">
                <span class="input_text_addpdft  text-right ..." >รหัสคุณสมบัติ :</span>
              </div>
              <div class="col-end-7 col-span-5 ..." id="bdred">
         <p>Size</p>
              </div>
            </div>
            <div class="grid grid-cols-6 gap-4">
              <div class="col-start-1 col-end-2 ..." id="label">
                <span class="input_text_addpdft text-right ..." >ชื่อคุณสมบัติ :</span>
              </div>
              <div class="col-end-7 col-span-5 ..." id="bdred">
                <FormInput
               
                  id="product-stock"
                  type="text"
                  placeholder="ชื่อคุณสมบัติ"
                  value="Size"
                />
              </div>
            </div>


          </div>
          
        </div>
        
      </div>
      <div class="flex flex-col justify-end gap-2 mt-5 md:flex-row">
        <a href="#">
          <Button variant="primary" class="mr-2 shadow-md " id="goldgd">
            <Lucide icon="Save" class="block mx-auto " />
            &nbsp; บันทึก
          </Button></a>
      </div>
    </div>
  </div>
  </form>
</template>
<style>
@import "../assets/css/components/AddCategories.css";
@import "..//assets/css/components/AddProductfetures.css";

.textarea{
  border-radius: 6px;
}
Textarea:focus{
  border-radius: 6px;
  border: 2px solid #af0000;
}
</style>