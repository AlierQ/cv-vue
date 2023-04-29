<template>
  <Resume />
</template>

<script>
import Resume from "./components/Resume.vue";
export default {
  components: {
    Resume,
  },
};
</script>

<style scoped></style>
<style media="print">
/* 打印时样式 */
body {
  background: #eee;
  margin: 0;
}

.skills {
  padding-top: 10px;
}
</style>
