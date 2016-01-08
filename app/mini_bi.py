from flask import render_template
from flask import request

import clickhouse

@app.route('/')
def hello_world():
    return 'Hello, world!'


@app.route('/bi')
def bi():
    return render_template('bi.html')


@app.route('/query')
def query():
    query = request.args['query']
    res = clickhouse.query(query)
    return render_template('bi.html', query=query, result=res[0][0])


if __name__ == '__main__':
    app.run(debug=True)
