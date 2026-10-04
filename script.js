'use strict';

// Always use the shop's timezone, including for visitors outside Japan.
function getBusinessDayMessage(date = new Date()) {
  const weekday = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Tokyo', weekday: 'short'
  }).format(date);
  return weekday === 'Mon' || weekday === 'Tue'
    ? '本日は定休日です'
    : '本日 20:00〜24:00';
}

function updateBusinessDay() {
  document.querySelectorAll('[data-today]').forEach(element => {
    element.textContent = getBusinessDayMessage();
  });
}

updateBusinessDay();
setInterval(updateBusinessDay, 60000);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) updateBusinessDay();
});
