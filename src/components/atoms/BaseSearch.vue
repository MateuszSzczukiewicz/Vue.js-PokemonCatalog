<template>
	<input
		class="base-search"
		type="text"
		placeholder="Search"
		autocomplete="off"
		v-model="searchQuery"
	/>
</template>

<script lang="ts">
import { defineComponent, ref, watch, inject } from 'vue';

export default defineComponent({
	name: 'BaseSearch',
	emits: ['update:SearchQuery'],
	setup() {
		const searchQuery = inject('searchQuery', ref<string>(''));

		watch(searchQuery, (newQuery: string) => {
			searchQuery.value = newQuery;
		});

		return { searchQuery };
	},
});
</script>
<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.base-search {
	padding: 10px 20px;
	width: 300px;
	height: 42px;
	border: none;
	border-bottom: 3px solid $secondary-color--light;
	transition: border-bottom-color 0.3s;
	font-size: 16px;

	&:focus {
		outline: none;
		border-color: $primary-color--light;
	}
}
</style>
