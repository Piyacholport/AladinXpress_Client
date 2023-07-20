<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";
import fakerData from "../utils/faker";
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
import TomSelect from "../base-components/TomSelect";
import { ClassicEditor } from "../base-components/Ckeditor";
import Alert from "../base-components/Alert";
import Lucide from "../base-components/Lucide";
import Tippy from "../base-components/Tippy";
import Table from "../base-components/Table";
import { Dialog } from "../base-components/Headless";

const subcategory = ref(["0"]);
const editorData = ref("<p>Content of the editor.</p>");
</script>

<template>
<div class="box">
        <h3 class="p-3">เลือกแพ็คเกจ
</h3><hr/>
  <div class="grid grid-cols-4 gap-4 pt-3">
  <div class="flex items-center justify-center"><Lucide size="80" icon="Banknote" /></div>
  <div class="flex items-center justify-center">เติมเงิน {{selectPrice}} ฿</div>
  <div class="flex items-center justify-center"><select type="text" class="forminput w-full" @change="selectPrice = $event.target.value"><option v-for="price in walletPrice " :key="price"
                  :value="price">{{price}}</option></select></div>
  <div class="flex items-center justify-center">{{selectPrice}} ฿</div>
</div>
</div>

<div class="box mt-5">
        <h3 class="p-3">ช่องทางการชำระเงิน
</h3><hr/>
<div class="container">
  <div
    class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
    <h2 class="mb-0" id="headingOne">
      <button
        class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-sm text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne">
        ชำระเงินผ่านธนาคาร
        <span
          class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="collapseOne"
      class="!visible"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby="headingOne"
      data-te-parent="#accordionExample">
      <div class="px-5 py-4">
        <select type="text" class="forminput w-full" >
            <option>ธนาคารกสิกรไทย 000-0-00000-00 บจก.ทดสอบ</option>
         </select>
      </div>
    </div>
  </div>

  <div
    class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
    <h2 class="mb-0" id="headingOne">
      <button
        class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-sm text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne">
        บัตรเครดิต
        <span
          class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="collapseOne"
      class="!visible"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby="headingOne"
      data-te-parent="#accordionExample">
      <div class="px-5 py-4">
      </div>
    </div>
  </div>
</div>
</div>

<div class="box mt-5 container">
        <h3 class="p-3">หลักฐานชำระเงิน
</h3><hr/>
<FormInline class="flex-col items-start mt-0 xl:flex-row">
                    <div
                      class="flex-1 w-full pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 dark:border-darkmode-400"
                    >
                      <div
                        v-if="!image"
                        class="relative flex items-center justify-center px-4 pb-4 mt-5"
                      >
                        <Lucide icon="Image" class="w-4 h-4 mr-2" />
                        <span class="mr-1"> สลิปชำระเงิน </span>
                        <input type="file" name="image" @change="uploadimage" />
                      </div>
                      <div
                        v-else
                        class="grid grid-cols gap-5 pl-4 pr-5 justify-center"
                      >
                        <img
                          class="rounded-md max-h-32"
                          :src="imageURL"
                        />
                        <button
                          @click="removeimage"
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

<div class="box mt-5">
        <h3 class="p-3">สรุปคำสั่งซื้อ
</h3><hr/>
  <div class="grid grid-cols-2  gap-4 pt-3 container mt-3">
  <div class="flex">เติม {{selectPrice}} ฿ x 1</div>
  <div class="flex items-center justify-center">{{selectPrice}} ฿</div>
    <div class="flex"><b>ยอดรวม</b></div>
  <div class="flex items-center  justify-center"><b>{{selectPrice}} ฿</b></div>
       <div class=""> <Button  @click="transferwallet()" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">เติมเงิน</Button>
  </div>
</div>

</div>
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
        <div class="mb-5 text-3xl">คุณได้ทำรายการเติม Wallet สำเร็จ!</div>
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
import Input from '../base-components/Form/FormCheck/Input.vue';
import { useUser } from "../stores/user";
const successModal = ref(false);
const setSuccessModal = (value: boolean) => {
  successModal.value = value;
};
export default {
  components: { Input },
  data() {
    return {
        walletPrice: [300,500,1000,1500,3000,5000],
        selectPrice: 500 as number,
              image:"",
      categoryId: null,
      categoryCoverURL: "",
      imageURL: "",
    }
  },
  methods:{
    
     async transferwallet(){


try {
        const headers = {
              "Content-Type": "multipart/form-data",

          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
             const userStore = useUser()
      await userStore.myUser()
        const userId = userStore.getUser.id;
        const URL = (`${import.meta.env.VITE_API_URL}/wallet/transferwallet`).replace(" ","")

        const convert: number = this.selectPrice
    const formData = new FormData();
    //const convert: number = this.selectPrice
            if (this.image) {
          formData.append("image", this.image);
        }
    formData.append("userId", userId);
    formData.append("status", 'รออนุมัติ');

    formData.append("price",this.selectPrice);
        console.log("formdate==", formData);
console.log(this.image)
        const response = await axios.post(
          URL,
          formData,
          { headers }
        );
        if (response.data.code == 200) {
         // setSuccessModal(true);

      //this.$router.push("/dashboard/side-menu-member");
    

        }
      } catch (error) {
        console.log(error);
        //alert("ไม่สามารถเพิ่มคลังสินค้าได้ โปรดลองอีกครั้ง");
      }

    },
              addSuccess() {
      setSuccessModal(false);
      this.$router.push("/dashboard/member");
      //this.transferwallet();
    },   
    async uploadimage(e: any) {
      try {
      var files = (await e.target.files) || e.dataTransfer.files;
        
        this.image = files[0];
        console.log(this.image)
        if (!files.length) return;
        this.uploadImage(files[0]);
      } catch (err) {
        console.error("Error uploading images:", err);
      }
    },
      async uploadImage(file: any) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e: any) => {
        vm.imageURL = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    removeimage: function (e: any) {
      this.image = "";
    },
  }
  
};  
</script>


