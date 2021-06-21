<template>
  <div class="container">
    <input
      v-model="title"
      class="input is-hovered"
      placeholder="Search for Movies, Series & more"
      @keyup.enter="apply"
      type="text" />
    <div class="selects">
      <div
        class="select"
        v-for="filter in filters"
        :key="filter.name">
        <select
          class="is-hovered"
          v-model="$data[filter.name]">
          <option
            v-if="filter.name ==='year'"
            value="">
            All Years
          </option>
          <option
            v-for="item in filter.items"
            :key="item">
            {{ item }}
          </option>
        </select>
      </div>
    </div>
    <button
      class="button is-primary"
      @click="apply">
      Apply
    </button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title:'',
            type:'movie',
            number: 10,
            year:'',
            filters: [
                {
                    name:'type',
                    items:['movie','series','episode']
                },
                {
                    name:'number',
                    items:[10,20,30]
                },
                {
                    name:'year',
                    items: (()=> {
                        const years = [];
                        const thisYear = new Date().getFullYear()
                        for (let i = thisYear; i >= 1985; i -= 1){
                            years.push(i)
                        }
                        return years
                    })()
                }
            ]
        }
    },
    methods:{
        async apply(){
          console.log(this.title)
            this.$store.dispatch('movie/searchMovies', {
              title:this.title,
              type:this.type,
              number:this.number,
              year:this.year
            })
        }
    }
}
</script>
<style scoped lang="scss">
.container{
    display:flex;
    > *{
        margin-right: 10px;
        font-size: 15px;
        height:50px;
        &:last-child{
            margin-right:0;
        }
    }
    .selects{
        display: flex;
        > *{
        margin-right: 10px;
        &:last-child{
            margin-right:0;
        }
        }
        select{
        height:50px;
            width: 120px;
        }
    }
    .button{
        width:120px;
        height:50px;
        flex-shrink: 0;
        font-weight: 700;
    }
}
</style>