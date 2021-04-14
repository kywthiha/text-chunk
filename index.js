const inputTextArea = document.getElementById('input')
const outputDiv = document.getElementById('output')
const lengthInput = document.getElementById('length')

const chunkString = (str, length) =>{
    return str.match(new RegExp('.{1,' + length + '}', 'g'));
  }

const copy = (e) =>{
    const copyText = e.target
    if ( document.selection ) {
        var range = document.body.createTextRange();
        range.moveToElementText( copyText  );
        range.select();
    } else if ( window.getSelection ) {
        var range = document.createRange();
        range.selectNodeContents( copyText );
        window.getSelection().removeAllRanges();
        window.getSelection().addRange( range );
    }
    document.execCommand("copy");
    
  }

const splitComponent = ({ text }) => {
    const div = document.createElement('div')
    div.addEventListener('click',copy);
    div.setAttribute('class','text')
    div.appendChild(document.createTextNode(text))
    return div;
}

const changeEvent = (e)=>{
    outputDiv.innerHTML = ''
    const largeText = inputTextArea.value
    const lenght = +lengthInput.value

    for (let text of chunkString(largeText,lenght || 70)) {
        outputDiv.appendChild(splitComponent({text}))
    }
}

inputTextArea.addEventListener('input', changeEvent)
lengthInput.addEventListener('input', changeEvent)