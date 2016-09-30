'use strict';

describe('Service: tmdbConsts', function () {

  // load the service's module
  beforeEach(module('tmdbApp'));

  // instantiate service
  var tmdbConsts;
  beforeEach(inject(function (_tmdbConsts_) {
    tmdbConsts = _tmdbConsts_;
  }));

  it('should do something', function () {
    expect(!!tmdbConsts).toBe(true);
  });

});
