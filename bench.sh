NUM_REQ=10000
NUM_CON=500
UP_DELAY=2
NUM_MIDS=200

export NODE_ENV=production

echo "# Running Whook bench"

npm run whook -- $NUM_MIDS > /dev/null &
WHOOK_PID=$!
echo "- PID: $WHOOK_PID"
sleep $UP_DELAY
ab -n $NUM_REQ -c $NUM_CON -e ./whook.csv http://localhost:1337/time | grep mean
kill -9 "$WHOOK_PID"

echo "# Running Express bench"

npm run express -- $NUM_MIDS > /dev/null &
EXPRESS_PID=$!
echo "- PID: $EXPRESS_PID"
sleep $UP_DELAY
ab -n $NUM_REQ -c $NUM_CON -e ./express.csv http://localhost:1337/time | grep mean
kill -9 "$EXPRESS_PID"

echo "# Running Koa bench"

npm run koa -- $NUM_MIDS > /dev/null &
KOA_PID=$!
echo "- PID: $KOA_PID"
sleep $UP_DELAY
ab -n $NUM_REQ -c $NUM_CON -e ./koa.csv http://localhost:1337/time | grep mean
kill -9 "$KOA_PID"
