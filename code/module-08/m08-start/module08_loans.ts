namespace Loans {
    export interface Loan {
        principle: number,
        interestRate: number,
    }
    export interface ConventionalLoan extends Loan {
        numberOfMonths: number
    }
}