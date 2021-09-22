export const Operations = ['+', '-', '*', '/'];;

export const calculate = (expression) => {
    const operands = [];
    const elements = expression.split(' ');

    for (let value of elements) { 
        const isOperation = (Operations.indexOf(value) !== -1);

        if (isNaN(value) && !isOperation) {
            throw new Error('Input is not valid');
        }

        if(!isNaN(value)) {
            operands.push(value);
        } else {
            if (operands.length < 2) {
                throw new Error('Insufficient operands');
            }

            const n2 = parseFloat(operands.pop());
            const n1 = parseFloat(operands.pop());
            const res = evaluate(n1, n2, value);
            
            if (!isFinite(res)) {
                throw Error('Division by 0');
            }

            operands.push(res);
        } 
    }

    return operands;
}

const evaluate = (n1, n2, operator) => {
    if (operator === '+') return n1 + n2;
    if (operator === '-') return n1 - n2;
    if (operator === '*') return n1 * n2;
    if (operator === '/') return n1 / n2;
}