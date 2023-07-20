<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";

import Button from "../base-components/Button";

import { FormInput, FormSelect } from "../base-components/Form";
import Lucide from "../base-components/Lucide";

import { Dialog, Menu } from "../base-components/Headless";


// const callConfirmationModal = ref(false);
// const setCallConfirmationModal = (value: boolean) => {
//   callConfirmationModal.value = value;
// };
// const callButtonRef = ref(null);
</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class="mr-auto text-lg font-bold" id="">ลูกค้า</h2>
    <p class="mt-10 mb-0 text-lg font-medium intro-y">รายชื่อลูกค้า</p>
    <div class="grid grid-cols-12 gap-6 ">
      <div
        class="flex flex-wrap items-center col-span-12 intro-y sm:flex-nowrap"
      >
        <div class="w-full  sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
          <!-- search input -->
          
          <div class="relative w-56 text-slate-500 mt-5" id="" >
            <FormInput
              v-model="keyword"
              type="text"
              class=""
              placeholder="ค้นหาด้วยชื่อ, เบอร์โทรศัพท์ หรืออีเมล..."
              @keydown.enter="searchCustomer()"
            />
          </div>
        </div>
        <!-- BEGIN:Filter search dropdown -->
<div class="w-50 ml-2">   <FormSelect class=" sm:mr-2 " aria-label="Default select example" v-model="channelId" >
          <option value="" selected disabled>เลือกช่องทางการขาย...</option>
          <option
            v-for="(item, index) in allChannel"
            :key="index"
            :value="item.id"
          >
            {{ item.channelTitle }}
          </option>
    </FormSelect></div>
     

        <!-- <select v-model="channelId" class="filter_search ml-9">
          <option value="" selected disabled>เลือกช่องทางการขาย...</option>
          <option
            v-for="(item, index) in allChannel"
            :key="index"
            :value="item.id"
          >
            {{ item.channelTitle }}
          </option>
        </select> -->
        <!--END: Filter search dropdown -->
        <Button
          variant="primary"
          class="mr-20 shadow-md"
          id="btn_search"
          @click.prevent="searchCustomer()"
        >
          ค้นหา &nbsp;<Lucide icon="Search" class="block mx-auto" />
        </Button>
        <!--<Lucide icon="Search" class="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3" /> -->
      </div>
      <!-- BEGIN: Data List -->
      <div class="col-span-12 overflow-auto intro-y lg:overflow-visible">
        <div class="hidden mx-auto md:block text-slate-500">
          Showing 1 to 10 of 150 entries
        </div>
        <br />
        <a href="addCustomer">
          <Button variant="primary" class="mr-2 shadow-md" id="goldgd">
            <Lucide icon="PlusCircle" class="block mx-auto" />
            &nbsp; เพิ่มข้อมูลลูกค้า
          </Button></a
        >
        <br /><br />

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
                <div class="icheckbox_square-green" style="position: relative">
                  <input type="checkbox" id="checkbox1" />
                  <ins></ins>
                </div>
              </th>
              <th class="" style="width: 130px" data-col-seq="1">ช่องทางขาย</th>
              <th
                class="kv-align-center kv-align-middle"
                style="width: 150px"
                data-col-seq="2"
              >
                ชื่อโซเชียล
              </th>
              <th
                class="kv-align-left kv-align-middle"
                style="width: 200px; text-align: left"
                data-col-seq="3"
              >
                ชื่อ-สกุล
              </th>
              <th
                class="kv-align-center kv-align-middle"
                style="width: 0px"
                data-col-seq="4"
              >
                เบอร์โทรศัพท์
              </th>
              <th
                class="kv-align-center kv-align-middle"
                style="width: "
                data-col-seq="6"
              >
                อีเมล์
              </th>
              <th
                class="kv-align-center kv-align-middle"
                style="width: "
                data-col-seq="7"
              >
                วันที่สร้าง
              </th>
              <th
                class="kv-align-center kv-align-middle"
                style="width: "
                data-col-seq="8"
              >
                ดำเนินการ
              </th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in customers" :key="index">
            <tr>
              <template v-if="!deletedItems.includes(item.id)">
                <td
                  class="checkOne skip-export kv-align-center kv-align-middle kv-row-select"
                  data-col-seq="0"
                >
                  <div
                    class="icheckbox_square-green"
                    style="position: relative"
                  >
                    <input type="checkbox" id="checkbox1" /><ins></ins>
                  </div>
                </td>
                <td
                  class="kv-align-center kv-align-middle"
                  style="text-align: center"
                  data-col-seq="1"
                >
                  <!-- {{ item.channel.channelTitle }} -->
                  Facebook
                </td>
                <td
                  class="kv-align-center kv-align-middle"
                  style="padding-top: 8px"
                  data-col-seq="2"
                >
                  {{ item.socialName }}
                </td>
                <td
                  class="kv-align-left kv-align-middle"
                  style="
                    white-space: normal;
                    word-break: break-all;

                    text-align: left;
                  "
                  data-col-seq="3"
                >
                  <div>
                    <router-link
                      :to="{
                        name: 'customer',
                        params: { customerId: item.id },
                      }"
                    >
                      {{ item.customerName }}
                    </router-link>
                  </div>
                </td>
                <td class="kv-align-center kv-align-middle" data-col-seq="4">
                  <span> {{ item.telephone }}</span>
                </td>
                <td class="kv-align-center kv-align-middle" data-col-seq="6">
                  {{ item.email }}
                </td>
                <td style="width: 20%" data-col-seq="7">
                  <div class="flex items-center justify-center">
                    <Lucide icon="Calendar" class="block mx-auto" />
                    <div>{{ item.createdAt }}</div>
                  </div>
                </td>
                <td
                  class="kv-align-center kv-align-middle"
                  style="width: 10%"
                  data-col-seq="8"
                >
                  <div class="flex items-center justify-center">
                    <Menu>
                      <Menu.Button :as="Button" class="px-2 !box">
                        <span class="flex items-center justify-center w-5 h-5">
                          <Lucide icon="MoreVertical" class="w-4 h-4" />
                        </span>
                      </Menu.Button>
                      <Menu.Items class="w-40">
                        <Menu.Item>
                          <Lucide icon="Edit3" class="w-4 h-4 mr-2" />
                          <div>
                            <router-link
                              :to="{
                                name: 'editCustomer',
                                params: { customerId: item.id },
                              }"
                            >
                              แก้ไขลูกค้า
                            </router-link>
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon="Trash2" class="w-4 h-4 mr-2" />
                          <button
                            @click.prevent="
                              () => {
                                setDeleteConfirmationModal(true);
                                deleteCustomer(item.id);
                              }
                            "
                          >
                            ลบลูกค้าทันที
                          </button>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>

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
                          <div class="mb-5 text-3xl">ลบลูกค้าสำเร็จ!</div>
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
                  </div>
                </td>
              </template>
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
    <select name="categories" class="filter_search">
      <option value="allcategories">แสดง 20 รายการ</option>
      <option value="maincategories">แสดง 50 รายการ</option>
      <option value="subcategories">แสดง 100 รายการ</option>
    </select>
  </div>
  <!-- END: Pagination -->

  <!--call customer modal-->
  <!-- <Dialog
    :open="callConfirmationModal"
    @close="
      () => {
        setCallConfirmationModal(false);
      }
    "
    :initialFocus="callButtonRef"
  >
    <Dialog.Panel>
      <div class="p-5 text-center">
        <Lucide icon="AlertCircle" class="w-16 h-16 mx-auto mt-3 text-warning" />
        <div class="mt-5 text-3xl">โทรหาเบอร์ <span>0812345678</span>?</div>
      </div>
      <div class="px-5 pb-8 text-center">
        <Button variant="danger" type="button" class="w-24 mr-2" ref="callButtonRef">
          ตกลง
        </Button>
        <Button
          variant="outline-secondary"
          type="button"
          @click="
            () => {
              setCallConfirmationModal(false);
            }
          "
          class="w-24"
        >
          ยกเลิก
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog> -->
</template>

<script lang="ts">
import axios from "axios";
import { useInventory } from '../stores/inventory'
const Inventory = useInventory();
import { log } from "console";
//delete modal
const deleteConfirmationModal = ref(false);
const setDeleteConfirmationModal = (value: boolean) => {
  deleteConfirmationModal.value = value;
};
const deleteButtonRef = ref(null);

//success modal
const successModal = ref(false);
const setSuccessModal = (value: boolean) => {
  successModal.value = value;
};
export default {
  data() {
    return {
      baseUrl: `${import.meta.env.VITE_API_URL}`,
      loading: false,
      deletedItems: [] as any[],
      customers: [] as any[],
      allChannel: [] as any[],
      channelId: "",
      keyword: "",
            inventoryDetail: [] as any,
            inventoryId: Inventory.inventory[0].id 

    };
  },
  methods: {
    //     loadInventory(){
    //       const inventory = useInventory()
    //   inventory.setInventory()
    //   this.inventoryDetail = [];

    // const inventoryData  = inventory.getInventory;
    //   inventoryData.inventory.map((item: any) => {
    //   this.inventoryDetail.push(item);
    // });
    // this.inventoryId = this.inventoryDetail[0].id
    // console.log(this.inventoryDetail[0].id,',,,,,,')

    // },
    // async getAllChannel() {
    //   this.loading = true;
    //   try {
    //     const inventoryId = this.inventoryId

    //     const headers = {
    //       "Content-Type": "application/json",
    //       Authorization: `${localStorage.getItem("auth._token.local")}`,
    //     };
    //     const URL = (`${import.meta.env.VITE_API_URL}/channel/getAllChannel`).replace(" ","")
    //     const channels = await axios.post(URL, 
    //       {
    //         inventoryId: this.inventoryId,
    //       },
    //       { headers }
    //     );
    //     this.allChannel = channels.data.data;
    //   } catch (err) {
    //     console.log(err);
    //     this.loading = false;
    //     alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
    //   }
    // },
    async searchCustomer() {
      try {
        
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        const inventoryId = this.inventoryId
        //const URL = (`${import.meta.env.VITE_API_URL}/customer/search?keyword=${ this.keyword }&channelId=${this.channelId}`).replace(" ","")
        const URL = (`${import.meta.env.VITE_API_URL}/customer/search?keyword=${ this.keyword }`).replace(" ","")
       
       const customers = await axios.post(URL,
          { inventoryId: this.inventoryId },
          { headers }
        );
        this.customers = customers.data.data;
        console.log(this.customers)
      } catch (err) {
        console.log(err);
        this.loading = false;
        alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }
    },

    //section: delete customer
    async deleteCustomer(id: number) {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        console.log(`deleting ${id}`);
        this.customers.splice(id, 1);
        const URL = (`${import.meta.env.VITE_API_URL}/customer/delete/${id}`).replace(" ","")
        const response: any = await axios.delete( URL,
          { headers }
        );
        if (response.data.code === 200) {
          setSuccessModal(true);
        }
        console.log("deletedItem before", this.deletedItems);
        this.deletedItems.push(id);
        console.log("deletedItem after", this.deletedItems);
      } catch (err) {
        console.log(err);
        this.loading = false;
        alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }
    },
    deleteSuccess() {
      setSuccessModal(false);
      this.$router.push("/dashboard/customersList");
    },
  },
  mounted() {
   // this.getAllChannel();
    this.searchCustomer();
  },
    beforeMount() {
    // const inventory = useInventory()
    // inventory.setInventory()

//this.loadInventory()


  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');
@import "../assets/css/app.css";
@import "../assets/css/components/AddCategories.css";
@import "..//assets/css/components/CustomersList.css";
*{font-family: 'Kanit', sans-serif;}
#categories {
  width: 250px;
}
</style>
