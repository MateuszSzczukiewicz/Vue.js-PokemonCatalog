<template>
	<article class="catalog">
		<BaseGrid ref="baseGridRef" @load-more="loadMoreCards" />
		<CardButton @load-more="triggerLoadMore" />
	</article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BaseGrid from '@/components/organisms/BaseGrid.vue';
import CardButton from '../atoms/CardButton.vue';

export default defineComponent({
	name: 'BaseCatalog',
	components: {
		BaseGrid,
		CardButton,
	},
	setup() {
		const baseGridRef = ref<InstanceType<typeof BaseGrid> | null>(null);

		const loadMoreCards = () => {
			baseGridRef?.value?.loadMore();
		};

		const triggerLoadMore = () => {
			baseGridRef?.value?.handleLoadMore();
		};

		return { loadMoreCards, triggerLoadMore };
	},
});
</script>

<style lang="scss" scoped>
.catalog {
	margin: 0 auto;
	width: 1200px;
}
</style>
