---
title: "Fanfic comparison (Sonnet, Opus, Fable)"
date: 2026-10-03
---

This whole thing started because a year or so ago, I was curious about how models did at generating fanfic. To me, enjoyable fanfic is easier to write than enjoyable original fiction. My bar to enjoy reading fanfic is lower than my bar to enjoy reading original fiction because there’s already something for me to connect to. There are existing characters and worlds for a writer to borrow, and there are common tropes to lean on. I thought that there was a chance models could generate fanfic I wanted to read. On the flip side, I was curious about whether the models would be able to maintain continuity with the existing canon, given their predictive-token nature. 

Though I didn’t document it then, it turned out whatever model I was using at that time could not produce fanfic I wanted to read. I let go of this idea.

With the re-release of Fable, I saw some suggestions that in addition to being a lot better at writing code, it was also better at writing prose. Of course, the prose this was referring to was mostly nonfiction in nature, but I was curious whether there was a change in its ability to produce fanfic. I decided that I might as well record my results.

The prompts I used for this were selected to be fanfic concepts I particularly enjoy, because I knew I would be reading a lot and I wanted to maximize the chances that I enjoyed the reading experience. It also means that at some point in my life I have gone into holes where I read every single fanfic of that concept which looks remotely promising, giving me a decent basis for comparison. The prompts are all a paragraph long and give the model room to make pretty much all decisions. They’re written roughly the way I would prompt a stranger to write me a story. While it’s possible that I could get a model to write me a story I liked better if I specified the plot and tone in detail, that wasn’t what I was interested in. My goal is to see whether the models could produce engaging stories without much external effort.

# What I did

I compared Claude’s Fable 5, Opus 4.8, and Sonnet 5 models for writing fanfic, at medium effort. I tried two different prompts, one for J.K. Rowling’s Harry Potter series, and one for Tamora Pierce’s Circle of Magic series, for the following concepts:

* \[Harry Potter\] Hermione gets sorted into Slytherin instead of Gryffindor  
* \[Circle of Magic\] Tris goes to Lightsbridge

The full prompts are reproduced later.

My initial prompt for each asked for a plot summary and a first chapter. Opus 4.8 was the only model to ask me clarifying questions; to minimize the extra prompting it got, I answered “You pick”. After reading all the outputs, I asked each model for the second chapter of the Harry time travel fanfic, because the first chapters didn’t spend enough time with the main premise. Then I asked all the models for full versions of the fanfic. 

When grading, I went prompt by prompt. I first read the chapter 1 produced by each model casually and scored based on how much I would want to keep reading. I then went back and reread the chapter 1 closely, grading for writing quality and merit as fanfic. Finally, I read the full fanfics and regraded according to the final execution. I didn’t use the plot summaries when grading, since I wouldn’t have them for a real fanfic — they were just generated as a sanity check.

(I also generated a second Harry Potter prompt, where Harry travels back in time, but I didn’t end up having enough motivation to read and grade it.)

## Why this isn’t good science

Obviously, this is an extremely subjective exercise. Even beyond that, there are a few ways this wasn’t an exact comparison:

1. Didn’t use a script to guarantee consistency \-- I did this manually, which led to slight variances in whether the prompts had whitespace or not. At one point, it’s possible I used a hard effort level instead of medium for one of the models.  
2. Not double blind \-- I was aware of which model generated which output while reading. If I were to do this ideally, I would be given these and only told after grading which was written by which model.  
3. Not even equivalent conditions reading each output \-- I skimmed all the chapter 1 \+ plot summaries when I created them, which likely happened with different levels of focus. I also sometimes read stories across multiple days.  
4. The inherent problem with observation \-- As much as I tried to do my casual reading realistically, it was impossible to avoid knowing I was reading for this comparison. I’d be interested in how I would rate these if I read them with human-written stories mixed in.  
5. Artificial length restrictions \-- I asked the model to produce relatively short works (all below 50k) to reduce my reading burden. For Harry Potter time travel fanfics in particular, it’s common for them to be epics exceeding 100k words. It is possible this will make it difficult for the models to produce good stories. On the other hand, if any model responded that it wasn’t able to execute on its vision for the prompt in less than 50k words, I would have to finally admit that it had passed the Turing test for me.

I also did not record the time or cost of each generation, primarily out of laziness, but we’ll say it’s because I didn’t want to include information that wasn’t relevant to what I was evaluating.

I *did* ask models to produce fanfic from a smaller fandom because I was interested in whether that would affect its quality, but to really draw conclusions I would want to try fandoms of a few sizes.

## The necessary disclaimer

In case this exercise seems to condone using models to generate fanfic (or any stories) for dissemination, I would like to clearly state that that is not my intent. I love fanfic, and I love fanfic as a method of human expression. Fanfic is a unique way to engage with a prior work of literature; online fanfic has created communities with their own vocabularies, whose works are in dialogue with each other, who play with characters and language and form with the rapidity inherent to internet communities. Additionally, writing fanfic, getting feedback from reviewers, is how I started writing fiction. I hope that this community continues to persist even as models get better at writing. Even if you do generate stories for personal consumption, please don’t let it replace human-written work.

# The rubric

Here is the full rubric I will be using for first chapters:

Would I read more: 1-10, where 1 \= I wouldn’t continue reading even if I was so bored I was reading ingredients lists for entertainment, 5 \= I would continue reading if I was really in the mood for this prompt, 10 \= I would lose sleep to continue reading

Writing quality: broken into several subcategories. Each one is rated 1-10, where 10 is the highest I’ve seen in a fanfic and 1 is the lowest. Note that this means 5 is not the average among all fanfics—I curate the fanfic I read.

* Prose: this covers writing style, word choice, imagery, rhythm, consistency of tone, development of emotion, etc.  
* Continuity: this specifically looks at continuity with the facts established within the story  
* Character/plot: this assesses how compelling the characters and plot are, as set up by the first chapter

Merit as fanfic: similarly, broken into several subcategories and rated 1-10

* Continuity with canon: this looks at whether the facts established in the fanfic are consistent with what was established in canon or explained as a deliberate deviance. No fanfic does this perfectly, and departures from canon are their own form of expression, so a 10 does not require perfect adherence. Magic system changes in particular are graded at my discretion based on how well they’re executed.  
* Character recognizability: this judges whether characters are recognizable as their canon counterparts. Again, changes to characterization are normal and often deliberate, so a 10 could be given even if a character behaves in ways that the canon character wouldn’t, especially if they adhere to common fanfic tropes.  
* Execution of the prompt: this evaluates how well the chapter identifies the conflicts that arise from the prompt because of the nature of the canon world and society.

After reading a full story, I will give a final score for how much I enjoyed the story, scored the same way as my enjoyment for the first chapter. I will also update my score to reflect the overall character/plot.

Note that the scores for enjoyment are on an absolute scale, while the other scores are relative to other fanfic. This is because my enjoyment is dependent on too many factors to grade it relative to the general body of fanfic I’ve read. However, for comparison, the vast majority of fanfic I’ve read is at least at a 4, and I have lost sleep over fanfic more often than I can count.

# The stories

## Hermione in Slytherin

I used two prompts:

First prompt: Write me a Harry Potter fanfic between 10-50k words where Hermione is sorted into Slytherin instead of Gryffindor. The prejudice and isolation she faces should ultimately set her on a trajectory where she becomes a powerful witch (you can decide whether she's largely feared or well-respected). Despite there being dark moments, the tone should largely be on the humorous side. Before writing, give me a plot summary and first chapter.

Second prompt: Write me the whole thing

### Sonnet

[Read the story](sonnet-hermione-in-slytherin.md)

First chapter:  
Would read more: 6

Prose: 1

* The writing is passable, but rough. Many of the sentences are too long, the sentence structures aren’t varied effectively, and the comparisons are uninspired. The model frequently uses the form “with the x of y” to add color to a description; for example: “Hermione ... removed the Hat with the dignity of someone determined not to let her hands shake in front of witnesses”. This happens 10 times in the first chapter, by my count, and feels like a crutch for most of them. Most importantly, the emotions aren’t developed well. While we can feel some of Hermione’s shock and hurt, she doesn’t spend much time with those emotions, and at one point she explicitly chooses not to dwell on a feeling that I think would have been powerful to explore.

Continuity: 4

* There are a few references to things that haven’t been properly established or aren’t true, but not enough to interfere with my understanding of the story

Character/plot: 5

* I generally like Hermione and sympathize with her dilemma. She’s sorted into Slytherin unexpectedly, nobody claps, her House table shifts away from her, Draco tells her she doesn’t belong. I like that she gets some good retorts in. I also like that the Slytherin prefect offers her some hope by talking about house unity, which leads into her lying in bed, making a plan for how she’s going to handle this.

Continuity with canon: 3

* There are some significant departures from canon. The way the Sorting Hat decides to put Hermione in Slytherin doesn’t make sense. Two of the main things it’s told her are that she’s decided she doesn’t want anything unless she’s proven she deserves it “six times over”, which isn’t a great fit for ambition or cunning, and that going to Slytherin is “braver, in its way, than charging in with your chest out”, which I would expect would make her a better fit for Gryffindor. Additionally, though the Sorting in canon proceeds alphabetically, multiple characters with surnames after Hermione’s are already Sorted by the time she gets to Slytherin. This doesn’t interfere significantly with the story, but I would have liked to see it handled correctly.

Character recognizability: 6

* Hits the right beats for a fanfic Hermione. She’s smart, she’s argumentative, she’s done the assigned reading and then some. She’s a bit too self-assured for higher, but it was fine for my enjoyment of the story. 

Execution of the prompt: 3

* It’s not a particularly unique take on the concept, but it gets the job done. I would have rated it higher if the story had referenced Hermione being aware of Slytherin's anti-Muggleborn reputation before the Sorting, because it’s not clear how she learns about that. (I think it would have been really fun if she hadn’t known their reputation and had to discover it gradually, but that would have been a different story.)

Full:   
Character/plot: 5

* The story has a pretty simple arc, since it only goes through the first year. This means that Hermione doesn’t get to the point of friendship with anyone, simply a growing acceptance, which I liked. The beats that it hits \-- establishing herself as smart, getting advice from Daphne on being softer in the way she corrects people, getting revenge on Draco, gaining acceptance from her House, working with Harry and Ron to solve the mystery of the trapdoor, Draco having to admit his respect for her, and Hermione helping to protect the stone with Harry and Ron \-- are solid choices and laid out pretty well. I didn’t feel like I got to know the characters very well or started really caring about their relationships, but I didn’t need to since it was just the first year.

Overall score: 4

* Overall, while I wouldn’t have continued reading this story by choice, I was able to enjoy it. The way that it gets to each beat is very forced and I never really get to know the characters, but the story is so short that it feels almost like a stylistic choice. With a lot of suspension of disbelief and filling in the emotional gaps myself, I’m able to enjoy it despite the prose and continuity issues. This is a great example of the kind of thing that would be unreadable as original fiction, but that I can enjoy as fanfiction.

### Opus

[Read the story](opus-hermione-in-slytherin.md)

First chapter:  
Would read more: 5

Prose: 3

* The writing is fine from a technical perspective, but it doesn’t flow particularly well. The transitions are basic and there are few passages that catch the ear nicely. There are many comparisons that either don’t make sense or are used as a crutch to describe a non-POV’s character’s emotions. The POV shifts between characters are sometimes awkward. Most importantly, the writing never helps us actually feel the emotions being referenced.

Continuity: 1

* Major continuity errors. The Sorting clearly proceeds alphabetically, but Draco Malfoy is explicitly sorted before Hermione, and Harry Potter and Ron Weasley are both implicitly sorted before her. Additionally, in this story Hermione requests Slytherin from the Hat, but she starts out convinced the Hat will sort her into Gryffindor and doesn’t think about her qualms. Accordingly, when she later has a plan to get sorted into Slytherin over Gryffindor, it comes as a surprise. This is a core part of the story and it makes the premise fall flat.

Character/plot: 3

* I’m easily sold by a quippy Hermione, and I’m interested in the idea that she sorts herself into Slytherin because she realizes the danger the Wizarding world poses to her and wants to learn how to handle it early. However, her motivation for being sorted into Slytherin isn’t developed well, and she shows little vulnerability throughout the first chapter.

Continuity with canon: 2

* Hermione chooses Slytherin in this story, which is hard to justify. The story presents three main reasons. One, she’s noticed the students who die are disproportionately Gryffindor. Two, she wants to experience anti-Muggleborn prejudice early on, when it’s only bullying. Three, she thinks she’d be quickly loved and underestimated in Gryffindor. The first two reasons imply Hermione is far more skeptical of the magical world than in canon. This is a fine change to make, but I would want that to be explained as part of the exposition (e.g. telling us that Hermione overhears vitriol against Muggleborns and does some research which makes her realize how much prejudice she’ll face). The assertion that she’d be quickly loved in Gryffindor completely contradicts canon events, and her belief that she would be underestimated there is just confusing. This makes it hard to connect to the premise.

Character recognizability: 6

* While the fanfic’s Hermione isn’t Hermione, it’s true to common Hermione tropes, which often make her more self-assured than she is in canon. I like that Hermione fails to keep a low profile on the train and irrepressibly comments on how the ceiling is enchanted, keeping a flavor of how she is in the books. I wish that she maintained this longer and we watched her grow out of it.

Execution of the prompt: 2

* Hits the basics: Slytherin is hostile to her, the teachers are wary, the other Houses are shocked. However, Hermione is too assured and shuts everyone else up too quickly for there to be a compelling conflict. Additionally, as discussed earlier, Hermione’s reasons for choosing Slytherin don’t make much sense.

Full:   
Character/plot: 1

* The plot and characters didn’t work for me. I never bought the premise that by doing a lot of favors and not expecting anything as payment, Hermione built up a network of people who readily did things for her to discharge their debt. It happened far too easily. For example, the two things we see her do to build a debt with Draco are quietly giving him instructions to correct a potion that was going to blow up and not telling anyone that his father put the diary in Ginny’s cauldron (which in this story, she and Draco both know). Neither of these things plausibly give her leverage over him; Hermione threatens him with no evidence. But they somehow make him her “creature”, “bound to her by a debt so large and so quiet that he had reorganized his entire personality around not thinking about it”. An exploration into Draco’s personal moral struggle could have justified this; the story instead only tells us Draco is too scared to probe further. He’s so impacted that he tells his son in the epilogue to never “get into a debt with a Granger”, though as far as I can tell, he only benefited from their relationship. I didn’t believe the choices the characters made, which meant the whole thing never made sense to me.

Overall score: 2

* Overall, I couldn’t enjoy reading this. Fundamentally, Hermione encounters no real challenges and her relationships with the other characters are shallow. She’s always right, meaning she never has to change her approach. There’s the potential for an interesting moment when she decides that Dumbledore is “perfectly willing to raise children as weapons”, which is presented as a revelation, but in the previous chapters she never trusted Dumbledore, preferring Snape from the start. She even figures out the Horcruxes exist and deduces where they are and somehow realizes that Harry needs to know, getting the information to him through anonymous notes. Nothing goes wrong for her. She doesn’t develop as a character through her friendships, either. Millicent is staunchly loyal the whole time, Snape sees her potential from the start. Admittedly, the story doesn’t have much room to develop her relationships, since it tries to evenly cover all 7 years \+ an epilogue, but the model only used 17k of the 50k words I allotted and could have paced the story differently. 

### Fable

[Read the story](fable-hermione-in-slytherin.md)

First chapter:  
Would read more: 2

Prose: 4

* Some moments of good rhythm and flow. I liked a lot of parts of the dialogue with the Sorting Hat. The conversation passed between both of them effectively, shifting competently between emotions. There were also a few descriptions that used pacing well. Not too many comparisons that were flat out terrible. However, overall the writing didn’t develop emotion or characters effectively and cheapened the moments where Hermione felt something deeply.

Continuity: 3

* A bunch of little continuity problems. Each one is minor and possibly wouldn’t be noticed by someone doing a casual read, but I think they have a non-trivial impact in two places. One, the style relies heavily on foreshadowing, and there are things that are foreshadowed to happen that don’t happen as I expected. Most notably, at the end of the first scene, we’re told that the Hat is later going to observe that her confidence in her two contingency plans is what gets her into trouble, and we don’t really see this in the dialogue, which decreases my engagement with the narration. Two, there are small contradictions that affect my perception of the characterizations. For example, there’s a moment where Hermione makes a quip that doesn’t land and notes that nobody in Slytherin ever laughs. However, someone snorted at something she said earlier. Given that her quip also wasn’t funny, this read as denial, affecting my read of her character.

Character/plot: 1

* By the end of the chapter, I simply didn’t like Hermione. She’s too assured. It’s fun when Hermione is witty in response to bullies, but when Gemma, the prefect welcoming the new Slytherins, reminds them all that they support each other, Hermione still challenges her in a way I find unappealing. Hermione’s interactions with Tracey, who is being set up as her best friend, are also minimal and don’t give us any opportunity to like Hermione. The style doesn’t help; the writing is trying to be clever, which makes Hermione’s narration feel pretentious.

Continuity with canon: 3

* A number of departures from canon, including a strange characterization of Slytherin, people being Sorted who shouldn’t have, and multiple places where Hermione has knowledge that she shouldn’t at this point. These issues didn’t fundamentally affect the story, but they do contribute to making Hermione less sympathetic.

Character recognizability: 4

* Hits a lot of the points, prepared, smart, etc.. However, Hermione doesn’t have any social moments where her desire for friendship comes through, and that’s important to who Hermione is.

Execution of the prompt: 2

* Not liking Hermione is pretty rough. It’s not a 1 because it does set up the basic things it needs to and has a plausible reason for Hermione getting Slytherin, but Hermione starts off too assured.

Full:  
Character/plot: 4

* I actually ended up liking the plot and character journey of the full story. The central mechanic of the story is that Hermione collects information meticulously about her classmates, which Tracey turns into a formal homework-for-information (or favors) operation. I found this acceptably plausible, as the information she collected could be used to reinforce her position, and I liked that Hermione came to understand that not all information should be weaponized. This helped soften her character. My favorite part of the story was the development of Hermione’s friendship with Harry through the Chamber of Secrets investigation. When she learns Harry visited her every week while she was paralyzed, she’s touched, one of the few moments when we really see Hermione’s need for friendship. There’s also a sense that Hermione’s information-collecting has always been in preparation for the coming conflict, and I liked the weight it lent Hermione’s work. Even more because, when the war comes to Hogwarts and she “calls in” their debts, it’s clear that Slytherin stays to fight because of the respect they have for her. These events together created the bones of a satisfying arc. However, everything happened too simply to be believable. I needed to see a lot more happen to believe that Hermione won the respect of people who were so prejudiced against her.

Overall score: 3

* Because the plot improved, I liked the full thing more than the first chapter (despite the fact that “load-bearing” was used 4 times). However, as I indicated, the story didn’t successfully take me on an emotional journey. Aside from Hermione’s second-year friendship with Harry, none of her character development is earned. Hermione doesn’t have to make a mistake to realize that some pieces of information should be kept sacred, she just realizes it. Hermione earns the respect and loyalty of most of her House without much difficulty, largely just by showing her academic prowess. We do see how she wins over some key people, like Pansy by not telling on her after the troll, but for the most part they just feel too easy compared to the prejudice Hermione was working against. Theodore Nott’s first mention is when he stays and fights even though his father is on the other side “in a silver mask”. The closest is Draco, who Hermione wins over by helping with the Vanishing Cabinet and spiriting his mother away, but there isn’t enough time spent developing their rapport. Ultimately, the problem is that nothing goes wrong for more than a paragraph for Hermione. While there are other things worth mentioning, like an over-reliance on framing devices for progression or an over-use of the word “arithmetic”, the most important thing is the lack of real conflict.

## Tris at Lightsbridge

Tris prompt:

Write me a Tris at Lightsbridge fanfic. Tris is a character from Tamora Pierce’s Circle of Magic series. Tamora Pierce had planned a continuation where Tris goes to Lightsbridge to study academic magic, though she is already an accredited ambient mage. Plot should be that she tries to hide her status, but somehow she ends up having to reveal it. Along the way, she should make friends and meet annoying professors. The fanfic should be about \~10k words. Before writing, give me a plot summary and a first chapter.

### Sonnet

[Read the story](sonnet-tris-at-lightsbridge.md)

First chapter:  
Would read more: 2

* Nothing really stands out in the first chapter. Tris goes to Lightsbridge, gets a house, meets her roommate. Her siblings and Niko are mentioned, but there isn’t much interaction there that would draw me into the story. Combined with the prose being bad, there isn’t much reason for me to read.

Prose: 1

* The sentences are way too long, the “with the ... of ...“ construction is used too many times and too poorly, and the characterization is clumsy. 

Continuity: 4

* I noticed one or two issues with continuity, not enough to affect my reading. The story isn’t that long, so there wasn’t much opportunity to pick up continuity issues. Biggest one is that Tris stands in a line to be sorted into a house, but then seems to have already been assigned one, which confused me.

Character/plot: 3

* There’s not much that has been set up here other than the basic facts of the situation. Tris is sufficiently recognizable as Tris that I do like her, but the first chapter hasn’t drawn out my sympathy with her.

Continuity with canon: 1

* A few major things weren’t hit correctly. Tris has a “scroll-case” to certify her status rather than a medallion (this may sound minor, but in canon the medallion is a big deal and it’s mentioned multiple times in the The Circle Opens books). The test cited for her receiving that medallion is incorrect. It doesn’t discuss how the forces in her braids will be handled. The fact that she’s an ambient mage is never discussed. It’s only mentioned once, when she’s called an “ambient-tested mage”, but this terminology isn’t correct and I believe it’s just a conflation with the earlier “aptitude-tested vs prep-schooled” distinction the story invents. These were some of the only Circle of Magic-specific details that the story had the opportunity to discuss, since everything about Lightsbridge is necessarily invented, so getting them wrong was a big problem.

Character recognizability: 2

* Hits the basic notes of Tris. She doesn’t want to stand out, she’s stubborn, she reads. However, both Niko and Daja’s brief characterizations were off, especially Daja, whose care of Little Bear is called “dubious”. It also didn’t capture Tris’s love of magic and weather or her love of reading for reading’s sake, and doesn’t touch on the core motivations she has for going to Lightsbridge.

Execution of the prompt: 3

* Tris is at Lightsbridge and trying to stay incognito, she has some mixed feelings about it but is dedicated to her course of action. That’s all fine. Nothing stands out; I would have liked it better if the slight guilt she does feel had been explored more. It would probably also have been better to skip the “houses” bit and fast forward to meeting one of her teachers. It’s also pretty unrealistic for Tris to do this under her own name; this work has toned down her fame.

Full  
Character/plot: 3

* The magic system only has flavors of the canon system, and is occasionally nonsensical (Tris “used ward theory to keep a hurricane off a fishing fleet”? How would she do that?). Nothing about the actual difficulties of adjusting to academic magic after being an expert in ambient magic is mentioned. The plot is also highly contrived; Tris’s disliked teacher has laid runes that didn’t account for a storm coming from the north, and of course she finds out about this two days before a storm happens to come from the north. The distance between an event between being foreshadowed and the event happening is very small. Everything felt rushed, and Tris’s friends never made an impression on me.

Overall score: 3

* Despite the problems, I ended up enjoying the full thing more than the first chapter. It helps that it wasn’t too long and that the story has a very predictable shape. Therefore, I enjoyed the moment when Tris is right and then gets to be epic, and I like that her disliked teacher afterwards acknowledges that she saved them and they go on to have a good working relationship.

### Opus

[Read the story](opus-tris-at-lightsbridge.md)

First chapter:  
Would read more: 5

Prose: 3

* Decent rhythm. There weren’t many lines that were offensive; there also weren’t many lines that stood out because they were particularly pretty or witty. There were a number of comparisons that didn’t quite make sense or didn’t add much. The story does effectively use description and internal dialogue to convey Tris’s anger at Master Girt for his snobbery towards ambient magic\! But the internal dialogue itself is flat and generic.

Continuity: 4

* This is not a clean-cut continuity error, but I don’t understand what happened with Tris’s registration. When she gives her name to the clerk to check in, he turns “a page in the great ledger by his elbow”, and then looks at her in surprise. Tris requests to speak to the senior registrar, who makes a magical note to seal her file. If Tris was in the file as a mage, I’m surprised that this didn’t get dealt with by the university earlier. Tris also appeared to have anticipated this, so I’m surprised she didn’t sort it out earlier. It’s not *that* important to the story, but it makes her come across as less prepared. There are also some small things that don’t check out, like Chime somehow being able to sit on her shoulder under her cloak without anyone noticing.

Character/plot: 4

* I like the characterizations the story aims for. Tris is prickly, her roommate is friendly, the Mistress Anwyll is competent, Master Girt is an asshole. The specifics of Tris’s interactions with these people don’t always ring true for me, such as how quickly Tris warms to her talkative roommate. I like that Master Girt is introduced in the first chapter so that we see what Tris is up against. The story also foreshadows that there’s something weather-related amiss in Lightsbridge, which could have been good, but this is done pretty clumsily.

Continuity with canon: 2

* Some basic things are wrong. Tris is sixteen; she should be at least eighteen. The description of the wind contained in her braids is consistently off; she feels the wind in her braids react to her emotions, when in canon it’s the air around her that reacts. The story incorrectly states that Tris can’t do any academic magic; if that were true, she wouldn’t be attempting Lightsbridge. She does at least have a medallion, but she keeps it in her trunk—this is plausible, but needs some elaboration, since Niko and her siblings would certainly have noticed and protested.

Character recognizability: 2

* Tris’s characterization hits a few important notes. She wants to be ordinary, she has a temper, she’s introverted, she loves knowledge. However, the story completely fails to mention any of her siblings, which takes away from a core part of her character. It does mention her being a merchant girl, but we don’t see that come through at all in her observations of people. Additionally, when addressing Tris’s motivation for coming to Lightsbridge, the story talks about how she wants the chance to “be a student somewhere”, missing the far more important motivation in canon: Tris wants to be able to earn a living without being asked to kill.

Execution of the prompt: 3

* It sets up the basic conflict, but the details aren’t quite right. Why does Tris bring Chime to class? Why does she enroll in Lightsbridge under her own name? Why hasn’t she prepared in advance when she’s perfectly capable of it?

Full:   
Character/plot: 1

* The plot just isn’t satisfying. Tris reads a note in the margin of an old book that posits that the testing for wards is flawed because it won’t catch that they’re broken until all steps have failed, even if most steps have already failed. It turns out that this is exactly what has been happening to Master Girt’s wards, since another student has been accidentally leaching on their power. Tris tries to warn multiple people about this, including the student and Master Girt, and finally secures an inspection, but the inspection isn’t scheduled until after she knows they will fail. The wards fail, and Tris does some epic feats of magic to keep the university intact. There are a few problems with this. First of all, it’s hard to buy that nobody would have caught such an obvious problem with the monitoring. More importantly, Tris’s epic moment isn’t enjoyable because it doesn’t feel inevitable. Given the evidence Tris had, it’s hard to believe that she didn’t have a way to force an inspection. Even if the university were truly that obtuse, this would have been a good moment to pull out the medallion. I’m just frustrated with Tris the whole time.

Overall score: 2

* The problems with the plot made it impossible for me to enjoy the story. The prose also didn’t help. For example, every time Tris thinks about the note about ward failure (5 times in 6 chapters), it’s called a “marginal note”. This is a small thing, but it highlighted how much the plot turned on Tris happening to read a note in a book, and also just annoyed me. Opinions and motivations in general tended to be distilled into pithy phrases and repeated, flattening the story. By the time Tris saves the day, I simply didn’t care.

### Fable

[Read the story](fable-tris-at-lightsbridge.md)

First chapter:  
Would read more: 3

Prose: 4

* I liked the structure of the chapter. It started with an interesting opening scene (Tris finding a boarding room), then cut to Tris waiting in line to be tested. Exposition was given to us when it made sense, and the story traveled naturally to the end. Despite a few phrases that didn’t quite work for me, I liked that the prose of the opening was vivid. However, the prose never got out of the story’s way. Every other line was doing something clever or dramatic, never letting me slip into the scene. I didn’t get much emotion from the story, when I think Tris would have felt many things keenly (even if she didn’t admit it), including nervousness, homesickness, and hope.

Continuity: 2

* There were a bunch of things that were alluded to in dramatic language that, if I interpreted them each as I did on my first read, contradicted each other. For example, from the first description of Tris’s braids, I thought they were emptied of her mage kit, but then a few sentences later it sounded like the forces were there, but concealed. This made me disengage with the writing, because I no longer trusted that I understood the intent of the imagery. I also didn’t fully follow how academic vs ambient magic was supposed to work in the fanfic, which was key to the main events.

Character/plot: 2

* The other student that’s introduced with Tris, Perin fa Slyme, annoys me immediately, and I’m pretty sure he’s being set up as a key friend for Tris. I don’t like Tris enough to make up for it; her motivation for wanting to go to Lightsbridge isn’t sufficiently developed. It’s mentioned only once, and otherwise I don’t feel how much she wants this. The conflict of the first chapter was a good choice (Tris having to perform tests for academic magic without using her ambient magic), but the magic system didn’t make enough sense for it to be satisfying.

Continuity with canon: 2

* From a structural perspective, the story opening with Tris finding a boarding room for Chime was an effective way to immediately give Tris a problem to solve. However, it doesn’t actually make sense for Tris to bring Chime at all, and even if it did, she would be unlikely to suggest to a new landlady that she could give Chime colored candles and sell the glass Chime produced. This immediately gave me the impression that the story didn’t understand the social environment of Tris’s world, which was reinforced when we’re told Perin fa Slyme is a weaver’s son despite having a “fa” name. Additionally, the magic system didn’t align well with my understanding of the canon magic system. Part of this may be because I generally didn’t understand the magic system laid out in the story, but I felt that important aspects of the academic vs ambient magic distinction weren’t addressed.

Character recognizability: 3

* Tris’s dialogue was generally solid. She was quick to get to the point, practical, and introverted. Similarly, the little we hear from Niko, when he argues with Tris, sounds like him. There are a few places where Tris’s reactions to things don’t make sense for her. I already discussed her interaction with her landlady; I also was surprised that Tris “didn’t mind” the chatter of Perin, who just starts talking to her in line. I could see this happening because she misses her siblings so much, but that wasn’t said. In fact, Tris never expresses missing her siblings or Little Bear, which is one of the most important problems. It’s impossible to imagine Tris at Lightsbridge without thinking about home.

Execution of the prompt: 4

* I really liked that the story started with a way to demonstrate the difficulty that Tris’s skill with ambient magic is going to pose. It’s also clear that her teachers are going to have views about ambient magic that frustrate her. The reason it isn’t higher is because I didn’t think those choices were executed well enough.

Full:   
Character/plot: 3

* This story had three main things that Tris wants to intervene on—one, a half-Trader girl who nobody else talks to, two, a student who Tris realizes is an ambient mage, and three, a drought that is going to be followed by heavy rain. None of them quite made sense in their details (for example, it’s unclear how the ambient mage got identified as someone who should go to Lightsbridge when he doesn’t seem to have academic magic or to know about his ambient magic), but I liked them because they drew out Tris’s sense of responsibility. I felt Tris’s guilt at not being able to do anything. Even though the writing of this was melodramatic, I liked that there was a strong emotion expressed. However, Tris doesn’t do *anything* to try to fix the problems she sees, to the point of negligence. The drought is the worst of these, because the storm is certainly going to hurt people, and because it should be obvious to her that she’ll have to reveal herself to deal with the coming storm otherwise. She also really does a disservice to her friend with ambient magic by letting him fail, and I feel that she should have at least risked writing to Niko (there’s literally a book centered around her learning that it’s her responsibility to find a teacher for untrained mages\!) Given her inaction, I couldn’t be satisfied by the ending when she saves the city, and it really didn’t work for me that everyone rebuilt their relationship with her so easily. 

Overall score: 3

* This story had the most potential to be a rich story. It had a fuller plot than the others, with emotionally compelling threads. I actually remember things about the characters. Unfortunately, no thread was really developed. In addition to the three problems described above, Tris also has a fourth one, that another student is suspicious of her and is investigating her background, which is completely unnecessary to the story. None of these plot lines are given enough space to play out; we just jump between them. I barely get to know any of Tris’s friends, and much of the friendship development is told to us through pithy narration. There aren’t scenes where Tris builds connections with people. This meant that the story just felt disjointed and overcrowded. On top of that, I don’t like how any of the threads played out. Tris’s inaction was frustrating and uncharacteristic, and I didn’t feel that she built a real connection to her friends or grew in any way.  

## Discussion

For all that I had a rubric with multiple axes, the most important metric was how much I enjoyed the stories, and for the Hermione in Slytherin stories, Sonnet’s was my clear favorite. This was not because Sonnet was the best writer; its prose was clearly the worst. However, it had the simplest plot, chronicling only the events of year 1, and it laid out the events in a straightforward way that allowed me to enjoy the story by filling in the gaps myself, a bit like the way I could enjoy reading a plot summary. The plot itself hit the basic notes I wanted, so I was satisfied.

All of the models’ stories had the same pattern: Hermione got Sorted, was immediately rejected by the Slytherin table except for one other girl in her year (Tracey or Millicent), and then gained respect from her House by being useful and winning a few confrontations with people like Draco. In the Opus and Fable versions, the story spanned all seven years, so it culminated in Hermione calling in her network to help win the war. This was the basic thing I was looking for, though I would have liked the stories to do something unique on top of that. However, all of the models’ stories also had the same fundamental problems, that nothing ever went wrong for Hermione and she formed no relationships I cared about. I never felt tension while reading the stories.

This worked the best for Sonnet, because the writing and story were simple. In contrast, while Fable and Opus had paragraphs that flowed better, the style of their stories led me to expect immersive scenes where I connected with the characters, and that didn’t happen. Both stories also contained grand plots where Hermione set things in motion in her first year that paid off in her seventh, involving multiple characters with complex motivations. This would only have worked for me with a more immersive style where I was drawn into the scenes and got to know the characters. The plots of both stories were too disjointed and rushed for that. Opus’s was worse, because there was no way for me to suspend enough belief to be convinced by how its characters behaved. However, I did not enjoy either story.

This meant my ranking for the Hermione in Slytherin stories was Sonnet, Opus, Fable.

I went into the Tris at Lightsbridge stories expecting to end up with a different ranking. The factors that made me enjoy Sonnet the most and Opus the least seemed unique, a consequence of arbitrary plot choices. My hypothesis was that the plot choices would, by random chance, create a different ordering for Tris at Lightsbridge. If anything, I predicted that Sonnet would do worse, because the smaller set of training data would affect Sonnet the most.

In fact, my final ranking was the same. I did find that problems with continuity with canon affected my enjoyment of all three stories more. Sonnet’s story was the worst on this scale by far, with only a tenuous connection to the original source material, but all three stories failed to discuss important points of the magic system that were core to the story.

However, in the end, I found similar patterns for all the stories to the Hermione in Slytherin ones. Sonnet’s story was simple and underdeveloped, with a single plotline. Opus and Fable’s stories were more complex, but failed to execute the complexity well, and Opus’s plot was particularly divorced from reality. This caused me to end up with the same ranking: Sonnet, Opus, Fable.

All together, here were the scores:

**Hermione in Slytherin:**

| Metric | Sonnet | Opus | Fable |
| :---- | :---- | :---- | :---- |
| Would read more |  |  |  |
| Prose |  |  |  |
| Continuity |  |  |  |
| Character/plot |  |  |  |
| Continuity with canon |  |  |  |
| Character recognizability |  |  |  |
| Execution of the prompt |  |  |  |
| Final \- character/plot |  |  |  |
| Final \- overall |  |  |  |

**Tris at Lightsbridge:**

| Metric | Sonnet | Opus | Fable |
| :---- | :---- | :---- | :---- |
| Would read more |  |  |  |
| Prose |  |  |  |
| Continuity |  |  |  |
| Character/plot |  |  |  |
| Continuity with canon |  |  |  |
| Character recognizability |  |  |  |
| Execution of the prompt |  |  |  |
| Final \- character/plot |  |  |  |
| Final \- overall |  |  |  |

## Conclusions

It’s impossible to draw conclusions with confidence based on only two data points, so interpret everything here accordingly.

From the two prompts, it was clear that the technical quality of the writing had improved between models. Sonnet’s prose was bad by any metric, with overly long sentences, wasteful comparisons, and no sense of rhythm. Opus’s stories had fewer of these problems, and Fable’s stories actually had scenes flow into each other. Just looking at pacing and structure, Fable’s writing was pretty good on the level of a chapter.

However, none of the stories were able to develop relationships that I cared about. I never felt real connection between any two characters. This is core to my enjoyment of a story, and I did not see improvement on that front. I also found that while Fable’s first chapters flowed well, its full stories didn’t. In both of its stories, most of the plot was conveyed through narration. The reader never spent much time in a scene, making it impossible to get immersed in the story. Emotional moments were glossed over. The energy and mood of the story rarely varied. The narration was always trying to be clever, which worked well for the first chapter, but got tiring. Overall, in terms of core storytelling mechanics, there was no improvement.

I was surprised that my scores for continuity and continuity with canon didn’t increase more between models, particularly continuity. The scoring obscured some of the improvement I observed, because it was judged based on how continuity errors affected my enjoyment of the story. Many continuity errors are fine and would normally be ignored. I did notice significant improvement in continuity with canon between Sonnet and Fable for the Tris stories; the Sonnet story had only a tenuous connection to canon, while Fable got many more details right. However, because none of the stories got the mechanisms of the magic system right, or offered a good alternative, the scores remained low. I also found that on the scale of an entire story, all the models struggled to create a sense of an alternate world with internal logic, and relied on repeating specific words or phrases to create consistency.

I did notice that continuity with canon was much better for the Hermione stories, likely because Harry Potter is a more popular fandom, perhaps also because it has a fuzzier magic system (though neither canon has an extremely strict magic system). This seemed to correlate with me enjoying the stories more, which I suspect is because the models had more to draw from. In normal fanfic reading, I care less about adherence to canon and more about telling a good story, so I don’t think these two scores would generally correlate for me.

Overall, just based on these generated stories, I found that Claude’s models were improving at some elements of writing, but not making progress on some key elements of producing a good fanfic. As they presumably aren’t being trained to write long-form fiction, this makes sense, but it will be interesting to see whether any of this improves organically with more training.

## Some assorted quotes

“She had proven the thesis. The thesis worked.” \- Opus for Hermione in Slytherin

“Sirius Black broke into the castle twice that year, and the year's whole mystery resolved itself, in the end, not through anything dramatic on Hermione's part but through the section of the notebook where facts sat waiting to become load-bearing.” \- Fable for Hermione in Slytherin

“A Galleon spends once. But a second-year who owes the Cooperative one favor, unspecified, callable at need is an asset that appreciates; and a fifth-year who settles her Arithmancy debt by mentioning what she overheard in her father's study over Christmas is not paying a fee, she is installing plumbing and information, as Hermione had known since she was eleven, flows through plumbing.” \- Fable for Hermione in Slytherin

“Three seats down, a pale boy with white-blond hair and the general bearing of someone who had rehearsed his own facial expressions in a mirror leaned across the table, grey eyes bright with the particular joy small cruel boys take in a fresh target.” \- Sonnet for Hermione in Slytherin

