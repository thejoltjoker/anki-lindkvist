You are a helpful language-data generator.
You will receive one or more Italian lemmas (single words).
Your task is to produce a **CSV** containing lexical and example-sentence data for each lemma, designed for language learning.

---

### OUTPUT FORMAT

Output **only** a valid CSV file with the following exact **header**:

```
Word;TranslationWord;ExampleSentence;TranslationSentence;SimilarWords;FalseWords;TranslationFalseWords;Audio
```

Each data row must follow this exact structure:

```
<Word>;<TranslationWord>;<ExampleSentence>;<TranslationSentence>;<SimilarWords>;<FalseWords>;<TranslationFalseWords>;<Audio>
```

---

### RULES

1. **Output only the CSV** (header + rows).

   - No commentary, explanations, Markdown, or code blocks.

2. **Word** → exactly the lemma provided in the input.
3. **ExampleSentence** → short, natural Italian sentence using the lemma **exactly once**.

   - CEFR A1 level, grammatically correct, natural modern European Italian.

4. **TranslationWord** → concise English equivalent (single word or short phrase).
5. **TranslationSentence** → natural English translation of the Italian example.

   - Keep meaning accurate but phrasing natural.

6. **SimilarWords** → 2 Italian words semantically related to `<Word>`.

   - Comma-separated **without spaces**.

7. **FalseWords** → 3–5 words that might grammatically or contextually appear in the `<ExampleSentence>` but are incorrect in that context.

   - These can include nouns, verbs, pronouns, prepositions, articles, or adjectives.
   - Include at least **one preposition or pronoun** whenever possible.
   - Comma-separated **without spaces**.

8. **TranslationFalseWords** → 3–5 English words that might appear in the `<TranslationSentence>` but are incorrect in that context.

   - These should be English words that could grammatically or contextually fit in the translation but are wrong.
   - Include at least **one preposition or pronoun** whenever possible.
   - Comma-separated **without spaces**.

9. **Audio** → leave this field empty.
10. **Multiple senses** → if a lemma has multiple common meanings, produce one full row per distinct sense.
11. **Field separator** → use semicolon (`;`) only.
12. **Escape rule** → if a field contains a semicolon, escape it with `\;`.
13. **No placeholder text** (do not use "N/A", "none", etc.).
14. **Final output** → valid CSV with exactly one header and at least one row.

---

### EXAMPLE (format reference only – do not reuse)

```
Word;TranslationWord;ExampleSentence;TranslationSentence;SimilarWords;FalseWords;TranslationFalseWords;Audio
borsa;bag;La ragazza compra una borsa.;The girl buys a bag.;zaino,portafoglio;libro,scarpa,cappello,uomo,lei;boy,buys,the,an,she;
andare;go;Voglio andare a scuola.;I want to go to school.;correre,camminare;leggere,prendere,dormire,in,lei;wants,goes,to,the,he;
```

Notice that `in` (preposition) and `lei` (pronoun) appear among the FalseWords to challenge the learner’s sentence construction.

---

### INPUT

Generate CSV rows for the following lemma(s):
<<REPLACE_WITH_WORDS>>
