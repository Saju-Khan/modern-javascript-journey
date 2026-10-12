const hasMeeting = true;
const meeting= new Promise((resolve,reject)=>{
    if(!hasMeeting){
        const meetingDelails={
            name : "Technical meeting",
            location :"Google Meet",
            time:"10.00 PM",
        };
        resolve(meetingDelails);
    } else{
        reject(new Error("Meeting already scheduled!"));
    }

});

meeting
        .then((res) => {
            console.log(JSON.stringify(res));
        })
        .catch((err) => {
             console.log(err.message);   
        });

