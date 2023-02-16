<template>
  <div class="layout">
    <div class="layout-left">
      <el-tabs type="border-card">
        <el-tab-pane label="User">User</el-tab-pane>
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
      </el-tabs>
    </div>
    <div class="layout-center">
      <div class="layout-center-top"></div>
      <div class="layout-center-context">
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
      </div>
    </div>
    <div class="layout-right"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="less">
.layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  &-left {
    width: 100px;
  }
  &-center {
    flex: 1;
  }
  &-right {
    width: 200px;
  }
}
</style>
