# TeamSpawn

A collaborative webapp for tracking mobs killed during S Rank spawn attempts in Final Fantasy XIV.

[Front end source code available here.](https://github.com/MattKeane/ffxiv-kcs-counter-front)

## Technologies Used

- React
- React Router
- Express
- MongoDB
- Mongoose
- Socket.io
- Node

## Installation

To install all dependencies locally run:
```bash
$ npm install
```

Required environment variables:
| variable | description |
| - | - |
| PORT | Specifies the port for the application to run on |
| MONGODB_URI | Specifies the location of the application's database |
| DEBOUNCE_TIME | Specifies the delay in updates from the server |

To start the application locally run:
```bash
$ npm start
```

## Use

On navigating to the homepage, users have the option of starting a new spawn attempt of an S rank, or joining a spawn in progress. Updates from users working on the same spawn attempt will update the counts for other users. Users can also return to the url for their spawn attempt after leaving the app for up to 24 hours.