ymaps.ready(init);

var myMap;

function init () {
    // Параметры карты можно задать в конструкторе.
    myMap = new ymaps.Map(
        // ID DOM-элемента, в который будет добавлена карта.
        'map',
        // Параметры карты.
        {
            // Географические координаты центра отображаемой карты.
            center: [55.351999, 37.548708],
            // Масштаб.
            zoom: 10,
            controls: ['zoomControl'],
        }, {
            // Поиск по организациям.
            searchControlProvider: 'yandex#search'
        }
    );
    myMap.geoObjects
        .add(new ymaps.Placemark([55.351999, 37.548708], {
            iconCaption: 'СИЯНИЕ ТК'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))

    myMap.controls.add('zoomControl', {
        float: 'right'
    });
}