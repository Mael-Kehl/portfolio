<template>
    <section>
        <div class="title-container">
            <h1> Contact </h1>
            <PhoneIcon :width="40" :height="40" />
        </div>
    </section>

</template>


<script>

import PhoneIcon from '../components/PhoneIcon.vue';

export default {
    components: {
        PhoneIcon,
    },

}

</script>

<style scoped>

section {
    padding: 0 100px;
}

.title-container {
    display: flex;
    align-items: center;
}

.title-container > h1 {
    margin-right: 20px;
    font-size: 40px;
}


</style>