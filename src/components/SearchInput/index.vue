<template>
	<div class="search-wrap">
		<input type="text" :placeholder="placeholder" :maxlength="maxlength" :value="inputVal"
			@input="searchData($event)" />
	</div>
</template>

<script>
	import {
		ref
	} from 'vue'
	export default {
		name: 'SearchInput',
		props: {
			placeholder: String,
			maxlength: Number,
			inputVal: String,
		},
		setup() {
			const inputVal = ref('')
			const searchData = (e) => {

			}
			return {
				inputVal,
				searchData
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search-wrap {
		// 不用flex input 会错位
		display: flex;
		position: fixed;
		top: .44rem;
		left: 0;
		z-index: 1;
		width: 100%;
		height: .38rem;
		padding: .03rem .1rem;
		border-bottom: 1px solid #ddd;
		box-sizing: border-box;
		background-color: #fff;

		input {
			width: 100%;
			height: 100%;
			border: 1px solid #ddd;
			text-indent: .1rem;
			border-radius: .03rem;
			box-sizing: border-box;

			&:focus {
				border-color: #ed4040;
				box-shadow: 0 0 .02rem #ed4040;
				transition: all .3s;
			}
		}
	}
</style>
