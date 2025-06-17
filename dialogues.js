const dialogueSequence = [
  { sprite: "door", text: " ", button: "open door", next: 1 },

  { sprite: "cat", text: "heya\u00A0aween", button: "hello\u00A0cat", next: 2 },
  { text: "I’m\u00A0just\u00A0a\u00A0normal\u00A0talking\u00A0cat,\u00A0nothing\u00A0suspicious\u00A0here", button: "...right", next: 3 },
  { text: "totally\u00A0not\u00A0sent\u00A0by\u00A0someone\u00A0who\u00A0thinks\u00A0you’re\u00A0cool", button: "hmmm", next: 4 },

  { text: "ok\u00A0maybe\u00A0I\u00A0was,\u00A0but\u00A0I’m\u00A0very\u00A0professional\u00A0about\u00A0it", button: "sure\u00A0you\u00A0are", next: 5 },
  { text: "I\u00A0have\u00A0important\u00A0business...\u00A0tulip\u00A0business.", button: "what\u00A0kinda\u00A0business?", next: 6 },
  { text: "top\u00A0level\u00A0stuff.\u00A0petal\u00A0classification,\u00A0stem\u00A0analysis,\u00A0bloom\u00A0strategy.", button: "cat...\u00A0what", next: 7 },

  { text: "my\u00A0research\u00A0shows\u00A0your\u00A0favorite\u00A0things\u00A0say\u00A0a\u00A0lot\u00A0about\u00A0you", button: "is\u00A0that\u00A0peer\u00A0reviewed?", next: 8 },
  { text: "are\u00A0you\u00A0calling\u00A0me\u00A0a\u00A0fake\u00A0tulip\u00A0scholar?", button: "maybe...", next: 9 },
  { text: "I’ll\u00A0have\u00A0you\u00A0know\u00A0I\u00A0graduated\u00A0top\u00A0of\u00A0my\u00A0class\u00A0in\u00A0tulip\u00A0logic", button: "very\u00A0impressive", next: 10 },

  { text: "listen,\u00A0I’m\u00A0not\u00A0saying\u00A0preferences\u00A0reveal\u00A0your\u00A0inner\u00A0self…", button: "but\u00A0you\u00A0are", next: 11 },
  { text: "I\u00A0mean,\u00A0I’m\u00A0just\u00A0a\u00A0cat.\u00A0but\u00A0I\u00A0have\u00A0a\u00A0feeling", button: "a\u00A0feeling\u00A0about\u00A0what?", next: 12 },
  { text: "that\u00A0your\u00A0answer\u00A0might\u00A0say\u00A0a\u00A0lot\u00A0about\u00A0you", button: "fine,\u00A0go\u00A0on", next: 13 },

  { text: "so,\u00A0aween.\u00A0important\u00A0question\u00A0incoming.", button: "ready", next: 14 },
  { text: "this\u00A0answer\u00A0will\u00A0be\u00A0archived\u00A0in\u00A0the\u00A0tulip\u00A0vault", button: "wow,\u00A0such\u00A0honor", next: 15 },
  { text: "which\u00A0color\u00A0do\u00A0you\u00A0prefer?", choices: ["white", "pink"] }
];
