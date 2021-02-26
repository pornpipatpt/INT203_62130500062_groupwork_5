app.component('photo-view',{
    props : {
        viewing : Object,
 },
     template :
  /*html*/
 `   
  <div>
    <div v-show="viewing.hasView" class="fixed flex justify-center h-screen w-screen top-0 bg-black ">
      <div class="h-screen m-6 ">
          <i class="far fa-2x fa-window-close text-white flex-row-reverse cursor-pointer" @click="distoggleView"></i>
          <img :src="viewing.viewImg" class="h-5/6 p-6 ">
      </div>
  </div>
  </div>
 
 `,
 
 methods: {
    distoggleView(){
        this.$emit('dis-toggle');
    }
 },
 })
 