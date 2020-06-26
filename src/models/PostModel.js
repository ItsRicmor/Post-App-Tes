import { BaseModel } from 'sjs-base-model';

// Documentacion para usar la libreria sjs-base-model: https://www.npmjs.com/package/sjs-base-model

export default class PostModel extends BaseModel {
    id = 0;
    title = '';
    body = '';

    /*
     * Client-Side properties (Not from API)
     */
    // noneApiProperties = null;

    constructor(data) {
        super();

        this.update(data);
    }
}