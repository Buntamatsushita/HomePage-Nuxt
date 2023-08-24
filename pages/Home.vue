<template>
    <NuxtLayout name="home">
        <div>
            <img src="https://picsum.photos/1920/300" class="main-img" />
            <h1>This is Home</h1>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
</script>

<style>
. {
    margin: 0;
}
.main-img {
    object-fit: cover;
    width: 100%;
}

h1 {
    color: red;
}
</style>