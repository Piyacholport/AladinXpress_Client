<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
import Button from "../base-components/Button";
import { FormInput } from "../base-components/Form";
import Lucide from "../base-components/Lucide";

import { onMounted } from "vue";
import Dropzone, { DropzoneElement } from "../base-components/Dropzone";
const dropzoneSingleRef = ref<DropzoneElement>();

onMounted(() => {
  const elDropzoneSingleRef = dropzoneSingleRef.value;
  if (elDropzoneSingleRef) {
    elDropzoneSingleRef.dropzone.on("success", () => {
      alert("Added file.");
    });
    elDropzoneSingleRef.dropzone.on("error", () => {
      alert("No more files please!");
    });
  }
});
const selectMultiple = ref(["1", "3"]);
</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class=" text-lg font-bold intro-y" id="">
      สั่งซื้อแพ็คเกจ
    </h2>
    <br /><br />
    <div class="forminput">
      <div
        class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
      >
        <Lucide icon="Package" class="w-4 h-4 mr-2" />
        <b>แพ็คเกจที่เลือก</b>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom2">
        <div class="col-span-5 bdright pl-5">
          <b> {{ selectPackages }} </b>
        </div>
        <div class="col-span-7 text-right mr-2 col1">
          <select 
          v-model="selectPackMonth" 
          id="categories"
          class="form-select" 
          style="width: 50%"
          >
            <option v-for="(item, index) in monthPriceList" :key="index" :value="item.value">{{ item.name }}</option>
          </select>
        </div>
        <div class="col-span-12 text-right">
          <p class="mr-2 text-end"> ราคา / เดือน : <span>{{ calPackSselected }}</span> บาท</p>
        </div>
      </div>
    </div>

    <div class="forminput mt-3">
      <div
        class="flex items-center pb-2 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
      >
        <Lucide icon="Package" class="w-4 h-4 mr-2" />
        <b>ช่องทางการชำระเงิน</b>
      </div>
      <div class="mt-2">
        <div class="pl-5 mb-2">
          <b> ชำระเงินผ่านธนาคาร </b>
        </div>
        <div class="pl-5">
          ธนาคารกสิกรไทย จำกัด (มหาชน)<br />

          บัญชี ออมทรัพย์<br />

          สาขาเซ็นทรัล มหาชัย<br />

          เลขบัญชี 053-3-64433-3<br />

          ชื่อบัญชี บจก.อะลาดิน เอ็กซ์เพรส (ประเทศไทย)<br />
          <br />
          <div class="text-right">
            <span class="mr-2"> ราคา / เดือน : <span>{{ calPackSselected }}</span> บาท</span>
            <br />
            <span class="mr-2"> VAT 7% : <span>{{ vatPacks }}</span> บาท</span> <br />
            <span class="mr-2"> รวมที่ต้องชำระ : <span>{{ totalPaidPack }}</span> บาท</span>
            <br />
          </div>
        </div>
      </div>
    </div>
    <div class="forminput">
      <div
        class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
      >
        <Lucide icon="Package" class="w-4 h-4 mr-2" />
        <b>หลักฐานการชำระเงิน</b> <br>

      </div>
      <div class="">
          <Dropzone
          id="dropzone"
          ref="myVueDropzone"
          @vdropzone-success="handleSuccess"
            refKey="dropzoneSingleRef"
            :options="{
              url: 'https://httpbin.org/post',
              thumbnailWidth: 150,
              maxFilesize: 0.5,
              maxFiles: 1,
              headers: { 'My-Awesome-Header': 'header value' },
            }"
            class="dropzone"
          >
            <div class="text-lg font-medium">
              Drop files here or click to upload.
            </div>
            <div class="text-gray-600">
              
            </div>
          </Dropzone>
        </div>
    </div>
    <br />

  </div>
  <br /><br />
  <div class="text-right">
   <Button
        as="a"
        variant="danger"
        href="HistoryUpgradePackage"
        class="inline-block w-24 mb-2 mr-1 bg-[#af0000]"
      >
        ยืนยัน
      </Button>
     
      <Button
      
        as="a"
        variant="secondary"
        href=""
        class="inline-block w-24 mb-2 mr-1"
      >
        ยกเลิก
      </Button>
    </div>
  <br /><br />
</template>

<script lang="ts">
import axios from "axios";
export default {
	data() {
		return {
			baseUrl: `${import.meta.env.VITE_API_URL}`,
      convertNumber: new Intl.NumberFormat('en-US', {minimumFractionDigits:2, maximumFractionDigits:2}),
      selectPack: 1 as Number,
      selectPackMonth: 1 as Number,
      calPackSselected: 0 as Number,
      vatPacks: 0 as Number,
      totalPaidPack: 0 as Number,
      monthPriceList: [] as any[],
      packType: [
				{
					name: "S",
					value: 1,
          priceList: [
          {
            name: "1 เดือน",
            value: 1,
            price: 899
          },
          {
            name: "2 เดือน",
            value: 2,
            price: 1980
          },
          {
            name: "3 เดือน",
            value: 3,
            price: 2970
          },
          {
            name: "4 เดือน",
            value: 4,
            price: 3960
          },
          {
            name: "6 เดือน",
            value: 6,
            price: 5940
          },
          {
            name: "1 ปี",
            value: 7,
            price: 11880
          },
          ]
				},
        {
					name: "M",
					value: 2 as Number,
          priceList: [
          {
            name: "1 เดือน",
            value: 1,
            price: 2499
          },
          {
            name: "2 เดือน",
            value: 2,
            price: 5980
          },
          {
            name: "3 เดือน",
            value: 3,
            price: 8970
          },
          {
            name: "4 เดือน",
            value: 4,
            price: 1160
          },
          {
            name: "6 เดือน",
            value: 6,
            price: 17940
          },
          {
            name: "1 ปี",
            value: 7,
            price: 35880
          },
          ]
				},
        {
					name: "L",
					value: 3 as Number,
          priceList: [
          {
            name: "1 เดือน",
            value: 1,
            price: 3999
          },
          {
            name: "2 เดือน",
            value: 2,
            price: 9980
          },
          {
            name: "3 เดือน",
            value: 3,
            price: 14970
          },
          {
            name: "6 เดือน",
            value: 6,
            price: 29940
          },
          {
            name: "1 ปี",
            value: 7,
            price: 59880
          },
          ]
				},
        {
					name: "XL",
					value: 4 as Number,
          priceList: [
          {
            name: "1 เดือน",
            value: 1,
            price: 5999
          },
          {
            name: "2 เดือน",
            value: 2,
            price: 15980
          },
          {
            name: "3 เดือน",
            value: 3,
            price: 23970
          },
          {
            name: "6 เดือน",
            value: 6,
            price: 47940
          },
          {
            name: "1 ปี",
            value: 7,
            price: 95880
          },
          ]
				},
      ],
		};
	},
	computed: {
    selectPackages() {
      const packList = this.packType.find(item => item['value'] === this.selectPack).priceList;
      const pricePack = packList[0]['price'] as number;
      const vatCal = parseFloat(pricePack*7/100).toFixed(2);
    
      this.calPackSselected = this.convertNumber.format(parseFloat(pricePack));
      this.vatPacks = this.convertNumber.format(vatCal);
      this.totalPaidPack = this.convertNumber.format(parseFloat(pricePack)+parseFloat(vatCal));
      this.monthPriceList = packList;
     
      return this.packType.find(item => item.value === this.selectPack).name;
    },
	},
	watch: {
    selectPackMonth(newValue){
      const selected = this.monthPriceList.find(item => item['value']  === newValue);
      const vatCal = parseFloat(selected.price*7/100).toFixed(2);

      this.calPackSselected = this.convertNumber.format(parseFloat(selected.price));
      this.vatPacks = this.convertNumber.format(vatCal);
      this.totalPaidPack = this.convertNumber.format(parseFloat(selected.price)+parseFloat(vatCal));
    },
	},
	methods: {
		selectPackge(){
      this.selectPack = parseInt(this.$route.params.packageId as string);
    },
    handleSuccess(file, response) {
      console.log(response.url);
  },
	},
	mounted() {
		this.selectPackge();
	},
};
</script>

<style>
@import "..//assets/css/components/Order_appp.css";
@import "..//assets/css/components/tab.scss";
@import "..//assets/css/components/tab.css";

.btn_searchcancel,
.btn_importdata {
  background-color: #af0000;
  color: #fff;
}

.btn_searchcancel:hover,
.btn_importdata:hover {
  background-color: #950000;
}

.alink_cate {
  margin-left: 5px;
  margin-right: 5px;
  text-decoration: underline;
}

#radio_type_product:checked,
#radio_type_product2:checked,
#radio-switch-1:checked,
#radio-switch-2:checked,
#radio-switch-3:checked,
#radio-switch-4:checked {
  background-color: #af0000;
}

.bdbottom,
.bdbottom2 {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: none;
  padding-bottom: 1%;
  padding-top: 1%;
}

.bdbottom2 {
  border-bottom: 1px solid #ccc;
}

.bdright {
  border-right: 1px solid #ccc;
}
.alink_report:hover {
  font-weight: bold;
  color: #af0000;
}
</style>
