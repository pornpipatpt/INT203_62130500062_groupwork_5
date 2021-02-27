app.component("photo-search", {
  props: {
    searchbutton: Boolean,
    text: String,
  },
  template:
    /*html*/
    `    
    <div>
 <span class="material-icons text-3xl cursor-pointer ml-72" :class="{'hidden' :searchbutton  }">
 <i class="fas fa-search" @click="search"></i></span>
<span :class="{'hidden' : !searchbutton}">
  <input class="px-2 border-2 border-black mx-2" placeholder="searching photos"
  :value="text" @input="$emit('update:text', $event.target.value)" />
  <button class="mx-2 rouned text-white px-4 py-2 bg-blue-500" @click="search">
    Cancle
  </button>
</span> 
</div>

`,

  methods: {
    search() {
      this.$emit("search-box");
    },
  },
  data() {
    return {};
  },
});
