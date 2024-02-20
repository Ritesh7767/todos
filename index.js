
(async () => {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/todos")
        let result = await data.json()
        appendData(result)
    }
    catch(err){
        return err
    }
})()

let appendData = (arr) => {
    console.log(arr)

    let tbody = document.querySelector("tbody")
    
    arr.forEach((ele) => {
        let tr = document.createElement("tr")
        
        let id = document.createElement("td")
        id.append(ele.id)
        console.log(ele.id)
        let title = document.createElement("td")
        title.append(ele.title)
        let status = document.createElement("td")
        status.append(ele.completed)

        tr.append(id, title, status)
        tbody.append(tr)

    })
}

