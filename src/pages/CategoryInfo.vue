<template>
	<div class="category-info">
		<div class="header">
			<div class="back-btn" @click="back">
				<img :src="getImage('arrow-left.svg')" alt="Back Arrow" />
			</div>
			<div class="header-text">
				<h2>{{ $category.title }}</h2>
				<p>Selecione uma pergunta</p>
			</div>
			<img class="icon" :src="getImage($category.icon)" />
		</div>
		<ul class="questions">
			<li
				v-for="question in $category.questions"
				:key="question.id"
				class="question-item"
				@click="goToQuestion(question)"
			>
				{{ question.title }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import FAQCategory from '@/interfaces/Category';
import Question from '@/interfaces/Question';
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
	computed: {
		$category(): FAQCategory {
			return store.getters.$selectedCategory;
		}
	},
	methods: {
		back() {
			store.dispatch('decreaseTransitionDepth');
			store.dispatch('setCurrentView', 'Home');
		},
		getImage(img: string) {
			return require(`@/assets/images/${img}`);
		},
		goToQuestion(question: Question) {
			store.dispatch('setCurrentQuestion', question);
			store.dispatch('increaseTransitionDepth');
			store.dispatch('setCurrentView', 'QuestionInfo');
		}
	}
});
</script>

<style scoped>
.category-info {
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-rows: 1fr 4fr;
	grid-gap: 1rem;
	padding: 1rem;
}

.header {
	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-gap: 1rem;
	align-items: center;

	border-bottom: solid 1.5px #404451;
}

.back-btn {
	cursor: pointer;
	width: 45px;
	height: 32.5px;
	display: grid;
	justify-content: center;
	align-content: center;
	border-radius: 10px;
	background: transparent;
	transition: all 0.5s;
}

.back-btn:hover {
	background: #26282c;
}

.header-text h2 {
	font-size: 20px;
	font-weight: bold;
}

.header-text p {
	margin-top: 0.5rem;
	font-size: 13px;
	font-weight: normal;
}

img {
	width: 25px;
}

.questions {
	list-style: none;

	display: grid;
	align-items: center;
	grid-gap: 0.25rem;
}

.question-item {
	font-size: 16px;

	transition: all 0.5s;
	padding: 1rem;
	border-radius: 10px;
	cursor: pointer;
}

.question-item:hover {
	background: rgba(193, 192, 255, 0.1);
}
</style>
