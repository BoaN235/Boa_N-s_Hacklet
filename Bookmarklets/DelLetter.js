function deleteLetter() {
    const letterToDelete = prompt("Enter the letter you want to delete: ");
    
    // Function to delete the letter from text content of elements
    function delLetterFromElement(element) {
        // Only modify text nodes (ignores style or non-text elements)
        if (element.nodeType === Node.TEXT_NODE) {
            const regex = new RegExp(letterToDelete, 'gi');
            element.textContent = element.textContent.replace(regex, '');
        }
        
        // Recursively process child nodes
        for (const child of element.childNodes) {
            delLetterFromElement(child);
        }
    }

    // Start the deletion from the body element
    delLetterFromElement(document.body);
}
