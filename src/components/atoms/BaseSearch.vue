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
import { defineComponent, inject } from 'vue';

export default defineComponent({
	name: 'BaseSearch',
	setup() {
		const searchQuery = inject('searchQuery');

		if (!searchQuery) {
			throw new Error('Search query is not provided');
		}
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
