<template>
	<div class="container">Year</div>
</template>

<script>
	import {
		useStore
	} from 'vuex'
	import getData from '@/services'
	import {
		onMounted
	} from 'vue'

	export default {
		name: 'Year',
		setup() {
			const store = useStore(),
				state = store.state;
			onMounted(() => {
				getData(store, 'year', '2020')
			})
		}
	}
</script>

<style lang="scss" scoped>
</style>
