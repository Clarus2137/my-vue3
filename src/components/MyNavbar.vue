<template>
   <div class="navbar">
      <div
         class="logo"
            @click="$router.push('/')"
      >Vue 3 SPA</div>
      <div class="navbar__btns">
         <my-button
            class="navbar__btn"
            @click="$router.push('/about')"
         >About</my-button>
         <my-button
            class="navbar__btn"
            @click="$router.push('/posts')"
         >Posts</my-button>
         <my-button
            class="navbar__btn"
            @click="$router.push('/store')"
         >Store</my-button>
         <my-button
            class="navbar__btn"
            @click="$router.push('/api')"
         >API</my-button>
      </div>
   </div>
</template>



<script>
   export default {
      
   }
</script>



<style scoped>
   .logo:hover {
      cursor: pointer;
   }

   .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background: lightgray;
   }

   .navbar__btn:not(:last-child) {
      margin-right: 15px;
   }
</style>