<script setup lang="ts">
import _ from "lodash";
import Button from "../base-components/Button";
import Lucide from "../base-components/Lucide";
</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class=" text-lg font-bold intro-y" id="">รายงาน</h2>
    <br /><br />
    <div class="forminput">
      <div
        class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
      >
        <Lucide icon="Package" class="w-4 h-4 mr-2" />
        <b>รายงานคลังสินค้า</b>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom">
        <div class="col-span-5 bdright pl-5">
          <a href="Summary" class="alink_report">Summary </a>
        </div>
        <div class="col-span-7 pl-1">รายงานคลังสินค้า</div>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom2">
        <div class="col-span-5 bdright pl-5">
          <a href="StockMovement" class="alink_report"
            >Stock Movement
            <span
              class="status_product text-white ml-3 bg-primary"
              style="padding: 1px 8px"
            >
              อัปเดตใหม่
            </span></a
          >
        </div>
        <div class="col-span-7 pl-1">รายงานการเคลื่อนไหวสินค้า</div>
      </div>
    </div>

    <div class="forminput mt-5">
      <div
        class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
      >
        <Lucide icon="FilePlus" class="w-4 h-4 mr-2" />
        <b>รายงานยอดขายสินค้า</b>
      </div>

      <div class="grid grid-cols-12 gap-4 bdbottom">
        <div class="col-span-5 bdright pl-5">
          <a href="ProductSalesBestSelling" class="alink_report"
            >Product Sales - Best Selling
            <span
              class="status_product text-white ml-3"
              style="padding: 1px 8px; background-color: #af0000"
            >
              แนะนำ
            </span></a
          >
        </div>
        <div class="col-span-7 pl-1">รายงานยอดขายตามสินค้า</div>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom">
        <div class="col-span-5 bdright pl-5">
          <a href="ProductSalesByMonths" class="alink_report"
            >Product Sales - By Months
            <span
              class="status_product text-white ml-3"
              style="padding: 1px 8px; background-color: #af0000"
            >
              แนะนำ
            </span></a
          >
        </div>
        <div class="col-span-7 pl-1">รายงานยอดขายของสินค้าแต่ละเดือน</div>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom">
        <div class="col-span-5 bdright pl-5">
          <a href="ProductSalesByCategory" class="alink_report"
            >Product Sales - By Category
            <span
              class="status_product text-white ml-3 bg-primary"
              style="padding: 1px 8px"
            >
              อัปเดตใหม่
            </span></a
          >
        </div>
        <div class="col-span-7 pl-1">รายงานยอดขายสินค้าตามหมวดหมู่</div>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom2">
        <div class="col-span-5 bdright pl-5"> <a href="ProductSalesByProvince" class="alink_report">Product Sales - By Province</a></div>
        <div class="col-span-7 pl-1">รายงานสินค้าแต่ละจังหวัด</div>
      </div>

 

      


    </div>


    <div class="forminput mt-5">
      <div
        class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
      >
        <Lucide icon="FilePlus" class="w-4 h-4 mr-2" />
        <b>รายงานต้นทุนและกำไร</b>
      </div>

      <div class="grid grid-cols-12 gap-4 bdbottom2">
        <div class="col-span-5 bdright pl-5">
          <a href="" class="alink_report"
            >รายงานต้นทุนและกำไร
            <span
              class="status_product text-white ml-3"
              style="padding: 1px 8px; background-color: #af0000"
            >
              แนะนำ
            </span></a
          >
        </div>
        <div class="col-span-7 pl-1">รายงานต้นทุนและกำไร</div>
      </div>
      <!-- <div class="grid grid-cols-12 gap-4 bdbottom">
        <div class="col-span-5 bdright pl-5">
          <a href="" class="alink_report"
            > รายงานลูกค้า
            <span
              class="status_product text-white ml-3"
              style="padding: 1px 8px; background-color: #af0000"
            >
              แนะนำ
            </span></a
          >
        </div>
        <div class="col-span-7 pl-1">รายงานลูกค้า</div>
      </div>



      <div class="grid grid-cols-12 gap-4 bdbottom">
        <div class="col-span-5 bdright pl-5">
          <a href="" class="alink_report"
            > รายการการชำระเงิน
            <span
              class="status_product text-white ml-3"
              style="padding: 1px 8px; background-color: #af0000"
            >
              แนะนำ
            </span></a
          >
        </div>
        <div class="col-span-7 pl-1">รายการการชำระเงิน</div>
      </div>

      <div class="grid grid-cols-12 gap-4 bdbottom2">
        <div class="col-span-5 bdright pl-5">
          <a href="" class="alink_report"
            > รายงานการเงิน
            <span
              class="status_product text-white ml-3"
              style="padding: 1px 8px; background-color: #af0000"
            >
              แนะนำ
            </span></a
          >
        </div>
        <div class="col-span-7 pl-1">รายงานการเงิน</div>
      </div> -->

      


    </div>

    <div class="forminput mt-5">
      <div
        class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
      >
        <Lucide icon="FilePlus" class="w-4 h-4 mr-2" />
        <b>รายการการชำระเงิน</b>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom2">
        <div class="col-span-5 bdright pl-5">
          <a href="" class="alink_report"
            > รายการการชำระเงิน
            <span
              class="status_product text-white ml-3"
              style="padding: 1px 8px; background-color: #af0000"
            >
              แนะนำ
            </span></a
          >
        </div>
        <div class="col-span-7 pl-1">รายการการชำระเงิน</div>
      </div>
    </div>
    <div class="forminput mt-5">
      <div
        class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
      >
        <Lucide icon="FilePlus" class="w-4 h-4 mr-2" />
        <b>รายงานการเงิน</b>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom2">
        <div class="col-span-5 bdright pl-5">
          <a href="" class="alink_report"
            > รายงานการเงิน
            <span
              class="status_product text-white ml-3"
              style="padding: 1px 8px; background-color: #af0000"
            >
              แนะนำ
            </span></a
          >
        </div>
        <div class="col-span-7 pl-1">รายงานการเงิน</div>
      </div>
    </div>
    <div class="forminput mt-5">
      <div
        class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
      >
        <Lucide icon="FilePlus" class="w-4 h-4 mr-2" />
        <b>รายงานลูกค้า</b>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom2">
        <div class="col-span-5 bdright pl-5">
          <a href="" class="alink_report"
            > รายงานลูกค้า
            <span
              class="status_product text-white ml-3"
              style="padding: 1px 8px; background-color: #af0000"
            >
              แนะนำ
            </span></a
          >
        </div>
        <div class="col-span-7 pl-1">รายงานลูกค้า</div>
      </div>
    </div>
    <div class="forminput mt-5">
      <div
        class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
      >
        <Lucide icon="FilePlus" class="w-4 h-4 mr-2" />

        <b>รายงานยอดขายคำสั่งซื้อ</b>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom">
        <div class="col-span-5 bdright pl-5"> <a href="OrderSalesTopOrder" class="alink_report">Order Sales - Top Order</a></div>
        <div class="col-span-7 pl-1">รายงานคำสั่งซื้อที่มียอดขายมากที่สุด</div>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom">
        <div class="col-span-5 bdright pl-5"> <a href="OrderSalesByTimePeriod" class="alink_report">Order Sales - By Time Period</a></div>
        <div class="col-span-7 pl-1">รายงานยอดขายรายวันและช่วงเวลา</div>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom">
        
        <div class="col-span-5 bdright pl-5 mt-1"> <a href="OrderSalesSummary" class="alink_report">Order Sales - Summary</a></div>
        <div class="col-span-7 pl-1">
          <div class="flex items-center">
            <span>รายงานยอดขายรวม</span>
            <span class="flex items-center justify-center w-5 h-5 ml-3">
              <b> <Lucide icon="ExternalLink" class="w-4 h-4 mt-1" /></b>
            </span>
            <a href="" class="alink_report"
              ><b><span>เวอร์ชันก่อน</span></b>
            </a>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom">
        <div class="col-span-5 bdright pl-5"> <a href="OrderSalesByStatus" class="alink_report">Order Sales - By Status</a></div>
        <div class="col-span-7 pl-1">รายงานยอดขายตามสถานะคำสั่งซื้อ</div>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom">
        <div class="col-span-5 bdright pl-5"> <a href="OrderSalesByPriceRange" class="alink_report">Order Sales - By Price Range</a></div>
        <div class="col-span-7 pl-1">รายงานยอดขายตามช่วงราคา</div>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom2">
        <div class="col-span-5 bdright pl-5 mt-1"> <a href="OrderSalesBySaleStaff" class="alink_report">Order Sales - By Sale Staff</a></div>
        <div class="col-span-7 pl-1 mt-1">
          <div class="flex items-center">
            <span>รายงานยอดขายตามพนักงานขาย</span>
            <span class="flex items-center justify-center w-5 h-5 ml-3">
              <b> <Lucide icon="ExternalLink" class="w-4 h-4 mt-1" /></b>
            </span>
            <a href="" class="alink_report"
              ><b><span>เวอร์ชันก่อน</span></b>
            </a>
          </div>
        </div>
      </div>
 
    </div>

    <!-- <Alert variant="soft-secondary" class="flex items-center mb-2 text-dark">
      <Lucide icon="Users" class="w-5 h-5 mr-2" />
      รายงานลูกค้า
      <a href="" class="alink_report">
        <b class="ml-3 mr-3"
          >กรุณาอัปเกรด package เพื่อให้สามารถดูรายงานนี้ได้ค่ะ</b
        ></a
      >
    </Alert>

    <Alert variant="soft-secondary" class="flex items-center mb-2 text-dark">
      <Lucide icon="CreditCard" class="w-5 h-5 mr-2" />
      รายการการชำระเงิน , รายงานต้นทุนและกำไร
      <a href="" class="alink_report">
        <b class="ml-3 mr-3"
          >กรุณาอัปเกรด package เพื่อให้สามารถดูรายงานนี้ได้ค่ะ</b
        ></a
      >
    </Alert> -->

    <div class="forminput mt-5">
      <div
        class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
      >
        <Lucide icon="Truck" class="w-4 h-4 mr-2" />
        <b>รายงานการจัดส่ง และบริการ</b>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom">
        <div class="col-span-5 bdright pl-5"> <a href="TrackingSummary" class="alink_report">Tracking Summary</a></div>
        <div class="col-span-7 pl-1">รายงาน Tracking Number</div>
      </div>
      <div class="grid grid-cols-12 gap-4 bdbottom2">
        <div class="col-span-5 bdright pl-5"> <a href="ShipmentHistoryReport" class="alink_report">Shipment History Report</a></div>
        <div class="col-span-7 pl-1">รายงานประวัติการจัดส่ง</div>
      </div>

    </div>
    <!-- <Alert variant="soft-secondary" class="flex items-center mb-2 text-dark">
      <Lucide icon="CreditCard" class="w-5 h-5 mr-2" />
      รายงานการเงิน
      <a href="" class="alink_report">
        <b class="ml-3 mr-3"
          >กรุณาอัปเกรด package เพื่อให้สามารถดูรายงานนี้ได้ค่ะ</b
        ></a
      >
    </Alert> -->
  </div>

  <br /><br />
</template>
<style>



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
