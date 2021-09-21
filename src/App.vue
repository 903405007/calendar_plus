<template>
	<div id="app">
		<my-header>
			{{headerTitle}}
		</my-header>
		<search-input :maxlength="maxlength" :placeholder="placeholder"></search-input>
		<router-view />
		<tab></tab>
	</div>
</template>
<script>
	import {
		useStore
	} from 'vuex'
	import {
		useRouter
	} from 'vue-router'
	import {
		computed,
		watch
	} from 'vue'
	import MyHeader from './components/Header'
	import SearchInput from './components/SearchInput'
	import Tab from './components/Tab'
	export default {
		name: 'App',
		components: {
			SearchInput,
			MyHeader,
			Tab
		},
		setup() {
			const router = useRouter();
			const store = useStore(),
				state = store.state;

			// 刷新时，跳转回主页
			router.push('/')

			// 监听路由变化
			watch(() => {
				return router.currentRoute.value.name
			}, (value) => {
				store.commit('setHeaderTitle', value)
				store.commit('setMaxlength', value)
				store.commit('setPlaceholder', value)
			})

			return computed(() => state).value
		}
	}
</script>
