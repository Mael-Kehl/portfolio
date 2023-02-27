<template>
    <section class="projects-container">
        <GithubContributions />
    </section>
</template>

<script>

import GithubContributions from '../components/GithubContributions.vue';

export default {
    components: {GithubContributions}
}
</script>

<style scoped>

.projects-container {
    padding: 0 100px;
}

</style>