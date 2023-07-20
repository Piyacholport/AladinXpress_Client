<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";

import Button from "../base-components/Button";
import Lucide from "../base-components/Lucide";
import { FormInput, FormSelect } from "../base-components/Form";
import { Dialog } from "../base-components/Headless";



</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class=" text-lg font-bold intro-y" id="">
      รายการสินค้า
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
              >สินค้าธรรมดา &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-primary text-white mr-1"
                >{{ simpleProducts.length }}</span
              >
            </label>
          </li>
          <li class="tab2" id="li_tab">
            <label for="tab2" class="label"
              >สินค้ามีตัวเลือก &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-warning text-white mr-1"
                >{{ configProducts.length }}</span
              >
            </label>
          </li>
          <!-- <li class="tab3" id="li_tab">
            <label for="tab3" class="label"
              >สินค้าจัดเซ็ต &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-success text-white mr-1"
                >{{ bundleProducts.length }}</span
              >
            </label>
          </li> -->
        </ul>
      </nav>
      <section>
        <!-- tab 1 -->
        <div class="tab1" id="li_tab">
          <div class="formsearch">
            <form action="">

              <FormInput 
              v-model="keyword"
              id="regular-form-1" type="text" placeholder="ชื่อสินค้า" class="w-56 h-10 mr-2"/>

              <!-- <input
                v-model="keyword"
                type="text"
                placeholder="ชื่อสินค้า"
                id="input_text_nameproduct"
              /> -->

              <select
                v-model="categoryId"
                name="categories"
                id="categories"
                class="filter_search"
              >
                <option value="" disabled selected>หมวดหมู่สินค้า</option>
                <option
                  v-for="(item, index) in allCategories"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.categoryName }}
                </option>
              </select>

              <Button
                variant="primary"
                class="mr-2 shadow-md"
                id="btn_search"
                @click.prevent="getAllProduct('SIMPLE')"
              >
                ค้นหา &nbsp;<Lucide icon="Search" class="block mx-auto" />
              </Button>
            </form>

            <br />
            <hr />
            <br />
            <div class="formmanage">
              <input type="checkbox" id="checkbox1" checked />
              <label for="checkbox1" class="text_bold"
                >&nbsp;&nbsp;ดำเนินการ</label
              >
              <br /><br />

              <a href="addProduct">
                <Button variant="primary" class="mr-2 shadow-md" id="goldgd">
                  <Lucide icon="PlusCircle" class="block mx-auto" />
                  &nbsp; เพิ่มสินค้า
                </Button></a
              >

              <a href="">
                <Button
                  variant="primary"
                  class="mr-2 shadow-md"
                  id="btn_delete"
                  @click.prevent="deleteItemsByType('SIMPLE')"
                >
                  <Lucide icon="Trash2" class="block mx-auto" />
                  &nbsp; ลบสินค้า &nbsp;
                  <span
                    class="text-sm px-1.5 rounded-full bg-dark text-white mr-1"
                    >{{ selectedSimpleDeleteId.length }}</span
                  >
                </Button></a
              >

              <!-- <a href="">
                <Button
                  variant="primary"
                  class="mr-2 shadow-md"
                  id="btn_connect"
                >
                  <Lucide icon="Share2" class="block mx-auto" />
                  &nbsp; เชื่อมต่อ&nbsp;
                  <span
                    class="text-sm px-1.5 rounded-full bg-dark text-white mr-1"
                    >3</span
                  >
                </Button></a
              >

              <a href="">
                <Button
                  variant="primary"
                  class="mr-2 shadow-md"
                  id="btn_add_cattaloge"
                >
                  <Lucide icon="PlusCircle" class="block mx-auto" />
                  &nbsp; เพิ่มลงในเว็บแคตาล็อค&nbsp;
                  <span
                    class="text-sm px-1.5 rounded-full bg-dark text-white mr-1"
                    >4</span
                  >
                </Button></a
              > -->
            </div>
            <br />
            <hr />
            <br />

            <div class="flex items-left justify-left" id="tag">
              <span class="flex items-left justify-left w-5 h-5">
                <Lucide icon="Tag" class="w-5 h-5" />
              </span>
              <span class="text_bold">&nbsp;&nbsp;แท็ก</span>
            </div>
          </div>
          <br />

          <!-- table product -->
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <table
              class="table-custom m-b-none kv-grid-table table table-bordered table-striped kv-table-wrap"
            >
              <thead>
                <tr>
                  <th
                    class="checkAll kv-all-select kv-align-center kv-align-middle skip-export"
                    style="width: 30px"
                    data-col-seq="0"
                  >
                    <div
                      class="icheckbox_square-green"
                      style="position: relative"
                    >
                      <input type="checkbox" id="checkbox1" />
                      <ins></ins>
                    </div>
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 80px"
                    data-col-seq="1"
                  >
                    ช่องทาง
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 60px"
                    data-col-seq="2"
                  >
                    รูปภาพ
                  </th>
                  <th
                    class="text-left"
                    style="width: 700px"
                    data-col-seq="3"
                  >
                    ชื่อสินค้า
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 180px"
                    data-col-seq="4"
                  >
                    แท็ก
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 120px"
                    data-col-seq="6"
                  >
                    ราคาขาย
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 12%"
                    data-col-seq="7"
                  >
                    วันที่สร้าง
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 12%"
                    data-col-seq="8"
                  >
                    วันที่แก้ไข
                  </th>
                </tr>
              </thead>
              <tbody v-for="(item, index) in simpleProducts" :key="index">
                <tr :data-key="item.id">
                  <template v-if="!deletedSimpleItems.includes(item.id)">
                    <td
                      class="checkOne skip-export kv-align-center kv-align-middle kv-row-select"
                      style="width: 30px"
                      data-col-seq="0"
                    >
                      <div
                        class="icheckbox_square-green"
                        style="position: relative"
                      >
                        <input
                          v-model="selectedSimpleDeleteId"
                          type="checkbox"
                          id="checkbox1"
                          :value="item.id"
                        /><ins></ins>
                      </div>
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="width: 80px"
                      data-col-seq="1"
                    >
                      System
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="padding-top: 8px"
                      data-col-seq="2"
                    >
                      <img
                        class="img-responsive previewImage"
                        :src="baseUrl + '/uploads/' + item.images"
                        alt=""
                        style="
                          width: 25px;
                          object-fit: cover;
                          height: 25px;
                          margin: 0 auto;
                        "
                        data-href="https://file.xcommerce.co.th/u1/default.png"
                      />
                    </td>
                    <td
                      class="kv-align-left kv-align-middle"
                      style="
                        white-space: normal;
                        word-break: break-all;
                        width: 600px;
                        text-align: left;
                      "
                      data-col-seq="3"
                    >
                      <router-link
                        :to="{
                          name: 'product',
                          params: { productId: item.id },
                        }"
                      >
                        {{ item.productName }}
                      </router-link>
                      <div class="small m-t-xs">
                        <span class="m-r-xs m-t-xs"
                          ><span class="m-r-xs" style="font-weight: bolder"
                            >SKU:</span
                          ><span style="font-weight: lighter">{{
                            item.productSKU
                          }}</span></span
                        >
                      </div>
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="width: 180px"
                      data-col-seq="4"
                    >
                      -
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="width: 120px"
                      data-col-seq="6"
                    >
                      {{ item.unitPrice }}
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="width: 12%"
                      data-col-seq="7"
                    >
                      <div data-pjax="0">
                        <i class="fa fa-calendar"></i> {{ item.createdAt }}
                      </div>
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="width: 12%"
                      data-col-seq="8"
                    >
                      <div data-pjax="0">
                        <i class="fa fa-calendar"></i> {{ item.updatedAt }}
                      </div>
                    </td>
                  </template>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- end tab 1 -->

        <!-- tab 2 -->
        <div class="tab2" id="li_tab">
          <div class="formsearch">
            <form action="">
              <input
                v-model="keyword"
                type="text"
                placeholder="ชื่อสินค้า"
                id="input_text_nameproduct"
              />

              <select
                v-model="categoryId"
                name="categories"
                id="categories"
                class="filter_search"
              >
                <option value="" disabled selected>หมวดหมู่สินค้า</option>
                <option
                  v-for="(item, index) in allCategories"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.categoryName }}
                </option>
              </select>

              <Button
                variant="primary"
                class="mr-2 shadow-md"
                id="btn_search"
                @click.prevent="getAllProduct('CONFIG')"
              >
                ค้นหา &nbsp;<Lucide icon="Search" class="block mx-auto" />
              </Button>
            </form>

            <br />
            <hr />
            <div class="selectfetures mb-5 ml-0">
            </div>
            <div class="formmanage">
              <input type="checkbox" id="checkbox1" checked />
              <label for="checkbox1" class="text_bold"
                >&nbsp;&nbsp;ดำเนินการ</label
              >
              <br /><br />

              <a href="addProduct">
                <Button variant="primary" class="mr-2 shadow-md" id="goldgd">
                  <Lucide icon="PlusCircle" class="block mx-auto" />
                  &nbsp; เพิ่มสินค้า
                </Button></a
              >

              <a href="">
                <Button
                  variant="primary"
                  class="mr-2 shadow-md"
                  id="btn_delete"
                  @click.prevent="deleteItemsByType('CONFIG')"
                >
                  <Lucide icon="Trash2" class="block mx-auto" />
                  &nbsp; ลบสินค้า &nbsp;
                  <span
                    class="text-sm px-1.5 rounded-full bg-dark text-white mr-1"
                    >{{ selectedConfigDeleteId.length }}</span
                  >
                </Button></a
              >

              <!-- <a href="">
                <Button
                  variant="primary"
                  class="mr-2 shadow-md"
                  id="btn_connect"
                >
                  <Lucide icon="Share2" class="block mx-auto" />
                  &nbsp; เชื่อมต่อ&nbsp;
                  <span
                    class="text-sm px-1.5 rounded-full bg-dark text-white mr-1"
                    >3</span
                  >
                </Button></a
              >

              <a href="">
                <Button
                  variant="primary"
                  class="mr-2 shadow-md"
                  id="btn_add_cattaloge"
                >
                  <Lucide icon="PlusCircle" class="block mx-auto" />
                  &nbsp; เพิ่มลงในเว็บแคตาล็อค&nbsp;
                  <span
                    class="text-sm px-1.5 rounded-full bg-dark text-white mr-1"
                    >4</span
                  >
                </Button></a
              > -->
            </div>
            <br />
            <hr />
            <br />

            <div class="flex items-left justify-left" id="tag">
              <span class="flex items-left justify-left w-5 h-5">
                <Lucide icon="Tag" class="w-5 h-5" />
              </span>
              <span class="text_bold">&nbsp;&nbsp;แท็ก</span>
            </div>
          </div>
          <br />

          <!-- table product -->
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <table
              class="table-custom m-b-none kv-grid-table table table-bordered table-striped kv-table-wrap"
            >
              <thead>
                <tr>
                  <th
                    class="checkAll kv-all-select kv-align-center kv-align-middle skip-export"
                    style="width: 30px"
                    data-col-seq="0"
                  >
                    <div
                      class="icheckbox_square-green"
                      style="position: relative"
                    >
                      <input type="checkbox" id="checkbox1" />
                      <ins></ins>
                    </div>
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 80px"
                    data-col-seq="1"
                  >
                    ช่องทาง
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 60px"
                    data-col-seq="2"
                  >
                    รูปภาพ
                  </th>
                  <th
                    class="text-left"
                    style="width: 700px"
                    data-col-seq="3"
                  >
                    ชื่อสินค้า
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 180px"
                    data-col-seq="4"
                  >
                    แท็ก
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 120px"
                    data-col-seq="6"
                  >
                    ราคาขาย
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 12%"
                    data-col-seq="7"
                  >
                    วันที่สร้าง
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 12%"
                    data-col-seq="8"
                  >
                    วันที่แก้ไข
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 12%"
                    data-col-seq="8"
                  >
                    ตัวเลือก
                  </th>
                </tr>
              </thead>
              <tbody v-for="(item, index) in configProducts" :key="index">
                <tr :data-key="item.id">
                  <template v-if="!deletedConfigItems.includes(item.id)">
                    <td
                      class="checkOne skip-export kv-align-center kv-align-middle kv-row-select"
                      style="width: 30px"
                      data-col-seq="0"
                    >
                      <div
                        class="icheckbox_square-green"
                        style="position: relative"
                      >
                        <input
                          v-model="selectedConfigDeleteId"
                          type="checkbox"
                          id="checkbox1"
                          :value="item.id"
                        /><ins></ins>
                      </div>
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="width: 80px"
                      data-col-seq="1"
                    >
                      System
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="padding-top: 8px"
                      data-col-seq="2"
                    >
                      <img
                        class="img-responsive previewImage"
                        :src="baseUrl + '/' + item.images"
                        alt=""
                        style="
                          width: 25px;
                          object-fit: cover;
                          height: 25px;
                          margin: 0 auto;
                        "
                        data-href="https://file.xcommerce.co.th/u1/default.png"
                      />
                    </td>
                    <td
                      class="kv-align-left kv-align-middle"
                      style="
                        white-space: normal;
                        word-break: break-all;
                        width: 600px;
                        text-align: left;
                      "
                      data-col-seq="3"
                    >
                      <router-link
                        :to="{
                          name: 'product',
                          params: { productId: item.id },
                        }"
                      >
                        {{ item.productName }}
                      </router-link>
                      <div class="small m-t-xs">
                        <span class="m-r-xs m-t-xs"
                          ><span class="m-r-xs" style="font-weight: bolder"
                            >SKU:</span
                          ><span style="font-weight: lighter">{{
                            item.productSKU
                          }}</span></span
                        >
                      </div>
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="width: 180px"
                      data-col-seq="4"
                    >
                      -
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="width: 120px"
                      data-col-seq="6"
                    >
                      {{ item.unitPrice }}
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="width: 12%"
                      data-col-seq="7"
                    >
                      <div data-pjax="0">
                        <i class="fa fa-calendar"></i> {{ item.createdAt }}
                      </div>
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="width: 12%"
                      data-col-seq="8"
                    >
                      <div data-pjax="0">
                        <i class="fa fa-calendar"></i> {{ item.updatedAt }}
                      </div>
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="width: 12%"
                      data-col-seq="8"
                    >
                      <div data-pjax="0">คุณสมบัติสินค้า</div>
                    </td>
                  </template>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- tab 3 -->
        <div class="tab3" id="li_tab">
          <div class="formsearch">
            <form action="">
              <input
                v-model="keyword"
                type="text"
                placeholder="ชื่อสินค้า"
                id="input_text_nameproduct"
              />

              <select
                v-model="categoryId"
                name="categories"
                id="categories"
                class="filter_search"
              >
                <option value="" disabled selected>หมวดหมู่สินค้า</option>
                <option
                  v-for="(item, index) in allCategories"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.categoryName }}
                </option>
              </select>

              <Button
                variant="primary"
                class="mr-2 shadow-md"
                id="btn_search"
                @click.prevent="getAllProduct('BUNDLE')"
              >
                ค้นหา &nbsp;<Lucide icon="Search" class="block mx-auto" />
              </Button>
            </form>

            <br />
            <hr />
            <br />
            <div class="formmanage">
              <input type="checkbox" id="checkbox1" checked />
              <label for="checkbox1" class="text_bold"
                >&nbsp;&nbsp;ดำเนินการ</label
              >
              <br /><br />

              <a href="addProduct">
                <Button variant="primary" class="mr-2 shadow-md" id="goldgd">
                  <Lucide icon="PlusCircle" class="block mx-auto" />
                  &nbsp; เพิ่มสินค้า
                </Button></a
              >

              <a href="">
                <Button
                  variant="primary"
                  class="mr-2 shadow-md"
                  id="btn_delete"
                  @click.prevent="deleteItemsByType('BUNDLE')"
                >
                  <Lucide icon="Trash2" class="block mx-auto" />
                  &nbsp; ลบสินค้า &nbsp;
                  <span
                    class="text-sm px-1.5 rounded-full bg-dark text-white mr-1"
                    >{{ selectedBundleDeleteId.length }}</span
                  >
                </Button></a
              >
<!-- 
              <a href="">
                <Button
                  variant="primary"
                  class="mr-2 shadow-md"
                  id="btn_connect"
                >
                  <Lucide icon="Share2" class="block mx-auto" />
                  &nbsp; เชื่อมต่อ&nbsp;
                  <span
                    class="text-sm px-1.5 rounded-full bg-dark text-white mr-1"
                    >3</span
                  >
                </Button></a
              >

              <a href="">
                <Button
                  variant="primary"
                  class="mr-2 shadow-md"
                  id="btn_add_cattaloge"
                >
                  <Lucide icon="PlusCircle" class="block mx-auto" />
                  &nbsp; เพิ่มลงในเว็บแคตาล็อค&nbsp;
                  <span
                    class="text-sm px-1.5 rounded-full bg-dark text-white mr-1"
                    >4</span
                  >
                </Button></a
              > -->
            </div>
            <br />
            <hr />
            <br />

            <div class="flex items-left justify-left" id="tag">
              <span class="flex items-left justify-left w-5 h-5">
                <Lucide icon="Tag" class="w-5 h-5" />
              </span>
              <span class="text_bold">&nbsp;&nbsp;แท็ก</span>
            </div>
          </div>
          <br />

          <!-- table product -->
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <table
              class="table-custom m-b-none kv-grid-table table table-bordered table-striped kv-table-wrap"
            >
              <thead>
                <tr>
                  <th
                    class="checkAll kv-all-select kv-align-center kv-align-middle skip-export"
                    style="width: 30px"
                    data-col-seq="0"
                  >
                    <div
                      class="icheckbox_square-green"
                      style="position: relative"
                    >
                      <input type="checkbox" id="checkbox1" />
                      <ins></ins>
                    </div>
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 80px"
                    data-col-seq="1"
                  >
                    ช่องทาง
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 60px"
                    data-col-seq="2"
                  >
                    รูปภาพ
                  </th>
                  <th
                    class="text-left"
                    style="width: 700px"
                    data-col-seq="3"
                  >
                    ชื่อสินค้า
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 100px"
                    data-col-seq="4"
                  >
                    ราคาเซ็ต
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 100px"
                    data-col-seq="6"
                  >
                    สินค้าในเซ็ต
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 12%"
                    data-col-seq="7"
                  >
                    วันที่สร้าง
                  </th>
                  <th
                    class="kv-align-center kv-align-middle"
                    style="width: 12%"
                    data-col-seq="8"
                  >
                    วันที่แก้ไข
                  </th>
                </tr>
              </thead>
              <tbody v-for="(item, index) in bundleProducts" :key="index">
                <tr :data-key="item.id">
                  <template v-if="!deletedBundleItems.includes(item.id)">
                    <td
                      class="checkOne skip-export kv-align-center kv-align-middle kv-row-select"
                      style="width: 30px"
                      data-col-seq="0"
                    >
                      <div
                        class="icheckbox_square-green"
                        style="position: relative"
                      >
                        <input
                          v-model="selectedBundleDeleteId"
                          type="checkbox"
                          id="checkbox1"
                          :value="item.id"
                        /><ins></ins>
                      </div>
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="width: 80px"
                      data-col-seq="1"
                    >
                      System
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="padding-top: 8px"
                      data-col-seq="2"
                    >
                      <img
                        class="img-responsive previewImage"
                        :src="baseUrl + '/uploads/' + item.images"
                        alt=""
                        style="
                          width: 25px;
                          object-fit: cover;
                          height: 25px;
                          margin: 0 auto;
                        "
                        data-href="https://file.xcommerce.co.th/u1/default.png"
                      />
                    </td>
                    <td
                      class="kv-align-left kv-align-middle"
                      style="
                        white-space: normal;
                        word-break: break-all;
                        width: 600px;
                        text-align: left;
                      "
                      data-col-seq="3"
                    >
                      <router-link
                        :to="{
                          name: 'product',
                          params: { productId: item.id },
                        }"
                      >
                        {{ item.productName }}
                      </router-link>
                      <div class="small m-t-xs">
                        <span class="m-r-xs m-t-xs"
                          ><span class="m-r-xs" style="font-weight: bolder"
                            >SKU:</span
                          ><span style="font-weight: lighter">{{
                            item.productSKU
                          }}</span></span
                        >
                      </div>
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="width: 180px"
                      data-col-seq="4"
                    >
                      -
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="width: 120px"
                      data-col-seq="6"
                    >
                      {{ item.unitPrice }}
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="width: 12%"
                      data-col-seq="7"
                    >
                      <div data-pjax="0">
                        <i class="fa fa-calendar"></i> {{ item.createdAt }}
                      </div>
                    </td>
                    <td
                      class="kv-align-center kv-align-middle"
                      style="width: 12%"
                      data-col-seq="8"
                    >
                      <div data-pjax="0">
                        <i class="fa fa-calendar"></i> {{ item.updatedAt }}
                      </div>
                    </td>
                  </template>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>

  <br /><br />
  <!-- BEGIN: Pagination -->
  <select name="categories" id="pagination_select" class="filter_search">
    <option value="20">แสดง 20 รายการ</option>
    <option value="50">แสดง 50 รายการ</option>
    <option value="100">แสดง 100 รายการ</option>
  </select>

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
        <div class="mb-5 text-3xl">ลบสินค้าสำเร็จ!</div>
        <Button
          variant="outline-secondary"
          type="button"
          @click.prevent="deleteSuccess()"
        >
          ตกลง
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>
</template>

<script lang="ts">
import axios from "axios";
//success modal
const successModal = ref(false);
const setSuccessModal = (value: boolean) => {
  successModal.value = value;
};

import { useInventory } from '../stores/inventory'
const Inventory = useInventory();

export default {
  data() {
    return {
      baseUrl: `${import.meta.env.VITE_API_URL.trim()}`,
      allCategories: [] as any[],
      allNamefetures: [] as any[],
      allDatailfetures: [] as any[],
      keyword: "",
      simpleProducts: [] as any[],
      configProducts: [] as any[],
      bundleProducts: [] as any[],
      categoryId: "all",
      namefetureId: "all",
      detailfetureId: "all",
      select: [] as any[],

      //delete part
      selectedSimpleDeleteId: [],
      selectedConfigDeleteId: [],
      selectedBundleDeleteId: [],
      deletedSimpleItems: [] as any[],
      deletedConfigItems: [] as any[],
      deletedBundleItems: [] as any[],
            inventoryId: Inventory.inventory[0].id 
    };
  },
  methods: {
    //get all category
    async getAllCategory() {
      const inventoryId: number = parseInt(
        localStorage.getItem("currentInventoryId") as string
      );
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };

        const URL =  `${
          this.baseUrl
        }/category/search?categoryName=&category=all`.replace(
          " ",
          ""
        );

      const categories = await axios.post(
       URL,
        {
          inventoryId: this.inventoryId,
        },
        { headers }
      );
      this.allCategories = categories.data.data;
      console.log("all cat =", this.allCategories);
    },

    //get all product
    async getAllProduct(type: any) {
      const inventoryId: number = parseInt(
        localStorage.getItem("currentInventoryId") as string
      );
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
        const URL =  `${import.meta.env.VITE_API_URL}/product/search?keyword=${
          this.keyword
        }&categoryId=${this.categoryId}&productType=${type}`.replace(
          " ",
          ""
        );
      const products = await axios.post(URL
       ,
        {
          inventoryId:  this.inventoryId,
        },
        { headers }
      );
      switch (type) {
        case "SIMPLE":
          this.simpleProducts = products.data.data;
          break;
        case "CONFIG":
          this.configProducts = products.data.data;
          break;
        case "BUNDLE":
          this.bundleProducts = products.data.data;
          break;
      }
    },
    //delete items
    async deleteItems(arr: []) {
      try {

        const URL = `${import.meta.env.VITE_API_URL}/product/deletes`.replace(
          " ",
          ""
        );

        const response = await axios.delete(
          URL,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${localStorage.getItem("auth._token.local")}`,
            },
            data: {
              ids: arr,
            },
          }
        );
      } catch (e) {
        alert(e);
      }
    },
    async deleteItemsByType(type: string) {
      switch (type) {
        case "SIMPLE":
          await this.deleteItems(this.selectedSimpleDeleteId as []);
          this.deletedSimpleItems.push(this.selectedSimpleDeleteId);
          setSuccessModal(true);
          this.getAllProduct("SIMPLE");
          break;
        case "CONFIG":
          await this.deleteItems(this.selectedConfigDeleteId as []);
          this.deletedConfigItems.push(this.selectedConfigDeleteId);
          setSuccessModal(true);
          this.getAllProduct("CONFIG");
          break;
        case "BUNDLE":
          await this.deleteItems(this.selectedBundleDeleteId as []);
          this.deletedBundleItems.push(this.selectedBundleDeleteId);
          setSuccessModal(true);
          this.getAllProduct("BUNDLE");
          break;
      }
    },
    deleteSuccess() {
      setSuccessModal(false);
    },
  },
  mounted() {
    this.getAllCategory();
    this.getAllProduct("SIMPLE");
    this.getAllProduct("CONFIG");
    this.getAllProduct("BUNDLE");
  },
};
</script>
<style>
@import "..//assets/css/components/Categories.css";
@import "..//assets/css/components/tab.scss";
@import "..//assets/css/components/tab.css";
</style>
