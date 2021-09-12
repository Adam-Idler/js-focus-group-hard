// 1 Задание
const lang = prompt('Выберите локализацию: ru или en', 'ru');
const dayOfWeek = [];

dayOfWeek['ru'] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
dayOfWeek['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if (lang === 'ru') {
    console.log('Дни недели:', dayOfWeek['ru']);
} else if (lang === 'en') {
    console.log('Day of week:', dayOfWeek['en']);
} else {
    console.log('Вы выбрали неверную локализацию');
}

switch(lang) {
    case 'ru':
        console.log('Дни недели:', dayOfWeek['ru']);
        break;
    case 'en':
        console.log('Day of week:', dayOfWeek['en']);
        break;
    default:
        console.log('Вы выбрали неверную локализацию');
}

console.log(dayOfWeek[lang]);

// 2 Задание
const namePerson = prompt('Вы кто?', 'Конь в пальто');

const role = namePerson === 'Артем' ? 'Директор' :
             namePerson === 'Алекс' ? 'Преподаватель' :
             'Студент';

console.log('Ваша роль:', role);
