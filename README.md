# Week Todos

This project is a backend written with nodejs and mongodb(with mongoose) for vue client. This project was developed with Vue to manage the list of common weekly to-do. Websocket was used for communication. It was developed as a simple example for Socket and Vue. You can make it look more beautiful or add new features.

**client** : https://github.com/gurkanakdeniz/week-todos-vue-client

<p align="center">
  <img src="https://raw.githubusercontent.com/gurkanakdeniz/week-todos-vue-client/master/screen/draw.jpg">
</p>

## Preview

![demo](https://raw.githubusercontent.com/gurkanakdeniz/week-todos-vue-client/master/screen/demo.gif  "demo")


<p align="center">
  <img width="360" length="480" src="https://raw.githubusercontent.com/gurkanakdeniz/week-todos-nodejs-backend/master/screen/1.png">
</p>

## Getting Started

create a database with the name **todoNote**

```
mongoose
  .connect(
    "mongodb://localhost/todoNote",
    { useNewUrlParser: true }
)
```

```
npm install
npm start
```

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details
