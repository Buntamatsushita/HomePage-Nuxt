<template>
    <div>
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
import { ID_INJECTION_KEY } from 'element-plus'
provide(ID_INJECTION_KEY, {
    prefix: 100,
    current: 0
})
</script>

<style></style>