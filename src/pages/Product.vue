<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";

import Button from "../base-components/Button";
import {
  FormInput,

} from "../base-components/Form";
import Lucide from "../base-components/Lucide";
import Table from "../base-components/Table";
import { Dialog} from "../base-components/Headless";
const subcategory = ref(["0"]);
const editorData = ref("<p>Content of the editor.</p>");

const editBarcodeModal = ref(false);
const seteditBarcodeModal = (value: boolean) => {
  editBarcodeModal.value = value;
};
const editBarcodeButtonRef = ref(null);

const editCategoryModal = ref(false);
const seteditCategoryModal = (value: boolean) => {
  editCategoryModal.value = value;
};
const editCategoryButtonRef = ref(null);

const editStockModal = ref(false);
const seteditStockModal = (value: boolean) => {
  editStockModal.value = value;
};
const editStockButtonRef = ref(null);

//ปุ่มเพิ่มลดในModal
// function increaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value++;
//   document.getElementById('number').value = value;
// }

// function decreaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value < 1 ? value = 1 : '';
//   value--;
//   document.getElementById('number').value = value;
// }
</script>

<template>
  <div class="flex items-center intro-y">
    <h2 class=" text-lg font-bold intro-y" id="">สินค้า</h2>
  </div>
  <div class="">
    <router-link
      :to="{
        name: 'editProduct',
        params: { productId: productId },
      }"
    >
      <Button variant="primary" class="btn_editpd mr-2 shadow-md" id="btn_editpd">
        <Lucide icon="Edit3" class="block mx-auto w-4 h-4" />
        &nbsp; แก้ไขสินค้า
      </Button>
    </router-link>
  </div>
  <div class="grid grid-cols-11 pb-20 mt-5 gap-x-6">
    <div class="col-span-11 intro-y 2xl:col-span-9">
      <!-- BEGIN: Uplaod Product -->
      <div class="p-5 intro-y box">
        <div class="pc-tab">
          <input checked class="checked" id="tab1" type="radio" name="pct" />
          <input id="tab2" type="radio" name="pct" />

          <nav>
            <ul class="ul">
              <li class="tab1" id="li_tab">
                <label for="tab1" class="label">รายละเอียดสินค้า &nbsp; </label>
              </li>
              <li class="tab2" id="li_tab">
                <label for="tab2" class="label">สต๊อก &nbsp; </label>
              </li>
            </ul>
          </nav>
          <section>
            <div class="tab1" id="li_tab">
              <form action="">
                <div class="flex items-center intro-y"></div>

                <div class="allcontent">
                  <div class="content1">
                    <!-- BEGIN: Notification -->

                    <!-- END: Notification -->
                    <div class="col-span-11 intro-y 2xl:col-span-9">
                      <!-- BEGIN: Uplaod Product -->
                      <div class="p-15">
                        <div class="">
                          <div class="forminput">
                            <div class="grid grid-cols-6 gap-4" id="bar_data">
                              <div class="col-start-1 col-end-2 ..." id="label">
                                <span class="text-right ...">รูปภาพ :</span>
                              </div>
                              <div class="col-end-7 col-span-5 ...">
                                <img
                                  class="h-28"
                                  :src="baseUrl + '/' + product.images"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div class="grid grid-cols-6 gap-4" id="bar_data">
                              <div class="col-start-1 col-end-2 ..." id="label">
                                <span class="text-right ...">ชื่อ :</span>
                              </div>
                              <div class="col-end-7 col-span-5 ..." id="bdred">
                                <div class="forminput">
                                  <p>{{ product.productName }}</p>
                                </div>
                              </div>
                            </div>

                            <div class="grid grid-cols-6 gap-4" id="bar_data">
                              <div class="col-start-1 col-end-2 ..." id="label">
                                <span class="text-right ...">รหัสสินค้า :</span>
                              </div>
                              <div class="col-end-7 col-span-5 ..." id="bdred">
                                <div class="forminput">
                                  <p>{{ product.productSKU }}</p>
                                </div>
                              </div>
                            </div>

                            <div class="grid grid-cols-6 gap-4" id="bar_data">
                              <div class="col-start-1 col-end-2 ..." id="label">
                                <span class="text-right ...">ราคาต่อหน่วย :</span>
                              </div>
                              <div class="col-end-7 col-span-5 ..." id="bdred">
                                <div class="forminput">
                                  <p class="unit_price">{{ product.unitPrice }} บาท</p>
                                </div>
                              </div>
                            </div>

                            <div class="grid grid-cols-6 gap-4" id="bar_data">
                              <div class="col-start-1 col-end-2 ..." id="label">
                                <span class="text-right ...">บาร์โค้ด :</span>
                              </div>
                              <svg id="barcode"></svg>
                            </div>

                            <div class="grid grid-cols-6 gap-4" id="bar_data">
                              <div class="col-start-1 col-end-2 ..." id="label">
                                <span class="text-right ...">แท็ก :</span>
                              </div>
                              <div class="col-end-7 col-span-5 ..." id="bdred">
                                <div class="forminput">
                                  <p>{{ product.tag }}</p>
                                </div>
                              </div>
                            </div>

                            <div class="grid grid-cols-6 gap-4" id="bar_data">
                              <div class="col-start-1 col-end-2 ..." id="label">
                                <span class="text-right ...">ประเภท :</span>
                              </div>
                              <div class="col-end-7 col-span-5 ..." id="bdred">
                                <div class="forminput">
                                  <p
                                    class="type_product"
                                    v-if="product.productType == 'SIMPLE'"
                                  >
                                    สินค้าธรรมดา
                                  </p>
                                  <p
                                    class="type_product"
                                    v-if="product.productType == 'CONFIG'"
                                  >
                                    สินค้ามีตัวเลือก
                                  </p>
                                  <p
                                    class="type_product"
                                    v-if="product.productType == 'BUNDLE'"
                                  >
                                    สินค้าจัดเซ็ต
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div class="grid grid-cols-6 gap-4" id="bar_data">
                              <div class="col-start-1 col-end-2 ..." id="label">
                                <span class="text-right ...">หมวดหมู่ :</span>
                              </div>
                              <div class="col-end-7 col-span-5 ..." id="bdred">
                                <div class="forminput">
                                  <p class="type_categories">
                                    {{ category.categoryName }}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div class="grid grid-cols-6 gap-4" id="bar_data">
                              <div class="col-start-1 col-end-2 ..." id="label">
                                <span class="text-right ..."
                                  >รายละเอียดสินค้า (ย่อ) :</span
                                >
                              </div>
                              <div class="col-end-7 col-span-5 ..." id="bdred">
                                <div class="forminput">
                                  <p>{{ product.shortDescription }}</p>
                                </div>
                              </div>
                            </div>

                            <div class="grid grid-cols-6 gap-4" id="bar_data">
                              <div class="col-start-1 col-end-2 ..." id="label">
                                <span class="text-right ...">รายละเอียด :</span>
                              </div>
                              <div class="col-end-7 col-span-5 ..." id="bdred">
                                <div class="forminput">
                                  <p>{{ product.longDescription }}</p>
                                </div>
                              </div>
                            </div>

                            <div class="grid grid-cols-6 gap-4" id="bar_data">
                              <div class="col-start-1 col-end-2 ..." id="label">
                                <span class="text-right ...">น้ำหนัก :</span>
                              </div>
                              <div class="col-end-7 col-span-5 ..." id="bdred">
                                <div class="forminput">
                                  <p>{{ product.weight }} <span>กรัม</span></p>
                                </div>
                              </div>
                            </div>

                            <div class="grid grid-cols-6 gap-4" id="bar_data">
                              <div class="col-start-1 col-end-2 ..." id="label">
                                <span class="text-right ...">คะแนนสะสม :</span>
                              </div>
                              <div class="col-end-7 col-span-5 ..." id="bdred">
                                <div class="forminput">
                                  <p>{{ product.point }}</p>
                                </div>
                              </div>
                            </div>

                            <div class="grid grid-cols-6 gap-4" id="bar_data">
                              <div class="col-start-1 col-end-2 ..." id="label">
                                <span class="text-right ...">วันที่สร้าง :</span>
                              </div>
                              <div class="col-end-7 col-span-5 ..." id="bdred">
                                <div class="grid grid-cols-6 gap-4">
                                  <div class="flex items-center">
                                    <span class="w-5 h-5">
                                      <Lucide
                                        icon="Calendar"
                                        class="w-4 h-4 mr-4"
                                        id="lucide_datetime"
                                      />
                                    </span>
                                    <span>{{ product.createdAt }}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="grid grid-cols-6 gap-4" id="bar_data">
                              <div class="col-start-1 col-end-2 ..." id="label">
                                <span class="text-right ...">วันที่แก้ไข :</span>
                              </div>
                              <div class="col-end-7 col-span-5 ..." id="bdred">
                                <div class="grid grid-cols-6 gap-4">
                                  <div class="flex items-center">
                                    <span class="w-5 h-5 mr-4">
                                      <Lucide
                                        icon="Calendar"
                                        class="w-4 h-4"
                                        id="lucide_datetime"
                                      />
                                    </span>
                                    <span>{{ product.updatedAt }}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br /><br />
                </div>
              </form>
            </div>
            <div class="tab2" id="li_tab">
              <div id="allTab-container" class="table-responsive kv-grid-container">
                <table
                  class="table-custom m-b-none kv-grid-table table table-bordered table-striped kv-table-wrap"
                >
                  <thead>
                    <tr>
                      <th
                        class="checkAll kv-all-select kv-align-center kv-align-middle skip-export"
                        style="width: 500px; text-align: left"
                        data-col-seq="0"
                      >
                        คลังสินค้า
                      </th>
                      <th
                        class="kv-align-center kv-align-middle"
                        style="width: 80px"
                        data-col-seq="1"
                      >
                        ขั้นต่ำ
                      </th>
                      <th
                        class="kv-align-center kv-align-middle"
                        style="width: 100px"
                        data-col-seq="2"
                      >
                        คงเหลือ
                      </th>
                      <!-- <th
                        class="kv-align-left kv-align-middle"
                        style="width: 100px"
                        data-col-seq="3"
                      >
                        จอง
                      </th> -->
                      <!-- <th
                        class="kv-align-center kv-align-middle"
                        style="width: 100px"
                        data-col-seq="4"
                      >
                        พร้อมขาย
                      </th> -->
                      <th
                        class="kv-align-center kv-align-middle"
                        style="width: 150px"
                        data-col-seq="6"
                      >
                        สถานะ
                      </th>
                      <!-- <th
                        class="kv-align-center kv-align-middle"
                        style="width: 150px"
                        data-col-seq="7"
                      >
                        ดำเนินการ
                      </th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-key="14154011">
                      <td
                        class="checkOne skip-export kv-align-center kv-align-middle kv-row-select"
                        style="text-align: left"
                        data-col-seq="0"
                      >
                        {{ warehouse.warehouseName }}
                      </td>
                      <td class="kv-align-center kv-align-middle" data-col-seq="1">
                        {{ product.safetyStock }}
                      </td>
                      <td class="kv-align-center kv-align-middle" data-col-seq="2">
                        {{ product.QTY }}
                      </td>
                      <!-- <td
                        class="kv-align-left kv-align-middle"
                        style="white-space: normal; word-break: break-all"
                        data-col-seq="3"
                      >
                        {{  product.preOrder.length }}
                      </td> -->
                      <!-- <td
                        class="kv-align-center kv-align-middle"
                        data-col-seq="4"
                      >
                         <div
                          id="div_edit_stock"
                          class="flex items-center justify-center"
                          @click="
                            () => {
                              seteditStockModal(true);
                            }
                          "
                        >
                          <span class="flex items-center justify-center">
                            <Lucide icon="Edit" class="w-5 h-5 pt-1" />
                          </span>
                          <span>{{ product.QTY }}</span>
                        </div> 
                      </td> -->
                      <td class="kv-align-center kv-align-middle" data-col-seq="6">
                        <p class="status_product bg-warning text-dark">
                          <span v-if="product.QTY == 0">สินค้าหมด</span
                          ><span v-else-if="product.QTY < product.safetyStock"
                            >สินค้าใกล้หมด</span
                          ><span v-else>สินค้าพร้อมขาย</span>
                        </p>
                      </td>
                      <!-- <td
                        class="kv-align-center kv-align-middle"
                        style="width: 15%"
                        data-col-seq="7"
                      >
                        <Button id="btn_booking_list">
                          <Lucide icon="RotateCcw" class="w-4 h-4" />
                          รายการจอง
                        </Button>
                      </td> -->
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- <br /><br />
               <hr />
              <br /> 
                <select 
                name="categories"
                id="categories_select"
                class="filter_search"
              >
                <option value="allcategories">ประวัติสินค้า</option>
                <option value="maincategories">คำสั่งซื้อ</option>
                <option value="subcategories">ผู้ใช้งาน</option>
                <option value="allcategories">เปลี่ยนแปลง</option>
                <option value="maincategories">รายการสั่งซื้อ</option>
                <option value="subcategories">ย้ายคลังสินค้า</option>
              </select> 
              <br /><br />
              <div
                id="allTab-container"
                class="table-responsive kv-grid-container"
              >
                <table
                  class="table-custom m-b-none kv-grid-table table table-bordered table-striped kv-table-wrap"
                >
                  <thead>
                    <tr>
                      <th
                        class="checkAll kv-all-select kv-align-center kv-align-middle skip-export"
                        style="width: 400px; text-align: left"
                        data-col-seq="0"
                      >
                        การเปลี่ยนแปลง
                      </th>
                      <th class="" style="width: 100px" data-col-seq="2">
                        เพิ่ม/ลด
                      </th>
                      <th
                        class="kv-align-center kv-align-middle"
                        style="width: 100px"
                        data-col-seq="2"
                      >
                        สถานะ
                      </th>
                      <th
                        class="kv-align-left kv-align-middle"
                        style="width: 100px"
                        data-col-seq="3"
                      >
                        คลังสินค้า
                      </th>
                      <th
                        class="kv-align-center kv-align-middle"
                        style="width: 180px"
                        data-col-seq="4"
                      >
                        วันที่ดำเนินการ
                      </th>
                      <th
                        class="kv-align-center kv-align-middle"
                        style="width: 150px"
                        data-col-seq="6"
                      >
                        ผู้ดำเนินการ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        class="checkOne skip-export kv-align-center kv-align-middle kv-row-select"
                        style="text-align: left"
                        data-col-seq="0"
                      >
                        แก้ไขโดยผู้ใช้งานระบบ (<span>0</span> > <span>10</span>)
                      </td>
                      <td style="text-align: center">
                        <div class="flex items-center justify-center">
                          <span>10 </span>
                          <span class="Lucide_ChevronUp">
                            <Lucide icon="ChevronsUp" class="w-4 h-4" />
                          </span>
                        </div>
                      </td>
                      <td
                        class="kv-align-center kv-align-middle"
                        data-col-seq="2"
                      >
                        <p class="status_product2 bg-success">เพิ่ม</p>
                      </td>
                      <td
                        class="kv-align-left kv-align-middle"
                        style="white-space: normal; word-break: break-all"
                        data-col-seq="3"
                      >
                        My Warehouse
                      </td>
                      <td
                        class="kv-align-center kv-align-middle"
                        data-col-seq="4"
                      >
                        9 วันที่ผ่านมา
                      </td>
                      <td
                        class="kv-align-center kv-align-middle"
                        data-col-seq="6"
                      >
                        <p>Aris Arisa</p>
                      </td>
                    </tr>

                    <tr>
                      <td
                        class="checkOne skip-export kv-align-center kv-align-middle kv-row-select"
                        style="text-align: left"
                        data-col-seq="0"
                      >
                        เปลี่ยนแปลงจำนวนสินค้า โดยคำสั่งซื้อ OD00000002 (<span
                          >1</span
                        >
                        > <span>0</span>)
                      </td>
                      <td style="text-align: center">
                        <div class="flex items-center justify-center">
                          <span>1 </span>
                          <span class="Lucide_ChevronsDown text-danger">
                            <Lucide icon="ChevronsDown" class="w-4 h-4" />
                          </span>
                        </div>
                      </td>
                      <td
                        class="kv-align-center kv-align-middle"
                        data-col-seq="2"
                      >
                        <p class="status_product2 bg-danger">ลด</p>
                      </td>
                      <td
                        class="kv-align-left kv-align-middle"
                        style="white-space: normal; word-break: break-all"
                        data-col-seq="3"
                      >
                        {{ warehouse.warehouseName }}
                      </td>
                      <td
                        class="kv-align-center kv-align-middle"
                        data-col-seq="4"
                      >
                        9 วันที่ผ่านมา
                      </td>
                      <td
                        class="kv-align-center kv-align-middle"
                        data-col-seq="6"
                      >
                        <p>Aris Arisa</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> -->
            </div>
          </section>
        </div>
      </div>
    </div>
    <!-- END: Uplaod Product -->

    <!-- <div class="hidden col-span-2 intro-y 2xl:block" id="border">
      <div class="sticky top-0">
        <div class="relative p-5 rounded-md">
          <div>
            <div class="grid grid-cols-4 gap-4">
              <div class="col-span-3">
                <span class="h4"> ประวัติสินค้า </span>
              </div>
              <div class="" id="s_font_size">
                <span
                  class="text-xs px-1.5 rounded-full bg-primary text-white mr-1"
                  >5</span
                >
              </div>
            </div>

            <div class="user_history">
              <div class="">
                <div class="grid grid-cols-4 gap-4 mt-5">
                  <div class="">
                    <Lucide
                      icon="User"
                      class="block mx-auto"
                      id="lucide_user"
                    />
                  </div>
                  <div class="col-span-3" id="s_font_size">แก้ไขสินค้า</div>
                </div>
                <div class="grid grid-cols-4 gap-4 mb-5">
                  <div class=""></div>
                  <div class="col-span-3" id="xs_font_size">
                    9 วันที่ผ่านมา | Aris Arisa
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div class="user_history">
              <div class="">
                <div class="grid grid-cols-4 gap-4 mt-5">
                  <div class="">
                    <Lucide
                      icon="User"
                      class="block mx-auto"
                      id="lucide_user"
                    />
                  </div>
                  <div class="col-span-3" id="s_font_size">สร้างสินค้า</div>
                </div>
                <div class="grid grid-cols-4 gap-4 mb-5">
                  <div class=""></div>
                  <div class="col-span-3" id="xs_font_size">
                    9 วันที่ผ่านมา | Aris Arisa
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
  <!--M     O     D     A     L-->

  <Dialog
    :open="editBarcodeModal"
    @close="
      () => {
        seteditBarcodeModal(false);
      }
    "
    :initialFocus="editBarcodeButtonRef"
  >
    <Dialog.Panel>
      <div class="p-5">
        <div>
          <div class="">
            <span
              class="flex items-center"
              id="btn_Xcircle"
              @click="
                () => {
                  seteditBarcodeModal(false);
                }
              "
            >
              <Lucide icon="XCircle" class="w-7 h-7" />
            </span>
            <span class="modal_head_text">แก้ไขบาร์โค๊ด</span>
          </div>

          <hr />
          <br />
          <div class="forminput">
            <FormInput id="product-stock" type="text" placeholder="เลขบาร์โค๊ด" />
          </div>
        </div>
      </div>
      <div class="px-5 pb-8 text-center">
        <Button
          variant="outline-secondary"
          type="reset"
          class="w-24 mr-2"
          ref="editfeturButtonRef"
        >
          รีเซ็ต
        </Button>
        <Button variant="danger" type="button" class="w-24"> บันทึก </Button>
      </div>
    </Dialog.Panel>
  </Dialog>

  <!--M     O     D     A     L-->

  <!--M     O     D     A     L2-->

  <Dialog
    :open="editCategoryModal"
    @close="
      () => {
        seteditCategoryModal(false);
      }
    "
    :initialFocus="editCategoryButtonRef"
  >
    <Dialog.Panel>
      <form action="">
        <div class="p-5">
          <div>
            <div class="">
              <span
                class="flex items-center"
                id="btn_Xcircle"
                @click="
                  () => {
                    seteditCategoryModal(false);
                  }
                "
              >
                <Lucide icon="XCircle" class="w-7 h-7" />
              </span>
              <span class="modal_head_text">แก้ไขหมวดหมู่</span>
            </div>

            <hr />
            <br />

            <div class="forminput">
              <input
                type="checkbox"
                name=""
                id=""
                class="checkboxcategory w-6 h-6"
              /><span>&nbsp;&nbsp;Test Category</span> <br />
              <br />
              <input
                type="checkbox"
                name=""
                id=""
                class="checkboxcategory w-6 h-6"
              /><span>&nbsp;&nbsp;หลัก</span>
            </div>
          </div>
        </div>
        <div class="px-5 pb-8 text-center">
          <Button
            variant="outline-secondary"
            type="reset"
            class="w-24 mr-2"
            ref="editfeturButtonRef"
          >
            รีเซ็ต
          </Button>
          <Button variant="danger" type="button" class="w-24"> บันทึก </Button>
        </div>
      </form>
    </Dialog.Panel>
  </Dialog>

  <!--M     O     D     A     L2-->

  <!--M     O     D     A     L3-->

  <Dialog
    :open="editStockModal"
    @close="
      () => {
        seteditStockModal(false);
      }
    "
    :initialFocus="editStockButtonRef"
  >
    <Dialog.Panel>
      <form action="">
        <div class="p-5">
          <div>
            <div class="">
              <span class="modal_head_text">แก้ไขสต๊อกสินค้า</span>
            </div>

            <hr />
            <br />

            <div class="table">
              <table>
                <thead>
                  <tr>
                    <th style="width: 160px; text-align: left">คลังสินค้า</th>
                    <th style="width: 80px">คงเหลือ</th>
                    <th style="width: 80px">จอง</th>
                    <th style="width: 200px">พร้อมขาย</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="text-align: left">My Warehouse</td>
                    <td style="">0</td>
                    <td style="">0</td>
                    <td style="">
                      <form class="form_increase_decrease">
                        <div
                          class="value-button"
                          id="decrease"
                          onclick="decreaseValue()"
                          value="Decrease Value"
                        >
                          -
                        </div>
                        <input type="number" id="number" value="0" />
                        <div
                          class="value-button"
                          id="increase"
                          onclick="increaseValue()"
                          value="Increase Value"
                        >
                          +
                        </div>
                      </form>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="px-5 pb-8 text-center">
          <Button
            variant="danger"
            type="button"
            class="w-24 mr-2"
            ref="editStockButtonRef"
          >
            ตกลง
          </Button>
          <Button
            variant="outline-secondary"
            type="button"
            @click="
              () => {
                seteditStockModal(false);
              }
            "
            class="w-24"
          >
            ยกเลิก
          </Button>
        </div>
      </form>
    </Dialog.Panel>
  </Dialog>

  <!--M     O     D     A     L3-->
</template>
<script lang="ts">
import JsBarcode from "jsbarcode";
import axios from "axios";
export default {
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      baseUrl: `${import.meta.env.VITE_API_URL}`,
      barcodeType: "code39",
      barcodeOptions: {},
      product: {
        productType: "" as string,
        productName: "" as string,
        productSKU: "" as string,
        productBarcode: "" as string,
        images: "" as string,
        brand: "" as string,
        weight: Number,
        width: Number,
        height: Number,
        point: Number,
        shortDescription: "" as string,
        longDescription: "" as string,
        tag: "" as string,
        preOrder: Boolean,
        unitCost: Number,
        unitPrice: Number,
        QTY: 0 as number,
        safetyStock: 0 as number,
        createdAt: "" as string,
        updatedAt: "" as string,
      },
      category: {
        categoryName: "" as string,
      },
      warehouse: {
        warehouseName: "" as string,
      },
    };
  },
  methods: {
    //get product by id
    async getProductById() {
      const getProduct = await axios.post(
        `${import.meta.env.VITE_API_URL}/product/getProductById`,
        {
          data: this.productId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("auth._token.local")}`,
          },
        }
      );
      this.product = getProduct.data.data;
      this.category = getProduct.data.data.category;
      this.warehouse = getProduct.data.data.warehouse;
      this.generateBarcode();
    },
    generateBarcode() {
      const svgElement = document.getElementById("barcode");
      JsBarcode(svgElement, this.product.productBarcode, {
        format: this.barcodeType,
        ...this.barcodeOptions,
      });
    },
  },
  created() {
    this.getProductById();
  },
  destroyed() {},
};
</script>
<style>
@import "..//assets/css/components/Categories.css";
@import "..//assets/css/components/tab.scss";
@import "..//assets/css/components/tab.css";
@import "..//assets/css/components/Product.css";
.form_increase_decrease {
  margin: 0 auto;
  text-align: center;
}

.value-button {
  display: inline-block;
  border: 1px solid #ddd;
  margin-top: -4px;

  width: 20px;
  height: 30px;
  text-align: center;
  vertical-align: middle;
  padding: 5px 0;
  font-weight: bold;
  background: #eee;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.value-button:hover {
  cursor: pointer;
  background-color: #af0000;
  color: #fff;
}

.form_increase_decrease #decrease {
  margin-right: -4px;
  border-radius: 8px 0 0 8px;
}

.form_increase_decrease #increase {
  margin-left: -4px;
  border-radius: 0 8px 8px 0;
}

.form_increase_decrease #input-wrap {
  margin: 0px;
  padding: 0px;
}

input#number {
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  margin: 0px;
  width: 100px;
  height: 30px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
