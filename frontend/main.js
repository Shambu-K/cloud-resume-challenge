window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const localFunctionAPI = 'http://localhost:7071/api/getCounterValue';
const functionAPI = 'https://getresumecounter87.azurewebsites.net/api/getCounterValue?code=2ZhEjJWnS65oMRNGkwyyAyRbsHhvt_WHwvs254jaq3dwAzFus-dlWA==';

const getVisitCount = () => {
    let count = 20;
    fetch(functionAPI).then(response => {
        return response.json()
    }).then(response => {
        console.log('Website called function API');
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error){
        console.log(error);
    })
}