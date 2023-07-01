<template>
    <div class="flex justify-center">
        <div id="g_id_onload"
            data-client_id="855671077879-1o83nrkqbrn2qchmr7um0dhdi5pclsah.apps.googleusercontent.com"
            data-context="signin"
            data-ux_mode="popup"
            data-login_uri=""
            data-nonce=""
            data-auto_prompt="true">
        </div>
        <div class="g_id_signin"
             data-type="standard"
             data-shape="rectangular"
             data-theme="outline"
             data-text="signin_with"
             data-size="large"
             data-logo_alignment="left">
        </div>
    </div>
    <div class="mt-20 flex justify-center">
        <button @click="test">Test</button>
    </div>
</template>
<script lang="ts">
import axios from 'axios';
export default {
    methods: {
        test() {
            axios({
                method: 'get',
                url: 'http://localhost:8080/secured/test',
                
            })
        }
    }
}
</script>