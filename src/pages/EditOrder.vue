<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
import Button from "../base-components/Button";
import { FormInput } from "../base-components/Form";
import Lucide from "../base-components/Lucide";
import { TinySliderElement } from "../base-components/TinySlider";
</script>

<template>
  <!-- BEGIN: Content -->

  <h2 class=" text-lg font-medium intro-y" id="head_text">แก้ไขออเดอร์</h2>

  <br />
  <div class="content">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <h2 class="mr-auto text-lg font-bold" id="">
          ข้อมูลทั่วไป
        </h2>
      </div>
      <!-- ... -->
      <div>
        <div class="grid grid-cols-3 gap-4">
          <div class="">
            <p>วันที่แพ็ค</p>
            <input type="date" class="forminput" />
          </div>
          <div class="">
            <p>วันที่รับสินค้า</p>
            <input type="date" class="forminput" />
          </div>
          <div class="">
            <p>วันที่ขาย</p>
            <input type="date" class="forminput" />
          </div>
        </div>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div class="grid grid-cols-2 gap-6">
      <div class="grid grid-cols-4 gap-4">
        <h3 class="" style="font-weight: bold">ข้อมูลลูกค้า</h3>
        <br />
        <div class="col-span-3">
          <input type="text" class="forminput" placeholder="ค้นหาลูก้า..." />
        </div>
        <div style="text-align: center">
          <button class="forminput flex items-center justify-center">
            <Lucide
              icon="Search"
              class="flex items-center justify-center w-4 h-4"
            />ค้นหา
          </button>
        </div>
        <div class="col-span-4">
          <select name="" id="" class="forminput">
            <option value="">โกดังบางนา 1</option>
          </select>
        </div>
        <div class="col-span-4">
          <input type="text" placeholder="ชื่อโซเชียล" class="forminput" />
        </div>
        <br />
        <hr class="col-span-4" />
        <br />
        <div class="col-span-4">
          <input type="text" placeholder="ชื่อ - นามสกุล" class="forminput" />
        </div>
        <div class="col-span-2">
          <input type="text" placeholder="อีเมล" class="forminput" />
        </div>
        <div class="col-span-2">
          <input type="text" placeholder="เบอร์โทร" class="forminput" />
        </div>
        <div class="col-span-4">
          <textarea
            name=""
            id=""
            rows="2"
            class="forminput"
            placeholder="ที่อยู่"
          ></textarea>
        </div>
        <div class="col-span-4">
          <input type="number" placeholder="รหัสไปรษณีย์" class="forminput" />
        </div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <h3 class="" style="font-weight: bold">การจัดส่ง</h3>
        <br />
        <div class="col-span-4">
          <select name="" id="" class="forminput">
            <option value="">Flat Rates</option>
          </select>
        </div>
        <div class="col-span-4">
          <select name="" id="" class="forminput">
            <option value="">Flash Express</option>
          </select>
        </div>

        <hr class="col-span-4" />

        <div class="col-span-4">
          <h3 class="" style="font-weight: bold">การชำระเงิน</h3>
        </div>

        <div class="col-span-4">
          <select name="" id="" class="forminput">
            <option value="">โอนเงิน (กสิกร)</option>
            <option value="">CODE (เก็บปลายทาง)</option>
          </select>
        </div>
        <div class="col-span-4">
          <input type="checkbox" name="" id="" /> แจ้งชำระเงิน
        </div>
        <div class="col-span-4">
          <input type="file" name="" id="" />
        </div>
        <div class="col-span-4">
          <div class="grid grid-cols-4 gap-4">
            <div class="col-span-2">
              <p>วันที่ชำระ</p>
              <input type="date" class="forminput" />
            </div>
            <div class="col-span-2">
              <p>วันที่ชำระ</p>
              <input type="date" class="forminput" />
            </div>
          </div>
        </div>
        <hr class="col-span-4" />
        <div class="col-span-4">
          <h3 class="" style="font-weight: bold">พนักงานขาย</h3>
        </div>
        <div class="col-span-4">
          <input type="text" placeholder="ชื่อพนักงาน" class="forminput" />
        </div>
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
              <th class="whitespace-nowrap">จำนวน</th>
              <th class="whitespace-nowrap">ส่วนลด%</th>
              <th class="whitespace-nowrap">ส่วนลด</th>
              <th class="whitespace-nowrap">ยอดรวม</th>
              <th class="whitespace-nowrap">
                <span style="text-align: center">ดำเนินการ</span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td><img src="" alt="" /></td>
              <td style="text-align: left">รองเท้าผ้าใบ</td>
              <td>TD00001</td>
              <td>100</td>
              <td>1</td>
              <td>10%</td>
              <td>100</td>
              <td>80.00</td>

              <td style="text-align: center">
                <button class="justify-center">
                  <Lucide icon="Trash2" class="justify-center w-4 h-4" />
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
              <div class="text-right">2</div>
            </div>

            <div class="grid grid-cols-2">
              <div>ภาษีมูลค่าเพิ่ม</div>
              <div class="text-right pl-12">
                <input type="text" value="50" class="forminput" />
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>ค่าบริการ COD</div>
              <div class="text-right pl-12">
                <input type="text" value="50" class="forminput" />
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>
                <select class="form-select forminput">
                  <option>เลือกส่วนลด</option>
                  <option>บาท</option>
                  <option>%</option>
                </select>
              </div>

              <div class="text-right pl-12">
                <input type="text" value="50" class="forminput" />
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>
                <strong>ยอดรวม</strong>
              </div>
              <div class="text-right">200</div>
            </div>

            <div class="grid grid-cols-1">
              <div>
                <select class="form-select forminput" style="width: 100%">
                  <option>เลือกประเภทภาษี</option>
                  <option>ไม่มีภาษี</option>
                  <option>ภาษีมูลค่าเพิ่ม 7%</option>
                  <option>แยกภาษีมูลค่าเพิ่ม 7%</option>
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
                <button class="" id="btn_save">บันทึก</button>
              </div>
              <div class="...">
                <button class="" id="btn_saveas">บันทึกและสร้างใหม่</button>
              </div>
              <div class="...">
                <button class="" id="btn_cancel">ยกเลิก</button>
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
</template>
<script></script>
<style>
@import "..//assets/css/components/Addorder.css";
</style>
