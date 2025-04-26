document.addEventListener('DOMContentLoaded', () => { // Ensure the DOM is fully loaded

    const quoteTextElement = document.getElementById('quoteText');
    const quoteAuthorElement = document.getElementById('quoteAuthor');
    const newQuoteButton = document.getElementById('newQuoteButton');
    const apiUrl = 'https://goquotes.net/api/v1/random?count=1';
  
    function fetchAndDisplayQuote() {
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          if (data && data.quotes && data.quotes.length > 0) {
            quoteTextElement.textContent = `"${data.quotes[0].text}"`;
            quoteAuthorElement.textContent = `- ${data.quotes[0].author}`; // Corrected target and added a hyphen
          } else {
            quoteTextElement.textContent = 'Failed to fetch quote';
            quoteAuthorElement.textContent = '';
          }
        })
        .catch(error => {
          console.error('Error Fetching quote:', error);
          quoteTextElement.textContent = 'An error occurred while fetching the quote.';
          quoteAuthorElement.textContent = '';
        });
    }
  
    // Fetch an initial quote when the page loads
    fetchAndDisplayQuote();
  
    // Add event listener to the correct button ID
    newQuoteButton.addEventListener('click', fetchAndDisplayQuote);
  
  });