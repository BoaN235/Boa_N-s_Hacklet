function darkmode() {
    function applyDarkMode(element) {
        if (element.style) {
            element.style.backgroundColor = 'black';
            element.style.color = 'white';
        }
        for (let child of element.children) {
            applyDarkMode(child);
        }
    }
    applyDarkMode(document.body);
}