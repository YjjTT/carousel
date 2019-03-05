// $(p1).on('click', function () {
//     $(images).css({
//         transform: 'translateX(0)'
//     })
// })
// $(p2).on('click', function () {
//     $(images).css({
//         transform: 'translateX(-300px)'
//     })
// })
// $(p3).on('click', function () {
//     $(images).css({
//         transform: 'translateX(-600px)'
//     })
// })
var allButtons = $('#buttons > button')
console.log(allButtons)
for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click', function(x){
        var index = $(x.currentTarget).index()
        var px = index * -300
        $(images).css({
            transform: 'translateX(' + px + 'px)'
        })
    })
}