<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
import Button from "../base-components/Button";
import { FormInput } from "../base-components/Form";
import Lucide from "../base-components/Lucide";

import { Dialog, Menu } from "../base-components/Headless";
import Table from "../base-components/Table";


// Modal delete
const deleteConfirmationModal = ref(false);
const setDeleteConfirmationModal = (value: boolean) => {
  deleteConfirmationModal.value = value;
};
const deleteButtonRef = ref(null);

// Modal edit
const editConfirmationModal = ref(false);
const seteditConfirmationModal = (value: boolean) => {
  editConfirmationModal.value = value;
};
const editButtonRef = ref(null);

//Modal Warning
const warningModalPreview = ref(false);
const setWarningModalPreview = (value: boolean) => {
  warningModalPreview.value = value;
};

const sendButtonRef = ref(null);
</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class="mt-10 text-lg font-medium intro-y" id="head_text">คลังสินค้า</h2>
    <br />
    <hr />

    <div class="grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: Data List -->
      <div class="col-span-12 overflow-auto intro-y lg:overflow-visible">
       
          <Button variant="primary" class="mr-2 shadow-md" id="goldgd"  
          @click="
                        () => {
                         // setWarningModalPreview(true);
                          setAddWarehouse(true);

                        }
                      "
          >
            <Lucide icon="PlusCircle" class="block mx-auto w-4 h-4" />
            &nbsp; เพิ่มคลังสินค้า
          </Button>
        <br /><br />

        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>ชื่อคลังสินค้า</th>
              <th>เบอร์โทรศัพท์</th>
              <th>รายละเอียด</th>
              <th>ค่าเริ่มต้น</th>
              <th>สถานะ</th>
              <th>ช่องทางขาย</th>
              <th>สต๊อก</th>
              <th>วันที่สร้าง</th>
              <th>ดำเนินการ</th>
            </tr>
          </thead>
          <tbody id="detail">
            <tr v-for="(item,index) in warehouse" :key="index">
              <td>{{index+1}}</td>
              <td>{{item.warehouseName}}</td>
              <td>{{item.warehouseTelophone}}</td>
              <td>{{item.warehouseDescription}}</td>

              <td>
                <p
                  class="status_product text-white"
                  style="background-color: #af0000"
                >
                  <span class="flex items-center justify-center">
                    <span class="flex items-center justify-center w-5 h-5 ml-1">
                      <Lucide icon="CheckCircle" class="w-4 h-4" />
                    </span>
                    <span>ค่าเริ่มต้น </span>
                  </span>
                </p>
              </td>
              <td>
                <p
                  class="status_product text-white"
                  style="background-color: #af0000"
                >
                  <span class="flex items-center justify-center">
                    <span class="flex items-center justify-center w-5 h-5 ml-1">
                      <Lucide icon="CheckCircle" class="w-4 h-4 mt-1" />
                    </span>
                    <span>เปิด </span>
                  </span>
                </p>
              </td>
              <td>ทดสอบ</td>
              <td>
                <div class="flex items-center justify-center">
                  <span class="flex items-center justify-center w-5 h-5 mt-1">
                    <Lucide icon="Package" class="w-4 h-4" />
                  </span>
                  <span>{{item.product.length}}</span>
                </div>
              </td>

              <td>
                <div class="flex items-center justify-center">
                  <span class="flex items-center justify-center">
                    <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                  </span>
                  <span>{{ new Date(item.createdAt).toLocaleString("th-TH", { dateStyle: "short" }) }}</span>

                  <span class="flex items-center justify-center">
                    <Lucide icon="Clock" class="w-4 h-4 mt-1 ml-2" />
                  </span>
                  <span>{{ new Date(item.createdAt).toLocaleString("th-TH", { timeStyle: "short" }) }}</span>
                </div>
              </td>

              <td>
                <div class="flex items-center justify-center">
                  <Menu>
                    <Menu.Button :as="Button" class="px-2 !box">
                      <span class="flex items-center justify-center w-5 h-5">
                        <Lucide icon="MoreVertical" class="w-4 h-4" />
                      </span>
                    </Menu.Button>
                    <Menu.Items class="w-40">
                      <Menu.Item   @click="
                        () => {
                          seteditConfirmationModal(true);
                        }
                      ">
                        <Lucide icon="Edit3" class="w-4 h-4 mr-2" />
                        แก้ไขรายการ
                      </Menu.Item>
                      <Menu.Item @click="setDeleteConfirmationModal(true)">
                        <Lucide icon="Trash2" class="w-4 h-4 mr-2" /> ลบรายการ
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </div>
              </td>
              <!--M     O     D     A     L-->
              <Dialog
                :open="deleteConfirmationModal"
                @close="
                  () => {
                    setDeleteConfirmationModal(false);
                  }
                "
                :initialFocus="deleteButtonRef"
              >
                <Dialog.Panel>
                  <div class="p-5 text-center">
                    <Lucide
                      icon="AlertCircle"
                      class="w-16 h-16 mx-auto mt-3 text-danger"
                    />
                    <div class="mt-5 text-3xl">ไม่สามารถลบคลังสินค้า</div>
                    <div class="mt-2 text-slate-500">
                      กรุณาโอน/ย้ายสินค้า
                      หรือปรับจำนวนสินค้าภายในคลังสินค้านี้ก่อน
                    </div>
                  </div>
                  <div class="px-5 pb-8 text-center">
                    <Button
                      variant="danger"
                      type="button"
                      class="w-24 mr-2"
                      ref="deleteButtonRef"
                      @click="
                        () => {
                          setDeleteConfirmationModal(false);
                        }
                      "
                    >
                      ตกลง
                    </Button>
                  </div>
                </Dialog.Panel>
              </Dialog>

              <!--M     O     D     A     L-->

              <!--M     O     D     A     L2-->
              <Dialog
                :open="editConfirmationModal"
                @close="
                  () => {
                    seteditConfirmationModal(false);
                  }
                "
                :initialFocus="editButtonRef"
              >
                <Dialog.Panel>
                  <div class="p-5 text-center">
                    <Lucide
                      icon="AlertCircle"
                      class="w-16 h-16 mx-auto mt-3 text-danger"
                    />
                    <div class="mt-5 text-3xl">แก้ไขสินค้า</div>
                    <div class="mt-2 text-slate-500">
                      กรุณาโอน/ย้ายสินค้า
                      หรือปรับจำนวนสินค้าภายในคลังสินค้านี้ก่อน
                    </div>
                  </div>
                  <div class="px-5 pb-8 text-center">
                    <Button
                      variant="danger"
                      type="button"
                      class="w-24 mr-2"
                      ref="editButtonRef"
                      @click="
                        () => {
                          seteditConfirmationModal(false);
                        }
                      "
                    >
                      ตกลง
                    </Button>
                  </div>
                </Dialog.Panel>
              </Dialog>

              <!--M     O     D     A     L2-->
            </tr>
          </tbody>
        </table>
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
    <select name="warehouse" class="filter_search">
      <option value="allwarehouse">แสดง 20 รายการ</option>
      <option value="mainwarehouse">แสดง 50 รายการ</option>
      <option value="subwarehouse">แสดง 100 รายการ</option>
    </select>
  </div>
  <!-- END: Pagination -->

<!-- BEGIN: Modal Content -->
<Dialog   :open="warningModalPreview"
      @close="
        () => {
          setWarningModalPreview(false);
        }
      "
      :initialFocus="sendButtonRef">
    <Dialog.Panel>
        <div class="p-5 text-center">
            <Lucide icon="XCircle" class="w-16 h-16 mx-auto mt-3 text-warning" />
            <div class="mt-5 text-3xl">ไม่สามารถเพิ่มคลังสินค้า</div>
            <div class="mt-2 text-slate-500">เกินกำหนด กรุณาตรวจสอบแพ็คเกจ!</div>
        </div>
        <div class="px-5 pb-8 text-center">
            <Button type="button" style="background-color: #af0000; border: none; color: #fff;"  @click="
                        () => {
                          setWarningModalPreview(false);
                        }
                      " class="w-24 ">
                ตกลง
            </Button>
        </div>
        <div class="p-5 text-center border-t border-slate-200/60 dark:border-darkmode-400">
            <a href="" class="text-primary">
                อัพเกรดแพ็คเกจ?
            </a>
        </div>
    </Dialog.Panel>
</Dialog>
<Dialog   :open="addWarehouse"
      @close="
        () => {
          setAddWarehouse(false);
        }
      "
      :initialFocus="sendButtonRef">
     <Dialog.Panel class="sm:w-[600px] lg:w-[800px] container" style="height: auto;" >
     <div class="content">
          <div class="flex items-center">
            <span class="flex items-center justify-center w-5 h-5">
              <Lucide icon="FileText" class="w-4 h-4 mt-1" />
            </span>
            <span><b> เพิ่มคลังสินค้า</b> </span>
            <br /><br />

          </div>
          <hr />
            <br />

            <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3 mt-2 text-right"><b>ชื่อคลังสินค้า</b></div>
              <div class="col-span-9">
                <FormInput type="text" v-model="warehouseName" />
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3 mt-2 text-right"><b>ที่อยู่</b></div>
              <div class="col-span-9">
                 <textarea class="forminput"  v-model="warehouseAddress" ></textarea>
            </div>
          </div>
   
          <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3 mt-2 text-right"><b>เบอร์โทรศัพท์</b></div>
              <div class="col-span-9">
                <FormInput type="text" v-model="warehouseTelophone"   />
            </div>
          </div>
             <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3 mt-2 text-right"><b>รายละเอียด</b></div>
              <div class="col-span-9">
                 <textarea class="forminput" v-model="warehouseDescription"></textarea>
            </div>
          </div>
             <div class="text-center">

        <Button  class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-10 border border-green-700 rounded" @click="addWarehose()">บันทึก</Button>
</div>
       
        </div>
    </Dialog.Panel>
</Dialog>
<!-- END: Modal Content -->
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
        <div class="mb-5 text-3xl">เพิ่มคลังสินค้าสำเร็จ!</div>
        <Button
          variant="outline-secondary"
          type="button"
          @click.prevent="addSuccess"
        >
          ตกลง
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>
</template>

<script lang="ts">
import axios from "axios";
import { useInventory } from '../stores/inventory'
const Inventory = useInventory();

const successModal = ref(false);
const setSuccessModal = (value: boolean) => {
  successModal.value = value;
};
//add warehouse
const addWarehouse = ref(false);
const setAddWarehouse = (value: boolean) => {
  addWarehouse.value = value;
};
export default {
  data() {
    return {
      baseUrl: `${import.meta.env.VITE_API_URL}`,
      warehouse: [] as any[],
      deletedItems: [] as any[],
      categoryName: "",
      category: "all",
      loading: false,
    warehouseName : "",
    warehouseAddress : "",
    warehouseTelophone: "",
    warehouseDescription : "",
      inventoryId: Inventory.inventory[0].id 


    };
  },
  methods: {
  
    async addWarehose(){
try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };

        const URL = (`${import.meta.env.VITE_API_URL}/warehouse/addWarehouse`).replace(" ","")

        const response = await axios.post(
          URL,
          {
            inventoryId: this.inventoryId,
    warehouseName : this.warehouseName,
    warehouseAddress : this.warehouseAddress,
    warehouseTelophone : this.warehouseTelophone,
    warehouseDescription : this.warehouseDescription
          },
          { headers }
        );
        if (response.data.code == 200) {
          setSuccessModal(true);

      this.$router.push("/dashboard/side-menu-warehouse");
      

        }
      } catch (error) {
        console.log(error);
        //alert("ไม่สามารถเพิ่มคลังสินค้าได้ โปรดลองอีกครั้ง");
      }

    },
        addSuccess() {
      setAddWarehouse(false);
      setSuccessModal(false);
      this.getAllWarehouse();
      this.$router.push("/dashboard/side-menu-warehouse");
    },
    async getAllWarehouse() {
      this.loading = true;

      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const URL = (`${import.meta.env.VITE_API_URL}/warehouse/getAllWarehouse`).replace(" ","")


        const wh = await axios.post(URL,
          {   inventoryId: this.inventoryId },
          { headers }
        );
        this.warehouse = wh.data.data;
        console.log("channel = ", this.warehouse);
      } catch (err) {
        console.log(err);
        this.loading = false;
        alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }
    },
    async deleteWarehouse(id: number) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      console.log(`deleting ${id}`);
      this.warehouse.splice(id, 1);
        const URL = (`${import.meta.env.VITE_API_URL}/warehouse/delete/${id}`).replace(" ","")

      const response: any = await axios.delete(
        URL,
        { headers }
      );
      if (response.data.code === 200) {
        alert("ลบรายการสำเร็จ");
      }
      this.deletedItems.push(id);
    },
  },
  mounted() {
    this.getAllWarehouse()
  },

};
</script>

<style>
@import "..//assets/css/components/Transferproducts.css";
</style>
