<template>
  <t-layout class="layout">
        <t-header>Header</t-header>
        <t-layout>
          <t-aside>Aside</t-aside>
          <t-content>Content</t-content>
        </t-layout>
        <!-- <t-footer>Footer</t-footer> -->
      </t-layout>
</template>

<script setup lang="ts">
// import { setupCounter } from '@kuaitu/core'
import { ref, onMounted } from 'vue'


// import {
//   AddIcon,
//   CloudUploadIcon,
//   DiscountIcon,
//   CloudDownloadIcon,
// } from "tdesign-icons-vue-next";
// import Logo from "../assets/svg/assets-t-logo.svg?component";
onMounted(() => {
  // const btn = document.querySelector('#my')
  // setupCounter(btn)
})

</script>
<style lang="less" >
*{
  margin: 0;
  padding: 0;
}
#app{
  margin: 0;
  background: darkgray;
  height: 100vh;
}
.layout{
  height: 100vh;
}
</style>

