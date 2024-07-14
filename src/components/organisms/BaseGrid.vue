<template>
	<section>
		<div v-if="loading">Loading...</div>
		<div v-else-if="error">{{ error }}</div>
		<div v-else>
			<div class="grid">
				<BaseCard v-for="card in cards" :key="card.id" :card="card" />
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { getCards } from '@/helpers/getCards';
import { type Card } from '@/types/cart.type';
import BaseCard from '@/components/molecules/BaseCard.vue';

export default defineComponent({
	name: 'BaseGrid',
	components: {
		BaseCard,
	},
	setup(props, { emit }) {
		const cards = ref<Card[] | null>(null);
		const loading = ref(true);
		const error = ref<string | null>(null);
		const currentPage = ref(1);

		const fetchCards = async (page = 1) => {
			try {
				const fetchedCards = await getCards({ page, pageSize: 4 });

				if (fetchedCards) {
					cards.value = fetchedCards;
					console.log(fetchedCards);
				}
			} catch (err) {
				if (err instanceof Error) {
					error.value = `Error fetching cards: ${err.message}`;
				} else {
					error.value = 'An unknown error occurred.';
				}
			} finally {
				loading.value = false;
			}
		};

		const loadMore = () => {
			fetchCards(currentPage.value + 1);
		};

		const handleLoadMore = () => {
			emit('loadMore');
		};

		onMounted(() => fetchCards());

		return { cards, loading, error, handleLoadMore, loadMore };
	},
});
</script>
<style lang="scss" scoped>
.grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 25px;
}
</style>
