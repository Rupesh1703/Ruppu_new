let loding = document.getElementById("loding")
loding = alert("press OK to loding the card")
let cardText = document.querySelector("#card_three h2")
let card_one = document.getElementById("card_one")
let card_two = document.getElementById("card_two")
let card_three = document.getElementById("card_three")
let card_four = document.getElementById("card_four")
card_one.style.backgroundColor = 'skyblue';
card_three.style.backgroundColor = 'skyblue';
let col_interval = '';

let count_color = 0
let count_color_two= 0

let card_two_color = ['Orange', 'blue', 'red']
let card_four_color = ['skyblue','red','green', 'blue','Black']
card_one.addEventListener('click', () => {
    cardText.innerHTML = `<br> oops`
})
setInterval(function () {
    if (count_color < card_two_color.length) {
        card_two.style.backgroundColor = card_two_color[count_color];
    } else {
        count_color = 0
        card_two.style.backgroundColor = card_two_color[count_color];
    }
    count_color++
}, 3000)


function next_color() {

    col_interval = setInterval(function () {
        if (count_color_two < card_four_color.length) {
            card_four.style.backgroundColor = card_four_color[count_color_two];
        } else {
            count_color_two = 0
            card_four.style.backgroundColor = card_four_color[count_color_two];
        }
        count_color_two++
    }, 5000)

}
function previous_color() {
    clearInterval(col_interval)
    if (count_color_two === 0) {
        count_color_two = 4
    } else {
        previous_color = setInterval(function () {
            count_color_two--
            card_four.style.backgroundColor = card_four_color[count_color_two];
        }, 5000)

    }
}
document.onkeydown = PressdKey;
function PressdKey(Key_event) {

    Key_event = Key_event || window.event;

    if (Key_event.keyCode == '38') {
        next_color()
    }
    else if (Key_event.keyCode == '40') {
        previous_color()
    }
    else if (Key_event.keyCode == '37') {
        previous_color()
    }
    else if (Key_event.keyCode == '39') {
        next_color()
    }

}
