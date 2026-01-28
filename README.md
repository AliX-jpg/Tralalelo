# Canvas Jam

Canvas Jam - это мультиплеерный холст с синхронизацией Firebase. Это позволяет нескольким пользователям одновременно рисовать на одной веб-странице.

## Установка

1. Клонируйте репозиторий:
   ```
   git clone https://github.com/AliX-jpg/Tralalelo.git
   ```

2. Перейдите в ветку `feature/party-site`:
   ```
   git checkout feature/party-site
   ```

3. Установите зависимости (опционально, если будут добавлены):
   ```
   npm install
   ```

4. Настройте Firebase. Создайте проект в [Firebase Console](https://console.firebase.google.com) и заполните ваш `firebaseConfig` в `script.js`.

## Запуск

Чтобы запустить проект локально, откройте файл `index.html` в браузере:
```
open index.html
```

## Возможности

- Холст для рисования
- Синхронизация данных через Firebase
- Простая аутентификация (в разработке).