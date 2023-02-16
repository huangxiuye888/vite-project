<template>
  <svg-icon class-name="icon-bt" name="aaa"></svg-icon>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <template v-for="itemTab in tabs">
      <el-tab-pane v-if="activeLayer.attributeObj[itemTab.name]?.length" :key="itemTab.name" :label="itemTab.label" :name="itemTab.name">
        <ul>
          <li class="config_item" v-for="itemConfig in activeLayer.attributeObj[itemTab.name]">
            <el-form :model="form" class="config_form">
              <component :item="itemConfig" :labelWidth="100" :is="formDom[itemConfig.type]">
              </component>
            </el-form>
          </li>
        </ul>
      </el-tab-pane>
    </template>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref,shallowReactive } from 'vue'
import * as formItem from './components/FormItem'

const props = defineProps({
  activeLayer:{}
})
const formDom=shallowReactive({...formItem})

type MapToPromise<T> = { [K in keyof T]: Promise<T[K]> };
type Coordinate = [number, number]
type PromiseCoordinate = MapToPromise<Coordinate>;

const activeLayer = {
  name:'超链接',
  id:'',
  attributeObj:{
    config:[
      {
        name: '图层名称',
        type: 'input',
        value:'',
      },
      {
        name: '文本内容',
        type: 'input',
        layerType: '',
        value:''
      },
      {
        name: '字体字号',
        type: 'inputNumber',
        value:''
      },
      {
        name: '字体颜色',
        type: 'colorPicker',
        value:''
      },
      {
        name: '字体间距',
        type: 'inputNumber',
        value:''
      },
      {
        name: '字体背景',
        type: 'colorPicker',
        value:''
      },
      {
        name: '文字粗细',
        type: 'select',
        options: [{}],
        value:''
      },
      {
        name: '对齐方式',
        type: 'select',
        options: [{}],
        value:''
      },
    ],
    data:[
      {
        name:'数据类型',
      },
      {
        name:'刷新时间(毫秒)',
        type: 'inputNumber'
      },
      {
        name:'数据集',
        type: 'inputNumber'
      }
    ],
    location:[
      {
        name: '左边距',
        type: 'inputNumber'
      },
      {
        name: '上边距',
        type: 'inputNumber'
      },
      {
        name: '宽度',
        type: 'inputNumber'
      },
      {
        name: '高度',
        type: 'inputNumber'
      },
    ]
  }
}
const tabs = [
  {
    label: '配置',
    name: 'config'
  }, {
    label: '数据',
    name: 'data'
  }, {
    label: '坐标',
    name: 'location'
  }
]
const activeName = ref(tabs[0]?.name)
const form = ref('')
const handleClick = () => {

}
</script>

<style scoped lang="less">
.icon-bt {
  width: 200px;
  color: green;
}
.config_item{
  display:flex;
  white-space:nowrap;
  align-items: center;
  padding:0 10px;
  margin-top: 10px;
}
/deep/ .config_form .el-form-item__label{
  justify-content:flex-start;
}
/deep/ .config_form .el-form-item__content{
  width: 300px;
  .el-input-number,.el-select{
    width: 100%;
  }
}
</style>
