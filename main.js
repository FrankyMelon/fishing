const URL = "RHMZ/RHMZ.html";

const header = document.querySelector('h1')
const table = document.getElementById('table')

const getQuotes = async () => {
    fetch(URL, {
        mode: 'no-cors'
    })
    .then(function (response) {response.text()
    .then(function (html) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                catchData(doc)
            });
        })
    .catch(function (err) {
        console.warn('Something went wrong.', err);
    });
}

const catchData = (doc) => {

    const dates = doc.querySelector('h1').innerText;
    const rezults = doc.querySelector('#test');

    // const cells = doc.querySelectorAll('table tbody tr');

    const NS = doc.evaluate(
        '//table',
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null,
      );


console.log(NS.textContent)

    // NS.forEach(element => {
    //     let cell = element.querySelector('td')
        
    //     console.log(cell)

    //     if (cell.innerText.replace(/ /g, '') === "TISA") {
    //         console.log('founded')
    //         console.log(element)
    //     }
    // });

// console.log(NS)


    header.append(dates)
    table.appendChild(rezults);

}

getQuotes()