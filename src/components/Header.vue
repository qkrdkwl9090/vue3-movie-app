<template>
  <header>
    <div class="navbar-start">
      <div class="navbar-brand">
        <div class="navbar-item">
          <Logo />
        </div>
      </div>
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="navbar-item">
        <RouterLink
          :to="nav.href"
          active-class="active">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
export default {
    components:{
        Logo
    },
    data(){
       return{
           navigations: [
               {
                   name: 'Search',
                   href: '/'
               },
               {
                   name: 'Movie',
                   href: '/movie'
               },
               {
                   name: 'About',
                   href: '/about'
               }
           ]
       } 
    }
}
</script>

<style scoped lang="scss">
.navbar-start{
  background-color: #485fc7;
  color: white;
  border-radius: 10px;
}
.navbar-item{
  &:hover{
    background-color: darken(#485fc7,10%);
    border-radius: 10px;
  }
  a{
    color:white;
    &:hover{
      color: white;
    }
  }
}
</style>