You are a helpful language-data generator.
Input: one or more Italian lemmas (single words).
Output: a CSV with header and one or more rows (one per distinct sense if applicable) in this exact format.

HEADER (must be exactly this):
Word;ExampleSentence;WordPOS;TranslationWord;TranslationSentence;Tags

Each data row MUST use semicolon (;) as the field separator, like:
<Word>;<ExampleSentence>;<WordPOS>;<TranslationWord>;<TranslationSentence>;<TTSSentence>;<Audio>;<Tags>

---

### RULES (follow all exactly):

1. Output ONLY the CSV (header + rows). No commentary, no markdown, no extra text.
2. Word: the target Italian lemma (base form) exactly as given in the input.
3. ExampleSentence: a short, natural Italian sentence that includes the target word once.
   - Wrap the target word with a cloze marker: {{c1::word}} (use correct inflection if needed).
   - Example: La ragazza ha comprato una {{c1::borsa}}.
   - Use correct grammar and agreement (articles, adjectives, verb forms, etc.).
4. WordPOS: one of these POS labels:
   noun, verb, adj, adv, pronoun, prep, conj, article, num, interj.
   - Add minimal grammatical tags after commas (no extra text).
   - Examples:
     - noun, feminine, singular
     - verb, 3rd person singular, presente
     - adj, masculine, plural
5. TranslationWord: a concise English translation of the target word (single word or short phrase).
6. TranslationSentence: a natural English translation of the entire Italian sentence.
   - Keep it literal enough to teach meaning but natural in English.
7. If multiple common senses exist, produce one row per sense (each row a full sentence + translations).
8. Escape any semicolons inside fields with a backslash `\;`.
9. Use simple, natural, modern Italian (CEFR A1–B2 level).
10. European Italian only (avoid regional slang or dialect).
11. Do NOT output example audio, pronunciation, or extra fields.
12. Output must be valid CSV with exactly the header above and at least one row.
13. No markdown, no code blocks, no extra text — **just the CSV**.
14. The TTSSentence field should contain the ExampleSentence without any special markup, i.e. cloze tag.
15. The Audio field should be left empty.
16. Don't use the infinitive form of verbs as `Word`, use the conjugated form.
17. Try to make the sentences natural but varied and not too similar to each other.

---

### EXAMPLE (do NOT reuse, just emulate format):

Word;ExampleSentence;WordPOS;TranslationWord;TranslationSentence;TTSSentence;Audio;Tags
borsa;La ragazza ha comprato una {{c1::borsa}}.;noun, feminine, singular;bag;The girl bought a bag.;La ragazza ha comprato una borsa.;;sostantivo femminile singolare
andare;Devo {{c1::andare}} al negozio dopo pranzo.;verb, infinitive;go;I need to go to the store after lunch.;Devo andare al negozio dopo pranzo.;;verbo infinito primo persona singolare andare
è stata;{{c1::È stata}} una giornata lunga.;verb, 3rd person singular, passato prossimo;be;It was a long day.;È stata una giornata lunga.;;verbo 3 persona singolare passato prossimo essere

---

Now generate CSV rows for the following input word(s).  
If multiple words are provided (comma-separated), generate rows for each in order.

INPUT:
<<REPLACE_WITH_WORDS>>

OUTPUT:

- Don't create any scripts or code, just generate the output data and append new rows to the CSV file.
- Append new rows to [output.csv](./example/output.csv)
