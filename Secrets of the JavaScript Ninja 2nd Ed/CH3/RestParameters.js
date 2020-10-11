//Rest parameters are prefixed with …
//Only the last function parameter can be a rest parameter.
function multiMax(first, ...remainingNumbers){
    var sorted = remainingNumbers.sort(function(a, b){
    return b – a;
    });
    return first * sorted[0];
    }
    assert(multiMax(3, 1, 2, 3) == 9,
    "3*3=9 (First arg, by largest.)");