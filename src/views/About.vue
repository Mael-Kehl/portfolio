<template>
    <section>
        <h1 class="underline">
            ABOUT
        </h1>
        <h2 id="who-am-i-title">Who am I ?</h2>
        <aside>
            <img src="/src/assets/images/profile-pic.jpg" alt="profile picture">
            <div>
                <p>
                Hey, I'm Maël, a French passionate developper and apprentice engineer born in the Montains of the Vosges. 
                After a two year computer science degree, I'm preparing a dual studies <strong>engineer</strong> diploma while proposing freelance services.
                Otherwise, I love cinema, playing sport and hanging out with friends. 
            </p>
            </div>
        </aside>
        <div class="timeline-container">
            <article>
                <h2>
                    Studies
                </h2>
                <TimeLine :places="studies"/>
            </article>
            <article>
                <h2>
                    experiences
                </h2>
                <TimeLine :places="experiences"/>
            </article>
        </div>
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
    padding: 50px 170px;
    width: 100%;
}

h1 {
    text-align: center;
}

h2 {
    font-size: 25px;
    margin: 0 0 40px 0;
    text-transform: uppercase;
    width: fit-content;
}

#who-am-i-title {
    margin: 40px 0 40px 85px;

}

p {
    width: 500px;
    text-align: justify;
    font-size: 18px;
}

img {
    height: 350px;
    width: 350px;
    border-radius: 50%;
    margin-right: 100px;
}


.timeline-container {
    display: flex;
    justify-content: space-around;
}

aside {
    margin: 0px 0 80px 0;
    display: flex;
    justify-content: start;
    align-items: center;
}


</style>