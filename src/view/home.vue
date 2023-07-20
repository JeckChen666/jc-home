<template>
  <div style="display: flex;align-items:center; justify-content:center;">
    <div style="width: auto">
      <div style="font-size: 6rch;font-weight: bold;text-align: center">Hello!</div>
      <div style="font-size: 4rch;font-weight: bold;text-align: center">你好</div>
      <div style="margin-top: 2rem">
        <div style="display: flex;align-items:center; justify-content:center;">
          <img style="border-radius: 50%" src="https://q1.qlogo.cn/g?b=qq&nk=1204798253&s=100"/>
          <div style="margin-left: 4rch;font-size: 6rch">JeckChen</div>
        </div>
        <div style="display: flex;align-items:center; justify-content:center;margin-top: 1rem">
          <el-row>
            <el-button round v-for="(value, key) in buttonMap" :key="key" @click="clickButton(key)">{{
                key
              }}
            </el-button>
          </el-row>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  data() {
    return {
      buttonMap: {
        "Bing Ai": "https://bingai.jeckchen.xyz/",
        "File Browser": "http://file.jeckchen.xyz/",
        "Flying Bird": "https://fbaff01.flyb-aff01.com/auth/register?code=pIeH"
      }
    }
  },
  created() {
    // this.$http.get("http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1").then(res => {
    //   console.log(res)
    // })
    // this.$http.get("http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1").then(res => {
    //   console.log(res)
    // })
  },
  methods: {
    clickButton(key) {
      window.location.href = this.$data.buttonMap[key];
    }
  }
};
</script>
<style scoped>
</style>
