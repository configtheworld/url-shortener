<template>
    <div class="url-shortener-form">
        <h1> Url shortener form </h1>
<form class="" method="post" @submit.prevent="handlePostUrl">
 <input type="text" name="url"  v-model="url">
 <button type="submit" name="button">Convert</button>
 </form>
    </div>
    <hr/>
    <div>
        <ul id="example-1">
            <li v-for="item in shortUrls" :key="item.shortId">
                {{ item.shortId + " --> "+item.url }}
            </li>
        </ul>
    </div>
    <div>
        <button @click="handleGetRandomUser">
            Test
        </button>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import axios from 'axios'

export default defineComponent({
    name:"UrlShortenerForm",
    data(){
        return{
            url:"",
            shortUrls:[] as Array<any>
        };
    },
    methods:{
        handlePostUrl: async function(){
            axios.post("http://localhost:3000/urls",this.url, 
                    { headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                     }
                }).then(response=>{
                    const item = reactive(response.data)
                    this.shortUrls.push(item)
                });
        },
        handleGetRandomUser: async function(){
            try {
                
                let res = await axios.get("https://randomuser.me/api/",
                { headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
                console.log(res.data);
                
            } catch (error) {
                console.log(error);
            }
        }
    }
});
</script>

<style scoped>

h1{
    color:#333;
    font-size:34px;
    font-family: Arial, Helvetica, sans-serif;
}

</style>