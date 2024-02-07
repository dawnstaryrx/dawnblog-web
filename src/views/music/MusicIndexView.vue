<script setup>
  import { onMounted } from "vue"

  // 音乐随身听
  import APlayer from "aplayer"; // 引入音乐插件
  import "aplayer/dist/APlayer.min.css"; // 引入音乐插件的样式

  const audio = [ // 歌曲列表
    {
      name: "李白",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/03libai.mp3",
      cover: "http://imge.kugou.com/stdmusic/150/20200606/20200606220631519630.jpg",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "李白",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/03libai.mp3",
      cover: "http://imge.kugou.com/stdmusic/150/20200606/20200606220631519630.jpg",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "李白",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/03libai.mp3",
      cover: "http://imge.kugou.com/stdmusic/150/20200606/20200606220631519630.jpg",
      lrc: "",
      theme: "rgb(61, 162, 230)",
    },
    {
      name: "李白",
      artist: "李荣浩",
      url: "https://dawnstar-music-lrh-1309734834.cos.ap-beijing.myqcloud.com/03libai.mp3",
      cover: "http://imge.kugou.com/stdmusic/150/20200606/20200606220631519630.jpg",
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

