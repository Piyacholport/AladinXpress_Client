<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
// import fakerData from "../utils/faker";
import Button from "../base-components/Button";
import Pagination from "../base-components/Pagination";
import { FormInput, FormSelect } from "../base-components/Form";
import Litepicker from "../base-components/Litepicker";
// import { FormSwitch } from "../base-components/Form";
import Lucide from "../base-components/Lucide";
import Tippy from "../base-components/Tippy";
import { Dialog, Menu } from "../base-components/Headless";
import TinySlider, { TinySliderElement } from "../base-components/TinySlider";
const deleteConfirmationModal = ref(false);
const setDeleteConfirmationModal = (value: boolean) => {
  deleteConfirmationModal.value = value;
};
const deleteButtonRef = ref(null);

const salesReportFilter = ref<string>("");
const importantNotesRef = ref<TinySliderElement>();

provide("bind[importantNotesRef]", (el: TinySliderElement) => {
  importantNotesRef.value = el;
});

const prevImportantNotes = () => {
  importantNotesRef.value?.tns.goTo("prev");
};
const nextImportantNotes = () => {
  importantNotesRef.value?.tns.goTo("next");
};
</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class="text-lg font-bold intro-y" id="">ออร์เดอร์ทั้งหมด</h2>

    <br /><br />
    <div class="pc-tab">
      <!-- Loading -->
      <div v-if="onload">
        <div
          class="flex flex-col items-center justify-center col-span-6 sm:col-span-3 xl:col-span-2"
          style="
            vertical-align: initial;
            height: 100%;
            position: absolute;
            width: 75%;
          "
        >
          <LoadingIcon icon="oval" class="w-10 h-10" style="margin-top: 5%" />
        </div>
      </div>
      <!-- Loading -->
      <input checked class="checked" id="tab1" type="radio" name="pct" />
      <input id="tab2" type="radio" name="pct" />
      <input id="tab3" type="radio" name="pct" />
      <input id="tab4" type="radio" name="pct" />
      <input id="tab5" type="radio" name="pct" />
      <input id="tab6" type="radio" name="pct" />
      <input id="tab7" type="radio" name="pct" />

      <nav>
        <ul class="ul">
          <li class="tab1" id="li_tab" @click="getAllOrder('all')">
            <label for="tab1" class="label"
              >ออร์เดอร์ทั้งหมด &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-primary text-white mr-1"
                >{{ orderCountStatus.statusAll }}</span
              >
            </label>
          </li>
          <li class="tab2" id="li_tab" @click="getAllOrder('notpaid')">
            <label for="tab2" class="label"
              >ยังไม่จ่าย &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-warning text-white mr-1"
                >{{ orderCountStatus.statusNoPaid }}</span
              >
            </label>
          </li>
          <li class="tab3" id="li_tab" @click="getAllOrder('paid')">
            <label for="tab3" class="label"
              >จ่ายแล้ว &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-success text-white mr-1"
                >{{ orderCountStatus.statusPaid }}</span
              >
            </label>
          </li>
          <li class="tab4" id="li_tab">
            <label for="tab4" class="label" @click="getAllOrder('paid')"
              >ยืนยัน &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-success text-white mr-1"
                >{{ orderCountStatus.statusPaid }}</span
              >
            </label>
          </li>
          <li class="tab5" id="li_tab">
            <label for="tab5" class="label"
              >กำลังแพ็ค &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-success text-white mr-1"
                >0</span
              >
            </label>
          </li>
          <li class="tab6" id="li_tab" @click="getAllOrder('delivery')">
            <label for="tab6" class="label"
              >กำลังส่ง &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-success text-white mr-1"
                >{{ orderCountStatus.statusDelivery }}</span
              >
            </label>
          </li>
          <li class="tab7" id="li_tab" @click="getAllOrder('success')">
            <label for="tab7" class="label"
              >สำเร็จ &nbsp;
              <span class="px-1.5 rounded-full bg-success text-white mr-1">{{
                orderCountStatus.statusSuccess
              }}</span>
            </label>
          </li>
        </ul>
      </nav>
      <br /><br /><br /><br />
      <section>
        <div class="tab1" id="li_tab">
          <div class="formsearch">
            <form action="">
              <FormInput
                id="regular-form-1"
                type="text"
                placeholder="ค้นหา..."
                class="w-56 h-10 mr-2"
              />

              <!-- <input
                type="text"
                placeholder="ค้นหา..."
                id="input_text_nameproduct"
              /> -->
              <span class="ml-3">
                <!-- <Lucide
                  icon="Calendar"
                  class="absolute w-4 h-4  ml-3 " /> -->
                <Litepicker
                  v-model="salesReportFilter"
                  :options="{
                    autoApply: false,
                    singleMode: false,
                    numberOfColumns: 2,
                    numberOfMonths: 2,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }"
                  class="pl-10 sm:w-56 !box"
              /></span>

              <Button variant="primary" class="shadow-md" id="btn_search">
                ค้นหา &nbsp;<Lucide icon="Search" class="block mx-auto" />
              </Button>

              <Button
                variant="primary"
                class="shadow-md"
                id="btn_search_filter"
              >
                ค้นหาแบบละเอียด &nbsp;<Lucide
                  icon="BarChart2"
                  class="block mx-auto"
                />
              </Button>
            </form>

            <div class="formmanage">
              <br /><br />

              <div class="flex w-full mt-4 sm:w-auto sm:mt-0">
                <a href="addOrder">
                  <Button variant="primary" class="mr-2 shadow-md" id="goldgd">
                    <Lucide icon="PlusCircle" class="block mx-auto" />
                    &nbsp; เพิ่มรายการ
                  </Button></a
                >
                <Menu class="ml-auto sm:ml-0">
                  <Menu.Button :as="Button" class="px-2 !box text-slate-500">
                    <span class="flex items-center justify-center w-5 h-5">
                      <Lucide icon="Plus" class="w-4 h-4" />
                    </span>
                  </Menu.Button>
                  <Menu.Items class="w-40">
                    <Menu.Item>
                      <Lucide icon="Printer" class="w-4 h-4 mr-2" />
                      Print
                      <span
                        class="text-xs px-1.5 rounded-full bg-dark text-white mr-1"
                      >
                        {{ selectedCount }}
                      </span>
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="FileText" class="w-4 h-4 mr-2" /> Export to
                      Exel
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="FileText" class="w-4 h-4 mr-2" /> Export to
                      PDF
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
            <br />
            <hr />
            <br />
          </div>
          <br />

          <div id="allTab-container" class="table-responsive kv-grid-container">
            <div class="table-list">
              <div class="overflow-x-auto">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">
                        <input
                          type="checkbox"
                          id=""
                          name=""
                          value=""
                          v-model="selectAll"
                        />
                      </th>
                      <th class="whitespace-nowrap">ช่องทาง</th>
                      <th class="whitespace-nowrap">สินค้า</th>
                      <th class="whitespace-nowrap">เลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">ขนส่ง</th>
                      <th class="whitespace-nowrap">ค่าส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งนี้</th>
                      <th class="whitespace-nowrap">ยอดรวม</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px">วันแพ็ค</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px"
                          >วันนัดรับ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 180px"
                          >วันสั่งซื้อ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span stylde="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(item, index) in ordersList" :key="index">
                      <td>
                        <input
                          type="checkbox"
                          value=""
                          v-model="item.selected"
                        />
                      </td>
                      <td>
                        <Lucide :icon="item.socialName" class="w-5 h-5" />
                      </td>
                      <td><img src="" alt="" style="width: 100px" /></td>
                      <td>{{ item.orderNumber }}</td>
                      <td>{{ item.customer.customerName }}</td>
                      <td>
                        <span
                          class="text-l px-1 bg-success text-white mr-1"
                          v-if="item.orderStatus === 'PAID'"
                        >
                          ยืนยัน
                        </span>
                        <span
                          class="text-l px-1 bg-warning text-white mr-1"
                          v-if="item.orderStatus === 'NOTPAID'"
                        >
                          ยังไม่จ่าย
                        </span>
                      </td>
                      <td>กสิกร</td>
                      <td>
                        <span class="px-1 bg-yellow text-white mr-1">{{
                          item.delivery
                        }}</span>
                      </td>
                      <td>
                        <span class="px-1 mr-1">{{ item.flashPrice }}</span>
                      </td>
                      <td>
                        <button class="btn btn-sm btn-secondary w-24 mr-1 mb-2">
                          <i data-lucide="plus"></i> ใบแจ้งหนี้
                        </button>
                      </td>
                      <td class="bold">{{ item.totalPrice }}</td>
                      <td>แพ็คได้ทันที</td>
                      <td>
                        <span class="px-1 bg-success text-white mr-1"
                          >พร้อมรับทันที</span
                        >
                      </td>
                      <td class="date">
                        <div class="flex items-center justify-center">
                          <span class="flex items-center justify-center">
                            <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                          </span>
                          <span>{{
                            new Date(item.createdDate).toLocaleString("th-TH", {
                              dateStyle: "short",
                            })
                          }}</span>

                          <span class="flex items-center justify-center">
                            <Lucide icon="Clock" class="w-4 h-4 mt-1 ml-2" />
                          </span>
                          <span>{{
                            new Date(item.createdDate).toLocaleString("th-TH", {
                              timeStyle: "short",
                            })
                          }}</span>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center justify-center">
                          <!-- <button @click="printInvoice(item.pno)">
                            <span
                              class="btn_manage_order flex items-center justify-center mr-2"
                            >
                              <Lucide icon="Printer" class="w-5 h-5 mt-1" />
                            </span>
                          </button> -->
                          <Button
                          @click="printInvoice(item.pno)"
                            type="button"
                            variant="secondary"
                            class="inline-block mb-2 mt-2 mr-2"
                          >
                            <Lucide
                              icon="Printer"
                              class="block mx-auto w-4 h-4"
                            />
                          </Button>
                          <Button
                            as="a"
                            variant="secondary"
                            href="vieworder/:orderId"
                            class="inline-block mb-2 mt-2 mr-2"
                          >
                            <Lucide icon="Eye" class="block mx-auto w-4 h-4" />
                          </Button>

                          <Button
                            as="a"
                            variant="secondary"
                            href="EditSettingsrole"
                            class="inline-block mb-2 mt-2"
                          >
                            <Lucide icon="Edit" class="block mx-auto w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <thead>
                    <tr class="op6">
                      <th class="whitespace-nowrap"></th>

                      <th class="whitespace-nowrap">ช่องทาง</th>
                      <th class="whitespace-nowrap">สินค้า</th>
                      <th class="whitespace-nowrap">เลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">ขนส่ง</th>
                      <th class="whitespace-nowrap">ค่าส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งนี้</th>
                      <th class="whitespace-nowrap op10">
                        <span class="bold">{{ totalPrice() }}</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px">วันแพ็ค</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px"
                          >วันนัดรับ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 180px"
                          >วันสั่งซื้อ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="tab2" id="li_tab">
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <div class="table-list">
              <div class="overflow-x-auto">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">
                        <input type="checkbox" id="" name="" value="" />
                      </th>

                      <th class="whitespace-nowrap">ช่องทาง</th>
                      <th class="whitespace-nowrap">สินค้า</th>
                      <th class="whitespace-nowrap">เลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">ขนส่ง</th>
                      <th class="whitespace-nowrap">ค่าส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งนี้</th>
                      <th class="whitespace-nowrap">ยอดรวม</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px">วันแพ็ค</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px"
                          >วันนัดรับ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 180px"
                          >วันสั่งซื้อ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span stylde="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(item, index) in ordersList" :key="index">
                      <td><input type="checkbox" id="" name="" value="" /></td>
                      <td>
                        <Lucide :icon="item.socialName" class="w-5 h-5" />
                      </td>
                      <td><img src="" alt="" style="width: 100px" /></td>
                      <td>OD000{{ item.id }}</td>
                      <td>{{ item.customer.customerName }}</td>
                      <td class="text-nowrap whitespace-no-wrap">
                        <span
                          class="text-l px-1 bg-success text-white mr-1"
                          v-if="item.orderStatus === 'PAID'"
                        >
                          ยืนยัน
                        </span>
                        <span
                          class="text-l px-1 bg-warning text-white mr-1"
                          v-if="item.orderStatus === 'NOTPAID'"
                        >
                          ยังไม่จ่าย
                        </span>
                      </td>
                      <td>กสิกร</td>
                      <td>
                        <span class="px-1 bg-yellow text-white mr-1">{{
                          item.delivery
                        }}</span>
                      </td>
                      <td>
                        <span class="px-1 mr-1">{{ item.flashPrice }}</span>
                      </td>
                      <td>
                        <button class="btn btn-sm btn-secondary w-24 mr-1 mb-2">
                          <i data-lucide="plus"></i> ใบแจ้งหนี้
                        </button>
                      </td>
                      <td class="bold">{{ item.totalPrice }}</td>
                      <td>แพ็คได้ทันที</td>
                      <td>
                        <span class="px-1 bg-success text-white mr-1"
                          >พร้อมรับทันที</span
                        >
                      </td>
                      <td class="date">
                        <div class="flex items-center justify-center">
                          <span class="flex items-center justify-center">
                            <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                          </span>
                          <span>{{
                            new Date(item.createdDate).toLocaleString("th-TH", {
                              dateStyle: "short",
                            })
                          }}</span>

                          <span class="flex items-center justify-center">
                            <Lucide icon="Clock" class="w-4 h-4 mt-1 ml-2" />
                          </span>
                          <span>{{
                            new Date(item.createdDate).toLocaleString("th-TH", {
                              timeStyle: "short",
                            })
                          }}</span>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center justify-center">
                          <!-- <button @click="printInvoice(item.pno)">
                            <span
                              class="btn_manage_order flex items-center justify-center mr-2"
                            >
                              <Lucide icon="Printer" class="w-5 h-5 mt-1" />
                            </span>
                          </button> -->
                          <Button
                          @click="printInvoice(item.pno)"
                            type="button"
                            variant="secondary"
                            class="inline-block mb-2 mt-2 mr-2"
                          >
                            <Lucide
                              icon="Printer"
                              class="block mx-auto w-4 h-4"
                            />
                          </Button>
                          <Button
                            as="a"
                            variant="secondary"
                            href="vieworder/:orderId"
                            class="inline-block mb-2 mt-2 mr-2"
                          >
                            <Lucide icon="Eye" class="block mx-auto w-4 h-4" />
                          </Button>

                          <Button
                            as="a"
                            variant="secondary"
                            href="EditSettingsrole"
                            class="inline-block mb-2 mt-2"
                          >
                            <Lucide icon="Edit" class="block mx-auto w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <thead>
                    <tr class="op6">
                      <th class="whitespace-nowrap"></th>

                      <th class="whitespace-nowrap">ช่องทาง</th>
                      <th class="whitespace-nowrap">สินค้า</th>
                      <th class="whitespace-nowrap">เลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">ขนส่ง</th>
                      <th class="whitespace-nowrap">ค่าส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งนี้</th>
                      <th class="whitespace-nowrap op10">
                        <span class="bold">{{ totalPrice() }}</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px">วันแพ็ค</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px"
                          >วันนัดรับ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 180px"
                          >วันสั่งซื้อ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="tab3" id="li_tab">
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <div class="table-list">
              <div class="overflow-x-auto">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">
                        <input type="checkbox" id="" name="" value="" />
                      </th>

                      <th class="whitespace-nowrap">ช่องทาง</th>
                      <th class="whitespace-nowrap">สินค้า</th>
                      <th class="whitespace-nowrap">เลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">ขนส่ง</th>
                      <th class="whitespace-nowrap">ค่าส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งนี้</th>
                      <th class="whitespace-nowrap">ยอดรวม</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px">วันแพ็ค</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px"
                          >วันนัดรับ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 180px"
                          >วันสั่งซื้อ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span stylde="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(item, index) in ordersList" :key="index">
                      <td><input type="checkbox" id="" name="" value="" /></td>
                      <td>
                        <Lucide :icon="item.socialName" class="w-5 h-5" />
                      </td>
                      <td><img src="" alt="" style="width: 100px" /></td>
                      <td>OD000{{ item.id }}</td>
                      <td>{{ item.customer.customerName }}</td>
                      <td>
                        <span
                          class="text-l px-1 bg-success text-white mr-1"
                          v-if="item.orderStatus === 'PAID'"
                        >
                          ยืนยัน
                        </span>
                        <span
                          class="text-l px-1 bg-warning text-white mr-1"
                          v-if="item.orderStatus === 'NOTPAID'"
                        >
                          ยังไม่จ่าย
                        </span>
                      </td>
                      <td>กสิกร</td>
                      <td>
                        <span class="px-1 bg-yellow text-white mr-1">{{
                          item.delivery
                        }}</span>
                      </td>
                      <td>
                        <span class="px-1 mr-1">{{ item.flashPrice }}</span>
                      </td>
                      <td>
                        <button class="btn btn-sm btn-secondary w-24 mr-1 mb-2">
                          <i data-lucide="plus"></i> ใบแจ้งหนี้
                        </button>
                      </td>
                      <td class="bold">{{ item.totalPrice }}</td>
                      <td>แพ็คได้ทันที</td>
                      <td>
                        <span class="px-1 bg-success text-white mr-1"
                          >พร้อมรับทันที</span
                        >
                      </td>
                      <td class="date">
                        <div class="flex items-center justify-center">
                          <span class="flex items-center justify-center">
                            <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                          </span>
                          <span>{{
                            new Date(item.createdDate).toLocaleString("th-TH", {
                              dateStyle: "short",
                            })
                          }}</span>

                          <span class="flex items-center justify-center">
                            <Lucide icon="Clock" class="w-4 h-4 mt-1 ml-2" />
                          </span>
                          <span>{{
                            new Date(item.createdDate).toLocaleString("th-TH", {
                              timeStyle: "short",
                            })
                          }}</span>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center justify-center">
                          <!-- <button @click="printInvoice(item.pno)">
                            <span
                              class="btn_manage_order flex items-center justify-center mr-2"
                            >
                              <Lucide icon="Printer" class="w-5 h-5 mt-1" />
                            </span>
                          </button> -->
                          <Button
                          @click="printInvoice(item.pno)"
                            type="button"
                            variant="secondary"
                            class="inline-block mb-2 mt-2 mr-2"
                          >
                            <Lucide
                              icon="Printer"
                              class="block mx-auto w-4 h-4"
                            />
                          </Button>
                          <Button
                            as="a"
                            variant="secondary"
                            href="vieworder/:orderId"
                            class="inline-block mb-2 mt-2 mr-2"
                          >
                            <Lucide icon="Eye" class="block mx-auto w-4 h-4" />
                          </Button>

                          <Button
                            as="a"
                            variant="secondary"
                            href="EditSettingsrole"
                            class="inline-block mb-2 mt-2"
                          >
                            <Lucide icon="Edit" class="block mx-auto w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <thead>
                    <tr class="op6">
                      <th class="whitespace-nowrap"></th>

                      <th class="whitespace-nowrap">ช่องทาง</th>
                      <th class="whitespace-nowrap">สินค้า</th>
                      <th class="whitespace-nowrap">เลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">ขนส่ง</th>
                      <th class="whitespace-nowrap">ค่าส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งนี้</th>
                      <th class="whitespace-nowrap op10">
                        <span class="bold">{{ totalPrice() }}</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px">วันแพ็ค</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px"
                          >วันนัดรับ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 180px"
                          >วันสั่งซื้อ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="tab4" id="li_tab">
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <div class="table-list">
              <div class="overflow-x-auto">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">
                        <input type="checkbox" id="" name="" value="" />
                      </th>

                      <th class="whitespace-nowrap">ช่องทาsง</th>
                      <th class="whitespace-nowrap">สินค้า</th>
                      <th class="whitespace-nowrap">เลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">ขนส่ง</th>
                      <th class="whitespace-nowrap">ค่าส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งนี้</th>
                      <th class="whitespace-nowrap">ยอดรวม</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px">วันแพ็ค</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px"
                          >วันนัดรับ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 180px"
                          >วันสั่งซื้อ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span stylde="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(item, index) in ordersList" :key="index">
                      <td><input type="checkbox" id="" name="" value="" /></td>
                      <td>
                        <Lucide :icon="item.socialName" class="w-5 h-5" />
                      </td>
                      <td><img src="" alt="" style="width: 100px" /></td>
                      <td>OD000{{ item.id }}</td>
                      <td>{{ item.customer.customerName }}</td>
                      <td>
                        <span
                          class="text-l px-1 bg-success text-white mr-1"
                          v-if="item.orderStatus === 'PAID'"
                        >
                          ยืนยัน
                        </span>
                        <span
                          class="text-l px-1 bg-warning text-white mr-1"
                          v-if="item.orderStatus === 'NOTPAID'"
                        >
                          ยังไม่จ่าย
                        </span>
                      </td>
                      <td>กสิกร</td>
                      <td>
                        <span class="px-1 bg-yellow text-white mr-1">{{
                          item.delivery
                        }}</span>
                      </td>
                      <td>
                        <button class="btn btn-sm btn-secondary w-24 mr-1 mb-2">
                          <i data-lucide="plus"></i> ใบแจ้งหนี้
                        </button>
                      </td>
                      <td class="bold">{{ item.totalPrice }}</td>
                      <td>แพ็คได้ทันที</td>
                      <td>
                        <span class="px-1 bg-success text-white mr-1"
                          >พร้อมรับทันที</span
                        >
                      </td>
                      <td class="date">
                        <div class="flex items-center justify-center">
                          <span class="flex items-center justify-center">
                            <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                          </span>
                          <span>{{
                            new Date(item.createdDate).toLocaleString("th-TH", {
                              dateStyle: "short",
                            })
                          }}</span>

                          <span class="flex items-center justify-center">
                            <Lucide icon="Clock" class="w-4 h-4 mt-1 ml-2" />
                          </span>
                          <span>{{
                            new Date(item.createdDate).toLocaleString("th-TH", {
                              timeStyle: "short",
                            })
                          }}</span>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center justify-center">
                          <!-- <button @click="printInvoice(item.pno)">
                            <span
                              class="btn_manage_order flex items-center justify-center mr-2"
                            >
                              <Lucide icon="Printer" class="w-5 h-5 mt-1" />
                            </span>
                          </button> -->
                          <Button
                          @click="printInvoice(item.pno)"
                            type="button"
                            variant="secondary"
                            class="inline-block mb-2 mt-2 mr-2"
                          >
                            <Lucide
                              icon="Printer"
                              class="block mx-auto w-4 h-4"
                            />
                          </Button>
                          <Button
                            as="a"
                            variant="secondary"
                            href="vieworder/:orderId"
                            class="inline-block mb-2 mt-2 mr-2"
                          >
                            <Lucide icon="Eye" class="block mx-auto w-4 h-4" />
                          </Button>

                          <Button
                            as="a"
                            variant="secondary"
                            href="EditSettingsrole"
                            class="inline-block mb-2 mt-2"
                          >
                            <Lucide icon="Edit" class="block mx-auto w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <thead>
                    <tr class="op6">
                      <th class="whitespace-nowrap"></th>

                      <th class="whitespace-nowrap">ช่องทาง</th>
                      <th class="whitespace-nowrap">สินค้า</th>
                      <th class="whitespace-nowrap">เลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">ขนส่ง</th>
                      <th class="whitespace-nowrap">ค่าส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งนี้</th>
                      <th class="whitespace-nowrap op10">
                        <span class="bold">{{ totalPrice() }}</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px">วันแพ็ค</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px"
                          >วันนัดรับ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 180px"
                          >วันสั่งซื้อ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="tab5" id="li_tab">
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <div class="table-list">
              <div class="overflow-x-auto">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">
                        <input type="checkbox" id="" name="" value="" />
                      </th>

                      <th class="whitespace-nowrap">ช่องทาsง</th>
                      <th class="whitespace-nowrap">สินค้า</th>
                      <th class="whitespace-nowrap">เลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">ขนส่ง</th>
                      <th class="whitespace-nowrap">ค่าส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งนี้</th>
                      <th class="whitespace-nowrap">ยอดรวม</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px">วันแพ็ค</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px"
                          >วันนัดรับ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 180px"
                          >วันสั่งซื้อ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span stylde="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(item, index) in ordersList" :key="index">
                      <td><input type="checkbox" id="" name="" value="" /></td>
                      <td>
                        <Lucide :icon="item.socialName" class="w-5 h-5" />
                      </td>
                      <td><img src="" alt="" style="width: 100px" /></td>
                      <td>OD000{{ item.id }}</td>
                      <td>{{ item.customer.customerName }}</td>
                      <td>
                        <span
                          class="text-l px-1 bg-success text-white mr-1"
                          v-if="item.orderStatus === 'PAID'"
                        >
                          ยืนยัน
                        </span>
                        <span
                          class="text-l px-1 bg-warning text-white mr-1"
                          v-if="item.orderStatus === 'NOTPAID'"
                        >
                          ยังไม่จ่าย
                        </span>
                      </td>
                      <td>กสิกร</td>
                      <td>
                        <span class="px-1 bg-yellow text-white mr-1">{{
                          item.delivery
                        }}</span>
                      </td>
                      <td>
                        <button class="btn btn-sm btn-secondary w-24 mr-1 mb-2">
                          <i data-lucide="plus"></i> ใบแจ้งหนี้
                        </button>
                      </td>
                      <td class="bold">{{ item.totalPrice }}</td>
                      <td>แพ็คได้ทันที</td>
                      <td>
                        <span class="px-1 bg-success text-white mr-1"
                          >พร้อมรับทันที</span
                        >
                      </td>
                      <td class="date">
                        <div class="flex items-center justify-center">
                          <span class="flex items-center justify-center">
                            <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                          </span>
                          <span>{{
                            new Date(item.createdDate).toLocaleString("th-TH", {
                              dateStyle: "short",
                            })
                          }}</span>

                          <span class="flex items-center justify-center">
                            <Lucide icon="Clock" class="w-4 h-4 mt-1 ml-2" />
                          </span>
                          <span>{{
                            new Date(item.createdDate).toLocaleString("th-TH", {
                              timeStyle: "short",
                            })
                          }}</span>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center justify-center">
                          <!-- <button @click="printInvoice(item.pno)">
                            <span
                              class="btn_manage_order flex items-center justify-center mr-2"
                            >
                              <Lucide icon="Printer" class="w-5 h-5 mt-1" />
                            </span>
                          </button> -->
                          <Button
                          @click="printInvoice(item.pno)"
                            type="button"
                            variant="secondary"
                            class="inline-block mb-2 mt-2 mr-2"
                          >
                            <Lucide
                              icon="Printer"
                              class="block mx-auto w-4 h-4"
                            />
                          </Button>
                          <Button
                            as="a"
                            variant="secondary"
                            href="vieworder/:orderId"
                            class="inline-block mb-2 mt-2 mr-2"
                          >
                            <Lucide icon="Eye" class="block mx-auto w-4 h-4" />
                          </Button>

                          <Button
                            as="a"
                            variant="secondary"
                            href="EditSettingsrole"
                            class="inline-block mb-2 mt-2"
                          >
                            <Lucide icon="Edit" class="block mx-auto w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <thead>
                    <tr class="op6">
                      <th class="whitespace-nowrap"></th>

                      <th class="whitespace-nowrap">ช่องทาง</th>
                      <th class="whitespace-nowrap">สินค้า</th>
                      <th class="whitespace-nowrap">เลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">ขนส่ง</th>
                      <th class="whitespace-nowrap">ค่าส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งนี้</th>
                      <th class="whitespace-nowrap op10">
                        <span class="bold">{{ totalPrice() }}</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px">วันแพ็ค</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px"
                          >วันนัดรับ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 180px"
                          >วันสั่งซื้อ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="tab6" id="li_tab">
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <div class="table-list">
              <div class="overflow-x-auto">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">
                        <input type="checkbox" id="" name="" value="" />
                      </th>

                      <th class="whitespace-nowrap">ช่องทาsง</th>
                      <th class="whitespace-nowrap">สินค้า</th>
                      <th class="whitespace-nowrap">เลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">ขนส่ง</th>
                      <th class="whitespace-nowrap">ค่าส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งนี้</th>
                      <th class="whitespace-nowrap">ยอดรวม</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px">วันแพ็ค</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px"
                          >วันนัดรับ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 180px"
                          >วันสั่งซื้อ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span stylde="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(item, index) in ordersList" :key="index">
                      <td><input type="checkbox" id="" name="" value="" /></td>
                      <td>
                        <Lucide :icon="item.socialName" class="w-5 h-5" />
                      </td>
                      <td><img src="" alt="" style="width: 100px" /></td>
                      <td>OD000{{ item.id }}</td>
                      <td>{{ item.customer.customerName }}</td>
                      <td>
                        <span
                          class="text-l px-1 bg-success text-white mr-1"
                          v-if="item.orderStatus === 'PAID'"
                        >
                          ยืนยัน
                        </span>
                        <span
                          class="text-l px-1 bg-warning text-white mr-1"
                          v-if="item.orderStatus === 'NOTPAID'"
                        >
                          ยังไม่จ่าย
                        </span>
                      </td>
                      <td>กสิกร</td>
                      <td>
                        <span class="px-1 bg-yellow text-white mr-1">{{
                          item.delivery
                        }}</span>
                      </td>
                      <td>
                        <button class="btn btn-sm btn-secondary w-24 mr-1 mb-2">
                          <i data-lucide="plus"></i> ใบแจ้งหนี้
                        </button>
                      </td>
                      <td class="bold">{{ item.totalPrice }}</td>
                      <td>แพ็คได้ทันที</td>
                      <td>
                        <span class="px-1 bg-success text-white mr-1"
                          >พร้อมรับทันที</span
                        >
                      </td>
                      <td class="date">
                        <div class="flex items-center justify-center">
                          <span class="flex items-center justify-center">
                            <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                          </span>
                          <span>{{
                            new Date(item.createdDate).toLocaleString("th-TH", {
                              dateStyle: "short",
                            })
                          }}</span>

                          <span class="flex items-center justify-center">
                            <Lucide icon="Clock" class="w-4 h-4 mt-1 ml-2" />
                          </span>
                          <span>{{
                            new Date(item.createdDate).toLocaleString("th-TH", {
                              timeStyle: "short",
                            })
                          }}</span>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center justify-center">
                          <!-- <button @click="printInvoice(item.pno)">
                            <span
                              class="btn_manage_order flex items-center justify-center mr-2"
                            >
                              <Lucide icon="Printer" class="w-5 h-5 mt-1" />
                            </span>
                          </button> -->
                          <Button
                          @click="printInvoice(item.pno)"
                            type="button"
                            variant="secondary"
                            class="inline-block mb-2 mt-2 mr-2"
                          >
                            <Lucide
                              icon="Printer"
                              class="block mx-auto w-4 h-4"
                            />
                          </Button>
                          <Button
                            as="a"
                            variant="secondary"
                            href="vieworder/:orderId"
                            class="inline-block mb-2 mt-2 mr-2"
                          >
                            <Lucide icon="Eye" class="block mx-auto w-4 h-4" />
                          </Button>

                          <Button
                            as="a"
                            variant="secondary"
                            href="EditSettingsrole"
                            class="inline-block mb-2 mt-2"
                          >
                            <Lucide icon="Edit" class="block mx-auto w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <thead>
                    <tr class="op6">
                      <th class="whitespace-nowrap"></th>

                      <th class="whitespace-nowrap">ช่องทาง</th>
                      <th class="whitespace-nowrap">สินค้า</th>
                      <th class="whitespace-nowrap">เลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">ขนส่ง</th>
                      <th class="whitespace-nowrap">ค่าส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งนี้</th>
                      <th class="whitespace-nowrap op10">
                        <span class="bold">{{ totalPrice() }}</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px">วันแพ็ค</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px"
                          >วันนัดรับ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 180px"
                          >วันสั่งซื้อ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="tab7" id="li_tab">
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <div class="table-list">
              <div class="overflow-x-auto">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">
                        <input type="checkbox" id="" name="" value="" />
                      </th>

                      <th class="whitespace-nowrap">ช่องทาsง</th>
                      <th class="whitespace-nowrap">สินค้า</th>
                      <th class="whitespace-nowrap">เลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">ขนส่ง</th>
                      <th class="whitespace-nowrap">ค่าส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งนี้</th>
                      <th class="whitespace-nowrap">ยอดรวม</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px">วันแพ็ค</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px"
                          >วันนัดรับ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 180px"
                          >วันสั่งซื้อ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span stylde="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(item, index) in ordersList" :key="index">
                      <td><input type="checkbox" id="" name="" value="" /></td>
                      <td>
                        <Lucide :icon="item.socialName" class="w-5 h-5" />
                      </td>
                      <td><img src="" alt="" style="width: 100px" /></td>
                      <td>OD000{{ item.id }}</td>
                      <td>{{ item.customer.customerName }}</td>
                      <td>
                        <span
                          class="text-l px-1 bg-success text-white mr-1"
                          v-if="item.orderStatus === 'PAID'"
                        >
                          ยืนยัน
                        </span>
                        <span
                          class="text-l px-1 bg-warning text-white mr-1"
                          v-if="item.orderStatus === 'NOTPAID'"
                        >
                          ยังไม่จ่าย
                        </span>
                      </td>
                      <td>กสิกร</td>
                      <td>
                        <span class="px-1 bg-yellow text-white mr-1">{{
                          item.delivery
                        }}</span>
                      </td>
                      <td>
                        <button class="btn btn-sm btn-secondary w-24 mr-1 mb-2">
                          <i data-lucide="plus"></i> ใบแจ้งหนี้
                        </button>
                      </td>
                      <td class="bold">{{ item.totalPrice }}</td>
                      <td>แพ็คได้ทันที</td>
                      <td>
                        <span class="px-1 bg-success text-white mr-1"
                          >พร้อมรับทันที</span
                        >
                      </td>
                      <td class="date">
                        <div class="flex items-center justify-center">
                          <span class="flex items-center justify-center">
                            <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                          </span>
                          <span>{{
                            new Date(item.createdDate).toLocaleString("th-TH", {
                              dateStyle: "short",
                            })
                          }}</span>

                          <span class="flex items-center justify-center">
                            <Lucide icon="Clock" class="w-4 h-4 mt-1 ml-2" />
                          </span>
                          <span>{{
                            new Date(item.createdDate).toLocaleString("th-TH", {
                              timeStyle: "short",
                            })
                          }}</span>
                        </div>
                      </td>
                      <td>
                        <div class="flex items-center justify-center">
                          <!-- <button @click="printInvoice(item.pno)">
                            <span
                              class="btn_manage_order flex items-center justify-center mr-2"
                            >
                              <Lucide icon="Printer" class="w-5 h-5 mt-1" />
                            </span>
                          </button> -->
                          <Button
                          @click="printInvoice(item.pno)"
                            type="button"
                            variant="secondary"
                            class="inline-block mb-2 mt-2 mr-2"
                          >
                            <Lucide
                              icon="Printer"
                              class="block mx-auto w-4 h-4"
                            />
                          </Button>
                          <Button
                            as="a"
                            variant="secondary"
                            href="vieworder/:orderId"
                            class="inline-block mb-2 mt-2 mr-2"
                          >
                            <Lucide icon="Eye" class="block mx-auto w-4 h-4" />
                          </Button>

                          <Button
                            as="a"
                            variant="secondary"
                            href="EditSettingsrole"
                            class="inline-block mb-2 mt-2"
                          >
                            <Lucide icon="Edit" class="block mx-auto w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <thead>
                    <tr class="op6">
                      <th class="whitespace-nowrap"></th>

                      <th class="whitespace-nowrap">ช่องทาง</th>
                      <th class="whitespace-nowrap">สินค้า</th>
                      <th class="whitespace-nowrap">เลขคำสั่งซื้อ</th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 90px">ลูกค้า</span>
                      </th>
                      <th class="whitespace-nowrap">สถานะ</th>
                      <th class="whitespace-nowrap">การชำระเงิน</th>
                      <th class="whitespace-nowrap">ขนส่ง</th>
                      <th class="whitespace-nowrap">ค่าส่ง</th>
                      <th class="whitespace-nowrap">ใบแจ้งนี้</th>
                      <th class="whitespace-nowrap op10">
                        <span class="bold">{{ totalPrice() }}</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px">วันแพ็ค</span>
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 80px"
                          >วันนัดรับ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 180px"
                          >วันสั่งซื้อ</span
                        >
                      </th>
                      <th class="whitespace-nowrap">
                        <span style="display: block; width: 110px"
                          >ดำเนินการ</span
                        >
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- 
        <div class="tab6" id="li_tab"></div>
        <div class="tab7" id="li_tab"></div> -->
      </section>
    </div>
  </div>
  <br /><br />
  <!-- BEGIN: Pagination -->
  <select name="categories" id="pagination_select" class="filter_search">
    <option value="allcategories">แสดง 20 รายการ</option>
    <option value="maincategories">แสดง 50 รายการ</option>
    <option value="subcategories">แสดง 100 รายการ</option>
  </select>
</template>
<script lang="ts">
import axios from "axios";
import LoadingIcon from "../base-components/LoadingIcon";
import { useAuth } from "../stores/auth";
import { useUser } from "../stores/user";
import { useInventory } from "../stores/inventory";
import { setTimeout } from "timers/promises";
const inventory = useInventory() as any;
export default {
  data() {
    return {
      baseUrl: `${import.meta.env.VITE_API_URL}`,
      ordersList: [] as any[],
      deletedItems: [] as any[],
      categoryName: "",
      category: "all",
      loading: false,
      onload: true,
      orderId: 0,
      selectAll: false,
      orderCountStatus: "",
      inventoryId: Array.isArray(inventory)
        ? inventory.inventory[0].id
        : inventory.inventory.id,
    };
  },
  computed: {
    selectedCount() {
      return this.ordersList.filter((item) => item.selected).length;
    },
  },
  watch: {
    selectAll(newValue) {
      this.ordersList.forEach((item) => (item.selected = newValue));
    },
  },
  methods: {
    async printInvoice(value: any) {
      this.loading = true;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      const URL = `${
        import.meta.env.VITE_API_URL
      }/order/printBigLabels`.replace(" ", "");
      const orders = await axios.post(URL, { pno: value }, { headers });
      const res = orders.data.code;
      res == 200
        ? this.callGetLabelBase64(value)
        : alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
    },
    async callGetLabelBase64(value: any) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      const URL = `${import.meta.env.VITE_API_URL}/order/getPdfLabel`.replace(
        " ",
        ""
      );
      const resultLabel = await axios.post(URL, { pno: value }, { headers });
      const resLabel = resultLabel.data.result;
      const urlBase64 = "data:application/pdf;base64," + resLabel;
      const newTab = window.open("about:blank", "_blank");
      newTab.document.write(
        `<embed src="${urlBase64}" class="h-100 w-100" type="application/pdf" style="width:100%;height:100%;border:none;"></embed>`
      );
      this.loading = false;
    },
    totalPrice() {
      return this.ordersList.reduce((acc, curr) => acc + curr.totalPrice, 0);
    },
    async getAllOrder(type: string) {
      const InventoryStore = useInventory();
      const authStore = useAuth();
      const useStore = useUser();
      await authStore.fetchCheckAuth();
      console.log(authStore.checkAuth.id);
      // InventoryStore.setInventory();
      // console.log(InventoryStore.getInventory.shop);
      this.loading = true;
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const URL = `${import.meta.env.VITE_API_URL}/order/getAllOrder`.replace(
          " ",
          ""
        );
        const orders = await axios.post(
          URL,
          { inventoryId: this.inventoryId },
          { headers }
        );
        this.orderCountStatus = orders.data.status;
        switch (type) {
          case "all":
            this.ordersList = orders.data.orders;

            break;
          case "notpaid":
            const filteredOrders = orders.data.orders.filter(
              (i: { orderStatus: string }) => i.orderStatus === "NOTPAID"
            );

            this.ordersList = filteredOrders;

            break;
          case "paid":
            const filteredOrdersPaid = orders.data.orders.filter(
              (i: { orderStatus: string }) => i.orderStatus === "PAID"
            );

            this.ordersList = filteredOrdersPaid;

            break;
          case "delivery":
            const filteredOrdersDelivery = orders.data.orders.filter(
              (i: { state: number }) => i.state === 3
            );

            this.ordersList = filteredOrdersDelivery;

            break;
          case "success":
            const filteredOrdersSuccess = orders.data.orders.filter(
              (i: { state: number }) => i.state === 5
            );

            this.ordersList = filteredOrdersSuccess;

            break;
        }
        this.onload = false;
        //console.log("channel = ", this.ordersList);
      } catch (err) {
        console.log(err);
        this.loading = false;
        this.onload = false;
        alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }
    },
  },

  mounted() {
    this.getAllOrder("all");
  },
};
</script>
<style>
@import "..//assets/css/components/Order_appp.css";
@import "..//assets/css/components/tab.scss";
@import "..//assets/css/components/tab.css";
</style>
