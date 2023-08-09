<script setup lang="ts">
import { KButton } from 'kbfmf-libraries-beta-2'
import 'kbfmf-libraries-2/dist/style.css'

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
</template>

<style scoped>

</style>
