<template>
    <article>
        <div>
            <h2>Compétences techniques</h2>
            <!-- <div class="graph-view-container">
                <div class="graph-view">
                    <div class="node" id="vue-js-node" :style="{top: pos+'px'}">
                        Vue.js
                    </div>
                    <div class="node" id="three-js-node" :style="{top: pos+'px'}">
                        three.js
                    </div>
                </div>
            </div> -->
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
            <h2>Points forts</h2>

            <p id="soft-skills-text">Fort des diverses missions que l'on m'a confié, je sais travailler en <strong>autonomie</strong>
            avec <strong>rigueur</strong>. Je suis <strong>motivé</strong> et je n'hésite pas à faire preuve
            <strong>d'initiative</strong> et à donner le <strong>meilleur</strong> de moi même pour mener à bien un projet.</p>
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
    width: 100%;
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