<template>
	<article>
		<BaseGrid />
	</article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseGrid from '@/components/organisms/BaseGrid.vue';

export default defineComponent({
	name: 'BaseCatalog',
	components: {
		BaseGrid,
	},
});
</script>

<style lang="scss" scoped></style>
