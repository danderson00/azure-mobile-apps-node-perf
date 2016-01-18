var app = require('express')(),
    mobileApp = require('azure-mobile-apps')({ homePage: true, skipVersionCheck: true })

app.get('/loaderio-2224bb5afed152e4736909c3531507f4/', function (req, res, next) {
    res.send('loaderio-2224bb5afed152e4736909c3531507f4')
})

mobileApp.tables.add('crud')
app.use(mobileApp)
app.listen(process.env.PORT || 3000)
