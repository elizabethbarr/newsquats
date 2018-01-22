var alexa = require('alexa-app');
var app = new alexa.app();
app.launch(function(request, response){
 response.say("Welcome to Squats, 30 days to a superior rear. Which day of your 30 day transformation are you on?");
 response.shouldEndSession(false);
})
var exitFunction = function(request, response) {
  var speechOutput = 'Great job today! Lets work out again tomorrow!';
  response.say(speechOutput);
};

app.intent('AMAZON.StopIntent', exitFunction);
app.intent('AMAZON.HelpIntent', function(request, response) {
  var speechOutput = 'OK, to get your daily workout, just say the day number of the routine you would like to hear, or if you need help say Help. To cancel say cancel and to end the skill say Stop. What would you like to do?';

  response.say(speechOutput);
  response.shouldEndSession(false);
});
app.intent("AMAZON.CancelIntent", {
    "slots": {},
    "utterances": []
  }, function(request, response) {
    var cancelOutput = "No problem. Request cancelled.";
    response.say(cancelOutput);
  }
);
app.intent('CatchAllIntent', function(request, response) {
  var speechOutput = 'I did not understand your response, could you please ask me for help, or let me know what day number of the routine you would like to hear?';

  response.say(speechOutput);
  response.shouldEndSession(false);
});
app.intent('DayNumberOne',
 {
  "slots": {},
  "utterances": [
   "day number one",
  ]
 },
 function (request, response) {
  generate_suggestions_dayone(response);
  return;
 }
);
function generate_suggestions_dayone(response){
 var dayone = ["Day 1: Basic Squat. To do a basic squat, start in a standing position, with your feet shoulder width apart and your hands clasped in front of your chest. Your elbows should be slightly bent. Brace your abs, push your hips back and bend your knees, lowering the body into a squat. Your seat should be lower than your knees. Pause at the bottom and then push back up to the starting position. Lets do 15 reps.<break time='2s'/> 9,<break time='2s'/> 8,<break time='2s'/>7, <break time='2s'/>6,<break time='2s'/>5,<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>"
 ];
var rand = dayone[Math.floor(Math.random() * dayone.length)];
response.say("Your routine " + dayone + " , Great start to a rounder rear and tighter thighs. Document your transformation with photos and video. Hashtag it Alexa Squats and cheer each other on. See you tomorrow.");
 response.send();
return ;
}
app.intent('DayNumberTwo',
 {
  "slots": {},
  "utterances": [
   "day number two",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwo(response);
  return;
 }
);
function generate_suggestions_daytwo(response){
 var daytwo = ["Day 2: Glute Kickback. Start by standing with your legs shoulder width apart. Sit back into a squat, keeping your weight in your heels, and clasp your fists together in front of your chest. Lift your left leg straight behind you, keeping your hips square. Return to the squat position and repeat on the other side. That's one rep. Lets do 20 reps.<break time='2s'/> 9,<break time='2s'/> 8,<break time='2s'/>7, <break time='2s'/>6,<break time='2s'/>5,<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>"
 ];
var rand = daytwo[Math.floor(Math.random() * daytwo.length)];
response.say("Your routine " + daytwo + " , Day 2 is in the bag. Great Squats today.");
 response.send();
return ;
}
app.intent('DayNumberThree',
 {
  "slots": {},
  "utterances": [
   "day number three",
  ]
 },
 function (request, response) {
  generate_suggestions_daythree(response);
  return;
 }
);
function generate_suggestions_daythree(response){
 var daythree = ["Day 3. We're doing two types of squats today, the Basic Squat and Kickback Squat. For the Basic Squat, start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent. Pull in your abs, push your hips back and bend your knees, lowering the body into a squat. Pause at the bottom, then push back up to the starting position. Do 15 reps.<break time='2s'/> 9,<break time='2s'/> 8,<break time='2s'/>7, <break time='2s'/>6,<break time='2s'/>5,<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/> Great! Now for the Kickback Squat. Stand with your legs shoulder-width apart, sit back into a squat, keeping your weight in your heels, and clasp your fists together in front of your chest. Now, lift your left leg straight behind you, keeping your hips square. Return to the squat position and repeat on the other side. That's one rep. Lets do 15 reps."
 ];
var rand = daythree[Math.floor(Math.random() * daythree.length)];
response.say("Your routine " + daythree + " , Nice job on Day 3 of Squats. Post those photos and video! Hashtag Alexa Squats. See you tomorrow!");
 response.send();
return ;
}
app.intent('DayNumberFour',
 {
  "slots": {},
  "utterances": [
   "day number four",
  ]
 },
 function (request, response) {
  generate_suggestions_dayfour(response);
  return;
 }
);
function generate_suggestions_dayfour(response){
 var dayfour = ["Day 4, Basic Squat and the Kickback Squat. For the basic squat, start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent. Brace your abs, push your hips back and bend your knees, lowering the body into a squat. Pause at the bottom, then push back up to the starting position. Let's do 20 reps.<break time='2s'/> 9,<break time='2s'/> 8,<break time='2s'/>7, <break time='2s'/>6,<break time='2s'/>5,<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/> And now for the Kickback Squat, stand with your legs shoulder-width apart, sit back into a squat, keeping your weight in your heels, and clasp your fists together in front of your chest. Lift your left leg straight behind you, keeping your hips square. Return to the squat position and repeat on the other side. That's one rep. Lets do 20 reps."
 ];
var rand = dayfour[Math.floor(Math.random() * dayfour.length)];
response.say("Your routine " + dayfour + " , You made it to Day 4 of Squats. Be sure to allow yourself a healthy treat today. See you tomorrow!");
 response.send();
return ;
}
app.intent('DayNumberFive',
 {
  "slots": {},
  "utterances": [
   "day number five",
  ]
 },
 function (request, response) {
  generate_suggestions_dayfive(response);
  return;
 }
);
function generate_suggestions_dayfive(response){
 var dayfive = ["Day 5 of Squats is a rest day. A rest day for your glutes and thighs, that is. Lets not waste this day. Get on the floor in a push-up position, with your hands flat on the floor, elbows extended, and up on your toes. Hold the plank for 30 seconds keeping your head, shoulders and hips in a straight line."
 ];
var rand = dayfive[Math.floor(Math.random() * dayfive.length)];
response.say("Your routine " + dayfive + " , Hope we gave your work out a shake up. Back at tomorrow with Squats.");
 response.send();
return ;
}
app.intent('DayNumberSix',
 {
  "slots": {},
  "utterances": [
   "day number six",
  ]
 },
 function (request, response) {
  generate_suggestions_daysix(response);
  return;
 }
);
function generate_suggestions_daysix(response){
 var daysix = ["Day 6 is the Sumo Squat. Stand with your feet wider than shoulder width apart and toes slightly turned out. Place your hands on your hips. Push hips back and squat down, keeping chest up and knees out. Then stand back up to starting position. That's one rep. Lets do 15 reps.<break time='2s'/> 9,<break time='2s'/> 8,<break time='2s'/>7, <break time='2s'/>6,<break time='2s'/>5,<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>"
 ];
var rand = daysix[Math.floor(Math.random() * daysix.length)];
response.say("Your routine " + daysix + " , Nice work today. Love seeing those photos and videos. Be sure to hastag them Alexa Squats. See you tomorrow for more Squats!");
 response.send();
return ;
}
app.intent('DayNumberSeven',
 {
  "slots": {},
  "utterances": [
   "day number seven",
  ]
 },
 function (request, response) {
  generate_suggestions_dayseven(response);
  return;
 }
);
function generate_suggestions_dayseven(response){
 var dayseven = ["Day 7 is the Reaching Sumo Squat. Begin by standing with your feet wider than hip-width apart, knees and toes turned out slightly. Lower into a deep squat, pushing your hips back and reaching your fingertips down to the floor in front of your body, keeping your spine naturally straight, your chest lifted, and your eyes focused ahead. Now, push back to standing position and then extend arms straight overhead, keeping them close to your ears as you raise up on your tiptoes. Return to start. That's one rep. Lets do 20 reps.<break time='2s'/> 9,<break time='2s'/> 8,<break time='2s'/>7, <break time='2s'/>6,<break time='2s'/>5,<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>"
 ];
var rand = dayseven[Math.floor(Math.random() * dayseven.length)];
response.say("Your routine " + dayseven + " , You just did a full week of Squats. Super proud of you!");
 response.send();
return ;
}
app.intent('DayNumberEight',
 {
  "slots": {},
  "utterances": [
   "day number eight",
  ]
 },
 function (request, response) {
  generate_suggestions_dayeight(response);
  return;
 }
);
function generate_suggestions_dayeight(response){
 var dayeight = ["Day 8 is the Sumo Squat and the Reaching Sumo Squat. For the Sumo Squat, stand with your feet wider than shoulder-width apart and toes slightly turned out. Place your hands on your hips. Push your hips back and squat down, keeping your chest up and your knees out. Then stand back up to starting position. That's one rep. Let's do 15 reps.<break time='2s'/> 9,<break time='2s'/> 8,<break time='2s'/>7, <break time='2s'/>6,<break time='2s'/>5,<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/> Awesome. Now, for the Reaching Sumo Squat, stand with your feet wider than hip width apart, knees and toes turned out slightly. Lower into a deep squat, pushing your hips back and reaching your fingertips to the floor in front of your body, keeping your spine naturally straight, your chest lifted, and your eyes focused ahead. Push back to standing position, then extend both arms straight overhead, keeping them close to your ears as you raise up on your tiptoes. Return to start. That's one rep. Let's do 15 reps."
 ];
var rand = dayeight[Math.floor(Math.random() * dayeight.length)];
response.say("Your routine " + dayeight + " , Nice job on Day 8 of Squats. See you tomorrow!");
 response.send();
return ;
}
app.intent('DayNumberNine',
 {
  "slots": {},
  "utterances": [
   "day number nine",
  ]
 },
 function (request, response) {
  generate_suggestions_daynine(response);
  return;
 }
);
function generate_suggestions_daynine(response){
 var daynine = ["Day 9 is two types of squats again: the Sumo Squat and the Reaching Sumo Squat. For the Sumo Squat, stand with feet wider than shoulder-width apart and toes slightly turned out. Place your hands on your hips. Now, push hips back and squat down, keeping your chest up and your knees out. Then stand back up to starting position. That's one rep. Do 20 reps. <break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/> For the Reaching Sumo Squat, stand with feet wider than hip width apart, knees and toes turned out slightly. Lower into a deep squat, pushing your hips back and reaching your fingertips to the floor in front of your body, keeping your spine naturally straight, your chest lifted, and your eyes focused ahead. Push back to standing position, then extend your arms straight overhead, keeping them close to your ears as you raise up on your tiptoes. Return to start. That's one rep. Do 20 reps."
 ];
var rand = daynine[Math.floor(Math.random() * daynine.length)];
response.say("Your routine " + daynine + " , That was a tough one. Great job today with Squats.");
 response.send();
return ;
}
app.intent('DayNumberTen',
 {
  "slots": {},
  "utterances": [
   "day number ten",
  ]
 },
 function (request, response) {
  generate_suggestions_dayten(response);
  return;
 }
);
function generate_suggestions_dayten(response){
 var dayten = ["Day 10, Rest Day. We're going to rest those glutes and quads, but we're not going to pass up and opportunity to work out. Today we plank! Get on the floor in a push-up position, with your hands flat on the floor, elbows extended, and up on those toes. Your head, shoulders, and hips in a straight line. Hold a plank for 60 seconds."
 ];
var rand = dayten[Math.floor(Math.random() * dayten.length)];
response.say("Your routine " + dayten + " , Did we get those abs burning? But your glutes are jealous. We'll see you tomorrow for Squats.");
 response.send();
return ;
}
app.intent('DayNumberEleven',
 {
  "slots": {},
  "utterances": [
   "day number eleven",
  ]
 },
 function (request, response) {
  generate_suggestions_dayeleven(response);
  return;
 }
);
function generate_suggestions_dayeleven(response){
 var dayeleven = ["Day 11: Oblique Squat. To begin, place your hands behind your head, elbows pointing out. Stand with your feet shoulder width apart and descend into a squat position. Now press back into standing position and lift your left thigh higher than hip level while crunching to the side so your left elbow taps your left knee. Return to starting position, and repeat on the other side. That's one rep. Do 15 reps.<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>"
 ];
var rand = dayeleven[Math.floor(Math.random() * dayeleven.length)];
response.say("Your routine " + dayeleven + " , Good job squatting today. Hashtag Alexa Squats. See you tomorrow!");
 response.send();
return ;
}
app.intent('DayNumberTwelve',
 {
  "slots": {},
  "utterances": [
   "day number twelve",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwelve(response);
  return;
 }
);
function generate_suggestions_daytwelve(response){
 var daytwelve = ["Day 12, Jump Squat. To begin, stand with your feet shoulder width apart, hands clasped in front of chest, and descend into a squat position. Now, explosively push upward, jumping as high as you can. Make sure to drive through your heels and not your toes. Upon landing, immediately squat down. That's one rep. Now do 20 reps.<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>"
 ];
var rand = daytwelve[Math.floor(Math.random() * daytwelve.length)];
response.say("Your routine " + daytwelve + " , Nice work. Catch you tomorrow for more Squats.");
 response.send();
return ;
}
app.intent('DayNumberThirteen',
 {
  "slots": {},
  "utterances": [
   "day number thirteen",
  ]
 },
 function (request, response) {
  generate_suggestions_daythirteen(response);
  return;
 }
);
function generate_suggestions_daythirteen(response){
 var daythirteen = ["Day 13: Oblique Squat and Jump Squat. For the Oblique Squat, place your hands behind your head with elbows pointing out. Stand with your feet shoulder width apart and descend into a squat position. Now, press back into a standing position and lift your left thigh higher than hip level while crunching to the side, so your left elbow taps your left knee. Return to start, and repeat on the other side. That's one rep. Do 15 reps.<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/> For the Jump Squat, stand with feet shoulder width apart, hands clasped in front of your chest, and descend into a squat position. Now, explosively push upward, jumping as high as you can. Make sure to drive through your heels and not your toes. Upon landing, immediately squat down. That's one rep. Do 15 reps. Go!"
 ];
var rand = daythirteen[Math.floor(Math.random() * daythirteen.length)];
response.say("Your routine " + daythirteen + " , Another great day. See you and your glutes tomorrow.");
 response.send();
return ;
}
app.intent('DayNumberFourteen',
 {
  "slots": {},
  "utterances": [
   "day number fourteen",
  ]
 },
 function (request, response) {
  generate_suggestions_dayfourteen(response);
  return;
 }
);
function generate_suggestions_dayfourteen(response){
 var dayfourteen = ["Day 14: Oblique Squat and Jump Squat again. For the Oblique Squat, place your hands behind your head with elbows pointing out. Stand with your feet shoulder width apart and descend into a squat position. Now, press back into a standing position and lift your left thigh higher than hip level while crunching to the side, so your left elbow taps your left knee. Return to start, and repeat on the other side. That's one rep. Do 20 reps.<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/> For the Jump Squat, stand with feet shoulder width apart, hands clasped in front of your chest, and descend into a squat position. Now, explosively push upward, jumping as high as you can. Make sure to drive through your heels and not your toes. Upon landing, immediately squat down. That's one rep. Do 20 reps."
 ];
var rand = dayfourteen[Math.floor(Math.random() * dayfourteen.length)];
response.say("Your routine " + dayfourteen + " , Whew! Super effort today. You're doing awesome. See you tomorrow for Plank Day.");
 response.send();
return ;
}
app.intent('DayNumberFifteen',
 {
  "slots": {},
  "utterances": [
   "day number fifteen",
  ]
 },
 function (request, response) {
  generate_suggestions_dayfifteen(response);
  return;
 }
);
function generate_suggestions_dayfifteen(response){
 var dayfifteen = ["Day 15, Rest Day. I mean Plank Day. We're halfway on our Squats Journey. While we let our glutes and quads rest, let's fire up that core. Get into plank position but with forearms on the floor. Head, shoulders, and hips in a straight line. Let's hold for 30 seconds."
 ];
var rand = dayfifteen[Math.floor(Math.random() * dayfifteen.length)];
response.say("Your routine " + dayfifteen + " , Squats are tough, but planking's no joke either. Nice job and we'll see you tomorrow to tackle the second half of our Squats challenge.");
 response.send();
return ;
}
app.intent('DayNumberSixteen',
 {
  "slots": {},
  "utterances": [
   "day number sixteen",
  ]
 },
 function (request, response) {
  generate_suggestions_daysixteen(response);
  return;
 }
);
function generate_suggestions_daysixteen(response){
 var daysixteen = ["Day 16: Narrow Squat. To begin, start in standing position, hands clasped in front of your chest, feet together. Now, lower into a squat until your thighs are parallel to floor. Hold, and then return to start That's one rep. Let's do 15 reps.<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>"
 ];
var rand = daysixteen[Math.floor(Math.random() * daysixteen.length)];
response.say("Your routine " + daysixteen + " , Good work today. Be sure to show some love to others on their Squats journey. Look for those photos and videos hashtagged Alexa Squats. See you tomorrow!");
 response.send();
return ;
}
app.intent('DayNumberSeventeen',
 {
  "slots": {},
  "utterances": [
   "day number seventeen",
  ]
 },
 function (request, response) {
  generate_suggestions_dayseventeen(response);
  return;
 }
);
function generate_suggestions_dayseventeen(response){
 var dayseventeen = ["Day 17: Pistol Squat. To begin, stand upright with feet shoulder-width apart. Place the heel of your left foot on the floor slightly in front of you, toes up. Now, raise your left leg in front of your body as you push hips backwards and bend into a squat on the standing leg. If necessary, extend your arms in front of you to assist with balance. Lower your hips as low as possible, keeping your front leg lifted. Push back to start. That's one rep. Do 10 reps.<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>"
 ];
var rand = dayseventeen[Math.floor(Math.random() * dayseventeen.length)];
response.say("Your routine " + dayseventeen + " , Looking good. All this squatting is really paying off. See you tomorrow.");
 response.send();
return ;
}
app.intent('DayNumberEighteen',
 {
  "slots": {},
  "utterances": [
   "day number eighteen",
  ]
 },
 function (request, response) {
  generate_suggestions_dayeighteen(response);
  return;
 }
);
function generate_suggestions_dayeighteen(response){
 var dayeighteen = ["Day 18: Two types of squats today, the Narrow Squat and Pistol Squat. For the Narrow Squat, start in standing position with your hands clasped in front of your chest, feet together. Lower into a squat until thighs are parallel to floor. Hold, then return to start. That's one rep. Do 15 reps.<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>For the Pistol Squat, stand upright with feet shoulder-width apart. Place the heel of your left foot on the floor slightly in front of you, toes up. Now, raise your left leg in front of your body as you push your hips backwards and bend into a squat on the standing leg. If you need help balancing, extend your arms in front of you. Lower your hips as low as possible, keeping your front leg lifted. Push back to start. That's one rep. Do 15 reps."
 ];
var rand = dayeighteen[Math.floor(Math.random() * dayeighteen.length)];
response.say("Your routine " + dayeighteen + " , You must be feeling like a rock star. Great effort today. Squat you tomorrow.");
 response.send();
return ;
}
app.intent('DayNumberNineteen',
 {
  "slots": {},
  "utterances": [
   "day number nineteen",
  ]
 },
 function (request, response) {
  generate_suggestions_daynineteen(response);
  return;
 }
);
function generate_suggestions_daynineteen(response){
 var daynineteen = ["Day 19: the Narrow Squat and Pistol Squat again. For the Narrow Squat, start in standing position with your hands clasped in front of your chest, feet together. Lower into a squat until thighs are parallel to floor. Hold, then return to start. That's one rep. Do 15 reps.<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>For the Pistol Squat, stand upright with feet shoulder-width apart. Place the heel of your left foot on the floor slightly in front of you, toes up. Now, raise your left leg in front of your body as you push your hips backwards and bend into a squat on the standing leg. If you need help balancing, extend your arms in front of you. Lower your hips as low as possible, keeping your front leg lifted. Push back to start. That's one rep. Do 20 reps."
 ];
var rand = daynineteen[Math.floor(Math.random() * daynineteen.length)];
response.say("Your routine " + daynineteen + " , Keep up the fantastic work. Hashtag Alexa Squats. Tomorrow we give the glutes and quads a rest.");
 response.send();
return ;
}
app.intent('DayNumberTwenty',
 {
  "slots": {},
  "utterances": [
   "day number twenty",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwenty(response);
  return;
 }
);
function generate_suggestions_daytwenty(response){
 var daytwenty = ["Day 20: Rest Day for the glutes and quads. No squatting today. We're planking for a full minute, though. Get into plank position with forearms on the floor, up on those toes. We're going to hold for 60 seconds total. Be sure to keep your head, shoulders, and hips in a straight line. After 30 seconds of static planking, raise your left leg in line with your body and hold for five. Lower the left leg and raise your right leg and hold for five. Repeat until your 60 seconds is complete."
 ];
var rand = daytwenty[Math.floor(Math.random() * daytwenty.length)];
response.say("Your routine " + daytwenty + " , I'm not sure what's tougher, Squats or planks. You did great today. Only 10 days left! See you tomorrow.");
 response.send();
return ;
}
app.intent('DayNumberTwentyOne',
 {
  "slots": {},
  "utterances": [
   "day number twenty one",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentyone(response);
  return;
 }
);
function generate_suggestions_daytwentyone(response){
 var daytwentyone = ["Day 21: Curtsy Squat. To begin, stand with your feet hip-width apart and elbows bent, hands clasped in front of your chest. Lower into a squat, with your thighs parallel to floor. Next, step your right foot back and to the left, and squat an inch lower. Return to the starting position. Repeat on the opposite side. That's one rep. Do 20 reps.<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>"
 ];
var rand = daytwentyone[Math.floor(Math.random() * daytwentyone.length)];
response.say("Your routine " + daytwentyone + " , You've been squatting for three weeks – congratulations! It typically takes three weeks for a habit to take hold. You're on your way to a new, improved you. See you tomorrow!");
 response.send();
return ;
}
app.intent('DayNumberTwentyTwo',
 {
  "slots": {},
  "utterances": [
   "day number twenty two",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentytwo(response);
  return;
 }
);
function generate_suggestions_daytwentytwo(response){
 var daytwentytwo = ["Day 22: the Split Squat. To begin, stagger your stance, with your front foot 2 to 4 feet in front of rear foot. Stay on the toes of the rear foot. Now, lower your hips until your front thigh is at least parallel to the floor. Push through the front leg's heel, and drive the your hips and knees upward, to return to the starting position. Repeat on the other side. That's one rep. Do 15 reps.<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>"
 ];
var rand = daytwentytwo[Math.floor(Math.random() * daytwentytwo.length)];
response.say("Your routine " + daytwentytwo + " , Awesome job today. Back at it tomorrow!");
 response.send();
return ;
}
app.intent('DayNumberTwentyThree',
 {
  "slots": {},
  "utterances": [
   "day number twenty three",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentythree(response);
  return;
 }
);
function generate_suggestions_daytwentythree(response){
 var daytwentythree = ["Day 23: two types of squats, the Curtsy Squat and the Split Squat. For the Curtsy Squat, stand with your feet hip width apart and elbows bent, your hands clasped in front of your chest. Lower into a squat, with your thighs parallel to floor. Step your right foot back and to the left, and squat an inch lower. Return to starting position. Repeat on the opposite side. That's one rep. Do 20 reps.<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>For the Split Squat, stagger your stance, with your front foot 2 to 4 feet in front of your rear foot. Stay on the toes of rear foot and lower hips until your front thigh is at least parallel to the floor. Push through the front leg's heel, and drive the hips and knees upward to return to the starting position. Repeat on the other side. That's one rep. Do 20 reps."
 ];
var rand = daytwentythree[Math.floor(Math.random() * daytwentythree.length)];
response.say("Your routine " + daytwentythree + " , Your hard work is inspiring the rest of us. Show it off with photos and video hashtagged Alexa Squats!");
 response.send();
return ;
}
app.intent('DayNumberTwentyFour',
 {
  "slots": {},
  "utterances": [
   "day number twenty four",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentyfour(response);
  return;
 }
);
function generate_suggestions_daytwentyfour(response){
 var daytwentyfour = ["Day 24: the Curtsy Squat and Split Squat again. two types of squats, the Curtsy Squat and the Split Squat. For the Curtsy Squat, stand with your feet hip width apart and elbows bent, your hands clasped in front of your chest. Lower into a squat, with your thighs parallel to floor. Step your right foot back and to the left, and squat an inch lower. Return to starting position. Repeat on the opposite side. That's one rep. Do 30 reps.<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>For the Split Squat, stagger your stance, with your front foot 2 to 4 feet in front of your rear foot. Stay on the toes of rear foot and lower hips until your front thigh is at least parallel to the floor. Push through the front leg's heel, and drive the hips and knees upward to return to the starting position. Repeat on other side. That's one rep. Do 30 reps."
 ];
var rand = daytwentyfour[Math.floor(Math.random() * daytwentyfour.length)];
response.say("Your routine " + daytwentyfour + " , We at Squats are super proud of your effort. Tomorrow's your last plank day, and then we're in the home stretch.");
 response.send();
return ;
}
app.intent('DayNumberTwentyFive',
 {
  "slots": {},
  "utterances": [
   "day number twenty five",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentyfive(response);
  return;
 }
);
function generate_suggestions_daytwentyfive(response){
 var daytwentyfive = ["Day 25: Your last Squats rest day. We've done a lot of glute and quad work. Let's allow those muscles to recover while we plank for a killer 90 seconds. Get into a plank position with your forearms on the floor, up on your toes. We're going to hold for 90 seconds total. After 30 seconds of static planking, raise your left leg in line with your body and hold for five. Lower your left leg and raise your right leg and hold for five. Repeat until you hit the 60 second mark. Go back to your starting plank position and hold for 15 seconds. For your last 15 seconds, with your feet together, push back through your heels and come forward a bit. Keeping your head, shoulders and hips in line, push back through your heels until your 90 seconds is done. Ready? Let's go!"
 ];
var rand = daytwentyfive[Math.floor(Math.random() * daytwentyfive.length)];
response.say("Your routine " + daytwentyfive + " , It's all squats from here out. Let's finish strong!");
 response.send();
return ;
}
app.intent('DayNumberTwentySix',
 {
  "slots": {},
  "utterances": [
   "day number twenty six",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentysix(response);
  return;
 }
);
function generate_suggestions_daytwentysix(response){
 var daytwentysix = ["Day 26: Isometric Squat. To begin, stand with your feet hip width apart and arms by your sides. Squat, clasping your hands in front of your chest, elbows bent by your sides. Staying in the squat, extend your left leg out to the side and tap your toe to the floor. Return to the starting position, then repeat on the opposite side. That's one rep. Do 10 reps.<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>"
 ];
var rand = daytwentysix[Math.floor(Math.random() * daytwentysix.length)];
response.say("Your routine " + daytwentysix + " , There are four more days to your Squats 30 Day challenge. You got this!");
 response.send();
return ;
}
app.intent('DayNumberTwentySeven',
 {
  "slots": {},
  "utterances": [
   "day number twenty seven",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentyseven(response);
  return;
 }
);
function generate_suggestions_(response){
 var daytwentyseven = ["Day 27: the Pop Squat. To begin, stand with feet wider than shoulder-width apart and toes slightly turned out. Clasp your hands in front of your chest. Now, explosively push off your feet, bringing them together as you jump into the air, arms extended at an angle behind your hips. Land back in the squat position. That's one rep. Do 30 reps.<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>"
 ];
var rand = daytwentyseven[Math.floor(Math.random() * daytwentyseven.length)];
response.say("Your routine " + daytwentyseven + " , The end is in sight. You're doing awesome. Three more days left.");
 response.send();
return ;
}
app.intent('DayNumberTwentyEight',
 {
  "slots": {},
  "utterances": [
   "day number twenty eight",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentyeight(response);
  return;
 }
);
function generate_suggestions_daytwentyeight(response){
 var daytwentyeight = ["Day 28: two types of squats, the Isometric Squat and the Pop Squat. For the Isometric Squat, stand with feet hip-width apart and your arms by your sides. Squat, clasping your hands in front of your chest, elbows bent by your sides. Staying in the squat, extend your left leg out to the side and tap your toe to the floor, Return to starting position, then repeat on the opposite side. That's one rep. Do 15 reps on each leg.<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>For the Pop Squat, stand with feet wider than shoulder width apart and toes slightly turned out. Clasp your hands in front of your chest. Now, explosively push off of your feet, bringing them together as you jump into the air, arms extended at an angle behind your hips. Land back in the squat position. That's one rep. Do 20 reps."
 ];
var rand = daytwentyeight[Math.floor(Math.random() * daytwentyeight.length)];
response.say("Your routine " + daytwentyeight + " , Two days to go, you rock star, you. Fantastic work.");
 response.send();
return ;
}
app.intent('DayNumberTwentyNine',
 {
  "slots": {},
  "utterances": [
   "day number twenty nine",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentynine(response);
  return;
 }
);
function generate_suggestions_daytwentynine(response){
 var daytwentynine = ["Day 29, Isometric Squat and Pop Squat again. For the Isometric Squat, stand with feet hip-width apart and your arms by your sides. Squat, clasping your hands in front of your chest, elbows bent by your sides. Staying in the squat, extend your left leg out to the side and tap your toe to the floor, Return to starting position, then repeat on the opposite side. That's one rep. Do 20 reps on each leg.<break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>For the Pop Squat, stand with feet wider than shoulder width apart and toes slightly turned out. Clasp your hands in front of your chest. Now, explosively push off of your feet, bringing them together as you jump into the air, arms extended at an angle behind your hips. Land back in the squat position. That's one rep. Do 30 reps."
 ];
var rand = daytwentynine[Math.floor(Math.random() * daytwentynine.length)];
response.say("Your routine " + daytwentynine + " , Only one more day and you're done with your 30-Day Squats Challenge. Your glutes and your quads thank you and we here at Squats stand in awe!");
 response.send();
return ;
}
app.intent('DayNumberThirty',
 {
  "slots": {},
  "utterances": [
   "day number thirty",
  ]
 },
 function (request, response) {
  generate_suggestions_daythirty(response);
  return;
 }
);
function generate_suggestions_daythirty(response){
 var daythirty = ["Day 30, Superset Challenge. Do 2 sets of 5 reps of each move. You got this! Ready? Pistol Squat first. Stand upright with feet shoulder width apart. Place heel of left foot on the floor slightly in front of you, toes up. Now, raise your left leg in front of your body as you push your hips backwards and bend into a squat on the standing leg. If necessary, extend arms in front of you to assist with balance. Lower hips as low as possible, keeping your front leg lifted. Push back to start. That's one rep. Do 2 sets of 5 reps. <break time='2s'/>4,<break time='2s'/>3,<break time='2s'/>2,<break time='2s'/>1,<break time='2s'/>Second, the Curtsy Squat. To begin, stand with feet hip-width apart and elbows bent, hands clasped in front of your chest. Lower into a squat, thighs parallel to floor. Now, step your right foot back and to the left, and squat an inch lower. Return to starting position. Repeat on the opposite side. That's one rep. Do 2 sets of 5 reps. Third, the Isometric Squat. To begin, stand with your feet hip width apart and arms by your sides. Squat, clasping your hands in front of your chest, elbows bent by your sides. Staying in the squat, extend your left leg out to the side and tap your toe to the floor. Return to the starting position, then repeat on the opposite side. That's one rep. Do 2 sets of 5 reps. Fourth, the Pop Squat, stand with feet wider than shoulder width apart and toes slightly turned out. Clasp your hands in front of your chest. Now, explosively push off of your feet, bringing them together as you jump into the air, arms extended at an angle behind your hips. Land back in the squat position. That's one rep. Do 2 sets of 5 reps."
 ];
var rand = daythirty[Math.floor(Math.random() * daythirty.length)];
response.say("Your routine " + daythirty + " , You completed the entire the Squats workout! Give yourself a big hand and be sure to post your after photos and video using with the hastag Alexa Squats! Congratulations on your achievement, your dedication, and your truly superior rear!");
 response.send();
return ;
}
// Connect to lambda
exports.handler = app.lambda();
if ((process.argv.length === 3) && (process.argv[2] === 'schema'))
{
    console.log (app.schema ());
    console.log (app.utterances ());
}