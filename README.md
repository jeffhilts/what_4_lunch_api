# What4Lunch API
An api to support the What4Lunch mobile app. It maintains a list of dining locations and the ability to get the lists, add to the list, remove from the list and mark a location as visited.

## Endpoints
| EndPoint  | Verb  | Parameters | Description |
|:--------- |:----  |:----------    |:----------- |
| /api/places    | Get    | | Returns an array of all places |
| /api/places    | Post | { "name": "Name of Place", "imageUrl": "http://www.whereisthisimage.com" } | Adds a new pace |
| /api/places/:name | Put | name of place | Adds date time for last visited |
| /api/places/:name | Delete | name of place | Removes place from list |