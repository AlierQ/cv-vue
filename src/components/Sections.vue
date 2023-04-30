<template>
  <section class="sections">
    <h2>
      <span class="icon content-icon">
        <component :is="'icon-' + datas.sectionIcon" />
      </span>
      {{ datas.sectionTitle }}
    </h2>
    <template v-if="type === 'ordinary'">
      <ol>
        <li v-for="(item, index) in datas.sectionChildData" :key="index">
          <SubSections :datas="item" :type="type"></SubSections>
        </li>
      </ol>
    </template>
    <template v-else-if="type === 'education'">
      <template v-for="(item, index) in datas.sectionChildData" :key="index">
        <SubSections :datas="item" :type="type"></SubSections>
      </template>
    </template>
    <template v-else-if="type === 'honor'">
      <SubSections :datas="datas.sectionChildData" :type="type"></SubSections>
    </template>
  </section>
</template>

<script>
import SubSections from "./SubSections.vue";
export default {
  props: {
    datas: Object,
    type: {
      type: String,
      default: "ordinary",
    },
  },
  data() {
    return {};
  },
  components: {
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
