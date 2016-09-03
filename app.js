/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

// our own code for Slack
app.post('/dogTest', function(req, res) {
  res.status(200).send('woof woof!');
});

app.post('/dogFact', function(req, res) {
  res.status(200).send(getRandomFact());
});


function getRandomFact() {
	arr = [];
	arr.push("1. Is it a duck…or a dog? The Newfoundland breed has a water resistant coat and webbed feet. This dog was originally bred to help haul nets for fishermen and rescuing people at risk of drowning.");

	arr.push("2. It pays to be a lap dog. Three dogs (from First Class cabins!) survived the sinking of the Titanic – two Pomeranians and one Pekingese. Source: Vetstreet");

	arr.push("3. A Beatles hit. It’s rumored that, at the end of the Beatles song, “A Day in the Life,” Paul McCartney recorded an ultrasonic whistle, audible only to dogs, just for his Shetland sheepdog. Source: PBS");

	arr.push("4. Wow, check out those choppers! Puppies have 28 teeth and normal adult dogs have 42. Source: About.com");

	arr.push("5. Chase that tail! Dogs chase their tails for a variety of reasons: curiosity, exercise, anxiety, predatory instinct or, they might have fleas! If your dog is chasing his tail excessively, talk with your vet.");

	arr.push("6. Seeing spots? Or not… Dalmatian puppies are pure white when they are born and develop their spots as they grow older. Source: Vetstreet");

	arr.push("7. Dogs do dream! Dogs and humans have the same type of slow wave sleep (SWS) and rapid eye movement (REM) and during this REM stage dogs can dream. The twitching and paw movements that occur during their sleep are signs that your pet is dreaming. Source: Healthy Pet");

	arr.push("8. No night vision goggles needed! Dogs’ eyes contain a special membrane, called the tapetum lucidum, which allows them to see in the dark. Source: Healthy Pet");

	arr.push("9. Pitter patter. A large breed dog’s resting heart beats between 60 and 100 times per minute, and a small dog breed’s heart beats between 100-140. Comparatively, a resting human heart beats 60-100 times per minute. Sources: About.com and Mayo Clinic");

	arr.push("10. If your dog’s acting funny, get out the umbrella! According to a Petside.com/Associated Press poll, 72% of dog owners believe their dog can detect when stormy weather is on the way.");

	arr.push("11. It’s not a fever…A dog’s normal temperature is between 101 and 102.5 degrees Fahrenheit. How much do you know about dog health? Take our Doggy First Aid Quiz! Source: Web MD");

	arr.push("12. Is something wet? Unlike humans who sweat everywhere, dogs only sweat through the pads of their feet. Source: Healthy Pet");

	arr.push("13. Here’s looking at you. Dogs have three eyelids, an upper lid, a lower lid and the third lid, called a nictitating membrane or “haw,” which helps keep the eye moist and protected. Source: Whole Dog Journal");

	arr.push("14. Americans love dogs! 62% of U.S. households own a pet, which equates to 72.9 million homes. Source: American Pet Products Association");

	arr.push("15. Move over Rover! 45% of dogs sleep in their owner’s bed (we’re pretty sure a large percentage also hog the blankets!). Source: American Pet Products Association");

	arr.push("16. Why are dogs’ noses so wet? Dogs’ noses secrete a thin layer of mucous that helps them absorb scent. They then lick their noses to sample the scent through their mouth. Source: Vetstreet");

	arr.push("17. Yummy! Dogs have about 1,700 taste buds. Humans have approximately 9,000 and cats have around 473. Source: Psychology Today");

	arr.push("18. Watch that plate of cookies! A Dog’s sense of smell is 10,000 – 100,000 times more acute as that of humans. Source: PBS");

	arr.push("19. It’s not so black and white. It’s a myth that dogs only see in black and white. In fact, it’s believed that dogs see primarily in blue, greenish-yellow, yellow and various shades of gray. Source: About.com");

	arr.push("20. Did you hear that? Sound frequency is measured in Hertz (Hz). The higher the Hertz, the higher-pitched the sound. Dogs hear best at 8,000 Hz, while humans hear best at around 2,000 Hz. Source: Whole Dog Journal");

	arr.push("21. Express yourself. Dogs’ ears are extremely expressive. It’s no wonder! There are more than a dozen separate muscles that control a dog’s ear movements. Source: Whole Dog Journal");

	arr.push("22. Growing up. While the Chow Chow dogs are well known for their distinctive blue-black tongues, they’re actually born with pink tongues. They turn blue-black at 8-10 weeks of age. Source: Vetstreet");

	arr.push("23. Why do they do that? When dogs kick after going to the bathroom, they are using the scent glands on their paws to further mark their territory. Source: Healthy Pet");

	arr.push("24. No, it’s not just to make themselves look adorable. Dogs curl up in a ball when they sleep due to an age-old instinct to keep themselves warm and protect their abdomen and vital organs from predators. Source: Vetstreet");

	arr.push("25. Breathe easy. In addition to sweating through their paw pads, dogs pant to cool themselves off. A panting dog can take 300-400 breaths (compared to his regular 30-40) with very little effort. Source: Vetstreet");

	arr.push("26. An adult dog has 42 teeth.");

	arr.push("27. A dog’s sense of smell is more than 1 million times stronger than that of a person.");

	arr.push("28. More than 1 in 3 families in the United States owns a dog.");

	arr.push("29. Spaying or neutering your dog can help prevent certain types of cancer.");

	arr.push("30. If never spayed or neutered, a pair of dogs can produce 66,000 puppies in 6 years.");

	arr.push("31. A dog’s sense of hearing is more than 10 times more accurate than that of a person.");

	arr.push("32. The average dog can run about 19 miles per hour at full speed.");

	arr.push("33. Dogs are mentioned 14 times in the Bible.");

	arr.push("34. A dog’s nose print is one of a kind, very similar to a person’s fingerprint.");

	arr.push("35. The average body temperature for a dog is 101.2.");

	arr.push("36. With an average lifespan of just over 11 years, the typical dog costs $13,500.");

	arr.push("37. The only sweat glands a dog has are between its toes.");

	arr.push("38. Dogs are omnivorous; they need to eat more than just meat.");

	arr.push("39. Dogs have twice as many ear muscles as people.");

	arr.push("40. Dogs will be submissive to anyone they feel is higher up in the pack.");

	arr.push("41. People have been keeping dogs for pets for 12,000 years.");

	arr.push("42. A female dog carries her puppies for about 60 days before they are born.");

	arr.push("43. It is a myth dogs are color blind; they actually see color, just not as vividly as a person.");

	arr.push("44. Obesity is the number-one health problem in dogs.");

	arr.push("45. Seventy percent of people sign their pets name on greeting/holiday cards.");

	return arr[Math.floor(Math.random()*arr.length)];

}