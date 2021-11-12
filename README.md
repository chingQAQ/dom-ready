# Dom ready

## Usage

Clone this repo.
```
git clone git@github.com:chingQAQ/dom-ready.git
```

Create the instance before include the dom ready module.
```
import { DomReady } from '<your module path>';

const readyToRender = new DomReady(document)
```

Use the main call back into dom ready interface at `afterOnLoaded` method.
```
readyToRender.afterOnLoaded(initApp);

function initApp() {
	/* do something */
}
```

