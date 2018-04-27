import "babel-polyfill";
import "classlist-polyfill";
import '../style/app.scss';
import Vue from 'vue';
import router from './router.js'
import Scene from './components/Scene.vue';



// Vue.config.productionTip = false

// SVG Feature Detection
const supportsCSSTransformsOnSVG = (() => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 2 2');
  Object.assign(svg.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '2px',
    height: '2px',
  });
  svg.innerHTML = '<rect width="1" height="1" style="transform: translate(1px, 1px)"/>';
  document.body.appendChild(svg);
  const result = document.elementFromPoint(1, 1) !== svg;
  svg.parentNode.removeChild(svg);
  // console.log("SVG feature detection:");
  // console.log(result);
  return result;
})();

Vue.mixin({
  data: function () {
    return {
      devmode: true,
      supportsSVGCSSTransforms: supportsCSSTransformsOnSVG
    }
  },
  methods: {
    getWindow: function(){
      const viewport = {
        width: window.innerWidth,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight
      }
      return viewport;
    },
    debounce: function(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this,
          args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate)
            func.apply(context, args);
          };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
          func.apply(context, args);
        };
    }
  }
});

new Vue({
  el: '#app',
  router,
  template: '<Scene/>',
  components: { Scene },
  created(){
    console.log('app created');
  }
  // mixins: [mixins]
});
