class DateUtils extends Date {
  diffDaysFromNow() {
    const today = new Date();
    const date = new Date(this);

    const diffTime = date.getTime() - today.getTime();

    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  isYesterday() {
    return this.diffDaysFromNow() === -1;
  }

  isToday() {
    return this.diffDaysFromNow() === 0;
  }

  isTomorrow() {
    return this.diffDaysFromNow() === 1;
  }
}

export default DateUtils;
