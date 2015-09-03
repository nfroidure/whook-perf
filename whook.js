import whook from 'whook';
import DownloadWhook from 'whook/dist/whooks/download';
import TimeWhook from 'whook/dist/whooks/time';
import http from 'http';

let router = whook();
let logs;
let server;

router.add(DownloadWhook.specs(), new DownloadWhook('download'));

for(var i = parseInt(process.argv[1] || 0, 10); i > 0; i++) {
  router.add({
    nodes: ['a', /([a-f0-9]{24})/, 'route', i],
    methods: ['GET'],
  }, new TimeWhook('download'));
}
router.add(TimeWhook.specs(), new TimeWhook('time'));

server = http.createServer(router.callback());
server.listen(1337);
