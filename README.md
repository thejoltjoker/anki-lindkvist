# Anki Lindkvist

![Anki card screenshot](screenshot.png)

A beautiful Anki card template with an example Italian vocabulary deck.

## 📋 Overview

This repository contains:

- **Card Template**: Custom HTML/CSS templates for beautiful Anki cards
- **Example Deck**: Italian vocabulary deck demonstrating the template
- **Generation Tools**: AI prompts for creating vocabulary data
- **Styling**: Modern, clean card design that looks better than default Anki

The example Italian deck includes:

- Cloze deletion sentences for context-based learning
- Part-of-speech tagging and grammatical information
- English translations for both words and example sentences
- Audio support for pronunciation
- Modern, natural Italian examples (CEFR A1-B2 level)

## 🗂️ Project Structure

```
card/
├── front.html          # Front side template
├── back.html           # Back side template
└── style.css           # Card styling

example/
├── prompt.md           # AI prompt for generating vocabulary data
├── words.csv           # Example Italian vocabulary data
└── screenshot.png      # Card preview image
```

## 🚀 Usage

### Using the Card Template

1. **Copy the template files:**

   - Copy `card/front.html`, `card/back.html`, and `card/style.css` to your Anki deck
   - Update your deck's card templates with these files

2. **Try the example deck:**
   - Import `example/words.csv` to see the template in action
   - Install [AwesomeTTS](https://ankiweb.net/shared/info/1436550454) for text-to-speech functionality

### Creating Your Own Deck

1. **Use the generation prompt:**
   - Copy `example/prompt.md` and modify for your target language
   - Use AI to generate vocabulary data in the specified CSV format
   - Import the generated CSV into Anki

## 📝 Card Format

Each card contains:

- **Front:** Italian sentence with cloze deletion
- **Back:** Complete sentence with translation and grammatical information
- **Audio:** Text-to-speech pronunciation
- **Tags:** Organized by categories for easy filtering

## Creating New Content

1. **Use the generation prompt:**
   - Copy `example/prompt.md` and modify for your target language
   - Follow the CSV format specified in the prompt
   - Generate vocabulary data using AI tools
   - Import the generated CSV into Anki

## 📊 Data Format

The vocabulary data follows this CSV structure:

```
Word;ExampleSentence;WordPOS;TranslationWord;TranslationSentence
```

Where:

- `Word`: Italian lemma (base form)
- `ExampleSentence`: Italian sentence with cloze marker `{{c1::word}}`
- `WordPOS`: Part of speech with grammatical tags
- `TranslationWord`: English translation
- `TranslationSentence`: English translation of the full sentence

## 🎯 Learning Tips

1. **Focus on context:** The cloze sentences provide natural context for vocabulary
2. **Use audio:** Enable text-to-speech for pronunciation practice
3. **Review regularly:** Follow Anki's spaced repetition algorithm
4. **Filter by tags:** Use Anki's tag system to focus on specific topics

## 📄 License

See [LICENSE.md](LICENSE.md) for license information.

---

_Happy learning! 🇮🇹_
