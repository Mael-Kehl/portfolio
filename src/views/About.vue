<template>
    <section>
        <article>
            <h1>
                Studies
            </h1>
            <TimeLine :places="studies"/>
        </article>
        <article>
            <h1>
                experiences
            </h1>
            <TimeLine :places="experiences"/>
        </article>
     
        

    </section>
</template>

<script>

import studiesData from "../assets/models/studies.json";
import experiencesData from "../assets/models/experiences.json";

import TimeLine from "../components/TimeLine.vue";

export default {
    data() {
        return {
            studies: studiesData,
            experiences: experiencesData
        }
    },
    components: {TimeLine}
}

</script>

<style scoped>

section {
    padding: 0 170px;
    width: 100%;
    display: flex;
    justify-content: space-around;
}

h1 {
    font-size: 30px;
    margin-bottom: 40px;
    text-transform: uppercase;
    width: fit-content;
    border-bottom: 3px solid var(--text-color);
}




</style>