export default {
  created() {
    const resizeHandler = () => {
      if (window.innerWidth / window.innerHeight > 16 / 9) {
        this.layoutHeight = window.innerHeight;
        this.zoom = this.layoutHeight / 1080;
        this.layoutWidth = window.innerWidth * this.zoom;
      } else {
        this.layoutWidth = window.innerWidth;
        this.zoom = this.layoutWidth / 1920;
        this.layoutHeight = window.innerHeight * this.zoom;
      }
    };
    window.addEventListener('resize', resizeHandler);
    this.$once('hook:destroyed', () => {
      window.removeEventListener('resize', resizeHandler);
    });

    this.$nextTick(resizeHandler);
  },

  data() {
    return {
      zoom: 1,
      layoutWidth: 1920,
      layoutHeight: 1080,
    };
  },
};
