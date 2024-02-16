<template>
  <manage-nav-bar>
    <div style="height: 83vh;overflow: auto;">
      <router-view></router-view>
    </div>
    
  </manage-nav-bar>
</template>

<script>
import ManageNavBar from '@/components/ManageNavBar.vue';
export default {
  components:{ManageNavBar}
}
</script>

<style>

</style>