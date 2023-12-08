
<template>


  <div class="home">

    <div class="pagebody">

  <div class="block">
  </div>

    <div class="postList">
      <post-compo v-for="post in postList" :key ="post.postId"
        :postId="post.postId"
        :date="post.date"
        :uri="post.pictureURI"
        :text="post.text"
        :numberOfLikes="post.likeCount"
      ></post-compo>
    </div>


    <div class="block">
    </div>

    

  </div>
  </div>

  <button @click="resetAllLikes" class="reset-likes">
      <p>Reset likes for all posts</p>
    </button>
</template>
<script>
import postCompo from '@/components/postCompo.vue'

export default ({
  name: "homeView",
  components: {
    postCompo
  },
  methods: {
    resetAllLikes: function() {
      this.$store.dispatch('resetAllLikesAct');
    }
  },
  computed:{
    postList(){
      return this.$store.state.postList
    }
  }
})
</script>
