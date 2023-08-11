<template>
    <section>

        <div class="title-container">
            <h1 class=""> Contact </h1>
            <!-- <PhoneIcon :width="60" :height="60" /> -->
        </div>
        <aside>
            <div class="contact-fields-container">
                <h2>Comment faire appel à moi ?</h2>
                <p id="freelance-contact-text">
                    Actuellement <strong>auto-entrepreneur</strong>, vous pouvez me faire part de votre <strong>projet</strong> par <strong>Mail</strong> ou via <strong>Malt</strong>. 
                    Je suis spécialisé dans le développement de <strong>solutions web</strong> pour les entreprises, allant d'un <strong>site vitrine</strong> à une infrastracture complète de <strong>e-boutique</strong>. 
                    <br><br>N° de <strong>SIRET</strong> : 95275322600010
                </p>
                <article  class="contact-field">
                    <ProtonIcon :width="30" :height="30"/>
                    <a href="mailto:mael-kehl@protonmail.com">
                        mael-kehl@protonmail.com
                    </a>
                </article>
                <!-- <article  class="contact-field">
                    <SmartPhoneIcon :width="30" :height="30"/>
                    <a href="tel:+33783234775">
                        +33 7 83 23 47 75
                    </a>
                </article> -->
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
                    <GithubIcon :width="30" :height="30"/>
                    <a href="https://github.com/Mael-Kehl">
                        github.com/Mael-Kehl
                    </a>
                </article>
                <article  class="contact-field">
                    <LinkedinIcon :width="30" :height="30"/>
                    <a href="https://www.linkedin.com/in/ma%C3%ABl-kehl-a15970225/">
                        linkedin.com/mael-Kehl
                    </a>
                </article>
               
            </div>
            <div class="contact-fiels-container">
                <h2>Impression 3D</h2>
                
                <article  class="contact-field">
                    <EtsyIcon :width="30" :height="30"/>
                    <a href="https://www.etsy.com/fr/shop/Endor3DPrint?ref=simple-shop-header-name&listing_id=1372643214">
                        etsy.com/Endor3DPrint
                    </a>
                </article>
                <article  class="contact-field">
                    <ThigiverseIcon :width="30" :height="30"/>
                    <a href="https://www.thingiverse.com/dashvolt/designs">
                        thingiverse.com/dashvolt/designs
                    </a>
                </article>
                <h2>Un petit tip ? </h2>
                <article  class="contact-field">
                    <PaypalIcon :width="30" :height="30"/>
                    <a href="https://www.paypal.me/maelkehl">
                        paypal.me/maelkehl
                    </a>
                </article>
            </div>
        </aside>
    </section>

</template>


<script>

import GithubIcon from '../components/icons/GithubIcon.vue';
import SmartPhoneIcon from '../components/icons/SmartPhoneIcon.vue';
import ProtonIcon from '../components/icons/MailIcon.vue';
import MaltIcon from '../components/icons/MaltIcon.vue';
import UpWorkIcon from '../components/icons/UpWorkIcon.vue';
import EtsyIcon from '../components/icons/EtsyIcon.vue';
import LinkedinIcon from '../components/icons/LinkedinIcon.vue';
import ThigiverseIcon from '../components/icons/ThigiverseIcon.vue';
import PaypalIcon from '../components/icons/PaypalIcon.vue';

export default {
    components: {
    GithubIcon,
    SmartPhoneIcon,
    ProtonIcon,
    MaltIcon,
    UpWorkIcon,
    EtsyIcon,
    LinkedinIcon,
    ThigiverseIcon,
    PaypalIcon
},

}

</script>

<style scoped>

section {
    padding: 0 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

aside {
    display: flex;
    width: 100%;
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

#freelance-contact-text {
    width: 600px;
    text-align: justify;
    font-size: 18px;
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
    margin-right: 100px;
}

@media screen and (max-width: 800px) {
     section {
        padding: 0 40px;
     }

     aside {
         flex-direction: column;
     }

     .contact-fields-container {
        margin: 0;
    }
    #freelance-contact-text {
        width: 100%;
    }
}


</style>