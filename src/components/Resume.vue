<!-- 个人在线简历 -->
<template>
  <article>
    <!-- 个人资料 -->
    <Bio :datas="personalData" />
    <!-- 技能特长 -->
    <Sections type="skill" :datas="skillsData" />
    <!-- 工作经历 -->
    <Sections type="job" :datas="jobData" />
    <!-- 项目经历 -->
    <Sections :datas="projectsData" />
    <!-- 开源项目 -->
    <Sections :datas="openSourceData" />
    <!-- 教育经历 -->
    <Sections type="education" :datas="educationData" />
    <!-- 校内荣誉 -->
    <Sections type="honor" :datas="honorData" />
    <!-- 其他链接 -->
    <Sections :datas="otherData" />
  </article>
</template>
<script>
import Bio from "./Bio.vue";
import Sections from "./Sections.vue";
export default {
  data() {
    return {
      // 个人信息数据
      personalData: {
        name: "汪鸿",
        sex: "男",
        age: "25",
        nation: "汉族",
        politicalStatus: "中共党员",
        jobPost: "前端工程师",
        tel: "13191818522",
        wechat: "xxccze",
        email: "1029369938@qq.com",
        entryTime: "在职 - 月内到岗",
      },
      // 项目经历数据
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
      // 开源经历数据
      openSourceData: {
        sectionTitle: "开源项目",
        sectionIcon: "github-one",
        sectionChildData: [
          {
            title: "Canvas 小画板",
            links: [
              {
                title: "源码链接",
                url: "https://gitee.com/AlierQ/js-canvas",
              },
              {
                title: "项目预览",
                url: "https://alierq.space/canvas-pad/",
              },
            ],
            content: [
              {
                subContent: `
                <p>
                  一款使用原生 JavaScript 和 Canvas API
                  制作的网页小画板，不仅能够绘制线条、擦除线条,并且还支持颜色和画笔大小的自定义。同样也支持响应式布局，自适应移动端和PC端的浏览和使用。
                </p>
                `,
              },
            ],
          },
          {
            title: "基于jQuery的导航首页",
            links: [
              {
                title: "源码链接",
                url: "https://gitee.com/AlierQ/navigation",
              },
              {
                title: "项目预览",
                url: "https://alierq.space/navigation/",
              },
            ],
            content: [
              {
                subContent: `
                <p>
                  一款浏览器导航主页，导航主页支持常用网址添加，并且整合了百度、搜狗、知乎、必应的搜索入口，并且使用第三方API，能够自动获取添加的常用网址的标题和图标。
                </p>
                `,
              },
            ],
          },
          {
            title: "链式封装原生Dom",
            links: [
              {
                title: "源码链接",
                url: "https://gitee.com/AlierQ/js-Dom-jQueryStyle/blob/main/src/jquery.js",
              },
            ],
            content: [
              {
                subContent: `
                <p>
                  在学习 jQuery 的过程中，仿照 jQuery 的链式操作风格对原生的 Dom
                  对象进行封装，实现了对 Dom 对象的增、删、改、查。
                </p>
                `,
              },
            ],
          },
        ],
      },
      // 教育经历数据
      educationData: {
        sectionTitle: "教育经历",
        sectionIcon: "school",
        sectionChildData: [
          {
            beginTime: "2017.09",
            endTime: "2021.06",
            schoolName: "燕山大学里仁学院",
            major: "计算机科学与技术",
            degree: "大学本科",
          },
        ],
      },
      // 校内荣誉数据
      honorData: {
        sectionTitle: "校内荣誉",
        sectionIcon: "trophy",
        sectionChildData: [
          "2018.04 院级-燕山大学里仁学院二等奖学金",
          "2018.05 院级-燕山大学里仁学院优秀共青团",
          "2018.05 国家级-国家励志奖学金",
          "2018.10 院级-燕山大学里仁学院二等奖学金",
          "2018.11 院级-燕山大学里仁学院三好学生",
          "2019.03 省级-蓝桥杯河北赛区B组三等奖",
          "2019.04 院级-燕山大学里仁学院二等奖学金",
          "2019.05 院级-燕山大学里仁学院优秀共青团员",
          "2019.07 省级-河北省大学生程序设计大赛三等奖",
          "2020.04 院级-燕山大学里仁学院二等奖学金",
          "2020.05 国家级-国家励志奖学金",
          "2021.06 院级-燕山大学里仁学院优秀毕业生",
          "2021.06 院级-燕山大学里仁学院优秀毕业生",
        ],
      },
      // 工作经历数据
      jobData: {
        sectionTitle: "工作经历",
        sectionIcon: "handbag",
        sectionChildData: [
          {
            name: "上海海同科技有限公司",
            note: "校内实习",
            beginTime: "2020年09月",
            endTime: "2020年10月",
            content: [
              {
                subTitle: "工作描述",
                subContent: `
                <li>
                分析应用需求，对相应的页面进行组件化的拆分，并使用 Vue-cli
                进行项目构建；
                </li>
                <li>使用 Axios 向后端发送和请求数据；</li>
                <li>使用 SpringBoot 编写业务逻辑操作 MySQL 数据库；</li>
                `,
              },
              {
                subTitle: "成果描述",
                subContent: `
                <li>实习结束获得优秀个人称号，所在小组获得实习优秀小组称号；</li>
                `,
              },
            ],
          },
          {
            name: "武汉软酷有限公司",
            note: "校内实习",
            beginTime: "2020年11月",
            endTime: "2020年12月",
            content: [
              {
                subTitle: "工作描述",
                subContent: `
                <li>
                分析项目业务，设计前端页面模块，使用 React 进行项目前端开发；
                </li>
                <li>使用 Echarts 图表进行股票数据的展示；</li>
                <li>使用 SpringBoot 编写业务逻辑操作 MySQL 数据库；</li>
                `,
              },
              {
                subTitle: "成果描述",
                subContent: `
                <li>实习结束获得优秀个人称号，所在小组获得实习优秀小组称号；</li>
                `,
              },
            ],
          },
        ],
      },
      skillsData: {
        sectionTitle: "技能特长",
        sectionIcon: "trophy",
        sectionChildData: [
          `熟练制作静态页面，能<strong>高度还原</strong>设计稿`,
          `熟练掌握 <strong>Vue全家桶</strong>的使用，包括
              VueCli、Vuex、VueRouter 等。`,
          `熟悉<strong>前后端分离技术</strong>，包括
              AJAX、跨域、前端路由、Cookie、Session 等。`,
          `熟悉 <strong>ES6语法</strong>，包括 let / Promise / 析构赋值 等。`,
          `了解 <strong>TypeScript</strong> 的使用，项目尽可能的都使用ts。`,
        ],
      },
      // 其他链接数据
      otherData: {
        sectionTitle: "其他链接",
        sectionIcon: "link",
        sectionChildData: [
          {
            title: "AlierQ's Blog",
            links: [
              {
                title: "个人博客地址",
                url: "https://alierq.space/",
              },
            ],
            content: [
              {
                subContent: `
                <p>
                  个人博客，用于记录日常工作中遇到的问题、学习中获得的心得体会。博客目前已有
                  <strong> 30+ 篇技术文章</strong>
                </p>
                `,
              },
            ],
          },
          {
            title: "Github",
            links: [
              {
                title: "Github主页",
                url: "https://github.com/AlierQ",
              },
            ],
            content: [
              {
                subContent: `
                <p>
                  个人仓库，用来托管个人代码，平时做的Demo和项目都会放在上面。
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
