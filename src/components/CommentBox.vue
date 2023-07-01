<template>
    <div class="border border-black shadow shadow-black rounded-md w-[300px] flex justify-start">
        <div class="my-auto mx-2 rounded-xl">
            <h1 class="mx-1 my-1">{{ commenter }}</h1>
        </div>
        <div class="font-mono mx-5 my-2">
            <h1>{{ content }}</h1>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        commenter: String,
        content: String,
        course: String
    }
}

</script>