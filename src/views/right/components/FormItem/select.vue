<template>
  <el-form-item :label="item.name" :label-width="item.labelWidth">
    <el-select v-model="value" placeholder="" @change="changValue">
      <el-option v-for="option in selectOptions" :label="option.label" :value="option.value"/>
    </el-select>
  </el-form-item>
</template>

<script setup lang="ts">
import { ref } from 'Vue'

const props = defineProps({
  item:{}
})
const selectOptions=props.item?.options
const value = ref('')
const changValue = () => {

}
</script>

<style scoped>

</style>
