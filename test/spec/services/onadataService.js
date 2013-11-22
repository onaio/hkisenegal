'use strict';

describe('Service: Onadataservice', function () {

  // load the service's module
  beforeEach(module('hkipecsApp'));

  // instantiate service
  var Onadataservice;
  beforeEach(inject(function (_Onadataservice_) {
    Onadataservice = _Onadataservice_;
  }));

  it('should do something', function () {
    expect(!!Onadataservice).toBe(true);
  });

});
