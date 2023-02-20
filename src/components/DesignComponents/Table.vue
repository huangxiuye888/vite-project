<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column v-for="item in column" :key="item.prop" v-bind="item">
      <template v-if="item.needSlot" #default="{ row, column, $index }">
        <slot :name="item.prop" v-bind="{ row, column, $index }"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
const props = defineProps({
  tableData: {
    type: Array,
    default: () => [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }
    ]
  },
  column: {
    type: Array as any,
    default: () => [
      { prop: 'date', label: '日期', width: 180 },
      { prop: 'name', label: '姓名', width: 180 },
      { prop: 'address', label: '地址', width: 180, needSlot: true }
    ]
  }
})
const { tableData } = toRefs(props)
</script>
<style scoped lang="less"></style>
