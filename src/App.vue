<template>
   <div class="app">
      <my-navbar/>
      <router-view/>
   </div>
</template>



<script>
   import MyNavbar from "@/components/MyNavbar"

   export default {
      components: {MyNavbar}
   }
</script>



<style>
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      padding: 20px;
   }

   .app__btns {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
   }

   .search-wrapper {
      display: flex;
      justify-content: center;
   }

   .search {
      margin: 10px 0 0;
   }
</style>