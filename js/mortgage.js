// export let calculateMonthlyPayment = (principal, years, rate) => {
//     let monthlyRate = 0;
//     if (rate) {
//         monthlyRate = rate / 100 / 12;
//     }
//     let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
//     // return monthlyPayment;
//     return {principal, years, rate, monthlyPayment, monthlyRate};
// };
//
// export let calculateAmortization = (principal, years, rate) => {
//     let {monthlyPayment, monthlyRate} = calculateMonthlyPayment(principal, years, rate);
//     let balance = principal;
//     let amortization = [];
//     for (let y=0; y<years; y++) {
//         let interestY = 0;  //Interest payment for year y
//         let principalY = 0; //Principal payment for year y
//         for (let m=0; m<12; m++) {
//             let interestM = balance * monthlyRate;       //Interest payment for month m
//             let principalM = monthlyPayment - interestM; //Principal payment for month m
//             interestY = interestY + interestM;
//             principalY = principalY + principalM;
//             balance = balance - principalM;
//         }
//         amortization.push({principalY, interestY, balance});
//     }
//     return {monthlyPayment, monthlyRate, amortization};
// }


export default class Mortgage {

    constructor(principal, years, rate) {
        this.principal = principal;
        this.years = years;
        this.rate = rate;
    }

    get monthlyPayment() {
        let monthlyRate = this.rate / 100 / 12;
        return this.principal * monthlyRate / (1 - (Math.pow(1/(1 + monthlyRate),
                this.years * 12)));
    }

    get amortization() {
        let monthlyPayment = this.monthlyPayment;
        let monthlyRate = this.rate / 100 / 12;
        let balance = this.principal;
        let amortization = [];
        for (let y=0; y<this.years; y++) {
            let interestY = 0;
            let principalY = 0;
            for (let m=0; m<12; m++) {
                let interestM = balance * monthlyRate;
                let principalM = monthlyPayment - interestM;
                interestY = interestY + interestM;
                principalY = principalY + principalM;
                balance = balance - principalM;
            }
            amortization.push({principalY, interestY, balance});
        }
        return amortization;
    }

}
