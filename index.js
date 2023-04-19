function getdata(){
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;
    values(year,month,day); 
}

function values(year,month,day){
    let today = new Date();
    let birthdate = new Date(year,month-1,day)
    // set maximum date to today
    birthdate.max = new Date().toISOString().split('T')[0];
    var years;
      if (today.getMonth() > birthdate.getMonth() || (today.getMonth() == birthdate.getMonth() && today.getDate() >= birthdate.getDate())) {
        years = today.getFullYear() - birthdate.getFullYear();
      }
      else {
        years = today.getFullYear() - birthdate.getFullYear() - 1;
      }

      // Calculate months
      var months;
      if (today.getDate() >= birthdate.getDate()) {
        months = today.getMonth() - birthdate.getMonth();
      }
      else if (today.getDate() < birthdate.getDate()) {
        months = today.getMonth() - birthdate.getMonth() - 1;
      }
      // make month positive
      months = months < 0 ? months + 12 : months;

      // Calculate days
      var days;
      // days of months in a year
      var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (today.getDate() >= birthdate.getDate()) {
        days = today.getDate() - birthdate.getDate();
      } else {
        days = today.getDate() - birthdate.getDate() + monthDays[birthdate.getMonth()];
      }
      yearsdisplay.innerHTML = years;
      monthsdisplay.innerHTML = months;
      daysdisplay.innerHTML = days;
      
}

