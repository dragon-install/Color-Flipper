const body =  document.querySelector('body');

document.querySelector('button').addEventListener('click', () => {
  const r = Math.random() * 254;
  const g = Math.random() * 254;
  const b = Math.random() * 254;
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

