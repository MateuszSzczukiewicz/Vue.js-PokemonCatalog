<template>
	<div class="card-top">
		<h2>{{ card.name }}</h2>
		<h3>{{ card.nationalPokedexNumbers[0] }}</h3>
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
}
</style>
