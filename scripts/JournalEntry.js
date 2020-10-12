/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p>Date: ${entry.date}
            <p>Concept: ${entry.concept}
            <p>Entry: ${entry.entry}
            <p>Mood: ${entry.mood}
        </section>
    `
}
