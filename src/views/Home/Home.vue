<template>
  <div class="home">
    <HelloWorld />
    <Button @click="handleClick">登录</Button>
  </div>
</template>

<script>
// @ is an alias to /src
import { isEmpty } from 'lodash'
import HelloWorld from '@/components/HelloWorld'
import { Button } from 'vant'
import API from './apis'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Button
  },
  data () {
    return {
      data: isEmpty('')
    }
  },
  created () {
  },
  methods: {
    handleClick () {
      const params = {
        phone: '1323123213',
        vcode: '123'
      }
      API.GET_LOGIN_DATA(params).then(res => {
        console.log('log=>', res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "index";
</style>
