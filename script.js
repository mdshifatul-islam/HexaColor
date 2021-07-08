const hexa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const changeBtn = document.querySelector('#change_btn');
const colorBox = document.querySelector('#colorBox');
const copyBtn = document.querySelector('#copy_btn');


changeBtn.addEventListener('click', () => {
    let hash = '#';
    for(let i = 0; i < 6; i++){
        const makeCode = Math.round(Math.random() * 15);
        const getNumber = hexa[makeCode];
        hash += getNumber;
    }
    console.log(hash);
    document.querySelector('section').style.backgroundColor = hash;
    colorBox.value = hash;
    changeBtn.style.backgroundColor = hash;
    copyBtn.style.backgroundColor = hash;
    colorBox.style.color = hash;

})

copyBtn.addEventListener('click', () => {
    colorBox.select();
    document.execCommand('copy');
    alert("Copied Bro!!!")
})






