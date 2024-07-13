<template>
	<article class="catalog">
		<BaseGrid />
		<CardButton />
	</article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseGrid from '@/components/organisms/BaseGrid.vue';
import CardButton from '../atoms/CardButton.vue';

export default defineComponent({
	name: 'BaseCatalog',
	components: {
		BaseGrid,
		CardButton,
	},
});
</script>

<style lang="scss" scoped>
.catalog {
	margin: 0 auto;
	width: 1200px;
}
</style>
