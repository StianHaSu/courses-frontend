<template>
    <div class="courseWrapper">
        <div class="mx-6 mt-4 flex-col font-light">
            <div class="text-3xl font-semibold">
                {{ courseCode }}
            </div>
            <div class="text-xl font-medium mt-2">
                {{ courseName }}
            </div>
            <div class="mt-20">
                {{ courseDescription }}
            </div>
            <div class="mt-10">
                {{ university }}
            </div>
        </div>
        <div class="flex justify-center">
            <div class="flex justify-evenly bottom-20 absolute w-full">
                <div>
                    <RatingCircle :score="usefulRating"/>
                </div>
                <div>
                    <RatingCircle :score="difficultyRating"/>
                </div>
                <div>
                    <RatingCircle :score="presentationRating"/>
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div class=" absolute bottom-5">
                <div class="mt-8 border border-black shadow-sm shadow-black rounded-lg">
                    <button @click="$router.push(courseCode+'/comments')" class="w-[200px] mx-2 my-1"><h1>Se kommentarfelt</h1></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import RatingCircle from './RatingCircle.vue';

    export default {
        props: {
            courseCode: String,
            courseName: String,
            courseDescription: String,
            university: String,
            usefulRating: Number,
            difficultyRating: Number,
            presentationRating: Number
        },

        components: {
            RatingCircle
        }

    }
</script>

<style scoped>

.courseWrapper{
    @apply
    w-[325px] h-[520px]
    border border-black
    shadow-sm shadow-black 
    relative

}

</style>