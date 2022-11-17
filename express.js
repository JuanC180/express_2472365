const express = require('express');
const { sendFile } = require('express/lib/response');
const app = express();
const hbs = require('hbs')
require('dotenv').config();
const port = process.env.PORT;

app.use(express.static('public') );

// hbs.registerPartial(__dirname + '/public/assets/views/partials', function (err) {});
// app.set('view engine', 'hbs')
// app.set('views', __dirname + '/public/assets/views');
hbs.registerPartials(__dirname + '/public/views/partials', function (err) {});
app.set('view engine', 'hbs')
app.set('views', __dirname + '/public/views');

app.get('/home', (req, res)=>{
    res.render('home',{
        nombre: 'Home'
    })
})
app.get('/', (req, res)=>{
    res.render('registrarPedido',{
        nombre: 'registrar'
    })
})
app.get('/editar', (req, res)=>{
    res.render('editarProducto',{
        nombre: 'editar'
    })
})

app.get('/login', (req, res)=>{
    // res.sendFile(__dirname + '/public/assets/views/login.html');
    res.render('login', {
        nombre: 'login'
    })
});

app.get('/loginNovo', (req, res)=>{
    // res.sendFile(__dirname + '/public/assets/views/login.html');
    res.render('loginNovo', {
        nombre: 'loginNovo'
    })
});

app.get('/registrarPedido', (req, res)=>{
    // res.sendFile(__dirname + '/public/assets/views/registrarPedido.html');
    res.render('registrarPedido', {
        nombre: 'registroPedido_'
    })
});



app.get('/contacto', (req, res)=>{
    res.send('from contacto');
});

app.get('*', (req, res)=>{
    // res.send('Pagina no encontrada');
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Escuchando por el puerto ${process.env.PORT = 1313}`)

})