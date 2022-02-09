<template>
  <div class="home">

  <field-add-task />

  <list-tasks 
    v-if="$store.state.tasks.length"
  />

  <no-tasks
  v-else
  />
  
  <button-done-sorting 
    v-if="$store.state.sorting"/>

  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  'field-add-task': require('@/components/FieldAddTask.vue').default,
  'list-tasks': require('@/components/ListTasks.vue').default,
  'no-tasks': require('@/components/NoTasks.vue').default,
  'button-done-sorting': require('@/components/ButtonDoneSorting.vue').default
  }
}
</script>


