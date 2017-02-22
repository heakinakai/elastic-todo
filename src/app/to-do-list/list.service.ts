import { Injectable } from '@angular/core';

@Injectable()
export class ListService {

  private elasticsearch = require('elasticsearch');

  private test = new this.elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
  });

  constructor() {
    this.test.cat.indices({
      format: 'ymal'
    }, (error, response) => {
      console.log(response)
    });
  }

}
