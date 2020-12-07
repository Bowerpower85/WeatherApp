const searchCity = $('.search-field').val().trim();
const APIKey = '46f94e353f50c847934f67beed088d83';

$('.searchBtn').on('click', (event) => {
    const currentDate = moment().format('M/DD/YYYY');
    searchCity = $('.search-field').val();

    const newCities = JSON.parse(localStorage.getItem('savedCities'));
    if (newCities != null)
    {
        for (var i = 0; i < newCities.length; i = i + 1)
        {
            if (newCities.indexOf(city) === -1)
            {
                newCities.push(city);
            }
        }
    }
    else
    {
        newCities = [searchCity];
    }
    localStorage.setItem('savedCities', JSON.stringify(newCities));

    showWeather(searchCity);
    renderSavedCities(newCities);
});