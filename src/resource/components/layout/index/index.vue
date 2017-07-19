 <template>
     <div>
         <!--<top-frame></top-frame>
         <main-frame></main-frame>
          mainFrame tsc -->
         <transition name="component-fade" mode="in-out">
             <component v-bind:is="cview"></component>
         </transition>
     </div>
 </template>
 <script>
 import { mapState } from 'vuex'
 import topFrame from './topFrame.vue'
 import mainFrame from './mainFrame.vue'

 export default {

     computed: mapState({
         // 箭头函数可使代码更简练
         cview: state => state.logined,
         }),
     components:{
         topFrame,mainFrame
     }
 }
 </script>
 <style>
     #centerLogo{
         background-image:url(./image/centerLogo.png); background-repeat:no-repeat; background-position:center bottom; width:100%; height:65%;
     }
     .component-fade-enter-active,{
         transition: opacity .8s ease;
     }
     .component-fade-leave-active {
         transition:  all .9s ease;
     }
     .component-fade-enter, .component-fade-leave-active {
         opacity: 0;
         transform:translateY(-100%);
     }
 </style>