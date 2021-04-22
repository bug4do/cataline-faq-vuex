<template>
	<div class="container">
		<div class="app-container">
			<transition
				:enter-active-class="enterTransition"
				:leave-active-class="leaveTransition"
				mode="out-in"
			>
				<component :is="$currentView" />
			</transition>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from '@/pages/Home.vue';
import CategoryInfo from '@/pages/CategoryInfo.vue';
import QuestionInfo from '@/pages/QuestionInfo.vue';

import store from '@/store';

type View = 'Home' | 'CategoryInfo' | 'QuestionInfo';

export default defineComponent({
	components: { Home, CategoryInfo, QuestionInfo },
	created() {
		store.dispatch('fetchFaqCategories');
	},
	data() {
		return {
			enterTransition:
				'animate__animated animate__fadeInRight animate__fast',
			leaveTransition:
				'animate__animated animate__fadeOutLeft animate__fast'
		};
	},
	computed: {
		$currentView() {
			return store.getters.$currentView as View;
		},
		$transitionDepth() {
			return store.getters.$transitionDepth as number;
		}
	},
	watch: {
		$transitionDepth(oldValue, newValue) {
			if (newValue > oldValue) {
				// eslint-disable-next-line prettier/prettier
				this.enterTransition = 'animate__animated animate__fadeInLeft animate__fast';
				// eslint-disable-next-line prettier/prettier
				this.leaveTransition = 'animate__animated animate__fadeOutRight animate__fast';
			} else {
				// eslint-disable-next-line prettier/prettier
				this.enterTransition = 'animate__animated animate__fadeInRight animate__fast';
				// eslint-disable-next-line prettier/prettier
				this.leaveTransition = 'animate__animated animate__fadeOutLeft animate__fast';
			}
		}
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

.app-container {
	border-radius: 15px;
	background: linear-gradient(180deg, #3f4452, #26282c);
	box-shadow: 0 8px 21px 3px rgb(0 0 0 / 19%);
}
</style>
