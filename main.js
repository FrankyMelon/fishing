const URL = "RHMZ/RHMZ.html";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
global.document = new JSDOM(URL).window.document;

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);



const header = document.querySelector('h1')
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
                console.log(html)
                // const dates = doc.querySelector('h1');
                const rezults = doc.querySelector('#test');

                // header.appendChild(dates);
                table.appendChild(rezults);
            });
        })
    .catch(function (err) {
        console.warn('Something went wrong.', err);
    });
}

getQuotes()