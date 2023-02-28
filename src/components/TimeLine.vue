<template>
    <div class="container" v-for="place in this.places">
        <aside>
            <div v-if="place.isFinished" class="date-circle">
                {{ place.begin }}-{{ place.end }}
            </div>
            <div v-else class="date-circle">
                {{ place.begin }}
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

.date-circle {
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--text-color);
    color: var(--background-color);
}

.linking-line {
    background-color: var(--text-color);
    width: 5px;
    height: 100px;
}

aside {
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container{
    display: flex;
}

.text {
    margin-left: 30px;
}
    
</style>