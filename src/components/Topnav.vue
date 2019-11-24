<template>
  <nav class="comWidth">
	<a href="javascript:;" class="app_logo">
		<img src="/static/images/icon-logo.png" alt align="middle" class="fl logo" />
	</a>
	<a href="javascript:;" class="app_font">
		<span class="top">亂鬥英雄志</span>
		<span class="bot">週年慶典狂歡派對</span>
	</a>
	<a href="javascript:;" class="app_dot">
		<img src="/static/images/top-dot.png" alt align="middle" class="fl" @click="openTopMenu" />
	</a>
  </nav>
</template>

<script>
export default {
  name: "HomeTopnav",
  methods: {
    openTopMenu() {
      this.$emit("openTopMenu");
    }
  }
};
</script>

<style lang="stylus" scoped>
nav
	width: 100%
	height: 1rem
	background:rgba(0,0,0,.7)
	position: fixed
	top:0
	z-index: 1
	a
		width 100%
		font-size: .16rem
		color: #333333
		.logo
			margin-left:.1rem
		&.app_logo
			display: inline-block
			width: 1.22rem
			height: 1.22rem
			margin-left: .05rem
			margin-top: .15rem
		&.app_font
			position: absolute
			width: 60%
			color: #fff
			top:.15rem
			left:1.6rem
		&.app_dot
			width: .48rem
			height: .35rem
			float: right
			margin-right: 0.3rem
			padding-top: .28rem;
		span
			display: block
			&.top
				width: 100%
				font-size :.36rem
				font-weight: bold
			&.bot
				font-size :.22rem
				margin-top:.13rem
</style>
