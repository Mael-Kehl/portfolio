<template>
    <article>
        <div>
            <h2>{{this.$store.state.translations.about.techSkillsTitle}}</h2>
            <div class="technical-skills">
                <span>
                    <img src="/assets/images/logo-java.png" alt="Java icon">
                    <p>Java</p>
                </span>
                <span>
                    <img src="/assets/images/logo-javascript.png" alt="JavaScript icon">
                    <p>JavaScript</p>
                </span>
                <span>
                    <img src="/assets/images/logo-html-css.png" alt="HTML/CSS icon">
                    <p>HTML/CSS</p>
                </span>
                <span>
                    <img src="/assets/images/logo-vue.png" alt="Vue icon">
                    <p>Vue</p>
                </span>
                <span>
                    <img src="/assets/images/logo-three.png" alt="Three.js icon">
                    <p>Three.js</p>
                </span>
                <span>
                    <img src="/assets/images/logo-flutter.png" alt="Three.js icon">
                    <p>Flutter</p>
                </span>
            </div>
        </div>
        <div class="soft-skills">
            <h2>{{this.$store.state.translations.about.softSkillsTitle}}</h2>

            <p id="soft-skills-text" v-html="this.$store.state.translations.about.softSkillsText"></p>
        </div>
    </article>
       
</template>

<script>

export default {
    data() {
        return {
            pos: 0,
        }
    },
    mounted() {
        
    },
    methods : {

    },
}
</script>

<style scoped>


span {
    display: flex;
    align-items: center;
    margin: 20px 0 20px 0;
}

article {
    width: 100%;
    margin-left: 80px;
    display: flex;
}

span > img {
    width: auto;
    height: 30px;
    margin-right: 10px;
}


p {
    font-size: 1.25rem;
}

h2 {
    width: 100%;
}
.technical-skills{
    width: 30vw;
}
.soft-skills {
    width: 30vw;
}

#soft-skills-text {
    margin-top: 30px;
    max-width: 100%;
    text-align: justify;
}

@media screen and (max-width: 800px) {
    
    article {
        display: flex;
        flex-direction: column;
        margin: 0;
    }

    .technical-skills {
        width: 100%;
    }
    .soft-skills {
        margin: 0;
        width: 100%;
    }

    #soft-skills-text {
        width: 100%;
    }
}


</style>