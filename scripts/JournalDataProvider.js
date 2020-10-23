const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(entryStateChangedEvent)
}


let entries = []

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries")   // Fetch from the API
        .then(response => response.json())    // Parse as JSON
        .then(parsedEntries => {    // What should happen when we finally have the array?
            entries = parsedEntries
           
        })
}

export const recordEntry = (entryObj) => {
    // POST entry object to API
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
    })
     // then get all entries from API
    .then(getEntries)
    // then dispatch state change event to event hub that entries have been updated
    .then(dispatchStateChangeEvent)
} 