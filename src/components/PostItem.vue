<template>
   <div
      class="post-list__post post"
   >
      <div class="post__body">
         <div class="post__property"><strong>Likes:</strong> {{ $store.state.likes }}</div>
         <div class="post__property"><strong>Post ID:</strong> {{ post.id }}</div>
         <div class="post__property"><strong>Post title:</strong> {{ post.title }}</div>
         <div class="post__property"><strong>Post body:</strong> {{ post.body }}</div>
      </div>
      <div class="post__btns">
         <my-button
            class="open"
            @click="$router.push(`/posts/${post.id}`)"
         >Open</my-button>
         <my-button
            class="delete"
            @click="$emit('remove', post)"
         >Delete</my-button>
      </div>
   </div>
</template>



<script>
   export default {
      props: {
         post: {
            type: Object,
            required: true
         }
      }
   };
</script>



<style scoped>
   .post {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 25px;
      padding: 10px;
      border: 2px solid #000;
   }

   .post__property:not(:last-child) {
      margin-bottom: 10px;
   }

   .post__btns {
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .post__btns > .btn:not(:last-child) {
      margin-bottom: 10px;
   }
</style>