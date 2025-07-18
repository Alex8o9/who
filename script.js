let container = document.querySelector('.container');
let x = 1;

function anser(answer) {
    if (answer == 'yes') {
        container.innerHTML = `
            <h3>I love you sooo soooo soooooo much..... will you be my girlfriend? :(</h3>
            <button id="yes" onclick="showCelebration()">Yes Ofc!</button>
            <button id="no" onclick="anser('no')">No Never</button>
        `;
    } else {
        x += 0.5;
        let no = document.getElementById('no');
        if (no) {
            no.style.transform = `scale(${x})`;
        }
    }
}

function showCelebration() {
    container.innerHTML = `
        <h3 style="color: red; font-size:1.5rem;">Yuppiiiiii 🎉 Love uhhhhhh! 😍</h3>
        <p>I'm sooo happy! Thank youuuu! 🎊💖</p>
    `;
}
