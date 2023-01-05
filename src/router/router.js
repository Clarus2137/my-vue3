import Main from "@/pages/Main"
import PostPage from "@/pages/PostPage"
import PostItemPage from "@/pages/PostItemPage"
import About from "@/pages/About"
import PostPageStore from "@/pages/PostPageStore"
import PostPageAPI from "@/pages/PostPageAPI"
import {createRouter, createWebHistory} from "vue-router"


const routes = [
   { path: '/', component: Main },
   { path: '/posts', component: PostPage },
   { path: '/about', component: About },
   { path: '/posts/:id', component: PostItemPage },
   { path: '/store', component: PostPageStore },
   { path: '/api', component: PostPageAPI }
]

const router = createRouter({
   routes,
   history: createWebHistory(process.env.BASE_URL)
});

export default router;