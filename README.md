## Задание 1

Создайте компонент my-table, который будет отображать данные в виде таблицы.

Информация для отображения:

    Products = [
    { id: 1, name : “product 1”, price : 100 },
    { id: 2, name : “product 2”, price : 200 },
    { id: 3, name : “product 3”, price : 300 },
    { id: 4, name : “product 4”, price : 400 },
    { id: 5, name : “product 5”, price : 500 },
    { id: 6, name : “product 6”, price : 600 },
    { id: 7, name : “product 7”, price : 700 },
    { id: 8, name : “product 8”, price : 800 },
    { id: 9, name : “product 9”, price : 900 },
    { id: 10, name : “product 10”, price : 1000 }];

  

Данные должны выводиться в три столбца. Компонент должен использовать параметр rows с помощью, которого можно установить количество строк, которые отображаются в таблице.

Например: `<my-table  rows=”3”></my-table>` при, таком использовании, в таблице должны отображаться первые три строки.

## Задание 2

Добавьте в компонент my-table оформление с помощью стилей взятых из bootstrap.
Используйте класс table и table-stripped.

## Задание 3

Добавьте в компонент my-table напротив каждой строки кнопку удалить. 
Сделайте так, чтобыпри нажатии на эту кнопку удалялся элемент из таблицы и происходило событие delete.
Событие delete должен фиксировать родительский компонент, при этом в консоль нужно отображать id удаленного компонента.

## Задание 4

Расширите шаблон компонента, сделанный в задании №1 к уроку №2 «Компоненты».
Добавьте в шаблон возможность изменять цвет текста строки таблицы на красный, в случае
если значение свойства price > 500.

## Задание 5

Добавьте в источник данных для предыдущего примера свойство Category. 
Это свойство должно хранить одно из трех возможных значений – Category 1, Category 2, Category 3.
Добавьте в шаблон компонента выпадающий список со значениями категорий. 
Реализуйте логику фильтрации данных в таблице таким образом, чтобы при смене значения в
выпадающем списке, в таблице оставались только записи относящиеся к выбранной категории.

## Задание 6

Используя двунаправленную привязку создайте компонент, с помощью которого, можно
добавлять новые значения в источник данных для my-table.

## Задание 7

Проведите рефакторинг кода, сделанного по любому заданию из урока №3. 
Перепишите код таким образом, чтобы значения массива products предоставлялись компоненту через сервис.

## Задание 7

Создайте объект:

`let data = {
    getData: function() {
    // вернуть массив products
    }
}`

Измените код первого задания так, чтобы он использовал объект data в качестве сервиса.