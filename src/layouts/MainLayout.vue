<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      class="ddd"
    >
      <LeftMenu></LeftMenu>
    </q-drawer>
    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import LeftMenu from 'components/console/LeftMenu.vue';

import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: { LeftMenu }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
}
</script>
