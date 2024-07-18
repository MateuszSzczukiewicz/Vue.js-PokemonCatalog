<template>
	<input
		class="base-search"
		type="text"
		placeholder="Search"
		autocomplete="off"
	/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'BaseSearch',
	props: {},
	setup() {
		return {};
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
