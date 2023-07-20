<script setup lang="ts">
import logoUrl from "../../assets/images/logo.svg";
import illustrationUrl from "../../assets/images/illustration.svg";
import { FormInput} from "../../base-components/Form";
import Button from "../../base-components/Button";
</script>

<template>
  <div
    :class="[
      '-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-[#af0000] xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600',
      'before:hidden before:xl:block before:content-[\'\'] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-[#af0000]/5 before:rounded-[100%] before:dark:bg-darkmode-400',
      'after:hidden after:xl:block after:content-[\'\'] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-[#af0000] after:rounded-[100%] after:dark:bg-darkmode-700',
    ]"
  >
    <!-- <DarkModeSwitcher />
    <MainColorSwitcher /> -->
    <div class="container relative z-10 sm:px-10">
      <div class="block grid-cols-2 gap-4 xl:grid">
        <!-- BEGIN: Login Info -->
        <div class="flex-col hidden min-h-screen xl:flex">
          <a href="" class="flex items-center pt-5 -intro-x">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="w-6"
              :src="logoUrl"
            />
            <span class="ml-3 text-lg text-white"> Aladin </span>
          </a>
          <div class="my-auto">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="w-1/2 -mt-16 -intro-x"
              :src="illustrationUrl"
            />
            <div
              class="mt-10 text-4xl font-medium leading-tight text-white -intro-x"
            >
             AladinXpress 
              Back Office
            </div>
            <div
              class="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400"
            >
              Manage all your e-commerce accounts in one place
            </div>
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
              เข้าสู่ระบบหลังบ้าน
            </h2>
            <div class="mt-8 intro-x">
              <FormInput
                v-model="username"
                type="text"
                class="block px-4 py-3 intro-x login__input min-w-full xl:min-w-[350px]"
                placeholder="ชื่อผู้ใช้"
              />
              <FormInput
                v-model="password"
                type="password"
                class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]"
                placeholder="รหัสผ่าน"
              />
            </div>
            <div class=" mt-5 text-center intro-x xl:mt-8 xl:text-left">
              <Button
                variant="danger"
                class="w-full px-4 py-3 align-top xl:w-32 xl:mr-3 bg-[#af0000]"
                @click="login"
              >
                เข้าสู่ระบบ
              </Button>
            </div>
          </div>
        </div>
        <!-- END: Login Form -->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import axios from "axios";
export default {
  name: 'adminLogin',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      const payload = {
        username: this.username,
        password: this.password,
      }
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}backOffice/login/`, payload)
        if (response.status === 200) {
          const token = response.data.token
          this.$router.push('/adminDashboard')
        } else {
          alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง โปรดลองอีกครั้ง')
        }
      } catch (error) {
        alert('เข้าสู่ระบบไม่สำเร็จ โปรดลองอีกครั้ง')
        this.$router.push('/adminLogin')
      }
    },
  },
}
</script>
