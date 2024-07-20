<template>
	<article class="catalog">
		<BaseHeader />
		<BaseGrid ref="baseGridRef" />
		<CardButton :is-loading="isLoading" @load-more="loadMoreCards" />
	</article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BaseGrid from '@/components/organisms/BaseGrid.vue';
import CardButton from '@/components/atoms/CardButton.vue';
import BaseHeader from '@/components/molecules/BaseHeader.vue';

export default defineComponent({
	name: 'BaseCatalog',
	components: {
		BaseGrid,
		CardButton,
		BaseHeader,
	},
	setup() {
		const baseGridRef = ref<InstanceType<typeof BaseGrid> | null>(null);
		const isLoading = ref<boolean>(false);

		const loadMoreCards = async () => {
			if (baseGridRef.value) {
				isLoading.value = true;
				await baseGridRef?.value?.loadMore();
				isLoading.value = false;
			}
		};

		return { loadMoreCards, baseGridRef, isLoading };
	},
});
</script>

<style lang="scss" scoped>
.catalog {
	margin: 0 auto;
	width: 1200px;
	display: flex;
	flex-direction: column;
	align-items: space-around;
	gap: 30px;
}
</style>
