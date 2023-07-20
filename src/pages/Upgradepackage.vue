<script setup lang="ts">
import _ from "lodash";
import Button from "../base-components/Button";
import Lucide from "../base-components/Lucide";
import TomSelect from "../base-components/TomSelect";
import { Disclosure } from "../base-components/Headless";

</script>

<template>
  <div class="flex items-center mt-5 intro-y">
    <h2 class="mr-auto text-lg font-bold" id="">เลือกแพ็คเกจ  </h2>
    <h3 ><b> แพ็คเกจปัจุบัน : <span class="price"> Free , 0 ฿ </span></b></h3>
   
  </div>

  <div class="flex flex-col mt-5 intro-y box lg:flex-row">
    <!-- Free -->
    <div class="flex-1 px-5 py-16 intro-y">
      <!-- <Lucide icon="CreditCard" class="block w-12 h-12 mx-auto icon" /> -->
      <div class="text-xl font-medium text-center"><b>Free</b></div>
      <div class="mt-5 text-left text-bold"><b>รายละเอียด</b></div>
      <div class="px-10 mx-auto mt-2">
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 pricedelivery"><b>ค่าส่ง 18฿</b></span>
        </div>
        <div class="flex items-center text-black">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3">ฟรีใช้ได้ตลอดชีพ</span>
        </div>
        <div class="flex items-center text-black">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3">จำกัดฟังก์ชัน ล็อกจำนวนออเดอร์</span>
        </div>

        <div class="flex items-center text-black">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3">1 ร้าน 1 คลัง</span>
        </div>
        <div class="flex items-center text-black">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3">300 ออเดอร์</span>
        </div>
        <Disclosure>
          <Disclosure.Button>
            <div class="flex items-center justify-center">
              <span class="ml-0">เพิ่มเติม</span>
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="ChevronsDown" class="w-4 h-4 mt-1" />
              </span>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel
            class="leading-relaxed text-slate-600 dark:text-slate-500"
          >
            <div class="flex items-center text-black">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3"><b>จำนวนแอดมิน 1 คน</b></span>
            </div>
            <div class="flex items-center text-black">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3">ระบบจัดการการจัดส่ง</span>
            </div>
            <div class="flex items-center text-black">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3">ระบบจัดการรายชื่อลูกค้า</span>
            </div>

            <div class="flex items-center text-black">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3"
                >จัดการระบบรายการสินค้า พร้อมคุณสมบัติสินค้า</span
              >
            </div>
            <div class="flex items-center text-black">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3">ระบบสต๊อกสินค้า</span>
            </div>
            <div class="flex items-center text-black">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3">รายงาน</span>
            </div>
            <div class="flex items-center text-black">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3">นำเข้า/ส่งออกข้อมูลสินค้า</span>
            </div>
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <div class="flex justify-center">
        <div class="relative mx-auto mt-8 text-5xl font-semibold price">
          <span class="absolute top-0 left-0 -ml-4 text-2xl">฿</span> 0
        </div>
      </div>
      <!-- <a href="SubmitPMPackage">
      <Button type="button" class="block px-4 py-3 mx-auto mt-8 btnpk">
        เลือกแพ็คเกจ
      </Button></a> -->
    </div>
    <!-- S -->
    <div
      class="flex-1 p-5 py-16 border-t border-b intro-y lg:border-b-0 lg:border-t-0 lg:border-l lg:border-r border-slate-200/60 dark:border-darkmode-400"
    >
      <!-- <Lucide icon="CreditCard" class="block w-12 h-12 mx-auto icon" /> -->
      <div class="text-xl font-medium text-center"><b>S</b></div>
      <div class="mt-5 text-left"><b>รายละเอียด</b></div>
      <div class="px-10 mx-auto mt-2">
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 pricedelivery"><b>ค่าส่ง 16฿</b></span>
        </div>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 text-black">รายการออเดอร์ : 1500 ออเดอร์</span>
        </div>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 text-black">2 ร้าน 2 คลังสินค้า</span>
        </div>

        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 text-black">ไม่จำกัดสินค้า</span>
        </div>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 text-black">จำนวนแอดมิน 2 คน</span>
        </div>
        <Disclosure>
          <Disclosure.Button>
            <div class="flex items-center justify-center">
              <span class="ml-0">เพิ่มเติม</span>
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="ChevronsDown" class="w-4 h-4 mt-1" />
              </span>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel
            class="leading-relaxed text-slate-600 dark:text-slate-500"
          >
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบจัดการการออเดอร์</span>
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบจัดการการจัดส่ง</span>
            </div>

            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบจัดการรายชื่อลูกค้า</span>
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black"
                >จัดการระบบรายการสินค้า พร้อมคุณสมบัติสินค้า</span
              >
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบสต๊อกสินค้า -รายงาน</span>
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">นำเข้า/ส่งออกข้อมูลสินค้า</span>
            </div>
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <div class="flex justify-center">
        <div class="relative mx-auto mt-8 text-5xl font-semibold price">
          <span class="absolute top-0 left-0 -ml-4 text-2xl">฿</span> 899
        </div>
      </div>  <a href="SubmitPMPackage/1">
      <Button type="button" class="block px-4 py-3 mx-auto mt-8 btnpk">
      
        เลือกแพ็คเกจ
      </Button></a>
    </div>
    <!-- M -->
    <div class="flex-1 px-5 py-16 intro-y">
      <!-- <Lucide icon="CreditCard" class="block w-12 h-12 mx-auto icon" /> -->
      <div class="text-xl font-medium text-center"><b>M</b></div>
      <div class="mt-5 text-left"><b>รายละเอียด</b></div>
      <div class="px-10 mx-auto mt-2">
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 pricedelivery"><b>ค่าส่ง 16฿</b></span>
        </div>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 text-black">รายการออเดอร์ : 5000 ออเดอร์</span>
        </div>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 text-black">5 ร้าน 5 คลังสินค้า</span>
        </div>

        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 text-black">ไม่จำกัดสินค้า</span>
        </div>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 text-black">จำนวนแอดมิน 5 คน</span>
        </div>
        <Disclosure>
          <Disclosure.Button>
            <div class="flex items-center justify-center">
              <span class="ml-0">เพิ่มเติม</span>
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="ChevronsDown" class="w-4 h-4 mt-1" />
              </span>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel
            class="leading-relaxed text-slate-600 dark:text-slate-500"
          >
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบจัดการการออเดอร์ </span>
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบจัดการการจัดส่ง</span>
            </div>

            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบจัดการรายชื่อลูกค้า</span>
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black"
                >จัดการระบบรายการสินค้า พร้อมคุณสมบัติสินค้า</span
              >
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบสต๊อกสินค้า -รายงาน</span>
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">นำเข้า/ส่งออกข้อมูลสินค้า</span>
            </div>

            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบ Facebook Live ดูด CF</span>
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black"
                >เชื่อมต่อ TikTok Shop, Shopee, Lazada</span
              >
            </div>
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <div class="flex justify-center">
        <div class="relative mx-auto mt-8 text-5xl font-semibold price">
          <span class="absolute top-0 left-0 -ml-4 text-2xl">฿</span> 2,499
        </div>
      </div>
      <a href="SubmitPMPackage/2">
      <Button type="button" class="block px-4 py-3 mx-auto mt-8 btnpk">
        
        เลือกแพ็คเกจ
      </Button></a>
    </div>
  </div>
  <!-- END: Pricing Layout -->
  <!-- BEGIN: Pricing Layout -->

  <div class="flex flex-col mt-5 intro-y box lg:flex-row">
    <!-- L -->
    <div class="flex-1 px-5 py-16 intro-y">
      <!-- <Lucide icon="CreditCard" class="block w-12 h-12 mx-auto icon" /> -->
      <div class="text-xl font-medium text-center"><b>L</b></div>
      <div class="mt-5 text-left"><b>รายละเอียด</b></div>
      <div class="px-10 mx-auto mt-2">
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 pricedelivery"><b>ค่าส่ง 16฿</b></span>
        </div>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 text-black">รายการออเดอร์ : 50,000 ออเดอร์</span>
        </div>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 text-black">20 ร้าน 20 คลังสินค้า</span>
        </div>

        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 text-black">ไม่จำกัดสินค้า</span>
        </div>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 text-black">จำนวนแอดมิน 10 คน</span>
        </div>
        <Disclosure>
          <Disclosure.Button>
            <div class="flex items-center justify-center">
              <span class="ml-0">เพิ่มเติม</span>
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="ChevronsDown" class="w-4 h-4 mt-1" />
              </span>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel
            class="leading-relaxed text-slate-600 dark:text-slate-500"
          >
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบจัดการการออเดอร์ </span>
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบจัดการการจัดส่ง</span>
            </div>

            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบจัดการรายชื่อลูกค้า</span>
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black"
                >จัดการระบบรายการสินค้า พร้อมคุณสมบัติสินค้า</span
              >
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบสต๊อกสินค้า -รายงาน</span>
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">นำเข้า/ส่งออกข้อมูลสินค้า</span>
            </div>

            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบ Facebook Live ดูด CF</span>
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black"
                >เชื่อมต่อ TikTok Shop, Shopee, Lazada</span
              >
            </div>
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <div class="flex justify-center">
        <div class="relative mx-auto mt-8 text-5xl font-semibold price">
          <span class="absolute top-0 left-0 -ml-4 text-2xl">฿</span> 3,999
        </div>
      </div>
      <a href="SubmitPMPackage/3">
      <Button type="button" class="block px-4 py-3 mx-auto mt-8 btnpk">
        เลือกแพ็คเกจ
      </Button></a>
    </div>

    <!-- XL -->
    <div
      class="flex-1 px-5 py-16 border-t border-b intro-y lg:border-b-0 lg:border-t-0 lg:border-l lg:border-r border-slate-200/60 dark:border-darkmode-400"
    >
      <!-- <Lucide icon="CreditCard" class="block w-12 h-12 mx-auto icon" /> -->
      <div class="text-xl font-medium text-center"><b>XL</b></div>
      <div class="mt-5 text-left"><b>รายละเอียด</b></div>
      <div class="px-10 mx-auto mt-2">
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 pricedelivery"><b>ค่าส่ง 16฿</b></span>
        </div>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 text-black">รายการออเดอร์ : 100,000 ออเดอร์</span>
        </div>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 text-black">ไม่จำกัดสินค้า</span>
        </div>

        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 text-black">ไม่จำกัดแอดมิน </span>
        </div>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
          </span>
          <span class="ml-3 text-black">ระบบจัดการการออเดอร์ </span>
        </div>
        <Disclosure>
          <Disclosure.Button>
            <div class="flex items-center justify-center">
              <span class="ml-0">เพิ่มเติม</span>
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="ChevronsDown" class="w-4 h-4 mt-1" />
              </span>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel
            class="leading-relaxed text-slate-600 dark:text-slate-500"
          >
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบจัดการการออเดอร์ </span>
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบจัดการการจัดส่ง</span>
            </div>

            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบจัดการรายชื่อลูกค้า</span>
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black"
                >จัดการระบบรายการสินค้า พร้อมคุณสมบัติสินค้า</span
              >
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบสต๊อกสินค้า -รายงาน</span>
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">นำเข้า/ส่งออกข้อมูลสินค้า</span>
            </div>

            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black">ระบบ Facebook Live ดูด CF</span>
            </div>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Check" class="w-5 h-5 mt-1 Check" />
              </span>
              <span class="ml-3 text-black"
                >เชื่อมต่อ TikTok Shop, Shopee, Lazada</span
              >
            </div>
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <div class="flex justify-center">
        <div class="relative mx-auto mt-8 text-5xl font-semibold price">
          <span class="absolute top-0 left-0 -ml-4 text-2xl">฿</span>5,999
        </div>
      </div>
      <a href="SubmitPMPackage/4">
      <Button type="button" class="block px-4 py-3 mx-auto mt-8 btnpk">
        เลือกแพ็คเกจ
      </Button></a>
    </div>
    <div class="flex-1 px-5 py-16 intro-y"></div>
  </div>
  <!-- END: Pricing Layout -->
</template>

<style>
.icon,
.price,
.pricedelivery {
  color: #af0000;
}

.btnpk {
  background-color: #af0000 !important;
  color: #fff !important;
}

.Check {
  font-weight: bold;
  border-radius: 10px !important;
  color: #000 !important;
  border: 1px solid #000;
}
</style>
