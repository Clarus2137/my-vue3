<template>
   <h1 align="center">Posts page</h1>
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
         @click="dialogVisible = !dialogVisible"
      >Create post</my-button>

      <my-select
         v-model="selectedSort"
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
   import axios from 'axios'

   export default {
      components: {
         PostForm,
         PostList
      },

      data() {
         return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            sortOptions: [
               {value: 'title', name: 'By Title'},
               {value: 'body', name: 'By Body'}
            ],
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0
         }
      },

      methods: {
         addPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
         },

         deletePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
         },

         async fetchPosts() {
            try {
               this.isPostsLoading = true;
               const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                  params: {
                     _page: this.page,
                     _limit: this.limit
                  }
               });
               this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
               this.posts = response.data;
            } catch(e) {
               alert("Error!!!");
            } finally {
               this.isPostsLoading = false;
            }
         },

         async loadMorePosts() {
            try {
               this.page += 1;
               const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                  params: {
                     _page: this.page,
                     _limit: this.limit
                  }
               });
               this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
               this.posts = [...this.posts, ...response.data];
            } catch(e) {
               alert("Error!!!");
            }
         }
      },

      mounted() {
         this.fetchPosts();
      },

      computed: {
         sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
         },

         sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
         }
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