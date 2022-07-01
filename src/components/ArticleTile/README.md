# Kafelek artykułu

Kafelek artykułu wykorzystywany podczas prezentacji dostępnych artykułów
(wpisów) na stronie głównej oraz liście historii artykułów.

## Parametry

| Parametr   | Typ      | Przykład                                 |
| ---------- | -------- | ---------------------------------------- |
| `title`    | `string` | `'Spotkanie z Koziołkami'`               |
| `date`     | `Y-m-d`  | `'2022-03-31'`                           |
| `imageUrl` | `URL`    | `'https://cdn.example.com/article1.jpg'` |

## Przykład zastosowania

```jsx
import ArticleTile from "../path/to/components/ArticleTile";

const MyPage = () => (
  <Tile
    title="Testowy artykuł o Poznaniu"
    date="2022-06-25"
    imageUrl="https://picsum.photos/300/200"
  />
);
```

# Kolekcja (lista) kafelków artykułów

Porządkuje pojedyncze kafelki w kolekcję ułożoną na siatce.

## Parametry

| Parametr         | Typ      | Przykład |
| ---------------- | -------- | -------- |
| wnętrze kolekcji | `Tile[]` | _n/a_    |

## Przykład zastosowania

```jsx
import ArticleTile, {
  ArticleTileList,
} from "../path/to/components/ArticleTile";

const MyPage = () => (
  <ArticleTileList>
    <Tile
      title="Testowy artykuł o Poznaniu"
      date="2022-06-25"
      imageUrl="https://picsum.photos/300/200"
    />
    <Tile
      title="Testowy artykuł o Wrocławiu"
      date="2022-06-30"
      imageUrl="https://picsum.photos/300/200"
    />
  </ArticleTileList>
);
```
