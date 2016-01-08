# -*- coding: utf-8 -*-

from flask import Blueprint
from flask import request
from flask import jsonify

import clickhouse

api = Blueprint('api', __name__)


@api.route('/api/table')
def table():
    table = request.args['table']
    fields = clickhouse.query('DESC TABLE ' + table)
    # first column: name
    # second: type
    res = {'fields': [[f[0], f[1]] for f in fields]}
    return jsonify(res)


# Измерение, метрики.
# Измерение - колонка
# Метрика - пока что тоже колонка. Тогда считаем sum
# todo фильтры не забыть же
@api.route('/api/request')
def req():
    table = request.args['table']
    dim = request.args['dim']
    metrics = request.args['metrics']
    print metrics
    # first column: name
    # second: type
    return 'ololo'
