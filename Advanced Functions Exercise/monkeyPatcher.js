function solution(input) {
	switch (input) {
		case "upvote":
			this.upvotes++;
			break;
		case "downvote":
			this.downvotes++;
			break;
		case "score":
			let rating = "new";
			let currentUpvotes = this.upvotes;
			let currentDownvotes = this.downvotes;
			let totalScore = currentUpvotes - currentDownvotes;
			if (currentUpvotes + currentDownvotes >= 10) {
				if (currentUpvotes > 0.66 * (currentUpvotes + currentDownvotes)) {
					rating = "hot";
				} else if (currentUpvotes - currentDownvotes < 0) {
					rating = "unpopular";
				} else if (currentUpvotes > 100 || currentDownvotes > 100) {
					rating = "controversial";
				}
			}
			if (currentUpvotes + currentDownvotes > 50) {
				let modifier = Math.ceil(0.25 * Math.max(currentUpvotes, currentDownvotes));
				currentUpvotes += modifier;
				currentDownvotes += modifier;
			}
			return [currentUpvotes, currentDownvotes, totalScore, rating];
	}
}

let post = {
	id: '3',
	author: 'emil',
	content: 'wazaaaaa',
	upvotes: 100,
	downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');
console.log(score);							// [127, 127, 0, 'controversial']
solution.call(post, 'downvote');  	        // (executed 50 times)
solution.call(post, 'downvote');  	        // (executed 50 times)
solution.call(post, 'downvote');  	        // (executed 50 times)
solution.call(post, 'downvote');	        // (executed 50 times)
solution.call(post, 'downvote');	        // (executed 50 times)
solution.call(post, 'downvote');	        // (executed 50 times)
solution.call(post, 'downvote');	        // (executed 50 times)
solution.call(post, 'downvote');	        // (executed 50 times)
solution.call(post, 'downvote');	        // (executed 50 times)
solution.call(post, 'downvote');	        // (executed 50 times)
score = solution.call(post, 'score');
console.log(score);
