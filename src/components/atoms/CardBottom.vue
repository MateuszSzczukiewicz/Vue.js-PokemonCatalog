<template>
	<div class="card-bottom">
		<p>Supertype: {{ card.supertype }}</p>
		<p>Subtype: {{ card.subtypes.join(', ') }}</p>
		<p>Rarity: {{ card.rarity }}</p>
	</div>
</template>

<script lang="ts">
import { Card } from '@/types/cart.type';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	name: 'CardBottom',
	props: {
		card: {
			type: Object as PropType<Card>,
			required: true,
		},
	},
});
</script>
<style lang="scss" scoped>
.card-bottom {
}
</style>
