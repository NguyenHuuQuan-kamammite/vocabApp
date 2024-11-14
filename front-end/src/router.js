import Vue from 'vue';
import Router from 'vue-router';

// Import the views for each route
import Words from './views/Words.vue';
import New from './views/New.vue';
import Show from './views/Show.vue';
import Edit from './views/Edit.vue';
import Test from './views/Test.vue';
import AboutMe from './views/aboutMe.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/words'
    },
    {
      path: '/words',
      name: 'Words',
      component: Words
    },
    {
      path: '/words/new',
      name: 'NewWord',
      component: New
    },
    {
      path: '/words/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/words/:id/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: AboutMe
    },
  ]
});
