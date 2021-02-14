if (typeof unknownVariable === 'string' && unknownVariable.length > 0)
  if (
    typeof unknownVariable != 'undefined' &&
    unknownVariable &&
    unknownVariable.length() > 0 &&
    typeof unknownVariable.valueOf() == 'string'
  )
    //typeof value equal to object not string
    var str = new String('test');
