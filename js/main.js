// import * as mortgage from './mortgage.js'
import Mortgage from './mortgage.js'



document.getElementById('calcBtn').addEventListener('click', () => {
    // let {monthlyPayment, monthlyRate, amortization} = mortgage.calculateAmortization(principal, years, rate);
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    let mortgage = new Mortgage(principal, years, rate);
    // let monthlyPayment = calculateMonthlyPayment(principal, years, rate);
    // let {monthlyPayment, monthlyRate} = calculateMonthlyPayment(principal, years, rate);
    // let {monthlyPayment, monthlyRate, amortization} = mortgage.calculateAmortization(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = mortgage.monthlyPayment.toFixed(2);
    // document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (rate / 12).toFixed(2);

    // amortization.forEach((element, index, array) => console.log(element));
    let html = "";
    mortgage.amortization.forEach((year, index) => html += `
        <tr>
            <td>${index + 1}</td>
            <td class="currency">${Math.round(year.principalY)}</td>
            <td class="stretch">
                <div class="flex">
                    <div class="bar principal"
                         style="flex:${year.principalY};-webkit-flex:${year.principalY}">
                    </div>
                    <div class="bar interest"
                         style="flex:${year.interestY};-webkit-flex:${year.interestY}">
                    </div>
                </div>
            </td>
            <td class="currency left">${Math.round(year.interestY)}</td>
            <td class="currency">${Math.round(year.balance)}</td>
        </tr>
    `);
    document.getElementById("amortization").innerHTML = html;
});
