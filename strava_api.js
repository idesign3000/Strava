
const auth_link = "https://www.strava.com/oauth/token"

function getActivites(res){

    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    fetch(activities_link)
        .then((res) => console.log(res.json()))
}

function reAuthorize(){
    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'

        },

        body: JSON.stringify({

            client_id: '130171',
            client_secret: '3dc2804cfb1f308d6362055dbfa875edbc503f79',
            refresh_token: 'b28cde67b701cc5d800b56aa5937e910e92c1656',
            grant_type: 'refresh_token'
        })
    }).then(res => res.json())
        .then(res => getActivites(res))  
}

reAuthorize()