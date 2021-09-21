<template>
	<div class="container">
		<day-card :data="dayData"></day-card>
	</div>
</template>

<script>
	import {
		onMounted,
		computed
	} from 'vue'
	import {
		useStore
	} from 'vuex'
	import {
		getNowDate
	} from '../lib/utils'
	import DayCard from '../components/DayPage/Card'
	import getData from '@/services'


	export default {
		name: 'Day',
		components: {
			DayCard
		},
		setup() {
			const store = useStore(),
				state = store.state;
			onMounted(() => {
				getData(store, 'day', getNowDate('day'))
			})

			return {
				dayData: computed(() => state.dayData)
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
