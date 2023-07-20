<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
import Button from "../../base-components/Button";
import {
  FormInput,
  FormInline,
  FormSelect,
  FormLabel,
  FormHelp,
  FormCheck,
  InputGroup,
  FormSwitch,
} from "../../base-components/Form";
import Preview from "../../base-components/Preview";
import Alert from "../../base-components/Alert";
import Lucide from "../../base-components/Lucide";
import { Dialog, Menu, Disclosure, Tab } from "../../base-components/Headless";
import TinySlider, { TinySliderElement } from "../../base-components/TinySlider";


const addfetureModal = ref(false);
const setaddfetureModal = (value: boolean) => {
  addfetureModal.value = value;
};
const addfeturButtonRef = ref(null);

/*Modal Step form*/

const importantNotesRef = ref<TinySliderElement>();

provide("bind[importantNotesRef]", (el: TinySliderElement) => {
  importantNotesRef.value = el;
});

/*Swicht*/

</script>

<template>
<form action="">
    
   
    <div class="">
      <div id="btn_add_feture" class="flex items-center" @click="
                () => {
                  setaddfetureModal(true);
                }
              ">
                <span class="flex items-center justify-center">
                  <Lucide icon="PlusCircle" class="w-5 h-5 mt-1" />
                </span>
                <span> &nbsp; สร้างร้านค้า</span>
              </div>

     
    </div>
    
    <!--M     O     D     A     L-->
    <Dialog :open="addfetureModal" @close="
      () => {
        setaddfetureModal(false);
      }
    " :initialFocus="addfeturButtonRef"

    >
      <Dialog.Panel class="sm:w-[600px] lg:w-[900px] " style="height: 600px;
overflow-y: scroll;">
        <br /><br />
        <span class="headtext pl-5">ตั้งค่าเริ่มต้น</span>
        <br /><br />
        <div class="flex items-center pl-5">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="AlertCircle" class="w-4 h-4" />
          </span>
          <b>เพื่อให้การสมัครสมาชิกเสร็จสมบูรณ์ กรุณากรอกข้อมูลให้ครบถ้วน</b>
        </div>
        <div class="mx-5">
          <TinySlider :options="{
            controls: true,
          }">
            <div class="1">
              <!--  BEGIN: Wizard Layout 1 -->
              <div class="Dialog">
                <div class="py-10 intro-y box sm:py-20">
                  <div
                    class="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">
                    <div class="z-10 flex items-center flex-1 intro-x lg:text-center lg:block">
                      <Button  class="w-10 h-10 rounded-full bg-[#af0000] text-white">
                        1
                      </Button>
                      <div class="ml-3 text-base font-medium lg:w-32 lg:mt-3 lg:mx-auto">
                        ข้อมูลร้านค้า
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button
                        class="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
                        2
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        การชำระเงิน
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button
                        class="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
                        3
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        การจัดส่ง
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button
                        class="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
                        4
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        คลังสินค้า
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button
                        class="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
                        5
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        นโยบายการคืน
                      </div>
                    </div>
                  </div>
                  <div class="px-5 pt-10 mt-10 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
                    <div class="text-base font-medium">ข้อมูลร้านค้า</div>
                    <div class="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                      <div class="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-1">ชื่อร้าน</FormLabel>
                        <FormInput id="input-wizard-1" type="text" placeholder="ชื่อร้าน" />
                      </div>
                      <div class="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-2">ที่อยู่</FormLabel>
                        <FormInput id="input-wizard-2" type="text" placeholder="ที่อยู่" />
                      </div>
                      <div class="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-3">ตำบล</FormLabel>
                        <FormInput id="input-wizard-3" type="text" placeholder="ตำบล" />
                      </div>
                    <div class="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-4">แขวง/ตำบล</FormLabel>
                        <FormInput id="input-wizard-4" type="text" placeholder="แขวง/ตำบล" />
                      </div>
                      <div class="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-5">จังหวัด</FormLabel>
                        <FormInput id="input-wizard-5" type="text" placeholder="จังหวัด" />
                      </div>
                      <div class="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-5">รหัสไปรษณีย์</FormLabel>
                        <FormInput id="input-wizard-5" type="text" placeholder="รหัสไปรษณีย์" />
                      </div>
                      <div class="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-5">โลโก้</FormLabel>
                        <div class="col-end-7 col-span-5 ..." id="bdred">
                          <FormInline class="flex-col items-start mt-0 xl:flex-row">
                            <div
                              class="flex-1 w-full pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 dark:border-darkmode-400">
                              <div class="relative flex items-center justify-center px-4 pb-4 mt-5">
                                <Lucide icon="Image" class="w-4 h-4 mr-2" />
                                <span class="mr-1"> เพิ่มภาพสินค้า </span>
                                <input type="file"/>
                              </div>
                              <div  class="grid grid-cols gap-5 pl-4 pr-5 justify-center">
                                <img class="rounded-md max-h-32"/>
                                <button  class="text-red-400">
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

                      <div class="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
                       
                        <Button variant="secondary" class="w-24 ml-2" @click="
                          () => {
                            setaddfetureModal(false);
                          }
                        ">
                          ยกเลิก
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--  BEGIN: Wizard Layout 2 -->
            <div class="2">
              <div class="Dialog">
                <div class="py-10 intro-y box sm:py-20">
                  <div
                    class="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">
                    <div class="z-10 flex items-center flex-1 intro-x lg:text-center lg:block">
                      <Button  class="w-10 h-10 rounded-full bg-[#af0000] text-white">
                        1
                      </Button>
                      <div class="ml-3 text-base font-medium lg:w-32 lg:mt-3 lg:mx-auto">
                        ข้อมูลร้านค้า
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button  class="w-10 h-10 rounded-full bg-[#af0000] text-white">
                        2
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        การชำระเงิน
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button
                        class="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
                        3
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        การจัดส่ง
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button
                        class="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
                        4
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        คลังสินค้า
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button
                        class="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
                        5
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        นโยบายการคืน
                      </div>
                    </div>
                  </div>
                  <div class="px-5 pt-10 mt-10 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
                    <div class="text-base font-medium">การชำระเงิน</div>
                    <div class="">
                      <div class="FAQ">
                        <a href="#hide1" class="hide " id="hide1">
                          <div class="flex items-center">
                            <span class="flex items-center justify-center w-5 h-5 ml-5">

                              <Lucide icon="DollarSign" class="w-4 h-4 mt-1 " />
                            </span>
                            <span>
                              ชำระเงินผ่านธนาคาร</span>
                            <span class="flex items-center justify-center w-5 h-5">
                              <Lucide icon="ChevronDown" class="w-4 h-4 mt-1" />
                            </span>
                          </div>
                        </a>
                        <a href="#show1" class="show " id="show1">
                          <div class="flex items-center">
                            <span class="flex items-center justify-center w-5 h-5 ml-5">

                              <Lucide icon="DollarSign" class="w-4 h-4 mt-1" />
                            </span>

                            <span>
                              ชำระเงินผ่านธนาคาร</span>
                            <span class="flex items-center justify-center w-5 h-5">
                              <Lucide icon="ChevronDown" class="w-4 h-4 mt-1" />
                            </span>
                          </div>
                        </a>
                        <div class="list">
                          <p class="pl-5">
                            <br />
                            <a href="">
                              <Button variant="primary" class="mr-2 shadow-md" id="goldgd">
                                <Lucide icon="PlusCircle" class="block mx-auto w-4 h-4" />
                                &nbsp; เพิ่มธนาคาร
                              </Button></a><br><br>

                          <table>
                            <thead>
                              <tr>
                                <th>ธนาคาร</th>
                                <th>ชื่อย่อ</th>
                                <th>ชื่อบัญชีธนาคาร</th>
                                <th>หมายเลขบัญชี</th>
                                <th>แก้ไข</th>

                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style="display: flex; vertical-align: middle; border:none;">

                                  <!-- <div class=""><img src="../assets/images/kbank.png" alt="" class="w-8"></div> -->
                                  <div class="mt-2 ml-1"> ธนาคารกสิกรไทย</div>
                                </td>

                                <td>KBANK</td>
                                <td>ปิยะชล</td>
                                <td>00000-000-000</td>
                                <td><Button variant="secondary" class="mr-2 shadow-md" id="">
                                    <Lucide icon="Edit" class="block mx-auto w-4 h-4" />

                                  </Button></td>

                              </tr>
                              <tr>
                                <td style="display: flex; vertical-align: middle; border:none;">
                                  <!-- <div class=""><img src="../assets/images/BBL.png" alt="" class="w-8"></div> -->
                                  <div class="mt-2 ml-1"> ธนาคารกรุงเทพ</div>
                                </td>

                                <td>BBL</td>
                                <td>ปิยะชล</td>
                                <td>00000-000-000</td>
                                <td><Button variant="secondary" class="mr-2 shadow-md" id="">
                                    <Lucide icon="Edit" class="block mx-auto w-4 h-4" />

                                  </Button></td>

                              </tr>
                            </tbody>
                          </table>
                          <br><br>
                          </p>
                        </div>
                      </div>
                      <br />
                      <div class="FAQ2">
                        <a href="#hide2" class="hide2" id="hide2">
                          <div class="flex items-center">
                            <span class="flex items-center justify-center w-5 h-5 ml-5">

                              <Lucide icon="Truck" class="w-4 h-4 mt-1 " />
                            </span>
                            <span>
                              เก็บเงินปลายทาง</span>
                            <span class="flex items-center justify-center w-5 h-5">
                              <Lucide icon="ChevronDown" class="w-4 h-4 mt-1" />
                            </span>
                          </div>
                        </a>
                        <a href="#show2" class="show2" id="show2">
                        <div class="flex items-center">
                          <span class="flex items-center justify-center w-5 h-5 ml-5">

                            <Lucide icon="Truck" class="w-4 h-4 mt-1 " />
                          </span>
                          <span>
                              เก็บเงินปลายทาง</span>
                            <span class="flex items-center justify-center w-5 h-5">
                              <Lucide icon="ChevronDown" class="w-4 h-4 mt-1" />
                            </span>
                          </div>
                        </a>
                        <div class="list2">
                          <p class="pl-5">
                            <br />
                          <table>
                            <thead>
                              <tr>
                                <th>ผู้ให้บริการ</th>
                                <th>ค่าบริการ</th>



                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style="display: flex; vertical-align: middle; border:none;">

                                  <!-- <div class=""><img src="../assets/images/Flash-express.jpg" alt="" class="w-8"></div> -->
                                  <div class="mt-2 ml-1"> Flash Express</div>
                                </td>

                                <td>18 <Button variant="secondary" class="shadow-md ml-2" id="">
                                    <Lucide icon="Edit" class="block mx-auto w-4 h-4" />

                                  </Button></td>

                                <!-- <td >
                                                  <FormSwitch class="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"  >
                                
                                                    <FormSwitch.Input id="show-example-1"  class=" mr-0"
                                                      type="checkbox" />
                                                  </FormSwitch>
                                                </td> -->


                              </tr>

                            </tbody>
                          </table>
                          </p>
                        </div>
                      </div>

                      <div class="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
                        <Button variant="secondary" class="w-24 ml-2" @click="
                          () => {
                            setaddfetureModal(false);
                          }
                        ">
                          ยกเลิก
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  BEGIN: Wizard Layout 3 -->
            <div class="3">
              <div class="Dialog">
                <div class="py-10 intro-y box sm:py-20">
                  <div
                    class="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">
                    <div class="z-10 flex items-center flex-1 intro-x lg:text-center lg:block">
                      <Button  class="w-10 h-10 rounded-full bg-[#af0000] text-white">
                        1
                      </Button>
                      <div class="ml-3 text-base font-medium lg:w-32 lg:mt-3 lg:mx-auto">
                        ข้อมูลร้านค้า
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button  class="w-10 h-10 rounded-full bg-[#af0000] text-white">
                        2
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        การชำระเงิน
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button  class="w-10 h-10 rounded-full bg-[#af0000] text-white">
                        3
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        การจัดส่ง
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button
                        class="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
                        4
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                      คลังสินค้า
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button
                        class="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
                        5
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        นโยบายการคืน
                      </div>
                    </div>
                  </div>
                  <div class="px-5 pt-10 mt-10 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
                    <div class="text-base font-medium">การจัดส่ง</div>
                    <div class=" mt-5 ">

                      <table>
                        <thead>
                          <tr>
                            <th>ผู้ให้บริการ</th>
                            <th>ค่าบริการ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style="display: flex; vertical-align: middle; border:none;">
                              <!-- <div class=""><img src="../assets/images/Flash-express.jpg" alt="" class="w-8"></div> -->
                              <div class="mt-2 ml-1"> Flash Express</div>
                            </td>
                            <td>50 <Button variant="secondary" class="shadow-md ml-2" id="">
                                <Lucide icon="Edit" class="block mx-auto w-4 h-4" />
                              </Button></td>
                          </tr>
                        </tbody>
                      </table>

                      <div class="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
                        <!-- <Button variant="secondary" class="w-24"> ย้อนกลับ </Button>
                                           <Button variant="danger" class="w-24 ml-2" > ถัดไป </Button> -->
                        <Button variant="secondary" class="w-24 ml-2" @click="
                          () => {
                            setaddfetureModal(false);
                          }
                        ">
                          ยกเลิก
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  BEGIN: Wizard Layout 4 -->
            <div class="4">
              <div class="Dialog">
                <div class="py-10 intro-y box sm:py-20">
                  <div
                    class="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">
                    <div class="z-10 flex items-center flex-1 intro-x lg:text-center lg:block">
                      <Button  class="w-10 h-10 rounded-full bg-[#af0000] text-white">
                        1
                      </Button>
                      <div class="ml-3 text-base font-medium lg:w-32 lg:mt-3 lg:mx-auto">
                        ข้อมูลร้านค้า
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button  class="w-10 h-10 rounded-full bg-[#af0000] text-white">
                        2
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        การชำระเงิน
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button  class="w-10 h-10 rounded-full bg-[#af0000] text-white">
                        3
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        การจัดส่ง
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button  class="w-10 h-10 rounded-full bg-[#af0000] text-white">
                        4
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        คลังสินค้า
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button
                        class="w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
                        5
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        นโยบายการคืน
                      </div>
                    </div>
                  </div>
                  <div class="px-5 pt-10 mt-10 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
                    <div class="text-base font-medium">คลังสินค้า</div>
                    <div class="mt-5 " >
                      <b>เปิด / ปิดสต๊อกสินค้า : </b>
                      <FormSelect name="" id="" class="mt-3 ">
                        <option value="" selected disabled >เปิด / ปิดสต๊อกสินค้า</option>
                        <option value="">( เปิดสต๊อก ) จองสินค้าเมื่อสร้างคำสั่งซื้อ และตัดสต๊อกเมื่อยืนยันการชำระเงิน</option>
                        <option value="">( เปิดสต๊อก ) ไม่มีการจองสินค้า และตัดสต๊อกเมื่อยืนยันการชำระเงิน</option>
                        <option value="">ปิดสต๊อกสินค้า</option>
                      </FormSelect>

                      <!-- <FormSwitch class="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label htmlFor="show-example-2">
                          <b> เปิด / ปิดสต๊อกสินค้า : </b>

                        </FormSwitch.Label>
                        <FormSwitch.Input id="show-example-2" class="ml-3 mr-0" type="checkbox" />
                    </FormSwitch> -->
                    <br>
                      <br>
                      <hr><br>
                      <div class="">
                        <!-- <label><b>วิธีการตัดสต๊อก : </b></label>
                        <div>

                          <FormCheck class="mt-2">
                            <FormCheck.Input id="radio-switch-1" type="radio" name="vertical_radio_button"
                              value="vertical-radio-chris-evans" />
                            <FormCheck.Label htmlFor="radio-switch-1">
                              จองสินค้าเมื่อสร้างคำสั่งซื้อ และตัดสต๊อกเมื่อยืนยันการชำระเงิน
                            </FormCheck.Label>
                          </FormCheck>
                          <FormCheck class="mt-2">
                            <FormCheck.Input id="radio-switch-2" type="radio" name="vertical_radio_button"
                              value="vertical-radio-liam-neeson" />
                            <FormCheck.Label htmlFor="radio-switch-2">
                              ไม่มีการจองสินค้า และตัดสต๊อกเมื่อยืนยันการชำระเงิน
                            </FormCheck.Label>
                          </FormCheck>

                        </div> -->


                        <br> <br>
                        <FormSwitch class="w-full  sm:w-auto sm:ml-auto sm:mt-0">
                          <FormSwitch.Label htmlFor="show-example-2">
                            <b> ยอมรับให้จำนวนสินค้าติดลบ : </b>

                          </FormSwitch.Label>
                          <FormSwitch.Input id="show-example-2" class="ml-3 mr-0" type="checkbox" />
                        </FormSwitch>



                        <div class="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
                          <!-- <Button variant="secondary" class="w-24"> ย้อนกลับ </Button>
                                           <Button variant="danger" class="w-24 ml-2" > ถัดไป </Button> -->
                          <Button variant="secondary" class="w-24 ml-2" @click="
                            () => {
                              setaddfetureModal(false);
                            }
                          ">
                            ยกเลิก
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  BEGIN: Wizard Layout 5 -->
            <div class="5">
              <div class="Dialog">
                <div class="py-10 intro-y box sm:py-20">
                  <div
                    class="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">
                    <div class="z-10 flex items-center flex-1 intro-x lg:text-center lg:block">
                      <Button class="w-10 h-10 rounded-ful bg-[#af0000] text-whitel">
                        1
                      </Button>
                      <div class="ml-3 text-base font-medium lg:w-32 lg:mt-3 lg:mx-auto">
                        ข้อมูลร้านค้า
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button  class="w-10 h-10 rounded-full bg-[#af0000] text-white">
                        2
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        การชำระเงิน
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button  class="w-10 h-10 rounded-full bg-[#af0000] text-white">
                        3
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        การจัดส่ง
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button  class="w-10 h-10 rounded-full bg-[#af0000] text-white">
                        4
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        คลังสินค้า
                      </div>
                    </div>
                    <div class="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                      <Button  class="w-10 h-10 rounded-full bg-[#af0000] text-white">
                        5
                      </Button>
                      <div class="ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                        นโยบายการคืน
                      </div>
                    </div>
                  </div>
                  <div class="px-5 pt-10 mt-10 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
                    <div class="text-base font-medium">นโยบายการคืน</div>
                    <div class="mt-5 ">
                      <div class="">
                        <FormCheck class="mr-2">
                          <FormCheck.Input id="checkbox-switch-4" type="checkbox" value="" class="checked:bg-[#af0000]" />
                          <FormCheck.Label htmlFor="checkbox-switch-4">
                            <b>ฉันได้อ่านและยอมรับนโยบายคืนเงิน</b>
                          </FormCheck.Label>
                        </FormCheck>

                      </div>
                      <div class="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
                        <!-- <Button variant="secondary" class="w-24"> ย้อนกลับ </Button>-->
                        <Button  class="w-24 ml-2 bg-[#af0000] text-white">
                          ตกลง
                        </Button>
                        <Button variant="secondary" class="w-24 ml-2" @click="
                          () => {
                            setaddfetureModal(false);
                          }
                        ">
                          ยกเลิก
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TinySlider>
        </div>

        <!-- END -->
      </Dialog.Panel>
    </Dialog>
  <!--M     O     D     A     L-->

  

  </form>
</template>

