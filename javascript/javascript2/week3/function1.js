setTimeout(() => {console.log('Called after 2.5 seconds')}, 2500)

//----------------------------------------------------------------------------

const logWithDelay = (stringToLog, delay) => {
    setTimeout(() => {console.log(stringToLog)}, delay)
}
logWithDelay('This text is logged after 3 seconds', 3000)

//----------------------------------------------------------------------------

const btn1Tag = document.getElementById('btn1');

btn1Tag.addEventListener('click', () => {
    logWithDelay('Called after 5 seconds', 5000)
})

//----------------------------------------------------------------------------

const earthLogger = () => {
    console.log('earth')
}

const saturnLogger = () => {
    console.log('saturn')
}

const planetLogFunction = (logFunction) => {
    logFunction();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger)

//----------------------------------------------------------------------------

const btn2Tag = document.getElementById("btn2");

const getGeoInfo = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        console.log(`The latitude is ${lat.toFixed(2)}`)
        console.log(`The longitude is ${long.toFixed(2)}`)
      });
}

btn2Tag.addEventListener("click", ()=> getGeoInfo);

//----------------------------------------------------------------------------


const runAfterDelay = (delay, callback) => {
    setTimeout(()=> {callback()}, delay*1000)
}

runAfterDelay(4, ()=> {
    console.log("runAfterDelay should be logged after 4 seconds")
})
runAfterDelay(5, ()=> {
    console.log("runAfterDelay should be logged after 5 seconds")
})

//----------------------------------------------------------------------------

const bodyTag = document.body;

bodyTag.addEventListener("dblclick", ()=>{
    alert("You have double clicked")
    // console.log("You have double clicked")
})

//----------------------------------------------------------------------------

const logFunnyJoke = () => {
    console.log("I invented a new word! Plagiarism!")
}
const logBadJoke = () => {
    console.log("What did the fish say when he swam into a wall? DAM!")
}

const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
    shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
}

jokeCreator(true, logFunnyJoke, logBadJoke)
jokeCreator(false, logFunnyJoke, logBadJoke)

//----------------------------------------------------------------------------

