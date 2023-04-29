<!-- 个人在线简历 -->
<template>
  <article>
    <!-- 个人资料 -->
    <Bio />
    <!-- 项目经历 -->
    <Projects />
  </article>
</template>
<script>
import Bio from "./Bio.vue";
import Projects from "./Projects.vue";
export default {
  components: {
    Bio,
    Projects,
  },
};
</script>
<style>
.icon {
  vertical-align: middle;
}

.point-icon svg {
  width: 10px;
  height: 10px;
  color: #254665;
}

.content-icon svg {
  width: 28px;
  height: 28px;
  color: #254665;
}

.top-icon svg {
  width: 18px;
  height: 18px;
  color: white;
}
</style>
