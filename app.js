console.log('Starting')

setTimeout(() => {
    console.log('Wait for 2 secs !')
}, 2000)

console.log('Stopping')

// In synchronous programming model, one line runs after the other
// regardless of how much time each line takes to execute

// when we execute this we get the following o/p:
// Starting
// Stopping
// Wait for 2 secs ! (this comes after 2 secs)

console.log('Starting')

setTimeout(() => {
    console.log('Wait for 2 secs !')
}, 2000)

setTimeout(() => {
    console.log('Wait for 0 secs !')
}, 0)

console.log('Stopping')

// o/p for the below :
// Starting
// Stopping
// Wait for 0 secs !
// Wait for 2 secs ! (this comes after 2 secs)