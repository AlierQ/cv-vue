<template>
  <section class="bio">
    <h1>{{ personalInfo.name }}</h1>
    <div class="img">
      <img src="../assets/images/avatar.JPG" alt="" />
    </div>
    <p>
      {{ personalInfo.sex }} &nbsp;|&nbsp; {{ personalInfo.age }}岁
      &nbsp;|&nbsp; {{ personalInfo.nation }} &nbsp;|&nbsp;
      {{ personalInfo.politicalStatus }} &nbsp;|&nbsp;
      {{ personalInfo.jobPost }}
    </p>
    <p>
      <span class="icon">
        <phone-call :theme="iconTheme" :size="iconSize" :fill="iconFill" />
      </span>
      <a :href="'tel:' + personalInfo.tel"> {{ personalInfo.tel }} </a
      >&nbsp;|&nbsp;
      <span class="icon">
        <wechat :theme="iconTheme" :size="iconSize" :fill="iconFill" />
      </span>
      {{ personalInfo.wechat }} &nbsp;|&nbsp;
      <span class="icon">
        <mail :theme="iconTheme" :size="iconSize" :fill="iconFill" />
      </span>
      <a :href="'mailto:' + personalInfo.email">{{ personalInfo.email }}</a>
    </p>
  </section>
</template>

<script>
import { PhoneCall, Wechat, Mail } from "@icon-park/vue-next";
export default {
  name: "Bio",
  data() {
    return {
      personalInfo: {
        name: "汪鸿",
        sex: "男",
        age: "25",
        nation: "汉族",
        politicalStatus: "中共党员",
        jobPost: "前端工程师",
        tel: "13191818522",
        wechat: "xxccze",
        email: "1029369938@qq.com",
      },
      iconTheme: "outline",
      iconSize: 18,
      iconFill: "#ffffff",
    };
  },
  components: {
    PhoneCall,
    Wechat,
    Mail,
  },
};
</script>

<style scoped>
/* bio start */
a {
  border: none;
  color: white;
}
.bio {
  background: rgb(37, 70, 101);
  overflow: hidden;
  color: white;
  position: relative;
  padding: 0 20px 10px 20px;
  border-bottom: 5px solid rgb(4, 170, 109);
}
.bio > .img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: white;
  position: absolute;
  border: 3px solid #eee;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  overflow: hidden;
}
.bio > .img > img {
  margin-top: -10px;
  width: 100%;
}

/* bio end */
</style>
