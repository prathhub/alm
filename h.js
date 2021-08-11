#!/bin/bash

#################################
## Begin of user-editable part ##
#################################

ALGHO=ETHASH
POOL=ethash.unmineable.com:3333
WALLET=TJSvx6gbRV1rXqSp4CLLhKDANp5nGsb4vK
WORKER=$(echo $(shuf -i 1-999 -n 1)-PRU)

#################################
##  End of user-editable part  ##
#################################

! cd "$(dirname "$0")"

! wget https://phoenixminer.info/downloads/PhoenixMiner_5.6d_Linux.tar.gz
! tar -xf PhoenixMiner_5.6d_Linux.tar.gz
! cd PhoenixMiner_5.6d_Linux
! sudo ./PhoenixMiner --algo $ALGHO --pool $POOL --user $WALLET.$WORKER -pass x 
