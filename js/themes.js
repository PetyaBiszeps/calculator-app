function switchTheme() {
    const bodyColor = document.getElementsByTagName('body')[0];
    const p1 = document.getElementsByClassName('p1');

    const resultBackground = document.getElementById('res-bg');
    const displayBackground = document.getElementById('display');

    const buttonsBackground = document.getElementById('buttons-bg');
    const switchBtn = document.getElementsByClassName('switchBtn');

    const buttonSymbols = document.getElementsByClassName('button-symbol');
    const buttonRemove = document.getElementsByClassName('button-remove');
    const resultButton = document.getElementById('button-calculate');

    const themes = [
        {
            bodyBackgroundColor: 'hsl(222, 26%, 31%)',
            resultBackgroundColor: 'hsl(224, 36%, 15%)',
            displayBackgroundColor: 'hsl(224, 36%, 15%)',
            buttonsBackgroundColor: 'hsl(223, 31%, 20%)',
            resultButton: {
                backgroundColor: 'hsl(6, 63%, 50%)',
                boxShadow: '0 4px 0 hsl(6, 70%, 34%)',
                color: 'hsl(0, 0%, 100%)',
                hoverBackgroundColor: 'hsl(6, 93%, 67%)'
            },
            buttonSymbols: {
                backgroundColor: 'hsl(30, 25%, 89%)',
                boxShadow: '0 4px 0 hsl(28, 16%, 65%)',
                color: 'hsl(221, 14%, 31%)',
                hoverBackgroundColor: 'hsl(0, 0%, 100%)'
            },
            buttonRemove: {
                backgroundColor: 'hsl(225, 21%, 49%)',
                boxShadow: '0 4px 0 hsl(224, 28%, 35%)',
                hoverBackgroundColor: 'hsl(224, 51%, 76%)'
            },
            switchBtn: {
                backgroundColor: 'hsl(6, 63%, 50%)',
                hoverBackgroundColor: 'hsl(6, 93%, 67%)'
            },
            p1Color: 'hsl(0, 0%, 100%)'
        },
        {
            bodyBackgroundColor: 'hsl(0, 0%, 90%)',
            resultBackgroundColor: 'hsl(0, 0%, 93%)',
            displayBackgroundColor: 'hsl(0, 0%, 93%)',
            buttonsBackgroundColor: 'hsl(0, 5%, 81%)',
            resultButton: {
                backgroundColor: 'hsl(25, 98%, 40%)',
                boxShadow: '0 4px 0 hsl(25, 99%, 27%)',
                color: 'hsl(0, 0%, 100%)',
                hoverBackgroundColor: 'hsl(25, 100%, 61%)'
            },
            buttonSymbols: {
                backgroundColor: 'hsl(45, 7%, 89%)',
                boxShadow: '0 4px 0 hsl(35, 11%, 61%)',
                color: 'hsl(60, 10%, 19%)',
                hoverBackgroundColor: 'hsl(0, 0%, 100%)'
            },
            buttonRemove: {
                backgroundColor: 'hsl(185, 42%, 37%)',
                boxShadow: '0 4px 0 hsl(185, 58%, 25%)',
                hoverBackgroundColor: 'hsl(185, 41%, 56%)'
            },
            switchBtn: {
                backgroundColor: 'hsl(25, 98%, 40%)',
                hoverBackgroundColor: 'hsl(25, 100%, 61%)',
            },
            p1Color: 'hsl(60, 10%, 19%)'
        },
        {
            bodyBackgroundColor: 'hsl(268, 75%, 9%)',
            resultBackgroundColor: 'hsl(268, 71%, 12%)',
            displayBackgroundColor: 'hsl(268, 71%, 12%)',
            buttonsBackgroundColor: 'hsl(268, 71%, 12%)',
            resultButton: {
                backgroundColor: 'hsl(176, 100%, 44%)',
                boxShadow: '0 4px 0 hsl(177, 92%, 70%)',
                color: 'hsl(198, 20%, 13%)',
                hoverBackgroundColor: 'hsl(177, 100%, 79%)'
            },
            buttonSymbols: {
                backgroundColor: 'hsl(268, 47%, 21%)',
                boxShadow: '0 4px 0 hsl(290, 70%, 36%)',
                color: 'hsl(52, 100%, 62%)',
                hoverBackgroundColor: 'hsl(268, 54%, 44%)'
            },
            buttonRemove: {
                backgroundColor: 'hsl(281, 89%, 26%)',
                boxShadow: '0 4px 0 hsl(285, 91%, 52%)',
                hoverBackgroundColor: 'hsl(280, 56%, 44%)'
            },
            switchBtn: {
                backgroundColor: 'hsl(176, 100%, 44%)',
                hoverBackgroundColor: 'hsl(177, 100%, 79%)'
            },
            p1Color: 'hsl(52, 100%, 62%)'
        }
    ];

    const applyTheme = (theme) => {
        bodyColor.style.backgroundColor = theme.bodyBackgroundColor;
        resultBackground.style.backgroundColor = theme.resultBackgroundColor;
        displayBackground.style.backgroundColor = theme.displayBackgroundColor;
        buttonsBackground.style.backgroundColor = theme.buttonsBackgroundColor;

        resultButton.style.backgroundColor = theme.resultButton.backgroundColor;
        resultButton.style.boxShadow = theme.resultButton.boxShadow;
        resultButton.style.color = theme.resultButton.color;

        for (let i = 0; i < buttonSymbols.length; i++) {
            buttonSymbols[i].style.backgroundColor = theme.buttonSymbols.backgroundColor;
            buttonSymbols[i].style.boxShadow = theme.buttonSymbols.boxShadow;
            buttonSymbols[i].style.color = theme.buttonSymbols.color;
        }

        for (let i = 0; i < buttonRemove.length; i++) {
            buttonRemove[i].style.backgroundColor = theme.buttonRemove.backgroundColor;
            buttonRemove[i].style.boxShadow = theme.buttonRemove.boxShadow;
        }

        for (let i = 0; i < p1.length; i++) {
            p1[i].style.color = theme.p1Color;
        }

        for (let i = 0; i < switchBtn.length; i++) {
            switchBtn[i].style.backgroundColor = theme.switchBtn.backgroundColor;
        }

        /*  --- Hover --- */

        for (let i = 0; i < buttonSymbols.length; i++) {
            buttonSymbols[i].addEventListener('mouseenter', function () {
                this.style.backgroundColor = theme.buttonSymbols.hoverBackgroundColor;
            });
            buttonSymbols[i].addEventListener('mouseleave', function () {
                this.style.backgroundColor = theme.buttonSymbols.backgroundColor;
            });
        }

        for (let i = 0; i < buttonRemove.length; i++) {
            buttonRemove[i].addEventListener('mouseenter', function () {
                this.style.backgroundColor = theme.buttonRemove.hoverBackgroundColor;
            });
            buttonRemove[i].addEventListener('mouseleave', function () {
                this.style.backgroundColor = theme.buttonRemove.backgroundColor;
            });
        }

        for (let i = 0; i < switchBtn.length; i++) {
            switchBtn[i].addEventListener('mouseenter', function () {
                this.style.backgroundColor = theme.switchBtn.hoverBackgroundColor;
            });
            switchBtn[i].addEventListener('mouseleave', function () {
                this.style.backgroundColor = theme.switchBtn.backgroundColor;
            });
        }

        resultButton.addEventListener('mouseenter', function () {
            this.style.backgroundColor = theme.resultButton.hoverBackgroundColor;
        });
        resultButton.addEventListener('mouseleave', function () {
            this.style.backgroundColor = theme.resultButton.backgroundColor;
        });
    };

    Array.from(switchBtn).forEach((button, index) => {
        button.addEventListener('click', () => {
            applyTheme(themes[index]);
            Array.from(switchBtn).forEach((btn, i) => {
                btn.style.opacity = i === index ? '1' : '0';
            });
        });
    });

    // Установка начальной темы
    applyTheme(themes[0]);
    switchBtn[0].style.opacity = '1';
}

document.addEventListener('DOMContentLoaded', switchTheme);