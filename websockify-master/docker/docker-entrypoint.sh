#!/bin/sh
# vim: tabstop=4 shiftwidth=4 softtabstop=4

set -e

/opt/websockify/websockify-$VERSION/run --token-plugin=ReadOnlyTokenFile --token-source=/data/token_file.cfg --verbose localhost:6080
