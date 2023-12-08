<template>
    <div class="post">
        <div class="posthead">
            <img class="headerimage" src="@/assets/me.png">
            <p class="headerdate">{{date}}</p>
        </div>
        <div class="postbody">
            <img class="bodyimage" :src=uri v-show="uri!=''">
            <p class="bodytext">{{text}}</p>
        </div>
        <div class="postfooter">
            <img class="footerimage" src="@/assets/likebutton.png" v-on:click="LikePost" >
            <p class="likes">{{numberOfLikes + " likes"}} </p> 
        </div>
    </div>
</template>
<script>
export default {
    name: "postCompo",
    methods: {
        LikePost: function(){
            this.$store.dispatch('likePostAct', {
                postId: this.postId
            });
        }
    },
    props: {
        postId:Number,
        date: String,
        uri:String,
        text:String,
        numberOfLikes:Number
    },
    data: function (){

    },
    computed:{

    }
}
</script>