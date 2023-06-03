<script setup>
const route = useRoute()

console.log(route.params);
</script>
<template>
    <div>
    <NuxtLayout>
        <p>Profile page</p>
    </NuxtLayout>
</div>
</template>