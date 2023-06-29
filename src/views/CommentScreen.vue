<template>
    <div>
        Comments: 
        <li v-for="comment in comments">
            {{ comment.content }}
        </li>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import type Comment from '../model/Comment'

export default {
    props: {
        code: String,
    },

    data() {
        return {
            comments: [] as Comment[]
        }
    },

    methods: {
        fetchCommentsFromCourse() {
            axios({
                method: 'get',
                url: 'http://localhost:8080/'+this.code+"/comments"
            }).then((response) => this.comments = response.data)
        }
    },

    mounted(){
        this.fetchCommentsFromCourse()
    }
}
</script>