
import CalculatorCLI from './src/CalculatorCLI/CalculatorCLI'

const calculatorCli = new CalculatorCLI(process.stdin, process.stdout);

calculatorCli.start();