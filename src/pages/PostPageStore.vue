<template>
   <h1 align="center">Posts page with the Store</h1>
   
   <div class="search-wrapper">
      <my-input
         class="search"
         placeholder="Search"
         :model-value="searchQuery"
         @update:model-value="setSearchQuery"
      />
   </div>
   <div class="app__btns">
      <my-button
         class="create create-post"
         @click="dialogVisible = !dialogVisible"
      >Create post</my-button>

      <my-select
         :model-value="selectedSort"
         @update:model-value="setSelectedSort"
         :options="sortOptions"
      />
   </div>
   

   <my-dialog v-model:show="dialogVisible">
      <post-form
         @create="addPost"
      />
   </my-dialog>

   <post-list
      :posts="sortedAndSearchedPosts"
      @remove="deletePost"
      v-if="!isPostsLoading"
   />
   <div v-else align="center"><strong>Posts are loading...</strong></div>

   <div v-intersection="loadMorePosts" class="observer"></div>
</template>



<script>
   import PostForm from '@/components/PostForm'
   import PostList from '@/components/PostList'
   import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

   export default {
      components: {
         PostForm,
         PostList
      },

      data() {
         return {
            dialogVisible: false
         }
      },

      methods: {
         ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
         }),

         ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts'
         }),

         addPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
         },

         deletePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
         }
      },

      mounted() {
         this.fetchPosts();
      },

      computed: {
         ...mapState({
            posts: state => state.post.posts,
            isPostsLoading: state => state.post.isPostsLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            sortOptions: state => state.post.sortOptions
         }),

         ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
         })
      },

      watch: {
         
      }
   }
</script>



<style scoped>
   h1 {
      margin: 30px 0;
   }
</style>