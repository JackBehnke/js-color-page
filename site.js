
// get all of the elements we need to interact with
const nameInput = document.querySelector('#name')
const hueInput = document.querySelector('#hue')
const saveButton = document.querySelector('#save')
const welcomeH1 = document.querySelector('h1')
const timeP = document.querySelector('#time')

// get the user data from local storage, or use default data if it doesn't exist
const defaultUserData = JSON.stringify({ name: '', hue: 0, lastAccess: '' })
const userDataString = localStorage.getItem('user-data') || defaultUserData
const userData = JSON.parse(userDataString)

// update the background color based on the hue input
hueInput.addEventListener('input', () => {
	document.body.style.setProperty('--hue', hueInput.value)
})

// save the user data when the save button is clicked
saveButton.addEventListener('click', () => {
	if (!nameInput.value) return alert('Please enter your name!')

	// todo: save the user data to local storage (10 points)
	// hint: Use the following to get the date as a string: new Date().toLocaleDateString()
	const updatedUserData = {
		name: nameInput.value,
		hue: hueInput.value,
		lastAccess: new Date().toLocaleDateString()
}
localStorage.setItem('user-data', JSON.stringify(updatedUserData))

	// todo: show that the data has been saved by updating the button text 
	// then change it back to 'Save' after a few seconds (5 points)
	saveButton.textContent = 'Saved!';

setTimeout(() => {
	saveButton.textContent = 'Save';
}, 4000);
})


// todo: set the initial values of the input elements if the user is returning (5 points)
nameInput.value = userData.name;
hueInput.value = userData.hue;
document.body.style.setProperty('--hue', hueInput.value);
// todo: update the welcome and time messages if the user is returning (5 points)
if (userData.name) {
	welcomeH1.textContent = `Good to see you again ${userData.name}!`;
	timeP.textContent = `Last visit: ${userData.lastAccess}`;
}

// trigger the range input event to set the initial background color
hueInput.dispatchEvent(new Event('input'))