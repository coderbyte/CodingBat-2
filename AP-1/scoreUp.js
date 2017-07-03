/* The "key" array is an array containing the correct answers to an exam, 
 * like {"a", "a", "b", "b"}. the "answers" array contains a student's 
 * answers, with "?" representing a question left blank. The two arrays are 
 * not empty and are the same length. Return the score for this array of 
 * answers, giving +4 for each correct answer, -1 for each incorrect answer, 
 * and +0 for each blank answer.
 */

console.log(scoreUp(["a", "a", "b", "b"], ["a", "c", "b", "c"])) // 6
console.log(scoreUp(["a", "a", "b", "b"], ["a", "a", "b", "c"])) // 11
console.log(scoreUp(["a", "a", "b", "b"], ["a", "a", "b", "b"])) // 16
console.log(scoreUp(["a", "a", "b", "b", "c", "c"], ["a", "c", "?", "?", "c", "c"])) // 11	

function scoreUp(key, answers) {
	var count = 0;
	
	for (var i = 0; i < key.length; i++) {
		if (key[i].charAt(0) === answers[i].charAt(0)) {
			count += 4;
		} else if (answers[i].charAt(0) !== '?') {
			count += -1;
		}
	}
	return count;
}