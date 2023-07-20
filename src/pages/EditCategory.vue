<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";

import Button from "../base-components/Button";
import {
  FormInput,
  FormInline,
  FormSelect,
} from "../base-components/Form";

import Lucide from "../base-components/Lucide";
import Tippy from "../base-components/Tippy";


const subcategory = ref(["0"]);
const editorData = ref("<p>Content of the editor.</p>");
</script>

<template>
  <form action="">
  <div class="flex items-center  intro-y">
    <h2 class="mr-auto text-lg font-bold" id="">
      แก้ไขหมวดหมู่สินค้า
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
            รายละเอียดหมวดหมู่สินค้า
          </div>
          <br>
          <div class="forminput">
            <div class="grid grid-cols-6 gap-4">
              <div class="col-start-1 col-end-2 ..." id="label">
                <span class="text-right ...">หมวดหมู่หลัก :</span>
              </div>
              <div class="col-end-7 col-span-5 ..." id="bdred">
                <FormSelect id="category" >
                  <option id="when_hover"
                    
                    v-for="(faker, fakerKey) in _.take(fakerData, 9)"
                    :key="fakerKey"
                    :value="faker.categories[0].name"
                  >
                    {{ faker.categories[0].name }}
                  </option>
                </FormSelect>
              </div>
            </div>

            <div class="grid grid-cols-6 gap-4">
              <div class="col-start-1 col-end-2 ..." id="label">
                <span class="text-right ...">ชื่อหมวดหมู่ :</span>
              </div>
              <div class="col-end-7 col-span-5 ..." id="bdred">
                <FormInput
               
                  id="product-stock"
                  type="text"
                  placeholder="ชื่อหมวดหมู่"
                  
                />
              </div>
            </div>

            <div class="grid grid-cols-6 gap-4">
              <div class="col-start-1 col-end-2 ..." id="label">
                <span class="text-right ...">ภาพปก :</span>
              </div>
              <div class="col-end-7 col-span-5 ..." id="bdred">
                <FormInline class="flex-col items-start mt-0 xl:flex-row">
                  <div
                    class="flex-1 w-full pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 dark:border-darkmode-400"
                  >
                    <div class="grid grid-cols-10 gap-5 pl-4 pr-5">
                      <div
                        v-for="(faker, fakerKey) in _.take(fakerData, 5)"
                        :key="fakerKey"
                        class="relative col-span-5 cursor-pointer md:col-span-2 h-28 image-fit zoom-in"
                      >
                        <img
                          class="rounded-md"
                          alt="Midone - HTML Admin Template"
                          :src="faker.photos[0]"
                        />
                        <Tippy
                          content="Remove this image?"
                          class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 -mt-2 -mr-2 text-white rounded-full bg-danger"
                        >
                          <Lucide icon="X" class="w-4 h-4" />
                        </Tippy>
                      </div>
                    </div>
                    <div
                      class="relative flex items-center justify-center px-4 pb-4 mt-5 cursor-pointer"
                    >
                      <Lucide icon="Image" class="w-4 h-4 mr-2" />
                      <span class="mr-1 text-primary"> Upload a file </span>
                      or drag and drop
                      <FormInput
                        id="horizontal-form-1"
                        type="file"
                        class="absolute top-0 left-0 w-full h-full opacity-0"
                      />
                    </div>
                  </div>
                </FormInline>
              </div>
            </div>

            <div class="grid grid-cols-6 gap-4">
              <div class="col-start-1 col-end-2 ..." id="label">
                <span class="text-right ...">รูปภาพ :</span>
              </div>
              <div class="col-end-7 col-span-5 ..." id="bdred">
                <FormInline class="flex-col items-start mt-0 xl:flex-row">
                  <div
                    class="flex-1 w-full pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 dark:border-darkmode-400"
                  >
                    <div class="grid grid-cols-10 gap-5 pl-4 pr-5">
                      <div
                        v-for="(faker, fakerKey) in _.take(fakerData, 5)"
                        :key="fakerKey"
                        class="relative col-span-5 cursor-pointer md:col-span-2 h-28 image-fit zoom-in"
                      >
                        <img
                          class="rounded-md"
                          alt="Midone - HTML Admin Template"
                          :src="faker.photos[0]"
                        />
                        <Tippy
                          content="Remove this image?"
                          class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 -mt-2 -mr-2 text-white rounded-full bg-danger"
                        >
                          <Lucide icon="X" class="w-4 h-4" />
                        </Tippy>
                      </div>
                    </div>
                    <div
                      class="relative flex items-center justify-center px-4 pb-4 mt-5 cursor-pointer"
                    >
                      <Lucide icon="Image" class="w-4 h-4 mr-2" />
                      <span class="mr-1 text-primary"> Upload a file </span>
                      or drag and drop
                      <FormInput
                        id="horizontal-form-1"
                        type="file"
                        class="absolute top-0 left-0 w-full h-full opacity-0"
                      />
                    </div>
                  </div>
                </FormInline>
              </div>
            </div>


            
            <div class="grid grid-cols-6 gap-4">
              <div class="col-start-1 col-end-2 " id="label">
                <span class="text-right ">รายละเอียดหมวดหมู่สินค้า :</span>
              </div>
              <div class="col-end-7 col-span-5 " id="bdred">
                <Textarea name="" id="" cols="77" rows="3" placeholder="รายละเอียดหมวดหมู่สินค้า" class="textarea" value="หลัก">
                </Textarea>
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
@import "..//assets/css/components/CustomersList.css";
.textarea{
  border-radius: 6px;
}
Textarea:focus{
  border-radius: 6px;
  border: 2px solid #af0000;
}
</style>