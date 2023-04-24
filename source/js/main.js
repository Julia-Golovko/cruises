import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {Burger} from './utils/burger';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  const burger = new Burger();
  burger.init();
  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();

    const nojs = document.querySelector(".nojs");

    if (nojs) {
      nojs.classList.remove("nojs");
    }
  });
});
