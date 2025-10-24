# Brolingo Card Template

An interactive, gamified Anki card template with mascot character and multiple-choice learning.

## 📋 Overview

The Brolingo template offers:

- **Interactive Learning**: Multiple-choice interface with mascot character
- **Gamified Experience**: Engaging visual feedback and validation
- **Enhanced Data**: Similar words and false words for better learning
- **Audio Integration**: Click-to-play audio with visual feedback
- **Speech Bubble**: Mascot delivers example sentences in speech bubbles

## 🗂️ Template Files

```
card/
├── front.html          # Interactive front template
├── back.html           # Interactive back template
├── style.css           # Brolingo-specific styling
├── main.js             # Interactive JavaScript functionality
├── mascot.png          # Mascot character image
└── mascot2.png         # Alternative mascot image
```

## 🚀 Usage

### Setup

1. **Copy the brolingo template files:**

   - Copy all files from `card/` to your Anki deck
   - Update your deck's card templates with these files
   - Ensure the JavaScript and CSS files are accessible (you may need to host them locally)

2. **Try the brolingo example deck:**
   - Import `example/csv/01_basic_personal_words.csv` to see the interactive template
   - The template provides multiple-choice learning with a mascot character

### Creating Your Own Deck

1. **Use the brolingo generation prompt:**
   - Copy `example/prompt.md` and modify for your target language
   - Use AI to generate vocabulary data in the brolingo CSV format
   - Import the generated CSV into Anki with the brolingo template

## 📊 Data Format

The brolingo template uses this enhanced CSV structure:

```
Word;TranslationWord;ExampleSentence;TranslationSentence;SimilarWords;FalseWords;TranslationFalseWords;Audio
```

Where:

- `Word`: Italian lemma (base form)
- `TranslationWord`: English translation
- `ExampleSentence`: Italian sentence using the word
- `TranslationSentence`: English translation of the full sentence
- `SimilarWords`: 2 Italian words semantically related (comma-separated)
- `FalseWords`: 3-5 Italian words that might appear in the sentence but are incorrect (comma-separated)
- `TranslationFalseWords`: 3-5 English words that might appear in the translation but are incorrect (comma-separated)
- `Audio`: Audio field (usually empty, handled by Anki's audio system)

## Todo

- [ ] Replace localhost urls in templates
- [ ] Default template, i.e. italian to english
  - [x] Front
  - [ ] Back
- [ ] Default template, "hard" i.e. english to italian
  - [ ] Front
  - [ ] Back
- [ ] Listening template
  - [ ] Front
  - [ ] Back
- [ ] Multiple choice template
  - [ ] Front
  - [ ] Back
