<template>
	<section>
		<div v-if="error">{{ error }}</div>
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

export default defineComponent({
	name: 'BaseGrid',
	components: {
		BaseCard,
	},
	setup() {
		const cards = ref<Card[]>([]);
		const cardsArray: Array<Card> = [];
		const loading = ref<boolean>(true);
		const error = ref<string | null>(null);
		const currentPage = ref<number>(1);
		const searchQuery = inject('searchQuery', ref<string>(''));

		if (!searchQuery) {
			throw new Error('Search query is not provided in BaseGrid');
		}

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

		const loadMore = async () => {
			await fetchCards(currentPage.value + 1);
		};

		const filteredCards = computed(() => {
			return cards.value.filter((card) =>
				card.name.toLowerCase().includes(searchQuery.value.toLowerCase())
			);
		});

		onMounted(() => fetchCards());

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
