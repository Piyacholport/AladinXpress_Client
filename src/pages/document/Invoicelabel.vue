<template>
    <div class="mb-10">
      <!-- C O N T E N T 1 -->
      <div
        class="flex flex-col items-center p-5 sm:flex-row border-slate-200/60 dark:border-darkmode-400"
      >
        <div class="mr-auto">
          <div class="grid grid-cols-12 gap-0">
            <div class="col-span-2">
              <img
                src="../../assets/images/profile.jpg"
                alt=""
                style="width: 100px"
              />
            </div>
            <!-- ... -->
            <div class="col-span-4">
              <p class="text-xl font-bold">ชื่อที่อยู่ผู้ฝากส่ง</p>
              <p>Nextra VILL</p>
              <p>โทร. 0966954022</p>
              <p>123 พญาไท พญาไท กรุงเทพมหานคร 10400</p>
            </div>
          </div>
        </div>
        <div class="">
          <p class="text-2xl">FLASH EXPRESS</p>
          <p class="text-lg">Facebook / Facebook</p>
        </div>
      </div>
      <div class="text-center p-5" style="border-bottom: 5px dashed black">
        <div class="grid grid-cols-12 gap-0">
          <div class="text-left col-span-5">
            <p class="mb-3">Order No.</p>
            <img src="../../assets/images/Barcode.png" alt="" />
            <p class="mt-3">OD00000004</p>
          </div>
          <div class="col-span-4 text-left">
            <p class="text-xl font-bold">ชื่อที่อยู่ผู้รับ</p>
            <p>Ok HerbalL</p>
            <p>โทร. 191</p>
            <p>Bangkhen Bangkok 10220</p>
  
            <span class="inline-grid grid-cols-7 mt-3 font-bold">
              <span class="border-solid border-2 border-black p-3">1</span>
              <span class="border-solid border-2 border-black p-3 bdleftnone"
                >0</span
              >
              <span class="border-solid border-2 border-black p-3 bdleftnone"
                >2</span
              >
              <span class="border-solid border-2 border-black p-3 bdleftnone"
                >2</span
              >
              <span class="border-solid border-2 border-black p-3 bdleftnone"
                >0</span
              >
            </span>
          </div>
          <div class="col-span-2">
            <div
              class="grid grid-cols-1 gap-4 place-items-end"
              style="height: 100%"
            >
              <div>#1</div>
            </div>
          </div>
        </div>
      </div>
      <!--END  C O N T E N T 1 -->
      <!-- C O N T E N T 2 -->
      <div
        class="flex flex-col items-center p-5 sm:flex-row border-slate-200/60 dark:border-darkmode-400"
      >
        <div class="mr-auto">
          <div class="grid grid-cols-12 gap-0">
            <div class="col-span-2">
              <img
                src="../../assets/images/profile.jpg"
                alt=""
                style="width: 100px"
              />
            </div>
            <!-- ... -->
            <div class="col-span-4">
              <p class="font-bold">Nextra VILL</p>
              <p>123 พญาไท พญาไท กรุงเทพมหานคร 10400</p>
              <p>เบอร์โทร. <span></span></p>
              <p class="font-bold">เลขประจำตัวผู้เสียภาษี : <span></span></p>
            </div>
          </div>
        </div>
        <div class="text-right">
          <p class="text-xl">ต้นฉบับ / Original</p>
          <p class="text-2xl">ใบเสร็จรับเงิน / ใบส่งสินค้า</p>
          <p class="font-bold">RECEIPT / DELIVERY ORDER</p>
        </div>
      </div>
      <!--END  C O N T E N T 2 -->
      <!-- C O N T E N T 3 -->
      <div
        class="flex flex-col items-center p-5 sm:flex-row border-slate-200/60 dark:border-darkmode-400"
      >
        <div class="mr-auto" style="width: 50%">
          <div class="mt-5 p-5 border-solid border-2 border-black">
            <p class="font-bold">นามผู้ซื้อ/Sold To : <span></span></p>
            <p class="font-bold">ที่อยู่/Address : <span></span></p>
            <p class="font-bold">เบอร์โทร : <span></span></p>
            <p class="font-bold">เลขประจำตัวผู้เสียภาษี/Tax ID : <span></span></p>
          </div>
        </div>
        <div class="text-right">
          <div class="col-span-5 text-right">
            <img
              src="../../assets/images/Barcode.png"
              alt=""
              class="mt-3"
              style="width: 100%"
            />
            <p class="mt-3">คำสั่งซื้อ/Order : OD00000004</p>
            <p class="">วันที่/Date : 25-04-2023</p>
          </div>
        </div>
      </div>
      <!--END  C O N T E N T 3 -->
      <!-- C O N T E N T 4 -->
      <div class="ml-5">
        <div class="mt-5">
          <table>
            <thead>
              <tr>
                <th style="width: 80px;">
                  รหัสสินค้า <br />
                  SKU
                </th>
                <th style="width: 300px;">
                  รายการ <br />
                  Description
                </th>
                <th style="width: 80px;">
                  จำนวน <br />
                  Qty
                </th>
                <th style="width: 80px;">
                  หน่วย <br />
                  UOM
                </th>
                <th style="width: 80px;">
                  ราคาต่อหน่วย <br />
                  Unit Price
                </th>
                <th style="width: 80px;">
                  ส่วนลด <br />
                  Discount
                </th>
                <th style="width: 80px;">
                  จำนวนเงิน <br />
                  Net Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0000</td>
                <td class="text-left">0000</td>
                <td>0000</td>
                <td>0000</td>
                <td>0000</td>
                <td>0000</td>
                <td>0000</td>
              </tr>
              <table>
                <tr class="">
                  <td  rowspan="3" class="text-left" style="width: 993px; vertical-align:top;">
                    <span class="font-bold">หมายเหตุ/Remark:</span>
                  </td>
                  <td class="bggray">รวมทั้งสิ้น/Sub Total</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td class="bggray">ส่วนลด</td>
                  <td>50.00</td>
                </tr>
                <tr>
                  <td class="bggray">ขนส่งและบริการ/Shipping & Service</td>
                  <td>50.00</td>
                </tr>
                <tr>
                  <td class="text-left">
                    <b>ตัวอักษร :</b> ห้าสิบบาทถ้วน
                  </td>
                  <td class="bggray">จำนวนเงินรวม/Total</td>
                  <td>50.00</td>
                </tr>
              </table>
            </tbody>
          </table>
        </div>
      </div>
      <!--END  C O N T E N T 4 -->
  
      <!--  C O N T E N T 5 -->
      <div class="" style="font-size: 16px">
        <div class="ml-5 mt-5">
          <p class="font-bold">ชำระเงินโดย/Paid By :</p>
        </div>
        <div class="grid grid-cols-12 gap-4 ml-10">
          <div class="col-span-3 text-left font-bold">
            [ <span class="ml-4">]</span> เงินสด/Cash
          </div>
  
          <div class="col-span-9 text-left font-bold">
            จำนวนเงิน/Amount ........................................ วันที่/Date
            ........................................
          </div>
        </div>
  
        <div class="grid grid-cols-12 gap-4 ml-10 mt-3">
          <div class="col-span-3 text-left font-bold">
            [ <span class="ml-4">]</span> โอนผ่านธนาคาร/Bank Transfer
          </div>
  
          <div class="col-span-9 text-left font-bold">
            จำนวนเงิน/Amount ........................................ วันที่/Date
            ........................................
          </div>
        </div>
  
        <div class="grid grid-cols-12 gap-4 ml-10 mt-3">
          <div class="col-span-3 text-left font-bold">
            [ <span class="ml-4">]</span> สั่งจ่ายเช็ค/Cheque
          </div>
  
          <div class="col-span-9 text-left font-bold">
            ธนาคาร/Bank ........................................ เลขที่/Ref.
            ........................................ วันที่/Date
            ........................................
  
            <br />
            <p class="mt-3">
              จำนวนเงิน/Amount ........................................
            </p>
          </div>
        </div>
      </div>
  
      <!--END  C O N T E N T 5 -->
  
      <div class="text-center mt-10">
        <div class="grid grid-cols-2 gap-4 ml-10" style="margin-top: 100px">
          <div class="text-center font-bold" style="font-size: 16px">
            <p class="">
              ........................................................................................
            </p>
            <p class="mt-5">ผู้จัดการ/ผู้รับมอบอำนาจแทน</p>
            <p class="mt-5">วันที่............../............../..............</p>
          </div>
  
          <div class="text-center font-bold" style="font-size: 16px">
            <p class="">
              ........................................................................................
            </p>
            <p class="mt-5">ผู้รับเงิน</p>
            <p class="mt-5">วันที่............../............../..............</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script lang="ts">
  import axios from "axios";
  export default {
    props: {
      orderId: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        order: {
          amount: 0,
          totalPrice: 0,
          customer: {
            customerAddressDetail: "",
            customerDistrictName: "",
            customerCityName: "",
            customerProvinceName: "",
            zipcode: "",
            telephone: "",
            customerName: "",
          },
          product: {
            productName: "",
            unitPrice: 0,
          },
        },
      };
    },
    methods: {
      async getOrderById() {
        const getOrder = await axios.post(
          `${import.meta.env.VITE_API_URL}/order/getOrder`,
          {
            id: Number(this.orderId),
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${localStorage.getItem("auth._token.local")}`,
            },
          }
        );
        this.order = getOrder.data.order;
        console.log("get od = ", getOrder);
        console.log("this od = ", this.order);
      },
    },
    created() {
      this.getOrderById();
    },
  };
  </script>
  
  <style>
  .bdleftnone {
    border-left: none;
  }
  table,
  th,
  tr,
  td {
    border: 1px solid #333;
    background: #fff ;
  }
  th{
    background: #efefef;
  }
  .bggray{
    background: #efefef;
    text-align: right;
    font-weight: bold;
    width: 294px;
  }
  </style>
  <!-- โค้ดเก่า -->
  
  <!-- <template>
    <div class="page-container">
      <main class="">
        <div id="invoice-app">
          <div class="header">
            <div>
              <p class="mb-3">FLASH EXPRESS</p>
              <p><strong>Bill to:</strong></p>
              <p>
                {{ order.customer.customerAddressDetail }} {{ order.customer.telephone }}
              </p>
              <p>{{ order.customer.customerAddressDetail }}</p>
              <p>{{ order.customer.customerDistrictName }}</p>
              <p>{{ order.customer.customerCityName }}</p>
              <p>{{ order.customer.customerProvinceName }} {{ order.customer.zipcode }}</p>
            </div>
            <div>
              <div class="section-spacer"></div>
              <div class="section-spacer">
                <p><strong>Bill from:</strong></p>
                <p>Nextra Digital</p>
                <p>Nextra Digital</p>
                <p>Nextra Digital</p>
                <p>Nextra Digital</p>
              </div>
            </div>
          </div>
          <hr
            style="
              height: 20px;
              width: 100%;
              text-align: left;
              margin-left: 0;
              margin-top: 30px;
            "
          />
          <table class="responsive-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Item</th>
                <th>Price/unite</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tr>
              <td class="text-center" data-label="No">1</td>
              <td class="text-center" data-label="Item">{{ order.product.productName }}</td>
              <td class="text-center" data-label="Price/unite">
                {{ order.product.unitPrice }}
              </td>
              <td class="text-center" data-label="Quantity">{{ order.amount }}</td>
              <td class="text-center" data-label="Total">{{ order.totalPrice }}</td>
            </tr>
          </table>
          <div style="display: flex; justify-content: end">
            <table class="">
              <tr>
                <td><p>ส่วนลด</p></td>
                <td>123</td>
              </tr>
              <tr>
                <td><p>ค่าบริการ</p></td>
                <td>123</td>
              </tr>
              <tr class="text-bold">
                <td>ยอดสุทธิ</td>
                <td>9999</td>
              </tr>
            </table>
          </div>
       <div class="section-spacer">
            <p>Notes:</p>
            <p>note here</p>
          </div>
  
          <div class="section-spacer">
            <p>Terms:</p>
            <p>term here</p>
          </div> 
        <button v-on:click="printInvoice">Print Invoice</button> 
        </div>
      </main>
    </div>
  </template>
  -->
  <!-- โค้ดเก่า -->