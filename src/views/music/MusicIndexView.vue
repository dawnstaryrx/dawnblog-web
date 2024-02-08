<script setup>
  import { onMounted } from "vue"

  // 音乐随身听
  import APlayer from "aplayer"; // 引入音乐插件
  import "aplayer/dist/APlayer.min.css"; // 引入音乐插件的样式

  const audio = [ // 歌曲列表
    {
      name: "开场",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/00%E5%BC%80%E5%9C%BA.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "自拍",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/01%E8%87%AA%E6%8B%8D.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "作曲家",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/02%E4%BD%9C%E6%9B%B2%E5%AE%B6.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "要我怎么办",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/03%E8%A6%81%E6%88%91%E6%80%8E%E4%B9%88%E5%8A%9E.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "耳朵",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/04%E8%80%B3%E6%9C%B5.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "喜剧之王",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/05%E5%96%9C%E5%89%A7%E4%B9%8B%E7%8E%8B.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "戒烟",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/06%E6%88%92%E7%83%9F.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "我爱你",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/07%E6%88%91%E7%88%B1%E4%BD%A0.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "山川",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/08%E5%B1%B1%E5%B7%9D.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "歌谣",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/09%E6%AD%8C%E8%B0%A3.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "老伴",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/10%E8%80%81%E4%BC%B4.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "老街",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/11%E8%80%81%E8%A1%97.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "爸爸妈妈",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/12%E7%88%B8%E7%88%B8%E5%A6%88%E5%A6%88.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "自由",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/13%E8%87%AA%E7%94%B1.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "账号已注销+麒麟",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/14%E5%B8%90%E5%8F%B7%E5%B7%B2%E6%B3%A8%E9%94%80%EF%BC%8B%E9%BA%92%E9%BA%9F.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "流年",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/15%E6%B5%81%E5%B9%B4.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "年少有为",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/16%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "获奖人",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/17%E8%8E%B7%E5%A5%96%E4%BA%BA.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "贝贝",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/18%E8%B4%9D%E8%B4%9D.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "不将就",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/19%E4%B8%8D%E5%B0%86%E5%B0%B1.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "不遗憾",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/20%E4%B8%8D%E9%81%97%E6%86%BE.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "乌梅子酱",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/21%E4%B9%8C%E6%A2%85%E5%AD%90%E9%85%B1.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "李白",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/22%E6%9D%8E%E7%99%BD.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "纵横四海",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/23%E7%BA%B5%E6%A8%AA%E5%9B%9B%E6%B5%B7.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "模特",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/24%E6%A8%A1%E7%89%B9.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "麻雀",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/25%E9%BA%BB%E9%9B%80.mp3",
      cover: "",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
  ]

  const info =  {
    fixed: false, // 不开启吸底模式
    listFolded: true, // 折叠歌曲列表
    autoplay: false, // 开启自动播放
    preload: "auto", // 自动预加载歌曲
    loop: "all", // 播放循环模式、all全部循环 one单曲循环 none只播放一次
    order: "list", //  播放模式，list列表播放, random随机播放
  }

  const  initAudio = ()=> {
    // 创建一个音乐播放器实例，并挂载到DOM上，同时进行相关配置
    const ap = new APlayer({
      container: document.getElementById("aplayer"),
      audio: audio, // 音乐信息
      info, // 其他配置信息
    });
  }

  onMounted(initAudio)
</script>
<template>
    <div id="aplayer" style="width: 60%; margin:auto; margin-top: 50px;"></div>
</template>

