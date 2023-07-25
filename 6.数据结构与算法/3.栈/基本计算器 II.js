/**
 * https://leetcode.cn/problems/basic-calculator-ii/
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];
    let preSign = '+';
    let num = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        if (s[i] == ' ') {
            continue;
        }
        if (isDigit(s[i]) ) {
            num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
        }
        if (!isDigit(s[i]) || i === n - 1) {
            switch (preSign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                default:
                    stack.push(stack.pop() / num | 0);
            }   
            preSign = s[i];
            num = 0;
        }
    }
    let ans = 0;
    while (stack.length) {
        ans += stack.pop();
    }
    return ans;
};

var isDigit = function(s) {
    return s.charCodeAt() >= '0'.charCodeAt() && s.charCodeAt() <= '9'.charCodeAt();
}

calculate("3 /2 ")