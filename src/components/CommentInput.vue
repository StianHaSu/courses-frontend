<template>
    <div class="bg-slate-200 w-screen bg-opacity-40 py-5">
        <div class="flex justify-center mx-3 space-x-2">
            <div class="border border-slate-700 rounded-sm shadow-sm shadow-zinc-500">
                <input class="text-center px-12 h-full" @keyup.enter="postNewComment()" v-model="comment" placeholder="Skriv en kommentar"/>
            </div>
            <div class="my-auto mx-3 border border-slate-700 rounded-3xl shadow-md shadow-slate-700">
                <button @click="postNewComment()"><i class="fa fa-paper-plane-o text-2xl px-3 py-2" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
export default {
    data(){
        return {
            comment: ""
        }
    },

    methods: {
        postNewComment(){
            if (this.comment.length == 0) return

            axios({
                method: 'post',
                url: 'http://localhost:8080/'+this.$route.params.course+'/comments',
                data: {
                    //Hardcoded
                    commenter: 'Stian',
                    content: this.comment
                }
            }).then(() => {
                this.comment = ""
                this.$emit('new-comment')
            })

        }
    }
}

</script>