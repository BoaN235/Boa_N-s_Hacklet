## list of bookmarklets

### Flip Dark/Light

This flips the colors of a page from black to white.

`javascript:(function(){function flipmode(){function applymode(element){if(element.style){const current_Bg=element.style.backgroundColor;const new_background=current_Bg==='black'?'white':'black';const new_color=new_background==='black'?'white':'black';element.style.backgroundColor=new_background;element.style.color=new_color;}for(const child of element.children){applymode(child);}}applymode(document.body);}flipmode();})();`

### Letter Remover

This removes a single letter from the entire page.

`javascript:(function(){const letterToDelete=prompt("Enter the letter you want to delete: ");function delLetterFromElement(element){if(element.nodeType===Node.TEXT_NODE){const regex=new RegExp(letterToDelete,'gi');element.textContent=element.textContent.replace(regex,'');}for(const child of element.childNodes){delLetterFromElement(child);}}delLetterFromElement(document.body);})();`