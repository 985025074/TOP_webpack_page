import text from './home.txt'
export function showHome(btn,content){
    btn.addEventListener('click', function(){
        content.innerHTML = text;
    });
}
