class Image {
    constructor({ el }) {
      this.$el = el;

      this.$imgTag = this.$el.querySelector('[js-img-lazy-tag]');

      this.init();
    }
    
    init() {
       this.$imgTag.addEventListener("load", (event) => {
            this.$el.classList.remove('js-loading')
       });
    }
}

export default Image;
