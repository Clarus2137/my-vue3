<template>
   <h1 align="center">Posts page with API</h1>
   <div class="search-wrapper">
      <my-input
         class="search"
         placeholder="Search"
         v-model="searchQuery"
      />
   </div>
   <div class="app__btns">
      <my-button
         class="create create-post"
      >Create post</my-button>

      <my-select
         v-model="selectedSort"
         :options="sortOptions"
      />
   </div>
   

   <my-dialog v-model:show="dialogVisible">
      <post-form />
   </my-dialog>

   <post-list
      :posts="sortedAndSearchedPosts"
      v-if="!isPostsLoading"
   />
   <div v-else align="center"><strong>Posts are loading...</strong></div>
</template>



<script>
   import PostForm from '@/components/PostForm'
   import PostList from '@/components/PostList'
   import usePosts from '@/hooks/usePosts'
   import useSortedPosts from '@/hooks/useSortedPosts'
   import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts'

   export default {
      components: {
         PostForm,
         PostList
      },

      data() {
         return {
            dialogVisible: false,
            sortOptions: [
               {value: 'title', name: 'By Title'},
               {value: 'body', name: 'By Body'}
            ]
         }
      },

      setup() {
         const {posts, page, totalPages, isPostsLoading} = usePosts(10);
         const {selectedSort, sortedPosts} = useSortedPosts(posts);
         const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts);

         return {
            posts,
            page,
            isPostsLoading,
            totalPages,
            selectedSort,
            sortedPosts,
            searchQuery,
            sortedAndSearchedPosts
         }
      }
   }
</script>



<style scoped>
   h1 {
      margin: 30px 0;
   }
</style>