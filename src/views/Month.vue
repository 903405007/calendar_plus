<template>
	<div class="container">Month</div>
</template>

<script>
	import {
		useStore
	} from 'vuex'
	import getData from '@/services'
	import {
		onMounted,
		getCurrentInstance
	} from 'vue'
	export default {
		name: 'Month',
		setup() {
			const store = useStore(),
				state = store.state;
			onMounted(() => {
				window.that = getCurrentInstance()
				getData(store, 'month', '2020-7')
			})
		}
	}
</script>

<style lang="scss" scoped>
</style>
