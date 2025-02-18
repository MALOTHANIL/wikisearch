let userinput = document.getElementById("searchInput")
let searchresult = document.getElementById("searchResults")
let spinner = document.getElementById("spinner")

function createappendsearchresult(result) {
    console.log(result)
    let {
        title,
        link,
        description
    } = result
    //create div container 
    let resultcontainer = document.createElement("div")
    resultcontainer.classList.add("result-item")
    searchresult.appendChild(resultcontainer)
    // create a title anchor element 
    let titleacncore = document.createElement("a")
    titleacncore.classList.add("result-title")
    titleacncore.textContent = title
    titleacncore.href = link
    titleacncore.target = "_blank"
    resultcontainer.appendChild(titleacncore)
    // create aa line breake 
    let breakline = document.createElement("br")
    titleacncore.appendChild(breakline)
    //create a url anchor element
    let ancoreurl = document.createElement("a")
    ancoreurl.classList.add("result-url")
    ancoreurl.textContent = link
    ancoreurl.href = link
    ancoreurl.target = "_blank"
    resultcontainer.appendChild(ancoreurl)
    //create a linebreake 
    let breakeline = document.createElement("br")
    ancoreurl.appendChild(breakeline)

    //create a discription element
    let discriptions = document.createElement("p")
    discriptions.classList.add("link-description")
    discriptions.textContent = description
    resultcontainer.appendChild(discriptions)

}

function displaysearchresult(search_results) {
    spinner.classList.toggle("d-none")
    for (let result of search_results) {
        createappendsearchresult(result)
    }
}

function wikisearch(event) {
    if (event.key === "Enter") {
        spinner.classList.toggle("d-none")
        searchresult.textContent = ""
        let usertext = userinput.value
        let option = {
            method: "GET"
        }
        let url ="https://apis.ccbp.in/wiki-search?search=" + usertext

        fetch(url, option)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsonData) {

                let {
                    search_results
                } = jsonData
                displaysearchresult(search_results)

            })
    }
}
userinput.addEventListener("keydown", wikisearch)