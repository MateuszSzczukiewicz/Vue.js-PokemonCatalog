<template>
	<div class="button">
		<p class="button__text">Load More</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CardButton',
	emits: ['load-more'],
	setup(props, { emit }) {
		const emitLoadMore = () => {
			emit('load-more');
		};

		return { emitLoadMore };
	},
});
</script>
<style lang="scss" scoped>
@import '@/assets/scss/global.scss';
.button {
	background-color: $primary-color;
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
