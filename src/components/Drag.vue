<template>
  <div class="father" >
    书包层级{{temp[0]}}
    手表层级{{temp[1]}}
    <VueDragResize
        :w="100" :h="100" :z="temp[0]"
        :parent-limitation="true"
        :is-resizable="false" @clicked="act(0)"
    >
      <img src="../assets/bag.png" alt=""
        :style="{width:wid+'px'}"
      >
    </VueDragResize>
    <VueDragResize
        :w="100" :h="100" :z="temp[1]"
        :x="200" :y="100"
        :parent-limitation="true"
        :is-resizable="false"
        @clicked="act(1)"
    >
      <img src="../assets/watch.png" alt=""
           :style="{width:wid+'px'}"
      >
    </VueDragResize>
  </div>
</template>

<script>
import VueDragResize from 'vue-drag-resize'

export default {
  name: 'Drag',
  data() {
    return {
      temp: [0, 0],
      wid: 100,
    }
  },
  components: {
    VueDragResize
  },
  methods: {
    act(index) {
      for(let i=0;i<this.temp.length;i++){
        this.temp[i]=1
        console.log(this.temp[i],"drag这是i:"+i)
      }
      this.temp[index]=10
      // this.temp=this.temp.splice(0)
      this.$forceUpdate()
      console.log(this.temp)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.father {
  height: 400px;
  width: 700px;
  border: 1px solid red;
  position: relative;
  margin: 0 auto;
}
</style>
