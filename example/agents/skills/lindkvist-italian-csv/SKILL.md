---
name: lindkvist-italian-csv
description: >
  Generate Lindkvist-style Italian→English Anki CSV rows from Italian lemmas
  (words or short phrases). Use whenever the user asks for Italian flashcards,
  Italian Anki CSV rows, cloze sentences for Italian vocabulary, Lindkvist
  Italiano deck entries, or to append Italian words to an Anki import CSV —
  even if they only paste an Italian word list and say "make cards" or
  "add these". Prefer this skill over free-form CSV inventing whenever the
  output needs Word/ExampleSentence/WordPOS/Translation* columns with
  {{c1::…}} cloze markup for Italian.
---

# Lindkvist Italian CSV

Generate semicolon-separated Anki import rows for Italian vocabulary in the Lindkvist deck format. Difficulty stays in CEFR A1–B2: simple, natural, modern European Italian (no dialect or regional slang).

## Output file

Append rows to a CSV file. Prefer the first match:

1. **User-specified path** (explicit file in the request)
2. **Derived path** from context (open file, recent Lindkvist CSV in the working directory, or a path already used in the conversation)
3. **Default**: `./output.csv`

If the target file does not exist, create it and write the header first, then the data rows. If it exists, append **data rows only** (do not duplicate the header).

Do not write helper scripts or code — produce the CSV data and write/append it directly.

## Exact CSV format

Header (exactly, when creating a new file):

```
Word;ExampleSentence;WordPOS;TranslationWord;TranslationSentence;TTSSentence;Audio;Tags
```

Each data row has **8 fields**, separated by `;`:

| Field | Content |
|-------|---------|
| Word | Form being taught. For verbs, use the **conjugated** form that appears in the cloze — not the infinitive. For other POS, use the lemma as given. |
| ExampleSentence | Short natural Italian sentence containing the target **once**, wrapped in `{{c1::…}}` (inflect inside the cloze if needed). |
| WordPOS | One of: `noun`, `verb`, `adj`, `adv`, `pronoun`, `prep`, `conj`, `article`, `num`, `interj`, plus minimal grammar after commas (gender, number, person, tense). |
| TranslationWord | Concise English gloss of the target. |
| TranslationSentence | Natural English of the whole sentence (literal enough to teach, still fluent). |
| TTSSentence | Same as ExampleSentence with cloze markup removed. |
| Audio | Always empty. |
| Tags | Italian-style tags matching the Lindkvist deck (see below). |

Rules that keep cards importable:

- Escape literal semicolons inside fields as `\;`.
- Multiple common senses → one full row per sense.
- Multiple input words (comma-separated or listed) → rows for each, in order.
- Varied sentences; avoid near-duplicates across rows in the same batch.
- No commentary, markdown fences, or extra fields in the file — only CSV content.

### WordPOS examples

- `noun, feminine, singular`
- `verb, 3rd person singular, presente`
- `verb, 1st person singular, passato prossimo`
- `adj, masculine, plural`
- `prep` / `adv` / `interj` (alone when no extra grammar is needed)

### Tags (match Lindkvist style)

Short Italian labels, lowercase, space-separated — same spirit as the existing decks:

- Nouns: `sostantivo maschile`, `sostantivo femminile` (add `plurale` when plural)
- Adjectives: `aggettivo`
- Adverbs: `avverbio`
- Prepositions: `preposizione`
- Conjunctions: `congiunzione`
- Pronouns: `pronome`
- Interjections: `interiezione`
- Proper nouns: `nome proprio`
- Fixed phrases: `espressione`
- Verbs: `verbo <infinitive>` when the Word is a finite form of that verb (e.g. Word `faccio` → `verbo fare`); use descriptive Italian for tense/person when that is the teaching focus (e.g. `verbo 3 persona singolare passato prossimo`); reflexive → `verbo riflessivo` when appropriate

### Verb Word column

Input may be an infinitive (`andare`) or a finite form (`è stata`). The **Word** field must be the conjugated form taught by the card (the form inside `{{c1::…}}`, normalized for the Word column — typically lowercase unless the form is inherently capitalized mid-sentence rules aside). Do not put bare infinitives in Word when the sentence uses a finite form. If the teaching target truly is the infinitive construction (e.g. after a modal: `Devo {{c1::andare}}…`), Word may be that infinitive and WordPOS `verb, infinitive` with tag `verbo infinito`.

## Workflow

1. Resolve the output path (user → context → `./output.csv`).
2. Parse input lemmas / phrases.
3. For each item (and each sense), build one row following the format above.
4. Create the file with header if needed; otherwise append rows only.
5. Briefly confirm what was appended (path + word count) unless the user asked for silent CSV-only chat output.

## Format example (emulate; do not reuse these sentences)

```
Word;ExampleSentence;WordPOS;TranslationWord;TranslationSentence;TTSSentence;Audio;Tags
borsa;La ragazza ha comprato una {{c1::borsa}}.;noun, feminine, singular;bag;The girl bought a bag.;La ragazza ha comprato una borsa.;;sostantivo femminile
è stata;{{c1::È stata}} una giornata lunga.;verb, 3rd person singular, passato prossimo;be;It was a long day.;È stata una giornata lunga.;;verbo 3 persona singolare passato prossimo
```
