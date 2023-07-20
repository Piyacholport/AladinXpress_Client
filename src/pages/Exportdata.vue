<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
// import fakerData from "../utils/faker";
import Button from "../base-components/Button";
import Pagination from "../base-components/Pagination";
import { FormInput, FormSelect,FormCheck } from "../base-components/Form";
import Lucide from "../base-components/Lucide";
import Tippy from "../base-components/Tippy";
import { Dialog, Menu } from "../base-components/Headless";
import TinySlider, { TinySliderElement } from "../base-components/TinySlider";
import TomSelect from "../base-components/TomSelect";
import { Disclosure } from "../base-components/Headless";
</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class=" text-lg font-bold intro-y" id="">
      ส่งออกข้อมูล
    </h2>
    <br /><br />
    <div class="pc-tab">
      <input id="tab1" type="radio" name="pct" />
      <input checked class="checked" id="tab2" type="radio" name="pct" />
      <input id="tab3" type="radio" name="pct" />
      <nav>
        <ul class="ul">
          <a href="side-menu-importdatas">
            <li class="" id="li_tab">
              <label for="" class="label"
                >นำเข้าข้อมูล &nbsp;
          
              </label>
            </li>
          </a>
          <li class="tab2" id="li_tab">
            <label for="tab2" class="label"
              >ส่งออกข้อมูล &nbsp;
       
            </label>
          </li>
        </ul>
      </nav>

      <section>
        <div class="tab2" id="li_tab">
          <!-- BEGIN: FAQ Content -->
          <div class="col-span-12 intro-y lg:col-span-6">
            <div class="box">
              <Disclosure.Group class="p-5">
                <!-- <Disclosure>
                  <Disclosure.Button>
                    <div class="flex items-center">
                      <span class="flex items-center justify-center w-5 h-5">
                        <Lucide icon="FilePlus" class="w-4 h-4 " />
                      </span>
                      <span class="ml-3">คำสั่งซื้อ</span>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel
                    class="leading-relaxed text-slate-600 dark:text-slate-500"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Disclosure.Panel>
                </Disclosure> -->
                <!-- <Disclosure>
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Disclosure.Panel>
                </Disclosure> -->
                <Disclosure>
                  <Disclosure.Button>
                    <div class="flex items-center">
                      <span class="flex items-center justify-center w-5 h-5">
                        <Lucide icon="Package" class="w-4 h-4 " />
                      </span>
                      <span class="ml-3">คลังสินค้า</span>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel
                    class="leading-relaxed text-slate-600 dark:text-slate-500"
                  >
                    <div class="">
                      <br />

      

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
                                Microsoft Excel 95+ (xls)
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
                                Microsoft Excel 2007+ (xlsx)
                              </FormCheck.Label>
                            </FormCheck>
                            <FormCheck class="mt-2" disable>
                              <FormCheck.Input
                                class="radio_type_product"
                                id="radio_type_product2"
                                type="radio"
                                name="type_product"
                                value="vertical-radio-liam-neeson"
                              />
                              <FormCheck.Label htmlFor="radio_type_product2">
                                CSV
                              </FormCheck.Label>
                            </FormCheck>
                          </div>
                        </div>
                      </div>
                      <br>
                      <div class="grid grid-cols-6 gap-4">
                        <div class="col-start-1 col-end-2 mt-2" id="label">
                          <span class="text-right"> คลังสินค้า :</span>
                        </div>
                        <div class="col-end-7 col-span-5" id="bdred">
                          <FormSelect id="">
                            <option value="">My WareHouse</option>
                          </FormSelect>
           
                        </div>
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
                                  icon="Download"
                                  class="block mx-auto w-4 h-4"
                                />
                                &nbsp; ส่งข้อมูลออก
                                <!-- <Lucide icon="Truck" class="block mx-auto w-4 h-4 ml-1" /> -->
                              </Button></a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </Disclosure>
                <!-- <Disclosure>
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Disclosure.Panel>
                </Disclosure> -->

              </Disclosure.Group>
            </div>
          </div>

          <!-- END: FAQ Content -->
        </div>
      </section>
    </div>
  </div>

  <br /><br />
</template>
<style>
@import "..//assets/css/components/Order_appp.css";
@import "..//assets/css/components/tab.scss";
@import "..//assets/css/components/tab.css";

.btn_searchcancel {
  background-color: #af0000;
  color: #fff;
}

.btn_searchcancel:hover {
  background-color: #950000;
}
</style>
