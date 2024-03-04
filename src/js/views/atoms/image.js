class Image {
    constructor({ el }) {
      this.$el = el;

      this.$imgTag = this.$el.querySelector('[js-img-lazy-tag]');

      this.init();
    }
    
    init() {
       this.$imgTag.addEventListener("load", (event) => {
            console.log('loaded');
            this.$el.classList.remove('js-loading')
       });
    }
}

export default Image;
