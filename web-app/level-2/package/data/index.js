import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId()
];

export const users = [
  { _id: userIds[0], firstName: "Jenna", lastName: "", email: "jenna@email.com", password: "$2a$12$OEw4X/g5yhMORQsgbEuDcO5WzCkgEAnpRw7iDPE4ojqIsYfYL44ma", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 14561, impressions: 888822, createdAt: 1115211422, updatedAt: 1115211422, __v: 0, },

  { _id: userIds[1], firstName: "Emily", lastName: "", email: "emily@email.com", password: "$2a$12$5t3zG7OLlTj5r5q5g5h5i5O5n5y5m5w5x5j5c5v5b5n5m5k5l5x5", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 28743, impressions: 543129, createdAt: 1625147829, updatedAt: 1625147829, __v: 0, },
  
  { _id: userIds[2], firstName: "Sarah", lastName: "", email: "sarah@email.com", password: "$2a$12$9q8w7e6r5t4y3u2i1o0p9a8s7d6f5g4h3j2k1l0z9x8c7v6b5n4m", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 19320, impressions: 782146, createdAt: 1593680291, updatedAt: 1593680291, __v: 0, },
  
  { _id: userIds[3], firstName: "Emma", lastName: "", email: "emma@email.com", password: "$2a$12$3e4d5c6v7b8n9m0q1w2e3r4t5y6u7i8o9p0a1s2d3f4g5h6j7k8l", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 8461, impressions: 321987, createdAt: 1647892345, updatedAt: 1647892345, __v: 0, },
  
  { _id: userIds[4], firstName: "Sophia", lastName: "", email: "sophia@email.com", password: "$2a$12$8w9e0r1t2y3u4i5o6p7a8s9d0f1g2h3j4k5l6z7x8c9v0b1n2m3", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 6798, impressions: 214569, createdAt: 1578234109, updatedAt: 1578234109, __v: 0, },
  
  { _id: userIds[5], firstName: "Olivia", lastName: "", email: "olivia@email.com", password: "$2a$12$1q2w3e4r5t6y7u8i9o0p1a2s3d4f5g6h7j8k9l0z1x2c3v4b5n6m", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 12345, impressions: 567890, createdAt: 1609876543, updatedAt: 1609876543, __v: 0, },
  
  { _id: userIds[6], firstName: "Lily", lastName: "", email: "lily@email.com", password: "$2a$12$9a8s7d6f5g4h3j2k1l0z9x8c7v6b5n4m3q2w1e0r9t8y7u6i5o4p", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 54321, impressions: 987654, createdAt: 1587654321, updatedAt: 1587654321, __v: 0, },
  
  { _id: userIds[7], firstName: "Sienna", lastName: "", email: "sienna@email.com", password: "$2a$12$5n4m3l2k1j0h9g8f7d6s5a4p3o2i1u0y9t8r7e6w5q4l3k2j1h0g", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 24680, impressions: 135792, createdAt: 1603456789, updatedAt: 1603456789, __v: 0, },
  
  { _id: userIds[8], firstName: "Lauren", lastName: "", email: "lauren@email.com", password: "$2a$12$7h6j5k4l3m2n1p0o9i8u7y6t5r4e3w2q1a0s9d8f7g6h5j4k3l2m", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 97531, impressions: 864209, createdAt: 1619283746, updatedAt: 1619283746, __v: 0, },
  
  { _id: userIds[9], firstName: "Ava", lastName: "", email: "ava@email.com", password: "$2a$12$3n2m1l0k9j8h7g6f5d4s3a2p1o0i9u8y7t6r5e4w3q2a1s0d9f8g", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 13579, impressions: 246810, createdAt: 1631234567, updatedAt: 1631234567, __v: 0, },
  
  { _id: userIds[10], firstName: "Scarlett", lastName: "", email: "scarlett@email.com", password: "$2a$12$7d6f5g4h3j2k1l0m9n8b7v6c5x4z3a2s1d0f9g8h7j6k5l4m3n2b", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 86420, impressions: 753159, createdAt: 1598765432, updatedAt: 1598765432, __v: 0, },
  
  { _id: userIds[11], firstName: "Violet", lastName: "", email: "violet@email.com", password: "$2a$12$1a2s3d4f5g6h7j8k9l0z1x2c3v4b5n6m7q8w9e0r1t2y3u4i5o6p", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 38295, impressions: 481706, createdAt: 1584012345, updatedAt: 1584012345, __v: 0, },
  
  { _id: userIds[12], firstName: "Hannah", lastName: "", email: "hannah@email.com", password: "$2a$12$5q4w3e2r1t0y9u8i7o6p5a4s3d2f1g0h9j8k7l6z5x4c3v2b1n0m", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 61728, impressions: 395184, createdAt: 1606543210, updatedAt: 1606543210, __v: 0, },
  { _id: userIds[13], firstName: "Avery", lastName: "", email: "avery@email.com", password: "$2a$12$9m8n7b6v5c4x3z2a1q0w9e8r7t6y5u4i3o2p1a0s9d8f7g6h5j4k", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 23456, impressions: 789012, createdAt: 1612345678, updatedAt: 1612345678, __v: 0, },

  { _id: userIds[14], firstName: "Chloe", lastName: "", email: "chloe@email.com", password: "$2a$12$3l4k5j6h7g8f9d0s1a2z3x4c5v6b7n8m9q0w1e2r3t4y5u6i7o8p", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 34567, impressions: 901234, createdAt: 1623456789, updatedAt: 1623456789, __v: 0, },

  { _id: userIds[15], firstName: "Zoe", lastName: "", email: "zoe@email.com", password: "$2a$12$7b6v5c4x3z2a1q0w9e8r7t6y5u4i3o2p1a0s9d8f7g6h5j4k3l2m", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 45678, impressions: 123456, createdAt: 1634567890, updatedAt: 1634567890, __v: 0, },

  { _id: userIds[16], firstName: "Mia", lastName: "", email: "mia@email.com", password: "$2a$12$1n0m9l8k7j6h5g4f3d2s1a0z9x8c7v6b5n4m3l2k1j0h9g8f7d6s", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 56789, impressions: 234567, createdAt: 1645678901, updatedAt: 1645678901, __v: 0, },

  { _id: userIds[17], firstName: "Ella", lastName: "", email: "ella@email.com", password: "$2a$12$5t4r3e2w1q0o9i8u7y6t5r4e3w2q1a0s9d8f7g6h5j4k3l2z1x0c", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 67890, impressions: 345678, createdAt: 1656789012, updatedAt: 1656789012, __v: 0, },

  { _id: userIds[18], firstName: "Grace", lastName: "", email: "grace@email.com", password: "$2a$12$9k8j7h6g5f4d3s2a1z0x9c8v7b6n5m4l3k2j1h0g9f8d7s6a5z4x", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 78901, impressions: 456789, createdAt: 1667890123, updatedAt: 1667890123, __v: 0, },

  { _id: userIds[19], firstName: "Aubrey", lastName: "", email: "aubrey@email.com", password: "$2a$12$3c2b1a0z9x8v7c6b5n4m3a2s1d0f9g8h7j6k5l4q3w2e1r0t9y8u", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 89012, impressions: 567890, createdAt: 1678901234, updatedAt: 1678901234, __v: 0, },

  { _id: userIds[20], firstName: "Evelyn", lastName: "", email: "evelyn@email.com", password: "$2a$12$7v6c5x4z3a2s1d0f9g8h7j6k5l4q3w2e1r0t9y8u7i6o5p4n3m2l", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 90123, impressions: 678901, createdAt: 1689012345, updatedAt: 1689012345, __v: 0, },

  { _id: userIds[21], firstName: "Aria", lastName: "", email: "aria@email.com", password: "$2a$12$1b0a9z8x7c6v5b4n3m2a1s0d9f8g7h6j5k4l3q2w1e0r9t8y7u6i", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 12345, impressions: 789012, createdAt: 1690123456, updatedAt: 1690123456, __v: 0, },

  { _id: userIds[22], firstName: "Bella", lastName: "", email: "bella@email.com", password: "$2a$12$5x4z3c2v1b0n9m8a7s6d5f4g3h2j1k0l9q8w7e6r5t4y3u2i1o0p", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 23456, impressions: 890123, createdAt: 1701234567, updatedAt: 1701234567, __v: 0, },

  { _id: userIds[23], firstName: "Stella", lastName: "", email: "stella@email.com", password: "$2a$12$9z8x7c6v5b4n3m2a1s0d9f8g7h6j5k4l3q2w1e0r9t8y7u6i5o4p", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 34567, impressions: 901234, createdAt: 1712345678, updatedAt: 1712345678, __v: 0, },

  { _id: userIds[24], firstName: "Ruby", lastName: "", email: "ruby@email.com", password: "$2a$12$3a2s1d0f9g8h7j6k5l4q3w2e1r0t9y8u7i6o5p4n3m2b1v0c9x8z", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 45678, impressions: 123456, createdAt: 1723456789, updatedAt: 1723456789, __v: 0, },

  { _id: userIds[25], firstName: "Vivian", lastName: "", email: "vivian@email.com", password: "$2a$12$7c6v5b4n3m2a1s0d9f8g7h6j5k4l3q2w1e0r9t8y7u6i5o4p3n2m", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 56789, impressions: 234567, createdAt: 1734567890, updatedAt: 1734567890, __v: 0, },

  { _id: userIds[26], firstName: "Hazel", lastName: "", email: "hazel@email.com", password: "$2a$12$1q0w9e8r7t6y5u4i3o2p1a0s9d8f7g6h5j4k3l2z1x0c9v8b7n6m", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 67890, impressions: 345678, createdAt: 1745678901, updatedAt: 1745678901, __v: 0, },

  { _id: userIds[27], firstName: "Piper", lastName: "", email: "piper@email.com", password: "$2a$12$5r4e3w2q1a0s9d8f7g6h5j4k3l2z1x0c9v8b7n6m5q4w3e2r1t0y", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 78901, impressions: 456789, createdAt: 1756789012, updatedAt: 1756789012, __v: 0, },

  { _id: userIds[28], firstName: "Quinn", lastName: "", email: "quinn@email.com", password: "$2a$12$9t8y7u6i5o4p3n2m1b0v9c8x7z6a5s4d3f2g1h0j9k8l7q6w5e4r", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 89012, impressions: 567890, createdAt: 1767890123, updatedAt: 1767890123, __v: 0, },

  { _id: userIds[29], firstName: "Willow", lastName: "", email: "willow@email.com", password: "$2a$12$3n2m1q0p9o8i7u6y5t4r3e2w1q0p9o8i7u6y5t4r3e2w1q0p9o8", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 90123, impressions: 678901, createdAt: 1778901234, updatedAt: 1778901234, __v: 0, },

  { _id: userIds[30], firstName: "Jade", lastName: "", email: "jade@email.com", password: "$2a$12$7j6h5g4f3d2s1a0z9x8c7v6b5n4m3q2w1e0r9t8y7u6i5o4p3n2m", picturePath: "", friends: [], location: "Phoenix, AZ", occupation: "Student", viewedProfile: 12345, impressions: 789012, createdAt: 1789012345, updatedAt: 1789012345, __v: 0, },
];

export const posts = [
    { _id: new mongoose.Types.ObjectId(), userId: userIds[0],
        firstName: "Jenna", lastName: "", location: "Phoenix, AZ", description: "Just finished my essay for English class, and I'm pretty proud of it! Can't wait to turn it in tomorrow.", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[4], true], [userIds[7], true], [userIds[9], true], ]), comments: [ "Great job, Sarah! I'm sure you'll get an A!", "Can you proofread mine too? I'm struggling with the conclusion.", ], },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Jenna",
    lastName: "",
    location: "Phoenix, AZ",
    description: "Sduwb dw Pdlq Vwuhhw! 🎉 \n I've got something exciting planned! ",
    picturePath: "",
    userPicturePath: "",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "Jenna, did you see what Emily posted in the group chat? Seems like she's onto something."
    ],
    feedVisible: false
  },
  

{ _id: new mongoose.Types.ObjectId(), userId: userIds[17], firstName: "Ella", lastName: "", location: "Phoenix, AZ", description: "Found Sarah's notebook, but it looks like a page is missing. What was on it, Sarah? 👀", picturePath: "post3.jpeg", userPicturePath: "", likes: new Map([ [userIds[0], true], [userIds[3], true], [userIds[6], true], ]), comments: [ "Missing page, you say? Interesting... Chloe and me might have found something that could crack this whole thing wide open." ], feedVisible: false},


{ _id: new mongoose.Types.ObjectId(), userId: userIds[14], firstName: "Chloe", lastName: "", location: "Phoenix, AZ", description: "Look what I found. ", picturePath: "post4.jpeg", userPicturePath: "", likes: new Map([ [userIds[2], true], [userIds[9], true], [userIds[13], true], ]), comments: [ ], feedVisible: false },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[5],
    firstName: "Olivia", lastName: "", location: "Phoenix, AZ", description: "Just finished binge-watching the latest season of Stranger Things. No spoilers, but wow!", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[3], true], [userIds[7], true], [userIds[15], true], ]), comments: [ "I'm only halfway through! Don't tell me anything!", "I can't wait to watch it. I've heard so many good things.", ], },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[5],
    firstName: "Olivia", lastName: "", location: "Phoenix, AZ", description: "I'm thinking about adopting a puppy. Any suggestions on breeds?", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[0], true], [userIds[4], true], [userIds[11], true], ]), comments: [ "Golden Retrievers are the best! They're so friendly and easy to train.", "I've always been a fan of Huskies, but they require a lot of exercise.", ], },
{ _id: new mongoose.Types.ObjectId(), userId: userIds[1],
    firstName: "Emily", lastName: "", location: "Phoenix, AZ", description: "I'm so excited for the school dance next week! What's everyone wearing?", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[1], true], [userIds[6], true], [userIds[19], true], ]), comments: [ "I found the perfect dress at the mall last weekend. It's blue and sparkly!", "I'm still looking for a suit. Any recommendations?", ], },
{
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Emily",
    lastName: "",
    location: "Phoenix, AZ",
    description:
        "Found this weird symbol in the library today. Wonder what it means. ",
    picturePath: "post1.jpeg",
    userPicturePath: "",
    likes: new Map([
        [userIds[7], true],
        [userIds[4], true],
        [userIds[1], true],
        [userIds[2], true],
    ]),
    comments: [
        "Whoa, that looks just like the one Sarah drew in his notebook the other day!",
    ],
    feedVisible: false
    },
{ _id: new mongoose.Types.ObjectId(), userId: userIds[1],
    firstName: "Emily", lastName: "", location: "Phoenix, AZ", description: "Just got back from a hike in the mountains. The views were breathtaking!", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[3], true], [userIds[9], true], [userIds[22], true], ]), comments: [ "I love hiking! Which trail did you take?", "Did you see any wildlife? I've heard there are bears in that area.", ], },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[2],
    firstName: "Sarah", lastName: "", location: "Phoenix, AZ", description: "L'p pdnlqj wkh sduwb sodqqlqj fkhfnolvw exw irujrw zkr zdv lq-fkdujh ri wkh fdnh. Grhv dqbrqh nqrzv zkr lw lv?!", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[1], true], [userIds[6], true], [userIds[19], true], ]), comments: ["I think it was Sienna? You should talk to her!"], },
{
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    firstName: "Sarah",
    lastName: "",
    location: "Phoenix, AZ",
    description:
      "Haha, you guys are overthinking it. It's just a doodle. ",
    picturePath: "",
    userPicturePath: "",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "I don't know, Sarah. Didn't you mention something about this to Emma? "
    ],
    feedVisible: false
  },
{ _id: new mongoose.Types.ObjectId(), userId: userIds[3],
    firstName: "Emma", lastName: "", location: "Phoenix, AZ", description: " It's been so hard not to spill the beans about the party.", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[2], true], [userIds[5], true], [userIds[16], true], ]), comments: [ "I know, right? We're master secret-keepers! ", ], },
{
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Emma",
    lastName: "",
    location: "Phoenix, AZ",
    description:
      "Guys, focus. We've got a job to do. ",
    picturePath: "",
    userPicturePath: "",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "Wait, didn't Sophia say he had a way to make our messages uncrackable?"
    ],
    feedVisible: false
  },
  { _id: new mongoose.Types.ObjectId(),userId: userIds[4],
    firstName: "Sophia", lastName: "", location: "Phoenix, AZ", description: "Just had the most amazing pizza at that new place downtown. You guys have to try it!", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[1], true], [userIds[5], true], [userIds[10], true], ]), comments: [ "I've been meaning to go there! What toppings did you get?", "I'm more of a pasta person, but I'll give it a shot!", ], },
{ _id: new mongoose.Types.ObjectId(), userId: userIds[4],
    firstName: "Sophia", lastName: "", location: "Phoenix, AZ", description: "I'm so tired of studying for finals. I can't wait for summer break!", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[1], true], [userIds[8], true], [userIds[24], true], ]), comments: [ "Same here. I have three exams next week!", "Just think about all the fun stuff we'll do this summer. It'll be worth it!", ], },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[4],
        firstName: "Sophia",
        lastName: "",
        location: "Phoenix, AZ",
        description:
          "Been working on this foolproof encryption method. No one will ever figure it out.",
        picturePath: "post2.jpeg",
        userPicturePath: "",
        likes: new Map([
          [userIds[1], true],
          [userIds[3], true],
          [userIds[5], true],
          [userIds[7], true],
        ]),
        comments: [
          "Are you sure it is foolproof, Sophia? Olivia mentioned she lost her notebook with all the details, we might be in trouble!",
        ],
        feedVisible: false
      },

    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[5],
        firstName: "Olivia",
        lastName: "",
        location: "Phoenix, AZ",
        description:
            " Guys, I can't find my notebook anywhere! It has all our plans in it. I'm so screwed if someone finds it!",
        picturePath: "",
        userPicturePath: "",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
        ]),

        comments: [
            "Whoa, Olivia, calm down. Didn't Ella say she found a notebook earlier?",
        ],
        feedVisible: false
    },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[5],
    firstName: "Olivia", lastName: "", location: "Phoenix, AZ", description: "Duh zh vwloo rq iru wkh vkrsslqj wuls? 🛍️ Just checking in about our weekend plans. ", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[0], true], [userIds[4], true], [userIds[12], true], ]), comments: [ "Absolutely! I'll be there with bells on. ", "HERE" ], },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[11], firstName: "Violet", lastName: "", location: "Phoenix, AZ", description: "I'm thinking about dying my hair purple. Thoughts?", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[3], true], [userIds[9], true], [userIds[17], true], ]), comments: [ "That would look so cool! Go for it!", "Maybe start with a temporary dye to see if you like it?", ], },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[18], firstName: "Grace", lastName: "", location: "Phoenix, AZ", description: "Just finished my first 5K race! I'm so proud of myself.", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[1], true], [userIds[6], true], [userIds[23], true], ]), comments: [ "Congratulations, Grace! That's a huge accomplishment.", "I've been thinking about training for a race too. Any tips?", ], },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[29], firstName: "Willow", lastName: "", location: "Phoenix, AZ", description: "I'm in need of some new music recommendations. What's everyone listening to lately?", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[2], true], [userIds[7], true], [userIds[14], true], ]), comments: [ "I've been really into indie rock lately. Have you heard of The Struts?", "I'm always down for some classic hip-hop. Nas and Jay-Z are my go-tos.", ], },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[24], firstName: "Ruby", lastName: "", location: "Phoenix, AZ", description: "Just had the worst day ever. I spilled coffee all over my favorite shirt this morning.", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[0], true], [userIds[5], true], [userIds[20], true], ]), comments: [ "Oh no! Have you tried using stain remover?", "That's the worst. Hopefully the rest of your day goes better!", ], },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[19], firstName: "Aubrey", lastName: "", location: "Phoenix, AZ", description: "I'm thinking about starting a vegetable garden in my backyard. Any green thumbs out there with advice?", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[3], true], [userIds[8], true], [userIds[16], true], ]), comments: [ "Start with easy plants like tomatoes and lettuce. They're pretty low maintenance.", "Make sure you have good soil and plenty of sunlight. And don't forget to water regularly!", ], },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[7], firstName: "Sienna", lastName: "", location: "Phoenix, AZ", description: "Iodyru vxjjhvwlrqv iru wkh fdnh?", picturePath: "post5.jpeg", userPicturePath: "", likes: new Map([ [userIds[1], true], [userIds[9], true], [userIds[22], true], ]), comments: [ "Chocolate is always a crowd-pleaser! "], },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[26], firstName: "Hazel", lastName: "", location: "Phoenix, AZ", description: "I'm in need of a good book recommendation. What's the best thing you've read lately?", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[0], true], [userIds[4], true], [userIds[13], true], ]), comments: [ "I just finished 'The Silent Patient' by Alex Michaelides. It's a psychological thriller and it was so good!", "If you're into romance, 'The Kiss Quotient' by Helen Hoang is a must-read.", ], },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[15], firstName: "Zoe", lastName: "", location: "Phoenix, AZ", description: "Just adopted the cutest kitten from the shelter. I think I'll name her Luna.", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[2], true], [userIds[7], true], [userIds[19], true], ]), comments: [ "Aww, I love that name! Congrats on your new furry friend.", "Post pics ASAP! We need to see this cutie.", ], },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[22], firstName: "Bella", lastName: "", location: "Phoenix, AZ", description: "I'm thinking about trying out for the school play. Should I go for the lead role or start with something smaller?", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[1], true], [userIds[6], true], [userIds[18], true], ]), comments: [ "Go big or go home! You've got the talent for a lead role.", "Maybe start with a supporting role to get some experience? But either way, you'll do great!", ], },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[16], firstName: "Mia", lastName: "", location: "Phoenix, AZ", description: "Just had the most amazing avocado toast at that new brunch spot downtown. Highly recommend!", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[0], true], [userIds[5], true], [userIds[21], true], ]), comments: [ "I love avocado toast! Was it expensive?", "I've been meaning to try that place. Thanks for the recommendation!", ], },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[13], firstName: "Avery", lastName: "", location: "Phoenix, AZ", description: "I'm so excited for the new Marvel movie coming out next month. Who wants to come with me to the premiere?", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[2], true], [userIds[8], true], [userIds[17], true], ]), comments: [ "I'm in! Let's get tickets ASAP.", "I heard it's going to be even better than the last one. Can't wait!", ], },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[10], firstName: "Scarlett", lastName: "", location: "Phoenix, AZ", description: "Just finished my first week at my new job. It's been a lot to learn but I'm excited for the opportunity.", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[1], true], [userIds[6], true], [userIds[23], true], ]), comments: [ "Congrats on the new job! You're going to do great.", "The first week is always the hardest. It'll get easier from here!", ], },

{ _id: new mongoose.Types.ObjectId(), userId: userIds[9], firstName: "Ava", lastName: "", location: "Phoenix, AZ", description: "I'm thinking about getting a tattoo. Any design ideas?", picturePath: "", userPicturePath: "", likes: new Map([ [userIds[0], true], [userIds[4], true], [userIds[14], true], ]), comments: [ "I've always loved floral designs. Maybe something with roses?", "What about a meaningful quote or phrase? Those are always cool.", ], },
];
