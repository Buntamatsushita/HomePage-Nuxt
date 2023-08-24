<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <el-menu-item index="0">LOGO</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1" to="/Home">Home</el-menu-item>
        <el-menu-item index="2" to="/About">About</el-menu-item>
        <el-sub-menu index="3">
            <template #title>Workspace</template>
            <el-menu-item index="3-1">item one</el-menu-item>
            <el-menu-item index="3-2">item two</el-menu-item>
            <el-menu-item index="3-3">item three</el-menu-item>
            <el-sub-menu index="3-4">
                <template #title>item four</template>
                <el-menu-item index="3-4-1">item one</el-menu-item>
                <el-menu-item index="3-4-2">item two</el-menu-item>
                <el-menu-item index="3-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
    </el-menu>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
  
<style>
.flex-grow {
    flex-grow: 1;
}
</style>