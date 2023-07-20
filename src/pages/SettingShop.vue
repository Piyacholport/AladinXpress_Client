<script setup lang="ts">
import _ from "lodash";
import { ref, provide } from "vue";
import Button from "../base-components/Button";
import {
  FormInput,
  FormInline,
  InputGroup,
  FormSwitch,
} from "../base-components/Form";
import Preview from "../base-components/Preview";
import Alert from "../base-components/Alert";
import Lucide from "../base-components/Lucide";
import { Dialog,  } from "../base-components/Headless";
import TinySlider, { TinySliderElement } from "../base-components/TinySlider";
import HomeSetting from "../components/HomeSetting";

const addfetureModal = ref(false);
const setaddfetureModal = (value: boolean) => {
  addfetureModal.value = value;
};
const addfeturButtonRef = ref(null);

/*Modal Step form*/

const importantNotesRef = ref<TinySliderElement>();

provide("bind[importantNotesRef]", (el: TinySliderElement) => {
  importantNotesRef.value = el;
});

/*Swicht*/
</script>

<template>
  <form action="">
    <div class="flex items-center mt-5 intro-y">
      <h2 class=" text-lg font-bold intro-y" id="">ข้อมูลร้านค้า</h2>
    </div>
    <br /><br />

    <div class="">
      <div class="grid grid-cols-2 gap-6">
        <!-- แถบซ้าย -->
        <div class="">
          <!-- content 1  -->
          <div class="content mb-5">
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="FileText" class="w-4 h-4 mt-1" />
              </span>
              <span class="mt-1"><b>ข้อมูลทั่วไป</b> </span>
              <br /><br />
            </div>
            <hr />
            <br />

            <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3 mt-2 text-right"><b>ชื่อร้าน</b></div>
              <div class="col-span-9">
                <FormInput :value="shop.shopName" v-model="shop.shopName" type="text" placeholder="ชื่อร้าน" required/>
              </div>
            </div>

            <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3 mt-4 text-right"><b>URL ร้านค้า</b></div>
              <div class="col-span-9">
                <InputGroup class="mt-2">
                  <FormInput
                    v-model="shop.url"
                    :value="shop.url"
                    type="text"
                    placeholder="your shop url"
                    aria-label="Price"
                    aria-describedby="input-group-price"
                  />
                  <InputGroup.Text id="input-group-price"> .com </InputGroup.Text>
                </InputGroup>
                <span class="text-danger"
                  >* รองรับตัวอักษรภาษาอังกฤษ(พิมพ์เล็ก) และตัวเลขเท่านั้น.</span
                >
              </div>
            </div>
            <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3  text-right">
                <b>หมายเลขประจำตัวผู้เสียภาษี</b>
              </div>
              <div class="col-span-9">
                <FormInput
                  :value="shop.taxId"
                  v-model="shop.taxId"
                  type="text"
                  placeholder="หมายเลขประจำตัวผู้เสียภาษี"
                />
              </div>
            </div>

            <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3 mt-2 text-right">
                <b>หักภาษี ณ ที่จ่าย</b>
              </div>
              <div class="col-span-9">
                <FormSwitch.Input
                  v-model="shop.withholdingTax"
                  id="show-example-2"
                  class="ml-3 mr-0"
                  type="checkbox"
                  :checked="shop.withholdingTax"
                />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3 mt-2 text-right"><b>โลโก้ร้านค้า</b></div>
              <div class="col-span-9">
                <FormInline class="flex-col items-start mt-0 xl:flex-row">
                  <div
                    class="flex-1 w-full mt-3 border-2 border-dashed rounded-md xl:mt-0 dark:border-darkmode-400"
                  >
                    <div
                      v-if="!shop.logoImg"
                      class="relative flex items-center justify-center px-4 pb-4 mt-5"
                    >
                      <Lucide icon="Image" class="w-4 h-4 mr-2" />
                      <span class="mr-1"> เพิ่มภาพปก </span>
                      <input type="file" @change="uploadLogoImg" />
                    </div>
                    <div v-else class="grid grid-cols gap-5 pl-4 pr-5 justify-center">
                      <img class="rounded-md max-h-32" :src="logoImgURL" />
                      <button @click="removeLogoImg" class="text-red-400">
                        ลบภาพโลโก้
                      </button>
                    </div>
                  </div>
                </FormInline>
              </div>
            </div>
          </div>
          <!-- content 2  -->
          <div class="content mb-5">
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="FileText" class="w-4 h-4 mt-1" />
              </span>
              <span class="mt-1"><b> ข้อมูลที่อยู่</b> </span>
              <br /><br />
            </div>
            <hr />
            <br />

            <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-20 text-right"></div>
              <div class="col-span-10">
                <div class="flex items-center">
                  <span class="flex items-center justify-center w-5 h-5 mr-3">
                    <Lucide icon="User" class="w-4 h-4 " />
                  </span>
                  <span>{{ shopInfo.shopName }}</span>
                </div>
                <div class="flex items-center mt-3">
                  <span class="flex items-center justify-center w-5 h-5 mr-3">
                    <Lucide icon="Phone" class="w-4 h-4 " />
                  </span>
                  <span >{{ shopInfo.tel != null ? shopInfo.tel : owner.phone }} </span>
                </div>
                <div class="flex items-center mt-3">
                  <span class="flex items-center justify-center w-5 h-5 mr-3">
                    <Lucide icon="Home" class="w-4 h-4 " />
                  </span>
                  <span>
                    {{ shopInfo.addressDetail }} {{ shopInfo.districtName }}
                    {{ shopInfo.cityName }} {{ shopInfo.provinceName }}
                    {{ shopInfo.postalCode }}</span
                  >
                </div>
                <div class="grid grid-cols-9 gap-4 mt-3">
                  <div class="col-span-2 bgpkdt">
                    <div class="flex items-center pl-1 ">
                      <span class="flex items-center justify-center w-5 h-5">
                        <Lucide icon="Home" class="w-4 h-4 mt-1" />
                      </span>
                      <span>ค่าเริ่มต้น</span>
                    </div>
                  </div>
                  <div class="col-span-2 bgpkdt pl-2">
                    <div class="flex items-center">
                      <span class="flex items-center justify-center w-5 h-5">
                        <Lucide icon="Phone" class="w-4 h-4 mt-1" />
                      </span>
                      <span>ออกบิล</span>
                    </div>
                  </div>
                  <div class="col-span-2 bgpkdt">
                    <div class="flex items-center pl-1">
                      <span class="flex items-center justify-center w-5 h-5">
                        <Lucide icon="Package" class="w-4 h-4 mt-1" />
                      </span>
                      <span>การจัดส่ง</span>
                    </div>
                  </div>
                </div>
                <!-- <p><Lucide icon="User" class="w-4 h-4 mt-1" /> <span>ปิยะชล ชื่นนิรันดร์</span> </p> 
                 <p><Lucide icon="Phone" class="w-4 h-4 mt-1" /> <span>0972258895</span> </p> 
                 <p><Lucide icon="Home" class="w-4 h-4 mt-1" /> <span>0972258895</span> </p>  -->
              </div>
            </div>
          </div>
          <!-- content 3  -->
          <div class="content mb-5">
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="FileText" class="w-4 h-4 mt-1" />
              </span>
              <span class="mt-1"><b> ข้อมูลติดต่อ</b> </span>
              <br /><br />
            </div>
            <hr />
            <br />

            <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3 mt-2 text-right"><b>โทรศัพท์</b></div>
              <div class="col-span-9">
                <FormInput v-model="shop.tel" :value="shop.tel" type="text" placeholder="เช่น 02-999-999" @keypress="numberTelephonFormat($event,'tel')" />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3 mt-2 text-right"><b>โทรศัพท์มือถือ</b></div>
              <div class="col-span-9">
                <FormInput
                  v-model="shop.phone"
                  :value="shop.phone"
                  type="text"
                  placeholder="เช่น 089-999-999"
                  @keypress="numberTelephonFormat($event,'phone')"
                />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3 mt-2 text-right"><b>อีเมล</b></div>
              <div class="col-span-9">
                <FormInput
                  v-model="shop.email"
                  :value="shop.email"
                  type="text"
                  placeholder="เช่น someone@somewhere.com"
                />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3 mt-2 text-right"><b>เว็บไซต์ร้านค้า</b></div>
              <div class="col-span-9">
                <FormInput
                  v-model="shop.website"
                  :value="shop.website"
                  type="text"
                  placeholder="เช่น http://www.mydomain.com"
                />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3 mt-2 text-right"><b>เฟสบุ๊ค เพจ</b></div>
              <div class="col-span-9">
                <FormInput
                  v-model="shop.facebookPage"
                  :value="shop.facebookPage"
                  type="text"
                  placeholder="เช่น http://www.facebookbook.com/pagename"
                />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3 mt-2 text-right"><b>ไลน์</b></div>
              <div class="col-span-9">
                <FormInput v-model="shop.lineId" :value="shop.lineId" type="text" placeholder="เช่น @LineID" />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3 mt-2 text-right"><b>อินสตาแกรม</b></div>
              <div class="col-span-9">
                <FormInput
                  v-model="shop.instagram"
                  :value="shop.instagram"
                  type="text"
                  placeholder="เช่น http://www.instagram.com/pagename"
                />
              </div>
            </div>
          </div>
          <!-- content 3  -->
          <!-- <div class="content mb-5">
            <div class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5">
                <Lucide icon="FileText" class="w-4 h-4 mt-1" />
              </span>
              <span><b> Facebook / Google</b> </span>
              <br /><br />
            </div>
            <hr />
            <br />

            <div class="grid grid-cols-12 gap-4 mb-3">
              <div class="col-span-3 mt-5 text-right"><b>Facebook Pixel ID</b></div>
              <div class="col-span-9">
                <InputGroup class="mt-2">
                  <FormInput type="text" aria-label="Price" aria-describedby="input-group-price" />
                  <InputGroup.Text id="input-group-price">
                    <button>
                      <Lucide icon="PlusCircle" class="w-4 h-4 mt-1" />
                    </button>

                  </InputGroup.Text>
                </InputGroup>
                <InputGroup class="mt-2">
                  <FormInput type="text" aria-label="Price" aria-describedby="input-group-price" />
                <InputGroup.Text id="input-group-price ">
                  <button>
                    <Lucide icon="Trash" class="w-4 h-4 mt-1" />
                  </button>

                </InputGroup.Text>
              </InputGroup>
              <span class="text-danger">*ข้อมูลส่วนนี้จะไปแสดงที่หน้า Order Link และหน้า Check Tracking Number</span> <br>
              <span class="text-danger">*Can add 10 Facebook Pixel</span>
            </div>
          </div>

        </div> -->
          <div class="flex flex-col justify-end gap-2 mt-5 md:flex-row">
            <a href="#">
              <Button class="mr-2 shadow-md" id="goldgd" type="button" @click="updateShop()">
                <Lucide icon="Save" class="block mx-auto w-4 h-4" />
                &nbsp; บันทึก
              </Button></a
            >
            <a href="#">
              <Button variant="secondary" class="mr-2 shadow-md">
                <Lucide icon="XCircle" class="block mx-auto w-4 h-4" />
                &nbsp; ยกเลิก
              </Button></a
            >
          </div>
        </div>

        <!-- แถบขวา -->
        <div class="content">
          <!-- <div class="flex items-center">
            <span class="flex items-center justify-center w-5 h-5">
              <Lucide icon="FileText" class="w-4 h-4 mt-1" />
            </span>
            <span class="mt-1"><b> ข้อมูลเจ้าของร้าน</b> </span>
            <br /><br />
          </div> -->
          <div class="relative mb-5 mt-2">
              <div class="absolute left-0 flex items-center">
                <span class="flex items-center justify-center">
                  <Lucide icon="FileText" class="w-4 h-4 mt-1" />
                </span>
                 <span class="mt-1"><b> ข้อมูลเจ้าของร้าน</b> </span>
              </div> 
              <div class="absolute right-0 flex items-center">
                <!-- <Button class="" type="button" >
                  <Lucide icon="Edit" class="block mx-auto w-4 h-4" />
                  &nbsp; บันทึก
                </Button> -->
                <span class="flex items-center justify-center w-5 h-5">
                
                </span>
                  <!-- <button class="" type="button" >
                  <Lucide icon="Edit" class="block mx-auto w-4 h-4" />
                  &nbsp; บันทึก
                </button> -->
                <button type="button" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow inline-flex items-center" @click="changeOwenerEdit">
                  <Lucide icon="Edit" class="block mx-auto w-4 h-4" v-if="ownerEdit"/>
                  <Lucide icon="XCircle" class="block mx-auto w-4 h-4" v-if="!ownerEdit"/>
                  &nbsp;
                  <span v-if="ownerEdit">แก้ไข</span> 
                  <span v-if="!ownerEdit">ยกเลิก</span>
                </button>


                
                <!-- <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow">
                  <Lucide icon="Edit" class="block mx-auto w-4 h-4" /> แก้ไข
                </button> -->
              </div> 
          </div>
          <br />

          <hr />
          <br />

          <div class="grid grid-cols-12 gap-4 mb-3">
            <div class="col-span-3 mt-2 text-right"><b>ชื่อ - สกุล</b></div>
            <div class="col-span-9">
              <input :disabled="ownerEdit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" v-model="owner.fullName" />
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4 mb-3">
            <div class="col-span-3 mt-2 text-right"><b>อีเมล</b></div>
            <div class="col-span-9">
              <input :disabled="ownerEdit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" v-model="owner.email" />
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4 mb-3">
            <div class="col-span-3 mt-2 text-right"><b>โทรศัพท์</b></div>
            <div class="col-span-9">
              <input :disabled="ownerEdit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" v-model="owner.phone" />
            </div>
          </div>
          <span class="text-danger">**กรุณาใส่ข้อมูลจริง เพื่อความสะดวกในการบริการ</span>
        </div>
      </div>
    </div>
  </form>
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
          <img src="../assets/images/success.gif" alt="">
        </div>
        <div class="mb-5 text-3xl">อัพเดตร้านค้าสำเร็จ!</div>
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
import { useInventory } from "../stores/inventory";
const Inventory = useInventory();
//success modal
const successModal = ref(false);
const setSuccessModal = (value: boolean) => {
  successModal.value = value;
};
export default {
  data() {
    return {
      currentShopId: Inventory.currentShopId,
      logoImgURL: "",
      shop: {
        shopName: "",
        url: "",
        taxId: "",
        withholdingTax: false,
        tel: "",
        phone: "",
        email: "",
        website: "",
        facebookPage: "",
        lineId: "",
        instagram: "",
        fullName: "",
        logoImg: "",
      } as any,
      shopInfo: {
        addressDetail: "",
        districtName: "",
        cityName: "",
        provinceName: "",
        postalCode: "",
        shopName: "",
        tel: "",
      },
      owner: {
        id:null,
        fullName: "",
        email: "",
        phone: "",
      },
      ownerEdit : true
    };
  },
  methods: {
    async getShopInfo() {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth._token.local")}`,
      };
      const URL = (`${import.meta.env.VITE_API_URL}/setting/shop/${this.currentShopId}`).replace(" ", "")
      const response = await axios.get(
        URL,
        { headers }
      );


      if (response.data.code === 200) {
        this.owner.id = response.data.data.id;
        this.owner.fullName = response.data.data.fullName;
        this.owner.email = response.data.data.email;
        this.owner.phone = response.data.data.phone;

        
        this.shop = response.data.data.shop.map((val:any) => {
              this.shopInfo.addressDetail = val.addressDetail;
              this.shopInfo.districtName = val.districtName;
              this.shopInfo.cityName = val.cityName;
              this.shopInfo.provinceName = val.provinceName;
              this.shopInfo.postalCode = val.postalCode;
              this.shopInfo.shopName = val.shopName;
              this.shopInfo.tel = val.tel;
              this.logoImgURL = (`${import.meta.env.VITE_API_URL}/uploads/${val.logoImg}`).replace(" ", "") ; 
              return {
                shopName: val.shopName,
                url: val.url,
                taxId: val.taxId,
                withholdingTax: val.withholdingTax,
                tel:  val.tel,
                phone: val.phone,
                email: val.email,
                website: val.website,
                facebookPage: val.facebookPage,
                lineId: val.lineId,
                instagram: val.instagram,
                fullName: val.fullName,
                logoImg: val.logoImg,
              }
         })
         this.shop = this.shop[0];
      }
    },
  async updateShop() {
    try {
      this.shop.fullName = this.owner.fullName;
      this.shop.email = this.owner.email;
      this.shop.phone = this.owner.phone;
      const formData = new FormData();
      for (let x in this.shop) {
        if(this.shop[x] !== null){
          formData.append(x, this.shop[x]);
        }
      }
      
      const URL = `${import.meta.env.VITE_API_URL}/setting/shop/${
      this.currentShopId
     }`.replace(" ", "");
        const response = await axios.patch(URL,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `${localStorage.getItem("auth._token.local")}`,
            },
          }
        );

      setSuccessModal(true);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  },
  async uploadLogoImg(e: any) {
      try {
        var files = (await e.target.files) || e.dataTransfer.files;
        this.shop.logoImg = files[0];
        console.log(files[0]);
        if (!files.length) return;
        this.createLogoImg(files[0]);
      } catch (err) {
        console.error("Error uploading images:", err);
      }
    },
    createLogoImg(file: any) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e: any) => {
        vm.logoImgURL = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    removeLogoImg: function (e: any) {
      this.shop.logoImg = "";
    },
    addSuccess(){
      setSuccessModal(false);
      // this.$router.push("/dashboard");
    },
    numberTelephonFormat(evt:any,type:string){

      let length = type == 'tel' ? this.shop.tel != null ? this.shop.tel.length : 0  : this.shop.phone != null ? this.shop.phone.length : 0;
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 || length > 9) {
        evt.preventDefault();;
      } else {
        return true;
      }
      
    },
    changeOwenerEdit(){
      this.ownerEdit = this.ownerEdit == true ? false : true;
    }
  },
  mounted() {
  
  },
  beforeMount() {
    this.getShopInfo();
  },
};
</script>
<style>
@import "../assets/css/components/AddCategories.css";
@import "..//assets/css/components/AddProductfetures.css";
@import "..//assets/css/components/Viewdatailpdft.css";

.bgpkdt {
  background-color: #af0000;
  color: #fff;
  text-align: center;

  border-radius: 20px;
}

.textarea {
  border-radius: 6px;
}

Textarea:focus {
  border-radius: 6px;
  border: 2px solid #af0000;
}

.Dialog {
  padding: 20px 20px;
}

.headtext {
  font-size: 22px;
}

Dialog {
  width: 1200px !important;
}

/*for  BEGIN: Wizard Layout 2*/

.FAQ {
  vertical-align: top;
  height: auto !important;
  background-color: #f2f2f2;
}

.list {
  display: block;
  height: auto;
  margin: 0;
}

.show {
  display: none;
}

.hide:target + .show {
  display: inline;
}

.hide:target {
  display: none;
}

.hide:target ~ .list {
  display: inline;
}

/*style the (+) and (-) */
.hide,
.show {
  border-radius: 6px;
  width: 90%;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  opacity: 0.95;
  margin-right: 0;
  margin-bottom: 25px;
  margin-left: 20px;
}

.hide:hover,
.show:hover {
  text-decoration: none;
  opacity: 1;
  margin-bottom: 25px;
}

.list p {
  height: auto;
  margin: 0;
}

.question {
  padding-top: 20px;
  height: auto;
  width: 100%;
  line-height: 20px;
  padding-left: 20px;
  margin-bottom: 25px;
  background-color: #ccc;
}

/*for  BEGIN: Wizard Layout 2.1*/

.FAQ2 {
  vertical-align: top;
  height: auto !important;
  background-color: #f2f2f2;
}

.list2 {
  display: none;
  height: auto;
  margin: 0;
}

.show2 {
  display: none;
}

.hide2:target + .show2 {
  display: inline;
}

.hide2:target {
  display: none;
}

.hide2:target ~ .list2 {
  display: inline;
}

/*style the (+) and (-) */
.hide2,
.show2 {
  border-radius: 6px;
  width: 90%;
  text-align: center;
  text-decoration: none;

  opacity: 0.95;
  margin-right: 0;
  margin-bottom: 25px;
  margin-left: 20px;
  font-weight: bold;
}

.hide2:hover,
.show2:hover {
  background-color: #c1c1c1;
  text-decoration: none;
  opacity: 1;
  margin-bottom: 25px;
}

.list2 p {
  height: auto;
  margin: 0;
}

input[type="text"][disabled] {
   background-color: #eeeeee;
}

/*FormSwitch*/
</style>
