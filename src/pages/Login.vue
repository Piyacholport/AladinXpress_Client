<script setup lang="ts">
import { FormInput, FormCheck } from "../base-components/Form";
import Button from "../base-components/Button";
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
            <br><br>
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="  -intro-x ml-10 mt-5 "
             src="..//assets/images/aladin.png"
            width="200px"
            style="margin-left:15%"
            />
            <div
              class="mt-5 text-4xl font-medium leading-tight text-white -intro-x"
            >
            เข้าสู่ระบบอะลาดิน  เอ็กซ์เพรส <br />
            ระบบจัดการออเดอร์ที่ดีที่สุด
            </div>
            <div
              class="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400"
            >
           
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
              เข้าสู่ระบบ <span class="text-[#ccc]"> | </span>
              <span class="text-[#666]"><a href="register">ลงทะเบียน</a> </span>
            </h2>
            <div class="mt-2 text-center intro-x text-slate-400 xl:hidden">
              A few more clicks to sign in to your account. Manage all your
              e-commerce accounts in one place
            </div>
            <div class="mt-8 intro-x">
              <FormInput
                v-model="username"
                type="text"
                class="block px-4 py-3 intro-x login__input min-w-full xl:min-w-[350px]"
                placeholder="ชื่อผู้ใช้งาน (username)"
              />
              <FormInput
                v-model="password"
                type="password"
                class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]"
                placeholder="รหัสผ่าน"
              />
            </div>
            <div
              class="flex mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm"
            >
              <div class="flex items-center mr-auto">
                <FormCheck.Input
                  id="remember-me"
                  type="checkbox"
                  class="mr-2 border"
                />
                <label class="cursor-pointer select-none" htmlFor="remember-me">
                  จดจำการเข้าสู่ระบบ
                </label>
              </div>
              <a class="text-[#af0000]" href="ForgotPassword">ลืมรหัสผ่าน?</a>
            </div>
            <div class="mt-5 text-center intro-x xl:mt-8 xl:text-left">
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
import { useUser } from "../stores/user";
import { useToken } from "../stores/token";
import { useAuth } from "../stores/auth";
import { useInventory } from "../stores/inventory";

export default {
  name: 'LoginPage',
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
        const User = useUser()
        const Token = useToken()
        const Auth = useAuth()
        const Inventory = useInventory()
        const res = await User.login(payload)
        if (Number(res.status) === 200) {
          Token.setToken(res.data.token)
          Auth.changeAuth({
              status:res.data.user.status,
              id: res.data.user.id,
              fullname: res.data.user.fullname,
              email: res.data.user.email,
            })
          localStorage.setItem('userId', JSON.stringify(User.getUser.id)) //set userId in localStorage
          await Inventory.setInventory()
          this.$router.push('/dashboard')
        } else {
          alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง โปรดลองอีกครั้ง')
        }
      } catch (error) {
        console.log(error)
        alert('เข้าสู่ระบบไม่สำเร็จ โปรดลองอีกครั้ง')
        this.$router.push('/login')
      }
    },
  },
}
</script>
<style>

 
@media screen and (max-width: 767px) {
#body{
  background-color: #af0000;
height: 100%;
}
    }


</style>

