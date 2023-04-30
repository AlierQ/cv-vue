<template>
  <template v-if="type === 'ordinary' || type === 'job'">
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
    </template>
    <template v-else-if="type === 'job'">
      <header class="job">
        <div>
          <h3>{{ datas.name }}</h3>
          <span> {{ datas.note }} </span>
        </div>
        <span
          ><time>{{ datas.beginTime }}</time> 至
          <time>{{ datas.endTime }}</time></span
        >
      </header>
    </template>
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
  <template v-else-if="type === 'skill'">
    <ul class="skill">
      <li v-for="(item, index) in datas" :key="index">
        <span class="icon point-icon" style="margin-right: 5px">
          <component
            :is="'icon-hexagon-strip'"
            theme="filled"
            size="10"
            fill="#254665"
          />
        </span>
        <span v-html="item"></span>
      </li>
    </ul>
  </template>
</template>

<script>
export default {
  props: {
    datas: [Object, Array],
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
p {
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
  color: #666;
  display: flex;
  justify-content: space-between;
}

.honor-list > ol {
  padding: 0;
}

.honor-list > ol > li {
  padding: 2px 0;
}

.job {
  display: flex;
  justify-content: space-between;
}

.job > div {
  display: flex;
}

.job > div > h3 {
  margin-right: 18px;
}

.job span {
  color: #666;
  font-size: 18px;
}

.skill {
  padding-left: 0px;
}

.skill > li {
  display: flex;
  padding: 5px 0;
  color: #666;
}
.skill > li {
  padding: 5px 0;
  color: #666;
}

@media (max-width: 500px) {
  .education {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
  }

  .education > span {
    vertical-align: middle;
    font-size: 16px;
    line-height: 16px;
  }

  .education > span:nth-of-type(1),
  .education > span:nth-of-type(2) {
    margin-bottom: 10px;
  }

  .education > span:nth-of-type(2),
  .education > span:nth-of-type(4) {
    flex-grow: 1;
    text-align: right;
  }
  .job > div > span {
    padding-top: 8px;
    display: inline-block;
    font-size: 16px;
  }

  .job > span {
    padding-top: 4px;
    display: inline-block;
    font-size: 14px;
  }

  .job > div {
    display: block;
    flex: 1;
  }

  .honor-list {
    display: flex;
    flex-direction: column;
  }
}
</style>
