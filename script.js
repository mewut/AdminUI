document.addEventListener('DOMContentLoaded', () => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      Object.keys(data).forEach(key => {
        const contentElement = document.querySelector(`.content-${key.split('-')[1]}`);
        const titleElement = document.createElement('h2');
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

  const menuLinks = document.querySelectorAll('.menu__link');
  const contentBlocks = document.querySelectorAll('.content > div');

  menuLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showContent(index);
    });
  });

  function showContent(index) {
    const contentHeight = document.querySelector('.content').offsetHeight;
    document.querySelector('.content').style.transform = `translateY(-${contentHeight * index}px)`
    console.log(index);
  
    const contentBlocksArray = Array.from(contentBlocks);
    contentBlocksArray.forEach((block, i) => {
      if (i === index) {
        block.classList.add('active');
      } else {
        block.classList.remove('active');
      }
    });
  }
});
