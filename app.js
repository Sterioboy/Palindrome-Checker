userResult = document.createElement('p');

const form = document.querySelector('form');
form.append(userResult);

const inputVal = document.querySelector('#check');

form.addEventListener('submit', function(e) {
	e.preventDefault();
    inputResult = inputVal.value;
    function palindrome(str) {
        const myRegeEx = /[a-z0-9]/ig;
        let alpha = str.match(myRegeEx);
        if(alpha.join('').toLowerCase() === alpha.reverse().join('').toLowerCase()) {
            return `Yes! | ${str} | is a Palindrome!`
        }
        return `No! | ${str} | is not a Palindrome. Try again!`
    }
    userResult.innerText = palindrome(inputResult);
});
