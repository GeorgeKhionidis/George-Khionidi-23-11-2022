const MOCK_AUTOCOMPLETE = [
  {
    Version: 1,
    Key: '182536',
    Type: 'City',
    Rank: 10,
    LocalizedName: 'Athens',
    Country: {
      ID: 'GR',
      LocalizedName: 'Greece',
    },
    AdministrativeArea: {
      ID: 'I',
      LocalizedName: 'Attica',
    },
  },
  {
    Version: 1,
    Key: '508163',
    Type: 'City',
    Rank: 45,
    LocalizedName: 'Ath Thuqbah',
    Country: {
      ID: 'SA',
      LocalizedName: 'Saudi Arabia',
    },
    AdministrativeArea: {
      ID: '04',
      LocalizedName: 'Eastern',
    },
  },
  {
    Version: 1,
    Key: '328217',
    Type: 'City',
    Rank: 45,
    LocalizedName: 'Athens',
    Country: {
      ID: 'US',
      LocalizedName: 'United States',
    },
    AdministrativeArea: {
      ID: 'GA',
      LocalizedName: 'Georgia',
    },
  },
  {
    Version: 1,
    Key: '28185',
    Type: 'City',
    Rank: 53,
    LocalizedName: 'Ath',
    Country: {
      ID: 'BE',
      LocalizedName: 'Belgium',
    },
    AdministrativeArea: {
      ID: 'WHT',
      LocalizedName: 'Hainaut',
    },
  },
  {
    Version: 1,
    Key: '133595',
    Type: 'City',
    Rank: 55,
    LocalizedName: 'Athis-Mons',
    Country: {
      ID: 'FR',
      LocalizedName: 'France',
    },
    AdministrativeArea: {
      ID: '91',
      LocalizedName: 'Essonne',
    },
  },
  {
    Version: 1,
    Key: '193349',
    Type: 'City',
    Rank: 55,
    LocalizedName: 'Athni',
    Country: {
      ID: 'IN',
      LocalizedName: 'India',
    },
    AdministrativeArea: {
      ID: 'KA',
      LocalizedName: 'Karnataka',
    },
  },
  {
    Version: 1,
    Key: '2871558',
    Type: 'City',
    Rank: 55,
    LocalizedName: 'Athirampuzha',
    Country: {
      ID: 'IN',
      LocalizedName: 'India',
    },
    AdministrativeArea: {
      ID: 'KL',
      LocalizedName: 'Kerala',
    },
  },
  {
    Version: 1,
    Key: '2875600',
    Type: 'City',
    Rank: 55,
    LocalizedName: 'Atholi',
    Country: {
      ID: 'IN',
      LocalizedName: 'India',
    },
    AdministrativeArea: {
      ID: 'KL',
      LocalizedName: 'Kerala',
    },
  },
  {
    Version: 1,
    Key: '2916871',
    Type: 'City',
    Rank: 65,
    LocalizedName: 'Athagad',
    Country: {
      ID: 'IN',
      LocalizedName: 'India',
    },
    AdministrativeArea: {
      ID: 'OR',
      LocalizedName: 'Odisha',
    },
  },
  {
    Version: 1,
    Key: '222078',
    Type: 'City',
    Rank: 65,
    LocalizedName: 'Ath Thaniyah',
    Country: {
      ID: 'JO',
      LocalizedName: 'Jordan',
    },
    AdministrativeArea: {
      ID: 'KA',
      LocalizedName: 'Karak',
    },
  },
];

const MOCK_WEATHER_FOR_FIVE_DAYS = {
  Headline: {
    EffectiveDate: '2022-11-26T07:00:00+03:00',
    EffectiveEpochDate: 1669435200,
    Severity: 7,
    Text: 'Very warm from Saturday to Sunday',
    Category: 'heat',
    EndDate: '2022-11-27T19:00:00+03:00',
    EndEpochDate: 1669564800,
    MobileLink:
      'http://www.accuweather.com/en/sa/ath-thuqbah/508163/daily-weather-forecast/508163?lang=en-us',
    Link: 'http://www.accuweather.com/en/sa/ath-thuqbah/508163/daily-weather-forecast/508163?lang=en-us',
  },
  DailyForecasts: [
    {
      Date: '2022-11-23T07:00:00+03:00',
      EpochDate: 1669176000,
      Temperature: {
        Minimum: {
          Value: 56,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 84,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: 'Clear',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/sa/ath-thuqbah/508163/daily-weather-forecast/508163?day=1&lang=en-us',
      Link: 'http://www.accuweather.com/en/sa/ath-thuqbah/508163/daily-weather-forecast/508163?day=1&lang=en-us',
    },
    {
      Date: '2022-11-24T07:00:00+03:00',
      EpochDate: 1669262400,
      Temperature: {
        Minimum: {
          Value: 63,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 80,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: 'Mostly cloudy',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: 'Mostly clear',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/sa/ath-thuqbah/508163/daily-weather-forecast/508163?day=2&lang=en-us',
      Link: 'http://www.accuweather.com/en/sa/ath-thuqbah/508163/daily-weather-forecast/508163?day=2&lang=en-us',
    },
    {
      Date: '2022-11-25T07:00:00+03:00',
      EpochDate: 1669348800,
      Temperature: {
        Minimum: {
          Value: 64,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 83,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: 'Clear',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/sa/ath-thuqbah/508163/daily-weather-forecast/508163?day=3&lang=en-us',
      Link: 'http://www.accuweather.com/en/sa/ath-thuqbah/508163/daily-weather-forecast/508163?day=3&lang=en-us',
    },
    {
      Date: '2022-11-26T07:00:00+03:00',
      EpochDate: 1669435200,
      Temperature: {
        Minimum: {
          Value: 66,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 86,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: 'Clear',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/sa/ath-thuqbah/508163/daily-weather-forecast/508163?day=4&lang=en-us',
      Link: 'http://www.accuweather.com/en/sa/ath-thuqbah/508163/daily-weather-forecast/508163?day=4&lang=en-us',
    },
    {
      Date: '2022-11-27T07:00:00+03:00',
      EpochDate: 1669521600,
      Temperature: {
        Minimum: {
          Value: 66,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 86,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: 'Clear',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/sa/ath-thuqbah/508163/daily-weather-forecast/508163?day=5&lang=en-us',
      Link: 'http://www.accuweather.com/en/sa/ath-thuqbah/508163/daily-weather-forecast/508163?day=5&lang=en-us',
    },
  ],
};

export const get_weather_five_days_data = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: MOCK_WEATHER_FOR_FIVE_DAYS,
      });
    }, 2000);
  });
};

export const get_cities_data = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: MOCK_AUTOCOMPLETE,
      });
    }, 2000);
  });
};
