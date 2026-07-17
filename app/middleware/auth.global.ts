export default defineNuxtRouteMiddleware((to, from) => {
const isLoggedIn = useCookie('isLoggedIn');
  
  if (to.path !== '/login' && !isLoggedIn.value) {
    return navigateTo('/login');
  }
});