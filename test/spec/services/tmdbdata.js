'use strict';

describe('Service: tmdbData', function () {

  // load the service's module
  beforeEach(module('tmdbApp'));

  // instantiate service
  var tmdbData;
  beforeEach(inject(function (_tmdbData_) {
    tmdbData = _tmdbData_;
  }));

  it('should do something', function () {
    expect(!!tmdbData).toBe(true);
  });

});
