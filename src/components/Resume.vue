<!-- 个人在线简历 -->
<template>
  <article>
    <!-- 个人资料 -->
    <Bio />
    <!-- 项目经历 -->
    <Sections :datas="projectsData" />
  </article>
</template>
<script>
import Bio from "./Bio.vue";
import Sections from "./Sections.vue";
import SubSections from "./SubSections.vue";
export default {
  data() {
    return {
      projectsData: {
        sectionTitle: "项目经历",
        sectionIcon: "ApplicationOne",
        sectionChildData: [
          {
            title: "One UI 组件库",
            links: [
              {
                title: "源码链接",
                url: "https://gitee.com/AlierQ/OneUI-vue/",
              },
              {
                title: "项目地址",
                url: "https://alierq.space/one-ui/",
              },
            ],
            content: [
              {
                subTitle: "项目描述",
                subContent: `
                <p>
                  一款基于 <strong>Vue3</strong> / VueRouter /
                  <strong>TypeScript</strong> / Scss 开发，使用
                  <strong>Vite</strong> 构建的前端UI组件库。
                </p>
                <p>
                  组件库中的主要组件有Tabs标签页、Message全局信息提示、Model对话框、Menu菜单等。
                </p>
                <p>
                  组件整体采用了简洁的设计，美观性高、易用性强，并且组件的源码也十分的简洁易读，能够便于二次开发。
                </p>
                <p>
                  在制作组件库的过程中使用了 Vue3 的一些新特性。并且使用 TypeScript
                  代替 JavaScript 进行开发。
                </p>
                `,
              },
              {
                subTitle: "项目经验",
                subContent: `
                <p>
                  使用了 Vue3 的部分新API：setup、onMounted、watchEffect、ref
                  等，初步了解setup组合式API编程。
                </p>
                <p>
                  使用前端开发工具 Vite 构建整个项目的，Vite
                  在开发应用时有着极快的启动速度，并且对于 Vue+TS 有着极好的支持。
                </p>
                <p>
                  使用VueRouter构建SFC单页面应用，优化页面加载速度，避免不必要的请求，减轻网络负担
                </p>
                <p>
                  使用TypeScript进行开发，TypeScript能够更好的规范变量、对象及参数等类型，能够帮助我们在开发中检查类型，减小错误几率。
                </p>
                `,
              },
            ],
          },
        ],
      },
    };
  },
  components: {
    Bio,
    Sections,
    SubSections,
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
