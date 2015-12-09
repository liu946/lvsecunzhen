for file in "$@"; do
    iconv -t utf-8 -f utf-16le -c $file > $file'-new';
done