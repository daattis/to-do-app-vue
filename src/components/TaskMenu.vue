<template>
<div>

 <v-menu
    bottom
    left
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
      color="primary"
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        @click="handleClick(index)"
      >
      <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
  
  <dialog-edit
  v-if="dialogs.edit"
  @close="dialogs.edit = false"
  :task="task" 
  />
  <dialog-due-date
  v-if="dialogs.duedate"
  @close="dialogs.duedate = false"
  :task="task" 
  />
  
  <dialog-delete
  v-if="dialogs.delete"
  @close="dialogs.delete = false"
  :task="task"/>
  </div>

</template>

<script>
export default {
        props: ['task'],
      data: () => ({
        dialogs: {
            edit: false,
            duedate: false,
            delete: false 
        },
        items: [
            { 
                title: 'Edit',
                icon: 'mdi-pencil-outline',
                click() {
                    this.dialogs.edit = true
                }
                },
            { 
                title: 'Due date',
                icon: 'mdi-calendar',
                click() {
                    console.log('due date')
                    this.dialogs.duedate = true
                } 
                },
            { 
                title: 'Delete',
                icon: 'mdi-delete',
                click() {
                    this.dialogs.delete = true
                } 
                },
                { 
                title: 'Sort',
                icon: 'mdi-drag-horizontal-variant',
                click() {
                    this.$store.commit('toggleSorting')
                } 
                },
        ],
        }),
        methods: {
            handleClick(index) {
                this.items[index].click.call(this)
            }
        },
        components: {
            'dialog-edit': require('@/components/DialogEdit.vue').default,
            'dialog-delete': require('@/components/DialogDelete.vue').default,
            'dialog-due-date': require('@/components/DialogDuedate.vue').default
        }
}
</script>