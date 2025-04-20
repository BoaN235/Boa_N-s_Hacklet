# list of bookmarklets

## Misc

### Flip Dark/Light

This flips the colors of a page from black to white.

`javascript:(function(){function flipmode(){function applymode(element){if(element.style){const current_Bg=element.style.backgroundColor;const new_background=current_Bg==='black'?'white':'black';const new_color=new_background==='black'?'white':'black';element.style.backgroundColor=new_background;element.style.color=new_color;}for(const child of element.children){applymode(child);}}applymode(document.body);}flipmode();})();`

## Text Editors

### String Remover

This removes a string from the page.

`javascript:(function(){const StringToDelete=prompt("Enter the string you want to delete: ");function delStringFromElement(element){if(element.nodeType===Node.TEXT_NODE){const regex=new RegExp(StringToDelete,'gi');element.textContent=element.textContent.replace(regex,'');}for(const child of element.childNodes){delStringFromElement(child);}}delStringFromElement(document.body);})();`

### String Replacer

This replaces a string on the page

`javascript:(function(){function deleteString(){const StringToDelete=prompt("Enter the string you want to replace: ");const StringToReplace=prompt("Enter the string you want to replace it with: ");function delStringFromElement(e){if(e.nodeType===Node.TEXT_NODE){const r=new RegExp(StringToDelete,"gi");e.textContent=e.textContent.replace(r,StringToReplace)}for(const t of e.childNodes)delStringFromElement(t)}delStringFromElement(document.body)}deleteString();})();`