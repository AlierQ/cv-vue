<!-- 个人在线简历 -->
<template>
  <article>
    <!-- 个人资料 -->
    <Bio />
    <!-- 项目经历 -->
    <Sections :datas="projectsData" />
    <!-- 开源项目 -->
    <Sections :datas="openSourceData" />
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
        sectionIcon: "application-one",
        sectionChildData: [
          {
            title: "One UI 组件库",
            links: [
              {
                title: "源码链接",
                url: "https://gitee.com/AlierQ/OneUI-vue/",
              },
              {
                title: "项目预览",
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
          {
            title: "薄荷流水（Vue版本）",
            links: [
              {
                title: "源码链接",
                url: "https://gitee.com/AlierQ/Mint-vue/",
              },
              {
                title: "项目预览",
                url: "https://alierq.space/mint-vue/",
              },
            ],
            content: [
              {
                subTitle: "项目描述",
                subContent: `
                <p>
                  一款基于 <strong>Vue2</strong> / VueRouter /
                  <strong>Vuex</strong> / TypeScript / Scss 开发，使用
                  <strong>Vue-cli</strong>
                  构建的本地<strong>移动端</strong>记账WebApp。
                </p>
                <p>
                  用户可以在应用中进行日常收支的记录，应用提供了丰富的图标标签供用户选择收支的类型，
                  支持都对收支记录进行备注，还能够对用户的收支记录分类统计。
                </p>
                <p>
                  应用能够自适应PC端和手机端的显示，主要是针对移动端进行开发，使用手机预览体验更佳。
                </p>
                <p>
                  应用为本地端应用，用户的收支数据均存储在本地，并且通过 Vuex
                  进行全局状态管理。
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
          {
            title: "薄荷流水（React版本）",
            links: [
              {
                title: "源码链接",
                url: "https://gitee.com/AlierQ/Mint-react",
              },
              {
                title: "项目预览",
                url: "https://alierq.space/mint-react/",
              },
            ],
            content: [
              {
                subTitle: "项目描述",
                subContent: `
                <p>
                  一款基于 <strong>React</strong> / ReactRouter / TypeScript / Scss
                  开发，使用
                  <strong>create-react-app</strong> 构建的本地移动端记账WebApp。
                </p>
                <p>
                  该项目和上述的 Vue
                  版本采用同一个界面样式，并且具有同样的功能，不同之处是这个项目是基于React的进行开发的。
                </p>
                `,
              },
              {
                subTitle: "项目经验",
                subContent: `
                <p>
                  做这个项目的初衷是在学习完 React 之后，想要尝试能不能将一个 Vue
                  应用移植成一个React应用，从而比较一下，在实现相同的功能时两者的不同，从而希望加深我的对二者的理解和认识。
                </p>
                <p>
                  项目中使用React的一些常见的Hooks
                  API，如useState、useEffect、useRef，并且还在这些 Hooks
                  的基础之上封装了自定义Hook。
                </p>
                `,
              },
            ],
          },
          {
            title: "在线云笔记",
            links: [
              {
                title: "源码链接",
                url: "https://gitee.com/AlierQ/evernote",
              },
              {
                title: "项目地址",
                url: "https://alierq.space/evernote/",
              },
            ],
            content: [
              {
                subTitle: "项目描述",
                subContent: `
                <p>
                  一款基于 <strong>Vue3</strong> / VueRouter / Axios / Pinia /
                  TypeScript / Less 开发， 基于 <strong>Vite</strong>
                  构建的在线云笔记应用。
                </p>
                <p>
                  它是一款轻便简洁、随开随用的在线笔记，用户在登录后能够创建和管理自己的多个笔记本，
                  在笔记本中创建、编辑以及管理自己的多个笔记，笔记支持 markdown
                  格式的编写与预览。
                </p>
                <p>
                  用户操作产生的数据均使用 Axios
                  提交到服务器，当然获取的数据也由其向服务器进行请求。
                </p>
                `,
              },
              {
                subTitle: "项目经验",
                subContent: `
                <p>
                  整个项目都使用组合式 API 的 script setup
                  语法糖下进行开发，了解了其基本的用法。
                </p>
                <p>
                  项目对Axios进行了封装，使其能够更方便的进行请求接口的配置，
                  并且在请求接口中配置使用了 Promise ，大大增加了接口的扩展性。
                </p>
                <p>
                  在项目开发初期的时候有需要用到全局事件总线，但因为Vue3已经取消了自身的全局事件总线，于是使用
                  Mitt 代替全局事件总线，借此机会也了解了 Mitt 的基本用法。
                </p>
                <p>
                  使用了 Pinia 的进行全局数据管理，不少 Vue3 的应用开始从 Vuex
                  转向了 Pinia
                  ，借此机会研究一下Pinia的基本用法，初步了解了其state、actions、getter的用法。
                </p>
                <p>项目还使用了 IconPark 和 Element-UI 这样的图标库和组件库。</p>
                `,
              },
            ],
          },
        ],
      },
      openSourceData: {
        sectionTitle: "开源项目",
        sectionIcon: "github-one",
        sectionChildData: [
          {
            title: "One UI 组件库",
            links: [
              {
                title: "源码链接",
                url: "https://gitee.com/AlierQ/OneUI-vue/",
              },
              {
                title: "项目预览",
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
          {
            title: "薄荷流水（Vue版本）",
            links: [
              {
                title: "源码链接",
                url: "https://gitee.com/AlierQ/Mint-vue/",
              },
              {
                title: "项目预览",
                url: "https://alierq.space/mint-vue/",
              },
            ],
            content: [
              {
                subTitle: "项目描述",
                subContent: `
                <p>
                  一款基于 <strong>Vue2</strong> / VueRouter /
                  <strong>Vuex</strong> / TypeScript / Scss 开发，使用
                  <strong>Vue-cli</strong>
                  构建的本地<strong>移动端</strong>记账WebApp。
                </p>
                <p>
                  用户可以在应用中进行日常收支的记录，应用提供了丰富的图标标签供用户选择收支的类型，
                  支持都对收支记录进行备注，还能够对用户的收支记录分类统计。
                </p>
                <p>
                  应用能够自适应PC端和手机端的显示，主要是针对移动端进行开发，使用手机预览体验更佳。
                </p>
                <p>
                  应用为本地端应用，用户的收支数据均存储在本地，并且通过 Vuex
                  进行全局状态管理。
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
          {
            title: "薄荷流水（React版本）",
            links: [
              {
                title: "源码链接",
                url: "https://gitee.com/AlierQ/Mint-react",
              },
              {
                title: "项目预览",
                url: "https://alierq.space/mint-react/",
              },
            ],
            content: [
              {
                subTitle: "项目描述",
                subContent: `
                <p>
                  一款基于 <strong>React</strong> / ReactRouter / TypeScript / Scss
                  开发，使用
                  <strong>create-react-app</strong> 构建的本地移动端记账WebApp。
                </p>
                <p>
                  该项目和上述的 Vue
                  版本采用同一个界面样式，并且具有同样的功能，不同之处是这个项目是基于React的进行开发的。
                </p>
                `,
              },
              {
                subTitle: "项目经验",
                subContent: `
                <p>
                  做这个项目的初衷是在学习完 React 之后，想要尝试能不能将一个 Vue
                  应用移植成一个React应用，从而比较一下，在实现相同的功能时两者的不同，从而希望加深我的对二者的理解和认识。
                </p>
                <p>
                  项目中使用React的一些常见的Hooks
                  API，如useState、useEffect、useRef，并且还在这些 Hooks
                  的基础之上封装了自定义Hook。
                </p>
                `,
              },
            ],
          },
          {
            title: "在线云笔记",
            links: [
              {
                title: "源码链接",
                url: "https://gitee.com/AlierQ/evernote",
              },
              {
                title: "项目地址",
                url: "https://alierq.space/evernote/",
              },
            ],
            content: [
              {
                subTitle: "项目描述",
                subContent: `
                <p>
                  一款基于 <strong>Vue3</strong> / VueRouter / Axios / Pinia /
                  TypeScript / Less 开发， 基于 <strong>Vite</strong>
                  构建的在线云笔记应用。
                </p>
                <p>
                  它是一款轻便简洁、随开随用的在线笔记，用户在登录后能够创建和管理自己的多个笔记本，
                  在笔记本中创建、编辑以及管理自己的多个笔记，笔记支持 markdown
                  格式的编写与预览。
                </p>
                <p>
                  用户操作产生的数据均使用 Axios
                  提交到服务器，当然获取的数据也由其向服务器进行请求。
                </p>
                `,
              },
              {
                subTitle: "项目经验",
                subContent: `
                <p>
                  整个项目都使用组合式 API 的 script setup
                  语法糖下进行开发，了解了其基本的用法。
                </p>
                <p>
                  项目对Axios进行了封装，使其能够更方便的进行请求接口的配置，
                  并且在请求接口中配置使用了 Promise ，大大增加了接口的扩展性。
                </p>
                <p>
                  在项目开发初期的时候有需要用到全局事件总线，但因为Vue3已经取消了自身的全局事件总线，于是使用
                  Mitt 代替全局事件总线，借此机会也了解了 Mitt 的基本用法。
                </p>
                <p>
                  使用了 Pinia 的进行全局数据管理，不少 Vue3 的应用开始从 Vuex
                  转向了 Pinia
                  ，借此机会研究一下Pinia的基本用法，初步了解了其state、actions、getter的用法。
                </p>
                <p>项目还使用了 IconPark 和 Element-UI 这样的图标库和组件库。</p>
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
