import Projects from './pages/projects.vue'
import Home from './pages/home.vue'
import Hire from './pages/hire.vue'
import NotFound from './pages/notFound.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/hire', component: Hire },
    {
        path: '/:path(.*)',
        component: NotFound
    }
]