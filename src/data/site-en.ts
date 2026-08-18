export const featuresEn = [
  {
    number: "01",
    icon: "▦",
    title: "All cards at a glance",
    text: "Add cards from different banks and see which one is best for the purchase in front of you."
  },
  {
    number: "02",
    icon: "◌",
    title: "Import from a screenshot",
    text: "Pick a screenshot from your bank app — Cashkhak recognizes categories and percentages for you."
  },
  {
    number: "03",
    icon: "↗",
    title: "A widget on your Home Screen",
    text: "Current cashback is available without opening the app or digging through a list."
  },
  {
    number: "04",
    icon: "⌕",
    title: "MCC reference",
    text: "Look up a merchant category code and understand which card will work for a purchase."
  }
];

export const faqEn = [
  {
    question: "Do I need an account?",
    answer: "No. Cashkhak works without an account or a server. Your cards and categories stay on your device."
  },
  {
    question: "Which banks are supported?",
    answer: "The directory includes around 60 Russian banks. You can also add another bank manually."
  },
  {
    question: "How does screenshot recognition work?",
    answer: "The app uses Apple Vision Framework to find category names and percentages in a selected image. You can review and edit the result before saving it."
  },
  {
    question: "Does Cashkhak know each bank's terms?",
    answer: "No. Cashkhak stores and organizes the terms you add. Check current loyalty program rules in your bank's official app."
  },
  {
    question: "What devices are supported?",
    answer: "Cashkhak is built for iPhone with iOS 17 or later. The widget comes in small, medium and large sizes."
  }
];

export const privacySectionsEn = [
  {
    title: "Data we process",
    paragraphs: [
      "Cashkhak does not require an account and does not collect personal data. Bank card names, cashback categories and settings are stored locally on the user's device.",
      "When a user selects an image for recognition, the app receives only that image through Apple's PHPicker. It does not request full photo library access."
    ]
  },
  {
    title: "Data sharing",
    paragraphs: [
      "The app does not send user data to a server, use advertising networks or track users across apps and websites.",
      "The widget receives only a local snapshot of the current month's data through the App Group so it can display it on the device."
    ]
  },
  {
    title: "Contact",
    paragraphs: ["For privacy questions, email support@cashkhak.app."]
  }
];
