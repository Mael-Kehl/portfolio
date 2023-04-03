<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 26" :height="height" :width="width">
        <g clip-path="url(#clip0_4_50)">
        <path d="M0 13.688H43M43 13.688L32.175 2M43 13.688L32.175 24" stroke-width="3"/>
        </g>
        <defs>
        <clipPath id="clip0_4_50">
        <rect width="46" height="26" fill="white" transform="matrix(-1 0 0 1 46 0)"/>
        </clipPath>
        </defs>
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

path {
    stroke: var(--blue-color);
}
</style>