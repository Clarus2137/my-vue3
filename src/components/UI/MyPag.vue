<template>
   <div class="pagination__wrapper">
      <div
         v-for="pageNumber in totalPages"
         :key="pageNumber"
         :class="{
            'pagination__page': true,
            'current-page': page === pageNumber
         }"
         @click="this.$emit('pagination', pageNumber)"
      >{{ pageNumber }}</div>
   </div>
</template>



<script>
   export default {
      name: 'my-pag',

      props: {
         totalPages: {
            type: Number,
            required: true
         },

         page: {
            type: Number,
            required: true
         }
      }
   }
</script>



<style scoped>
   .pagination__wrapper {
      display: flex;
      justify-content: center;
      max-width: 75%;
      margin: 30px auto 0;
   }

   .pagination__page {
      display: inline-block;
      width: 30px;
      padding: 10px 0;
      border: 2px solid #000;
      text-align: center;
   }

   .pagination__page:hover {
      cursor: pointer;
   }

   .pagination__page:not(:last-child) {
      margin-right: 10px;
   }

   .current-page {
      border-color: firebrick;
      color: firebrick;
   }

   .current-page:hover {
      cursor: default;
   }
</style>