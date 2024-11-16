import text from './about.txt'
export function showAbout(btn,content){
    btn.addEventListener('click', function(){
        content.innerHTML = text;
    });
}
