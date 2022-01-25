let today_date = new Date().getTime();
let present_year = new Date(new Date().getFullYear(), 0, 1).getTime();
let next_year = new Date(new Date().getFullYear() + 1, 0, 1).getTime();

function GetProgress(today_date, present_year, next_year) {
  let progress =
    ((today_date - present_year) / (next_year - present_year)) * 100;
  return progress;
}
let year_progress = GetProgress(today_date, present_year, next_year);

document.getElementById("progress_bar").setAttribute("value", year_progress);
