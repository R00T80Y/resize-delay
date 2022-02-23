## Install
```
npm install @r00t80y/resize-delay
```

## How to use?
```
<script src="node_modules/@r00t80y/resize-delay/dist/ResizeDelay.lib.js"></script>
<script>
window.onload = function() {
  (new window.ResizeDelay(1000))
    .add(function () {
      console.log('Resize Event whit delay 1s');
    });
};
</script>
```

### NPM
Add callback
```
import ResizeDelay from '@r00t80y/resize-delay';

(new ResizeDelay(1000))
  .add(function () {
    console.log('Resize Event whit delay 1s');
  });
```

Remove callback
```
import ResizeDelay from '@r00t80y/resize-delay';

// Add
const resizeDelayRemove = (new ResizeDelay(1000))
  .add(function () {
    console.log('Resize Event whit delay 1s');
  });

// Remove
resizeDelayRemove();
```

Global delay
```
import ResizeDelay from '@r00t80y/resize-delay';

const delay = 777;
new ResizeDelay(delay);

// Add
const resizeDelayRemove = (new ResizeDelay())
  .add(function () {
    console.log('Resize Event whit delay 777ms');
  });

```

### Global Object
```
window.ResizeDelay._instance;
```
Calling a method
```
window.ResizeDelay.resize();
```

## Files
```
./dist/cjs/index.js - (CommonJS Module)
./dist/esm/index.js - (ES Module)
./dist/umd/index.js - (UMD Module)

./src/ResizeDelay.js - (Source Code)

./dist/ResizeDelay.js - (Babel + Corejs)
```
