import FAQCategory from '@/interfaces/Category';
import { createStore } from 'vuex';

import { faqCategories } from '@/data/db.json';
import Question from '@/interfaces/Question';

export default createStore({
	state: {
		faqCategories: [] as FAQCategory[],

		currentView: 'Home',
		transitionDepth: 1,

		selectedCategory: {} as FAQCategory,
		selectedQuestion: {} as Question
	},
	mutations: {
		UPDATE_FAQ_DATA(state, data: FAQCategory[]) {
			state.faqCategories = data;
		},
		UPDATE_VIEW(state, data: string) {
			state.currentView = data;
		},
		UPDATE_CATEGORY(state, data: FAQCategory) {
			state.selectedCategory = data;
		},
		UPDATE_QUESTION(state, data: Question) {
			state.selectedQuestion = data;
		},
		INCREASE_DEPTH(state) {
			state.transitionDepth++;
		},
		DECREASE_DEPTH(state) {
			state.transitionDepth--;
		},
	},
	actions: {
		fetchFaqCategories({ commit }) {
			commit('UPDATE_FAQ_DATA', faqCategories);
		},
		increaseTransitionDepth({ commit }) {
			commit('INCREASE_DEPTH')
		},
		decreaseTransitionDepth({ commit }) {
			commit('DECREASE_DEPTH')
		},
		setCurrentView({ commit }, payload) {
			commit('UPDATE_VIEW', payload)
		},
		setCurrentQuestion({ commit }, payload) {
			commit('UPDATE_QUESTION', payload)
		},
		setCurrentCategory({ commit }, payload) {
			commit('UPDATE_CATEGORY', payload)
		}
	},
	getters: {
		$all(state) {
			return state.faqCategories;
		},
		$transitionDepth(state) {
			return state.transitionDepth;
		},
		$currentView(state) {
			return state.currentView;
		},
		$selectedCategory(state) {
			return state.selectedCategory;
		},
		$selectedQuestion(state) {
			return state.selectedQuestion;
		},
	}
});
