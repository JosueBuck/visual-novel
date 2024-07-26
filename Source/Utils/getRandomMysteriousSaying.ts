function getRandomMysteriousSaying() {
    const sayings = [
      "The moon whispers to those who listen.",
      "In the shadow of the old tree, secrets linger.",
      "Stars are the eyes of the universe, watching over us.",
      "A forgotten path holds the key to untold mysteries.",
      "Whispers in the wind carry the truths of the ancient.",
      "The river knows the way, but it will not tell.",
      "Beneath the silent sands, a hidden truth awaits.",
      "In the heart of the storm, silence speaks the loudest.",
      "The night sky holds stories yet to be told.",
      "Where light and shadow meet, fate stands revealed."
    ];
  
    return sayings[Math.floor(Math.random() * sayings.length)];
  }