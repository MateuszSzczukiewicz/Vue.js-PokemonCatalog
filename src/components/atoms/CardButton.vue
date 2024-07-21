<template>
	<BaseSpinner v-if="isLoading" />
	<div @click="emitLoadMore" class="button" v-else>
		<p class="button__text">Load More</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseSpinner from '@/components/atoms/BaseSpinner.vue';

export default defineComponent({
	name: 'CardButton',
	components: {
		BaseSpinner,
	},
	emits: ['load-more'],
	props: {
		isLoading: {
			type: Boolean,
			required: true,
		},
	},
	setup(props, { emit }) {
		const emitLoadMore = () => {
			if (!props.isLoading) {
				emit('load-more');
			}
		};

		return { emitLoadMore };
	},
});
</script>
<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.button {
	background-color: $primary-color;
	margin: 30px auto;
	border: 4px solid $primary-color;
	padding: 20px 50px;
	font-size: 24px;
	transition: 0.1s ease-in;
	width: fit-content;
	cursor: pointer;
	color: #fff;

	&:hover {
		background-color: #fff;
		color: $primary-color;
	}
}
</style>
