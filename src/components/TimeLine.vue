<template>
    <div class="container" v-for="place in this.places">
        <aside>
            <div v-if="place.isFinished" class="date-circle">
                <span>{{ place.begin }}-{{ place.end }}</span>
            </div>
            <div v-else class="date-circle">
                <span>{{ place.begin }}</span>
            </div>
            <div v-if="!place.isFirst" class="linking-line">
            </div>
        </aside>
        
        <div class="text">
            <h3>{{ place.title }}</h3>
            <div class="flex">
                <LocationIcon :width="24" :height="24"/>
                <h4>{{ place.name }}, {{ place.location }}</h4>
            </div>
            <p>{{ place.description }}</p>
        </div>
    </div>
</template>

<script>
import LocationIcon from "../components/icons/LocationIcon.vue";


export default {
    props: {
        places: Object
    },
    components: {
        LocationIcon
    }
}
</script>
<style scoped>

h3 {
    font-size: 18px;
    text-transform: uppercase;
}

h4 {
    font-size: 15px;
}

p {
    text-align: justify;
    width: 400px;
}

span {
    transform: rotate(-45deg);
    font-size: 16px;
    font-weight: 600;
}

.date-circle {
    width: 100px;
    height: 100px;
    display: flex;
    transform: rotate(45deg);
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-color);
    color: var(--text-color);
}

.linking-line {
    background-color: var(--blue-color);
    width: 8px;
    height: 100px;
}

aside {
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}

.container{
    display: flex;
}

.text {
    margin-left: 30px;
}

@media screen and (max-width: 800px) {

    h3 {
        font-size: 16px;
    }

    h4 {
        font-size: 13px;
    }

    p {
        text-align: justify;
        width: 100%;
        font-size: 12px;
    }
    .date-circle {
        width: 80px;
        height: 80px;
        font-size: 14px;
    }

    .linking-line {
        height: 100px;
    }

    aside {
        margin: 0;

    }

    .text {
        margin-left: 20px;
    }


}
    
</style>