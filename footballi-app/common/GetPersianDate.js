
function GetPersianDate() {
  const currentDate = new Date().toLocaleDateString("fa-IR");
  let sundte = new Date();
  let yeardte = sundte.getFullYear();
  let monthdte = sundte.getMonth();
  let dtedte = sundte.getDate();
  let daydte = sundte.getDay();
  let sunyear, daysun, monthday, today, sunmonth;

  switch (daydte) {
    case 0:
      today = "يکشنبه";
      break;
    case 1:
      today = "دوشنبه";
      break;
    case 2:
      today = "سه شنبه";
      break;
    case 3:
      today = "چهارشنبه";
      break;
    case 4:
      today = "پنجشنبه";
      break;
    case 5:
      today = "جمعه";
      break;
    case 6:
      today = "شنبه";
      break;
  }
  switch (monthdte) {
    case 0:
      sunyear = yeardte - 622;
      if (dtedte <= 20) {
        sunmonth = "دي";
        monthday = 10;
        daysun = dtedte + 10;
      } else {
        sunmonth = "بهمن";
        monthday = 11;
        daysun = dtedte - 20;
      }
      break;
    case 1:
      sunyear = yeardte - 622;
      if (dtedte <= 19) {
        sunmonth = "بهمن";
        monthday = 11;
        daysun = dtedte + 11;
      } else {
        sunmonth = "اسفند";
        monthday = 12;
        daysun = dtedte - 19;
      }
      break;
    case 2:
      {
        if ((yeardte - 621) % 4 == 0) var i = 10;
        else var i = 9;
        if (dtedte <= 20) {
          sunyear = yeardte - 622;
          sunmonth = "اسفند";
          monthday = 12;
          daysun = dtedte + i;
        } else {
          sunyear = yeardte - 621;
          sunmonth = "فروردين";
          monthday = 1;
          daysun = dtedte - 20;
        }
      }
      break;
    case 3:
      sunyear = yeardte - 621;
      if (dtedte <= 20) {
        sunmonth = "فروردين";
        monthday = 1;
        daysun = dtedte + 11;
      } else {
        sunmonth = "ارديبهشت";
        monthday = 2;
        daysun = dtedte - 20;
      }
      break;
    case 4:
      sunyear = yeardte - 621;
      if (dtedte <= 21) {
        sunmonth = "ارديبهشت";
        monthday = 2;
        daysun = dtedte + 10;
      } else {
        sunmonth = "خرداد";
        monthday = 3;
        daysun = dtedte - 21;
      }

      break;
    case 5:
      sunyear = yeardte - 621;
      if (dtedte <= 21) {
        sunmonth = "خرداد";
        monthday = 3;
        daysun = dtedte + 10;
      } else {
        sunmonth = "تير";
        monthday = 4;
        daysun = dtedte - 21;
      }
      break;
    case 6:
      sunyear = yeardte - 621;
      if (dtedte <= 22) {
        sunmonth = "تير";
        monthday = 4;
        daysun = dtedte + 9;
      } else {
        sunmonth = "مرداد";
        monthday = 5;
        daysun = dtedte - 22;
      }
      break;
    case 7:
      sunyear = yeardte - 621;
      if (dtedte <= 22) {
        sunmonth = "مرداد";
        monthday = 5;
        daysun = dtedte + 9;
      } else {
        sunmonth = "شهريور";
        monthday = 6;
        daysun = dtedte - 22;
      }
      break;
    case 8:
      sunyear = yeardte - 621;
      if (dtedte <= 22) {
        sunmonth = "شهريور";
        monthday = 6;
        daysun = dtedte + 9;
      } else {
        sunmonth = "مهر";
        monthday = 7;
        daysun = dtedte + 22;
      }
      break;
    case 9:
      sunyear = yeardte - 621;
      if (dtedte <= 22) {
        sunmonth = "مهر";
        monthday = 7;
        daysun = dtedte + 8;
      } else {
        sunmonth = "آبان";
        monthday = 8;
        daysun = dtedte - 22;
      }
      break;
    case 10:
      sunyear = yeardte - 621;
      if (dtedte <= 21) {
        sunmonth = "آبان";
        monthday = 8;
        daysun = dtedte + 9;
      } else {
        sunmonth = "آذر";
        monthday = 9;
        daysun = dtedte - 21;
      }

      break;
    case 11:
      sunyear = yeardte - 621;
      if (dtedte <= 19) {
        sunmonth = "آذر";
        monthday = 9;
        daysun = dtedte + 9;
      } else {
        sunmonth = "دي";
        monthday = 10;
        daysun = dtedte + 21;
      }
      break;
  }

  return { currentDate, today, sunyear, sunmonth, daysun, monthday };
}

export default GetPersianDate;
