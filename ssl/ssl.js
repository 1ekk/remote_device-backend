// Dependencies
const express = require('express');

// Configure & Run the http server
const app = express();

app.use(express.static('ssl_test', { dotfiles: 'allow' } ));

app.get('/.well-known/acme-challenge/:fileid', function(req, res){
    res.sendFile("/root/pahso/WS/ssl_test/.well-known/acme-challenge/"+req.params.fileid)
})

app.listen(80, () => {
  console.log('SSL cert provider running on port 80');
});
