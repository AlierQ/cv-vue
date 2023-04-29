<template>
  <header>
    <h3>{{ datas.title }}</h3>
    <span class="link">
      <a
        target="_blank"
        v-for="(item, index) in datas.links"
        :key="index"
        :href="item.url"
      >
        {{ item.title }}
      </a>
    </span>
  </header>
  <template v-for="(item, index) in datas.content" :key="index">
    <p>
      <em>{{ item.subTitle }}：</em>
    </p>
    <p v-html="item.subContent"></p>
  </template>
</template>

<script>
export default {
  props: {
    datas: Object,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}
header > h3 {
  display: inline-block;
}
em {
  font-weight: 600;
}
p {
  color: #666;
}
.link a {
  margin-right: 10px;
}
.link a:last-child {
  margin-right: 0px;
}
</style>
