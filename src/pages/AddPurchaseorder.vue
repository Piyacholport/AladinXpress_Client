
<script></script>
<style></style><script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
import Button from "../base-components/Button";
import { FormInput} from "../base-components/Form";
import Lucide from "../base-components/Lucide";
</script>

<template>
  <!-- BEGIN: Content -->

  <h2 class="mr-auto text-lg font-bold " id="">
    สร้างใบสั่งซื้อ
  </h2>

  <br />
  <div class="content">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <h2 class="mt-2 text-lg font-bold intro-y" id="">
          ข้อมูลใบสั่งซื้อ
        </h2>
      </div>
      <!-- ... -->
      <div>
        <div class="grid grid-cols-2 gap-4">
          <div class="">
            <p>วันที่แพ็ค <span class="text-danger text-l font-bold">*</span></p>
            <input type="date" class="forminput" />
          </div>
          <div class="">
            <p>วันที่รับสินค้า <span class="text-danger text-l font-bold">*</span></p>
            <input type="date" class="forminput" />
          </div>
        </div>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div class="grid grid-cols-2 gap-6">
      <div class="grid grid-cols-8 gap-1">
        
        <h2 class="col-span-7 text-l" style="font-weight: bold">ซัพพลายเออร์</h2>
        <br />
        <div class="col-span-7">
          <span class="text-danger text-l font-bold">*</span>
          <input type="text" class="forminput text-s" placeholder="ชื่อหรือเบอร์โทร" />
        </div>
        <div style="text-align: center">
          <span
            class="forminput flex items-center justify-center"
            style="width: 50px; background-color: #af0000; color: white"
          >
            <Lucide
              icon="PlusCircle"
              class="flex items-center justify-center w-5 h-5"
            />
          </span>
        </div>

      

        <div class="col-span-8">
          <span class="text-danger text-l font-bold">*</span>
          <input type="text" placeholder="ชื่อผู้ผลิต" class="forminput" />
        </div>
        <div class="col-span-4">
          <span class="text-danger text-l font-bold">*</span>
          <input type="text" placeholder="อีเมล" class="forminput" />
        </div>
        <div class="col-span-4">
          <span class="text-danger text-l font-bold">*</span>
          <input type="text" placeholder="เบอร์โทร" class="forminput" />
        </div>
        <div class="col-span-8">
          <span class="text-danger text-l font-bold">*</span>
          <textarea
            name=""
            id=""
            rows="2"
            class="forminput"
            placeholder="ที่อยู่"
          ></textarea>
        </div>
       
        <div class="col-span-8">
          <span class="text-danger text-l font-bold">*</span>
          <input
            type="number"
            placeholder="เลขที่อ้างอิง..."
            class="forminput"
          />
        </div>
        <div class="col-span-8">
          <span class="text-danger text-l font-bold">*</span>
          <input
            type="file"
            name="file"
            id="file"
            class="inputfile forminput"
          />
        </div>
      </div>

      <div class="rows">
        <h3 class="" style="font-weight: bold">จัดส่งโดย</h3>
        <br />
        <div class="col-span-4">
          <span class="text-danger text-l font-bold">*</span>
          <select name="" id="" class="forminput">
            <option value="">Flash</option>
            <option value="">Kerry</option>
            <option value="">J&T</option>
          </select>
        </div>
        <div class="col-span-4">
          <span class="text-danger text-l font-bold">*</span>
          <input
            type="text"
            placeholder="ค่าขนส่ง"
            class="forminput"
            value="0"
          />
        </div>

        <br />
        <hr class="col-span-4" />
        <br />
        <div class="col-span-4">
          <h3 class="" style="font-weight: bold">คลังสินค้า</h3>
          <br />
        </div>

        <div class="col-span-4">
          <span class="text-danger text-l font-bold">*</span>
          <select name="" id="" class="forminput">
            <option value="">My Warehouse</option>
          </select>
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
          รายการสั่งซื้อ
        </h2>
      </div>
      <!-- ... -->
      <div>
        <div class="mt-3"></div>
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
              <th class="whitespace-nowrap">ช่องทางขาย</th>
              <th class="whitespace-nowrap">รูปสินค้า</th>
              <th class="whitespace-nowrap">
                <span style="display: block; width: 110px">ชื่อสินค้า</span>
              </th>
              <th class="whitespace-nowrap">รหัสสินค้า</th>
              <th class="whitespace-nowrap">ต้นทุน</th>
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
              <td>Facebook</td>
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
            <tr>
              <td>Facebook</td>
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
        <div class="mt-4 grid-cols-4">
     
          <div id="carttotal" style="margin-left: 50%;">
            <div class="grid grid-cols-2">
              <div>ภาษีมูลค่าเพิ่ม</div>
              <div class="text-right">2</div>
            </div>

            <div class="grid grid-cols-2">
              <div>ยอดรวม</div>
              <div class="text-right">2</div>
            </div>
            <div class="grid grid-cols-2">
              <div>ภาษีมูลค่าเพิ่ม</div>
              <div class="text-right">2</div>
            </div>
                    <div class="grid grid-cols-2">
              <div>ส่วนลด</div>
              <div class="text-right">2</div>
            </div>
            <div class="grid grid-cols-2">
              <div>
                <strong>ยอดสุทธิ</strong>
              </div>
              <div class="text-right">200</div>
            </div>

            <div class="grid grid-cols-1">
              <span class="text-danger text-l font-bold">*</span>
                <div>
                <select class="form-select forminput" style="width: 100%;">
                  <option>เลือกประเภทภาษี</option>
                  <option>ไม่มีภาษี</option>
                  <option>ภาษีมูลค่าเพิ่ม 7%</option>
                  <option>แยกภาษีมูลค่าเพิ่ม 7%</option>
                </select>
              </div>
              <div>
                <span class="text-danger text-l font-bold">*</span>
                <textarea
                  class=" forminput"
                  placeholder="หมายเหตุ"
                  style="width: 100%"
                ></textarea>
              </div>
            </div>


          </div>
        </div>
        <!--end cart total-->
      </div>
      
    </div>
    
    <!--end : table-->
  </div>

  <div class="flex flex-col justify-end gap-2 mt-5 md:flex-row" style="float: right;">
        <a href="#">
          <Button
            
            class="mr-2 shadow-md"
            id="goldgd"
         
          >
            <Lucide icon="Save" class="block mx-auto" />
            &nbsp; บันทึก
          </Button></a
        >
      </div>
  <!-- Content 2 -->
</template>
<script></script>
<style>
@import "..//assets/css/components/Addorder.css";
.inputfile::file-selector-button {
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #af0000;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
}
.inputfile::file-selector-button:hover {
  background: #950000;
}
</style>

