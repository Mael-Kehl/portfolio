import {createStore} from 'vuex';
import studies from "./assets/studies.json";
import experiences from "./assets/experiences.json";
import about from "./assets/about.json";
import contact from "./assets/contact.json";
import home from "./assets/home.json";





export default createStore({
    state: {
        currentLanguage: 'fr',
        translations: {
            "studies": studies.fr,
            "experiences": experiences.fr,
            "about": about.fr,
            "contact": contact.fr,
            "home" : home.fr
        }
    },
    mutations: {
        SET_LANGUAGE(state, language){
            state.currentLanguage = language;
            localStorage.currentLanguage = language;
        },
        SET_TRANSLATIONS(state, translations) {
            state.translations = translations;
        }
    },
    actions: {
        setLanguage({commit, state}, language) {
            if (language !== state.currentLanguage) {
                commit('SET_LANGUAGE', language);
            }
        },
        loadTranslations({commit, state}, language) {
            let translations = [];
            if (state.currentLanguage == 'fr') {
                translations["studies"] = studies.fr;
                translations["experiences"] = experiences.fr;
                translations["about"] = about.fr;
                translations["contact"] = contact.fr;
                translations["home"] = home.fr;
            }
            else {
                translations["studies"] = studies.en;
                translations["experiences"] = experiences.en;
                translations["about"] = about.en;
                translations["contact"] = contact.en;
                translations["home"] = home.en;
            }
            commit('SET_TRANSLATIONS', translations);
        }
    }
})