<template>
	<ul class="bottom">
		<li>
			<a href="javascript:;">表白墻</a>
		</li>
		<li>
			<a href="javascript:;">亂世風雲榜</a>
		</li>
		<li>
			<a href="javascript:;">週年慶典</a>
		</li>
		<li>
			<a href="javascript:;">金將來襲</a>
		</li>
  	</ul>
</template>

<script>
export default {
  name: "HomeBotnav"
};
</script>

<style lang="stylus" scoped>
ul
	position: fixed
	left: 0
	bottom: 0
	display: flex
	justify-content: center
	align-items: center
	width: 100%
	height: 1.44rem
	background: url('/static/images/bot-nav.png') no-repeat
	background-size: 100% 100%
	li
		flex: 1
		text-align: center
		font-family: '黑体'
		font-size: 0.36rem
		color: #444444
		&:nth-child(1)
			flex:0.88
</style>
