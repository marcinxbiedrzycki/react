# Nagłówek

Stały nagłówek z nazwą aplikacji.

Nagłówek MUSI być pierwszym elementem na stronie.

## Parametry

| Parametr | Typ          | Przykład                                                                      |
| -------- | ------------ | ----------------------------------------------------------------------------- |
| `info`   | `BoxProps[]` | `[{ title: 'Podróże', value: '17' }, { title: 'Ostatnia', value: 'Poznań' }]` |

## Przykład zastosowania

```tsx
import Header from "../path/to/components/Header";

const MyPage = () => {
  const info = [
    { title: "Podróże", value: "17" },
    { title: "Ostatnia", value: "Poznań" },
  ];

  return (
    <>
      <Header info={info} />
      {/* pozostałe komponenty */}
    </>
  );
};
```
