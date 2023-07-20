<script></script>
<style></style>
<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
import Button from "../base-components/Button";
import { FormInput, FormLabel, FormCheck } from "../base-components/Form";
import Litepicker from "../base-components/Litepicker";
import Lucide from "../base-components/Lucide";
import TomSelect from "../base-components/TomSelect";
import { Dialog, Menu } from "../base-components/Headless";

const date = ref("");
const daterange = ref("");
const datepickerModalPreview = ref(false);
const setDatepickerModalPreview = (value: boolean) => {
  datepickerModalPreview.value = value;
};
const cancelButtonRef = ref(null);

//for Tomselect

const select = ref("1");
</script>

<template>
  <!-- BEGIN: Content -->

  <h2 class="mr-auto text-lg font-bold" id="">เพิ่มรายการออเดอร์</h2>

  <br />
  <div class="content">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <h2 class="text-lg font-bold intro-y" id="">ข้อมูลทั่วไป</h2>
      </div>

      <!-- ... -->
      <div>
        <div class="grid grid-cols-3 gap-4">
          <div class="">
            <p>
              วันที่แพ็ค
              <span class="ml-1 text-danger text-l font-bold">*</span>
            </p>
            <div class="relative w-30 mx-auto">
              <div
                class="absolute flex items-center justify-center w-10 h-full border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"
              >
                <Lucide icon="Calendar" class="w-4 h-4" />
              </div>

              <Litepicker
                v-model="packDate"
                :options="{
                  autoApply: true,
                  format: 'YYYY-MM-DD 00:00:00',
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
          <div class="">
            <p>
              วันที่รับสินค้า
              <span class="ml-1 text-danger text-l font-bold">*</span>
            </p>
            <div class="relative w-30 mx-auto">
              <div
                class="absolute flex items-center justify-center w-10 h-full border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"
              >
                <Lucide icon="Calendar" class="w-4 h-4" />
              </div>
              <Litepicker
                v-model="deliveryDate"
                :options="{
                  autoApply: true,
                  showWeekNumbers: true,
                  format: 'YYYY-MM-DD 00:00:00',
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
          <div class="">
            <p>
              วันที่ขาย <span class="ml-1 text-danger text-l font-bold">*</span>
            </p>
            <div class="relative w-30 mx-auto">
              <div
                class="absolute flex items-center justify-center w-10 h-full border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"
              >
                <Lucide icon="Calendar" class="w-4 h-4" />
              </div>
              <Litepicker
                v-model="createdDate"
                :options="{
                  autoApply: true,
                  showWeekNumbers: true,
                  format: 'YYYY-MM-DD 00:00:00',
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
        </div>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div class="grid grid-cols-2 gap-6">
      <div class="grid grid-cols-4 gap-1">
        <h3 class="" style="font-weight: bold">ข้อมูลลูกค้า</h3>

        <br />

        <div class="col-span-4">
          <span class="ml-1 text-danger text-l font-bold">*</span>
          <select
            class="forminput"
            v-model="customerSelect"
            @change="flashPrice()"
          >
            <option value="" selected>เลือกกรายชื่อลูกค้า</option>

            <option
              v-for="(item, index) in customerList"
              :key="index"
              :value="item"
            >
              {{ item.customerName }}
            </option>
          </select>

          <!--<input type="text" class="forminput" placeholder="ค้นหาลูก้า..."/> -->
        </div>
        <div class="col-span-4">
          <div class="text-right">
            <span>( สร้างลูกค้าใหม่ ) </span>
            <div>
              <label
                class="relative inline-flex items-center cursor-pointer mt-4"
              >
                <input
                  type="checkbox"
                  value=""
                  class="sr-only peer cursor-pointer"
                  v-model="isCutOffTime"
                />
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#ffd0d0] dark:peer-focus:ring-[#af0000] dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#af0000]"
                ></div>
              </label>
            </div>
          </div>
        </div>
        <div class="col-span-4 bg-secondary rounded-md p-5" v-if="isCutOffTime">
          <div
            class="flex items-center pb-5 text-base font-bold border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <Lucide icon="Users" class="w-4 h-4 mr-2 font-bold" />
            ข้อมูลลูกค้า
          </div>
          <div class="">
            <span class="ml-1 text-danger text-l font-bold">*</span>
            <input
              type="text"
              placeholder="ชื่อ-สกุล ลูกค้า"
              class="forminput"
            />
            <span class="ml-1 text-danger text-l font-bold">*</span>
            <input type="text" placeholder="ชื่อโซเชียล" class="forminput" />
            <span class="ml-1 text-danger text-l font-bold">*</span>
            <input type="text" placeholder="เบอร์โทรศัพท์" class="forminput" />
            <span class="ml-1 text-danger text-l font-bold">*</span>
            <input type="text" placeholder="อีเมล" class="forminput" />
            <span class="ml-1 text-danger text-l font-bold">*</span>
            <input
              type="text"
              placeholder="เลขประจำตัวประชาชน"
              class="forminput"
            />
          </div>

          <br />

          <div
            class="flex items-center pb-5 text-base font-bold border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <Lucide icon="Home" class="w-4 h-4 mr-2 font-bold" />
            ที่อยู่ลูกค้า
          </div>
          <div class="col-span-2">
            <span class="ml-1 text-danger text-l font-bold">*</span>
            <input
              type="text"
              placeholder="ที่อยู่"
              class="forminput"
              v-model="customerSelect.email"
            />
          </div>
          <div class="col-span-2 mt-5">
            <input
              type="text"
              placeholder="ซอย / ถนน"
              class="forminput"
              v-model="customerSelect.telephone"
            />
          </div>

          <div class="col-span-2">
            <span class="ml-1 text-danger text-l font-bold">*</span>

            <TomSelect
              v-model="select"
              :options="{
                placeholder: 'ค้นหาจังหวัด',
              }"
              class="h-11 bg-white"
            >
              <option value="1">กรุงเทพ</option>
            </TomSelect>
          </div>
          <div class="col-span-2 mt-2">
            <span class="ml-1 text-danger text-l font-bold">*</span>

            <TomSelect
              v-model="select"
              :options="{
                placeholder: 'ค้นหาเขต / อำเภอ',
              }"
              class="h-11 bg-white"
            >
              <option value="1">อำเภอ</option>
            </TomSelect>
          </div>

          <div class="col-span-2 mt-2">
            <span class="ml-1 text-danger text-l font-bold">*</span>

            <TomSelect
              v-model="select"
              :options="{
                placeholder: 'แขวง / ตำบล',
              }"
              class="h-11 bg-white"
            >
              <option value="1">แขวง / ตำบล</option>
            </TomSelect>
          </div>
          <div class="col-span-2 mt-2">
            <span class="ml-1 text-danger text-l font-bold">*</span>
            <input
              type="text"
              placeholder="รหัสไปรษณีย์"
              class="forminput"
              v-model="customerSelect.zipcode"
            />
          </div>

          <div class="flex flex-col justify-end gap-2 mt-5 md:flex-row">
            <Button
              @click.prevent="addCustomer()"
              variant="primary"
              class="mr-2 shadow-md"
              id="goldgd"
            >
              <Lucide icon="Save" class="block mx-auto w-4 h-4" />
              &nbsp; บันทึก
            </Button>
          </div>
        </div>

        <div class="col-span-4">
          <span class="ml-1 text-danger text-l font-bold">*</span>
          <select name="" id="" class="forminput">
            <option
              v-for="(item, index) in warehouse"
              :key="index"
              :value="item"
            >
              {{ item.warehouseName }}
            </option>
          </select>
        </div>
        <div class="col-span-4">
          กรุณาเลือกช่องที่ขายได้
          <span class="ml-1 text-danger font-bold text-l">*</span>
          <div class="flex gap-1">
            <img
              src="https://i.pinimg.com/originals/ce/d6/6e/ced66ecfc53814d71f8774789b55cc76.png"
              :class="{ grayscale: socialName !== 'Facebook' }"
              class="w-10"
              @click="setSocialName('Facebook')"
            />
            <img
              src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvdjk4Mi1kNS0wNS5wbmc.png?s=xbgVMc550jqw_H0zKt9yto1awhwD0NnXBAEZxK7yrNU"
              :class="{ grayscale: socialName !== 'WhatsApp' }"
              class="w-10"
              @click="setSocialName('WhatsApp')"
            />
            <img
              src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"
              :class="{ grayscale: socialName !== 'Instagram' }"
              class="w-10"
              @click="setSocialName('Instagram')"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/LINE_New_App_Icon_%282020-12%29.png/800px-LINE_New_App_Icon_%282020-12%29.png"
              :class="{ grayscale: socialName !== 'Line' }"
              class="w-10"
              @click="setSocialName('Line')"
            />
            <img
              src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-icon-png-image_6315986.png"
              :class="{ grayscale: socialName !== 'Twitter' }"
              class="w-10"
              @click="setSocialName('Twitter')"
            />
            <img
              src="https://cdn.chanhtuoi.com/uploads/2022/12/ma-giam-gia-lazada.png"
              :class="{ grayscale: socialName !== 'Lazada' }"
              class="w-10"
              @click="setSocialName('Lazada')"
            />
            <img
              src="https://aukey.co.th/wp-content/uploads/2020/03/Shopee-logo.png"
              :class="{ grayscale: socialName !== 'Shoppee' }"
              class="w-10"
              @click="setSocialName('Shoppee')"
            />
            <img
              src="https://seeklogo.com/images/T/tiktok-share-icon-black-logo-29FFD062A0-seeklogo.com.png"
              :class="{ grayscale: socialName !== 'Tiktok' }"
              class="w-10"
              @click="setSocialName('Tiktok')"
            />
          </div>
          <input
            type="text"
            placeholder="หรือหากขายได้จากช่องทางอื่น โปรดระบุ"
            v-model="socialName"
            class="forminput"
          />
        </div>

        <br />
        <hr class="col-span-4" />
        <br />
        <div class="col-span-4">
          <span class="ml-1 text-danger text-l font-bold">*</span>
          <input
            type="text"
            placeholder="ชื่อ - นามสกุล"
            v-model="customerSelect['customerName']"
            class="forminput"
          />
        </div>
        <div class="col-span-2">
          <span class="ml-1 text-danger text-l font-bold">*</span>
          <input
            type="text"
            placeholder="อีเมล"
            class="forminput"
            v-model="customerSelect.email"
          />
        </div>
        <div class="col-span-2">
          <span class="ml-1 text-danger text-l font-bold">*</span>
          <input
            type="text"
            placeholder="เบอร์โทร"
            class="forminput"
            v-model="customerSelect.telephone"
          />
        </div>

        <!-- <textarea
            name=""
            id=""
            rows="2"
            class="forminput"
            placeholder="ที่อยู่ (กรุณาใช้ที่อยู่จริง)"
            v-model="customerSelect.customerAddressDetail"
          ></textarea> -->

        <div class="col-span-2">
          <span class="ml-1 text-danger text-l font-bold">*</span>
          <input
            type="text"
            placeholder="ที่อยู่"
            class="forminput"
            v-model="customerSelect.email"
          />
        </div>
        <div class="col-span-2 mt-5">
          <input
            type="text"
            placeholder="ซอย / ถนน"
            class="forminput"
            v-model="customerSelect.telephone"
          />
        </div>

        <div class="col-span-2">
          <span class="ml-1 text-danger text-l font-bold">*</span>

          <TomSelect
            v-model="select"
            :options="{
              placeholder: 'ค้นหาจังหวัด',
            }"
            class="h-11"
          >
            <option value="1">กรุงเทพ</option>
          </TomSelect>
        </div>
        <div class="col-span-2">
          <span class="ml-1 text-danger text-l font-bold">*</span>

          <TomSelect
            v-model="select"
            :options="{
              placeholder: 'ค้นหาเขต / อำเภอ',
            }"
            class="h-11"
          >
            <option value="1">อำเภอ</option>
          </TomSelect>
        </div>

        <div class="col-span-2">
          <span class="ml-1 text-danger text-l font-bold">*</span>

          <TomSelect
            v-model="select"
            :options="{
              placeholder: 'แขวง / ตำบล',
            }"
            class="h-11"
          >
            <option value="1">แขวง / ตำบล</option>
          </TomSelect>
        </div>
        <div class="col-span-2">
          <span class="ml-1 text-danger text-l font-bold">*</span>
          <input
            type="text"
            placeholder="รหัสไปรษณีย์"
            class="forminput"
            v-model="customerSelect.zipcode"
          />
        </div>
      </div>

      <div class="grid grid-cols-4">
        <h3 class="" style="font-weight: bold">การจัดส่ง</h3>
        <div class="col-span-4 -mt-5">
          <span class="ml-1 text-danger font-bold text-l">*</span>
          <select name="" id="" class="forminput" v-model="expressId">
            <option value="" selected>เลือกประเภทขนส่ง...</option>
            <option value="1">ธรรมดา</option>
            <option value="2">On-Time Delivery</option>
            <option value="4">ราคาพิเศษสำหรับพัสดุขนาดใหญ่</option>
            <option value="5">พัสดุผลไม้</option>
            <option value="6">Happy Return</option>
            <option value="7">Happy Return Bulky</option>
          </select>
        </div>
        <div class="col-span-4 -mt-5">
          <span class="ml-1 text-danger font-bold text-l">*</span>
          <select name="" id="" class="forminput" v-model="articleCategory">
            <option value="" selected>เลือกประเภทสินค้า...</option>
            <option value="0">เอกสาร</option>
            <option value="1">อาหารแห้ง</option>
            <option value="2">ของใช้</option>
            <option value="3">อุปกรณ์ไอที</option>
            <option value="4">เสื้อผ้า</option>
            <option value="5">สื่อบันเทิง</option>
            <option value="6">อะไหล่รถยนต์</option>
            <option value="7">รองเท้า/กระเป๋า</option>
            <option value="8">อุปกรณ์กีฬา</option>
            <option value="9">เครื่องสำอางค์</option>
            <option value="10">เฟอร์นิเจอร์</option>
            <option value="11">
              ผลไม้(พัสดุประเภทผลไม้
              ระบบจะเลือกประเภทการขนส่งเป็นผลไม้โดยอัตโนมัติ)
            </option>
            <option value="99">อื่นๆ</option>
          </select>
        </div>

        <div class="col-span-4 -mt-5">
          <span class="ml-1 text-danger font-bold text-l">*</span>
          <select name="" id="" class="forminput" v-model="delivery">
            <option selected value="FLASH">Flash Express</option>
          </select>
        </div>

        <hr class="col-span-4" />

        <div class="col-span-4 -mt-5">
          <h3 class="" style="font-weight: bold">การชำระเงิน</h3>
        </div>

        <div class="col-span-4 -mt-5">
          <span class="ml-1 text-danger text-l font-bold">*</span>
          <select name="" id="" class="forminput" v-model="codEnabled">
            <option value="0">โอนเงิน (กสิกร)</option>
            <option value="1">COD (เก็บปลายทาง)</option>
          </select>
        </div>
        <div class="col-span-4 -mt-5">
          <input type="checkbox" name="" id="" v-model="isPaid" /> แจ้งชำระเงิน
        </div>
        <div class="col-span-4 -mt-5">
          <input
            type="file"
            name=""
            id=""
            v-show="isPaid"
            @change="onFileSelect($event)"
          />

          {{ file }}

          <span v-show="isPaid" class="ml-1 text-danger text-l font-bold"
            >*</span
          >
        </div>
        <div class="col-span-4 -mt-5">
          <div>
            <label
              >สถานะการชำระเงิน
              <span class="ml-1 text-danger text-l font-bold">*</span></label
            >
            <div class="flex flex-col mt-2 sm:flex-row">
              <FormCheck class="mt-2 mr-2 sm:mt-0">
                <FormCheck.Input
                  id="radio-switch-5"
                  type="radio"
                  name="horizontal_radio_button"
                  value="horizontal-radio-liam-neeson"
                />
                <FormCheck.Label htmlFor="radio-switch-5">
                  ชำระแล้ว
                </FormCheck.Label>
              </FormCheck>
              <FormCheck class="mt-2 mr-2 sm:mt-0">
                <FormCheck.Input
                  id="radio-switch-6"
                  type="radio"
                  name="horizontal_radio_button"
                  value="horizontal-radio-daniel-craig"
                />
                <FormCheck.Label htmlFor="radio-switch-6">
                  ยังไม่ได้ชำระ
                </FormCheck.Label>
              </FormCheck>
            </div>
          </div>
        </div>
        <div class="col-span-4 -mt-5">
          <div class="grid grid-cols-4 gap-4">
            <div class="col-span-4">
              <p>
                วันที่ชำระ
                <span class="ml-1 text-danger text-l font-bold">*</span>
              </p>
              <input
                type="datetime-local"
                class="forminput"
                v-model="paymentDate"
              />
            </div>
          </div>
        </div>
        <hr class="col-span-4" />
        <!-- <div class="col-span-4">
            <h3 class="" style="font-weight: bold;">
                พนักงานขาย
        </h3>
        </div>
        <div class="col-span-4">
          <input type="text" placeholder="ชื่อพนักงาน" class="forminput" />
        </div> -->
      </div>
    </div>
  </div>
  <br />
  <!-- Content 2 -->
  <div class="content">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <h2 class="mt-2 text-lg font-medium intro-y" id="head_text">
          รายการสินค้า
        </h2>
        <span
          ><span class="ml-1 text-danger text-l font-bold">*</span>
          <span class="text-[#666] text-xs">กรุณาเพิ่มสินค้าก่อน</span>
        </span>
        <br />
        <Button
          variant="primary"
          class="mr-2 shadow-md mt-3"
          id="goldgd"
          @click="productModal = true"
        >
          <Lucide icon="PlusCircle" class="block mx-auto w-4 h-4" />
          &nbsp; เพิ่มสินค้า
        </Button>
      </div>
      <!-- ... -->
      <div>
        <div class="mt-3">
          <input type="checkbox" name="" id="" /> พรีออร์เดอร์
        </div>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <!--table-->
    <div class="table-list">
      <div class="overflow-x-auto">
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="whitespace-nowrap">#</th>
              <th class="whitespace-nowrap">รูปสินค้า</th>
              <th class="whitespace-nowrap">
                <span style="display: block; width: 110px">ชื่อสินค้า</span>
              </th>
              <th class="whitespace-nowrap">รหัสสินค้า</th>
              <th class="whitespace-nowrap">ราคาขาย</th>
              <th class="whitespace-nowrap" style="width: 100px">จำนวน</th>
              <th class="whitespace-nowrap" style="width: 100px">ส่วนลด%</th>
              <th class="whitespace-nowrap" style="width: 100px">ส่วนลด</th>
              <th class="whitespace-nowrap">
                <span style="text-align: center">ดำเนินการ</span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) in productSelect" :key="index">
              <td>{{ index + 1 }}</td>
              <td><img src="" alt="" /></td>
              <td style="text-align: left">{{ item.productName }}</td>
              <td>{{ item.id }}</td>
              <td>{{ item.unitPrice }}</td>
              <td class="col-1">
                <input
                  type="number"
                  class="forminput"
                  v-model="quantity[index]"
                />
              </td>
              <td>
                <input
                  type="number"
                  class="forminput"
                  v-model="percentDiscount[index]"
                  @change="
                    caculate(index, item.unitPrice * quantity[index], $event)
                  "
                />
              </td>
              <td>
                <input
                  type="number"
                  readonly
                  class="forminput"
                  :value="discountPrice[index]"
                />
              </td>

              <td style="text-align: center">
                <button class="justify-center">
                  <Lucide
                    icon="Trash2"
                    class="justify-center w-4 h-4"
                    @click="removeItem(index)"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!--cart total-->
        <div class="mt-4">
          <div></div>
          <div></div>
          <div id="carttotal" style="float: right">
            <div class="grid grid-cols-2">
              <div>ภาษีมูลค่าเพิ่ม</div>
              <div class="text-right">{{ getVAT() }}</div>
            </div>
            <br />
            <div class="grid grid-cols-2">
              <div>ค่าจัดส่ง</div>
              <div class="text-right pl-12">
                <input
                  type="text"
                  v-model="shippingCost"
                  class="forminput bg-secondary"
                  disabled
                />
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>ค่าบริการ COD</div>
              <div class="text-right pl-12">
                <input type="text" v-model="codAmount" class="forminput" />
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>
                <select
                  class="form-select forminput"
                  @change="selectDiscountType($event.target.value)"
                >
                  <option>เลือกส่วนลด</option>
                  <option value="1">บาท</option>
                  <option value="2">%</option>
                </select>
              </div>

              <div class="text-right pl-12">
                <input
                  type="text"
                  v-model="discountOrder"
                  @change="selectDiscountType(discountType)"
                  class="forminput"
                />
              </div>
            </div>

            <div class="grid grid-cols-2 pt-3 pb-3">
              <div>
                <strong>ยอดรวม</strong>
              </div>
              <div class="text-right">{{ totalPrice() }}</div>
            </div>

            <div class="grid grid-cols-1">
              <div>
                <select
                  class="form-select forminput"
                  style="width: 100%"
                  @change="selectVAT($event.target.value)"
                >
                  <option value="0">เลือกประเภทภาษี</option>
                  <option value="0">ไม่มีภาษี</option>
                  <option value="7">ภาษีมูลค่าเพิ่ม 7%</option>
                  <option value="7">แยกภาษีมูลค่าเพิ่ม 7%</option>
                </select>
              </div>
            </div>
            <div class="grid grid-cols-1">
              <div>
                <textarea
                  class="mt-2 forminput"
                  placeholder="หมายเหตุ"
                  style="width: 100%"
                ></textarea>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-4" id="group_btn">
              <div class="...">
                <button
                  @click="addOrder()"
                  class="h-10 text-white goldgd b-none"
                  id="btn_save"
                >
                  บันทึก
                </button>
              </div>
              <div class="...">
                <button class="h-10 bg-[#af0000] text-white" id="btn_saveas">
                  บันทึกและสร้างใหม่
                </button>
              </div>
              <div class="...">
                <RouterLink :to="{ name: 'side-menu-orderslist' }">
                  <button class="h-10 bg-secondary" id="btn_cancel">
                    ยกเลิก
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <!--end cart total-->
      </div>
    </div>
    <!--end : table-->
  </div>
  <!-- Content 2 -->
  <!-- modal success -->
  <Dialog
    :open="productModal"
    @close="
      () => {
        setproductModal(false);
      }
    "
  >
    <Dialog.Panel
      class="sm:w-[600px] lg:w-[800px] container"
      style="height: 300px; overflow-y: scroll"
    >
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
                แท็ก
              </th>
              <th
                class="kv-align-center kv-align-middle"
                style="width: 120px"
                data-col-seq="6"
              >
                ราคาขาย
              </th>
              <th
                class="kv-align-center kv-align-middle"
                style="width: 12%"
                data-col-seq="7"
              >
                ดำเนินการ
              </th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in simpleProducts" :key="index">
            <tr :data-key="item.id" @click="selectProduct(item)">
              <td
                class="checkOne skip-export kv-align-center kv-align-middle kv-row-select"
                style="width: 30px"
                data-col-seq="0"
              >
                <div class="icheckbox_square-green" style="position: relative">
                  <input
                    v-model="ids"
                    type="checkbox"
                    id="checkbox1"
                    :value="item.id"
                  /><ins></ins>
                </div>
              </td>

              <td
                class="kv-align-center kv-align-middle"
                style="padding-top: 8px"
                data-col-seq="2"
              >
                <img
                  class="img-responsive previewImage"
                  :src="baseUrl + '/' + item.images"
                  alt=""
                  style="
                    width: 25px;
                    object-fit: cover;
                    height: 25px;
                    margin: 0 auto;
                  "
                  data-href="https://file.xcommerce.co.th/u1/default.png"
                />
              </td>
              <td
                class="kv-align-left kv-align-middle"
                style="
                  white-space: normal;
                  word-break: break-all;
                  width: 600px;
                  text-align: left;
                "
                data-col-seq="3"
              >
                <router-link
                  :to="{
                    name: 'product',
                    params: { productId: item.id },
                  }"
                >
                  {{ item.productName }}
                </router-link>
                <div class="small m-t-xs">
                  <span class="m-r-xs m-t-xs"
                    ><span class="m-r-xs" style="font-weight: bolder">SKU:</span
                    ><span style="font-weight: lighter">{{
                      item.productSKU
                    }}</span></span
                  >
                </div>
              </td>
              <td
                class="kv-align-center kv-align-middle"
                style="width: 180px"
                data-col-seq="4"
              >
                -
              </td>
              <td
                class="kv-align-center kv-align-middle"
                style="width: 120px"
                data-col-seq="6"
              >
                {{ item.unitPrice }}
              </td>
              <td
                class="kv-align-center kv-align-middle"
                style="width: 12%"
                data-col-seq="7"
              >
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded"
                >
                  เลือกสินค้า
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
          เพิ่มออเดอร์ {{ customerSelect["customerName"] }} สำเร็จ!
        </div>
        <Button
          variant="outline-secondary"
          type="button"
          @click.prevent="addSuccess"
        >
          ตกลง
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>

  <!-- modal Warehouse -->
  <Dialog
    :open="createwarehouseModal"
    @close="
      () => {
        setCreatewarehouseModal(false);
      }
    "
  >
    <Dialog.Panel>
      <div class="p-5 text-center">
        <div class="text-center">
          <img
            src="../assets/images/aladin.png"
            alt=""
            style="width: 100px; margin: auto"
          />
        </div>
        <div class="mt-5 text-3xl">คุณยังไม่มีคลังสินค้า..</div>
      </div>
      <div class="px-5 pb-8 text-center">
        <Button
          as="a"
          href="side-menu-warehouse"
          variant="danger"
          @click="
            () => {
              setCreatewarehouseModal(false);
            }
          "
          class="w-32 bg-[#af0000]"
        >
          สร้างคลังสินค้าที่นี่
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>

  <!-- modal Customer -->
  <Dialog
    :open="createCustomersModal"
    @close="
      () => {
        setCreateCustomersModal(false);
      }
    "
  >
    <Dialog.Panel>
      <div class="p-5 text-center">
        <div class="text-center">
          <img
            src="../assets/images/aladin.png"
            alt=""
            style="width: 100px; margin: auto"
          />
        </div>
        <div class="mt-5 text-3xl">คุณยังไม่มีลูกค้า..</div>
      </div>
      <div class="px-5 pb-8 text-center">
        <Button
          as="a"
          href="addCustomer"
          variant="danger"
          @click="
            () => {
              setCreateCustomersModal(false);
            }
          "
          class="w-32 bg-[#af0000]"
        >
          สร้างลูกค้าาที่นี่
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>
  <!-- modal Category -->
  <Dialog
    :open="createCategoriesModal"
    @close="
      () => {
        setCreateCategoriesModal(false);
      }
    "
  >
    <Dialog.Panel>
      <div class="p-5 text-center">
        <div class="text-center">
          <img
            src="../assets/images/aladin.png"
            alt=""
            style="width: 100px; margin: auto"
          />
        </div>
        <div class="mt-5 text-3xl">คุณยังไม่ได้สร้างหมวดหมู่..</div>
      </div>
      <div class="px-5 pb-8 text-center">
        <Button
          as="a"
          href="addCategory"
          variant="danger"
          @click="
            () => {
              setCreateCategoriesModal(false);
            }
          "
          class="w-32 bg-[#af0000]"
        >
          สร้างหมวดหมู่ที่นี่
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>
  <!-- modal Products -->
  <Dialog
    :open="createProductsModal"
    @close="
      () => {
        setCreateProductsModal(false);
      }
    "
  >
    <Dialog.Panel>
      <div class="p-5 text-center">
        <div class="text-center">
          <img
            src="../assets/images/aladin.png"
            alt=""
            style="width: 100px; margin: auto"
          />
        </div>
        <div class="mt-5 text-3xl">คุณยังไม่ได้สร้างสินค้า..</div>
      </div>
      <div class="px-5 pb-8 text-center">
        <Button
          as="a"
          href="addProduct"
          variant="danger"
          @click="
            () => {
              setCreateProductsModal(false);
            }
          "
          class="w-32 bg-[#af0000]"
        >
          สร้างสินค้าที่นี่
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>
</template>
<script lang="ts">
import axios from "axios";
const productModal = ref(false);
const setproductModal = (value: boolean) => {
  productModal.value = value;
};
const successModal = ref(false);
const setSuccessModal = (value: boolean) => {
  successModal.value = value;
};

const createwarehouseModal = ref(false);
const setCreatewarehouseModal = (value: boolean) => {
  createwarehouseModal.value = value;
};

const createCustomersModal = ref(false);
const setCreateCustomersModal = (value: boolean) => {
  createCustomersModal.value = value;
};

const createCategoriesModal = ref(false);
const setCreateCategoriesModal = (value: boolean) => {
  createCategoriesModal.value = value;
};

const createProductsModal = ref(false);
const setCreateProductsModal = (value: boolean) => {
  createProductsModal.value = value;
};
import { useInventory } from "../stores/inventory";

import { useAuth } from "../stores/auth";
const authStore = useAuth();
authStore.fetchCheckAuth();
const Inventory = useInventory();

//console.log("Check Inventory:" + JSON.stringify(Inventory.inventory));

export default {
  data() {
    return {
      baseUrl: `${import.meta.env.VITE_API_URL}`,
      warehouse: [] as any[],
      customers: [] as any[],
      categories: [] as any[],
      products: [] as any[],
      inventoryDetail: [] as any,

      loading: false,
      keyword: "",
      productData: [] as any[],
      simpleProducts: [] as any[],
      configProducts: [] as any[],
      bundleProducts: [] as any[],
      categoryId: "all",
      productSelect: [] as any[],
      customerList: [],
      quantity: [1],
      percentDiscount: [0],
      discountPrice: [0],

      codEnabled: 0,
      //delivery
      packDate: "",
      deliveryDate: "",
      createdDate: "",
      //new Customer
      isCutOffTime: false,
      //form customer
      fullName: "",
      email: "",
      phone: "",
      address: "",

      //form payment
      paymentDate: "",
      delivery: "FLASH",
      file: "",
      //form price
      discountType: 1,
      discountOrder: 0,
      discountSelectType: 0,
      codAmount: 0,
      shippingCost: 0,

      customerId: 1,
      socialName: "",
      customerSelect: {
        id: 1,
        customerProvinceName: "",
        customerCityName: "",
        customerName: "",
        customerDistrictName: "",
        customerAddressDetail: "",
        zipcode: "",
      },

      weight: "",
      width: "",
      lenght: "",
      height: "",

      isPaid: false,

      VAT: 7,
      inventoryId:
        Inventory.inventory.length > 0 ? Inventory.inventory[0]["id"] : "",
      expressId: 1,
      articleCategory: 0,
    };
  },
  components: {},
  methods: {
    // loadInventory(){
    //       const inventory = useInventory()
    //   inventory.setInventory()
    //   this.inventoryDetail = [];

    // const inventoryData  = inventory.getInventory;
    //   inventoryData.inventory.map((item: any) => {
    //   this.inventoryDetail.push(item);
    // });
    // this.inventoryId = this.inventoryDetail[0].id
    // console.log(this.inventoryDetail[0].id,',,,,,,')

    // },
    // async checkWarehouse() {
    //   const headers = {
    //     "Content-Type": "application/json",
    //     Authorization: `${localStorage.getItem("auth._token.local")}`,
    //   };
    //   const URL = `${
    //     import.meta.env.VITE_API_URL
    //   }/warehouse/getAllWarehouse`.replace(" ", "");
    //   const wh = await axios.post(
    //     URL,
    //     { inventoryId: this.inventoryId },
    //     { headers }
    //   );
    //   this.warehouse = wh.data.data;

    //   if (this.warehouse == null) {
    //     setCreatewarehouseModal(true);
    //   }
    // },

    // async checkCustomer() {
    //   const headers = {
    //       "Content-Type": "application/json",
    //       Authorization: `${localStorage.getItem("auth._token.local")}`,
    //     };
    //     const URL = `${
    //       import.meta.env.VITE_API_URL
    //     }/customer/getAllCustomer`.replace(" ", "");
    //     const orders = await axios.post(
    //       URL,
    //       { inventoryId: this.inventoryId },
    //       { headers }
    //     );
    //     this.customerList = orders.data.customers;

    //   if (this.customerList == null) {
    //     setCreateCustomersModal(true);
    //   }
    // },

    async checkCategories() {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };

      const URL =
        `${this.baseUrl}/getAllCategory`.replace(
          " ",
          ""
        );

      const categories = await axios.post(
        URL,
        { inventoryId: this.inventoryId },
        { headers }
    
      );
      this.categories = categories.data.data;

      if (this.categories == null) {
        setCreateCategoriesModal(true);
      }
    },
    // async checkProducts() {
    //   const headers = {
    //     "Content-Type": "application/json",
    //     Authorization: `${localStorage.getItem("auth._token.local")}`,
    //   };

    //   const URL =
    //     `${this.baseUrl}/getAllProduct`.replace(
    //       " ",
    //       ""
    //     );

    //   const products = await axios.post(
    //     URL,
    //     { inventoryId: this.inventoryId },
    //     { headers }
    
    //   );
    //   this.products = products.data.data;

    //   if (this.products == null) {
    //     setCreateProductsModal(true);
    //   }
    // },

    selectDiscountType(type: number) {
      if (type == 1) {
        this.discountSelectType = this.discountOrder;
      }
      if (type == 2) {
        this.discountSelectType = this.discountOrder / 100;
      }
    },
    getVAT() {
      const totalPrice = this.productSelect.reduce(
        (acc, curr, index) =>
          acc + curr.unitPrice * this.quantity[index] + this.shippingCost,
        0
      );
      const result = (totalPrice * this.VAT) / 100;
      return result;
    },
    totalPrice() {
      const result = this.productSelect.reduce(
        (acc, curr, index) => acc + curr.unitPrice * this.quantity[index],
        0
      );
      return result + this.shippingCost + this.getVAT();
    },
    selectVAT(vat: number) {
      this.VAT = vat;
      console.log(vat);
    },
    removeItem(index: number) {
      // this.productSelect = []
      this.productSelect.splice(index, 1);
      this.totalPrice();
    },
    setSocialName(name: string) {
      this.socialName = name;
    },
    onFileSelect(event: any) {
      this.file = event.target.files[0];
      // ทำอย่างอื่นต่อได้ตามต้องการ
    },
    async getAllCustomer() {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const URL = `${
          import.meta.env.VITE_API_URL
        }/customer/getAllCustomer`.replace(" ", "");
        const orders = await axios.post(
          URL,
          { inventoryId: this.inventoryId },
          { headers }
        );
        this.customerList = orders.data.customers;
        console.log("channel = ", this.customerList);
      } catch (err) {
        console.log(err);
        alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }
      if (this.customerList == null) {
        setCreateCustomersModal(true);
      }

    },
    caculate(index: number, p: number, e: any) {
      const discountPercentage = e.target.value;
      const originalPrice = p;
      const discountAmount = (originalPrice * discountPercentage) / 100;
      console.log(originalPrice, "x", discountPercentage, "/100");
      this.discountPrice[index] =
        originalPrice - (originalPrice - discountAmount);
    },
    flashPrice() {
      const weight = this.productSelect.reduce(
        (acc, curr, index) => acc + curr.weight * this.quantity[index],
        0
      );
      const length = this.productSelect.reduce(
        (acc, curr, index) => acc + curr.length * this.quantity[index],
        0
      );
      const height = this.productSelect.reduce(
        (acc, curr, index) => acc + curr.height * this.quantity[index],
        0
      );
      const width = this.productSelect.reduce(
        (acc, curr, index) => acc + curr.width * this.quantity[index],
        0
      );
      console.log(weight, length, height, width);
      this.flashrate(weight, length, height, width);
      this.weight = weight;
      this.width = width;
      this.lenght = length;
      this.height = height;
    },
    async flashrate(
      weight: number,
      width: number,
      length: number,
      height: number
    ) {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const URL = `${import.meta.env.VITE_API_URL}/order/rate`.replace(
          " ",
          ""
        );
        const flashrate = await axios.post(
          URL,
          {
            srcProvinceName: Inventory.inventory[0].shop.provinceName,
            srcCityName: Inventory.inventory[0].shop.cityName,
            srcDistrictName: Inventory.inventory[0].shop.districtName,
            srcPostalCode: Inventory.inventory[0].shop.postalCode,
            dstProvinceName: this.customerSelect.customerProvinceName,
            dstCityName: this.customerSelect.customerCityName,
            dstDistrictName: this.customerSelect.customerDistrictName,
            dstPostalCode: this.customerSelect.zipcode,
            weight: weight,
            width: width,
            length: length,
            expressCategory: this.expressId,
            height: height,
          },
          { headers }
        );
        this.shippingCost = flashrate.data.data.data.estimatePrice / 100;
        console.log("channel = ", this.shippingCost);
      } catch (err) {
        console.log(err);
        //alert("เช็คค่าขนส่งไม่ได้");
      }
    },
    selectProduct(p: string) {
      this.productSelect.push(p);
      this.quantity[this.productSelect.length] = 1;
      this.discountPrice[this.productSelect.length] = 0;
      this.percentDiscount[this.productSelect.length] = 0;
      this.flashPrice();
      //this.flashrate(this.productSelect[0].weight,this.productSelect[0].width,this.productSelect[0].length,this.productSelect[0].height)
    },
    caculatePrice() {},
    async addOrder() {
      this.productData = [];

      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const URL = `${import.meta.env.VITE_API_URL}/order/addOrder`.replace(
          " ",
          ""
        );

        this.productSelect.forEach((item, index) => {
          let data = {
            productId: item.id,
            quantity: this.quantity[index],
            discountPrice: this.discountPrice[index],
            discountpercent: this.percentDiscount[index],
          };
          this.productData.push(data);
        });
        const response = await axios.post(
          URL,
          {
            inventoryId: this.inventoryId as number,
            customerId: this.customerSelect.id as number,
            //productId: this.productSelect[0].id,
            expressId: this.expressId ? this.expressId : (1 as number),
            codId: 1,
            bankTransferId: 1,
            insured: false,
            codAmount: this.codAmount,
            codEnabled: this.codEnabled,
            packDate: this.packDate,
            deliveryDate: this.deliveryDate,
            createdDate: this.createdDate,
            delivery: this.delivery,
            file: "file",
            paymentDate: this.paymentDate,
            amount: 1,
            socialName: this.socialName,
            products: this.productData,
            totalPrice: this.totalPrice(),
            flashPrice: this.shippingCost,
            weight: this.weight,
            width: this.width,
            lenght: this.lenght,
            height: this.height,
            customer_new: this.customerSelect,
            articleCategory: this.articleCategory as number,
          },
          { headers }
        );
        if (response.data.code == 200) {
          setSuccessModal(true);
          this.$router.push("/dashboard/side-menu-orderslist");
        }
      } catch (error) {
        console.log(error);
        alert("ไม่สามารถเพิ่มลูกค้าได้ โปรดลองอีกครั้ง");
      }
    },
    addSuccess() {
      setSuccessModal(false);
      this.$router.push("/dashboard/customersList");
    },
    //     selectCustomer(customer:any) {
    //   const data = customer
    //   console.log(data);
    //   this.customerId = data.id
    //   this.socialName = data.socialName
    //   this.customerName = data.customerName
    //   this.customerProvinceName = data.customerProvinceName
    //   this.customerCityName = data.customerName
    //   this.customerDistrictName = data.customerDistrictName
    //   this.customerAddressDetail = data.customerAddressDetail

    // },
    async getAllProduct(type: any) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      const URL = `${import.meta.env.VITE_API_URL}/product/search`.replace(
        " ",
        ""
      );
      const response = await axios.post(
        URL,
        {
          keyword: this.keyword,
          categoryId: this.categoryId,
          productType: type,
          inventoryId: this.inventoryId,
        },
        { headers }
      );
      switch (type) {
        case "SIMPLE":
          this.simpleProducts = response.data.data;
          break;
        case "CONFIG":
          this.configProducts = response.data.data;
          break;
        case "BUNDLE":
          this.bundleProducts = response.data.data;
          break;
      }

      if (this.simpleProducts == null || this.configProducts == null ||this.bundleProducts == null ) {
        setCreateProductsModal(true);
      }
    },
    async getAllWarehouse() {
      this.loading = true;

      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const URL = `${
          import.meta.env.VITE_API_URL
        }/warehouse/getAllWarehouse`.replace(" ", "");

        const wh = await axios.post(
          URL,
          { inventoryId: this.inventoryId },
          { headers }
        );
        this.warehouse = wh.data.data;
        //console.log("channel = ", this.warehouse);
      
      } catch (err) {
        console.log(err);
        this.loading = false;
        alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }

      if (this.warehouse == null) {
        setCreatewarehouseModal(true);
      }
    },
  },
  mounted() {
    // this.checkWarehouse();
    // this.checkCustomer();
    this.checkCategories();
    // this.checkProducts();
    this.caculatePrice();
    this.getAllProduct("SIMPLE");
    this.getAllCustomer();
    this.getAllWarehouse();
    this.totalPrice();
    this.getVAT();
  },
  beforeMount() {
    // const inventory = useInventory()
    // inventory.setInventory()
    //this.loadInventory()
  },
};
</script>
<style>
@import "..//assets/css/components/Addorder.css";

.forminput {
  border: 1px solid #dadada !important;
}
</style>
