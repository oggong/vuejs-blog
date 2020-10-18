<template>
  <!-- 메인 페이지 -->
  <div class="main">
    <!-- 메인 페이지 header -->
    <div class="main_header">
      <b-navbar toggleable type="dark" variant="dark">
        <b-navbar-brand href="#">MS BLOG</b-navbar-brand>
        <!-- <b-navbar-toggle target="navbar-toggle-collapse">
          <template v-slot:default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Link 1</b-nav-item>
            <b-nav-item href="#">Link 2</b-nav-item>
          </b-navbar-nav>
        </b-collapse> -->
      </b-navbar>
    </div>
    <!-- 메인 페이지 content -->
    <div class="main_content">
      <introduce/>
    </div>
  </div>
</template>
<script>

import introduce from '@/components/introduce.vue';

export default {
  name: "MainPage",
  data() {
    return {
    };
  },
  components: {
    introduce
  },
};
</script>
<style scoped></style>
