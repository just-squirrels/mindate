# mindate
Super minimal Date library, inspired by [date-fns](https://date-fns.org/).

## Use
Import individual functions, or use default import. Example (TypeScript):

```typescript
import { addDays, unix } from "@sqrls/mindate"

const twentyDaysFromNow = addDays(new Date(), 20);
const secondsSinceEpoch = unix(new Date());
```
