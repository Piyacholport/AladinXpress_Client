<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
import Button from "../../base-components/Button";
import { FormInput, FormSelect } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";
import TinySlider, {
  TinySliderElement,
} from "../../base-components/TinySlider";


const salesReportFilter = ref<string>("");
const importantNotesRef = ref<TinySliderElement>();
provide("bind[importantNotesRef]", (el: TinySliderElement) => {
  importantNotesRef.value = el;
});

const deleteConfirmationModal = ref(false);
const setDeleteConfirmationModal = (value: boolean) => {
  deleteConfirmationModal.value = value;
};
const deleteButtonRef = ref(null);

//date
const date = ref("");
const daterange = ref("");
const datepickerModalPreview = ref(false);
const setDatepickerModalPreview = (value: boolean) => {
  datepickerModalPreview.value = value;
};
const cancelButtonRef = ref(null);
</script>

<template>
  <!-- BEGIN: Content -->
  <div class="content mt-5">
    <h2 class=" text-lg font-medium intro-y" id="head_text">
      รายชื่อผู้สมัคร
    </h2>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap"
      >
        <div class="formsearch">
          <FormInput
            type="text"
            placeholder="ค้นหา..."
            class="w-60"
            v-model="paramsQuery.keyword"
            @keydown.enter.prevent="search"
          />

          <!-- <div class="relative w-30 ">
    <div class="absolute flex items-center justify-center w-10 h-9 mt-1 border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
        <Lucide icon="Calendar" class="w-4 h-4" />
    </div> -->
          <!-- <Litepicker
                v-model="salesReportFilter"
                :options="{
                  autoApply: false,
                  singleMode: false,
                  numberOfColumns: 2,
                  numberOfMonths: 2,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true,
                  },
                }"
                class="pl-10 sm:w-65 "
            /> -->
          <!-- </div> -->

          <!-- <span class="ml-3">
              <Lucide
                  icon="Calendar"
                  class="absolute w-4 h-4  ml-3 " />
              <Litepicker
                v-model="salesReportFilter"
                :options="{
                  autoApply: false,
                  singleMode: false,
                  numberOfColumns: 2,
                  numberOfMonths: 2,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true,
                  },
                }"
                class="pl-10 sm:w-56 !box"
            /></span> -->

          <Button
            variant="primary"
            class="shadow-md"
            id="btn_search"
            @click="search"
          >
            ค้นหา &nbsp;
            <Lucide icon="Search" class="block mx-auto" />
          </Button>

          <Button variant="primary" class="shadow-md" id="btn_search_filter">
            ค้นหาแบบละเอียด &nbsp;
            <Lucide icon="BarChart2" class="block mx-auto" />
          </Button>

          <br />
          <hr />
          <br />
          <div class="mr-3">
            <a href="AddmemberList">
              <Button variant="primary" class="mr-2 shadow-md" id="goldgd">
                <Lucide icon="PlusCircle" class="block mx-auto w-4 h-4" />
                &nbsp; เพิ่มรายชื่อ
              </Button></a
            >
          </div>
          <br />
        </div>
        <!--<Lucide icon="Search" class="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3" /> -->
      </div>
    </div>
    <div class="pc-tab">
      <input checked class="checked" id="tab1" type="radio" name="pct" />
      <input id="tab2" type="radio" name="pct" />

      <nav>
        <ul class="ul">
          <li
            v-for="tab in countViewpoint"
            :key="tab.value"
            @click="setActive(tab.value)"
            :class="tab.refValue"
            id="li_tab"
          >
            <label :for="tab.refValue" class="label"
              >{{ tab.name }} &nbsp;
              <span
                :class="[
                  'text-xs px-1.5 rounded-full text-white mr-1',
                  tab.badgeStyle,
                ]"
                >{{ tab.itemCount }}</span
              >
            </label>
          </li>
        </ul>
      </nav>

      <section>
        <div
          id="li_tab"
          :class="['', activeTab == 'ALLUSER' ? 'tab2' : 'tab1']"
        >
          <br />
          <div id="allTab-container" class="table-responsive kv-grid-container">
            <div class="table-list">
              <div class="overflow-x-auto">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>ลำดับ</th>
                      <th class="text-left">วันที่</th>
                      <th>ID</th>
                      <th>ชื่อ-สกุล</th>
                      <th>อีเมล</th>
                      <th>โทรศัพท์</th>
                      <th>แพ็คเกจ</th>
                      <th>ช่องทางการชำระ</th>
                      <th>สถานะ</th>
                      <th>ยอดชำระ</th>
                      <th>แก้ไข</th>
                    </tr>
                  </thead>

                  <tbody v-if="userLists.length">
                    <tr v-for="(item, index) in userLists" :key="index">
                      <!-- <tr v-for="(item, index) in productItems" :key="index"> -->

                      <td>{{ index == 0 ? 1 : index + 1 }}</td>
                      <td class="date">
                        <div class="flex items-center justify-center">
                          <span class="flex items-center justify-center">
                            <Lucide icon="Calendar" class="w-4 h-4 mt-1" />
                          </span>
                          <span>
                            {{
                              new Date(item.createdAt).toLocaleString("th-TH", {
                                dateStyle: "short",
                              })
                            }}
                          </span>

                          <span class="flex items-center justify-center">
                            <Lucide icon="Clock" class="w-4 h-4 mt-1 ml-2" />
                          </span>
                          <span>
                            {{
                              new Date(item.createdAt).toLocaleString("th-TH", {
                                timeStyle: "short",
                              })
                            }}
                          </span>
                        </div>
                      </td>
                      <td>0000{{ item.id }}</td>
                      <td>{{ item.fullName }}</td>
                      <td>{{ item.email }}</td>
                      <td>{{ item.phone }}</td>
                      <td>{{ item.package }}</td>
                      <td>โอนผ่านธนาคาร</td>
                      <td>
                        <p class="bg-success text-white rounded-md">
                          ชำระเเล้ว
                        </p>
                      </td>
                      <td>2,499 ฿</td>
                      <td>
                        <div class="flex items-center justify-center">
                          <a href="Viewmember">
                            <span
                              class="btn_manage_order flex items-center justify-center mr-2"
                            >
                              <Lucide icon="Eye" class="w-5 h-5 mt-1" /> </span
                          ></a>
                          <a href="Editmember">
                            <span
                              class="btn_manage_order flex items-center justify-center"
                            >
                              <Lucide icon="Edit" class="w-5 h-5 mt-1" /> </span
                          ></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <div v-else>
                    <br />
                  </div>
                  <thead>
                    <tr class="op6">
                      <th>ลำดับ</th>
                      <th class="text-left">วันที่</th>
                      <th>ID</th>
                      <th>ชื่อ-สกุล</th>
                      <th>อีเมล</th>
                      <th>โทรศัพท์</th>
                      <th>แพ็คเกจ</th>
                      <th>การชำระ</th>
                      <th>สถานะ</th>
                      <th>ยอดชำระ</th>
                      <th>แก้ไข</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <br /><br />
  <!-- BEGIN: Pagination -->
  <div
    class="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap"
    id="pagination_select"
  >
    <select
      name="categories"
      class="filter_search"
      v-model="paramsQuery.limit"
      @change="handleSelectLimit"
    >
      <option value="20">แสดง 20 รายการ</option>
      <option value="50">แสดง 50 รายการ</option>
      <option value="100">แสดง 100 รายการ</option>
      <option value="150">แสดง 150 รายการ</option>
      <option value="200">แสดง 200 รายการ</option>
      <option value="250">แสดง 250 รายการ</option>
    </select>
  </div>
  <!-- END: Pagination -->
</template>

<script lang="ts">
import axios from "axios";
import moment from "moment";
import { OrderType } from "../../models/orders.model";
export default {
  data() {
    return {
      categories: [] as any[],
      deletedItems: [] as any[],
      userLists: [] as any[],
      categoryName: "",
      category: "all",
      loading: false,
      productItems: [] as OrderType[],
      activeTab: "NEWUSER",
      countViewpoint: [
        {
          name: "รายชื่อสมัครใหม่",
          value: "NEWUSER",
          itemCount: 0,
          badgeStyle: "bg-primary",
          refValue: "tab1",
        },
        {
          name: "รายชื่อทั้งหมด",
          value: "ALLUSER",
          itemCount: 0,
          badgeStyle: "bg-warning",
          refValue: "tab2",
        },
      ],
      paramsQuery: {
        keyword: "",
        startDate: "",
        endDate: "",
        viewpoint: "NEWUSER",
        page: 1,
        limit: 20,
      },
    };
  },
  methods: {
    setActive(value: any) {
      this.paramsQuery.keyword = "";
      this.paramsQuery.page = 1;
      this.paramsQuery.startDate = "";
      this.paramsQuery.endDate = "";
      this.paramsQuery.viewpoint = value ? value : this.activeTab;
      this.activeTab = value ? value : this.activeTab;
      this.getUserLists(this.paramsQuery);
    },
    formatDate(date: string) {
      if (date) {
        return moment(String(date)).format("DD-MM-YYYY");
      }
    },
    async getUserLists(queryString: any) {
      let response = null;
      const params = new URLSearchParams(Object.entries(queryString));
      const setQuerystring = "?" + params.toString();
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      const URL = (
        `${import.meta.env.VITE_API_URL}/user/getUserList` + setQuerystring
      ).replace(" ", "");
      response = await axios.get(URL, { headers });

      this.userLists = response.data.user;
      this.countViewpoint[0].itemCount =
        response.data.count_viewpoints[0].new_user;
      this.countViewpoint[1].itemCount =
        response.data.count_viewpoints[0].all_user;
    },
    search() {
      this.getUserLists(this.paramsQuery);
    },
    handleSelectLimit() {
      this.getUserLists(this.paramsQuery);
    },
  },
  mounted() {
    this.getUserLists(this.paramsQuery);
  },
};
</script>

<style>
@import "../../assets/css/components/tab.scss";
@import "../../assets/css/components/tab.css";
@import "../../assets/css/components/Deliveryofproduct.css";
</style>
