<template>
	<div class="posts">
		<div v-show="page === 'list'">
			<h2>Posts by {{ username }}</h2>

			<div
				v-for="(post, index) in userPost"
				:key="index"
				@click="openPost(post.id)"
			>
				<div class="posts__card">
					<label>{{ post.title }}</label>
				</div>
			</div>
		</div>

		<div v-show="page === 'detail'">
			<div class="posts__navigation">
				<label @click="openList">Back</label>
			</div>

			<div class="posts__card">
				<label>{{ postActive.title }}</label>
				<span>{{ postActive.body }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
	data() {
		return {
			page: "list",
			postActive: {},
		};
	},

	computed: {
		...mapState("users", ["userPost", "userList"]),
		username() {
			const user = this.userList.filter(
				(user) => user.id == this.$route.params.id
			);
			return user[0].name;
		},
	},

	mounted() {
		this.getUserPost(this.$route.params.id);
	},

	methods: {
		...mapMutations("users", ["setUserPost"]),
		getUserPost(id) {
			fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
				.then((response) => response.json())
				.then((json) => this.setUserPost(json));
		},
		openPost(id) {
			this.page = "detail";
			this.postActive = this.userPost.filter((post) => post.id === id)[0];
		},
		openList() {
			this.page = "list";
		},
	},
};
</script>

<style lang="scss" scoped>
.posts {
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		text-align: center;
		margin: 25px 0;
	}

	&__card {
		border-radius: 16px;
		box-shadow: 0px 11px 35px 2px rgb(0 0 0 / 14%);
		background-color: #fff;
		padding: 20px;
		margin: 10px;
		line-height: 25px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		cursor: pointer;
		width: 500px;

		label {
			font-weight: bold;
			font-size: 20px;
			text-transform: capitalize;
			word-break: break-word;
			margin-bottom: 15px;
		}
	}

	&__navigation {
		font-weight: bold;
		font-size: 18px;
		color: #f79489;
		margin: 25px 0 25px 15px;

		label {
			cursor: pointer;
		}
	}
}
</style>
