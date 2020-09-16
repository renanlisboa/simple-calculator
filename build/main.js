function createCalculator() {
  return {
    display: document.querySelector('.display'),

    start() {
      this.clickButtons();
      this.keyDown();
    },

    clickButtons() {
      document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('btn-num') || el.classList.contains('btn-symbols')) {
          this.displayBtn(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
          this.display.focus()
        }

        if (el.classList.contains('btn-del')) {
          this.backSpace();
          this.display.focus()
        }

        if (el.classList.contains('btn-eq')) {
          this.calculate();
          this.display.focus()
        }
      })
    },

    displayBtn(value) {
      this.display.value += value;
      this.display.focus()
    },

    clearDisplay() {
      this.display.value = '';
    },

    backSpace() {
      this.display.value = this.display.value.slice(0, -1);
    },

    calculate() {
      let calc = this.display.value;

      try {
        calc = eval(calc);

        if (calc === NaN ){
          alert('Invalid Operation!');
          return;
        }

        this.display.value = String(calc);
      } catch(e) {
        alert('Invalid Operation!');
        return;
      }
    },

    keyDown() {
      this.display.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
          this.calculate()
          this.display.focus()
        }
      })
    }
  };
}

const calculator = createCalculator();
calculator.start()