const fs = require('fs');


const requestHandler = (req, res) => {
      //console.log('HEADERS: ' + req.headers, 'METHOD: ' +  req.method, 'URL: ' +  req.url)
      res.setHeader('Content-type','text/html');
      if(req.url === '/form'){
          res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>')
          return  res.end()
      }
      if(req.url === '/message' && req.method === 'POST'){
  
          const body = [];
          req.on('data', (chunk) => {
              body.push(chunk)
              console.log('chunk2',body)
          })
          let parsedBobybody = 'test'
          req.on('end', () => {
              parsedBobybody = Buffer.concat(body).toString();
              console.log('message',parsedBobybody)
              fs.writeFileSync('message.txt',parsedBobybody);
          })
  
  
         
          res.statusCode = 204
          res.setHeader('Location','/');
          return res.end()
      }

      if(req.url === '/user'){
        res.write('<ul><li>Mario</li><li>Paola</li></ul>')
        return res.end()
      }

      if(req.url === '/create-user' && req.method === 'POST'){
        const body = []

        req.on('data', (chunk) => {
            body.push(chunk)
        })

        req.on('end', () => {
            parsedBobybody = Buffer.concat(body).toString();
            console.log('user',parsedBobybody)
        })

        res.statusCode = 204
        res.setHeader('Location','/user');
        return res.end()
   
      }
  
    res.write('<h1>ciao server</h1>')
    res.write('<form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Send</button></form>')
    return  res.end()
}


module.exports = requestHandler;