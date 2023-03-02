<template>
    <section class="projects-container">
        <h1 class="underline">
            projects
        </h1>
        <h2>
            Personnal Projects
        </h2>
        <ProjectsSlider />
        <KeepAlive>
            <GithubContributions />
        </KeepAlive>
    </section>
</template>

<script>

import GithubContributions from '../components/GithubContributions.vue';
import ProjectsSlider from '../components/ProjectsSlider.vue';

export default {
    components: {GithubContributions, ProjectsSlider}
}
</script>

<style scoped>


h1 {
    text-align: center;
    margin-bottom: 40px;
}
h2{
    text-transform: uppercase;
    margin-bottom: 30px;
}
.projects-container {
    padding: 0 170px;
}

@media screen and (max-width: 800px) {
    .projects-container {
        padding: 0 20px;
    }
}

</style>