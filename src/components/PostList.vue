<template>
   <div
      class="post-list"
      v-if="posts.length > 0"
   >
      <h2 align="center">Post list</h2>
      <transition-group name="post-list">
         <post-item
            v-for="post in posts"
            :key="post.id"
            :post="post"
            @remove="$emit('remove', post)"
         />
      </transition-group>
   </div>

   <h2
      class="alarm"
      align="center"
      v-else
   >The post list is empty for now</h2>
</template>



<script>
   import PostItem from './PostItem'

   export default {
      components: {PostItem},

      props: {
         posts: {
            type: Array,
            required: true
         }
      },

      emits: ['remove']
   }
</script>



<style scoped>
   .alarm {
      color: darkred;
   }

   .post-list-item {
      display: inline-block;
      margin-right: 10px;
   }
   .post-list-enter-active,
   .post-list-leave-active {
      transition: all 0.8s ease;
   }
   .post-list-enter-from,
   .post-list-leave-to {
      opacity: 0;
      transform: translateX(50px);
   }

   .post-list-move {
      transition: transform 0.8s ease;
   }
</style>