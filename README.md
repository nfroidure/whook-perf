## whook-perf

> Naive benchmark for [Whook](https://github.com/nfroidure/whook) vs other
 frameworks

To run the benchmak, install `ab` in your system (Apache Benchmark is often
  available with the Apache binaries for most package systems). On Debian:
```sh
apt-get install apache
```

Also install dependencies:
```sh
npm install
```

Then, run the benchmark:

```sh
$ ./bench.sh
# Running Whook bench
- PID: 6678
Completed 1000 requests
Completed 2000 requests
Completed 3000 requests
Completed 4000 requests
Completed 5000 requests
Completed 6000 requests
Completed 7000 requests
Completed 8000 requests
Completed 9000 requests
Completed 10000 requests
Finished 10000 requests
Requests per second:    1467.45 [#/sec] (mean)
Time per request:       340.726 [ms] (mean)
Time per request:       0.681 [ms] (mean, across all concurrent requests)
              min  mean[+/-sd] median   max
# Running Express bench
- PID: 6701
Completed 1000 requests
Completed 2000 requests
Completed 3000 requests
Completed 4000 requests
Completed 5000 requests
Completed 6000 requests
Completed 7000 requests
Completed 8000 requests
Completed 9000 requests
Completed 10000 requests
Finished 10000 requests
Requests per second:    1520.21 [#/sec] (mean)
Time per request:       328.901 [ms] (mean)
Time per request:       0.658 [ms] (mean, across all concurrent requests)
              min  mean[+/-sd] median   max
# Running Koa bench
- PID: 6719
Completed 1000 requests
Completed 2000 requests
Completed 3000 requests
Completed 4000 requests
Completed 5000 requests
Completed 6000 requests
Completed 7000 requests
Completed 8000 requests
Completed 9000 requests
Completed 10000 requests
Finished 10000 requests
Requests per second:    1537.16 [#/sec] (mean)
Time per request:       325.275 [ms] (mean)
Time per request:       0.651 [ms] (mean, across all concurrent requests)
              min  mean[+/-sd] median   max
```

Currently, there is no significant difference for the various frameworks.
