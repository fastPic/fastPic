<template>
  <t-config-provider :global-config="{ classPrefix: 't' }">
    <div id="my"></div>
    <t-space direction="vertical" style="width: 100%; text-align: center">
      <logo />
      <h3>Welcome to use TDesign！</h3>
      <t-space>
        <t-button theme="primary">
          <add-icon />
          新建
        </t-button>
        <t-button variant="outline">
          <cloud-upload-icon />
          上传文件
        </t-button>
        <t-button shape="circle" theme="primary">
          <discount-icon />
        </t-button>
        <t-button shape="circle" theme="primary">
          <cloud-download-icon />
        </t-button>
        <t-button variant="outline"> 搜索 </t-button>
      </t-space>
    </t-space>
  </t-config-provider>
</template>

<script setup lang="ts">
import { setupCounter } from '@kuaitu/core'
import { ref, onMounted } from 'vue'


import {
  AddIcon,
  CloudUploadIcon,
  DiscountIcon,
  CloudDownloadIcon,
} from "tdesign-icons-vue-next";
import Logo from "../assets/svg/assets-t-logo.svg?component";
onMounted(() => {
  const btn = document.querySelector('#my')
  setupCounter(btn)
})

</script>

