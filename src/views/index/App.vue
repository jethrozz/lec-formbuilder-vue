<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    // 取消开始的loading动画
    const preLoader = document.querySelector('#pre-loader')
    preLoader.style.display = 'none'

    // fix: firefox 下 拖拽 会新打卡一个选项卡
    // https://github.com/JakHuang/form-generator/issues/15
    document.body.ondrop = event => {
      event.preventDefault()
      event.stopPropagation()
    }
  }
}
</script>
<style>
    .pre-loader {
      position: absolute;
      top: calc(50% - 32px);
      left: calc(50% - 32px);
      width: 64px;
      height: 64px;
      border-radius: 50%;
      perspective: 800px;
    }
    .pre-loader .inner {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .pre-loader .inner.one {
      left: 0%;
      top: 0%;
      -webkit-animation: rotate-one 1s linear infinite;
      animation: rotate-one 1s linear infinite;
      border-bottom: 3px solid #bc9048;
    }
    .pre-loader .inner.two {
      right: 0%;
      top: 0%;
      -webkit-animation: rotate-two 1s linear infinite;
      animation: rotate-two 1s linear infinite;
      border-right: 3px solid #74aeff;
    }
    .pre-loader .inner.three {
      right: 0%;
      bottom: 0%;
      -webkit-animation: rotate-three 1s linear infinite;
      animation: rotate-three 1s linear infinite;
      border-top: 3px solid #caef74;
    }
    @keyframes rotate-one {
      0% {
        -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
      }
      100% {
        -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
      }
    }
    @keyframes rotate-two {
      0% {
        -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
        transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
      }
      100% {
        -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
        transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
      }
    }
    @keyframes rotate-three {
      0% {
        -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
        transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
      }
      100% {
        -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
        transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
      }
    }
</style>