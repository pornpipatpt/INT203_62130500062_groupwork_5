app.component("photo-items", {
  props: {
     photo:Object,
     
  },
  template:
    /*html*/
    `   
 
 <div>
     <img v-on:click="toggleDone(photo)" :src="photo.url" />
     <div class="">{{photo.title}}</div>
     <p class="mb-2">
       <i v-show="photo.done" class="far fa-3x fa-heart text-red-500"></i>
     </p>
</div>

 `,

  methods: {
    toggleDone(photo) {
      this.$emit('toggle-done',photo);
    },
 
    
  },
  data() {
    return {
      
    };
  },
});
