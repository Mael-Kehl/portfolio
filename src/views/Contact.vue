<template>
    <section>
        <div class="title-container">
            <h1 class="underline"> Contact </h1>
            <!-- <PhoneIcon :width="60" :height="60" /> -->
        </div>
        <div class="contact-fields-container">
            <article  class="contact-field">
                <GithubIcon :width="30" :height="30"/>
                <a href="https://github.com/Mael-Kehl">
                    github.com/Mael-Kehl
                </a>
            </article>
            <article  class="contact-field">
                <ProtonIcon :width="30" :height="30"/>
                <a href="mailto:mael-kehl@protonmail.com">
                    mael-kehl@protonmail.com
                </a>
            </article>
            <article  class="contact-field">
                <SmartPhoneIcon :width="30" :height="30"/>
                <a href="tel:+33783234775">
                    +33 7 83 23 47 75
                </a>
            </article>
            <h2>Hire me</h2>
            <article  class="contact-field">
                <MaltIcon :width="30" :height="30"/>
                <a href="https://www.malt.fr/profile/maelkehl">
                    malt.fr/profile/maelkehl
                </a>
            </article>
            <article  class="contact-field">
                <UpWorkIcon :width="30" :height="22"/>
                <a href="https://www.upwork.com/freelancers/~0105112c399f37548d?viewMode=1">
                    upwork.com/freelancers/Mael. K
                </a>
            </article>
            <article  class="contact-field">
                <LinkedinIcon :width="30" :height="30"/>
                <a href="https://www.linkedin.com/in/ma%C3%ABl-kehl-a15970225/">
                    linkedin.com/mael-Kehl
                </a>
            </article>
            <h2>Buy my products</h2>
            
            <article  class="contact-field">
                <EtsyIcon :width="30" :height="30"/>
                <a href="https://www.etsy.com/fr/shop/Endor3DPrint?ref=simple-shop-header-name&listing_id=1372643214">
                    etsy.com/Endor3DPrint
                </a>
            </article>
        </div>
    </section>

</template>


<script>

import PhoneIcon from '../components/icons/PhoneIcon.vue';
import GithubIcon from '../components/icons/GithubIcon.vue';
import SmartPhoneIcon from '../components/icons/SmartPhoneIcon.vue';
import ProtonIcon from '../components/icons/MailIcon.vue';
import MaltIcon from '../components/icons/MaltIcon.vue';
import UpWorkIcon from '../components/icons/UpWorkIcon.vue';
import EtsyIcon from '../components/icons/EtsyIcon.vue';
import LinkedinIcon from '../components/icons/LinkedinIcon.vue';

export default {
    components: {
    PhoneIcon,
    GithubIcon,
    SmartPhoneIcon,
    ProtonIcon,
    MaltIcon,
    UpWorkIcon,
    EtsyIcon,
    LinkedinIcon
},

}

</script>

<style scoped>

section {
    padding: 0 170px;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.title-container {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}

.title-container > h1 {
    margin-right: 20px;
}

.contact-field {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin-bottom: 20px;
}

h2 {
    margin-bottom: 20px;
}

a {
    font-size: 16px;
    margin-left: 10px;
}

.contact-fields-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}


</style>