<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";
import Button from "../base-components/Button";
import Lucide from "../base-components/Lucide";

import { Dialog, Menu } from "../base-components/Headless";


const deleteConfirmationModal = ref(false);
const setDeleteConfirmationModal = (value: boolean) => {
  deleteConfirmationModal.value = value;
};
const deleteButtonRef = ref(null);
</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class=" text-lg font-bold intro-y" >
      คุณสมบัติสินค้า
    </h2>

    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="col-span-12 overflow-auto intro-y lg:overflow-visible">
        <br />
        <a href="addProductFeature">
          <Button variant="primary" class="mr-2 shadow-md" id="goldgd">
            <Lucide icon="PlusCircle" class="block mx-auto" />
            &nbsp; เพิ่มคุณสมบัติสินค้า
          </Button></a
        >
        <br /><br />

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
                  ลำดับ
                </th>

                <th
                  class=""
                  style="width: 150px; text-align: left"
                  data-col-seq="3"
                >
                  ชื่อคุณสมบัติ
                </th>

                <th
                  class=""
                  style="width: 400px; text-align: left"
                  data-col-seq="3"
                >
                  รายการคุณสมบัติสินค้า
                </th>
                <th
                  class="kv-align-center kv-align-middle"
                  style="width: 180px"
                  data-col-seq="4"
                >
                  สินค้า
                </th>
                <th
                  class="kv-align-center kv-align-middle"
                  style="width: 180px"
                  data-col-seq="4"
                >
                  ดำเนินการ
                </th>
              </tr>
            </thead>
            <tbody v-for="(item, index) in productFeatures" :key="index">
              <tr>
                <template v-if="!deletedItems.includes(item.id)">
                <td
                  class="checkOne skip-export kv-align-center kv-align-middle kv-row-select"
                  style="width: 30px"
                  data-col-seq="0"
                >
                  {{ index + 1 }}
                </td>

                <td style="text-align: left">{{ item.productFeatureName }}</td>
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
                  <span
                    v-for="(list, index) in item.productFeatureList"
                    :key="index"
                    >{{ list
                    }}<span
                      v-if="
                        index != Object.keys(item.productFeatureList).length - 1
                      "
                      >,
                    </span>
                  </span>
                </td>
                <td
                  class="kv-align-center kv-align-middle"
                  style="width: 180px"
                  data-col-seq="4"
                >
                  -
                </td>
                <td>
                  <Menu>
                    <Menu.Button :as="Button" class="px-2 !box">
                      <Lucide
                        icon="MoreVertical"
                        class="w-4 h-4 flex items-center"
                      />
                    </Menu.Button>
                    <Menu.Items class="w-40">
                      <Menu.Item>
                        <Lucide icon="Edit3" class="w-4 h-4 mr-2" />
                        <a href="editproducfetures">แก้ไขคุณสมบัติ</a>
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="Trash2" class="w-4 h-4 mr-2" />
                        <button
                          @click.prevent="
                            () => {
                              setDeleteConfirmationModal(true);
                              deleteProductFeature(item.id);
                            }
                          "
                        >
                          ลบคุณสมบัติทันที
                        </button>
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </td>
              </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- END: Data List -->
    </div>
  </div>

  <br /><br />
  <!-- BEGIN: Pagination -->
  <div
    class="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap"
    id="pagination_select"
  >
    <select name="categories" class="filter_search">
      <option value="allcategories">แสดง 20 รายการ</option>
      <option value="maincategories">แสดง 50 รายการ</option>
      <option value="subcategories">แสดง 100 รายการ</option>
    </select>
  </div>
  <!-- END: Pagination -->
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
        <div class="mb-5 text-3xl">ลบคุณสมบัติสำเร็จ!</div>
        <Button
          variant="outline-secondary"
          type="button"
          @click.prevent="deleteSuccess"
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
export default {
  data() {
    return {
      productFeatures: [] as any[],
      deletedItems: [] as any[],
      baseUrl: import.meta.env.VITE_API_URL.trim() as String
    };
  },
  methods: {
    async getAllProductFeature() {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      const inventoryId = parseInt(
        localStorage.getItem("currentInventoryId") as string
      );
      try {
        const response = await axios.post(
          `${this.baseUrl}/productFeature/getAllProductFeature`,
          { inventoryId: inventoryId },
          { headers }
        );
        this.productFeatures = response.data.data;
      } catch (err) {
        console.log(err);
        alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }
    },
    async deleteProductFeature(id: number) {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        this.productFeatures.splice(id, 1);
        const response: any = await axios.delete(
          `${this.baseUrl}/productFeature/delete/${id}`,
          { headers }
        );
        if (response.data.code === 200) {
          setSuccessModal(true);
        }
        this.deletedItems.push(id);
      } catch (err) {
        console.log(err);
        alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }
    },
    deleteSuccess() {
      setSuccessModal(false);
      this.$router.push("/dashboard/productFeature");
    },
  },
  mounted() {
    this.getAllProductFeature();
  },
};
</script>

<style>
@import "..//assets/css/components/Productfetures.css";
</style>
