<template>
  <TabBar>
    <TabBarItem path="/home">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/home.svg" alt />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/home_active.svg" alt />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/category">
      <template v-slot:item-icon>
        <img src="../../assets/img/tabbar/category.svg" alt />
      </template>
      <template v-slot:item-icon-active>
        <img src="../../assets/img/tabbar/category_active.svg" alt />
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/shopcart">
      <template v-slot:item-icon>
        <img src="../../assets/img/tabbar/shopcart.svg" alt />
      </template>
      <template v-slot:item-icon-active>
        <img src="../../assets/img/tabbar/shopcart_active.svg" alt />
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/profile">
      <template v-slot:item-icon>
        <img src="../../assets/img/tabbar/profile.svg" alt />
      </template>
      <template v-slot:item-icon-active>
        <img src="../../assets/img/tabbar/profile_active.svg" alt />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  computed: {},
  components: {
    TabBar,
    TabBarItem
  },
  methods: {}
};
</script>

<style scoped>
</style>