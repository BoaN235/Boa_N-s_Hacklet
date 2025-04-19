function flipmode() {
    function applymode(element) {
        if (el.style) {
            const current_Bg = element.style.backgroundColor;
            const new_background = current_Bg === 'black' ? 'white' : 'black';
            const new_color = newBg === 'black' ? 'white' : 'black';
            element.style.backgroundColor = new_background;
            element.style.color = new_color;
        }
        for (const child of element.children) {
            applymode(child);
        }
    }
    applymode(document.body);
}
