<template>
    <div class="slider-container">
        <div id="slider" @touchmove="touchMove()" @clickmove="touchMove()">
            <div class="project-card" v-for="project in projects" >
                <img :src="project.image_path" alt="Image describing a project">
                <h2>{{ project.name }}</h2>
                <p>{{ project.description }}</p>
                <div class="github-button">
                    <a :href="project.link">
                        <p>See on Github</p>
                        <GithubIcon :width="30" :height="30"/>
                    </a>
                </div>
            </div>
        </div>
        <div class="buttons-container">
            <button class="slider-button" id="left-button" @click="slidesGoesLeft()">
                <LeftArrowIcon :width="46" :height="26"/>
            </button>
            <button class="slider-button" id="right-button" @click="slidesGoesRight()">
                <RightArrowIcon :width="46" :height="26"/>
            </button>
        </div>
    </div>


</template>

<script>
import projectsData from '/src/assets/models/projects.json';
import LeftArrowIcon from '../components/icons/LeftArrowIcon.vue';
import RightArrowIcon from '../components/icons/RightArrowIcon.vue';
import GithubIcon from '../components/icons/GithubIcon.vue'


export default {
    components: {
        LeftArrowIcon, RightArrowIcon, GithubIcon
    },
    data(){
        return {
            currentSlide: 0,
            middleSlide: 0,
            projects: projectsData,
            transformValue: '0px',
            transformPixels: 0,
            numberOfSlides: 0,
            offsetPixels: 0,
        }
    },
    mounted() {
        this.numberOfSlides = this.projects.length;
        this.currentSlide = Math.floor(this.numberOfSlides/2);
        this.middleSlide = Math.floor(this.numberOfSlides/2);
        if (this.numberOfSlides % 2 == 0) this.offset = 185;
        else this.offset = 0;
        this.transformPixels = this.offsetPixels;
    },      
    methods: {
        touchMove() {
            console.log("touch move started")
        },  
        slidesGoesLeft() {
            //if the currenslide != 0, so not full left
            //We just decrement it and translate a the slider
            if (this.currentSlide != 0) {
                this.currentSlide --;
                this.transformPixels -= 370;
            }
            //else we go back to full right
            else {
                this.currentSlide = this.numberOfSlides-1;
                let travelDistance = this.numberOfSlides % 2 == 0 ? this.middleSlide-1 : this.middleSlide;
                this.transformPixels = 370*(travelDistance);
            }
            this.transformValue = `${this.transformPixels+this.offset}px`; 
        },
        slidesGoesRight() {
            //if the currenslide != 0, so not full left
            //We just decrement it and translate a the slider
            if (this.currentSlide != this.numberOfSlides-1) {
                this.currentSlide ++;
                this.transformPixels += 370;
            }
            //else we go back to full right
            else {
                this.currentSlide = 0;
                this.transformPixels = -370*(this.middleSlide);
            }
            this.transformValue = `${this.transformPixels+this.offset}px`; 
        }
    }
}
</script>

<style scoped>

    img, h2 {
        margin-bottom: 20px;
    }

    p {
        text-align: justify;
    }

    a {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        margin-top: 20px;
    }

    a > p {
        margin-left: 10px; 
    }

    .slider-button {
        background: transparent;
        border: none;
        margin: 0 10px 0 10px;
    }

    .buttons-container {
        display: flex;
        justify-content: center;
    }

    .slider-container {
        width: 100%;
        min-width: 300px;
        overflow: hidden;
        padding: 20px 0;
        border: 2px solid var(--text-color);
        border-radius: 10px;
    }

    #slider {
        display: flex;
        justify-content: center;
        transform: translateX(v-bind('transformValue'));
        transition: 0.25s all ease-in-out;
    }
    .project-card {
        box-shadow: 2px 2px 5px var(--text-color);
        border-radius: 15px;
        min-height: 350px;
        min-width: 350px;
        max-width: 350px;
        max-height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        margin: 10px;
    }

    @media screen and (max-width: 800px) {
        .slider-container {
            border: none;
            padding: 0;
        }
    }


</style>