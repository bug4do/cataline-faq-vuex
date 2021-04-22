<template>
	<div class="question-info">
		<div class="header">
			<div class="back-btn" @click="back">
				<img :src="getImage('arrow-left.svg')" alt="Back Arrow" />
			</div>
			<h2 class="header-text">{{ $question.title }}</h2>
		</div>
		<p class="content" v-html="$question.content"></p>
	</div>
</template>

<script lang="ts">
import Question from '@/interfaces/Question';
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
	computed: {
		$question(): Question {
			return store.getters.$selectedQuestion;
		}
	},
	methods: {
		back() {
			store.dispatch('decreaseTransitionDepth');
			store.dispatch('setCurrentView', 'CategoryInfo');
		},
		getImage(img: string) {
			return require(`@/assets/images/${img}`);
		}
	}
});
</script>

<style scoped>
.question-info {
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-rows: 1fr 4fr;
	grid-gap: 1rem;
	padding: 1rem;
}

.header {
	display: grid;
	grid-template-columns: auto 1fr;
	grid-gap: 1rem;
	align-items: center;
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

.header-text {
	font-size: 16px;
	font-weight: normal;
}

.content {
	font-size: 13px;
	line-height: 1.25rem;
}

img {
	width: 25px;
}
</style>
