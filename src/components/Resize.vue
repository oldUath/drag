<template>
  <div>
    dddd
    <VueDragResize
      :w="width" :h="width" 
      v-on:resizing="resize" 
      v-on:dragging="resize"
      
    >
      <img src="../assets/bag.png" alt=""
        :style="{width:width+'px',height:width+'px'}"
      >
    </VueDragResize>
  </div>
</template>

<script>
import VueDragResize from 'vue-drag-resize';

export default {
  name: 'Resize',

  components: {
    VueDragResize
  },

  data() {
    return {
      width: 200,
      height: 0,
      top: 0,
      left: 0
    }
  },

  methods: {
    resize(newRect) {
      console.log("dddd",newRect,newRect.isActive)
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    }
  }
}
</script>
