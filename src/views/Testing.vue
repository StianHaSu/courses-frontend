<template>
    <div>
        <RatingCircle :score="8.9"></RatingCircle>
    </div>
</template>

<script lang="ts">
import RatingCircle from '../components/RatingCircle.vue';
export default {
    components: {
        RatingCircle
    }
}

</script>