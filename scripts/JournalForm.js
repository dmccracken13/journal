import { recordEntry } from "./JournalDataProvider.js";

const contentTarget = document.querySelector(".form__container")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        <fieldset>
            <label for="journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate">

            <label for="conceptsCovered">Concepts Covered</label>
            <input type="text" name="conceptsCovered" id="conceptsCovered">

            <label for="journalEntry">Journal Entry</label>
            <input type="text" name="journalEntry" id="journalEntry">

            <label for="mood">Mood for the Day</label>
            <select name="mood" id="mood">
                <option value="enthused">Enthused</option>
                <option value="confused">Confused</option>
                <option value="tired">Tired</option>
                <option value="content">Content</option>
            </select>
            <br>
            <button id="recordEntry">Record Journal Entry</button>
        </fieldset>
        `
}

export const JournalFormComponent = () => {
    render()
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "recordEntry") {
        // grab input values
        const date = document.querySelector("#journalDate").value
        const concept = document.querySelector("#conceptsCovered").value
        const entry = document.querySelector("#journalEntry").value
        const mood = document.querySelector("#mood").value

        // make a note object

        const newEntry = {
            date,
            concept,
            entry,
            mood
        }

        // POST object to database / API / json file
        recordEntry(newEntry)
    }
})