<script setup lang="ts">
import DarkModeSwitcher from "../components/DarkModeSwitcher";
import MainColorSwitcher from "../components/MainColorSwitcher";
import logoUrl from "../assets/images/logo.svg";
import illustrationUrl from "../assets/images/illustration.svg";
import {
  FormInput,
  FormCheck,
  FormSelect,
  InputGroup,
} from "../base-components/Form";
import Button from "../base-components/Button";
import { ref } from "vue";
import { Dialog } from "../base-components/Headless";
import Lucide from "../base-components/Lucide";
import PDPA from "../components/PDPA";
</script>

<template>
  <div :class="[
    '-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen  bg-[#af0000] xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600',
    'before:hidden before:xl:block before:content-[\'\'] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-[#af0000]/5 before:rounded-[100%] before:dark:bg-darkmode-400',
    'after:hidden after:xl:block after:content-[\'\'] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-[#af0000] after:rounded-[100%] after:dark:bg-darkmode-700',
  ]" id="body">
    <!-- <DarkModeSwitcher />
      <MainColorSwitcher /> -->
    <div class="container relative z-10 sm:px-10">
      <div class="block grid-cols-2 gap-4 xl:grid">
        <!-- BEGIN: Register Info -->
        <div class="flex-col hidden min-h-screen xl:flex">
          <div class="">
            <br /><br />
            <img alt="Midone Tailwind HTML Admin Template" class="-intro-x ml-10 mt-5" src="..//assets/images/aladin.png"
              width="200px" style="margin-left: 12%" />
            <div class="mt-5 text-4xl font-medium leading-tight text-white -intro-x">
              สมัครสมาชิกอะลาดิน เอ็กซ์เพรส <br />
              ระบบจัดการออเดอร์ที่ดีที่สุด
            </div>
            <div class="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400"></div>
          </div>
        </div>
        <!-- END: Register Info -->
        <!-- BEGIN: Register Form -->
        <div class="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
          <div
            class="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
            <h2 class="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left text-[#af0000]">
              ลงทะเบียน
              <!-- <span class="text-[#ccc]"> | </span>
                <span class="text-[#666]"><a href="login">เข้าสู่ระบบ</a> </span> -->
            </h2>
            <div class="mt-2 text-center intro-x text-slate-400 dark:text-slate-400">
              A few more clicks to sign in to your account. Manage all your
              e-commerce accounts in one place
            </div>
            <div class="mt-8 intro-x">
              <p>เลือกแพคเก็จ</p>
              <FormSelect v-model="selectedPackage" id="package"
                class="block px-4 py-3 mb-4 intro-x login__input min-w-full xl:min-w-[350px]">
                <option value="FREETRIAL">FREE</option>
                <option value="BASIC">S</option>
                <option value="GROWTH">M</option>
                <option value="BUSINESS">L</option>
                <option value="ENTERPRISE">XL</option>
              </FormSelect>
              <FormInput v-model="firstName" type="text"
                class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]" placeholder="ชื่อ" />
              <FormInput v-model="lastName" type="text"
                class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]" placeholder="นามสกุล" />
              <FormInput v-model="email" type="text"
                class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]" placeholder="อีเมล" />
              <FormInput v-model="username" type="text"
                class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]"
                placeholder="ชื่อผู้ใช้ (Username)" />

              <!-- <FormInput
                v-model="password"
                type="password"
                class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]"
                placeholder="รหัสผ่าน"
              /> -->

              <!-- <InputGroup class="mt-2">
                <FormInput
                  type="text"
                  placeholder="Price"
                  aria-label="Price"
                  aria-describedby="input-group-price"
                  class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]"
                />
                <InputGroup.Text
                  id="input-group-price"
                  class="block px-4 py-3 mt-4"
                >
                  <Lucide icon="Eye" class="w-4 h-4"
                /></InputGroup.Text>
              </InputGroup> -->

              <InputGroup class="mt-2">
                <FormInput v-if="showPassword" v-model="password" type="text"
                  class="block px-4 py-3 mt-4  xl:min-w-[350px]" placeholder="รหัสผ่าน" />
                <!-- <FormInput
                  v-if="showPassword"
                  v-model="password"
                  type="text"
                  class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]"
                  placeholder="รหัสผ่าน"
                /> -->

                <FormInput v-else v-model="password" type="password" class="block px-4 py-3 mt-4  xl:min-w-[350px]"
                  placeholder="รหัสผ่าน" />

                <InputGroup.Text @click="toggleShow" id="input-group-price" class="block px-4 py-3 mt-4 cursor-pointer">
                  <Lucide icon="Eye" class="w-4 h-4" />
                </InputGroup.Text>
              </InputGroup>


              <InputGroup class="mt-2">
                <FormInput v-if="showconfirmPassword" v-model="confirmPassword" type="text"
                  class="block px-4 py-3 mt-4  xl:min-w-[350px]" placeholder="ยืนยันรหัสผ่าน" />

                <FormInput v-else v-model="confirmPassword" type="password" class="block px-4 py-3 mt-4  xl:min-w-[350px]"
                  placeholder="ยืนยันรหัสผ่าน" />

                <InputGroup.Text @click="toggleShowconfirm" id="input-group-price"
                  class="block px-4 py-3 mt-4 cursor-pointer">
                  <Lucide icon="Eye" class="w-4 h-4" />
                </InputGroup.Text>
              </InputGroup>
              <!-- <FormInput
                v-model="password"
                type="password"
                class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]"
                placeholder="รหัสผ่าน"
              /> -->
              <!--              
                <button @click="toggleShow" class="">
                    <Lucide icon="Eye" class="w-4 h-4" />
                  </button> -->
              <!-- <input v-if="showPassword" type="text" class="input" v-model="password" />
             <input class="input" v-model="password"> -->
              <!-- <div
                  class=""
                  style="margin-top:-20px; padding-right: 90%; position: absolute;"
                >
               
                </div> 
              -->

              <!-- <FormInput
                v-model="confirmPassword"
                type="password"
                class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]"
                placeholder="ยืนยันรหัสผ่าน"
              /> -->
              <FormInput v-model="storeName" type="text"
                class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]" placeholder="ชื่อร้านค้า" />

              <FormInput v-model="recomendedcode" type="text"
                class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]"
                placeholder="รหัสผู้แนะนำ" />
              <div class="">
                <FormInput v-model="phone" type="text"
                  class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]" placeholder="เบอร์โทร" />
                <div>
                  <Button class="w-full px-4 py-3 align-top mt-2 xl:w-32 xl:mr-3 bg-[#af0000] text-white"
                    @click="getOTP(phone)">
                    ส่ง OTP
                  </Button>
                  <Button class="w-full px-4 py-3 align-top mt-2 xl:w-32 xl:mr-3 bg-secondary">
                    ส่ง OTP อีกครั้ง
                  </Button>
                  <div v-if="token">
                    <FormInput v-model="pin" type="text"
                      class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]"
                      placeholder="กรอกรหัส OTP เพื่อยืนยัน" />
                    <span class="text-xs text-danger">ระบบได้ส่ง รหัสไปยังเบอร์ {{ phone }} ของคุณ</span><br />
                    <span class="text-xs text-danger">มีเวลาในการยืนยัน OTP 5 นาที</span>
                  </div>
                  <br />
                </div>
              </div>
              <!-- <div class="grid w-full h-1 grid-cols-12 gap-4 mt-3 intro-x">
                  <div class="h-full col-span-3 rounded bg-success"></div>
                  <div class="h-full col-span-3 rounded bg-success"></div>
                  <div class="h-full col-span-3 rounded bg-success"></div>
                  <div
                    class="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"
                  ></div>
                </div> -->
              <!-- <a
                  href=""
                  class="block mt-2 text-xs intro-x text-slate-500 sm:text-sm"
                >
                  What is a secure password?
                </a> -->
            </div>
            <div class="flex items-center mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
              <FormCheck.Input id="remember-me" type="checkbox" class="mr-2 border" v-model="agree" />
              <label class="cursor-pointer select-none" htmlFor="remember-me">
              </label>
              <span style="cursor: pointer" class="ml-1 pdpatext" @click="() => {
                  setpdpaModal(true);
                }
                ">
                ข้อตกลงและเงื่อนไข
              </span>
              .
            </div>
            <div class="mt-5 text-center intro-x xl:mt-8 xl:text-left">
              <Button class="w-full px-4 py-3 align-top xl:w-32 xl:mr-3 bg-[#af0000] text-white" @click="checkOTP()">
                ลงทะเบียน
              </Button>
            </div>
          </div>
        </div>
        <!-- END: Register Form -->
      </div>
    </div>
  </div>
  <!-- modal success -->
  <!-- <Dialog
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
          <div class="mb-5 text-3xl">สมัครสมาชิกสำเร็จ!</div>
          <Button
            variant="outline-secondary"
            type="button"
            @click.prevent="registed"
          >
            ตกลง
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog> -->
  <!-- modal success -->

  <!-- BEGIN: Super Large Modal Content -->
  <Dialog size="xxl" :open="successModal" @close="() => {
      setSuccessModal(false);
    }
    ">
    <Dialog.Panel class="p-10 text-center">
      <div class="flex items-center justify-center">
        <img src="..//assets/images/mascotwelcome.jpg" alt="" class="w-[250px]" />
      </div>
      <div class="flex items-center justify-center text-[#666]" style="font-weight: bold; font-size: 20px">
        <br />
        ขอบพระคุณที่สมัครสมาชิกร่วมเป็นส่วนหนึ่งของอะลาดิน ระบบได้ส่ง E-mail
        ยืนยันให้ท่านเรียบร้อยแล้ว
      </div>
      <div class="flex items-center justify-center mt-5" style="font-weight: bold; font-size: 30px">
        " ส่งด้วยกัน ไปได้ไกล เพราะเราเข้าใจคุณ อะลาดิน เอ็กซ์เพรส "
      </div>
      <div class="flex items-center justify-center text-[#666] mt-5"></div>
      <br /><br />
      <div class="flex items-center justify-center">
        <a href="/login">
          <Button class="w-30 mr-1 bg-[#af0000] border-none text-white" @click="() => {
              setSuccessModal(false);
            }
            ">
            เข้าสู่ระบบ
          </Button></a>
      </div>
    </Dialog.Panel>
  </Dialog>
  <!-- END: Super Large Modal Content -->

  <Dialog size="xl" :open="pdpaModal" @close="() => {
      setpdpaModal(false);
    }
    ">
    <Dialog.Panel class="sm:w-[500px] lg:w-[600px] p-10">
      <div class="pdpa">
        <div class="text-center">
          <b><span style="font-size: 24px">
              เงื่อนไขการให้บริการ และ นโยบายความเป็นส่วนตัว</span></b>
        </div>
        <div class="" style="height: 450px; overflow-y: scroll">
          <PDPA />
        </div>
      </div>
      <div class="flex items-center justify-center mt-5">
        <Button class="w-30 mr-1 bg-[#af0000] border-none text-white" @click="() => {
            setpdpaModal(false);
          }
          ">
          ตกลง
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>
  <!-- END: Super Large Modal Content -->
</template>

<script lang="ts">
import axios from "axios";
//success modal
const successModal = ref(false);
const setSuccessModal = (value: boolean) => {
  successModal.value = value;
};

const pdpaModal = ref(false);
const setpdpaModal = (value: boolean) => {
  pdpaModal.value = value;
};

export default {
  data() {
    return {

      agree: false,
      loading: false,
      confirmPassword: null,
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      showPassword: false,
      showconfirmPassword: false,
      password: null,
      phone: "",
      storeName: "",
      token: "",
      pin: "",
      selectedPackage: "FREETRIAL",
      recomendedcode: "",
    };
  },
  methods: {
    async register() {
      this.loading = true;
      const data = {
        fullName: `${this.firstName} ${this.lastName}`,
        email: this.email,
        username: this.username,
        password: this.password,
        phone: this.phone,
        storeName: this.storeName,
        package: this.selectedPackage,
        recomendedcode: this.recomendedcode,
      };
      try {
        if (this.password !== this.confirmPassword) {
          alert("รหัสผ่าน กับ ยืนยันรหัสผ่านไม่ตรงกัน");
          throw new Error("รหัสผ่าน กับ ยืนยันรหัสผ่านไม่ตรงกัน");
        }
        if (!this.agree) {
          alert("คุณยังไม่ได้ยอมรับข้อตกลงและเงื่อนไข");
          throw new Error("คุณยังไม่ได้ยอมรับข้อตกลงและเงื่อนไข");
        }
        const URL = `${import.meta.env.VITE_API_URL}/user/register`.replace(
          " ",
          ""
        );
        const response = await axios.post(URL, data);
        if (response.data.code == 200 || 201) {
          setSuccessModal(true);
        }
      } catch (error: any) {
        console.log(error);
        if (error.response?.data.message == "this email already exists") {
          alert(
            "ไม่สามารถลงทะเบียนได้ เนื่องจากอีเมลล์นี้ได้มีการลงทะเบียนแล้ว"
          );
        } else if (error.response.data.message == "this phone already exists") {
          alert(
            "ไม่สามารถลงทะเบียนได้ เนื่องจากเบอร์โทรศัพท์นี้ได้มีการลงทะเบียนแล้ว"
          );
        } else if (
          error.response.data.message == "this name already exists" ||
          error.response.data.message == "this username already exists"
        ) {
          alert("ไม่สามารถลงทะเบียนได้ เนื่องจากผู้ใช้มีการลงทะเบียนแล้ว");
        } else alert("ไม่สามารถทำรายการได้ โปรดลองอีกครั้ง");
      }
    },
    registed() {
      setSuccessModal(false);
      //this.$router.push({ path: '/login' })
      //this.$router.push("/login");
      //window.location.href = "app.aladinxpress.com/login"; //redirect to homepage for this phase
    },
    async getOTP(phoneNumber: string) {
      const URL = `${import.meta.env.VITE_API_URL}/user/getOTP`.replace(
        " ",
        ""
      );
      if (phoneNumber) {
        if (phoneNumber.length) {
          await axios
            .post(URL, {
              phoneNumber: this.phone,
            })
            .then((res) => {
              this.token = res.data.OTP.token;
            })
            .catch((err) => {
              console.log(err);
              alert("ไม่สามารถขอ OTP ได้");
            });
        } else {
          alert("กรุณากรอก เบอร์โทรให้ครบ");
        }
      } else {
        alert("กรุณากรอก เบอร์โทร");
      }
    },
    async verifyOTP(token: string, pin: string) {
      const URL = `${import.meta.env.VITE_API_URL}/user/verifyOTP`.replace(
        " ",
        ""
      );
      const OTP = await axios.post(URL, {
        token: token,
        pin: pin,
      });
      return OTP;
    },
    async checkOTP() {
      const status = await this.verifyOTP(this.token, this.pin);
      if (status && String(status.data.result.status) === "success") {
        this.register();
      } else {
        alert("incorrect OTP");
      }
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShowconfirm() {
      this.showconfirmPassword = !this.showconfirmPassword;
    },
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
      return this.showconfirmPassword ? "Hide" : "Show";
    },
  },


};
</script>
<style>
@media screen and (max-width: 767px) {
  #body {
    background-color: #af0000;
    height: 170vh;
  }
}

.pdpatext:link {
  color: #666;
}

.pdpatext:hover {
  color: #af0000;
}

.CountDown {
  font-size: 72px;
  color: #000;
}
</style>
