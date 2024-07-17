<template>
	<h1 class="base-title">
		Pokemon<span class="base-title__span"> catalog</span>
	</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'BaseTitle',
});
</script>
<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.base-title {
	font-weight: bold;
	font-size: 43px;
	color: $primary-color;

	&__span {
		color: $secondary-color;
	}
}
</style>
