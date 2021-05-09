export const state = () => ({
	userList: [],
	userPost: [],
});

export const mutations = {
	setUserList(state, payload) {
		state.userList = payload;
	},
	setUserPost(state, payload) {
		state.userPost = payload;
	},
};
