<template>
    <div class="flex justify-center">
        <div :style="{'border-color': buttonColor}" id="circle" class="rounded-full border-[2px] w-16 h-16 flex justify-center">
            <div class="my-auto"> {{ score }} </div> 
        </div>
    </div>
</template>

<script lang="ts">
import { reactive, computed } from 'vue'


export default {
    props: {
        score: Number
    },

    data(){
        return {
            buttonColor: computed(() => {
                if (this.score == undefined) return "#100100"
                if (this.score >= 9) return "#43AA8B"
                if (this.score >= 7) return "#90BE6D"
                if (this.score >= 6) return "#F9C74F"
                if (this.score >= 4) return "#F3722C"
                if (this.score < 4) return "#F94144"
                else return "#F3722C"
            })
        }
    }

}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;



</style>
