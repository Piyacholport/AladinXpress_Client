<script setup lang="ts">
import { useRoute } from "vue-router";
import logoUrl from "../../assets/images/logo.svg";
import MenuLink from "./MenuLink.vue";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import MobileMenu from "../../components/MobileMenu";
import fakerData from "../../utils/faker";
import _ from "lodash";
import { useTopMenuStore } from "../../stores/top-menu";
import { FormattedMenu, nestedMenu } from "./top-menu";
import Lucide from "../../base-components/Lucide";
import Breadcrumb from "../../base-components/Breadcrumb";
import { FormInput } from "../../base-components/Form";
import { Menu, Popover } from "../../base-components/Headless";
import { TransitionRoot } from "@headlessui/vue";
import { watch, reactive, computed, onMounted, ref } from "vue";

const searchDropdown = ref(false);
const showSearchDropdown = () => {
  searchDropdown.value = true;
};
const hideSearchDropdown = () => {
  searchDropdown.value = false;
};
const route = useRoute();
let formattedMenu = reactive<Array<FormattedMenu>>([]);
const setFormattedMenu = (computedFormattedMenu: Array<FormattedMenu>) => {
  Object.assign(formattedMenu, computedFormattedMenu);
};
const topMenuStore = useTopMenuStore();
const topMenu = computed(() => nestedMenu(topMenuStore.menu, route));

watch(topMenu, () => {
  setFormattedMenu(topMenu.value);
});

onMounted(() => {
  setFormattedMenu(topMenu.value);
});
</script>

<template>
  <div class="py-2">
    <!-- <DarkModeSwitcher />
    <MainColorSwitcher /> -->
    <MobileMenu />
    <!-- BEGIN: Top Bar -->
    <div
      class="border-b border-white/[0.08] mt-[2.2rem] md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 pt-3 md:pt-0 mb-10"
    >
      <div class="flex items-center h-[70px] z-[51] relative">
        <!-- BEGIN: Logo -->
        <RouterLink
          :to="{ name: 'top-menu-dashboard-overview-1' }"
          class="hidden -intro-x md:flex"
        >
          <img
            alt="Midone Tailwind HTML Admin Template"
            class="w-6"
            :src="logoUrl"
          />
          <span class="ml-3 text-lg text-white"> Rubick </span>
        </RouterLink>
        <!-- END: Logo -->
        <!-- BEGIN: Breadcrumb -->
        <Breadcrumb
          light
          class="h-full md:ml-10 md:pl-10 md:border-l border-white/[0.08] mr-auto -intro-x"
        >
          <Breadcrumb.Link to="/">Application</Breadcrumb.Link>
          <Breadcrumb.Link to="/" :active="true"> Dashboard </Breadcrumb.Link>
        </Breadcrumb>
        <!-- END: Breadcrumb -->
       
  <!-- BEGIN: Account Menu -->
  <Menu>
          <Menu.Button
            class="block w-8 h-8 overflow-hidden scale-110 rounded-full shadow-lg image-fit zoom-in intro-x"
          >
          <Lucide icon="Settings" class="w-4 h-4 mr-2" />
          </Menu.Button>
          <Menu.Items
            class="w-56 mt-px relative bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white"
          >
            <Menu.Item class="hover:bg-white/5">
              <Lucide icon="ToggleRight" class="w-4 h-4 mr-2" /> Logout
            </Menu.Item>
          </Menu.Items>
        </Menu>
        <!-- END: Account Menu -->
      </div>
    </div>
    <!-- END: Top Bar -->
    <!-- BEGIN: Top Menu -->
    <nav class="relative z-50 hidden md:block">
      <ul class="pb-3 xl:pb-0 xl:px-[50px] flex flex-wrap">
        <li
          v-for="(menu, menuKey) in formattedMenu"
          :key="menuKey"
          :class="[
            'relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90',
            {
              '[&:hover>a>div:nth-child(1)]:before:bg-white/5 [&:hover>a>div:nth-child(1)]:before:dark:bg-darkmode-500/70':
                !menu.active,
            },
          ]"
        >
          <MenuLink
            :class="{
              [`opacity-0 translate-y-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards animate-delay-${
                (menuKey + 1) * 10
              }`]: !menu.active,
            }"
            :menu="menu"
            level="first"
          ></MenuLink>
          <!-- BEGIN: Second Child -->

          <ul
            v-if="menu.subMenu"
            class="xl:left-[100%] xl:-ml-[4px] shadow-[0px_3px_20px_#0000000b] bg-primary hidden w-56 absolute rounded-md z-20 px-0 top-0 mt-14 xl:-mt-5 before:block before:absolute before:w-full before:h-full before:bg-black/10 before:inset-0 before:rounded-md before:z-[-1] dark:bg-darkmode-600 dark:shadow-[0px_3px_7px_#0000001c]"
          >
            <li
              v-for="(subMenu, subMenuKey) in menu.subMenu"
              class="px-5 relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90"
              :key="subMenuKey"
            >
              <MenuLink :menu="subMenu" level="second"></MenuLink>
              <!-- BEGIN: Third Child -->
              <ul
                v-if="subMenu.subMenu"
                :class="[
                  'left-[100%] ml-0 shadow-[0px_3px_20px_#0000000b] bg-primary hidden w-56 absolute rounded-md z-20 px-0 top-0 mt-0 before:block before:absolute before:w-full before:h-full before:bg-black/10 before:inset-0 before:rounded-md before:z-[-1] dark:bg-darkmode-600 dark:shadow-[0px_3px_7px_#0000001c]',
                ]"
              >
                <li
                  v-for="(lastSubMenu, lastSubMenuKey) in subMenu.subMenu"
                  class="px-5 relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90"
                  :key="lastSubMenuKey"
                >
                  <MenuLink :menu="lastSubMenu" level="third"></MenuLink>
                </li>
              </ul>
              <!-- END: Third Child -->
            </li>
          </ul>
          <!-- END: Second Child -->
        </li>
      </ul>
    </nav>
    <!-- END: Top Menu -->
    <!-- BEGIN: Content -->
    <div
      class="rounded-[30px] min-w-0 min-h-screen flex-1 pb-10 bg-slate-100 dark:bg-darkmode-700 px-4 md:px-[22px] max-w-full md:max-w-auto before:content-[''] before:w-full before:h-px before:block"
    >
      <RouterView />
    </div>
    <!-- END: Content -->
  </div>
</template>

<script lang="ts">
import { useUser } from "../../stores/user";
import { useAuth } from "../../stores/auth";


export default {
  methods: {
    async logout(){
      const user = useUser()
      const auth = useAuth()
      user.logout()
      auth.changeAuth({
        status: false ,
        id: 0,
        fullName: "",
        email: ""
      })
      this.$router.push('/login')
    }
  }
}
</script>
