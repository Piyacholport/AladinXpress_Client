<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";

import Button from "../base-components/Button";
import { FormInput, FormSelect } from "../base-components/Form";
import Lucide from "../base-components/Lucide";
import { Dialog } from "../base-components/Headless";
import TomSelect from "../base-components/TomSelect";
const subcategory = ref(["0"]);
const editorData = ref("<p>Content of the editor.</p>");
//for Tomselect
const select = ref("1");
</script>

<template>
  <form action="">
    <div class="flex items-center intro-y">
      <h2 class="mr-auto text-lg font-bold" id="">เพิ่มรายการลูกค้า</h2>
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
                <Lucide icon="Users" class="w-4 h-4 mr-2" />
                ข้อมูลลูกค้า
              </div>
              <br />
              <div class="forminput">
                <br />
                <!-- 
                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ...">รหัสลูกค้า</span>
                  </div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <FormInput
                      id="product-stock"
                      type="text"
                      placeholder="ชื่อสินค้า"
                    />
                  </div>
                </div> -->

                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ..."
                      ><span class="text-danger text-l font-bold">* </span
                      >ชื่อ-สกุล ลูกค้า :</span
                    >
                  </div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <div class="">
                      <FormInput
                        v-model="customerName"
                        id="product-stock2"
                        type="text"
                        placeholder="ชื่อ-สกุล ลูกค้า"
                        style="width: 100%"
                      />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ..."
                      ><span class="text-danger text-l font-bold">* </span
                      >ชื่อโซเชียล:</span
                    >
                  </div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <div class="">
                      <FormInput
                        v-model="socialName"
                        id="product-stock2"
                        type="text"
                        placeholder="ชื่อโซเชียลลูกค้า ที่มาจากช่องทาง Faceook หรือ Line ..."
                        style="width: 100%"
                      />
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ..."
                      ><span class="text-danger text-l font-bold">* </span
                      >เบอร์โทรศัพท์ :</span
                    >
                  </div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <FormInput
                      v-model="telephone"
                      id="product-stock"
                      type="text"
                      placeholder="เบอร์โทรศัพท์"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label"></div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <div class="flex items-center -mt-4 text-danger text-xs">
                      <Lucide icon="Info" class="w-3 h-3 mr-2" />
                      หมายเลขโทรศัพท์ที่ถูกต้อง ตัวอย่าง 0614207877 หรือ
                      0246255934
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ..."
                      ><span class="text-danger text-l font-bold">* </span>อีเมล
                      :</span
                    >
                  </div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <FormInput
                      v-model="email"
                      id="product-stock"
                      type="text"
                      placeholder="อีเมลลูกค้า"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label"></div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <div class="flex items-center -mt-4 text-danger text-xs">
                      <Lucide icon="Info" class="w-3 h-3 mr-2" />
                      รูปแบบอีเมลล์ที่ถูกต้อง เช่น contact@aladinxpress.com
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ..."
                      ><span class="text-danger text-l font-bold">* </span
                      >เลขประจำตัวประชาชน :</span
                    >
                  </div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <FormInput
                      v-model="idCard"
                      id="product-stock"
                      type="text"
                      placeholder="เลขบัตรประชาชน"
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
                <Lucide icon="Home" class="w-4 h-4 mr-2" />
                ที่อยู่ลูกค้า
              </div>
              <br />
              <div class="forminput">
                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ..."
                      ><span class="text-danger text-l font-bold">* </span
                      >ที่อยู่ลูกค้า :</span
                    >
                  </div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <FormInput
                      v-model="customerAddressDetail"
                      id="product-stock"
                      type="text"
                      placeholder="ที่อยู่ลูกค้า"
                      style="width: 50%"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ...">ซอย / ถนน :</span>
                  </div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <FormInput
                      v-model="customerAddressDetail"
                      id="product-stock"
                      type="text"
                      placeholder="ซอย / ถนน"
                      style="width: 50%"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2" id="label">
                    <span class="text-right"
                      ><span class="text-danger text-l font-bold">* </span
                      >จังหวัด :</span
                    >
                  </div>
                  <div
                    class="col-end-7 col-span-5"
                    id="bdred"
                    style="width: 50%"
                  >
                    <TomSelect
                      v-model="select"
                      :options="{
                        placeholder: 'ค้นหาจังหวัด',
                      }"
                      class="h-10 bg-white"
                    >
                      <option value="1">กรุงเทพ</option>
                    </TomSelect>
                    <!-- <FormInput
                      v-model="customerProvinceName"
                      id="product-stock"
                      type="text"
                      placeholder="จังหวัด..."
                      style="width: 50%"
                    /> -->
                  </div>
                </div>

                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2" id="label">
                    <span class="text-right"
                      ><span class="text-danger text-l font-bold">* </span>เขต /
                      อำเภอ :</span
                    >
                  </div>
                  <div
                    class="col-end-7 col-span-5"
                    id="bdred"
                    style="width: 50%"
                  >
                    <TomSelect
                      v-model="select"
                      :options="{
                        placeholder: 'ค้นหาเขต / อำเภอ',
                      }"
                      class="h-11 bg-white"
                    >
                      <option value="1">อำเภอ</option>
                    </TomSelect>
                    <!-- <FormInput
                      v-model="customerCityName"
                      id="product-stock"
                      type="text"
                      placeholder="อำเภอ..."
                      style="width: 50%"
                    /> -->
                  </div>
                </div>

                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ..."
                      ><span class="text-danger text-l font-bold">* </span>แขวง
                      / ตำบล :</span
                    >
                  </div>
                  <div
                    class="col-end-7 col-span-5"
                    id="bdred"
                    style="width: 50%"
                  >
                    <TomSelect
                      v-model="select"
                      :options="{
                        placeholder: 'แขวง / ตำบล',
                      }"
                      class="h-11 bg-white"
                    >
                      <option value="1">แขวง / ตำบล</option>
                    </TomSelect>
                    <!-- <FormInput
                      v-model="customerDistrictName"
                      id="product-stock"
                      type="text"
                      placeholder="ตำบล..."
                      style="width: 50%"
                    /> -->
                  </div>
                </div>
                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ..."
                      ><span class="text-danger text-l font-bold">* </span
                      >รหัสไปรษณีย์ :</span
                    >
                  </div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <FormInput
                      v-model="zipcode"
                      id="product-stock"
                      type="text"
                      placeholder="รหัสไปรษณีย์..."
                      style="width: 50%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content2">
        <!-- BEGIN: Notification -->
        <br /><br />
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
                <Lucide icon="Monitor" class="w-4 h-4 mr-2" />
                ช่องทางขาย
              </div>
              <br />
              <div class="forminput">
                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ..."
                      ><span class="text-danger text-l font-bold">* </span
                      >ช่องทางขาย :</span
                    >
                  </div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    <div
                      class="flex flex-wrap items-center col-span-12 intro-y sm:flex-nowrap"
                    >
                      <!-- BEGIN:Filter search dropdown -->
                      <FormSelect v-model="channelId" id="chanel">
                        <option
                          id="when_hover"
                          v-for="(item, index) in channels"
                          :key="index"
                          :value="item.id"
                        >
                          {{ item.channelTitle }}
                        </option>
                      </FormSelect>
                      <!--END: Filter search dropdown -->

                      <!--<Lucide icon="Search" class="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3" /> -->
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
            @click.prevent="addCustomer()"
            variant="primary"
            class="mr-2 shadow-md"
            id="goldgd"
          >
            <Lucide icon="Save" class="block mx-auto w-4 h-4" />
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
        <div class="mb-5 text-3xl">เพิ่มลูกค้า {{ customerName }} สำเร็จ!</div>
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
      customerName: "",
      socialName: "",
      telephone: "",
      email: "",
      idCard: "",
      customerProvinceName: "",
      customerCityName: "",
      customerDistrictName: "",
      customerAddressDetail: "",
      zipcode: "",
      channelId: 0,
      channels: [] as any[],
      inventoryId: Inventory.inventory[0].id,
    };
  },
  methods: {
    async getAllChanel() {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      const URL = `${
        import.meta.env.VITE_API_URL
      }/channel/getAllChannel`.replace(" ", "");
      const response = await axios.post(
        URL,
        {
          inventoryId: this.inventoryId,
        },
        { headers }
      );
      this.channels = response.data.data;
    },
    async addCustomer() {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const URL = `${
          import.meta.env.VITE_API_URL
        }/customer/addCustomer`.replace(" ", "");

        const response = await axios.post(
          URL,
          {
            customerName: this.customerName,
            socialName: this.socialName,
            telephone: this.telephone,
            email: this.email,
            idCard: this.idCard,
            customerProvinceName: this.customerProvinceName,
            customerCityName: this.customerCityName,
            customerDistrictName: this.customerDistrictName,
            customerAddressDetail: this.customerAddressDetail,
            zipcode: this.zipcode,
            // channelId: this.channelId,
            inventoryId: this.inventoryId,
          },
          { headers }
        );
        if (response.data.code == 200) {
          setSuccessModal(true);
        }
      } catch (error) {
        console.log(error);
        alert("ไม่สามารถเพิ่มลูกค้าได้ โปรดลองอีกครั้ง");
      }
    },
    addSuccess() {
      setSuccessModal(false);
      this.$router.push("/dashboard/customersList");
    },
  },
  mounted() {
    this.getAllChanel();
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
#Textarea {
  border-radius: 8px;
}
/* #Textarea:focus{
    border-radius: 8px;
    border:8px solid #af0000 !important;
} */
</style>
