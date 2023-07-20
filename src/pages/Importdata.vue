<script setup lang="ts">
import _ from "lodash";
import { ref, provide ,onMounted } from "vue";
import Button from "../base-components/Button";
import {  FormSelect, FormCheck } from "../base-components/Form";
import Lucide from "../base-components/Lucide";
import TomSelect from "../base-components/TomSelect";
import { Disclosure } from "../base-components/Headless";
import Alert from "../base-components/Alert";


const selectMultiple = ref(["1", "3"]);


onMounted(async () => {

})
</script>

<template>

  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class=" text-lg font-bold intro-y" id="">
      นำเข้าข้อมูล
    </h2>
    <br /><br />
    <div class="pc-tab">
      <input checked class="checked" id="tab1" type="radio" name="pct" />
      <input id="tab2" type="radio" name="pct" />
      <input id="tab3" type="radio" name="pct" />
      <nav>
        <ul class="ul">
          <li class="tab1" id="li_tab">
            <label for="tab1" class="label"
              >นำเข้าข้อมูล &nbsp;
          
            </label>
          </li>
          <a href="side-menu-exportdata">
            <li class="" id="li_tab">
              <label for="" class="label"
                >ส่งออกข้อมูล &nbsp;
        
              </label>
            </li>
          </a>
        </ul>
      </nav>

      <section>
        <div class="tab1" id="li_tab">
          <!-- BEGIN: FAQ Content -->
          <div class="col-span-12 intro-y lg:col-span-6">
            <div class="box">
              <Disclosure.Group class="p-5">
                <Disclosure>
                  <Disclosure.Button>
                    <div class="flex items-center">
                      <span class="flex items-center justify-center w-5 h-5">
                        <Lucide icon="Package" class="w-4 h-4 " />
                      </span>
                      <span class="ml-3">หมวดหมู่สินค้า</span>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel
                    class="leading-relaxed text-slate-600 dark:text-slate-500"
                  >
                    <div class="">
                      <Alert
                        variant="soft-warning"
                        class="flex items-center mb-2"
                      >
                        <Lucide icon="AlertCircle" class="w-6 h-6 mr-2" />
                        <span class="text-black">
                          ดาวน์โหลด
                          <a href="" class="alink_cate"
                            ><b>ตัวอย่างหมวดหมู่สินค้า</b></a
                          >เพื่ออัพโหลด</span
                        >
                      </Alert>
                    </div>
                    <div class="grid grid-cols-6 gap-4 mt-5">
                      <div class="col-start-1 col-end-2 mt-2" id="label">
                        <span class="text-right">เลือกไฟล์ :</span>
                      </div>
                      <div class="col-end-7 col-span-5 ..." id="bdred">
                        <input type="file" name="_file" id="_file" @change="reqFile( $event )"   class="inputfile forminput"/>

                        <!-- นำข้อมูลเข้า -->
                        <div class="mr-3 mt-3">
                          <a href="">
                            <Button  @click.prevent="importCategoriesCsv" class="btn_importdata">
                              <Lucide  icon="Upload" class="block mx-auto w-4 h-4"/>&nbsp; นำข้อมูลเข้า
                              <!-- <Lucide icon="Truck" class="block mx-auto w-4 h-4 ml-1" /> -->
                            </Button></a
                          >
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button>
                    <div class="flex items-center">
                      <span class="flex items-center justify-center w-5 h-5">
                        <Lucide icon="Inbox" class="w-4 h-4 " />
                      </span>
                      <span class="ml-3">สินค้า</span>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel
                    class="leading-relaxed text-slate-600 dark:text-slate-500"
                  >
                    <div class="">
                      <br />

                      <div class="grid grid-cols-6 gap-4 mb-5">
                        <div class="col-start-1 col-end-2 mt-2" id="label">
                          <span class="text-right"> ไฟล์ต้นแบบ :</span>
                        </div>
                        <div class="col-span-5 ml-3 ">
                          <!-- นำข้อมูลเข้า -->
                          <div class="mr-3">
                            <a href="">
                              <Button class="btn_importdata">
                                <Lucide
                                  icon="Download"
                                  class="block mx-auto w-4 h-4"
                                />
                                &nbsp; สินค้าธรรมดา
                                <!-- <Lucide icon="Truck" class="block mx-auto w-4 h-4 ml-1" /> -->
                              </Button></a
                            >
                            <a href="">
                              <Button class="btn_importdata ml-3">
                                <Lucide
                                  icon="Download"
                                  class="block mx-auto w-4 h-4"
                                />
                                &nbsp; สินค้ามีตัวเลือก
                                <!-- <Lucide icon="Truck" class="block mx-auto w-4 h-4 ml-1" /> -->
                              </Button></a
                            >
                          </div>
                        </div>
                      </div>

                      <div class="grid grid-cols-1 gap-4">
                        <hr />
                        <br />
                      </div>

                      <div class="grid grid-cols-6 gap-4 mb-3">
                        <div class="col-start-1 col-end-2 mt-2" id="label">
                          <span class="text-right">เลือกไฟล์ :</span>
                        </div>
                        <div class="col-end-7 col-span-5 ..." id="bdred">
                          <input
                            type="file"
                            name="file"
                            id="file"
                            @change="reqFile( $event )"
                            class="inputfile forminput"
                          />
                        </div>
                      </div>

                      <div class="grid grid-cols-6 gap-4">
                        <div class="col-start-1 col-end-2 mt-2" id="label">
                          <span class="text-right"> คลังสินค้า :</span>
                        </div>
                        <div class="col-end-7 col-span-5" id="bdred">
                          <FormSelect id="">
                            <option value="">My WareHouse</option>
                          </FormSelect>
                          <div class="flex items-center mt-2">
                            <span
                              class="flex items-center justify-center w-5 h-5"
                            >
                              <Lucide icon="AlertCircle" class="w-4 h-4 " />
                            </span>
                            <span
                              >การเลือกคลังสินค้าจะส่งผลต่อจำนวนสินค้า,
                              จำนวนขั้นต่ำ และต้นทุน เท่านั้น</span
                            >
                          </div>
                        </div>
                      </div>

                      <div class="grid grid-cols-6 gap-4">
                        <div class="col-start-1 col-end-2 mt-2" id="label">
                          <span class="text-right"> ประเภทสินค้า :</span>
                        </div>
                        <div class="col-span-5 ml-3">
                          <div>
                            <FormCheck class="mt-2">
                              <FormCheck.Input
                                checked
                                class="radio_type_product"
                                value="CONFIG"
                                type="radio"
                                name="type_product"
                                id="radio_type_product"
                              />
                              <FormCheck.Label htmlFor="radio_type_product">
                                สินค้าธรรมดา
                              </FormCheck.Label>
                            </FormCheck>
                            <FormCheck class="mt-2">
                              <FormCheck.Input
                                class="radio_type_product"
                                id="radio_type_product2"
                                type="radio"
                                name="type_product"
                                value="vertical-radio-liam-neeson"
                              />
                              <FormCheck.Label htmlFor="radio_type_product2">
                                สินค้ามีตัวเลือก
                              </FormCheck.Label>
                            </FormCheck>
                          </div>
                        </div>
                      </div>

                      <div class="grid grid-cols-1 gap-4">
                        <br />
                        <hr />
                      </div>
                      <div class="grid grid-cols-6 gap-4 mt-4">
                        <div
                          class="col-start-1 col-end-2 mt-2"
                          id="label"
                        ></div>
                        <div class="col-end-7 col-span-5 ..." id="bdred">
                          <!-- นำข้อมูลเข้า -->
                          <div class="mr-3">
                            <a href="">
                              <Button class="btn_importdata">
                                <Lucide
                                  icon="Upload"
                                  class="block mx-auto w-4 h-4"
                                />
                                &nbsp; นำข้อมูลเข้า
                                <!-- <Lucide icon="Truck" class="block mx-auto w-4 h-4 ml-1" /> -->
                              </Button></a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button>
                    <div class="flex items-center">
                      <span class="flex items-center justify-center w-5 h-5">
                        <Lucide icon="Users" class="w-4 h-4 " />
                      </span>
                      <span class="ml-3">ลูกค้า</span>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel
                    class="leading-relaxed text-slate-600 dark:text-slate-500"
                  >
                    <div class="">
                      <br />

                      <div class="grid grid-cols-6 gap-4 mb-5">
                        <div class="col-start-1 col-end-2 mt-2" id="label">
                          <span class="text-right"> ไฟล์ต้นแบบ :</span>
                        </div>
                        <div class="col-span-5 ml-3">
                          <!-- นำข้อมูลเข้า -->
                          <div class="mr-3">
                            <a href="">
                              <Button class="btn_importdata">
                                <Lucide
                                  icon="Download"
                                  class="block mx-auto w-4 h-4"
                                />
                                &nbsp; มาตรฐาน
                                <!-- <Lucide icon="Truck" class="block mx-auto w-4 h-4 ml-1" /> -->
                              </Button></a
                            >
                          </div>
                        </div>
                      </div>

                      <div class="grid grid-cols-1 gap-4">
                        <hr />
                        <br />
                      </div>

                      <div class="grid grid-cols-6 gap-4 ">
                        <div class="col-start-1 col-end-2 mt-2" id="label">
                          <span class="text-right">เลือกไฟล์ :</span>
                        </div>
                        <div class="col-end-7 col-span-5 ..." id="bdred">
                          <input
                            type="file"
                            name="file"
                            id="file"
                            class="inputfile forminput"
                          />
                        </div>
                      </div>

                      <div class="grid grid-cols-6 gap-4">
                        <div class="col-start-1 col-end-2 mt-2" id="label">
                          <span class="text-right"> รูปแบบข้อมูล :</span>
                        </div>
                        <div class="col-end-7 col-span-5" id="bdred">
                          <div class="mt-1">
                            <div class="flex flex-col mt-2 sm:flex-row">
                              <FormCheck class="mr-2">
                                <FormCheck.Input
                                  id="radio-switch-1"
                                  type="radio"
                                  name="horizontal_radio_button"
                                  value="horizontal-radio-chris-evans"
                                  class="radio_btn_bgc"
                                  checked
                                />
                                <FormCheck.Label htmlFor="radio-switch-1">
                                  มาตรฐาน
                                </FormCheck.Label>
                              </FormCheck>
                              <FormCheck class="mt-2 mr-2 sm:mt-0">
                                <FormCheck.Input
                                  id="radio-switch-2"
                                  type="radio"
                                  name="horizontal_radio_button"
                                  value="horizontal-radio-liam-neeson"
                                  class="radio_btn_bgc"
                                />
                                <FormCheck.Label htmlFor="radio-switch-2">
                                  รายชื่อผู้ติดต่อ (สำหรับ CRM)
                                </FormCheck.Label>
                              </FormCheck>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="grid grid-cols-6 gap-4">
                        <div class="col-start-1 col-end-2 mt-2" id="label">
                          <span class="text-right"> ประเภทสินค้า :</span>
                        </div>
                        <div class="col-end-7 col-span-5">
                          <div class="mt-1">
                            <div class="flex flex-col mt-2 sm:flex-row">
                              <FormCheck class="mr-2">
                                <FormCheck.Input
                                  id="radio-switch-3"
                                  type="radio"
                                  name="typeproduct"
                                  value="horizontal-radio-chris-evans"
                                  class="radio_btn_bgc"
                                  checked
                                />
                                <FormCheck.Label htmlFor="radio-switch-3">
                                  สินค้าธรรมดา
                                </FormCheck.Label>
                              </FormCheck>
                              <FormCheck class="mt-2 mr-2 sm:mt-0">
                                <FormCheck.Input
                                  id="radio-switch-4"
                                  type="radio"
                                  name="typeproduct"
                                  value="horizontal-radio-liam-neeson"
                                  class="radio_btn_bgc"
                                />
                                <FormCheck.Label htmlFor="radio-switch-4">
                                  สินค้ามีตัวเลือก
                                </FormCheck.Label>
                              </FormCheck>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="grid grid-cols-1 gap-4">
                        <br />
                        <hr />
                      </div>
                      <div class="grid grid-cols-6 gap-4 mt-4">
                        <div
                          class="col-start-1 col-end-2 mt-2"
                          id="label"
                        ></div>
                        <div class="col-end-7 col-span-5 ..." id="bdred">
                          <!-- นำข้อมูลเข้า -->
                          <div class="mr-3">
                            <a href="">
                              <Button class="btn_importdata">
                                <Lucide
                                  icon="Upload"
                                  class="block mx-auto w-4 h-4"
                                />
                                &nbsp; นำข้อมูลเข้า
                                <!-- <Lucide icon="Truck" class="block mx-auto w-4 h-4 ml-1" /> -->
                              </Button></a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button>
                    <div class="flex items-center">
                      <span class="flex items-center justify-center w-5 h-5">
                        <Lucide icon="Box" class="w-4 h-4 " />
                      </span>
                      <span class="ml-3">หมายเลขพัสดุ</span>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel
                    class="leading-relaxed text-slate-600 dark:text-slate-500"
                  >
                    <div class="">
                      <br />

                      <div class="grid grid-cols-6 gap-4 mb-5">
                        <div class="col-start-1 col-end-2 mt-2" id="label">
                          <span class="text-right"> ไฟล์ต้นแบบ :</span>
                        </div>
                        <div class="col-span-5 ml-3">
                          <!-- นำข้อมูลเข้า -->
                          <div class="mr-3">
                            <a href="">
                              <Button class="btn_importdata">
                                <Lucide
                                  icon="Download"
                                  class="block mx-auto w-4 h-4"
                                />
                                &nbsp; มาตรฐาน
                                <!-- <Lucide icon="Truck" class="block mx-auto w-4 h-4 ml-1" /> -->
                              </Button></a
                            >
                          </div>
                        </div>
                      </div>

                      <div class="grid grid-cols-1 gap-4">
                        <hr />
                        <br />
                      </div>

                      <div class="grid grid-cols-6 gap-4">
                        <div class="col-start-1 col-end-2 mt-2" id="label">
                          <span class="text-right">เลือกไฟล์ :</span>
                        </div>
                        <div class="col-end-7 col-span-5 ..." id="bdred">
                          <input
                            type="file"
                            name="file"
                            id="file"
                            class="inputfile forminput"
                          />
                        </div>
                      </div>

                      <div class="grid grid-cols-6 gap-4 mt-3">
                        <div class="col-start-1 col-end-2 mt-2" id="label">
                          <span class="text-right"> พนักงาน :</span>
                        </div>
                        <div class="col-end-7 col-span-5" id="bdred">
                          <TomSelect
                            v-model="selectMultiple"
                            :options="{
                              placeholder: 'Select your favorite actors',
                            }"
                            class="w-full"
                            multiple
                          >
                            <option value="1">พนักงงาน1</option>
                            <option value="2">พนักงงาน2</option>
                            <option value="3">พนักงงาน3</option>
                            <option value="4">พนักงงาน4</option>
                            <option value="5">พนักงงาน5</option>
                          </TomSelect>
                        </div>
                      </div>

                      <div class="grid grid-cols-6 gap-4">
                        <div class="col-start-1 col-end-2" id="label">
                          <span class="text-right"> แพล็ตฟอร์ม :</span>
                        </div>
                        <div class="col-end-7 col-span-5">
                          <div>
                            <FormCheck class="mt-2">
                              <FormCheck.Input
                                checked
                                class="radio_type_product"
                                value="CONFIG"
                                type="radio"
                                name="type_product"
                                id="radio_type_product"
                              />
                              <FormCheck.Label htmlFor="radio_type_product">
                                <div class="flex items-center">
                                  <span class="justify-center w-10 mt-1">
                                    <img
                                      class=" "
                                      src="https://www.favlens.com/wp-content/uploads/2021/02/flash-express-logo-3.png"
                                      alt=""
                                    />
                                  </span>
                                  <span class="ml-2">Flash Express</span>
                                </div>
                              </FormCheck.Label>
                            </FormCheck>
                          </div>
                        </div>
                      </div>

                      <div class="grid grid-cols-1 gap-4">
                        <br />
                        <hr />
                      </div>
                      <div class="grid grid-cols-6 gap-4 mt-4">
                        <div class="col-start-1 col-end-2 mt-2" id="label"></div>
                        <div class="col-end-7 col-span-5" id="bdred">
                          <!-- นำข้อมูลเข้า -->
                          <div class="mr-3">
                            <a href="">
                              <Button class="btn_importdata">
                                <Lucide  icon="Upload"  class="block mx-auto w-4 h-4"/>
                                &nbsp; นำข้อมูลเข้า
                                <!-- <Lucide icon="Truck" class="block mx-auto w-4 h-4 ml-1" /> -->
                              </Button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button>
                    <div class="flex items-center">
                      <span class="flex items-center justify-center w-5 h-5">
                        <Lucide icon="CheckCircle" class="w-4 h-4 " />
                      </span>
                      <span class="ml-3">ยืนยันการชำระเงินแบบเก็บเงินปลายทาง</span>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel class="leading-relaxed text-slate-600 dark:text-slate-500" >
                  <div class="">
                      <br />

                      <div class="grid grid-cols-6 gap-4 mb-5">
                        <div class="col-start-1 col-end-2 mt-2" id="label">
                          <span class="text-right"> ไฟล์ต้นแบบ :</span>
                        </div>
                        <div class="col-span-5 ml-3">
                          <!-- นำข้อมูลเข้า -->
                          <div class="mr-3">
                            <a href="">
                              <Button class="btn_importdata">
                                <Lucide icon="Download" class="block mx-auto w-4 h-4"
                                />
                                &nbsp; มาตรฐาน
                                <!-- <Lucide icon="Truck" class="block mx-auto w-4 h-4 ml-1" /> -->
                              </Button></a
                            >
                          </div>
                        </div>
                      </div>

                      <div class="grid grid-cols-1 gap-4">
                        <hr />
                        <br />
                      </div>

                      <div class="grid grid-cols-6 gap-4 mb-3">
                        <div class="col-start-1 col-end-2 mt-2" id="label">
                          <span class="text-right">เลือกไฟล์ :</span>
                        </div>
                        <div class="col-end-7 col-span-5 ..." id="bdred">
                          <input
                            type="file"
                            name="file"
                            id="file"
                            class="inputfile forminput"
                          />
                        </div>
                      </div>


                      <div class="grid grid-cols-6 gap-4">
                        <div class="col-start-1 col-end-2" id="label">
                          <span class="text-right"> แพล็ตฟอร์ม :</span>
                        </div>
                        <div class="col-end-7 col-span-5">
                          <div>
                            <FormCheck class="mt-2">
                              <FormCheck.Input
                                checked
                                class="radio_type_product"
                                value="CONFIG"
                                type="radio"
                                name="type_product"
                                id="radio_type_product"
                              />
                              <FormCheck.Label htmlFor="radio_type_product">
                                <div class="flex items-center">
                                  <span class="justify-center w-10 mt-1">
                                    <img
                                      class=" "
                                      src="https://www.favlens.com/wp-content/uploads/2021/02/flash-express-logo-3.png"
                                      alt=""
                                    />
                                  </span>
                                  <span class="ml-2">Flash Express</span>
                                </div>
                              </FormCheck.Label>
                            </FormCheck>
                          </div>
                        </div>
                      </div>

                      <div class="grid grid-cols-1 gap-4">
                        <br />
                        <hr />
                      </div>
                      <div class="grid grid-cols-6 gap-4 mt-4">
                        <div
                          class="col-start-1 col-end-2 mt-2"
                          id="label"
                        ></div>
                        <div class="col-end-7 col-span-5 ..." id="bdred">
                          <!-- นำข้อมูลเข้า -->
                          <div class="mr-3">
                            <a href="">
                              <Button class="btn_importdata">
                                <Lucide
                                  icon="Upload"
                                  class="block mx-auto w-4 h-4"
                                />
                                &nbsp; นำข้อมูลเข้า
                                <!-- <Lucide icon="Truck" class="block mx-auto w-4 h-4 ml-1" /> -->
                              </Button></a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </Disclosure>
              </Disclosure.Group>
            </div>
          </div>

          <!-- END: FAQ Content -->
        </div>
        <div class="tab2" id="li_tab"></div>
      </section>
    </div>
  </div>

  <br /><br />
</template>

<script lang="ts">
export default {
  data() {
    return {
      message: 'Hello World!',
      _file: '',
      productType:" " as string,
      url:import.meta.env.VITE_API_URL as string,
      productTypes:" " as string
    }
  },
  methods: {

    async reqFile(event:any){
      this._file = event.target.files[0];
    }
    ,
    async importCategoriesCsv() {
       const formData = new FormData();
       formData.append('file', this._file);
   
       const res = await fetch(`${this.url.trim()}/importx/importCategoryByCsv/`,{
        method:"POST",
        body: formData
      });

      if(res.status == 201){
        location.reload();
      }
    },  
    async importProductCsv(){
      const formData = new FormData();
      formData.append('file', this.productTypes);
       
      const res = await fetch(`${import.meta.env.VITE_API_URL + '/importx/importProduct/'}`,{
        method:"POST",
        body: formData
      });
    }
    
  }
}
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
</style>
