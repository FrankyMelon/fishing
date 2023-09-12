const URL = "RHMZ.html";

const header = document.getElementById('h1')
const table = document.getElementById('table')


// const rezults = document.getElementById('sadrzaj')

const getQuotes = async () => {
    fetch(URL, {
        mode: 'no-cors'
    })
    .then(function (response) {response.text()
    .then(function (html) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");

                const dates = doc.querySelector('h1').innerText;
                const rezults = doc.querySelector('#test');

console.log(dates)

                header.appendChild(dates);
                table.appendChild(rezults);
            });
        })
    .catch(function (err) {
        console.warn('Something went wrong.', err);
    });
}

getQuotes()