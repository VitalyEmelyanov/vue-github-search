<template>
  <div class="github-card">
    <transition name="fade" mode="out-in">
      <div v-if="loading" key="loading">
        Loading
      </div>
      <div v-else-if="user" key="user">
        <div class="background" :style="{backgroundImage: `url(${user.avatar_url})`}" />
        <div class="content">
          <a class="avatar" :href="`https://github.com/${user.login}`" target="_blank">
            <img :src="user.avatar_url" :alt="user.login" />
          </a>
          <h1>{{user.name || user.login}}</h1>
          <ul class="status">
            <li>
              <a :href="`https://github.com/${user.login}?tab=repositories`" target="_blank">
                <strong>{{user.public_repos}}</strong>
                <span>Repos</span>
              </a>
            </li>
            <li>
              <a :href="`https://gist.github.com/${user.login}`" target="_blank">
                <strong>{{user.public_gists}}</strong>
                <span>Gists</span>
              </a>
            </li>
            <li>
              <a :href="`https://github.com/${user.login}/followers`" target="_blank">
                <strong>{{user.followers}}</strong>
                <span>Followers</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div v-else key="not-found">
        User not found
      </div>
    </transition>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'User',
  computed: mapState(['loading', 'user'])
};
</script>

<style lang="stylus" scoped>
.github-card
  margin-top 50px
  padding 20px
  text-align center
  background #fff
  color #000
  position relative
  h1
    margin 16px 0 20px
    line-height 1
    font-size 24px
    font-weight 500
  .background
    filter blur(10px) opacity(50%)
    z-index 1
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background-size cover
    background-position center
    background-color #fff
  .content
    position relative
    z-index 2
    .avatar
      display inline-block
      overflow hidden
      background #fff
      border-radius 100%
      text-decoration none
      img
        display block
        width 80px
        height 80px
    .status
      background white
    ul
      text-transform uppercase
      font-size 12px
      color gray
      list-style-type none
      margin 0
      padding 0
      border-top 1px solid lightgray
      border-bottom 1px solid lightgray
      zoom 1
      &:after
        display block
        content ''
        clear both
    li
      width 33%
      float left
      padding 8px 0
      box-shadow 1px 0 0 #eee
      &:last-of-type
        box-shadow none
    strong
      display block
      color #292f33
      font-size 16px
      line-height 1.6
    a
      color #707070
      text-decoration none
      &:hover
        color #4183c4

.fade-enter-active, .fade-leave-active
  transition opacity .5s
.fade-enter, .fade-leave-to
  opacity 0
</style>
