<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
import fakerData from "../utils/faker";
import Button from "../base-components/Button";
import {
  FormInput,

  FormSelect,

} from "../base-components/Form";

import Lucide from "../base-components/Lucide";

import { Dialog, Menu } from "../base-components/Headless";
import TinySlider, { TinySliderElement } from "../base-components/TinySlider";

const subcategory = ref(["0"]);
const editorData = ref("<p>Content of the editor.</p>");

/*Date Picker*/
const date = ref("");
const daterange = ref("");
const datepickerModalPreview = ref(false);
const setDatepickerModalPreview = (value: boolean) => {
  datepickerModalPreview.value = value;
};
const cancelButtonRef = ref(null);

</script>

<template>
  <form action="">
    <div class="flex items-center  intro-y">
      <h2 class="mr-auto text-lg font-bold" id="">
        เพิ่มรายการเปลี่ยนแปลง
      </h2>
    </div>
    <br /><br />
    <div class="allcontent">
      <div class="content1">
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
                รายละเอียด
              </div>
              <br />
              <div class="forminput">
                <br />
                <div
                class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
              >
                <Lucide icon="Package" class="w-4 h-4 mr-2 " />
                คลังสินค้า
              </div>
                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 mt-2" id="label">
                    <span class="text-right"><span class="text-danger text-l font-bold">* </span> คลังสินค้า :</span>
                  </div>
                  <div class="col-end-7 col-span-5" id="bdred">
                    <FormSelect v-model="categoryId" id="">
                      <option value="">My WareHouse</option>
                      <!-- <option
                              id="when_hover"
                              v-for="(item, index) in categories"
                              :key="index"
                              :value="item.id"
                            >
                              {{ item.categoryName }}
                            </option> -->
                    </FormSelect>
                  </div>
                </div>

             

                <div class="grid grid-cols-1 gap-4">
                  <hr />
                </div>
                <br />
                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 mt-2" id="label">
                    <span class="text-right"><span class="text-danger text-l font-bold">* </span>หมายเหตุ :</span>
                  </div>
                  <div class="col-span-5 ml-3">
                    <textarea
                      name=""
                      id=""
                      rows="2"
                      class="forminput"
                      placeholder="ที่อยู่"
                    ></textarea>
                  </div>
                </div>
          
                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 mt-2" id="label">
                    <span class="text-right"><span class="text-danger text-l font-bold">* </span>หมายเลขอ้างอิง :</span>
                  </div>
                  <div class="col-end-7 col-span-5" id="bdred">
                    <FormInput
                      v-model="brand"
                      id="product-stock"
                      type="text"
                      placeholder="หมายเลขอ้างอิง"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 mt-2" id="label">
                    <span class="text-right"><span class="text-danger text-l font-bold">* </span>เลือกไฟล์ :</span>
                  </div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <input
                      type="file"
                      name="file"
                      id="file"
                      class="inputfile forminput"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <div class="content2">
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
                <Lucide icon="List" class="w-4 h-4 mr-2" />
                รายการสินค้า
              </div>
              <br />
              <input
                type="text"
                placeholder="ค้นหาด้วยชื่อ หรือรหัสสินค้า"
                id="input_text_nameproduct"
              />
              <br /><br />
              <div class="forminput">
                <div
                  id="allTab-container"
                  class="table-responsive kv-grid-container"
                >
                  <div class="table-list">
                    <div class="overflow-x-auto">
                      <table class="">
                        <thead>
                          <tr>
                            <th>รูปภาพ</th>
                            <th>ชื่อสินค้า</th>
                            <th>รหัสสินค้า</th>
                            <th>พร้อมขาย</th>
                            <th>รูปแบบ</th>
                            <th>คงเหลือ</th>
                            <th>จำนวน</th>
                            <th>ดำเนินการ</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>ตัวอย่างชื่อ</td>
                            <td>T00001</td>
                            <td>ทดสอบ</td>
                            <td>ทดสอบ</td>
                            <td>คงเหลือ</td>
                            <td>3,000,000</td>
                            <td>
                              <div class="flex items-center justify-center">
                                <Menu>
                                  <Menu.Button :as="Button" class="px-2 !box">
                                    <span
                                      class="flex items-center justify-center w-5 h-5"
                                    >
                                      <Lucide
                                        icon="MoreVertical"
                                        class="w-4 h-4"
                                      />
                                    </span>
                                  </Menu.Button>
                                  <Menu.Items class="w-40">
                                    <Menu.Item>
                                      <Lucide icon="Eye" class="w-4 h-4 mr-2" />
                                      ดูรายการ
                                    </Menu.Item>
                                    <Menu.Item>
                                      <Lucide
                                        icon="Edit3"
                                        class="w-4 h-4 mr-2"
                                      />
                                      แก้ไขรายการ
                                    </Menu.Item>
                                    <Menu.Item>
                                      <Lucide
                                        icon="Trash2"
                                        class="w-4 h-4 mr-2"
                                      />
                                      ลบรายการ
                                    </Menu.Item>
                                  </Menu.Items>
                                </Menu>
                              </div>
                            </td>
                          </tr>

<!-- 
                          <tr>
                            <td>1</td>
                            <td>ตัวอย่างชื่อ</td>
                            <td>T00001</td>
                            <td>คงเหลือ</td>
                            <td>3,000,000</td>
                            <td>
                              <div class="flex items-center justify-center">
                                <Menu>
                                  <Menu.Button :as="Button" class="px-2 !box">
                                    <span
                                      class="flex items-center justify-center w-5 h-5"
                                    >
                                      <Lucide
                                        icon="MoreVertical"
                                        class="w-4 h-4"
                                      />
                                    </span>
                                  </Menu.Button>
                                  <Menu.Items class="w-40">
                                    <Menu.Item>
                                      <Lucide icon="Eye" class="w-4 h-4 mr-2" />
                                      ดูรายการ
                                    </Menu.Item>
                                    <Menu.Item>
                                      <Lucide
                                        icon="Edit3"
                                        class="w-4 h-4 mr-2"
                                      />
                                      แก้ไขรายการ
                                    </Menu.Item>
                                    <Menu.Item>
                                      <Lucide
                                        icon="Trash2"
                                        class="w-4 h-4 mr-2"
                                      />
                                      ลบรายการ
                                    </Menu.Item>
                                  </Menu.Items>
                                </Menu>
                              </div>
                            </td>
                          </tr> -->



                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-end gap-2 mt-5 md:flex-row">
        <a href="#">
          <Button
            variant="primary"
            class="mr-2 shadow-md"
            id="goldgd"
            @click.prevent="addProduct()"
          >
            <Lucide icon="Save" class="block mx-auto" />
            &nbsp; บันทึก
          </Button></a
        >
      </div>
    </div>
  </form>
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
        <div class="mb-5 text-3xl">เพิ่มสินค้า {{ productName }} สำเร็จ!</div>
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
</template>

<script lang="ts">
import axios from "axios";
import Chance from "chance";

import { log } from "console";
//success modal
const successModal = ref(false);
const setSuccessModal = (value: boolean) => {
  successModal.value = value;
};
export default {
  data() {
    return {
      warehouses: [] as any[],
      categories: [] as any[],
      allNamefetures: [] as any[],
      allDatailfetures: [] as any[],
      warehouseId: "" as string,
      categoryId: "" as string,
      productType: "" as string,
      productName: "",
      productSKU: "" as any,
      productBarcode: "" as any,
      namefetureId: "all",
      detailfetureId: "all",
      brand: "",
      weight: "",
      length: "",
      width: "",
      height: "",
      point: "",
      shortDescription: "",
      longDescription: "",
      tag: "",
      preOrder: "",
      unitCost: "",
      unitPrice: "",
      QTY: "",
      safetyStock: "",
      images: "",
      imagesUrl: "",
    };
  },
  methods: {
    //get all warehouse
    async getAllWarehouse() {
      try {
        const inventoryId = localStorage.getItem("currentInventoryId");
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}warehouse/getAllWarehouse`,
          {
            inventoryId: inventoryId,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${localStorage.getItem("auth._token.local")}`,
            },
          }
        );
        this.warehouses = response.data.data;
        console.log("all wh == ", this.warehouses);
      } catch (e) {
        alert(e);
      }
    },

    //get all exists category for selection
    async getAllCategory() {
      const inventoryId = localStorage.getItem("currentInventoryId");

      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      const categories = await axios.post(
        `${
          import.meta.env.VITE_API_URL
        }category/search?categoryName=&category=all`,
        { inventoryId: inventoryId },
        { headers }
      );
      this.categories = categories.data.data;
    },

    //generate sku code
    async generateSKU() {
      const chance = new Chance();
      const sku = chance.string({ length: 12, alpha: true, numeric: true });
      console.log("sku: ", sku);

      this.productSKU = sku;
      this.productBarcode = sku;
      console.log("ths == ", this.productSKU);
    },
    //add new product
    async addProduct() {
      try {
        const formData = new FormData();
        if (this.images) {
          formData.append("images", this.images);
        }
        formData.append("warehouseId", this.warehouseId);
        formData.append("categoryId", this.categoryId);
        formData.append("productType", this.productType);
        formData.append("productName", this.productName);
        formData.append("productSKU", this.productSKU);
        formData.append("productBarcode", this.productBarcode);
        formData.append("brand", this.brand);
        formData.append("weight", this.weight);
        formData.append("length", this.length);
        formData.append("width", this.width);
        formData.append("height", this.height);
        formData.append("point", this.point);
        formData.append("shortDescription", this.shortDescription);
        formData.append("longDescription", this.longDescription);
        formData.append("tag", this.tag);
        formData.append("preOrder", this.preOrder);
        formData.append("unitCost", this.unitCost);
        formData.append("unitPrice", this.unitPrice);
        formData.append("QTY", this.QTY);
        formData.append("safetyStock", this.safetyStock);
        console.log("formdate==", formData);

        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}product/addProduct`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `${localStorage.getItem("auth._token.local")}`,
            },
          }
        );
        if (response.data.message == "success") {
          setSuccessModal(true);
        }
      } catch (err) {
        console.log(err);
        alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }
    },
    addSuccess() {
      setSuccessModal(false);
      this.$router.push("/dashboard/product-list");
    },

    async decodeBase64(data: any) {
      const binary = atob(data);
      const array = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        array[i] = binary.charCodeAt(i);
      }
      return new Blob([array], { type: "image/jpg" });
    },

    //upload img
    async uploadImages(e: any) {
      var files = (await e.target.files) || e.dataTransfer.files;
      this.images = files[0];
      if (!files.length) return;
      this.createImages(files[0]);
    },
    async createImages(file: any) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e: any) => {
        vm.imagesUrl = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    removeImages: function (e: any) {
      this.images = "";
    },
  },
  mounted() {
    this.getAllWarehouse();
    this.getAllCategory();
  },
};
</script>
<style>
@import "../assets/css/components/AddCategories.css";
@import "..//assets/css/components/Addproduct.css";

.input_checkbox,
#w1,
#w2,
#check3,
#check2 {
  width: 20px;
  height: 20px;
  border-radius: 20px;
}

.input_checkbox:checked,
#w1:checked,
#w2:checked,
#check2:checked,
#check3:checked {
  background-color: #af0000;
}

.input_checkbox:hover,
#w1:hover,
#w2:hover,
#check2:hover,
#check3:hover {
  cursor: pointer;
  background-color: #af0000;
}

/*file*/
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
