function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  

  

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    
    let day = decemberDaysList[index];

    let dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    let getDaysList = document.getElementById('days');

    if (day === 24 || day === 31) {
     
      dayItem.className = 'day holiday'; 
      getDaysList.appendChild(dayItem); 
    }}}
createDaysOfTheMonth();