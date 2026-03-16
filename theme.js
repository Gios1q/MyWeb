// Ждём полной загрузки DOM перед выполнением скрипта
document.addEventListener('DOMContentLoaded', function () {

    // Находим кнопку переключения темы по классам
    const themeBtn = document.querySelector('.icon-btn.theme');

    // Получаем ссылку на корневой элемент <html> к нему добавляется класс "dark"
    const html = document.documentElement;

    // Функция смены изображения аватара в зависимости от активной темы
    function updateAvatar() {
        const img = document.getElementById('avatar-img');
        if (!img) return;

        // В тёмной теме показываем ChW.png, в светлой — Ch.png
        img.src = html.classList.contains('dark')
            ? 'image/ChW.png'
            : 'image/Ch.png';
    }

    // При загрузке страницы: если тёмная тема уже активна обновляем иконку кнопки
    if (html.classList.contains('dark')) {
        themeBtn.textContent = '☀️'; // В тёмной теме показываем солнце (для переключения на светлую)
    }

    // Обновляем аватар согласно текущей теме при загрузке
    updateAvatar();

    //  лик по кнопке переключения темы
    themeBtn.addEventListener('click', () => {

        // Переключаем класс "dark" на <html> и получаем текущее состояние
        const isDark = html.classList.toggle('dark');

        // Обновляем иконку кнопки
        themeBtn.textContent = isDark ? '☀️' : '🌙';

        // Сохраняем выбранную тему
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Обновляем изображение аватара под новую тему
        updateAvatar();
    });
});
