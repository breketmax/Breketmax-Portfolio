export const getDaysDeclensions = (days: number) => {
    const lastDigit = days % 10;
    const lastTwoDigits = days % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
        return 'день';
    } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
        return 'дня';
    } else {
        return 'дней';
    }
};

export const splitNumberByThreeDigits = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
