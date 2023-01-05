<template>
   <h2 align="center">Creating of new post</h2>
   <form
    class="form"
    @submit.prevent
   >
      <my-input
         placeholder="Post title"
         v-model="post.title"
         v-focus
      />
      <my-input
         placeholder="Post body"
         v-model="post.body"
      />
      <my-button
         class="create"
         @click="createPost"
      >Create</my-button>
   </form>
</template>



<script>
   export default {
      data() {
         return {
            post: {
               title: "",
               body: ""
            }
         }
      },

      emits: ['create', 'close'],

      methods: {
         createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
               title: "",
               body: ""
            }
         }
      }
   }
</script>



<style scoped>
   .form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 15px auto 0;
   }
</style>