function deleteString() {
    const StringToDelete = prompt("Enter the string you want to replace: ");
    const StringToReplace = prompt("Enter the string you want to replace it with: ");
    
    // Function to delete the letter from text content of elements
    function delStringFromElement(element) {
        // Only modify text nodes (ignores style or non-text elements)
        if (element.nodeType === Node.TEXT_NODE) {
            const regex = new RegExp(StringToDelete, 'gi');
            element.textContent = element.textContent.replace(regex, StringToReplace);
        }
        
        // Recursively process child nodes
        for (const child of element.childNodes) {
            delStringFromElement(child);
        }
    }

    // Start the deletion from the body element
    delStringFromElement(document.body);
}
