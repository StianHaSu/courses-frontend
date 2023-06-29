<template>
    <div class="flex justify-center">
        <div class="flex-col space-y-8">
            <div class="input-field-wrapper">
                <input class="input-field" v-model="code" placeholder="course code">
            </div>
            <div class="input-field-wrapper">
                <input class="input-field" v-model="name" placeholder="course name">
            </div>
            <div class="input-field-wrapper">
                <input class="input-field" v-model="description" placeholder="description">
            </div>
            <div class="input-field-wrapper">
                <input class="input-field" v-model="university" placeholder="university">
            </div>
            <div class="border border-black">
                <button class="mx-10 my-3" @click="createNewCourse()">
                    Submit    
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
export default {
    data(){
        return {
            code: "",
            name: "",
            description: "",
            university: ""
        }
    },

    methods: {
        createNewCourse() {
            axios({
                method: 'post',
                url: "http://localhost:8080/courses",
                data: {
                    courseCode: this.code,
                    courseName: this.name,
                    description: this.description,
                    university: this.university
                }
            }).then((response) => {
                this.code = ""
                this.name = ""
                this.description = ""
                this.university = ""
            })
        }
    }
}
</script>

<style>

.input-field-wrapper {
    @apply
    border border-black
}

.input-field {
    @apply
    px-8 py-3
}
</style>