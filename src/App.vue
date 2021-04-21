<template>
	<div class="container">
		<component :is="'Home'" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from './pages/Home.vue';
import store from '@/store';

export default defineComponent({
	components: { Home },
	created() {
		store.dispatch('fetchFaqCategories');
	}
});
</script>

<style scoped>
body {
	height: 100vh;
}

.container {
	height: 100vh;

	display: grid;
	grid-template-columns: 305px;
	grid-template-rows: 30rem;

	justify-content: center;
	align-content: center;
}
</style>
