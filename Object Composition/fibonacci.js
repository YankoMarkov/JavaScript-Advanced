let fib = (function fibonacci() {
	let f1 = 0;
	let f2 = 1;
	return () => {
		let f3 = f1 + f2;
		[f1, f2] = [f2, f3];
		return f1;
	};
})();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
