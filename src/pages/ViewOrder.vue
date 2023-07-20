<script setup lang="ts">
import Button from "../base-components/Button";
import Lucide from "../base-components/Lucide";
import { Menu } from "../base-components/Headless";
</script>

<template>
  <div class="">
    <div class="intro-y">
      <div
        class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
      >
        <h2 class="mr-auto text-lg font-bold">
          รายละเอียดคำสั่งซื้อ : OD000{{ dataOrders.id }}
        </h2>
        <!-- menu1 -->
        <div class="mr-3 mt-2">
          <Button variant="secondary" class="w-32 mb-2 mr-2">
            <Lucide icon="Repeat" class="w-4 h-4 mr-2" /> สั่งซื้อซ้ำ
          </Button>

          <Button variant="secondary" class="w-32 mb-2 mr-2">
            <Lucide icon="XCircle" class="w-4 h-4 mr-2" /> ยกเลิก
          </Button>

          <Button variant="secondary" class="w-32 mb-2 mr-2">
            <Lucide icon="Clock" class="w-4 h-4 mr-2" /> พรีออเดอร์
          </Button>
        </div>
        <!-- menu2 -->
        <div class="mr-3">
          <Menu>
            <Menu.Button :as="Button" variant="outline">
              <Lucide icon="Printer" class="w-4 h-4 mr-2" />
              พิมพ์เอกสาร
              <Lucide icon="ChevronDown" class="w-4 h-4 ml-2" />
            </Menu.Button>
            <Menu.Items class="w-80">
              <Menu.Header>Export Tools</Menu.Header>
              <Menu.Divider />
              <Menu.Item class="text-black">
                <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                ใบกำกับภาษี
              </Menu.Item>
              <Menu.Item class="text-black">
                <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                ใบเสร็จ
              </Menu.Item>

              <Menu.Item class="text-black">
                <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                ใบส่งสินค้า
              </Menu.Item>
              <Menu.Item class="text-black">
                <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                ใบเสนอราคา
              </Menu.Item>
              <Menu.Item class="text-black">
                <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                ใบจ่าหน้าพัสดุ
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </div>
  </div>
  <br />
  <div class="">
    <div class="col-span-12 intro-y lg:col-span-4">
      <!-- BEGIN: Input -->
      <div class="intro-y box">
        <div
          class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <h2 class="mr-auto text-base font-bold">Facebook / Facebook</h2>
          วิธีการตัดสต๊อก : จองสินค้าเมื่อสร้างคำสั่งซื้อ
          และตัดสต๊อกเมื่อยืนยันการชำระเงิน
        </div>
        <div class="p-5">
          <div
            class="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20"
          >
            <div
              class="z-10 flex items-center flex-1 intro-x lg:text-center lg:block"
            >
              <Button
                variant="primary"
                class="w-10 h-10 rounded-full bg-[#af0000] border-none"
              >
                1
              </Button>
              <div
                class="ml-3 text-base font-medium lg:w-32 lg:mt-3 lg:mx-auto"
              >
                ยังไม่จ่าย
              </div>
            </div>
            <div
              class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block"
            >
              <Button
                class="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"
              >
                2
              </Button>
              <div
                class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400"
              >
                จ่ายแล้ว
              </div>
            </div>
            <div
              class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block"
            >
              <Button
                class="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"
              >
                3
              </Button>
              <div
                class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400"
              >
                ยืนยัน
              </div>
            </div>
            <div
              class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block"
            >
              <Button
                class="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"
              >
                4
              </Button>
              <div
                class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400"
              >
                กำลังแพ็ค
              </div>
            </div>
            <div
              class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block"
            >
              <Button
                class="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"
              >
                5
              </Button>
              <div
                class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400"
              >
                กำลังจัดส่ง
              </div>
            </div>
            <div
              class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block"
            >
              <Button
                class="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"
              >
                6
              </Button>
              <div
                class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400"
              >
                สำเร็จ
              </div>
            </div>
          </div>

          <div class="grid grid-cols-9 gap-6 mt-5">
            <div
              class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y shadow-md rounded"
            >
              <div class="p-5 box bg-white">
                <div class="flex">
                  <span class="font-bold">ที่อยู่จัดส่ง :</span>
                  <div class="ml-auto">
                    <Button
                      class="w-30 mb-2 mr-2 text-xs bg-[#af0000] text-white"
                    >
                      <Lucide icon="Edit" class="w-4 h-4 mr-2" /> แก้ไขที่อยู่
                    </Button>
                  </div>
                </div>
                <div class="mt-1">
                  <div class="flex items-center">
                    <span class="flex items-center justify-center w-5 h-5">
                      <Lucide icon="User" class="w-4 h-4" />
                    </span>
                    <span class="ml-5">{{
                      dataOrders.customer.customerName
                    }}</span>
                    <br /><br />
                  </div>

                  <div class="flex items-center">
                    <span class="flex items-center justify-center w-5 h-5">
                      <Lucide icon="Home" class="w-4 h-4" />
                    </span>
                    <span class="ml-5"
                      >{{ dataOrders.customer.customerAddress }}
                      {{ dataOrders.customer.Zipcode }}</span
                    >
                    <br /><br />
                  </div>

                  <div class="flex items-center">
                    <span class="flex items-center justify-center w-5 h-5">
                      <Lucide icon="Phone" class="w-4 h-4" />
                    </span>
                    <span class="ml-5">{{ dataOrders.customer.Zipcode }}</span>
                    <br /><br />
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y shadow-md rounded"
            >
              <div class="p-5 box">
                <div class="flex">
                  <span class="font-bold">ที่อยู่ใบเสร็จ :</span>
                  <div class="ml-auto">
                    <Button
                      class="w-30 mb-2 mr-2 text-xs bg-[#af0000] text-white"
                    >
                      <Lucide icon="Edit" class="w-4 h-4 mr-2" /> แก้ไขที่อยู่
                    </Button>
                  </div>
                </div>
                <div class="mt-1">
                  <div class="flex items-center">
                    <span class="flex items-center justify-center w-5 h-5">
                      <Lucide icon="User" class="w-4 h-4" />
                    </span>
                    <span class="ml-5">{{
                      dataOrders.customer.customerName
                    }}</span>
                    <br /><br />
                  </div>
                  <div class="flex items-center">
                    <span class="flex items-center justify-center w-5 h-5">
                      <Lucide icon="User" class="w-4 h-4" />
                    </span>
                    <span class="ml-5"
                      >{{ dataOrders.customer.customerAddress }}
                      {{ dataOrders.customer.Zipcode }}</span
                    >
                    <br /><br />
                  </div>

                  <div class="flex items-center">
                    <span class="flex items-center justify-center w-5 h-5">
                      <Lucide icon="Phone" class="w-4 h-4" />
                    </span>
                    <span class="ml-5">{{ dataOrders.customer.Zipcode }}</span>
                    <br /><br />
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y shadow-md rounded leading-6"
            >
              <div class="p-5 box">
                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-4 font-bold">
                    <p>วันที่สั่งซื้อ :</p>
                  </div>

                  <div class="col-span-8 justify-left">
                    <div class="flex items-center justify-left">
                      <span class="flex items-center justify-center">
                        <Lucide icon="Calendar" class="w-3 h-3" />
                      </span>
                      <span>
                        {{
                          new Date(dataOrders.createdDate).toLocaleString(
                            "th-TH",
                            {
                              dateStyle: "short",
                            }
                          )
                        }}
                      </span>

                      <span class="flex items-center justify-center">
                        <Lucide icon="Clock" class="w-3 h-3 ml-2" />
                      </span>
                      <span>
                        {{
                          new Date(dataOrders.createdDate).toLocaleString(
                            "th-TH",
                            {
                              timeStyle: "short",
                            }
                          )
                        }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-4 font-bold">
                    <p>วันที่นัดรับสินค้า :</p>
                  </div>

                  <div class="col-span-8 justify-left">
                    <div class="flex items-center justify-left">
                      <span class="flex items-center justify-center">
                        <Lucide icon="Calendar" class="w-3 h-3" />
                      </span>
                      <span>
                        {{
                          new Date(dataOrders.createdDate).toLocaleString(
                            "th-TH",
                            {
                              dateStyle: "short",
                            }
                          )
                        }}
                      </span>

                      <span class="flex items-center justify-center">
                        <Lucide icon="Clock" class="w-3 h-3 ml-2" />
                      </span>
                      <span>
                        {{
                          new Date(dataOrders.createdDate).toLocaleString(
                            "th-TH",
                            {
                              timeStyle: "short",
                            }
                          )
                        }}
                      </span>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-4 font-bold">
                    <p>อีเมล์ :</p>
                  </div>

                  <div class="col-span-8 justify-left">
                    {{ dataOrders.customer.email }}
                  </div>
                </div>

                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-4 font-bold">
                    <p>โทรศัพท์ :</p>
                  </div>

                  <div class="col-span-8 justify-left">
                    <div class="flex items-center justify-left">
                      <span class="flex items-center justify-center">
                        <Lucide icon="Phone" class="w-3 h-3" />
                      </span>
                      <span class="ml-2">{{
                        dataOrders.customer.telephone
                      }}</span>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-4 font-bold">
                    <p>การชำระเงิน :</p>
                  </div>

                  <div class="col-span-8 justify-left">
                    Bank Transfer (โอนเงิน)
                  </div>
                </div>

                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-4 font-bold">
                    <p>การจัดส่ง :</p>
                  </div>

                  <div class="col-span-8 justify-left">
                    {{ dataOrders.customer.delivery }}
                  </div>
                </div>

                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-4 font-bold">
                    <p>สถานะ :</p>
                  </div>

                  <div class="col-span-8 justify-left">
                    <p
                      class="rounded-lg bg-success text-white w-20 text-center"
                    >
                      จ่ายแล้ว
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Input -->
      <!-- BEGIN: รายการสั่งซื้อ -->
      <div class="mt-5 intro-y box">
        <div
          class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <h2 class="mr-auto text-base font-bold">รายการสั่งซื้อ</h2>
        </div>
        <div class="p-5">
          <div class="ibox-content order-detail-table">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th width="10">#</th>
                  <th width="60"></th>
                  <th>ชื่อสินค้า</th>
                  <th>รหัสสินค้า</th>
                  <th class="text-right">ราคาขาย</th>
                  <th class="text-right">จำนวน</th>
                  <th class="text-right">ส่วนลด</th>
                  <th class="text-right">จำนวน</th>
                  <!-- <th class="action text-center" width="70"></th> -->
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <div class="order-thumbnail">
                      <Lucide icon="Image" class="w-5 h-5" />
                    </div>
                  </td>
                  <td>
                    {{ dataOrders.product.productName }}
                  </td>
                  <td>
                    <!-- <a
                      href="/products/14270784"
                      target="_blank"
                      data-pjax="0"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="Sample-Product-1681203016"
                      ><div>Sample-Product-1681203016</div></a
                    > -->
                    {{ dataOrders.product.productName }} -
                    {{ dataOrders.product.id }}
                  </td>
                  <!-- <td><a href="/products/14270784" data-pjax="0">Sample-Product-1681203016</a></td> -->
                  <td class="text-right">{{ dataOrders.product.unitPrice }}</td>
                  <td class="text-right">1</td>
                  <td class="text-right">0.00</td>
                  <td class="text-right">{{ dataOrders.amount }}</td>
                  <!-- <td class="action text-center" width="70"> -->
                  <!-- </td> -->
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="5" align="right">
                    <strong>รวมทั้งสิ้น / Sub Total</strong>
                  </td>
                  <td colspan="3" align="right">{{ dataOrders.amount }}</td>
                </tr>
                <tr>
                  <td colspan="5" align="right">
                    <strong>ส่วนลด / Discount</strong>
                  </td>
                  <td colspan="3" align="right">0.00</td>
                </tr>
                <tr>
                  <td colspan="5" align="right">
                    <strong>ขนส่ง / Shipping</strong>
                  </td>
                  <td colspan="3" align="right">0.00</td>
                </tr>
                <tr>
                  <td colspan="5" align="right">
                    <strong>รวมเงินสุทธิ / Net Amount</strong>
                  </td>
                  <td colspan="3" align="right">{{ dataOrders.amount }}</td>
                </tr>
                <tr>
                  <td colspan="5" align="right">
                    <strong>ภาษีมูลค่าเพิ่ม / Vat 7%</strong>
                  </td>
                  <td colspan="3" align="right">0.00</td>
                </tr>
                <tr>
                  <td colspan="5" align="right">
                    <strong>จำนวนเงินรวม / Total</strong>
                  </td>
                  <td colspan="3" align="right">{{ dataOrders.amount }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <!-- END: รายการสั่งซื้อ -->
      <!-- BEGIN: TABs -->
      <div class="mt-5 intro-y box">
        <div class="p-5">
          <div class="pc-tab">
            <input checked class="checked" id="tab1" type="radio" name="pct" />
            <input id="tab2" type="radio" name="pct" />
            <input id="tab3" type="radio" name="pct" />
            <nav>
              <ul class="ul">
                <li class="tab1" id="li_tab">
                  <label for="tab1" class="label"
                    >ชำระเงินโดย &nbsp;
                    <span
                      class="text-xs px-1.5 rounded-full bg-primary text-white mr-1"
                      >0</span
                    >
                  </label>
                </li>
                <li class="tab2" id="li_tab">
                  <label for="tab2" class="label"
                    >การจัดส่ง &nbsp;
                    <span
                      class="text-xs px-1.5 rounded-full bg-warning text-white mr-1"
                      >0</span
                    >
                  </label>
                </li>
                <li class="tab3" id="li_tab">
                  <label for="tab3" class="label"
                    >ใบแจ้งหนี้ &nbsp;
                    <span
                      class="text-xs px-1.5 rounded-full bg-warning text-white mr-1"
                      >0</span
                    >
                  </label>
                </li>
              </ul>
            </nav>
            <section>
              <!-- tab 1 -->
              <div class="tab1" id="li_tab">
                <div class="">
                  <Button class="w-40 mb-2 mr-2 goldgd">
                    <Lucide icon="PlusCircle" class="w-4 h-4 mr-2" />
                    เพิ่มข้อมูลการชำระ
                  </Button>

                  <Button variant="success" class="w-32 mb-2 mr-2">
                    <Lucide icon="CheckCircle" class="w-4 h-4 mr-2" />
                    ยืนยันทั้งหมด
                  </Button>
                </div>
                <div class="overflow-x-auto">
                  <table class="">
                    <thead>
                      <tr>
                        <th>บริการชำระเงิน</th>
                        <th style="width: 200px">หลักฐานชำระเงิน</th>
                        <th>Ref.</th>
                        <th>วัน/เวลา</th>
                        <th>ยอดรวม</th>
                        <th>หมายเหตุ</th>
                        <th width="25">สถานะ</th>
                        <th class="text-center">จัดการ</th>
                      </tr>
                    </thead>
                    <tbody class="">
                      <tr>
                        <td>
                          <span id="">KBANK</span>
                        </td>
                        <td><img src="" alt="" /></td>
                        <td>-</td>
                        <td>
                          <div class="flex items-center justify-center">
                            <span class="flex items-center justify-center">
                              <Lucide icon="Calendar" class="w-3 h-3" />
                            </span>
                            <span> 25-05-2566 </span>

                            <span class="flex items-center justify-center">
                              <Lucide icon="Clock" class="w-3 h-3 ml-2" />
                            </span>
                            <span> 17:02:00 </span>
                          </div>
                        </td>
                        <td>
                          <span id="price-56076590">349.00</span>
                          <input
                            type="hidden"
                            id="price-real-56076590"
                            value="349"
                          />
                        </td>
                        <td>
                          <input type="hidden" id="remark-56076590" value="" />
                        </td>
                        <td class="text-center">
                          <label class="label label-primary">ยืนยัน</label>
                        </td>
                        <td class="text-center">
                          <div class="   ">
                            <Button
                              variant="success"
                              class="mb-2 mr-1 justify-center"
                            >
                              <Lucide icon="CheckCircle" class="w-4 h-4" />
                            </Button>
                            <Button
                              variant="warning"
                              class="mb-2 mr-1 justify-center"
                            >
                              <Lucide icon="Edit" class="w-4 h-4" />
                            </Button>
                            <Button
                              class="mb-2 mr-1 justify-center bg-[#af0000] text-white"
                            >
                              <Lucide icon="Trash2" class="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- end tab 1 -->

              <!-- tab 2 -->
              <div class="tab2" id="li_tab">
                <div class="">
                  <Button class="w-40 mb-2 mr-2 goldgd">
                    <Lucide icon="PlusCircle" class="w-4 h-4 mr-2" />
                    เพิ่มหมายเลขพัสดุ
                  </Button>
                </div>
                <div class="ibox-content">
                  <div
                    id="w4"
                    class="grid-view is-bs3 hide-resize"
                    data-krajee-grid="kvGridInit_05301551"
                    data-krajee-ps="ps_w4_container"
                  >
                    <div
                      id="w4-container"
                      class="table-responsive kv-grid-container"
                    >
                      <table
                        class="table-custom table-order-note kv-grid-table table table-bordered kv-table-wrap"
                      >
                        <thead>
                          <tr>
                            <th
                              class="kv-align-center kv-align-middle"
                              style="width: 60px"
                              data-col-seq="0"
                            >
                              #
                            </th>
                            <th
                              class="kv-align-center kv-align-middle"
                              style="width: 100px"
                              data-col-seq="5"
                            >
                              รูปภาพ
                            </th>
                            <th
                              class="kv-align-left kv-align-middle"
                              data-col-seq="3"
                            >
                              บริการขนส่ง
                            </th>
                            <th
                              class="kv-align-center kv-align-middle"
                              style="width: 250px"
                              data-col-seq="2"
                            >
                              วันที่ส่งสินค้า
                            </th>
                            <th
                              class="kv-align-center kv-align-middle"
                              style="width: 180px"
                              data-col-seq="3"
                            >
                              หมายเลขแทร็คกิ้ง
                            </th>
                            <th
                              class="kv-align-center kv-align-middle"
                              style="width: 180px"
                              data-col-seq="4"
                            >
                              ผู้ดำเนินการ
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="7" class="text-left">
                              <div class="">ไม่พบผลลัพธ์</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end tab 2 -->

              <!-- tab 3 -->
              <div class="tab3" id="li_tab">
                <div class="">
                  <Button class="w-32 mb-2 mr-2 goldgd">
                    <Lucide icon="PlusCircle" class="w-4 h-4 mr-2" />
                    เพิ่มใบแจ้งหนี้
                  </Button>
                </div>
                <div class="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th class="text-left">หมายเลขใบแจ้งหนี้</th>
                        <th class="text-center">วันที่สร้าง</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- end tab 3 -->
            </section>
          </div>
        </div>
      </div>
      <!-- END: Input TABs -->
      <!-- BEGIN: Input Sizing -->
      <div class="mt-5 intro-y box">
        <div
          class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <h2 class="mr-auto text-base font-bold">บันทึกโน๊ต</h2>
        </div>
        <div class="p-5">
          <div class="ibox-content">
            <div
              id="w4"
              class="grid-view is-bs3 hide-resize"
              data-krajee-grid="kvGridInit_05301551"
              data-krajee-ps="ps_w4_container"
            >
              <div id="w4-container" class="table-responsive kv-grid-container">
                <table
                  class="table-custom table-order-note kv-grid-table table table-bordered kv-table-wrap"
                >
                  <thead>
                    <tr>
                      <th
                        class="kv-align-center kv-align-middle"
                        style="width: 60px"
                        data-col-seq="0"
                      >
                        #
                      </th>
                      <th
                        class="kv-align-left kv-align-middle"
                        data-col-seq="1"
                      >
                        ข้อความ
                      </th>
                      <th
                        class="kv-align-center kv-align-middle"
                        style="width: 50px"
                        data-col-seq="2"
                      >
                        ไฟล์แนบ
                      </th>
                      <th
                        class="kv-align-center kv-align-middle"
                        style="width: 180px"
                        data-col-seq="3"
                      >
                        วันที่สร้าง
                      </th>
                      <th
                        class="kv-align-center kv-align-middle"
                        style="width: 180px"
                        data-col-seq="4"
                      >
                        วันที่แก้ไข
                      </th>
                      <th
                        class="kv-align-center kv-align-middle"
                        style="width: 100px"
                        data-col-seq="5"
                      >
                        ผู้ดำเนินการ
                      </th>
                      <th
                        class="kv-align-center kv-align-middle"
                        style="width: 40px"
                        data-col-seq="6"
                      >
                        ดำเนินการ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="7" class="text-left">
                        <div class="">ไม่พบผลลัพธ์</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Input Sizing -->
      <!-- BEGIN: การเคลื่อนไหวสินค้า -->
      <div class="mt-5 intro-y box">
        <div
          class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <h2 class="mr-auto text-base font-bold">
            การเคลื่อนไหวสินค้า<span
              class="px-1 mr-1 text-xs text-white rounded-full bg-warning ml-3"
              >0</span
            >
          </h2>
        </div>
        <div class="p-5">
          <div class="panel-body">
            <div>
              <div>
                <div id="" class="overflow-x-auto">
                  <table class="table">
                    <thead>
                      <tr>
                        <th
                          class="kv-align-center kv-align-top"
                          style="width: 40px"
                          data-col-seq="0"
                        >
                          #
                        </th>
                        <th
                          class="kv-align-left kv-align-middle"
                          data-col-seq="1"
                        >
                          ชื่อสินค้า
                        </th>
                        <th
                          class="kv-align-center kv-align-middle"
                          style="width: 110px"
                          data-col-seq="2"
                        >
                          ประเภทสินค้า
                        </th>
                        <th
                          class="kv-align-center kv-align-middle"
                          style="width: 80px"
                          data-col-seq="3"
                        >
                          จอง/ขาย
                        </th>
                        <th
                          class="kv-align-center kv-align-middle"
                          style="width: 80px"
                          data-col-seq="4"
                        >
                          สถานะ
                        </th>
                        <th
                          class="kv-align-center kv-align-middle"
                          style="width: 120px"
                          data-col-seq="5"
                        >
                          คลังสินค้า
                        </th>
                        <th
                          class="kv-align-center kv-align-middle"
                          style="width: 140px"
                          data-col-seq="6"
                        >
                          วันที่ดำเนินการ
                        </th>
                        <th
                          class="kv-align-center kv-align-middle"
                          style="width: 150px"
                          data-col-seq="7"
                        >
                          ผู้ใช้งาน
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr data-key="669614867">
                        <td
                          class="kv-align-center kv-align-top"
                          style="width: 40px"
                          data-col-seq="0"
                        >
                          2
                        </td>
                        <td
                          class="kv-align-left kv-align-middle"
                          data-col-seq="1"
                        >
                          <a
                            href="/products/14270784"
                            target="_blank"
                            data-pjax="0"
                            >Sample Product</a
                          >
                        </td>
                        <td
                          class="kv-align-center kv-align-middle"
                          style="width: 110px"
                          data-col-seq="2"
                        >
                          <p>สินค้าธรรมดา</p>
                        </td>
                        <td
                          class="kv-align-center kv-align-middle"
                          style="width: 80px"
                          data-col-seq="3"
                        >
                          <span
                            >1 <i class="fa fa-caret-down text-danger"></i
                          ></span>
                        </td>
                        <td
                          class="kv-align-center kv-align-middle"
                          style="width: 80px"
                          data-col-seq="4"
                        >
                          <span class="">ลด</span>
                        </td>
                        <td
                          class="kv-align-center kv-align-middle"
                          style="width: 120px"
                          data-col-seq="5"
                        >
                          <div
                            style="
                              overflow: hidden;
                              white-space: nowrap;
                              width: 100px;
                              text-overflow: ellipsis;
                            "
                            data-toggle="tooltip"
                            data-placement="top"
                            data-original-title="My Warehouse"
                          >
                            My Warehouse
                          </div>
                        </td>
                        <td
                          class="kv-align-center kv-align-middle"
                          style="width: 140px"
                          data-col-seq="6"
                        >
                          <span
                            data-toggle="tooltip"
                            data-placement="top"
                            data-original-title="วันที่ 25-04-2566 เวลา 15:21:19"
                            >7 นาทีที่ผ่านมา</span
                          >
                        </td>
                        <td
                          class="kv-align-center kv-align-middle"
                          style="width: 150px"
                          data-col-seq="7"
                        >
                          <div
                            style="
                              overflow: hidden;
                              white-space: nowrap;
                              width: 130px;
                              text-overflow: ellipsis;
                            "
                            data-toggle="tooltip"
                            data-placement="top"
                            data-original-title="VILL"
                          >
                            VILL
                          </div>
                        </td>
                      </tr>
                      <tr data-key="669614694">
                        <td
                          class="kv-align-center kv-align-top"
                          style="width: 40px"
                          data-col-seq="0"
                        >
                          1
                        </td>
                        <td
                          class="kv-align-left kv-align-middle"
                          data-col-seq="1"
                        >
                          <a
                            href="/products/14270784"
                            target="_blank"
                            data-pjax="0"
                            >Sample Product</a
                          >
                        </td>
                        <td
                          class="kv-align-center kv-align-middle"
                          style="width: 110px"
                          data-col-seq="2"
                        >
                          <p>สินค้าธรรมดา</p>
                        </td>
                        <td
                          class="kv-align-center kv-align-middle"
                          style="width: 80px"
                          data-col-seq="3"
                        >
                          <span
                            >1 <i class="fa fa-caret-down text-danger"></i
                          ></span>
                        </td>
                        <td
                          class="kv-align-center kv-align-middle"
                          style="width: 80px"
                          data-col-seq="4"
                        >
                          <span class="">จอง</span>
                        </td>
                        <td
                          class="kv-align-center kv-align-middle"
                          style="width: 120px"
                          data-col-seq="5"
                        >
                          <div
                            style="
                              overflow: hidden;
                              white-space: nowrap;
                              width: 100px;
                              text-overflow: ellipsis;
                            "
                            data-toggle="tooltip"
                            data-placement="top"
                            data-original-title="My Warehouse"
                          >
                            My Warehouse
                          </div>
                        </td>
                        <td
                          class="kv-align-center kv-align-middle"
                          style="width: 140px"
                          data-col-seq="6"
                        >
                          <span
                            data-toggle="tooltip"
                            data-placement="top"
                            data-original-title="วันที่ 25-04-2566 เวลา 15:21:02"
                            >7 นาทีที่ผ่านมา</span
                          >
                        </td>
                        <td
                          class="kv-align-center kv-align-middle"
                          style="width: 150px"
                          data-col-seq="7"
                        >
                          <div
                            style="
                              overflow: hidden;
                              white-space: nowrap;
                              width: 130px;
                              text-overflow: ellipsis;
                            "
                            data-toggle="tooltip"
                            data-placement="top"
                            data-original-title="VILL"
                          >
                            VILL
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: การเคลื่อนไหวสินค้า -->
      <!-- BEGIN: บันทึกคำสั่งซื้อ -->
      <div class="mt-5 intro-y box">
        <div
          class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"
        >
          <h2 class="mr-auto text-base font-bold">
            บันทึกคำสั่งซื้อ
            <span
              class="px-1 mr-1 text-xs text-white rounded-full bg-warning ml-3"
              >0</span
            >
          </h2>
        </div>
        <div class="p-5">
          <div class="overflow-x-auto">
            <table class="kv-grid-table table kv-table-wrap">
              <thead>
                <tr>
                  <th
                    class="kv-align-center kv-align-top"
                    style="width: 3.28%"
                    data-col-seq="0"
                  >
                    #
                  </th>
                  <th class="text-left" data-col-seq="2" style="width: 65.88%">
                    รายละเอียด
                  </th>
                  <th
                    class="kv-align-center kv-align-top"
                    style="width: 14.76%"
                    data-col-seq="3"
                  >
                    วันที่สร้าง
                  </th>
                  <th
                    class="kv-align-center kv-align-top"
                    style="width: 12.8%"
                    data-col-seq="4"
                  >
                    ผู้ใช้งานระบบ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr data-key="">
                  <td class="" style="width: 40px" data-col-seq="0">4</td>
                  <td class="text-left" data-col-seq="2">
                    ยืนยันการชำระเงิน #OD00000005
                  </td>
                  <td
                    class="kv-align-center kv-align-top"
                    style="width: 180px"
                    data-col-seq="3"
                  >
                    <div class="flex items-center justify-left">
                      <span class="flex items-center justify-center">
                        <Lucide icon="Calendar" class="w-3 h-3" />
                      </span>
                      <span> 25-05-2566 </span>

                      <span class="flex items-center justify-center">
                        <Lucide icon="Clock" class="w-3 h-3 ml-2" />
                      </span>
                      <span> 17:02:00 </span>
                    </div>
                  </td>
                  <td
                    class="kv-align-center kv-align-top"
                    style="width: 150px"
                    data-col-seq="4"
                  >
                    <div
                      style="
                        overflow: hidden;
                        white-space: nowrap;
                        width: 140px;
                        text-overflow: ellipsis;
                      "
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="VILL"
                    >
                      VILL
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- END: บันทึกคำสั่งซื้อ -->
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { useInventory } from "../stores/inventory";
export default {
  data() {
    return {
      baseUrl: `${import.meta.env.VITE_API_URL}`,
      convertNumber: new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      dataOrders: [] as any[],
      paramsQuery: {
        orderId: this.$route.params.orderId,
        useInventory: useInventory().inventory
          ? useInventory().inventory[0]["id"]
          : useInventory().getInventory[0]["id"],
      } as Object,
    };
  },
  methods: {
    async getOrderDetail() {
      try {
        let response = null;
        const params = new URLSearchParams(Object.entries(this.paramsQuery));
        const setQuerystring = "?" + params.toString();
        console.log(setQuerystring);
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const URL = (
          `${import.meta.env.VITE_API_URL}/order/viewOrder` + setQuerystring
        ).replace(" ", "");
        response = await axios.get(URL, { headers });
        this.dataOrders = response.data.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.getOrderDetail();
  },
};
</script>


<style>
@import "..//assets/css/components/Categories.css";
@import "..//assets/css/components/tab.scss";
@import "..//assets/css/components/tab.css";
</style>
