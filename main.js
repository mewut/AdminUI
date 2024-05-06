document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.querySelector('#save-button');
    const textareaStaff = document.querySelector('#textarea-staff');

    fetch('main.json')
        .then(response => response.json())
        .then(data => {
            textareaStaff.value = data.staff.join('\n');
            mainData = JSON.parse(JSON.stringify(data));
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных', error);
        });

    let newData = null;

    textareaStaff.addEventListener('input', () => {
        const staffData = textareaStaff.value.split('\n');
        newData = { staff: staffData };
    });

    saveButton.addEventListener('click', () => {
        
        if (JSON.stringify(mainData) !== JSON.stringify(newData)) {
            // положим данные в Localstorage браузера, будем имитировать сервер х)
            localStorage.setItem('mainData', JSON.stringify(newData));
            console.log('Данные успешно сохранены');
            console.log(newData);
            
            mainData = JSON.parse(JSON.stringify(newData));
        } else {
            console.log('Данные не были изменены');
        }
    });
});
