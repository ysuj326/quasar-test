<template>
  <q-list>
    <q-item-label
      header
      class="text-grey-8"
    >
      왼쪽메뉴
    </q-item-label>

    <q-item
      v-for="(link, index) in essentialLinks"
      :key="index"
      clickable
      :href="link.link"
      tag="a"
    >

      <q-item-section
        v-if="link.icon"
        avatar
      >
        <q-icon :name="link.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ link.title }}</q-item-label>
        <q-item-label caption>
          {{ link.caption }}
        </q-item-label>
      </q-item-section>
    </q-item>

  </q-list>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  const linksData = [
    {
      title: 'Login',
      caption: '로그인',
      icon: 'school',
      link: '/auth/login'
    },
    {
      title: 'Register',
      caption: '회원가입',
      icon: 'code',
      link: '/auth/register'
    },
    {
      title: 'Dashboard',
      caption: '대시보드',
      icon: 'code',
      link: '/dashboard'
    }
  ];

  @Component({
    name: 'LeftMenu',
    components: {}
  })

  export default class LeftMenu extends Vue {
    essentialLinks = linksData;

    private handleLink(link: string): void {
      console.log(link);
      console.log(this.$route);
      // this.$route.replace(link);
    }
  }
</script>
