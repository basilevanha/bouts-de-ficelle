import { isLessThan } from '../../../utils/mq';

class Header {
  constructor({ el }) {
    this.$el = el;

    this.$burgerButton      = this.$el.querySelector('[js-burger-button]');
    this.$menu             = this.$el.querySelector('[js-menu]');
    this.$menuLinks             = this.$el.querySelectorAll('[js-menu-link]');

    this.$body      = document.querySelector('body');
    this.$header    = document.querySelector('[js-header]');


    const isHidden = 'header-is-hidden';
    const isVisible = 'header-is-sticky';

    let lastScroll = 0;


    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      
        if (currentScroll <= (isLessThan('l') ? 70 : 85)) {
          this.$header.classList.remove(isHidden);
          this.$header.classList.remove(isVisible);
          return;
        }

        if (currentScroll > lastScroll && !this.$header.classList.contains(isHidden)) {
          // DOWN
          this.$header.classList.remove(isVisible);
          this.$header.classList.add(isHidden);
        } else if (currentScroll < lastScroll && this.$header.classList.contains(isHidden)) {
          // UP
          this.$header.classList.remove(isHidden);
          this.$header.classList.add(isVisible);
        }

        lastScroll = currentScroll;
      });

    this.bindEvents();
  }

  bindEvents() {
    this._toggleMenu = this.toggleMenu.bind(this);
    this.$burgerButton.addEventListener('click', this._toggleMenu);

    if(isLessThan('l')) {
      this.$menuLinks.forEach(link => {
        link.addEventListener('click', this._toggleMenu);
      });
    }
  }

  toggleMenu() {
    if (this.$body.classList.contains('menu-is-open')) {
      this.$body.classList.remove('menu-is-open');
      this.$burgerButton.classList.remove('is-open');
      this.$header.classList.remove('menu-is-open');
    } else {
      this.$body.classList.add('menu-is-open');
      this.$burgerButton.classList.add('is-open');
      this.$header.classList.add('menu-is-open');
    }
  }
}

export default Header;
