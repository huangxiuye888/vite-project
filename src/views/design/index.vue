<template>
  <div class="card">
    <SketchRule
      :thick="20"
      :scale="1"
      :width="2582"
      :height="1482"
      :startX="0"
      :startY="0"
      :shadow="1"
      :lines="{
        h: [100, 200],
        v: [100, 200]
      }"
    >
    </SketchRule>
  </div>
</template>
<script setup lang="ts">
import { right } from '@/views/right'
</script>
<style scoped></style>
