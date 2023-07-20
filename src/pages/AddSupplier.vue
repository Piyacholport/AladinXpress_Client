<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";

import Button from "../base-components/Button";
import {
    FormInput,
    FormInline,
    FormSelect,
    FormLabel,
    FormHelp,
    FormCheck,
    InputGroup,
    FormSwitch,
} from "../base-components/Form";

import Lucide from "../base-components/Lucide";
import { Dialog } from "../base-components/Headless";

import Litepicker from "../base-components/Litepicker";

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
// const salesReportFilter = ref<string>("");
// const importantNotesRef = ref<TinySliderElement>();

// provide("bind[importantNotesRef]", (el: TinySliderElement) => {
//   importantNotesRef.value = el;
// });

// const prevImportantNotes = () => {
//   importantNotesRef.value?.tns.goTo("prev");
// };
// const nextImportantNotes = () => {
//   importantNotesRef.value?.tns.goTo("next");
// };
</script>

<template>
    <form action="">
        <div class="flex items-center  intro-y">
            <h2 class="mr-auto text-lg font-bold" id="">สร้างผู้ผลิต</h2>
        </div>
        <br /><br />
        <div class="allcontent">
            <div class="content1">
                <!-- BEGIN: Notification -->

                <!-- END: Notification -->
                <div class="col-span-11 intro-y 2xl:col-span-9">
                    <!-- BEGIN: Uplaod Product -->
                    <div class="p-5 intro-y box">
                        <div class="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
                            <div
                                class="flex items-center pb-5 text-base font-bold border-b border-slate-200/60 dark:border-darkmode-400">
                                <Lucide icon="FileText" class="w-4 h-4 mr-2" />
                                ทั่วไป
                            </div>
                            <br />
                            <div class="forminput">
                                <br />

                                <div class="grid grid-cols-6 gap-4">
                                    <div class="col-start-1 col-end-2 mt-2" id="label">
                                        <span class="text-right"><span class="text-danger text-l font-bold">* </span> ชื่อบริษัท :</span>
                                    </div>
                                    <div class="col-end-7 col-span-5" id="bdred">
                                        <FormInput v-model="companyname" id="product-stock" type="text"
                                            placeholder="ชื่อบริษัท" />
                                    </div>
                                </div>

                                <div class="grid grid-cols-6 gap-4">
                                    <div class="col-start-1 col-end-2 mt-2" id="label">
                                        <span class="text-right"><span class="text-danger text-l font-bold">* </span>สาขา :</span>
                                    </div>
                                    <div class="col-end-7 col-span-5" id="bdred">
                                        <FormInput v-model="branch" id="product-stock" type="text" placeholder="สาขา" />
                                    </div>
                                </div>

                                <div class="grid grid-cols-6 gap-4">
                                    <div class="col-start-1 col-end-2 mt-2" id="label">
                                        <span class="text-right"><span class="text-danger text-l font-bold">* </span>เลขที่ผู้เสียภาษี :</span>
                                    </div>
                                    <div class="col-end-7 col-span-5" id="bdred">
                                        <FormInput v-model="taxpayernumber" id="product-stock" type="text"
                                            placeholder="เลขที่ผู้เสียภาษี" />
                                    </div>
                                </div>

                                <div class="grid grid-cols-6 gap-4">
                                    <div class="col-start-1 col-end-2 mt-2" id="label">
                                        <span class="text-right"><span class="text-danger text-l font-bold">* </span>อีเมล :</span>
                                    </div>
                                    <div class="col-end-7 col-span-5" id="bdred">
                                        <FormInput v-model="email" id="product-stock" type="text" placeholder="อีเมล" />
                                    </div>
                                </div>

                                <div class="grid grid-cols-6 gap-4">
                                    <div class="col-start-1 col-end-2 mt-2" id="label">
                                        <span class="text-right"><span class="text-danger text-l font-bold">* </span>เบอร์โทร :</span>
                                    </div>
                                    <div class="col-end-7 col-span-5" id="bdred">
                                        <FormInput v-model="phonenumber" id="product-stock" type="text"
                                            placeholder="เบอร์โทร" />
                                    </div>
                                </div>

                                <div class="grid grid-cols-6 gap-4">
                                    <div class="col-start-1 col-end-2 mt-2" id="label">
                                        <span class="text-right">รูป :</span>
                                    </div>
                                    <div class="col-end-7 col-span-5 ..." id="bdred">
                                        <FormInline class="flex-col items-start mt-0 xl:flex-row">
                                            <div
                                                class="flex-1 w-full pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 dark:border-darkmode-400">
                                                <div v-if="!images"
                                                    class="relative flex items-center justify-center px-4 pb-4 mt-5">
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
                                                    <img id="preview" class="hidden rounded-md" alt="Preview Image" />
                                                </div>
                                            </div>
                                        </FormInline>
                                    </div>
                                </div>

                                <div class="grid grid-cols-6 gap-4">
                                    <div class="col-start-1 col-end-2 mt-2" id="label">
                                        <span class="text-right">ไลน์ :</span>
                                    </div>
                                    <div class="col-end-7 col-span-5" id="bdred">
                                        <FormInput v-model="line" id="product-stock" type="text" placeholder="ไลน์" />
                                    </div>
                                </div>

                                <div class="grid grid-cols-6 gap-4">
                                    <div class="col-start-1 col-end-2 mt-2" id="label">
                                        <span class="text-right">เฟซบุ๊ก :</span>
                                    </div>
                                    <div class="col-end-7 col-span-5" id="bdred">
                                        <FormInput v-model="facebook" id="product-stock" type="text"
                                            placeholder="เฟซบุ๊ก" />
                                    </div>
                                </div>

                                <div class="grid grid-cols-6 gap-4">
                                    <div class="col-start-1 col-end-2 mt-2" id="label">
                                        <span class="text-right"><span class="text-danger text-l font-bold">* </span>URL :</span>
                                    </div>
                                    <div class="col-end-7 col-span-5" id="bdred">
                                        <FormInput v-model="urllink" id="product-stock" type="text" placeholder="URL" />
                                    </div>
                                </div>

                                <div class="grid grid-cols-6 gap-4">
                                    <div class="col-start-1 col-end-2 mt-2" id="label">
                                        <span class="text-right">ที่อยู่ :</span>
                                    </div>
                                    <div class="col-end-7 col-span-5" id="bdred">
                                        <textarea v-model="address" name="" id="" rows="2" class="forminput"
                                            placeholder="ที่อยู่"></textarea>
                                    </div>
                                </div>

                                <div class="grid grid-cols-6 gap-4">
                                    <div class="col-start-1 col-end-2 mt-2" id="label">
                                        <span class="text-right">รายละเอียด :</span>
                                    </div>
                                    <div class="col-end-7 col-span-5" id="bdred">
                                        <textarea v-model="details" name="" id="" rows="2" class="forminput"
                                            placeholder="รายละเอียด"></textarea>
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
            </div>
        </div>

        <div class="flex flex-col justify-end gap-2 mt-5 md:flex-row">
            <a href="#">
                <Button variant="primary" class="mr-2 shadow-md" id="goldgd" @click.prevent="addProduct()">
                    <Lucide icon="Save" class="block mx-auto w-4 h-4" />
                    &nbsp; บันทึก
                </Button></a>
        </div>
    </form>
    <!-- modal success -->
    <Dialog :open="successModal" @close="
        () => {
            setSuccessModal(false);
        }
    ">
        <Dialog.Panel>
            <div class="p-5 text-center">
                <div class="mt-2">
                    <img src="../assets/images/success.gif" alt="" />
                </div>
                <div class="mb-5 text-3xl">เพิ่มสินค้า {{ productName }} สำเร็จ!</div>
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
            /*ชื่อ v-model อันใหม่นะคะ*/
            companyname: "",
            branch: "",
            taxpayernumber: "",
            email: "",
            phonenumber: "",
            line: "",
            facebook: "",
            urllink: "",
            address: "",
            details: "",
            images: "",
            imagesUrl: "",
            /*ชื่อ v-model อันใหม่นะคะ*/
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
                `${import.meta.env.VITE_API_URL
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
                formData.append("companyname", this.companyname);
                formData.append("branch", this.branch);
                formData.append("email", this.email);
                formData.append("phonenumber", this.phonenumber);
                formData.append("line", this.line);
                formData.append("facebook", this.facebook);
                formData.append("urllink", this.urllink);
                formData.append("address", this.address);
                formData.append("details", this.details);
         
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
</style>
