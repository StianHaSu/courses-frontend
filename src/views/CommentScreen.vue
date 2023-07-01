<template>
    <div class="h-screen mb-12">
        <div class="mt-10">
            <div class="absolute top-6 left-8">
                <button @click="$router.push('/')">
                    <i class="fa fa-home text-4xl" aria-hidden="true"></i>
                </button>    
            </div>
            <div class="flex-col">
                <div class="flex justify-center">
                    <h1 class="text-3xl font-mono">{{ code }}</h1>
                </div>
                <div class="flex justify-center">
                    <h1>Kommentarfelt</h1>
                </div>
            </div>
            <div class="flex justify-center mt-10">
                <div class="flex-col space-y-2">
                    <CommentBox v-for="comment in comments" :key="comment.id"
                        :commenter="comment.commenter"
                        :content="comment.content"
                    />
                </div>
            </div>
        </div>
    
    </div>
    <div class="flex justify-center sticky bottom-0">
        <!-- Might not be smart to fetch ALL comments here -->
        <CommentInput @new-comment="fetchCommentsFromCourse()"/>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import CommentBox from '../components/CommentBox.vue';
import CommentInput from '../components/CommentInput.vue'


export default {
    props: {
        code: String,
    },
    data() {
        return {
            comments: [] as Comment[]
        };
    },
    methods: {
        fetchCommentsFromCourse() {
            axios({
                method: "get",
                url: "http://localhost:8080/" + this.code + "/comments"
            }).then((response) => this.comments = response.data);
        }
    },
    mounted() {
        this.fetchCommentsFromCourse();
    },
    components: { CommentBox, CommentInput }
}
</script>