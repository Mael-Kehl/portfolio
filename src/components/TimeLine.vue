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
}

.date-circle {
    width: 110px;
    height: 110px;
    display: flex;
    transform: rotate(45deg);
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: var(--text-color);
    color: var(--background-color);
}

.linking-line {
    background-color: var(--text-color);
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
    
</style>