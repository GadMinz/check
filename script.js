const check = (str) => {
    let chars = str.split(''),
        stack = [],
        open = ['{', '(', '['],
        close = ['}', ')', ']'],
        countWrong = 0,
        countCorrect = 0,
        closeIndex,
        openIndex;

    for (let i = 0; i < chars.length; i++) {
        openIndex = open.indexOf(chars[i]);
        if (openIndex !== -1) {
            stack.push(openIndex);
            continue;
        }
        closeIndex = close.indexOf(chars[i]);
        if (closeIndex !== -1) {
            openIndex = stack[stack.length - 1];
            if (closeIndex !== openIndex) {
                countWrong++
                continue
            }
            countCorrect += 2
            stack.pop()
        }
    }
    if (stack.length !== 0) {
        countWrong+=stack.length
    }
    return {countCorrect, countWrong}
};

document.querySelector('.b-1').addEventListener('click', () => {
    let data = document.querySelector('.i-1').value;
    const count = check(data)
    document.querySelector('.correct').innerHTML = `Правильных скобок: ${count.countCorrect}`;
    document.querySelector('.wrong').innerHTML = `Неправильных скобок: ${count.countWrong}`;
})
