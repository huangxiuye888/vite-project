<template>
  <el-form-item :label="item.name" :label-width="item.labelWidth">
    <el-input v-model="value">
      <template #append>
        <el-color-picker v-model="value" @change="changValue" show-alpha/>
      </template>
    </el-input>
  </el-form-item>
</template>

<script setup lang="ts">
import { ref } from 'Vue'

const props = defineProps({
  item: {}
})
const value = ref('')
const changValue = () => {

}
</script>

<style scoped>

</style>
