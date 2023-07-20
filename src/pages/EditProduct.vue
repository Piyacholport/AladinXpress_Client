<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";

import Button from "../base-components/Button";
import {
  FormInput,
  FormInline,
  FormSelect,
} from "../base-components/Form";
import Lucide from "../base-components/Lucide";
import { Dialog } from "../base-components/Headless";
const subcategory = ref(["0"]);
const editorData = ref("<p>Content of the editor.</p>");
</script>

<template>
  <form action="">
    <div class="flex items-center  intro-y">
      <h2 class="mr-auto text-lg font-bold" id="">เพิ่มสินค้า</h2>
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
                รายละเอียดสินค้า
              </div>
              <br />
              <div class="">
                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ...">ประเภทสินค้า :</span>
                  </div>

                  <div class="col-end-7 col-span-5 mt-2" id="bdred">
                    <input
                      v-model="selectedProductType"
                      value="SIMPLE"
                      type="radio"
                      name="type_product"
                      id="radio_type_product"
                    />&nbsp;สินค้าธรรมดา&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      v-model="selectedProductType"
                      value="CONFIG"
                      type="radio"
                      name="type_product"
                      id="radio_type_product"
                    />&nbsp;สินค้ามีตัวเลือก&nbsp;&nbsp;&nbsp;&nbsp;
                    <!--                    
                    <input
                      v-model="selectedProductType"
                      value="BUNDLE"
                      type="radio"
                      name="type_product"
                      id="radio_type_product"
                    />&nbsp;สินค้าจัดเซ็ต&nbsp;&nbsp;&nbsp;&nbsp; -->
                  </div>
                </div>

                <hr />
                <br />
                <div v-if="selectedProductType == 'CONFIG'">
                  <div class="grid grid-cols-6 gap-4">
                    <div class="col-start-1 col-end-2 ..." id="label">
                      <span class="text-right ...">ชื่อคุณสมบัติ :</span>
                    </div>
                    <FormSelect
                      v-model="selectedProductFeatureIndex"
                      class="w-60 ml-3"
                      id="select"
                    >
                      <option
                        v-for="(item, index) in allProductFeature"
                        :key="index"
                        :value="index"
                      >
                        {{ item.productFeatureName }}
                      </option>
                    </FormSelect>
                  </div>
                  <br />
                  <div v-if="allProductFeature[0]">
                    <div class="grid grid-cols-6 gap-4">
                      <div class="col-start-1 col-end-2 ..." id="label">
                        <span class="text-right ...">ตัวเลือกคุณสมบัติ :</span>
                      </div>

                      <FormSelect
                        v-model="selectedProductFeatureValue"
                        :options="{
                          placeholder: 'ตัวเลือกคุณสมบัติ',
                        }"
                        class="w-60 ml-3"
                      >
                        <option
                          v-for="item in allProductFeature[
                            parseInt(selectedProductFeatureIndex)
                          ]?.productFeatureList"
                          :key="item.id"
                          :value="item"
                          v-on:itemchanged="$emit('reloadlist')"
                        >
                          {{ item }}
                        </option>
                      </FormSelect>
                    </div>
                  </div>
                  <div v-else class="ml-40 text-red-600">
                    <p>
                      * คุณยังไม่มีคุณสมบัติสินค้า สามารถเพิ่มได้
                      <a
                        class="text-blue-700 underline"
                        href="/dashboard/addProductFeature"
                        >ที่นี่</a
                      >
                      *
                    </p>
                  </div>
                </div>
                <br />
                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2" id="label">
                    <span class="text-right">ชื่อสินค้า :</span>
                  </div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <FormInput
                      v-model="productName"
                      id="product-stock"
                      type="text"
                      placeholder="ชื่อสินค้า"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ...">รหัสสินค้า :</span>
                  </div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <div class="">
                      <FormInput
                        v-model="productSKU"
                        id="product-stock2"
                        type="text"
                        placeholder="รหัสสินค้า"
                        style="width: 100%"
                        :value="productSKU"
                      />
                    </div>
                    <div class="button">
                      <Button
                        class=""
                        id="btn_gen_barcode"
                        @click.prevent="generateSKU()"
                      >
                        <Lucide icon="RefreshCcw" class="w-4 h-4" />
                        &nbsp; รหัสสินค้าอัตโนมัติ
                      </Button>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ...">บาร์โค้ดสินค้า :</span>
                  </div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <FormInput
                      v-model="productBarcode"
                      id="product-stock"
                      type="text"
                      placeholder="บาร์โค้ดสินค้า"
                      :value="productBarcode"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ...">รูปภาพ :</span>
                  </div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <FormInline class="flex-col items-start mt-0 xl:flex-row">
                      <div
                        class="flex-1 w-full pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 dark:border-darkmode-400"
                      >
                        <div
                          v-if="!images"
                          class="relative flex items-center justify-center px-4 pb-4 mt-5"
                        >
                          <Lucide icon="Image" class="w-4 h-4 mr-2" />
                          <span class="mr-1"> เพิ่มภาพสินค้า </span>
                          <input type="file" @change="uploadImages" />
                        </div>
                        <div v-else class="grid grid-cols gap-5 pl-4 pr-5 justify-center">
                          <img class="rounded-md max-h-32" :src="imagesUrl" />
                          <button @click="removeImages" class="text-red-400">
                            ลบภาพสินค้า
                          </button>
                        </div>
                        <div>
                          <img
                            id="preview"
                            class="hidden rounded-md"
                            alt="Preview Image"
                          />
                        </div>
                      </div>
                    </FormInline>
                  </div>
                </div>

                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ...">หมวดหมู่ :</span>
                  </div>
                  <FormSelect v-model="categoryId" id="category" class="ml-3">
                    <option
                      id="when_hover"
                      v-for="(item, index) in categories"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.categoryName }}
                    </option>
                  </FormSelect>
                </div>
              </div>
              <br />
              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="text-right ...">แบรนด์ :</span>
                </div>
                <div class="col-end-7 col-span-5 ..." id="bdred">
                  <FormInput
                    v-model="brand"
                    id="product-stock"
                    type="text"
                    placeholder="แบรนด์"
                  />
                </div>
              </div>

              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="text-right ...">น้ำหนัก (กรัม) :</span>
                </div>
                <div class="col-end-7 col-span-5 ..." id="bdred">
                  <FormInput
                    v-model="weight"
                    id="product-stock"
                    type="number"
                    maxlength="1000000.00"
                    min="0.00"
                    step="0.01"
                    placeholder="0.00"
                    style="width: 50%"
                  />
                </div>
              </div>

              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="text-right ...">ยาว (มม) :</span>
                </div>
                <div class="col-end-7 col-span-5 ..." id="bdred">
                  <FormInput
                    v-model="length"
                    id="product-stock"
                    type="number"
                    maxlength="1000000.00"
                    min="0.00"
                    step="0.01"
                    placeholder="0.00"
                    style="width: 50%"
                  />
                </div>
              </div>

              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="text-right ...">กว้าง (มม) :</span>
                </div>
                <div class="col-end-7 col-span-5 ..." id="bdred">
                  <FormInput
                    v-model="width"
                    id="product-stock"
                    type="number"
                    maxlength="1000000.00"
                    min="0.00"
                    step="0.01"
                    placeholder="0.00"
                    style="width: 50%"
                  />
                </div>
              </div>

              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="text-right ...">สูง​ (มม) :</span>
                </div>
                <div class="col-end-7 col-span-5 ..." id="bdred">
                  <FormInput
                    v-model="height"
                    id="product-stock"
                    type="number"
                    maxlength="1000000.00"
                    min="0.00"
                    step="0.01"
                    placeholder="0.00"
                    style="width: 50%"
                  />
                </div>
              </div>

              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="text-right ...">คะแนนสะสม :</span>
                </div>
                <div class="col-end-7 col-span-5 ..." id="bdred">
                  <FormInput
                    v-model="point"
                    id="product-stock"
                    type="number"
                    maxlength="1000000.00"
                    min="0.00"
                    step="0.01"
                    placeholder="คะแนนสะสม"
                    style="width: 50%"
                  />
                </div>
              </div>

              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="text-right ...">รายละเอียดสินค้า (ย่อ) :</span>
                </div>
                <div class="col-end-7 col-span-5 ..." id="bdred">
                  <FormInput v-model="shortDescription" id="product-stock" type="text" />
                </div>
              </div>

              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="text-right ...">รายละเอียดสินค้า :</span>
                </div>
                <div class="col-end-7 col-span-5 ..." id="bdred">
                  <FormInput v-model="longDescription" id="product-stock" type="text" />
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
          <div class="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
            <div
              class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
            >
              <Lucide icon="Package" class="w-4 h-4 mr-2" />
              คลังสินค้า
            </div>
            <br />
            <div class="">
              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="text-right ...">คลังสินค้า :</span>
                </div>
                <div class="col-end-7 col-span-5 ..." id="bdred">
                  <FormSelect id="category" v-model="warehouseId">
                    <option
                      id="when_hover"
                      v-for="(item, index) in warehouses"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.warehouseName }}
                    </option>
                  </FormSelect>
                </div>
              </div>

              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="text-right ...">ต้นทุน :</span>
                </div>
                <div class="col-end-7 col-span-5 ..." id="bdred">
                  <FormInput
                    v-model="unitCost"
                    id="product-stock"
                    type="number"
                    maxlength="1000000.00"
                    min="0.00"
                    step="0.01"
                    placeholder="0.00"
                    style="width: 50%"
                  />
                </div>
              </div>

              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="text-right ...">ราคาต่อหน่วย :</span>
                </div>
                <div class="col-end-7 col-span-5 ..." id="bdred">
                  <FormInput
                    v-model="unitPrice"
                    id="product-stock"
                    type="number"
                    maxlength="1000000.00"
                    min="0.00"
                    step="0.01"
                    placeholder="0.00"
                    style="width: 50%"
                  />
                </div>
              </div>

              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="text-right ...">จำนวนสินค้า :</span>
                </div>
                <div class="col-end-7 col-span-5 ..." id="bdred">
                  <FormInput
                    v-model="QTY"
                    id="product-stock"
                    type="number"
                    maxlength="1000000"
                    min="0"
                    placeholder="0"
                    style="width: 50%"
                  />
                </div>
              </div>

              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="text-right ...">สินค้าคงคลังขั้นต่ำ :</span>
                </div>
                <div class="col-end-7 col-span-5 ..." id="bdred">
                  <FormInput
                    v-model="safetyStock"
                    id="product-stock"
                    type="number"
                    maxlength="1000000"
                    min="0"
                    style="width: 50%"
                    placeholder="0"
                  />
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
          @click.prevent="updateProduct()"
        >
          <Lucide icon="Save" class="block mx-auto w-4 h-4" />
          &nbsp; บันทึก
        </Button></a
      >
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
        <div class="mb-5 text-3xl">แก้ไขสินค้าสำเร็จ!</div>
        <Button variant="outline-secondary" type="button" @click.prevent="addSuccess">
          ตกลง
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>
</template>

<script lang="ts">
import axios from "axios";
import Chance from "chance";

//success modal
const successModal = ref(false);
const setSuccessModal = (value: boolean) => {
  successModal.value = value;
};
export default {
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      warehouses: [] as any[],
      categories: [] as any[],
      allProductFeature: [] as any[],
      selectedProductFeature: [] as any[],
      selectedProductFeatureIndex: "",
      selectedProductFeatureValue: "",
      selectedProductType: "SIMPLE",
      warehouseId: "" as string,
      categoryId: "" as string,
      productName: "",
      productSKU: "" as any,
      productBarcode: "" as any,
      nameFeatureId: "all",
      detailFetureId: "all",
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
          `${import.meta.env.VITE_API_URL}/warehouse/getAllWarehouse`,
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
      } catch (e) {
        alert(e);
      }
    },

    //get all exists category for selection
    async getAllCategory() {
      try {
        const inventoryId = localStorage.getItem("currentInventoryId") as string;

        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const categories = await axios.post(
          `${import.meta.env.VITE_API_URL}/category/search?categoryName=&category=all`,
          { inventoryId: parseInt(inventoryId) },
          { headers }
        );
        this.categories = categories.data.data;
      } catch (e) {
        alert(e);
      }
    },

    //get all product feature
    async getAllProductFeature() {
      const inventoryId = localStorage.getItem("currentInventoryId");

      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      const productFeatures = await axios.post(
        `${import.meta.env.VITE_API_URL}/productFeature/getAllproductFeature`,
        { inventoryId: inventoryId },
        { headers }
      );
      this.allProductFeature = productFeatures.data.data;
    },

    //generate sku code
    async generateSKU() {
      const chance = new Chance();
      const sku = chance.string({ length: 12, alpha: true, numeric: true });
      console.log("sku: ", sku);

      this.productSKU = sku;
      this.productBarcode = sku;
    },
    //update product
    async updateProduct() {
      try {
        const formData = new FormData();
        if (this.images) {
          formData.append("images", this.images);
        }
        if (this.selectedProductType == "CONFIG") {
          formData.append(
            "productFeatureId",
            this.allProductFeature[parseInt(this.selectedProductFeatureIndex)].id
          );
          formData.append(
            "productFeatureValue",
            this.selectedProductFeatureValue as string
          );
        }
        this.warehouseId ? formData.append("warehouseId", this.warehouseId): null;
        this.categoryId ? formData.append("categoryId", this.categoryId): null;
        this.selectedProductType ? formData.append("productType", this.selectedProductType): null;
        this.productName ?formData.append("productName", this.productName): null;
        this.productSKU ? formData.append("productSKU", this.productSKU): null;
        this.productBarcode ? formData.append("productBarcode", this.productBarcode): null;
        this.brand ? formData.append("brand", this.brand): null;
        this.weight ? formData.append("weight", this.weight): null;
        this.length ? formData.append("length", this.length): null;
        this.width ? formData.append("width", this.width): null;
        this.height ? formData.append("height", this.height): null;
        this.point ? formData.append("point", this.point): null;
        this.shortDescription ? formData.append("shortDescription", this.shortDescription): null;
        this.longDescription ? formData.append("longDescription", this.longDescription): null;
        this.tag ? formData.append("tag", this.tag): null;
        this.preOrder ? formData.append("preOrder", this.preOrder): null;
        this.unitCost ? formData.append("unitCost", this.unitCost): null;
        this.unitPrice ? formData.append("unitPrice", this.unitPrice): null;
        this.QTY ? formData.append("QTY", this.QTY): null;
        this.safetyStock ? formData.append("safetyStock", this.safetyStock): null;
        console.log("formdate==", formData);

        const response = await axios.patch(
          `${import.meta.env.VITE_API_URL}/product/updateProduct/${this.productId}`,
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
    this.getAllProductFeature();
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
</style>
