<template>
	<section>
		<div v-if="loading">
			<BaseSpinner />
		</div>
		<div v-else-if="error">{{ error }}</div>
		<div v-else>
			<div class="grid">
				<BaseCard v-for="card in filteredCards" :key="card.id" :card="card" />
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, inject, computed } from 'vue';
import { getCards } from '@/helpers/getCards';
import { type Card } from '@/types/cart.type';
import BaseCard from '@/components/molecules/BaseCard.vue';
import BaseSpinner from '@/components/atoms/BaseSpinner.vue';

export default defineComponent({
	name: 'BaseGrid',
	components: {
		BaseCard,
		BaseSpinner,
	},
	setup() {
		const cards = ref<Card[] | null>([]);
		const cardsArray: Array<Card> = [];
		const loading = ref<boolean>(true);
		const error = ref<string | null>(null);
		const currentPage = ref<number>(1);
		const searchQuery = inject('SearchQuery');

		const fetchCards = async (page = 1) => {
			loading.value = true;
			try {
				const fetchedCards = await getCards({ page, pageSize: 4 });

				if (fetchedCards) {
					cardsArray.push(...fetchedCards);
					cards.value = [...cardsArray];
					currentPage.value = page;
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

		onMounted(() => fetchCards());

		const loadMore = () => {
			fetchCards(currentPage.value + 1);
		};

		const filteredCards = computed(() => {
			if (!searchQuery.value) {
				return cards;
			}
			return cards.value.filter((card) =>
				card.name.toLowerCase().includes(searchQuery.value.toLowerCase())
			);
		});

		return { cards, loading, error, loadMore, filteredCards };
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
