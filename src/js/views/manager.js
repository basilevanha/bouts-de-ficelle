// Dependencies
// import Select from 'custom-select';



// import Header   from './partials/common/header';
import Evenements   from './templates/evenements';

const COMPONENTS = [

  {
    el: '[template="evenements"]',
    id: Evenements
  }
];

// Manager Class
class Manager {

  /**
   * Constructor:
   * Manager constructor called in `main.js` file.
   *
   * @constructor
   */
  constructor() {
    this.components = [];

    // Root element
    this.root = document.body;

    // Elements
    this.header = this.root.querySelector('[data-js-header]');
    this.footer = this.root.querySelector('[data-js-footer]');
    this.container = this.root.querySelector('[data-js-container]');

    this._onRAF = this.onRAF.bind(this);

    // Init
    this.initLayout();
    this.initComponents();
  }

  /**
   * Initialize layout classes like `Header` and `Footer`.
   */
  initLayout() {

    // Header
    if (this.header && typeof Header !== 'undefined') {
      // eslint-disable-next-line
      this.Header = new Header({
        el: this.header
      });
    }

    // Footer
    if (this.header && typeof Footer !== 'undefined') {
      // eslint-disable-next-line
      this.Footer = new Footer({
        el: this.footer
      });
    }
  }

  initComponents() {
    COMPONENTS.forEach((component, i) => {
      /* eslint-disable */
      if (component.el) {
        const els = document.querySelectorAll(component.el);

        for (let j = 0; j < els.length; j++) {
          const component = new COMPONENTS[i].id({ el: els[j] });
          this.components.push(component);
        }
      } else {
        const component = new COMPONENTS[i].id;
        this.components.push(component);
      }
      /* eslint-enable */
    });

    if (!this.RAF) {
      this.RAF = window.requestAnimationFrame(this._onRAF);
    }
  }

  /**
   * RequestAnimationFrame
   *
   * @param {float} timestamp Time as a DOMHighResTimeStamp
   */
  onRAF(timestamp) {
    // Components
    for (let i = 0; i < this.components.length; i++) {
      const component = this.components[i];
      if (component.onRAF) {
        component.onRAF(timestamp);
      }
    }

    this.RAF = window.requestAnimationFrame(this._onRAF);
  }
}

export default Manager;

