<template>
	<div class="base-search">
		<input
			class="base-search__input"
			type="text"
			placeholder="Search"
			autocomplete="off"
		/>
		<label for="search">Search</label>
	</div>
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
	&__input {
		padding: 10px 20px;
		width: 300px;
		height: 42px;
		border: none;
		border-bottom: 3px solid $secondary-color--light;
		transition: border-bottom-color 0.3s;
		font-size: 16px;
	}
}
</style>
