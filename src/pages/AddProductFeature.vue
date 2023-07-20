<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";

import Button from "../base-components/Button";
import { FormInput } from "../base-components/Form";
import TomSelect from "../base-components/TomSelect";

import Lucide from "../base-components/Lucide";

import { Dialog } from "../base-components/Headless";
const subcategory = ref(["0"]);
const editorData = ref("<p>Content of the editor.</p>");
</script>

<template>
  <form action="">
    <div class="flex items-center  intro-y">
      <h2 class="mr-auto text-lg font-bold" id="">
        เพิ่มคุณสมบัติสินค้า
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
              รายละเอียดคุณสมบัติ
            </div>
            <br />
            <div class="forminput">
              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="input_text_addpdft text-right ..."
                    ><span class="text-danger text-l font-bold">* </span>ชื่อคุณสมบัติ :</span
                  >
                </div>
                <div class="col-end-7 col-span-5 ..." id="bdred">
                  <FormInput
                    v-model="productFeatureName"
                    id="product-stock"
                    type="text"
                    placeholder="เช่น.Size"
                  />
                </div>
              </div>
              <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-2 ..." id="label">
                  <span class="input_text_addpdft text-right ..."
                    ><span class="text-danger text-l font-bold">* </span>รายการคุณสมบัติ :</span
                  >
                </div>
                <div class="col-end-7 col-span-5 ..." id="bdred">
                  
                  <TomSelect
                    v-model="productFeatureList"
                    :options="{
                      placeholder: 'เช่น.M &nbsp;&nbsp;&nbsp;&nbsp; (&nbsp;กรอกได้หลายรายการ&nbsp;)',
                    }"
                    class="w-full"
                    multiple
                  >
                  </TomSelect>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-end gap-2 mt-5 md:flex-row">
          <Button
            variant="primary"
            class="mr-2 shadow-md"
            id="goldgd"
            @click.prevent="addProductFeature"
          >
            <Lucide icon="Save" class="block mx-auto" />
            &nbsp; บันทึก
          </Button>
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
          <img src="../assets/images/success.gif" alt="" />
        </div>
        <div class="mb-5 text-3xl">
          เพิ่มคุณสมบัติ {{ productFeatureName }} สำเร็จ!
        </div>
        <Button
          variant="outline-secondary"
          type="button"
          @click.prevent="added"
        >
          ตกลง
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>
</template>

<script lang="ts">
import axios from "axios";
const selectMultiple = ref([]);
//Username 
import { useInventory } from "../stores/inventory";
const Inventory = useInventory();
//success modal
const successModal = ref(false);
const setSuccessModal = (value: boolean) => {
  successModal.value = value;
};
export default {
  data() {
    return {
      productFeatureName: "",
      productFeatureList: [],
      baseUrl: import.meta.env.VITE_API_URL.trim()
    };
  },
  methods: {
    async addProductFeature() {
      try {
    
        const response = await axios.post(
          `${this.baseUrl}/productFeature/addProductFeature`,
          {
            productFeatureName: this.productFeatureName,
            productFeatureList: this.productFeatureList,
            inventoryId: Inventory.inventory[0].id,
          }
        
        );
        console.log("res= ", response);

        if (response.data.message == "success") {
          setSuccessModal(true);
        }
      } catch {
        alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }
    },
    added() {
      setSuccessModal(false);
      this.$router.push("/dashboard/productFeature");
    },
  },
  mounted() {},
};
</script>
<style>
@import "../assets/css/components/AddCategories.css";
@import "..//assets/css/components/AddProductfetures.css";

.textarea {
  border-radius: 6px;
}
Textarea:focus {
  border-radius: 6px;
  border: 2px solid #af0000;
}
.forminput{
  border: 1px solid #dadada !important;
}
</style>
