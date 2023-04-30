<template>
  <template v-if="type === 'ordinary'">
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
      <p v-if="item.subTitle">
        <em>{{ item.subTitle }}：</em>
      </p>
      <p v-html="item.subContent"></p>
    </template>
  </template>
  <template v-else-if="type === 'education'">
    <p class="education">
      <span
        ><time>{{ datas.beginTime }}</time> 至
        <time>{{ datas.endTime }}</time></span
      >
      <span>{{ datas.schoolName }}</span>
      <span>{{ datas.major }}</span>
      <span>{{ datas.degree }}</span>
    </p>
  </template>
</template>

<script>
export default {
  props: {
    datas: Object,
    type: {
      type: String,
      default: "ordinary",
    },
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
.education {
  color: #666666;
  display: flex;
  justify-content: space-between;
}

.education p > span {
  line-height: 16px;
}
</style>
