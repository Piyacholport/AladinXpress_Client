<script setup lang="ts">
import { FormInput, FormCheck } from "../base-components/Form";
import Button from "../base-components/Button";
import { Menu, Dialog } from "../base-components/Headless";
import { ref } from "vue";
import Lucide from "../base-components/Lucide";
const successModalPreview = ref(false);
const setSuccessModalPreview = (value: boolean) => {
  successModalPreview.value = value;
};

const sendButtonRef = ref(null);
const deleteButtonRef = ref(null);
</script>

<template>
  <div
    :class="[
      '-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-[#af0000] xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600',
      'before:hidden before:xl:block before:content-[\'\'] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-[#af0000]/5 before:rounded-[100%] before:dark:bg-darkmode-400',
      'after:hidden after:xl:block after:content-[\'\'] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-[#af0000] after:rounded-[100%] after:dark:bg-darkmode-700',
    ]"
    id="body"
  >
    <!-- <DarkModeSwitcher />
    <MainColorSwitcher /> -->
    <div class="container relative z-10 sm:px-10">
      <div class="block grid-cols-2 gap-4 xl:grid">
        <!-- BEGIN: Login Info -->
        <div class="flex-col hidden min-h-screen xl:flex ml-0">
          <div class="ml-1">
            <br /><br />
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="-intro-x ml-10 mt-5"
              src="..//assets/images/aladin.png"
              width="200px"
              style="margin-left: 15%"
            />
            <div
              class="mt-5 text-4xl font-medium leading-tight text-white -intro-x"
            >
              ระบบอะลาดิน เอ็กซ์เพรส <br />
              ระบบจัดการออเดอร์ที่ดีที่สุด
            </div>
            <div
              class="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400"
            ></div>
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <div class="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
          <div
            class="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto"
          >
            <h2
              class="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left text-[#af0000]"
            >
              ลืมรหัสผ่าน 
            </h2>
            <div class="flex items-center mr-auto mt-1 ">
              <p class="text-s">กรุณากรอกอีเมลเพื่อรับลิงก์รีเซตรหัสผ่าน</p>
              </div>
            <div class="mt-8 intro-x">
              <FormInput
                v-model="email"
                type="text"
                class="block px-4 py-3 intro-x login__input min-w-full xl:min-w-[350px]"
                placeholder="อีเมล"
              />
       
            </div>
            <div
              class="flex mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm"
            >
          
              <!-- <a class="text-[#af0000]" href="">ลืมรหัสผ่าน?</a> -->
            </div>
            <div class="mt-5 text-center intro-x xl:mt-8 xl:text-left">
              <Button
                variant="danger"
                class="w-full px-4 py-3 align-top xl:w-32 xl:mr-3 bg-[#af0000]"
                @click="
                      () => {
                        setSuccessModalPreview(true);
                      }
                    "
              >
                ตกลง
              </Button>
            </div>
          </div>
        </div>
        <!-- END: Login Form -->
      </div>
    </div>
  </div>
       <!-- BEGIN: Modal Content -->
       <Dialog
              :open="successModalPreview"
              @close="
                () => {
                  setSuccessModalPreview(false);
                }
              "
            >
              <Dialog.Panel>
                <div class="p-5 text-center">
                  <Lucide
                    icon="CheckCircle"
                    class="w-16 h-16 mx-auto mt-3 text-success"
                  />
                  <div class="mt-5 text-3xl">สำเร็จ</div>
                  <div class="mt-2 text-slate-500">เช็คอีเมลของคุณเพื่อรับลิงก์รีเซตรหัสผ่าน</div>
                </div>
                <div class="px-5 pb-8 text-center">
                  <Button
                    type="button"
                    variant="danger"
                
                    @click="
                      () => {
                        setSuccessModalPreview(false);
                      }
                    "
                    class="w-24 bg-[#af0000]"
                  >
                    ตกลง
                  </Button>
                </div>
              </Dialog.Panel>
            </Dialog>
            <!-- END: Modal Content -->
</template>
<script lang="ts">
import { useUser } from "../stores/user";
import { useToken } from "../stores/token";
import { useAuth } from "../stores/auth";
import { useInventory } from "../stores/inventory";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
    
    };
  },

};
</script>
<style>
@media screen and (max-width: 767px) {
  #body {
    background-color: #af0000;
    height: 100%;
  }
}
</style>
