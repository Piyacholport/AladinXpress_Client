<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";

import Button from "../base-components/Button";
import {
  FormInput,
  FormInline,
  FormSelect,

} from "../base-components/Form";
import TomSelect from "../base-components/TomSelect";
import Lucide from "../base-components/Lucide";
import { Dialog } from "../base-components/Headless";

const subcategory = ref(["0"]);
const editorData = ref("<p>Content of the editor.</p>");
</script>

<template>
  <form action="">
    <div class="flex items-center  mb-5 intro-y">
      <h2 class="mr-auto text-lg font-bold" id="">
        เพิ่มหมวดหมู่สินค้า
      </h2>
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
              รายละเอียดหมวดหมู่สินค้า
            </div>
            <br />
            <div class="forminput">
              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 " id="label">
                  <span class="text-right "><span class="text-danger text-l font-bold">* </span> หมวดหมู่หลัก :</span>
                </div>
                <div class="col-end-7 col-span-5 " id="bdred">
                  <FormSelect v-model="categoryId" id="category">
                    <option
                      id="when_hover"
                      v-for="(item, index) in allMainCategory"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.categoryName }}
                    </option>
                  </FormSelect>
                </div>
              </div>

              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 " id="label">
                  <span class="text-right "><span class="text-danger text-l font-bold">* </span>ชื่อหมวดหมู่ :</span>
                </div>
                <div class="col-end-7 col-span-5 " id="bdred">
                  <FormInput
                    v-model="categoryName"
                    id="product-stock"
                    type="text"
                    placeholder="ชื่อหมวดหมู่"
                  />
                </div>
              </div>

              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 " id="label">
                  <span class="text-right ">ภาพปก :</span>
                </div>
                <div class="col-end-7 col-span-5 " id="bdred">
                  <FormInline class="flex-col items-start mt-0 xl:flex-row">
                    <div
                      class="flex-1 w-full pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 dark:border-darkmode-400"
                    >
                      <div
                        v-if="!categoryCover"
                        class="relative flex items-center justify-center px-4 pb-4 mt-5"
                      >
                        <Lucide icon="Image" class="w-4 h-4 mr-2" />
                        <span class="mr-1"> เพิ่มภาพปก </span>
                        <input type="file" @change="uploadCategoryCover" />
                      </div>
                      <div
                        v-else
                        class="grid grid-cols gap-5 pl-4 pr-5 justify-center"
                      >
                        <img
                          class="rounded-md max-h-32"
                          :src="categoryCoverURL"
                        />
                        <button
                          @click="removeCategoryCover"
                          class="text-red-400"
                        >
                          ลบภาพปก
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
                <div class="col-start-1 col-end-2 " id="label">
                  <span class="text-right ">รูปภาพ :</span>
                </div>
                <div class="col-end-7 col-span-5 " id="bdred">
                  <FormInline class="flex-col items-start mt-0 xl:flex-row">
                    <div
                      class="flex-1 w-full pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 dark:border-darkmode-400"
                    >
                      <div
                        v-if="!categoryImages"
                        class="relative flex items-center justify-center px-4 pb-4 mt-5"
                      >
                        <Lucide icon="Image" class="w-4 h-4 mr-2" />
                        <span class="mr-1"> เพิ่มภาพหมวดหมู่ </span>
                        <input type="file" @change="uploadCategoryImages" />
                      </div>
                      <div
                        v-else
                        class="grid grid-cols gap-5 pl-4 pr-5 justify-center"
                      >
                        <img
                          class="rounded-md max-h-32"
                          :src="categoryImagesURL"
                        />
                        <button
                          @click="removeCategoryImages"
                          class="text-red-400"
                        >
                          ลบภาพหมวดหมู่
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
                <div class="col-start-1 col-end-2 " id="label">
                  <span class="text-right ">รายละเอียดหมวดหมู่สินค้า :</span>
                </div>
                <div class="col-end-7 col-span-5 " id="bdred">
                  <textarea
                    v-model="categoryDescription"
                    type="text"
                    id="textarea"
                    cols="77"
                    rows="3"
                    placeholder="รายละเอียดหมวดหมู่สินค้า"
                    class="textarea"
                  >
                  </textarea>
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
              @click.prevent="addCategory()"
            >
              <Lucide icon="Save" class="block mx-auto" />
              &nbsp; บันทึก
            </Button></a
          >
        </div>
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
          <img src="../assets/images/success.gif" alt="">
        </div>
        <div class="mb-5 text-3xl">เพิ่มหมวดหมู่ {{ categoryName }} สำเร็จ!</div>
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
//success modal
const successModal = ref(false);
const setSuccessModal = (value: boolean) => {
  successModal.value = value;
};
import { useInventory } from '../stores/inventory'
const Inventory = useInventory();
export default {
  data() {
    return {
      allMainCategory: [] as any[],
      categoryName: "",
      categoryDescription: "",
      categoryCover: "",
      categoryImages: "",
      categoryId: null,
      categoryCoverURL: "",
      categoryImagesURL: "",
             inventoryId: Inventory.inventory[0].id 
    };
  },
  methods: {
    //get all exists category for selection
    async getAllMainCategory() {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      const inventoryId = parseInt(localStorage.getItem('currentInventoryId') as string);
      const categories = await axios.post(
        `${
          import.meta.env.VITE_API_URL
        }/category/search?categoryName=&category=main`, {
          inventoryId: this.inventoryId
        },
        { headers }
      );
      this.allMainCategory = categories.data.data;
      console.log("all =", this.allMainCategory);
    },

    //add new category
    async addCategory() {
      try {
        const formData = new FormData();
        if (this.categoryId) {
          formData.append("categoryId", this.categoryId);
        }
        formData.append("categoryName", this.categoryName);
        formData.append("categoryDescription", this.categoryDescription);
        formData.append("categoryCover", this.categoryCover);
        formData.append("categoryImages", this.categoryImages);
        formData.append("inventoryId", this.inventoryId);
      const URL = (`${import.meta.env.VITE_API_URL}/category/addCategory`).replace(" ","")


        const response = await axios.post(URL,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `${localStorage.getItem("auth._token.local")}`,
            },
          }
        );
        console.log('res msg = ', response.data.message);
        
        if (response.data.message == "success") {
          setSuccessModal(true);
        }
      } catch (err) {
        console.log(err);
        alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }
    },
    addSuccess(){
      setSuccessModal(false);
      this.$router.push("/dashboard/categories");
    },

    async decodeBase64(data: any) {
      try {
        const binary = atob(data);
        const array = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          array[i] = binary.charCodeAt(i);
        }
        return new Blob([array], { type: "image/jpg" });
      } catch (err) {
        console.error("Error decoding base64:", err);
        return null;
      }
    },

    //upload img
    async uploadCategoryCover(e: any) {
      try {
        var files = (await e.target.files) || e.dataTransfer.files;
        this.categoryCover = files[0];
        if (!files.length) return;
        this.createCategoryCover(files[0]);
      } catch (err) {
        console.error("Error uploading images:", err);
      }
    },
    async createCategoryCover(file: any) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e: any) => {
        vm.categoryCoverURL = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    removeCategoryCover: function (e: any) {
      this.categoryCover = "";
    },

    //images
    uploadCategoryImages(e: any) {
      try {
        var files = e.target.files || e.dataTransfer.files;
        this.categoryImages = files[0];
        if (!files.length) return;
        this.createCategoryImages(files[0]);
      } catch (err) {
        console.error("Error uploading images:", err);
      }
    },
    async createCategoryImages(file: any) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e: any) => {
        vm.categoryImagesURL = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    removeCategoryImages: function (e: any) {
      this.categoryImages = "";
    },
  },
  mounted() {
    this.getAllMainCategory();
  },
};
</script>

<style>
@import "../assets/css/components/AddCategories.css";
.textarea {
  border-radius: 6px;
}
Textarea:focus {
  border-radius: 6px;
  border: 2px solid #af0000;
}
</style>
