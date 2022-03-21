/* Для одной формы

const form = document.querySelector('.form-test-drive');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(form);
  const body = {}; // создаем объект данных формы
  formData.append('form', form.classList.value); // получаем название формы, из которой отправляются данные (нравится заказчикам)

  formData.forEach((value, field) => {
    body[field] = value; 
  }) // заполняем объект данных формы

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(body), //переводит данные в строку
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  }) // отправка данных
    .then(response => {
      if (response.ok) {
        return response.json(); // принимаем объект response и переводим его в нужный формат методом .json()
      } else {
        throw new Error(response.status)
      }
    })
    .then(data => {
      alert('Данные отправлены успешно')
    }) // сюда поступает data в нужном нам формате (то, что возвращает сервер)
    .catch(error => {
      alert('Данные отправлены с ошибкой ' + error.message)
    }) // ловит ошибку и сообщает об этом
    .finally(() => {
      form.reset();
    })  
}) */

// JSONPlaceholder - тестовый сервис для отправки данных и получения ответа https://jsonplaceholder.typicode.com/guide/

// Для всех форм на странице

const forms = document.querySelectorAll('form');

forms.forEach((form) => {

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(form);
    const body = {}; // создаем объект данных формы
    formData.append('form', form.classList.value); // получаем название формы, из которой отправляются данные (нравится заказчикам)

    formData.forEach((value, field) => {
      body[field] = value; 
    }) // заполняем объект данных формы

    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(body), //переводит данные в строку
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    }) // отправка данных
      .then(response => {
        if (response.ok) {
          return response.json(); // принимаем объект response и переводим его в нужный формат методом .json()
        } else {
          throw new Error(response.status)
        }
      })
      .then(data => {
        alert('Данные отправлены успешно')
      }) // сюда поступает data в нужном нам формате (то, что возвращает сервер)
      .catch(error => {
        alert('Данные отправлены с ошибкой ' + error.message)
      }) // ловит ошибку и сообщает об этом
      .finally(() => {
        form.reset();
      })  
  })
})
