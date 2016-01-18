var app = require('express')(),
    mobileApp = require('azure-mobile-apps')()

mobileApp.tables.add('crud')
app.use(mobileApp)
app.listen(process.env.PORT || 3000)
