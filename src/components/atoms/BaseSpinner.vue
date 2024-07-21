<template>
	<div class="base-spinner">
		<div class="base-spinner__dot base-spinner__dot--first"></div>
		<div class="base-spinner__dot base-spinner__dot--second"></div>
		<div class="base-spinner__dot base-spinner__dot--third"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'BaseSpinner',
});
</script>
<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

@keyframes appear {
	0%,
	80%,
	100% {
		scale: 0;
	}
	40% {
		scale: 1;
	}
}

.base-spinner {
	display: flex;
	justify-content: center;
	gap: 10px;
	margin: 30px auto;
	align-items: center;

	&__dot {
		width: 30px;
		height: 30px;
		border-radius: 100%;
		animation: appear 1.2s infinite ease-in-out;

		&--first {
			background-color: $secondary-color--light;
			animation-delay: -0.24s;
		}
		&--second {
			background-color: $primary-color--light;
			animation-delay: -0.12s;
		}
		&--third {
			background-color: $secondary-color--light;
		}
	}
}
</style>
