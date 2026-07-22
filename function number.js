function numberToword(num){
    switch(num)
{
    case 0:
        return "zero";
    case 1:
        return "one";
    case 2:
        return "two";
    case 3:
        return "three";
    case 4:
        return "four";
        case 5:
            return "five";
            case 6:
                return "six";
                case 7:
                    return "seven";
                    case 8:
                        return "eight";
                        case 9:
                            return "nine";
                            default:
                                return "invalid number";
}
}

console.log(numberToword(0));
console.log(numberToword(1));
console.log(numberToword(8));
console.log(numberToword(5));
console.log(numberToword(9));
console.log(numberToword(3));