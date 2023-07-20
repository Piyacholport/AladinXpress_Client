<script setup lang="ts">

import {
  FormSelect,
  FormInput,
  FormLabel,

  FormCheck,

  FormInline,
  InputGroup,
} from "../../base-components/Form";
import Button from "../../base-components/Button";

import Lucide from "../../base-components/Lucide";
import Dropzone, { DropzoneElement } from "../../base-components/Dropzone";
import { onMounted, ref } from "vue";
import Litepicker from "../../base-components/Litepicker";

//date
const date = ref("");
const daterange = ref("");
const datepickerModalPreview = ref(false);
const setDatepickerModalPreview = (value: boolean) => {
  datepickerModalPreview.value = value;
};
const cancelButtonRef = ref(null);

//drop pics
const dropzoneSingleRef = ref<DropzoneElement>();
const dropzoneMultipleRef = ref<DropzoneElement>();
const dropzoneValidationRef = ref<DropzoneElement>();

onMounted(() => {
  const elDropzoneSingleRef = dropzoneSingleRef.value;
  if (elDropzoneSingleRef) {
    elDropzoneSingleRef.dropzone.on("success", () => {
      alert("Added file.");
    });
    elDropzoneSingleRef.dropzone.on("error", () => {
      alert("No more files please!");
    });
  }

  const elDropzoneMultipleRef = dropzoneMultipleRef.value;
  if (elDropzoneMultipleRef) {
    elDropzoneMultipleRef.dropzone.on("success", () => {
      alert("Added file.");
    });
    elDropzoneMultipleRef.dropzone.on("error", () => {
      alert("No more files please!");
    });
  }

  const elDropzoneValidationRef = dropzoneValidationRef.value;
  if (elDropzoneValidationRef) {
    elDropzoneValidationRef.dropzone.on("success", () => {
      alert("Added file.");
    });
    elDropzoneValidationRef.dropzone.on("error", () => {
      alert("No more files please!");
    });
  }
});
</script>

<template>
  <div class="flex items-center mt-5 intro-y">
    <h2 class="mr-auto text-lg font-bold">ดูรายการแจ้งชำระเงิน</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="col-span-12 intro-y lg:col-span-6">
      <!-- BEGIN: Input -->
      <div class="intro-y box">
        <div
          class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <h2 class="mr-auto text-base font-bold">ข้อมูลผู้สมัคร</h2>
        </div>
        <div class="p-5">
          <FormInline>
            <FormLabel htmlFor="horizontal-form-1" class="sm:w-20 font-bold">
              ชื่อ
            </FormLabel>
            <p>สมหญิง </p>
          </FormInline>
          <FormInline class="mt-5">
            <FormLabel htmlFor="horizontal-form-2" class="sm:w-20 font-bold">
              นามสกุล
            </FormLabel>
            <p>จริงจริงนะ</p>
          </FormInline>
          <FormInline class="mt-5">
            <FormLabel htmlFor="horizontal-form-3" class="sm:w-20 font-bold">
              Email
            </FormLabel>
            <p>SomYing@gmail.com</p>
          </FormInline>
          <FormInline class="mt-5">
            <FormLabel htmlFor="horizontal-form-4" class="sm:w-20 font-bold">
              ชื่อผู้ใช้ 
            </FormLabel>
            <p>SomYing Shop</p>
          </FormInline>
          <FormInline class="mt-3">
            <FormLabel htmlFor="horizontal-form-6" class="sm:w-20 font-bold">
              ชื่อร้านค้า
            </FormLabel>
            <p>ร้านสมหญิง</p>
          </FormInline>
          <FormInline class="mt-5">
            <FormLabel htmlFor="horizontal-form-7" class="sm:w-20 font-bold">
              รหัสผู้เเนะนำ
            </FormLabel>
            <p>vip8888</p>
          </FormInline>
          <FormInline class="mt-5">
            <FormLabel htmlFor="horizontal-form-8" class="sm:w-20 font-bold">
              เบอร์โทร
            </FormLabel>
            <p>091-111-1111</p>
          </FormInline>
        </div>
      </div>
      <!-- END: Input -->
    </div>
    <div class="col-span-12 intro-y lg:col-span-6">
      <!-- BEGIN: Horizontal Form -->
      <div class="intro-y box">
        <div
          class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <h2 class="mr-auto text-base font-bold">ข้อมูลการชำระเงิน</h2>
        </div>

        <div class="p-5">
          <!-- BEGIN: Invoice -->

          <FormInline class="mt-5">
            <FormLabel htmlFor="horizontal-form-10" class="sm:w-20 font-bold">
              รายการ :
            </FormLabel>
            <div class=""><p>อัปเกรดแพคเกจ M</p></div>
          </FormInline>
          
          <FormInline class="mt-5">
            <FormLabel htmlFor="horizontal-form-9" class="sm:w-20 font-bold">
              การชำระเงิน
            </FormLabel>
            <div class="horizontal-form-9">
              <div class="flex flex-col mt-2 sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="radio-switch-4"
                    type="radio"
                    name="statuspayment"
                    value=""
                    checked="true"
                  />
                  <FormCheck.Label htmlFor="radio-switch-4">
                    ชำระแล้ว
                  </FormCheck.Label>
                </FormCheck>
                <!-- <FormCheck class="mt-2 mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="radio-switch-5"
                    type="radio"
                    name="statuspayment"
                    value=""
                  />
                  <FormCheck.Label htmlFor="radio-switch-5">
                    ยังไม่ได้ชำระ
                  </FormCheck.Label>
                </FormCheck> -->
              </div>
            </div>
          </FormInline>

          <FormInline class="mt-5">
            <FormLabel htmlFor="horizontal-form-8" class="sm:w-100 font-bold ">
              หลักฐานการชำระเงิน
            </FormLabel>
        
          </FormInline>
          <div class="mt-5 flex items-center justify-center ">
          
            <img src="..//..//assets/images/exampleslip.jpg" alt="" style="width: 350px; border-radius: 10px;" class="shadow-md">
          </div>
            
          
           
        

          <!-- <div class="mt-10">
            <p class="font-bold mb-3">หลักฐานการชำระเงิน :</p>
            <Dropzone
              refKey="dropzoneSingleRef"
              :options="{
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                maxFiles: 1,
                headers: { 'My-Awesome-Header': 'header value' },
              }"
              class="dropzone"
            >
              <div class="text-lg font-medium">
                วางไฟล์ที่นี่หรือคลิกเพื่ออัปโหลด
              </div>
              <div class="text-gray-600">
                กรุณาเลือกไฟล์ที่เป็น .jpg, .png, .jpeg เท่านั้น
              </div>
            </Dropzone>
          </div>
          <FormInline class="mt-5">
            <FormLabel htmlFor="horizontal-form-8" class="sm:w-20 font-bold">
              ชื่อบัญชี
            </FormLabel>
            <FormInput
              id="horizontal-form-8"
              type="text"
              placeholder="ชื่อบัญชี"
            />
          </FormInline>
          <FormInline class="mt-5">
            <FormLabel htmlFor="horizontal-form-8" class="sm:w-20 font-bold">
              เลขบัญชี
            </FormLabel>
            <FormInput
              id="horizontal-form-8"
              type="text"
              placeholder="xxx-x-xxxxx-x"
            />
          </FormInline>
          <FormInline class="mt-5">
            <FormLabel htmlFor="horizontal-form-8" class="sm:w-20 font-bold">
              วันที่
            </FormLabel>
            <div class="text-left">
              <div class="relative ">
                <div
                  class="absolute flex items-center justify-center w-10 h-full border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"
                >
                  <Lucide icon="Calendar" class="w-4 h-4" />
                </div>
                <Litepicker
                  v-model="date"
                  :options="{
                    autoApply: false,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }"
                  class="pl-12"
                />
              </div>
            </div>
          </FormInline>
          <FormInline class="mt-5">
            <FormLabel htmlFor="horizontal-form-8" class="sm:w-20 font-bold">
              เวลา
            </FormLabel>
            <InputGroup class="">
    <InputGroup.Text id="input-group-hour"> h </InputGroup.Text>
    <FormInput type="text" placeholder="00" aria-label="00" aria-describedby="input-group-hour" />
</InputGroup>
<InputGroup>
    <InputGroup.Text id="input-group-minutes"> m </InputGroup.Text>
    <FormInput type="text" placeholder="00" aria-label="00" aria-describedby="input-group-minutes" />
</InputGroup>
          </FormInline>
          <FormInline class="mt-5">
            <FormLabel htmlFor="horizontal-form-8" class="sm:w-20 font-bold">
              รวมยอดชำระ
            </FormLabel>
            <InputGroup class="mt-2">
    <FormInput type="number" placeholder="รวมยอดชำระ" aria-label="Price" aria-describedby="input-group-price" />
    <InputGroup.Text id="input-group-price">฿</InputGroup.Text>
</InputGroup>
          </FormInline> -->

          <div
            class="flex flex-col-reverse mt-10 px-5 pb-10 sm:px-20 sm:pb-20 sm:flex-row"
          >
            <div class="mt-10 text-center sm:text-left sm:mt-0">
              <div class="text-base text-slate-500">โอนเงินผ่านธนาคาร</div>
              <div class="mt-2 text-lg font-bold text-[#af0000]">
                สมหญิง จริงจริงนะ
              </div>
              <div class="mt-1">เลขบัญชี : xxx-x-xxx123-4</div>
              <div class="mt-1">วันที่ : 21/04/2566 23:32 น.</div>
            </div>
            <div class="text-center sm:text-right sm:ml-auto">
              <div class="text-base text-slate-500">รวมยอดชำระ</div>
              <div class="mt-2 text-xl font-bold text-[#af0000]">2,499 ฿</div>
              <div class="mt-1">รวมภาษีแล้ว</div>
            </div>
          </div>

          <!-- END: Invoice -->
        </div>
      </div>
      <!-- END: Horizontal Form -->

    </div>
  </div>
</template>
