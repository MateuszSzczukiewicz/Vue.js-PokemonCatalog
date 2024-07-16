<template>
	<div class="card-top">
		<h2 class="card-top__header">{{ card.name }}</h2>
		<p class="card-top__number">Nr: {{ card.nationalPokedexNumbers[0] }}</p>
	</div>
</template>

<script lang="ts">
import { Card } from '@/types/cart.type';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	name: 'CardTop',
	props: {
		card: {
			type: Object as PropType<Card>,
			required: true,
		},
	},
});
</script>
<style lang="scss" scoped>
.card-top {
	display: flex;
	justify-content: space-between;
	align-items: center;

	&__header {
		font-weight: bold;
		font-size: 24px;
	}

	&__number {
		font-size: 16px;
	}
}
</style>
