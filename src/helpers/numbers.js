export const numberWithCommas = (number) => {
    const result = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return result === 'NaN' ? '-' : result;
}

export const parseFloatNumber = (number, afterPoint) => {
    const result = parseFloat(number).toFixed(afterPoint);
    return result === 'NaN' ? '-' : result;
}