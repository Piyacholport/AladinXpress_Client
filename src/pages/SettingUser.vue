<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
// import fakerData from "../utils/faker";
import Button from "../base-components/Button";
import { FormInput } from "../base-components/Form";
import Lucide from "../base-components/Lucide";

const selectMultiple = ref(["1", "3"]);
</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content">
    <h2 class=" text-lg font-bold intro-y" id="">
        ผู้ใช้งาน
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
              >เปิดใช้งาน &nbsp;
              <span
                class="text-xs px-1.5 rounded-full bg-primary text-white mr-1"
                >0</span
              >
            </label>
          </li>
          <a href="Settingsusersclose">
            <li class="" id="li_tab">
              <label for="" class="label"
                >ปิดใช้งาน &nbsp;
                <span
                  class="text-xs px-1.5 rounded-full bg-warning text-white mr-1"
                  >0</span
                >
              </label>
            </li>
          </a>
          <a href="Settingsusersblock">
            <li class="" id="li_tab">
              <label for="" class="label"
                >บล็อค &nbsp;
                <span
                  class="text-xs px-1.5 rounded-full bg-warning text-white mr-1"
                  >0</span
                >
              </label>
            </li>
          </a>
        </ul>
      </nav>

      <section>
        <div class="tab1" id="li_tab">
            <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap"
      >
        <div class="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
          <!-- search input -->
          <div class="relative text-slate-500" id="input_search">
            <FormInput
              v-model="categoryName"
              type="text"
              class="w-56 !box"
              placeholder="ค้นหาโดยรายฃะเอียดผู้ใช้งาน..."
              id="categories"
              @keydown.enter="searchCategory()"
            />
          </div>
        </div>
        <!-- BEGIN:Filter search dropdown -->
        <select
          v-model="category"
          name="categories"
          id="categories"
          class="filter_search"
        >
          <option value="all">ฝ่ายจัดการ</option>
          <option value="main">ฝ่ายการเงิน</option>
          <option value="sub">ฝ่ายขาย</option>
          <option value="sub">ฝ่ายจัดส่งสินค้า</option>
        </select>
        <!--END: Filter search dropdown -->
        <Button
          variant="primary"
          class="mr-2 shadow-md"
          id="btn_search"
          @click="searchCategory()"
        >
          ค้นหา &nbsp;<Lucide icon="Search" class="block mx-auto w-4 h-4" />
        </Button>
        <!--<Lucide icon="Search" class="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3" /> -->
      </div>
      <!-- BEGIN: Data List -->
      <div class="col-span-12 overflow-auto intro-y lg:overflow-visible">
   
        
          <Button variant="primary" class="mr-2 shadow-md" id="goldgd" disabled>
            <Lucide icon="PlusCircle" class="block mx-auto w-4 h-4" />
            &nbsp; สร้างผู้ใช้งาน
          </Button>
        <br /><br />

        <table class="table">
          <thead>
            <tr>
              <th class="text-left">ผู้ใช้งาน	</th>
              <th class="text-left">ชื่อล็อกอิน (อีเมล)	</th>
              <th>สิทธิ์การใช้งาน</th>
              <th>วันที่สร้าง</th>
              <th>ดำเนินการ</th>
            </tr>
          </thead>
          <tbody id="detail">
            <tr>
            
               <td class="text-left">ปิยะชล</td>
               <td class="text-left">Pyc@gmail.com</td>
               <td>ฝ่ายจัดการ</td>
               <td>    <div class="flex items-center justify-center">
                    <span class="flex items-center justify-center w-5 h-5">
                      <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                    </span>
                    <span>08-04-2566</span>
                  </div></td>
               <td><Button variant="secondary" class="mb-2 mr-1">
    <Lucide icon="Edit" class="w-4 h-4" />
</Button>
<Button variant="secondary" class="mb-2 mr-1">
    <Lucide icon="Trash" class="w-4 h-4" />
</Button></td>
             
            </tr>
          </tbody>
        </table>
      </div>
      <!-- END: Data List -->
    </div>
        </div>
    
      </section>
    </div>
  </div>

  <br /><br />
</template>
<script lang="ts">
import axios from "axios";
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
import { useUser } from "../stores/user";
export default {
  data() {
    return {
      baseUrl: `${import.meta.env.VITE_API_URL}`,
      categories: [] as any[],
      deletedItems: [] as any[],
      categoryName: "",
      category: "all",
      loading: false,
      currentInventoryId: localStorage.getItem("currentInventoryId") as string,
    };
  },
  methods: {
    async searchCategory() {
      this.loading = true;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      try {
        this.loading = true;
        const inventoryId = parseInt(this.currentInventoryId);
        const categories = await axios.post(
          `${import.meta.env.VITE_API_URL}category/search?categoryName=${
            this.categoryName
          }&category=${this.category}`,
          {
            inventoryId: inventoryId,
          },
          { headers }
        );
        this.loading = false;
        this.categories = categories.data.data;
      } catch (err) {
        console.log(err);
        this.loading = false;
        // alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }
    },
    async deleteCategory(id: number) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      console.log(`deleting ${id}`);
      this.categories.splice(id, 1);
      const response: any = await axios.delete(
        `${import.meta.env.VITE_API_URL}category/delete/${id}`,
        { headers }
      );
      if (response.data.code === 200) {
        setSuccessModal(true);
      }
      this.deletedItems.push(id);
    },
    deleteSuccess(){
      setSuccessModal(false);
    },
  },
  mounted() {
    this.searchCategory();
  },
};
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
