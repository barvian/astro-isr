<script setup>
    const server = typeof window === 'undefined'
</script>
<template>
    is server: {{ server }}
</template>