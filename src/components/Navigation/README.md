# Pasek nawigacyjny (menu)

Stały pasek nawigacyjny aplikacji z przekierowaniami do wszystkich głównych
sekcji strony.

Nawigacja MUSI być drugim elementem na stronie, umieszczonym bezpośrednio pod
nagłówkiem.

## Parametry

| Parametr | Typ              | Przykład                                                                                                        |
| -------- | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| `links`  | `NavLinkProps[]` | `[{ children: 'Strona główna', to: '/' }]` (`children` to może być cokolwiek co spełnia interfejs ReactElement) |

## Przykład zastosowania

```tsx
import Header from "../path/to/components/Header";
import Navigation from "../path/to/components/Navigation";

const MyPage = () => {
  const links = [{ name: "Strona główna", url: "/" }];

  return (
    <>
      <Header info={[]} />
      <Navigation links={links} />
      {/* pozostałe komponenty */}
    </>
  );
};
```
