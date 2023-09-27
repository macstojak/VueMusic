<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link class="text-white font-bold uppercase text-2xl mr-4" :to="{ name: 'home' }"
        exact-active-class="no-active">VUE MUSIC PLAYER</router-link>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <router-link class="px-2 text-white" :to="{ name: 'about' }">{{ $t("header.about") }}</router-link>
          </li>
          <li v-if="!userStore.userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal">{{ $t("header.loginRegister") }}</a>
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" :to="{ name: 'manage' }">{{ $t("header.manage") }}</router-link>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signOut()">{{ $t("header.logout") }}</a>
            </li>
          </template>

        </ul>
        <select class="ml-auto" v-model="this.$i18n.locale">
          <option value="pl">
            <img :src="polski" alt="polski" class="w-4 h-4" />Polski
          </option>
          <option value="de" alt="de" class="w-4 h-4">
            <img :src="deutsch" />Deutsch
          </option>
          <option value="en" alt="en" class="w-4 h-4">
            <img :src="english" alt="english" />English
          </option>
        </select>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from "pinia";
import useModalStore from "@/stores/modal";
import useUserStore from "@/stores/user";
import polski from "@/assets/img/polish-flag.png";
import english from "@/assets/img/united-states.png";
import deutsch from "@/assets/img/germany.png";

export default {
  name: "AppHeader",
  data: function () {
    return {
      polski, english, deutsch
    };
  },
  computed: {
    ...mapStores(useModalStore, useUserStore),
    currentLocale() {
      switch (this.$i18n.locale) {
        case "en":
          return "English";
        case "pl":
          return "Polski";
        case "de":
          return "Deutsch";
        default:
          return "English";
      }
    }
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen;
      console.log(this.modalStore.isOpen);
    },
    signOut() {
      this.userStore.signOut();
      // console.log(this.$route);
      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: 'home' });
      }
    },
    changeLocale(value) {
      console.log('calue :>> ', value);
      this.$i18n.locale = this.$i18n.locale === "en" ? "pl" : "en";
    }
  }
};
</script>