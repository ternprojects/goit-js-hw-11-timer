class CountdownTimer {
  constructor({
    selector,
    targetDate
  }) {
    this.id = document.querySelector(selector);
    this.refs = {
      days: this.id.querySelector('[data-value="days"]'),
      hours: this.id.querySelector('[data-value="hours"]'),
      mins: this.id.querySelector('[data-value="mins"]'),
      secs: this.id.querySelector('[data-value="secs"]'),
    };
    this.time = targetDate.getTime();
    setInterval(this.counter.bind(this), 1000);
  }

  counter() {
    if (this.time - Date.now() > 0) {
      const days = this.refs.days.textContent = Math.floor(
          (this.time - Date.now()) / (1000 * 60 * 60 * 24),
        )
        .toString()
        .padStart(2, '0');
      const hours = this.refs.hours.textContent = Math.floor(
          ((this.time - Date.now()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        )
        .toString()
        .padStart(2, '0');
      const mins = this.refs.mins.textContent = Math.floor(
          ((this.time - Date.now()) % (1000 * 60 * 60)) / (1000 * 60),
        )
        .toString()
        .padStart(2, '0');
      const secs = this.refs.secs.textContent = Math.floor(
          ((this.time - Date.now()) % (1000 * 60)) / 1000,
        )
        .toString()
        .padStart(2, '0');
      
      this.id.textContent = `${days}:${hours}:${mins}:${secs}`;
      
    } else {
      this.id.textContent = "!!!Sorry, but your time is finished!!!";
      this.id.style.marginTop = "50px";
      this.id.style.textAlign = "center";
      this.id.style.color = "red";
      this.id.style.fontSize = "1.5rem";
      this.id.style.fontWeight = "bold";
      this.id.style.textTransform = "upperCase";
      this.id.style.fontFamily = "sans-serif";
      this.id.style.width = "500px";
      this.id.style.padding = "10px";
    }
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});