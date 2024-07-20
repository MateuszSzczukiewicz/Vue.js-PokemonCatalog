<template>
	<div class="card-bottom">
		<p>
			<span class="card-bottom__header">Supertype:</span> {{ card.supertype }}
		</p>
		<p>
			<span class="card-bottom__header">Subtype:</span>
			{{ card.subtypes.join(', ') }}
		</p>
		<p><span class="card-bottom__header">Rarity:</span> {{ card.rarity }}</p>
	</div>
</template>

<script lang="ts">
import { type Card } from '@/types/cart.type';
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
	font-size: 16px;

	&__header {
		font-weight: bold;
	}
}
</style>
