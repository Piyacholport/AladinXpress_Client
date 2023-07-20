<script setup lang="ts">
import _ from "lodash";
import { ref } from "vue";
import Button from "../base-components/Button";
import Lucide from "../base-components/Lucide";
import { Dialog} from "../base-components/Headless";
const subcategory = ref(["0"]);
const editorData = ref("<p>Content of the editor.</p>");
const callConfirmationModal = ref(false);
const setCallConfirmationModal = (value: boolean) => {
  callConfirmationModal.value = value;
};
const callButtonRef = ref(null);
</script>

<template>
  <form action="">
    <div class="flex items-center mt-5 intro-y">
      <h2 class="mr-auto text-lg font-bold" id="">ลูกค้า</h2>

      <!-- <a href="addorder">
        <Button class="mr-2 shadow-md" id="goldgd">
          <Lucide icon="PlusCircle" class="block mx-auto" />
          &nbsp; เพิ่มคำสั่งซื้อ
        </Button></a
      > -->
      <div>
        <router-link
          :to="{
            name: 'editCustomer',
            params: { customerId: customer.id },
          }"
        >
          <span class="mr-2 shadow-md flex item-center justify-center" id="btn_span_delete">
            <span><Lucide icon="Edit3" class="block mx-auto" /></span>
            <span class="mt-0.5"> &nbsp; แก้ไขลูกค้า</span></span
          >
        </router-link>
      </div>

      <span
        class="mr-2 shadow-md flex item-center justify-center"
        id="btn_span_delete"
        @click="
          () => {
            setDeleteConfirmationModal(true);
          }
        "
      >
        <span><Lucide icon="Trash2" class="block mx-auto" /></span>
        <span class="mt-0.5"> &nbsp; ลบลูกค้า</span>
      </span>
    </div>
    <div class="flex items-center"></div>
    <br />
    <div class="allcontent">
      <div class="content1">
        <!-- BEGIN: content1 -->
        <div class="col-span-11 intro-y 2xl:col-span-9">
          <div class="p-5 intro-y box">
            <div
              class="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400"
            >
              <div class="grid grid-cols-2 gap-4">
                <div class="1">
                  <div class="flex items-center">
                    <!-- <span class="flex items-center">
                      <img
                        class="img-responsive previewImage"
                        src="https://cdn.pixabay.com/photo/2021/12/10/16/37/facebook-6860914__340.png"
                        alt=""
                        style="
                          width: 60px;
                          object-fit: cover;
                          height: 60px;
                          margin-top: 30px;
                        "
                      />
                    </span> -->
                    <span class="name_user">{{ customer.customerName }}</span>
                  </div>
                </div>
                <div class="">
                  <div class="grid grid-cols-12 gap-6">
                    <!-- BEGIN: General Report -->
                    <div class="col-span-12">
                      <div class="grid grid-cols-6 gap-6">
                        <div
                          class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y"
                        >
                          <div
                            :class="[
                              'relative zoom-in',
                              'before:content-[\'\'] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70',
                            ]"
                          >
                            <!-- <div class="p-5 box">
                              <div class="flex">
                                <Lucide
                                  icon="ShoppingCart"
                                  class="w-[50px] h-[50px] text-primary"
                                />
                                <div class="ml-auto">
                                  <div
                                    class="mt-4 text-5xl font-medium leading-8"
                                  >
                                    1
                                  </div>
                                </div>
                              </div>

                              <div class="mt-1 text-base text-slate-500">
                                จำนวนคำสั่งซื้อ
                              </div>
                            </div> -->
                          </div>
                        </div>
                        <div
                          class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y"
                        >
                          <div
                            :class="[
                              'relative zoom-in',
                              'before:content-[\'\'] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70',
                            ]"
                          >
                            <!-- <div class="p-5 box">
                              <div class="flex">
                                <Lucide
                                  icon="CreditCard"
                                  class="w-[50px] h-[50px] text-pending"
                                />
                                <div class="ml-auto">
                                  <div
                                    class="mt-4 text-5xl font-medium leading-8"
                                  >
                                    349
                                  </div>
                                </div>
                              </div>

                              <div class="mt-1 text-base text-slate-500">
                                ยอดสั่งซื้อ
                              </div>
                            </div> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br /><br />
      </div>
      <div class="col-span-2">
        <div class="p-5 intro-y box">
          <div
            class="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400"
          >
            <div
              class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
            >
              <Lucide icon="Users" class="w-4 h-4 mr-2" />
              ข้อมูลลูกค้า
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="col-span-1">
                <br />
                <div
                  class="
                "
                >
                  <br />

                  <div class="grid grid-cols-6 gap-4">
                    <div class="col-start-1 col-end-3 ..." id="label">
                      <span class="text-right ...">รหัสลูกค้า</span>
                    </div>
                    <div class="col-end-7 col-span-4 ..." id="bdred">
                      <p class="customer_id">{{ customer.id }}</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-6 gap-4">
                    <div class="col-start-1 col-end-3 ..." id="label">
                      <span class="text-right ...">ชื่อ-สกุล ลูกค้า :</span>
                    </div>
                    <div class="col-end-7 col-span-4 ..." id="bdred">
                      <div
                        class="
                      "
                      >
                        {{ customer.customerName }}
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-6 gap-4">
                    <div class="col-start-1 col-end-3 ..." id="label">
                      <span class="text-right ...">ชื่อโซเชียล:</span>
                    </div>
                    <div class="col-end-7 col-span-4 ..." id="bdred">
                      <div
                        class="
                      "
                      >
                        {{ customer.socialName }}
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-6 gap-4">
                    <div class="col-start-1 col-end-3 ..." id="label">
                      <span class="text-right ...">อีเมล:</span>
                    </div>
                    <div class="col-end-7 col-span-4 ..." id="bdred">
                      <div
                        class="
                      "
                      >
                        <a href="" class="email_link">
                          <div class="flex items-center">
                            <span
                              class="flex items-center justify-center w-5 h-5"
                            >
                              <Lucide icon="Mail" class="w-5 h-5 pt-1" />
                            </span>
                            <span> {{ customer.email }}</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-6 gap-4">
                    <div class="col-start-1 col-end-3 ..." id="label">
                      <span class="text-right ...">เบอร์โทรศัพท์: </span>
                    </div>
                    <div class="col-end-7 col-span-4 ..." id="bdred">
                      <div
                        class="
                      "
                      >
                        <span
                          href=""
                          class="call_link"
                          @click="
                            () => {
                              setCallConfirmationModal(true);
                            }
                          "
                        >
                          <div class="flex items-center">
                            <span
                              class="flex items-center justify-center w-5 h-5"
                            >
                              <Lucide icon="Phone" class="w-5 h-5 pt-1" />
                            </span>
                            <span> {{ customer.telephone }}</span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-6 gap-4">
                    <div class="col-start-1 col-end-3 ..." id="label">
                      <span class="text-right ...">เลขประจำตัวประชาชน :</span>
                    </div>
                    <div class="col-end-7 col-span-4 ..." id="bdred">
                      <div
                        class="
                      "
                      >
                        {{ customer.idCard }}
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-6 gap-4" id="bar_data">
                    <div class="col-start-1 col-end-3 ..." id="label">
                      <span class="text-right ...">วันที่สร้าง :</span>
                    </div>
                    <div class="col-end-7 col-span-4 ..." id="bdred">
                      <div class="flex items-center">
                        <span class="flex items-center justify-center w-5 h-5">
                          <Lucide icon="Calendar" class="w-5 h-5 pt-1" />
                        </span>
                        <span>{{ customer.createdAt }}&nbsp;</span>

                        <span class="flex items-center justify-center w-5 h-5">
                          <Lucide icon="Clock" class="w-5 h-5 pt-1" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-6 gap-4" id="bar_data">
                    <div class="col-start-1 col-end-3 ..." id="label">
                      <span class="text-right ...">วันที่แก้ไข :</span>
                    </div>
                    <div class="col-end-7 col-span-4 ..." id="bdred">
                      <div class="flex items-center">
                        <span class="flex items-center justify-center w-5 h-5">
                          <Lucide icon="Calendar" class="w-5 h-5 pt-1" />
                        </span>
                        <span>{{ customer.updatedAt }} &nbsp;</span>

                        <span class="flex items-center justify-center w-5 h-5">
                          <Lucide icon="Clock" class="w-5 h-5 pt-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- ... -->
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <!-- BEGIN: content2 -->
      <div class="content2">
        <div class="col-span-11 intro-y 2xl:col-span-9">
          <!-- BEGIN: Uplaod Product -->
          <div class="p-5 intro-y box">
            <div
              class="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400"
            >
              <div
                class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
              >
                <Lucide icon="Truck" class="w-4 h-4 mr-2" />
                ที่อยู่ลูกค้า
              </div>
              <br />
              <div
                class="
              "
              >
                <div class="grid grid-cols-6 gap-4">
                  <div class="col-start-1 col-end-2 ..." id="label">
                    <span class="text-right ...">ที่อยู่ลูกค้า :</span>
                  </div>
                  <div class="col-end-7 col-span-5 ..." id="bdred">
                    {{ customer.customerAddressDetail }}
                    {{ customer.customerDistrictName }}
                    {{ customer.customerDistrictName }}
                    {{ customer.customerCityName }}
                    {{ customer.customerProvinceName }} {{ customer.zipcode }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     <!--  <div class="content2">
        <br /><br />
        <div class="col-span-11 intro-y 2xl:col-span-9">
          <div class="p-5 intro-y box">
            <div
              class="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400"
            >
              <div
                class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
              >
                <Lucide icon="Clock" class="w-4 h-4 mr-2" />
                ประวัติการสั่งซื้อ
              </div>
              <br />
              <div
                class="
              "
              >
                <div class="ibox-content">
                  <div>
                    <div>
                      <div id="w1-container" class="">
                        <table class="">
                          <thead>
                            <tr>
                              <th data-col-seq="0" style="width: 9.22%">
                                ช่องทางการขาย
                              </th>
                              <th
                                class="text-center"
                                style="vertical-align: middle; width: 4.83%"
                                data-col-seq="1"
                              >
                                รูปภาพ
                              </th>
                              <th
                                data-col-seq="2"
                                style="width: 51.03%; text-align: left"
                              >
                                คำสั่งซื้อ
                              </th>
                              <th
                                class="text-center"
                                data-col-seq="3"
                                style="width: 6.15%"
                              >
                                สถานะ
                              </th>
                              <th
                                class="text-center"
                                data-col-seq="4"
                                style="width: 8.21%"
                              >
                                ยอดสั่งซื้อ
                              </th>
                              <th data-col-seq="5" style="width: 6.57%">
                                ผู้จัดส่ง
                              </th>
                              <th
                                class="text-center"
                                data-col-seq="6"
                                style="width: 13.92%"
                              >
                                <a
                                  class="asc"
                                  href="/customer/customer/view/85904415?sort=-dt_created&amp;_pjax=%23grid-customer-pjax"
                                  data-sort="-dt_created"
                                  >วันที่สั่งซื้อ</a
                                >
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr data-key="109832129">
                              <td
                                class="text-center"
                                style="vertical-align: middle; width: 60px"
                                data-col-seq="0"
                              >
                                <a href=""
                                  ><img
                                    class="channel-id active-channel-id"
                                    src="https://file.xcommerce.co.th/u3/master/channel_type/logo/25/fzv4vk.png"
                                    alt="142218"
                                    title="Facebook"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    style="max-width: 25px; max-height: 25px"
                                /></a>
                              </td>
                              <td
                                class="text-center"
                                style="vertical-align: middle"
                                data-col-seq="1"
                              >
                                <img
                                  class="icon"
                                  src="https://file.xcommerce.co.th/u1/43621/product/image1/jZ8K34QOiW.png"
                                  alt=""
                                  style="width: 25px"
                                />
                              </td>
                              <td
                                style="vertical-align: middle; text-align: left"
                                data-col-seq="2"
                              >
                                <a href="vieworder" target="_blank"
                                  >OD00000002</a
                                >
                              </td>
                              <td
                                class="text-center"
                                style="width: 50px; vertical-align: middle"
                                data-col-seq="3"
                              >
                                <span class="label label-warning"
                                  >ยังไม่จ่าย</span
                                >
                              </td>
                              <td
                                class="text-center"
                                style="vertical-align: middle; width: 100px"
                                data-col-seq="4"
                              >
                                <a href="vieworder">51</a>
                              </td>
                              <td
                                class="text-center"
                                style="vertical-align: middle; width: 80px"
                                data-col-seq="5"
                              >
                                <div class="order-thumbnail">
                                  <a href="vieworder"
                                    ><img
                                      class="icon"
                                      src="https://file.xcommerce.co.th/u3/master/shipper/logo/50/wuang4.png"
                                      alt=""
                                      title="Kerry Express"
                                      style="
                                        width: 50px;
                                        max-width: 50px;
                                        max-height: 50px;
                                      "
                                      data-toggle="tooltip"
                                      data-placement="top"
                                  /></a>
                                </div>
                              </td>
                              <td
                                class="text-center"
                                style="
                                  width: 165px;
                                  vertical-align: middle;
                                  width: 150px;
                                "
                                data-col-seq="6"
                              >
                                <i class="fa fa-calendar"></i> 08-03-2023
                                <i class="fa fa-clock-o"></i> 15:17:08
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </form>
  <br /><br />

  <!--M     O     D     A     L-->

  <Dialog
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
        <Lucide
          icon="AlertCircle"
          class="w-16 h-16 mx-auto mt-3 text-warning"
        />
        <div class="mt-5 text-3xl">
          โทรหาเบอร์ <span>{{ customer.telephone }}</span
          >?
        </div>
        <div class="mt-2 text-slate-500">
          <!-- หากลบหมวดหมู่นี้ ระบบจะนำสินค้าออกจากหมวดหมู่นี้โดยทันที! -->
        </div>
      </div>
      <div class="px-5 pb-8 text-center">
        <Button
          variant="danger"
          type="button"
          class="w-24 mr-2"
          ref="callButtonRef"
        >
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
  </Dialog>
  <!--M     O     D     A     L-->
  <!--M     O     D     A     L2-->
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
        <Lucide icon="AlertCircle" class="w-16 h-16 mx-auto mt-3 text-danger" />
        <div class="mt-5 text-3xl">คุณต้องการจะลบรายชื่อลูกค้านี้?</div>
        <div class="mt-2 text-slate-500">
          หากลบลูกค้านี้ ระบบจะนำลูกค้านี้ออกจากรายชื่อลูกค้าโดยทันที!
        </div>
      </div>
      <div class="px-5 pb-8 text-center">
        <Button
          variant="danger"
          type="button"
          class="w-24 mr-2"
          ref="deleteButtonRef"
          @click.prevent="confirmDelete"
        >
          ตกลง
        </Button>
        <Button
          variant="outline-secondary"
          type="button"
          @click="
            () => {
              setDeleteConfirmationModal(false);
            }
          "
          class="w-24"
        >
          ยกเลิก
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>
  <!--M     O     D     A     L2-->
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
        <div class="mb-5 text-3xl">ลบ {{ customer.customerName }} สำเร็จ!</div>
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
import { log } from "console";
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
export default {
  props: {
    customerId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      customer: {
        id: 0 as number,
        customerName: "" as string,
        socialName: "" as string,
        telephone: "" as string,
        email: "" as string,
        idCard: "" as string,
        customerProvinceName: "" as string,
        customerCityName: "" as string,
        customerDistrictName: "" as string,
        customerAddressDetail: "" as string,
        zipcode: "" as string,
        createdAt: "" as string,
        updatedAt: "" as string,
      },
      channel: [],
    };
  },
  methods: {
    //get customer by id
    async getCustomerById() {
      const getCustomer = await axios.post(
        `${import.meta.env.VITE_API_URL}/customer/getCustomerById`,
        {
          id: this.customerId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("auth._token.local")}`,
          },
        }
      );
      this.customer = getCustomer.data.data;
      this.channel = getCustomer.data.data.channel;
    },
    async confirmDelete() {
      await this.deleteCustomer(this.customerId);
      setDeleteConfirmationModal(false);
    },
    async deleteCustomer(id: number) {
      try {
        setDeleteConfirmationModal(true);
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("auth._token.local")}`,
        };
        console.log(`deleting ${id}`);
        const response: any = await axios.delete(
          `${import.meta.env.VITE_API_URL}/customer/delete/${id}`,
          { headers }
        );
        if (response.data.code == 200) {
          setSuccessModal(true);
        }
      } catch (err) {
        console.log(err);
        alert("ทำรายการไม่สำเร็จ โปรดลองอีกครั้ง");
      }
    },
    deleteSuccess() {
      setSuccessModal(false);
      this.$router.push("/dashboard/customersList");
    },
  },
  created() {
    this.getCustomerById();
  },
  mounted() {},
  destroyed() {},
};
</script>
<style>
@import "../assets/css/components/AddCategories.css";
@import "..//assets/css/components/Addproduct.css";

/*ViewCustomer */
#btn_span_delete,
#btn_edit {
  background-color: #af0000;
  color: #fff;
  border-color: none;
}
#btn_span_delete {
  margin-top: 5px;
  padding: 0.5rem 0.5rem;
  width: 120px;
  border-radius: 5px;
}
#btn_span_delete:hover,
#btn_edit:hover {
  background-color: #8b0000;
  color: white !;
  border-color: none;
  cursor: pointer;
}
#top_menu {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.name_user {
  font-weight: bold;
  font-size: 32px;
  margin-left: 45px;
  margin-top: 30px;
}
#card1,
#card2 {
  width: 300px;
  margin-right: 15px;

  border: 1px solid #af0000;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.text_align_left {
  text-align: left;
  margin-top: 50px;
}
.text_align_right {
  text-align: right;
}
#num {
  font-weight: bold;
  font-size: 40px;
}
.email_link,
.call_link {
  color: #af0000;
  cursor: pointer;
}

/*ViewCustomer */
.input_checkbox,
#w1,
#w2,
#check3,
#check2 {
  width: 20px;
  height: 20px;
  border-radius: 20px;
}

.input_checkbox:checked,
#w1:checked,
#w2:checked,
#check2:checked,
#check3:checked {
  background-color: #af0000;
}
.input_checkbox:hover,
#w1:hover,
#w2:hover,
#check2:hover,
#check3:hover {
  cursor: pointer;
  background-color: #af0000;
}
#Textarea {
  border-radius: 8px;
}
/* #Textarea:focus{
    border-radius: 8px;
    border:8px solid #af0000 !important;
} */
.customer_id {
  text-align: center;
  width: 100px;
  border-radius: 15px;
  color: #fff;
  background-color: #af0000;
}
</style>
