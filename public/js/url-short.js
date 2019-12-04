$(document).ready(function () {
    const input = $('#ogURL');
    const subBut = $('#submit-button');
    const box = $('#box');
    const p = $('#box p')

    subBut.on('click', e => {
        e.preventDefault();
        let URLtoShort = input.val().trim();
        let obj = {
            shortBase: "http://localhost:8080",
            ogURL: URLtoShort
        }
        shortThis(obj);
    });

    function shortThis (obj){
        $.ajax({
           type:"POST",
           url:"/api/item",
           data: obj
        }).then(response => {
            console.log(response)
            box.css({"display": "unset"});
            p.text(JSON.stringify(response))
        })
    }
});