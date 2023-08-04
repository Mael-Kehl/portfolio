<template>
    <section>
        <h1 class="">
            ABOUT
        </h1>
        <aside>
            <div class="img-container">
                <img src="/assets/images/profile-pic.png" alt="profile picture">
                <div id="offset-outline"></div>
            </div>
            <div>
                <p>
                    Originaire des montagnes <strong>Vosgiennes</strong>, je suis un <strong>développeur</strong> passioné en quète de missions <strong>freelance</strong>
                    qui prépare un diplôme <strong>d'ingénieur</strong> par apprentissage chez <strong>Atos</strong> et <strong>Polytech Nancy</strong>.
                    <!-- Hey, I'm Maël, a French <strong>passionate developper</strong> and <strong>apprentice engineer</strong> born in the <strong>Vosges</strong> Mountains. 
                    After a two year computer science degree, I'm preparing a dual studies engineer diploma while proposing <strong>freelance services</strong>.
                    Otherwise, I love cinema, playing sports and hanging out with friends.  -->
                </p>
                
            </div>
        </aside>
        <div class="timeline-container">
            <article>
                <h2>
                    Études
                </h2>
                <TimeLine :places="studies"/>
            </article>
            <article>
                <h2>
                    Expériences
                </h2>
                <TimeLine :places="experiences"/>
            </article>
        </div>
    <Skills />
    </section>
</template>

<script>

import studiesData from "../assets/studies.json";
import experiencesData from "../assets/experiences.json";
import Skills from "./Skills.vue";
import TimeLine from "../components/TimeLine.vue";

export default {
    data() {
        return {
            studies: studiesData,
            experiences: experiencesData
        }
    },
    components: {TimeLine, Skills}
}

</script>

<style scoped>

section {
    padding: 50px 170px;
    width: 100%;
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