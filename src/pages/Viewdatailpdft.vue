<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";
import Button from "../base-components/Button";
import {
  FormInput,
} from "../base-components/Form";

import Lucide from "../base-components/Lucide";
import { Dialog, Menu } from "../base-components/Headless";
const subcategory = ref(["0"]);
const editorData = ref("<p>Content of the editor.</p>");

const deleteConfirmationModal = ref(false);
const setDeleteConfirmationModal = (value: boolean) => {
  deleteConfirmationModal.value = value;
};
const deleteButtonRef = ref(null);

const addfetureModal = ref(false);
const setaddfetureModal = (value: boolean) => {
  addfetureModal.value = value;
};
const addfeturButtonRef = ref(null);

const warningConfirmationModal = ref(false);
const setwarningConfirmationModal = (value: boolean) => {
  warningConfirmationModal.value = value;
};
const warningButtonRef = ref(null);

const editfetureModal = ref(false);
const seteditfetureModal = (value: boolean) => {
  editfetureModal.value = value;
};
const editfeturButtonRef = ref(null);
</script>

<template>
  <form action="">
    <div class="flex items-center  intro-y">
      <h2 class="mr-auto text-lg font-bold" id="">Size</h2>
    </div>
    <br /><br />
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
            <br />
            <div class="forminput">
              <div class="grid grid-cols-1 gap-4">
                <div class="" id="bdred">
                  <div
                    id="btn_add_feture"
                    class="flex items-center"
                    @click="
                      () => {
                        setaddfetureModal(true);
                      }
                    "
                  >
                    <span class="flex items-center justify-center">
                      <Lucide icon="PlusCircle" class="w-5 h-5 mt-1" />
                    </span>
                    <span> &nbsp; เพิ่มตัวเลือกคุณสมบัติ</span>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="input_text_addpdft text-right ..."
                    >รหัสคุณสมบัติ :</span
                  >
                </div>
                <div class="col-end-7 col-span-5 mt-2" id="bdred">
                  <p>Size</p>
                </div>
              </div>
              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="input_text_addpdft text-right ..."
                    >ชื่อคุณสมบัติ :</span
                  >
                </div>
                <div class="col-end-7 col-span-5 mt-2" id="bdred">
                  <p>Size</p>
                </div>
              </div>
              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="input_text_addpdft text-right ..."
                    >ตัวเลือกคุณสมบัติ :</span
                  >
                </div>
                <div class="col-end-7 col-span-5 ..." id="bdred">
                  <div class="pc-tab">
                    <input checked id="tab1" type="radio" name="pct" />

                    <nav>
                      <ul class="ul">
                        <li class="tab1" id="li_tab">
                          <label for="tab1" class="label"
                            >รายการตัวเลือก &nbsp;
                            <span
                              class="text-xs px-1.5 rounded-full bg-warning text-white mr-1"
                              >5</span
                            >
                          </label>
                        </li>
                        <!-- <li class="tab2" id="li_tab">
                          <label for="tab2" class="label"
                            >เพิ่มตัวเลือกคุณสมบัติ &nbsp;
                            <span
                              class="text-xs px-1.5 rounded-full bg-warning text-white mr-1"
                              >5</span
                            >
                          </label>
                        </li>
                 -->
                      </ul>
                    </nav>
                    <section>
                      <div class="tab1" id="li_tab">
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
                                  style="width: 30px"
                                  data-col-seq="0"
                                >
                                  ลำดับ
                                </th>

                                <th
                                  class="kv-align-center kv-align-middle"
                                  style="width: 80px"
                                  data-col-seq="1"
                                >
                                  รหัสตัวเลือก
                                </th>

                                <th
                                  class=""
                                  style="width: 400px; text-align: left"
                                  data-col-seq="3"
                                >
                                  ชื่อตัวเลือก
                                </th>

                                <th
                                  class="kv-align-center kv-align-middle"
                                  style="width: 80px"
                                  data-col-seq="4"
                                >
                                  ดำเนินการ
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr data-key="14154011">
                                <td
                                  class="checkOne skip-export kv-align-center kv-align-middle kv-row-select"
                                  style="width: 30px"
                                  data-col-seq="0"
                                >
                                  1
                                </td>
                                <td
                                  class="kv-align-center kv-align-middle"
                                  style="width: 80px"
                                  data-col-seq="1"
                                >
                                  XL
                                </td>
                                <td style="text-align: left">
                                  <a href="#"
                                    class="name_select_ft"
                                    @click="
                                      () => {
                                        seteditfetureModal(true);
                                      }
                                    "
                                  >
                                    XL
                                  </a>
                                </td>

                                <td>
                                  <Menu>
                                    <Menu.Button :as="Button" class="px-2 !box">
                                      <Lucide
                                        icon="MoreVertical"
                                        class="w-4 h-4 flex items-center"
                                      />
                                    </Menu.Button>
                                    <Menu.Items class="w-40">
                                      <Menu.Item
                                        @click="
                                          () => {
                                            setDeleteConfirmationModal(true);
                                          }
                                        "
                                      >
                                        <Lucide
                                          icon="Trash2"
                                          class="w-4 h-4 mr-2"
                                        />

                                        ลบตัวเลือก
                                      </Menu.Item>
                                    </Menu.Items>
                                  </Menu>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="checkOne skip-export kv-align-center kv-align-middle kv-row-select"
                                  style="width: 30px"
                                  data-col-seq="0"
                                >
                                  2
                                </td>
                                <td
                                  class="kv-align-center kv-align-middle"
                                  style="width: 80px"
                                  data-col-seq="1"
                                >
                                  L
                                </td>
                                <td style="text-align: left">
                                  <a href="#"
                                    class="name_select_ft"
                                    @click="
                                      () => {
                                        seteditfetureModal(true);
                                      }
                                    "
                                  >
                                    L
                                  </a>
                                </td>

                                <td>
                                  <Menu>
                                    <Menu.Button :as="Button" class="px-2 !box">
                                      <Lucide
                                        icon="MoreVertical"
                                        class="w-4 h-4 flex items-center"
                                      />
                                    </Menu.Button>
                                    <Menu.Items class="w-40">
                                      <Menu.Item
                                        @click="
                                          () => {
                                            setDeleteConfirmationModal(true);
                                          }
                                        "
                                      >
                                        <Lucide
                                          icon="Trash2"
                                          class="w-4 h-4 mr-2"
                                        />

                                        ลบตัวเลือก
                                      </Menu.Item>
                                    </Menu.Items>
                                  </Menu>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <br /><br />
                      </div>

                      <div class="tab2" id="li_tab">
                        <div
                          id="allTab-container"
                          class="table-responsive kv-grid-container"
                        ></div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-end gap-2 mt-5 md:flex-row">
          <a href="#">
            <Button variant="primary" class="mr-2 shadow-md" id="goldgd">
              <Lucide icon="Save" class="block mx-auto" />
              &nbsp; บันทึก
            </Button></a
          >
        </div>
      </div>
    </div>
    <!--M     O     D     A     L-->
    <Dialog
      :open="addfetureModal"
      @close="
        () => {
          setaddfetureModal(false);
        }
      "
      :initialFocus="addfeturButtonRef"
    >
      <Dialog.Panel>
        <div class="p-5">
          <div>
            <span class="modal_head_text_menu">เพิ่มตัวเลือกคุณสมบัติ</span>
            <br /><br />
            <hr />
            <br />
            <div class="forminput">
              <div class="grid grid-cols-3 gap-4">
                <div class="col-start-1 col-end-2" id="label">
                  <span class="input_text_addpdft text-right ..."
                    >รหัสตัวเลือก :</span
                  >
                </div>
                <div class="col-start-2 col-end-4" id="bdred">
                  <FormInput
                    id="product-stock"
                    type="text"
                    placeholder="รหัสตัวเลือก"
                  />
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div class="col-start-1 col-end-2" id="label">
                  <span class="input_text_addpdft text-right ..."
                    >ชื่อตัวเลือก :</span
                  >
                </div>
                <div class="col-start-2 col-end-4" id="bdred">
                  <FormInput
                    id="product-stock"
                    type="text"
                    placeholder="ชื่อตัวเลือก"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-5 pb-8 text-center">
          <Button
            variant="danger"
            type="button"
            class="w-24 mr-2"
            ref="addfeturButtonRef"
            @click="
              () => {
                setwarningConfirmationModal(true);
              }
            "
          >
            ตกลง
          </Button>
          <Button
            variant="outline-secondary"
            type="button"
            @click="
              () => {
                setaddfetureModal(false);
              }
            "
            class="w-24"
          >
            ยกเลิก
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>

    <!--M     O     D     A     L-->

    <!--M     O     D     A     L2-->
    <Dialog
      :open="deleteConfirmationModal"
      @close="
        () => {
          setDeleteConfirmationModal(false);
        }
      "
      :initialFocus="deleteButtonRef"
    >
      <Dialog.Panel>
        <div class="p-5 text-center">
          <Lucide
            icon="AlertCircle"
            class="w-16 h-16 mx-auto mt-3 text-danger"
          />
          <div class="mt-5 text-3xl">ลบตัวเลือก?</div>
          <div class="mt-2 text-slate-500">
            หลังจากลบตัวเลือกแล้ว ตัวเลือกจะไม่ถูกนำออกจากสินค้า!
          </div>
        </div>
        <div class="px-5 pb-8 text-center">
          <Button
            variant="danger"
            type="button"
            class="w-24 mr-2"
            ref="deleteButtonRef"
          >
            ตกลง
          </Button>
          <Button
            variant="outline-secondary"
            type="button"
            @click="
              () => {
                setDeleteConfirmationModal(false);
              }
            "
            class="w-24"
          >
            ยกเลิก
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>

    <!--M     O     D     A     L2-->

    <!--M     O     D     A     L3-->

    <Dialog
      :open="warningConfirmationModal"
      @close="
        () => {
          setwarningConfirmationModal(false);
        }
      "
      :initialFocus="warningButtonRef"
    >
      <Dialog.Panel>
        <div class="p-5 text-center">
          <Lucide
            icon="AlertCircle"
            class="w-16 h-16 mx-auto mt-3 text-warning"
          />
          <div class="mt-5 text-3xl">ข้อมูลไม่ถูกต้อง</div>
          <div class="mt-2 text-slate-500">
            Please fill your atrribute code!
          </div>
        </div>
        <div class="px-5 pb-8 text-center">
          <Button
            variant="danger"
            type="button"
            @click="
              () => {
                setwarningConfirmationModal(false);
              }
            "
            class="w-24"
          >
            ตกลง
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>

    <!--M     O     D     A     L3-->


        <!--M     O     D     A     L4-->

        <Dialog
        :open="editfetureModal"
      @close="
        () => {
          seteditfetureModal(false);
        }
      "
      :initialFocus="editfeturButtonRef"
    >
      <Dialog.Panel>
        <div class="p-5">
          <div>
            <span class="modal_head_text_menu">ชื่อตัวเลือก</span>
            <br /><br />
            <hr />
            <br />
            <div class="">
              
                  <FormInput
                    id="product-stock"
                    type="text"
                    placeholder="ชื่อตัวเลือก"
                    value="XL"
                  />
               
            
            </div>
          </div>
        </div>
        <div class="px-5 pb-8 text-center">
          <Button
            variant="danger"
            type="button"
            class="w-24 mr-2"
            ref="editfeturButtonRef"
            @click="
              () => {
                setwarningConfirmationModal(true);
              }
            "
          >
            ตกลง
          </Button>
          <Button
            variant="outline-secondary"
            type="button"
            @click="
              () => {
                seteditfetureModal(false);
              }
            "
            class="w-24"
          >
            ยกเลิก
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>

    <!--M     O     D     A     L4-->
  </form>
</template>
<style>
@import "../assets/css/components/AddCategories.css";
@import "..//assets/css/components/AddProductfetures.css";
@import "..//assets/css/components/Viewdatailpdft.css";

.textarea {
  border-radius: 6px;
}
Textarea:focus {
  border-radius: 6px;
  border: 2px solid #af0000;
}
</style>