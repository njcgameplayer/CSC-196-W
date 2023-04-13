/*
 * Starter file 
 */
(function() {
  "use strict";
  let editableFontSize = '12px';
  let caps = false;
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    const encrypt = document.getElementById('encrypt-it');
    encrypt.addEventListener("click",() => {handleClick()});

    const reset = document.getElementById('reset');
    reset.addEventListener("click",() => {resetClick()});

    const twelvePt = document.getElementById('twelvePT');
    twelvePt.addEventListener("click",() => {editableFontSize='12px'});

    const twentyFourPt = document.getElementById('twentyFourPT');
    twentyFourPt.addEventListener("click",() => {editableFontSize='24px'});

    const capsLock = document.getElementById("all-caps");
    capsLock.addEventListener("change",()=>{caps=!caps})
  }
  function handleClick(){
    let text = document.getElementById('input-text').value;
    let encryptedText=""
    if(document.getElementById('cipher-type').value==="shift"){
       encryptedText= shiftCipher(text);
    }
    else{
      encryptedText=randomText(text);
    }
    document.getElementById('result').style.fontSize=editableFontSize;
    if(caps){
      document.getElementById('result').style.textTransform='uppercase';
    }
    else{
      document.getElementById('result').style.textTransform='none';
    }
    document.getElementById('result').innerText = encryptedText;
  }
  function shiftCipher(text){
    let result = "";
    for(let i=0;i<text.length; i++){
      if(text[i]==='z'){
        result+='a';
      }
      else if(text[i]==='Z'){
        result+='A'
      }
      else if((text[i]<'a'||text[i]>'y')&&(text[i]<'A'||text[i]>'Y')){
        result+=text[i];
      }
      else{
        result+=String.fromCharCode(text.charCodeAt(i)+1);
      }
    }
    return result;
  }
  function randomText(text){
    let result="";
    for(let i=0;i<text.length;i++){
      let randomAscii = Math.random() * (126-32)+32;
      result+=String.fromCharCode(randomAscii);
    }
    return result;
  }
  function resetClick(){
    document.getElementById('input-text').value="";
    document.getElementById('result').innerText="";
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
