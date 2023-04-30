<template>
  <section class="bio">
    <h1>{{ datas.name }}</h1>
    <div class="img">
      <img src="../assets/images/avatar.JPG" alt="" />
    </div>
    <p>
      {{ datas.sex }} &nbsp;|&nbsp; {{ datas.age }}岁 &nbsp;|&nbsp;
      {{ datas.nation }} &nbsp;|&nbsp; {{ datas.politicalStatus }} &nbsp;|&nbsp;
      {{ datas.jobPost }} &nbsp;|&nbsp; {{ datas.entryTime }}
    </p>
    <p>
      <span class="icon">
        <phone-call :theme="iconTheme" :size="iconSize" :fill="iconFill" />
      </span>
      <a :href="'tel:' + datas.tel"> {{ datas.tel }} </a>&nbsp;|&nbsp;
      <span class="icon">
        <wechat :theme="iconTheme" :size="iconSize" :fill="iconFill" />
      </span>
      {{ datas.wechat }} &nbsp;|&nbsp;
      <span class="icon">
        <mail :theme="iconTheme" :size="iconSize" :fill="iconFill" />
      </span>
      <a :href="'mailto:' + datas.email">{{ datas.email }}</a>
    </p>
  </section>
</template>

<script>
import { PhoneCall, Wechat, Mail } from "@icon-park/vue-next";
export default {
  name: "Bio",
  props: ["datas"],
  data() {
    return {
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
