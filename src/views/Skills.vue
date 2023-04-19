<template>
    <section>
        <h1>Skills</h1>
        <div class="graph-view-container">
            <div class="graph-view">
                <div class="node" id="vue-js-node" :style="{top: pos+'px'}">
                    Vue.js
                </div>
                <div class="node" id="three-js-node" :style="{top: pos+'px'}">
                    three.js
                </div>
            </div>
        </div>
    </section>
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

section {
    padding: 50px 170px;
    height: 85vh;
}

.graph-view-container {
    border:solid red 2px;
    height: 60vh;
    width: 80vw;
    padding: 50px;
}
.graph-view {
    position: relative;
    min-width: 100%;
    min-height: 100%;
    border: 2px solid cyan;
}

.node {
    display: flex; justify-content: center; align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: var(--blue-color);
    color: var(--text-color);
}

#vue-js-node {
    position: absolute;
    top: 50px;
    left: 50px;
    animation: move-vue-node 10s ease-in-out infinite, scale 3s ease infinite;
}

#three-js-node {
    position: absolute;
    top: 400px;
    left: 300px;
    animation: move-three-node 10s ease-in-out infinite,scale 3s ease infinite;

}

/* Responsive animation for vue.js skill node */
@keyframes move-vue-node {
    0% { top: calc(0.1 * 100%); left: calc(0.1 * 100%); }
    25% { top: calc(0.1 * 100% + 50px); left: calc(0.1 * 100% + 50px); }
    50% { top: calc(0.1 * 100% - 20px); left: calc(0.1 * 100% + 130px); }
    75% { top: calc(0.1 * 100% + 70px); left: calc(0.1 * 100% - 30px); }
    100% { top: calc(0.1 * 100%); left: calc(0.1 * 100%); }
}

/* Responsive animation for three.js skill node */
@keyframes move-three-node {
    0% { top: calc(0.5 * 100%); left: calc(0.6 * 100%); }
    25% { top: calc(0.5 * 100% - 80px); left: calc(0.6 * 100% + 40px); }
    50% { top: calc(0.5 * 100%); left: calc(0.6 * 100%); }
    75% { top: calc(0.5 * 100% - 120px); left: calc(0.6 * 100% + 30px); }
    100% { top: calc(0.5 * 100%); left: calc(0.6 * 100%); }
}

@keyframes scale {
    0%{ width: 70px; height: 70px; }
    50%{ width: 80px; height: 80px; }
    100%{ width: 70px; height: 70px; }
}

</style>