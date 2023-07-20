<script setup lang="ts">
import _ from "lodash";
import Button from "../base-components/Button";
import { FormInput, FormCheck } from "../base-components/Form";
import Lucide from "../base-components/Lucide";


</script>

<template>
  <form action="">
    <!-- BEGIN: Content -->
    <div class="content">
      <h2 class=" text-lg font-bold intro-y" id="">
        สร้างสิทธิ์การทำงาน
      </h2>
      <br /><br />
      <b>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="PlusCircle" class="w-4 h-4 mt-1" />
          </span>
          <span>สร้างสิทธิ์การทำงาน</span>
        </div>
      </b>

      <div class="forminput">
        <div class="mt-5 ml-10 mr-10">
          <FormLabel htmlFor="regular-form-1">ชื่อ</FormLabel>
          <FormInput
            id="regular-form-1"
            type="text"
            placeholder="ชื่อ"
            required="true"
          />
        </div>
        <div class="mt-5 ml-10 mr-10">
          <FormLabel htmlFor="regular-form-1">คำอธิบาย</FormLabel>
          <FormInput id="regular-form-1" type="text" placeholder="คำอธิบาย" />
        </div>
        <br />
      </div>
    </div>
    <br />
    <div class="content">
      <br />
      <b>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Settings" class="w-4 h-4 mt-1" />
          </span>
          <span> User Access</span>
        </div>
      </b>

      <div class="forminput">
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col mt-5 intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Settings" class="w-4 h-4 mt-1" />
                </span>
                <span> แผงควบคุม</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    All
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Assigned
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->

        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Settings" class="w-4 h-4 mt-1" />
                </span>
                <span> คำสั่งซื้อ</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Edit
                  </FormCheck.Label>
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Delete </FormCheck.Label>
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Cancel </FormCheck.Label>
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Complete </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Print </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Scan Barcode </FormCheck.Label>
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Send SMS </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b> </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Period 45 days </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Confirm Bank Transfer / COD
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Add Payment </FormCheck.Label>
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> COD Approve </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Create Invoice </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Create Credit Note
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Assiged </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->

        <div class="topic">
          <b>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Box" class="w-4 h-4 mt-1" />
              </span>
              <span> สินค้า</span>
            </div>
          </b>
        </div>
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span> หมวดหมู่</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Edit
                  </FormCheck.Label>
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Delete </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span> สินค้า</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Edit
                  </FormCheck.Label>
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Delete </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Show Cost </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span> บาร์โค้ด</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Customize
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->

        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Truck" class="w-4 h-4 mt-1" />
                </span>
                <span> การจัดส่ง</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Assigned
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Users" class="w-4 h-4 mt-1" />
                </span>
                <span> ลูกค้า</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Edit
                  </FormCheck.Label>
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Delete </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Assigned </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- END: Pricing Layout -->

        <div class="topic">
          <b>
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="Package" class="w-4 h-4 mt-1" />
              </span>
              <span> สต๊อกสินค้า</span>
            </div>
          </b>
        </div>
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span> สั่งซื้อสินค้า</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span> คลังสินค้า</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Edit
                  </FormCheck.Label>
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Delete </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span> ผู้ผลิต</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Edit
                  </FormCheck.Label>
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Delete </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span> สต๊อกสินค้า</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Edit
                  </FormCheck.Label>
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Cancel </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Show Cost </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span> การเคลื่อนไหวสินค้า</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span> โอน / ย้ายสินค้า</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Create
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Update
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Approve / Cancel
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span> เปลี่ยนแปลงจำนวน</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Create
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Update
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Monitor" class="w-4 h-4 mt-1" />
                </span>
                <span>ช่องทางการขาย</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Delete
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->

        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="FileText" class="w-4 h-4 mt-1" />
                </span>
                <span> รายงาน</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Inventory Summary & Status
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Purchase Summary
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Low Stock
                  </FormCheck.Label>
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Dead Stock </FormCheck.Label>
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Top Order </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b> </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Sale Order by Time Period
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Sale Summary </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Sale Order by Products
                  </FormCheck.Label>
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Product Sales by Months
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""
                    >Sales Order Cancellation
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b> </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Sales Order by Status
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Sales Order by Channel
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Sales Order by Categories
                  </FormCheck.Label>
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Sale Order by Price Range
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""
                    >Sale Orders By Province</FormCheck.Label
                  >
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b> </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Pre Order </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Staff Sales Summary
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Return Merchandise Authorization
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Sale Product By Province
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Sale Product By Month
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b> </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Top Customer </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> New Customer </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Total Customer </FormCheck.Label>
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""
                    >Sales Order by Payment Method
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Sales Order by Bank Account
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b> </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Top Bank</FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Tracking Summary
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Shipment History Report</FormCheck.Label
                  >
                </FormCheck>

                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""
                    >Shipment Drop Off Report
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Profit and Loss Statement
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b> </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    COD Export Report
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor="">
                    Flash Express Shipping Data Report
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input id="" type="checkbox" value="" />
                  <FormCheck.Label htmlFor=""> Assigned</FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Repeat" class="w-4 h-4 mt-1" />
                </span>
                <span>นำเข้า/ส่งออกข้อมูล</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Import
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Export
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span>นำเข้าข้อมูล</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Import
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Export
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span>ส่งออกข้อมูล</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Import
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Export
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Truck" class="w-4 h-4 mt-1" />
                </span>
                <span>บริการแพ็คของ - ส่งของ</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Update Tracking
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="CreditCard" class="w-4 h-4 mt-1" />
                </span>
                <span>การชำระเงิน</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Confirm
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Export
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="RotateCw" class="w-4 h-4 mt-1" />
                </span>
                <span>คำสั่งซื้อตีกลับ</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="CreditCard" class="w-4 h-4 mt-1" />
                </span>
                <span>การเงิน</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row"></div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span>หมวดหมู่</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Delete
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Add Payment
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span>รายรับ</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Delete
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Add Payment
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span>รายจ่าย</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Delete
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Add Payment
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-6"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-6">
                    Show Cost
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Monitor" class="w-4 h-4 mt-1" />
                </span>
                <span>เครื่องมือการตลาด</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row"></div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span>เว็บแคตตาล็อค</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic2">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ChevronsRight" class="w-4 h-4 mt-1" />
                </span>
                <span>เซลล์เพจ</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="User" class="w-4 h-4 mt-1" />
                </span>
                <span>บัญชีของฉัน</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <br />
      </div>
    </div>
    <br />
    <div class="content">
      <br />
      <b>
        <div class="flex items-center">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="Settings" class="w-4 h-4 mt-1" />
          </span>
          <span> Administration & Settings</span>
        </div>
      </b>

      <div class="forminput">
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="AlertCircle" class="w-4 h-4 mt-1" />
                </span>
                <span>ข้อมูลร้านค้า</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Bookmark" class="w-4 h-4 mt-1" />
                </span>
                <span>นโยบายร้านค้า</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="ShoppingCart" class="w-4 h-4 mt-1" />
                </span>
                <span> การซื้อ-ขายสินค้า</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Truck" class="w-4 h-4 mt-1" />
                </span>
                <span>การจัดส่ง</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Delete
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="CreditCard" class="w-4 h-4 mt-1" />
                </span>
                <span>การชำระเงิน</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Delete
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="User" class="w-4 h-4 mt-1" />
                </span>
                <span>สิทธิ์ของผู้ใช้งาน</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Users" class="w-4 h-4 mt-1" />
                </span>
                <span>ผู้ใช้งานระบบ</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Delete
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="FileText" class="w-4 h-4 mt-1" />
                </span>
                <span>รูปแบบเอกสาร</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Bell" class="w-4 h-4 mt-1" />
                </span>
                <span>การแจ้งเตือน</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Sliders" class="w-4 h-4 mt-1" />
                </span>
                <span>กำหนดหมายเลขเอกสาร</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Printer" class="w-4 h-4 mt-1" />
                </span>
                <span>เลือกพิมพ์เอกสาร</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Add
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Delete
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Clipboard" class="w-4 h-4 mt-1" />
                </span>
                <span>บัญชีขนส่ง</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <!-- BEGIN: Pricing Layout -->
        <div class="flex flex-col intro-y lg:flex-row">
          <div class="topic">
            <b>
              <div class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Users" class="w-4 h-4 mt-1" />
                </span>
                <span>ลูกค้า</span>
              </div>
            </b>
          </div>
          <div class="flex intro-y">
            <div class="mt-1">
              <div class="flex flex-col sm:flex-row">
                <FormCheck class="mr-2">
                  <FormCheck.Input
                    id="checkbox-switch-4"
                    type="checkbox"
                    value=""
                    class="checkbox"
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-4">
                    Full
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    View
                  </FormCheck.Label>
                </FormCheck>
                <FormCheck class="mr-2 sm:mt-0">
                  <FormCheck.Input
                    id="checkbox-switch-5"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="checkbox-switch-5">
                    Edit
                  </FormCheck.Label>
                </FormCheck>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pricing Layout -->
        <br />
      </div>
    </div>
    <br />
    <div class="text-right">
      <Button variant="danger" elevated class="w-24 mb-2 mr-1">
        ตกลง
      </Button>
      <Button as="a" variant="secondary" href="Settingsrole" class="inline-block w-24 mb-2 mr-1">
    ยกเลิก
</Button>
    </div>
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      warehouses: [] as any[],
      categories: [] as any[],
      allProductFeature: [] as any[],
      selectedProductFeature: [] as any[],
      selectedProductFeatureIndex: "",
      selectedProductFeatureValue: "",
      selectedProductType: "SIMPLE",
      warehouseId: "" as string,
      categoryId: "" as string,
      productName: "",
      productSKU: "" as any,
      productBarcode: "" as any,
      nameFeatureId: "all",
      detailFetureId: "all",
      brand: "",
      weight: "",
      length: "",
      width: "",
      height: "",
      point: "",
      shortDescription: "",
      longDescription: "",
      tag: "",
      preOrder: "",
      unitCost: "",
      unitPrice: "",
      QTY: "",
      safetyStock: "",
      images: "",
      imagesUrl: "",
    }
}}
</script>

<style>
@import "..//assets/css/components/tab.scss";
@import "..//assets/css/components/tab.css";
@import "..//assets/css/components/Deliveryofproduct.css";

.topic,
.topic2 {
  width: 200px;
}

.topic2 {
  padding-left: 50px;
}
</style>
