docker build . -t test_node_bug && docker run --rm -v$(pwd):/mnt test_node_bug
