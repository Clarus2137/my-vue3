<template>
   <button class="btn">
      <slot></slot>
   </button>
</template>



<script>
   export default {
      name: 'my-button'
   }
</script>



<style scoped>
   .btn {
      padding: 10px;
      border: 2px solid #000;
      color: #000;
      background: none;
   }

   .btn:hover {
      cursor: pointer;
   }

   .create, .open {
      border-color: seagreen;
      color: seagreen;
   }

   .delete {
      border-color: firebrick;
      color: firebrick;
   }

   .create-post {
      display: block;
      margin: 0 auto 15px;
   }
</style>