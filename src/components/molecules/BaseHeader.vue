<template>
	<div class="base-header">
		<BaseTitle />
		<BaseSearch />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseTitle from '@/components/atoms/BaseTitle.vue';
import BaseSearch from '@/components/atoms/BaseSearch.vue';

export default defineComponent({
	name: 'BaseHeader',
	components: {
		BaseTitle,
		BaseSearch,
	},
});
</script>
<style lang="scss" scoped>
.base-header {
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin: 30px 0;
}
</style>
