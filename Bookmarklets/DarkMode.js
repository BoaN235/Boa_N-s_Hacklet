function flipmode() {
    const body = document.body;
    const currentTheme = body.style.backgroundColor === 'black' ? 'light' : 'dark';
    body.style.backgroundColor = currentTheme === 'dark' ? 'black' : 'white';
    body.style.color = currentTheme === 'dark' ? 'white' : 'black';
}