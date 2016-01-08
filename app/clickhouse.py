import sys
import urllib
import urllib2
import csv
import StringIO
import collections

# clickhouse csv format init (tsv actually)
csv.register_dialect(
    'clickhouse', 
    delimiter='\t',
    quoting=csv.QUOTE_MINIMAL, 
    lineterminator='\n')


def download(url, data = None):
    req = urllib2.Request(url, data)
    reader = urllib2.urlopen(req)
    return reader.read()


def query(query):
    reqEncode = urllib.urlencode({'query': query})
    url = "http://localhost:18123?" + reqEncode
    res = download(url)
    tabin = csv.reader(StringIO.StringIO(res), dialect='clickhouse')
    return [ row for row in tabin if len(row) > 0 ]
