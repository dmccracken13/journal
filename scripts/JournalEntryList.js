/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryContainer = document.querySelector(".entry__container")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("entryStateChanged", () => {
        EntryListComponent()
})

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(() => {
        const allEntries = useJournalEntries()
        render(allEntries)
    })
}

const render = (entryArray) => {
    let entryHTMLRepresentation = ""
    for (const entry of entryArray) {
  
      entryHTMLRepresentation += JournalEntryComponent(entry)
  
      entryContainer.innerHTML = `
            <h3>Previous Entries</h3>
              ${entryHTMLRepresentation}
          `
    }
}
