<template>
  <section class="sections">
    <h2>
      <span class="icon content-icon">
        <component :is="'icon-' + datas.sectionIcon" />
      </span>
      {{ datas.sectionTitle }}
    </h2>
    <ol>
      <li v-for="(item, index) in datas.sectionChildData" :key="index">
        <SubSections :datas="item"></SubSections>
      </li>
    </ol>
  </section>
</template>

<script>
// import * as icons from "@icon-park/vue-next";
import SubSections from "./SubSections.vue";
export default {
  props: {
    datas: Object,
  },
  data() {
    return {};
  },
  components: {
    // ...icons,
    SubSections,
  },
  mounted() {},
};
</script>

<style scoped>
.sections {
  padding: 0 10px;
}
.sections > ol {
  list-style: none;
  padding: 0;
}
.sections > ol > li {
  margin-bottom: 16px;
}
</style>
