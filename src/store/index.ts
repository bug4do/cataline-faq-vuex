import FAQCategory from '@/interfaces/FAQCategory';
import { createStore } from 'vuex';

import { faqCategories } from '@/data/db.json';

export default createStore({
	state: {
		faqCategories: [] as FAQCategory[],
		currentView: 'Home',
		selectedCategory: 0,
		selectedQuestion: 0
	},
	mutations: {
		UPDATE_FAQ_DATA(state, data: FAQCategory[]) {
			state.faqCategories = data;
		}
	},
	actions: {
		fetchFaqCategories(context) {
			context.commit('UPDATE_FAQ_DATA', faqCategories);
		}
	},
	getters: {
		$all(state) {
			return state.faqCategories;
		}
	}
});
