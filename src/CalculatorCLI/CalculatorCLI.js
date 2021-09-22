
import readline from 'readline';
import {Operations, calculate} from '../rpl/rpl'

export default class CalculatorCLI {
    constructor(inputStream, outputStream) {
        this.io = readline.createInterface({
            input: inputStream,
            output: outputStream,
        });
        this.stack = [];
    }

    start() {
        this.io.on('line', this.onInput.bind(this));
        this.io.on('close', this.onClose.bind(this));
        this.io.prompt();
    }

    onInput(input) {
        if (input === 'q') {
            this.io.close();
        }

        try {
            this.handleInput(input)
        } catch(e) {
            console.log('Error: ' + e);
            this.io.close();
        } finally {
            this.io.prompt();
        }
    }

    handleInput(input) {
        this.stack = this.stack.concat(input.split(' '));
        let response = '';

        if (this.shouldCalculate()) {
            this.stack = calculate(this.stack.join(' '));
            response = this.stack.at(-1);
        } else {
            response = input;
        }

        console.log(response);
    }

    shouldCalculate() {
        const lastElement = this.stack.at(-1);

        return (Operations.indexOf(lastElement) !== -1);
    }
    
    onClose() {
        process.exit(0);
    }
}