
// date format: yyyy-mm-dd
const datePattern: RegExp = /^(?:19|20)\d\d-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:0[1-9])|(?:[1-2][0-9])|(?:3[0-1]))$/;

const validateDate = (date: string): boolean => {
    if (datePattern.test(date)) {
        return true;
    } else {
        return false;
    }
}

export default validateDate;
