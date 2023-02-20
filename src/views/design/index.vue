<template>
  <div class="layout">
    <div class="layout-left">
      <el-tabs type="card" :stretch="true">
        <el-tab-pane label="工具栏">
          <el-tabs tab-position="left" class="demo-tabs">
            <el-tab-pane v-for="(item, index) in widgetTools" :key="index" :label="item.name">
              <li
                v-for="(it, key) in item.list"
                :key="key"
                draggable="true"
                @dragstart="dragStart(it.type)"
                @dragend="dragEnd()"
              >
                <div class="tools-item">
                  <span class="tools-item-icon">
                    <svg-icon class-name="icon-bt" name="aaa"></svg-icon>
                  </span>
                  <span class="tools-item-title">{{ it.label }}</span>
                </div>
              </li>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane class="layout-left-label" label="图层">
          <li v-for="(it, key) in list" :key="key">
            <div class="tools-item">
              <span class="tools-item-icon">
                <svg-icon class-name="icon-bt" name="aaa"></svg-icon>
              </span>
              <span class="tools-item-title">{{ it.label }}</span>
            </div>
          </li>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="layout-center">
      <div class="layout-center-top"></div>
      <div class="layout-center-context">
        <div class="card">
          <SketchRule :thick="20" :scale="2" :width="x" :height="y" :startX="0" :startY="0">
          </SketchRule>
          <div @drop="widgetOnDragged($event)" @dragover="dragOver($event)">
            <widget />
          </div>
        </div>
      </div>
    </div>
    <div class="layout-right">
      <Right></Right>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { useContainerSize } from '@/hooks/useContainerSize'
import widget from './components/widget.vue'
import Right from '@/views/right/index.vue'
const state = reactive({
  widgetTools: [
    {
      name: '文本栏',
      list: [
        { type: 'text', icon: '', label: '文本' },
        { type: 'atext', icon: '', label: '超链接' },
        { type: 'table', icon: '', label: '表格' },
        { type: 'time', icon: '', label: '当前时间' }
      ]
    },
    {
      name: '文本栏',
      list: [
        { type: 'text', icon: '', label: '文本' },
        { type: 'atext', icon: '', label: '超链接' },
        { type: 'table', icon: '', label: '表格' },
        { type: 'time', icon: '', label: '当前时间' }
      ]
    },
    {
      name: '文本栏',
      list: [
        { type: 'text', icon: '', label: '文本' },
        { type: 'atext', icon: '', label: '超链接' },
        { type: 'table', icon: '', label: '表格' },
        { type: 'time', icon: '', label: '当前时间' }
      ]
    },
    {
      name: '文本栏',
      list: [
        { type: 'text', icon: '', label: '文本' },
        { type: 'atext', icon: '', label: '超链接' },
        { type: 'table', icon: '', label: '表格' },
        { type: 'time', icon: '', label: '当前时间' }
      ]
    },
    {
      name: '文本栏',
      list: [
        { type: 'text', icon: '', label: '文本' },
        { type: 'atext', icon: '', label: '超链接' },
        { type: 'table', icon: '', label: '表格' },
        { type: 'time', icon: '', label: '当前时间' }
      ]
    }
  ],
  list: [
    { type: 'text', icon: '', label: '文本' },
    { type: 'atext', icon: '', label: '超链接' },
    { type: 'table', icon: '', label: '表格' },
    { type: 'time', icon: '', label: '当前时间' }
  ]
})
const { x, y } = useContainerSize()
const dragStart = (widgetCode: string) => {
  console.log(widgetCode)
}
const dragEnd = () => {}
const dragOver = (evt: { preventDefault: () => void; stopPropagation: () => void }) => {
  evt.preventDefault()
  evt.stopPropagation()
}
const widgetOnDragged = (evt: any) => {
  console.log(evt)
}

const { widgetTools, list } = toRefs(state)
</script>
<style scoped lang="less">
.layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  &-left {
    width: 200px;
    height: 100%;
    // background-color: red;
    .tools-item {
      height: 40px;
      line-height: 40px;
      &-icon {
        margin-right: 10px;
        margin-left: 5px;
      }
      &-title {
        // margin-left:10px
      }
    }
    :deep(.el-tabs--border-card > .el-tabs__content) {
      padding: 0;
    }
    :deep(.el-tabs__item.is-left) {
      width: 60px;
      padding: 0 10px !important;
    }
  }
  &-center {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    &-top {
      height: 50px;
    }
    &-context {
      flex: 1;
      .card {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
      }
    }
  }
  &-right {
    width: 300px;
    height: 100%;
  }
}
</style>
