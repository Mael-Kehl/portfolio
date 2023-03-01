<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 26" :height="height" :width="width">
        <path stroke="#40474B" stroke-width="3" d="M46 13.688H3m0 0L13.825 2M3 13.688L13.825 24"/>
    </svg>

</template>

<script>

export default {
    props: {
        width: Number,
        height: Number
    }
    
}
</script>

<style scoped>

svg {
    cursor: pointer;
}
</style>