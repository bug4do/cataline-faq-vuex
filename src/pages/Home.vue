<template>
	<div class="home">
		<div class="header">
			<Astronaut />
			<div class="title">
				<h2 class="faq-title">Perguntas Frequentes</h2>
				<p class="faq-description">Escolha a categoria desejada</p>
			</div>
		</div>
		<ul class="categories">
			<li
				class="category-item"
				v-for="category in $allCategories"
				:key="category.id"
				@click="goToCategory(category)"
			>
				<img :src="getIconImage(category)" />
				<p>{{ category.title }}</p>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import FAQCategory from '@/interfaces/Category';
import store from '@/store';
import { defineComponent } from 'vue';
import Astronaut from '@/components/Astronaut.vue';

export default defineComponent({
	components: { Astronaut },
	computed: {
		$allCategories(): FAQCategory[] {
			return store.getters.$all;
		}
	},
	methods: {
		getIconImage(category: FAQCategory) {
			return require(`@/assets/images/${category.icon}`);
		},
		goToCategory(category: FAQCategory) {
			store.dispatch('setCurrentCategory', category);
			store.dispatch('increaseTransitionDepth');
			store.dispatch('setCurrentView', 'CategoryInfo');
		}
	}
});
</script>

<style scoped>
.home {
	display: grid;
	justify-items: center;
	width: 100%;
	height: 100%;
	grid-template-rows: 3fr 4fr;
	grid-gap: 1rem;

	padding: 1rem;
}

.header {
	display: grid;
	grid-gap: 1rem;
}

.astrounaut-img {
	margin-top: 1rem;
}

.title {
	margin-left: 0.75rem;
	justify-self: start;
	align-self: center;
}

.faq-title {
	font-size: 20px;
	font-weight: bold;
	justify-self: start;
}

.faq-description {
	margin-top: 0.5rem;
	font-size: 13px;
	font-weight: normal;
	justify-self: start;
}

.categories {
	list-style: none;

	display: grid;
	align-items: center;
}

.category-item {
	width: 100%;
	display: grid;
	padding: 1rem 1.6rem;
	grid-gap: 2.125rem;
	grid-template-columns: auto 1fr;
	align-items: center;
	grid-auto-flow: column;
	background: none;
	transition: all 0.4s ease-in-out;

	border-radius: 10px;
	cursor: pointer;
}

.category-item:hover {
	background: rgba(193, 192, 255, 0.1);
}

.category-item p {
	min-width: 165px;
}

.category-item img {
	width: 1.5rem;
}
</style>
