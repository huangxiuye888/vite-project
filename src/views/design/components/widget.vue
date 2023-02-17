<template>
  <Vue3DraggableResizable
    :initW="110"
    :initH="120"
    v-model:x="x"
    v-model:y="y"
    v-model:w="w"
    v-model:h="h"
    v-model:active="active"
    :draggable="true"
    :resizable="true"
    @activated="print('activated')"
    @deactivated="print('deactivated')"
    @drag-start="print('drag-start')"
    @resize-start="print('resize-start')"
    @dragging="print('dragging')"
    @resizing="print('resizing')"
    @drag-end="print('drag-end')"
    @resize-end="print('resize-end')"
  >
    测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
  </Vue3DraggableResizable>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
const state = reactive({
  x: 100,
  y: 100,
  h: 100,
  w: 100,
  active: false
})
const print = (val: any) => {
  console.log(val)
}
const { x, y, h, w, active } = toRefs(state)
</script>
