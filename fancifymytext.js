function biggerBtn(){
    document.getElementById('text').style.fontSize="24px";
}

function fancify(){
    document.getElementById('text').style.fontWeight='bold';
    document.getElementById('text').style.color='blue';
    document.getElementById('text').style.textDecoration='underline';
}
function bored(){
    document.getElementById('text').style.fontWeight='normal';
    document.getElementById('text').style.color='black';
    document.getElementById('text').style.textDecoration='none';
}
function moo(){
    document.getElementById('text').style.textTransform='uppercase';
    let words = document.getElementById('text').value;
    let strings = words.split('.');
    words = strings.join('-moo.');
    strings = words.split('?');
    words = strings.join('-moo?');
    strings = words.split('!');
    words = strings.join('-moo!');
    if(words.charAt(words.length-1)!='!'||words.charAt(words.length-1)!='.'||words.charAt(words.length-1)!='?'){
        words=words+"-moo";
    }
    document.getElementById('text').value=words;
}
