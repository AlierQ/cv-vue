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
  <template v-else-if="type === 'honor'">
    <div class="honor-list">
      <ol>
        <li v-for="(item, index) in leftList" :key="index">{{ item }}</li>
      </ol>
      <ol>
        <li v-for="(item, index) in rightList" :key="index">{{ item }}</li>
      </ol>
    </div>
  </template>
</template>

<script>
export default {
  props: {
    datas: [Array, Object],
    type: {
      type: String,
      default: "ordinary",
    },
  },
  data() {
    return {
      leftList: [],
      rightList: [],
    };
  },
  created() {
    if (this.type === "honor") {
      let index = Math.ceil(this.datas.length / 2);
      this.leftList = this.datas.slice(0, index);
      this.rightList = this.datas.slice(index);
    }
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
p,
div {
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
.honor-list {
  display: flex;
  justify-content: space-between;
}

.honor-list > ol {
  padding: 0;
}

.honor-list > ol > li {
  padding: 2px 0;
}
</style>
