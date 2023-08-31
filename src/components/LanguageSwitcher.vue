<template>
    <div class="language-switcher" @click="showDropDown()">
       
        <button @click="switchLanguage('fr')"><FrenchFlag :width="25" :height="15" /> </button>
        <button @click="switchLanguage('en')"><UsFlag :width="25" :height="15"/></button>
        
    </div>
</template>

<script>
import FrenchFlag from './icons/FrenchFlag.vue';
import UsFlag from './icons/UsFlag.vue';


export default {
    components : {FrenchFlag, UsFlag},
    methods: {
        switchLanguage(language) {
            //First we set the current language
            this.$store.dispatch('setLanguage', language);
            //Then we load translations based on the current language
            this.$store.dispatch('loadTranslations', language);

        },
        showDropDown(){
            const arrow = document.getElementById("arrow");
        }
    }
}
</script>

<style scoped>

    #lang-selector {
        border: none;
        background: none;
    }



    .language-switcher {
        display: flex;
        height: 25px;
        width: 60px;
        justify-content: space-between;
    }


    button {
        border: none;
        background: none;
        text-decoration: none;
        margin: 0;
    }
</style>