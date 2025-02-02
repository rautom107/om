function generateSong() {
    const input = document.getElementById('songLyrics').value;
    const outputDiv = document.getElementById('songOutput');
    const ctaButton = document.querySelector('.cta-button');

    // Clear previous output
    outputDiv.innerHTML = '';

    // Validate input
    if (input.trim() === '') {
        outputDiv.innerHTML = '<p style="color: red;">Please enter some lyrics or a theme!</p>';
        return;
    }

    // Disable button and show loading state
    ctaButton.disabled = true;
    ctaButton.textContent = 'Generating...';

    // Simulate a delay to mimic a real API call
    setTimeout(() => {
        // Mock song generation logic
        const generatedSong = `
            Here is your song based on your input:\n\n
            "${input}"\n\n
            [Verse 1]\n
            In the rhythm of the night, we find our way,\n
            With every beat, we dance and sway.\n\n
            [Chorus]\n
            This is your unique melody line,\n
            That perfectly matches your rhyme.\n\n
            [Verse 2]\n
            The music flows, it takes control,\n
            A symphony that touches the soul.\n\n
            [Chorus]\n
            This is your unique melody line,\n
            That perfectly matches your rhyme.\n
        `;

        // Display the generated song
        outputDiv.innerHTML = `<pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${generatedSong}</pre>`;

        // Re-enable button and reset text
        ctaButton.disabled = false;
        ctaButton.textContent = 'Generate Song';
    }, 2000); // Simulate a 2-second delay
}
