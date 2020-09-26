<template>
    <div>
        <div class="todo">
            <div class="clear" @click="deletetTodo">
                <img src="../assets/delete-sign.png" alt="">
            </div>
            <div v-if="!updating" @dblclick="editingTodo">
                <input type="checkbox" name="" id="" v-model="done"  @change="doneEdit">
                {{task}}
            
            </div>
            <div v-else>
                <input type="checkbox" name="" id="" v-model="done"  @change="doneEdit">
                <input type="text" v-model="task" @keyup.enter="doneEdit" @blur="doneEdit" v-focus class="edit">
            </div>


        </div>
    </div>
</template>
<script>
export default {
    name: 'todo-list',
    props:{
      todo: {
          type: Object,
          required: true

        }
    },
    data(){
        return{
            id: this.todo.id,
            task: this.todo.task,
            done: this.todo.done,
            updating: false

        }
    },
    directives: {
        focus: {
            inserted: function(el){
                el.focus()
            }
        }
    },
    methods: {
        editingTodo(){
            this.updating = true
            this.beforeChache=this.task
        },
        doneEdit(){
            this.updating=false 
            if(this.task==''){
            this.task=this.beforeChache 
            }
            else{
                this.$store.dispatch('updateTodos', {
                    task: this.task,
                    done: this.done,
                    id: this.id
                })
            }
            
            
        },
        deletetTodo(){
            this.$store.dispatch('deletetTodo',{
                    task: this.task,
                    done: this.done,
                    id: this.id
                })
        }
    }
}
</script>
<style scoped>

</style>