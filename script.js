document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menu__link');
  const contentBlocks = document.querySelectorAll('.content > div');

  menuLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showContent(index);
    });
  });

  function showContent(index) {
    contentBlocks.forEach((block, i) => {
      if (i === index) {
        block.classList.add('active');
      } else {
        block.classList.remove('active');
      }
    });
  }
});


//   document.querySelectorAll('.menu__link').forEach((link, index) => {
//     link.addEventListener('click', () => {
//         document.querySelectorAll('.content-1, .content-2, .content-3, .content-4, .content-5').forEach(content => {
//             content.style.display = 'none';
//         });
//         document.querySelector(`.content-${index + 1}`).style.display = 'block';
//     });
// });



  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    Object.keys(data).forEach(key => {
      const contentElement = document.querySelector(`.${key}`);
      const titleElement = document.createElement('h1');
      titleElement.textContent = data[key].title;
      const textElement = document.createElement('p');
      textElement.textContent = data[key].text;

      contentElement.appendChild(titleElement);
      contentElement.appendChild(textElement);
    });
  })
  .catch(error => {
    console.error('Ошибка при загрузке данных:', error);
  });