<script lang="ts">
import CourseInfo from '../components/CourseInfo.vue';
import SearchBar from '../components/CustomSearchBar.vue';

import axios from 'axios';


export default{
    components: {
        SearchBar,
        CourseInfo
    },
    
    data () {
        return {
            courses: [] as Course[]
        }
    },

    methods: {
        async fetchAllCourses() {
            const options = {
                method: 'GET',
		        url: 'http://localhost:8080/universities/universitet'
            };

            return axios.request(options).then( ({ data }: { data: Course[] }) => {
                this.courses = data
            })    
        }
    },
    
    mounted() {
        this.fetchAllCourses()
        console.log(this.courses)
    },
}


</script>

<template>
    <div class="flex justify-center">
        <SearchBar>Her</SearchBar> 
    </div>
    <div class="mt-10 flex justify-center">
        <div class="course-grid">
            <CourseInfo class="mx-2 my-2" v-for="c in courses" :key="c.courseCode" 
                :course-code="c.courseCode"
                :course-name="c.courseName"
                :course-description="c.courseDescription"
                :university="c.university"
                :useful-rating="c.useful"
                :difficulty-rating="c.difficulty"
                :presentation-rating="c.presentation"
             />
        </div>
    </div>
</template>

<style>
.course-grid {
    @apply
    grid grid-cols-1
}

@media only screen and (min-width: 750px) {
    .course-grid{
        @apply
        grid-cols-2
    }
}

@media only screen and (min-width: 1100px) {
    .course-grid{
        @apply
        grid-cols-3
    }
}

</style>