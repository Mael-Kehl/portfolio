<template>
    <section>
        <div class="contribution-title">
            <h2>
                Contribution history 
            </h2>
            <GithubIcon :height="35" :width="35"/>
        </div>
        <aside>
            <div v-for="stat in stats">
                <div class="contribution-card" v-if="stat.author_association==='CONTRIBUTOR'">

                    <span class="contribution-date">  
                        {{stat.closed_at.split('-')[2].substring(0,2)}}/{{stat.closed_at.split('-')[1]}}/{{stat.closed_at.split('-')[0]}}
                    </span>

                <article class="repo-infos-container">
                    <div class="repo-infos">
                        <div class="repo-infos-field" v-if="stat.repo != undefined">
                            <p><a v-if="stat.repo!=undefined" :href="stat.repo.html_url">{{ stat.repo.name }} </a></p> 
                            <RepoIcon :width="20" :height="20"/>                
                        </div>
                        <div class="repo-infos-field">
                            <p><a v-if="stat.repo!=undefined" :href="stat.repo.owner.html_url">{{ stat.repo.owner.login }}</a></p>
                            <AuthorIcon :width="20" :height="20"/>

                        </div>
                        <div class="repo-infos-field">
                            <p>{{ numberWithCommas(stat.repo.stargazers_count) }} </p>
                            <StarIcon :width="20" :height="20"/>
                        </div>
                    </div>
                </article>
                <p class="pr-title">{{stat.title}}</p>
                </div>
            </div>
        </aside>
    </section>
</template>

<script>
import { ref } from 'vue';
import StarIcon from '../components/icons/StarIcon.vue';
import RepoIcon from '../components/icons/RepoIcon.vue';
import AuthorIcon from '../components/icons/AuthorIcon.vue';
import GithubIcon from '../components/icons/GithubIcon.vue';


export default {
    components: {StarIcon, AuthorIcon, RepoIcon, GithubIcon},
    data() {
        return {
            stats: ref(null),
        }
    }, 
    mounted() {

        //Fetch all pull requests i've done as a contributor
        fetch('https://api.github.com/search/issues?q=author%3Amael-kehl+type%3Apr')
        .then(response => response.json())
        .then(data => {
            this.stats = data.items;
            this.fetchRepos(this.stats);
        })
    },
    methods: {
        /**
         * Fetches data about repositorys where I've done pull requests
         * @param {*} stats 
         */
        fetchRepos(stats) {
            stats.forEach(async stat => {

                let author = stat.url.split('/')[4];
                let title = stat.url.split('/')[5];

                let url = "https://api.github.com/repos/" + author + "/" + title;

                let data = await fetch(url)
                .then(response => response.json())
                .then(data => {
                    return data;
                })
                stat.repo = data;
            });
        },
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }


}
</script>

<style scoped>


    h2{
        text-transform: uppercase;
        margin-right: 10px;
    }

    p {
        margin-right: 10px;
        font-weight: 500;
    }

    aside { 
        display: flex;
        flex-wrap: wrap;
    }

    .contribution-title {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
    }

    .contribution-card {
        position: relative;
        width: 350px;
        height: 200px;
        padding: 10px;
        border: dashed 3px var(--dark-grey-color);
        border-radius: 15px;
        margin: 0 25px 0 0;
    }

    .contribution-date {
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        padding: 10px 15px;
        border-radius: 20px;
        color: var(--dark-grey-color);
        border: solid 2px var(--dark-grey-color);
        font-size: 16px;
        font-weight: 600;
    }

    .repo-infos-container {
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
    }

    .repo-infos {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .repo-infos-field {
        display: flex;
        align-items: center;
    }

    .pr-title {
        margin: 50px 10px 0 10px;
        text-align: justify;
    }
    
</style>