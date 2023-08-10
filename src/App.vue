<script setup lang="ts">
import { ref } from 'vue'
import { KButton, KModal } from 'kbfmf-libraries-beta'

const showModal = ref(true)
</script>

<template>
  <KButton 
    :loading="false"
    appearance="primary"
    size="default"
    append-icon="uil:check"
    class="my-4"
    :active="false"
    :disabled="false"
  >
    Button
  </KButton>

  <KModal :show-modal="showModal">
    <template #title>
      Purchase
    </template>
    <template #message>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quia dolores dolor, modi qui omnis rem, iste esse perspiciatis</p>
    </template>
    <template #icon>
      <Icon
        width="50"
        icon="uil:x"
        class="h-7 w-7"
      />
    </template>
    <template #buttons>
      <KButton
        :loading="false"
        appearance="secondary"
        size="compact"
        class=""
        :active="false"
        :disabled="false"
        @click="showModal = false"
      >
        Batal
      </KButton>
      <KButton
        :loading="false"
        appearance="primary"
        size="default"
        append-icon="uil:check"
        class="my-4"
        :active="false"
        :disabled="false"
        @click="showModal = false"
      >
        Lanjutkan
      </KButton>
    </template>
  </KModal>
</template>

<style scoped>

</style>
