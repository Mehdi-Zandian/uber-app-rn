
# Uber React Native APP
It is my Uber Clone APP built with React Native and Geoapify API.

## Technologies
- React Native
- React Navigation (Stack Navigator)
- React-Native-Maps
- Geoapify API (Autocomple Places and Routes)
- Redux State Manager
- Tailwind CSS (NativeWind)
- React Native Animation

## API Reference

#### Base URL
```
"https://api.geoapify.com/v1"
```

#### Get Auto Complete Places

```http
  GET "/geocode/autocomplete?text=SEARCH_TEXT&apikey=API_KEY"
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `SEARCH_TEXT` | `string` | `Text of entered place` |
| `apikey` | `string` | **Required**. apikey is needed |

#### Get Directions

```http
  GET "/routing?waypoints=ORIGIN_LAT,ORIGIN_LONG|DESTINATION_LAT,DESTINATION_LONG&mode=MODE_TYPE&apikey=APIKEY"
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ORIGIN_LAT`      | `Number` | `Latitude coordinate of the origin` |
| `ORIGIN_LON`      | `Number` | `Longitude coordinate of the origin` |
| `DESTINATION_LAT`      | `Number` | `Latitude coordinate of the destination` |
| `DESTINATION_LONG`      | `Number` | `Longitude coordinate of the destination` |
| `MODE_TYPE`      | `string` | `Type of vehicle` |
| `API_KEY`      | `string` | **Required** apikey is needed |



## Appendix
- Developed By Mehdi Zandian 6/2023 😃

## Authors

- [@Mehdi-Zandian](https://github.com/Mehdi-Zandian)

