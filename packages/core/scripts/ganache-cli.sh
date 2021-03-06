#!/usr/bin/env bash

# Exit script as soon as a command fails.
set -o errexit

if [ "$SOLIDITY_COVERAGE" = true ]; then
  testrpc_port=8555
else
  testrpc_port=8545
fi

testrpc_running() {
  nc -z localhost "$testrpc_port"
}

start_testrpc() {
  if [ "$SOLIDITY_COVERAGE" = true ]; then
    npx testrpc-sc -i 16 -l 0xfffffffffff -g 0x01 --port "$testrpc_port"  > /dev/null &
  else
    npx ganache-cli -i 15 -l 0xfffffffffff -g 0x01 --port "$testrpc_port" > /dev/null &
  fi

  testrpc_pid=$!
}

if testrpc_running; then
  echo "Killing ganache instance at port $testrpc_port"
  kill -9 $(lsof -i:$testrpc_port -t)
fi

echo "Starting our own ganache instance at port $testrpc_port"
start_testrpc
sleep 5

# Exit error mode so the testrpc instance always gets killed
set +e
if [ "$SOLIDITY_COVERAGE" = true ]; then
  npx solidity-coverage "$@"
elif [ "$TRUFFLE_TEST" = true ]; then
  npx ./node_modules/.bin/truffle test ./test/index.js --network rpc "$@"
fi
kill -9 $testrpc_pid
