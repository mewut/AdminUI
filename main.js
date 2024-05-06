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
        // сравнили. И если данные различаются, то:
        if (JSON.stringify(mainData) !== JSON.stringify(newData)) {
            // не будет работать, нет сервера. Но я хочу сохранить как заготовку
            fetch('main.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newData)
            })
                .then(response => {
                    console.log('Данные успешно сохранены');
                    // обновляем исходные данные
                    mainData = JSON.parse(JSON.stringify(newData));
                })
                .catch(error => {
                    console.error('Ошибка при сохранении данных', error);
                });
        } else {
            console.log('Данные не были изменены');
        }
    });
});

//gitlens try