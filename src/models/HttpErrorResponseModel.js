import uuid from 'uuid';

export default class HttpErrorResponseModel {
  id = uuid();
  status = 0;
  message = '';
  errors = [];
  url = '';
  raw = null;
}