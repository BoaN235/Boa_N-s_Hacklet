## list of bookmarklets

### Dark Mode

`javascript:(function(){function flipmode(){function applymode(element){if(element.style){const current_Bg=element.style.backgroundColor;const new_background=current_Bg==='black'?'white':'black';const new_color=new_background==='black'?'white':'black';element.style.backgroundColor=new_background;element.style.color=new_color;}for(const child of element.children){applymode(child);}}applymode(document.body);}flipmode();})();`
