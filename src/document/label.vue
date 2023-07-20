<template>
  <!-- C O N T E N T 1 -->
  <div id="myPdf_template">
    <div
      v-for="(item, index) in ordersList"
      :key="index"
      class="mb-8"
      style="border-bottom: 5px dashed black"
    >
      <div
        class="flex flex-col items-center p-5 sm:flex-row border-slate-200/60 dark:border-darkmode-400"
      >
        <div class="mr-auto">
          <div class="col-span-2">
            <img
              src="../../assets/images/profile.jpg"
              alt=""
              style="width: 100px"
            />
          </div>
          <!-- ... -->
          <div class="col-span-4 mt-2">
            <p class="text-l font-bold mb-2">ชื่อที่อยู่ผู้ฝากส่ง</p>
            <p>Nextra VILL</p>

            <p>123 พญาไท พญาไท กรุงเทพมหานคร 10400</p>
            <p><span class="font-bold">เบอร์โทร.</span> 0966954022</p>
          </div>
        </div>
        <div class="">
          <div class="col-span-5 text-center">
            <p class="text-xl">FLASH EXPRESS</p>

            <p class="font-bold">
              <span class="text-2xl">05</span>
              <span class="text-4xl">B-05-171</span>
              <span class="text-2xl">-08</span>
            </p>
            <div class="mt-1 text-center" style="width: 100%">
              <div style="width: 200px">
                <svg
                  class="mx-auto"
                  style="width: 250px !important"
                  :id="'barcode-' + 'OD0000000' + item.id"
                ></svg>
              </div>
            </div>
            <p class="text-xl mt-1">{{ item.pno }}</p>
            <p class="mt-1 text-xl">( DST : BAY_SP-บางยอ )</p>
            <p class="text-xl">ORDER: OD0000000{{ item.id }}</p>
          </div>
        </div>
      </div>
      <div class="text-center p-2">
        <div class="grid grid-cols-12 gap-0">
          <div class="text-left col-span-4"></div>
          <div class="col-span-5 text-left">
            <p class="text-2xl font-bold">ชื่อที่อยู่ผู้รับ</p>
            <p class="text-xl">{{ item.customer.customerName }}</p>
            <p class="text-xl">
              {{ item.customer.customerCityName }}
              {{ item.customer.customerDistrictName }}
              {{ item.customer.customerProvinceName }}
            </p>
            <p class="text-xl">
              <span class="font-bold">โทร.</span> {{ item.customer.telephone }}
            </p>
            <span class="inline-grid grid-cols-7 mt-3 font-bold">
              <span class="border-solid border-2 border-black p-3 text-2xl">{{
                item.customer.zipcode.charAt(0)
              }}</span>
              <span
                class="border-solid border-2 border-black p-3 bdleftnone text-2xl"
                >{{ item.customer.zipcode.charAt(1) }}</span
              >
              <span
                class="border-solid border-2 border-black p-3 bdleftnone text-2xl"
                >{{ item.customer.zipcode.charAt(2) }}</span
              >
              <span
                class="border-solid border-2 border-black p-3 bdleftnone text-2xl"
                >{{ item.customer.zipcode.charAt(3) }}</span
              >
              <span
                class="border-solid border-2 border-black p-3 bdleftnone text-2xl"
                >{{ item.customer.zipcode.charAt(4) }}</span
              >
            </span>
          </div>
          <div class="col-span-2">
            <div
              class="grid grid-cols-1 gap-4 place-items-end"
              style="height: 100%"
            >
              <div>#{{ index == "0" ? "1" : index + 1 }}</div>
            </div>
          </div>
        </div>
      </div>
      <span class="text-left mb-2">
        {{ item.productForOrder[0].product.productName }}
        ({{ item.productForOrder.length }})
      </span>
      <!--END  C O N T E N T 1 -->
    </div>
  </div>
</template>

<script lang="ts">
import JsBarcode from "jsbarcode";
import html2pdf from "html2pdf.js";
export default {
  data() {
    return {
      ordersList: [],
      displayText: false,
      barcodeType: "code39",
      barcodeOptions: {
        margin: 0,
        displayValue: false,
      },
    };
  },
  methods: {
    async receiveData(data) {
      this.ordersList = data;
      await this.$nextTick(() => {
        this.ordersList.forEach((item, index) => {
          const svgElement = document.getElementById(
            `barcode-OD0000000${item.id}`
          );
          this.generateBarcode(svgElement, item.id);
        });
      });
      this.printLabelOrder();
    },
    generateBarcode(svgElement: any, barcodeValue: any) {
      JsBarcode(svgElement, barcodeValue, {
        format: this.barcodeType,
        ...this.barcodeOptions,
        width: 3,
        height: 40,
        textMargin: 10,
      });
    },
    printLabelOrder() {
      const content = document.getElementById("myPdf_template");
      const options = {
        margin: 10,
        title: "Print Document",
        filename: "combined-elements.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        page: { format: "a4", orientation: "portrait" },
      };
      html2pdf().set(options).from(content).outputPdf("dataurlnewwindow");
    },
  },
};
</script>


<style>
.bdleftnone {
  border-left: none;
}
table,
th,
tr,
td {
  border: 1px solid #333;
  background: #fff;
}
th {
  background: #efefef;
}
.bggray {
  background: #efefef;
  text-align: right;
  font-weight: bold;
  width: 294px;
}
</style>

