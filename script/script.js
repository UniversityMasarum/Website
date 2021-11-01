const progressBar = document.getElementsByClassName('progress-bar')[0]
const youtubeKey = 'AIzaSyCEnS6XaXIF1Af9uRrLjUeW2VKCPlE0Qq0';
const youtubeUser = 'UCIp1LHAf4prr4pujdVFRG4A';
const subCount = document.getElementById('subCount');
const delay = 1000; // 10

let getSubscribers = () => {
    const computedStyle = getComputedStyle(progressBar)
    canbe = "nothing"
    //const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            //subCount.innerHTML = data["items"][0].statistics.subscriberCount;
            progressBar.style.setProperty('--width', data["items"][0].statistics.subscriberCount);
            progressBar.dataset.label = data["items"][0].statistics.subscriberCount + " Subscribers";

            switch (true){
                case (data["items"][0].statistics.subscriberCount<=25):
                {
                    canbe='Soccerteam';
                    break;
                }
                case (data["items"][0].statistics.subscriberCount<=50):
                {
                    canbe='Soccerteam';
                    break;
                }

                case (data["items"][0].statistics.subscriberCount<=75):
                {
                    canbe='footballteam';
                    break;
                }
                case (data["items"][0].statistics.subscriberCount<=100):
                {
                    canbe='Soccerteam';
                    break;
                }
            }
            document.getElementById('subval').innerHTML = 'soccer'; //The mobile version
        })
}
setInterval(() => {
    getSubscribers();
}, delay);


document.getElementById('subval').innerHTML = 'friends'; //The mobile version