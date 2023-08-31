<template>
    <section>
        <h1 class="">
            {{this.$store.state.translations.about.pageTitle}}
        </h1>
        <aside>
            <div class="img-container">
                <img src="/assets/images/profile-pic.png" alt="profile picture">
                <div id="offset-outline"></div>
            </div>
            <div>
                <!-- v-html allows us to transform our json input into html, good solution cuz the source is controlled -->
                <p v-html="this.$store.state.translations.about.aboutText"></p>
            </div>
        </aside>
        <div class="timeline-container">
            <article>
                <h2>
                    {{this.$store.state.translations.about.studiesTitle}}
                </h2>
                <TimeLine :places="this.$store.state.translations.studies"/>
            </article>
            <article>
                <h2>
                    {{this.$store.state.translations.about.experiencesTitle}}

                </h2>
                <TimeLine :places="this.$store.state.translations.experiences"/>
            </article>
        </div>
    <Skills />
    </section>
</template>

<script>

import Skills from "./Skills.vue";
import TimeLine from "../components/TimeLine.vue";

export default {
    data() {
        return { 
        }
    },

    components: {TimeLine, Skills},
    
}

</script>

<style scoped>

section {
    padding: 50px 170px;
    max-width: 100%;
    overflow: hidden;
}

h1 {
    margin-bottom: 40px;
}

h2 {
    font-size: 25px;
    margin: 0 0 40px 0;
    text-transform: uppercase;
    width: fit-content;
}


p {
    width: 500px;
    text-align: justify;
    font-size: 18px;
}

.img-container {
    position: relative;
}

img {
    height: 220px;
    width: 220px;
    margin-right: 100px;
}

#offset-outline {
    position: absolute;
    top: 50px;
    left: -50px;
    border: 10px solid var(--blue-color);
    height: 220px;
    width: 220px;
    z-index: -20;
}

.timeline-container {
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
    
}

aside {
    margin: 0px 0 80px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 800px) {
    section {
        padding: 0 20px;
    }

    img {
        height: 200px;
        width: 200px;
        margin: 0 0 20px 0;
    }

    p {
        font-size: 1.25em;
        width: 100%;
    }
    
    aside {
        flex-direction: column;
    }

    #offset-outline {
        position: absolute;
        top: 40px;
        left: -40px;
        border: 8px solid var(--blue-color);
        height: 200px;
        width: 200px;
        z-index: -20;
    }

    .img-container {
        margin-bottom: 40px;
    }

    .timeline-container {
        flex-direction: column;
        padding: 0 20px;
    }

    article {
        margin-bottom: 30px;
    }


}


</style>